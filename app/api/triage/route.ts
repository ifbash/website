import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { callerIp, check, record, snapshot } from '@/lib/ai-limits';
import { CATEGORIES, simulateTriage, type TriageResult } from '@/lib/triage';

/**
 * Live ServiceNow triage — classifies a visitor's own ticket text.
 *
 * Shares the spend guards in lib/ai-limits.ts with /api/chat on purpose: one
 * budget across every public AI endpoint, so adding a demo cannot quietly
 * double the ceiling.
 *
 * Without ANTHROPIC_API_KEY this returns `simulated: true` and the keyword
 * classifier from lib/triage.ts, which the UI labels plainly.
 */

const MODEL = process.env.TRIAGE_MODEL || process.env.CHAT_MODEL || 'claude-haiku-4-5';
const MAX_TICKET_CHARS = 1200;
const MAX_BODY_BYTES = 8_000;

const SYSTEM_PROMPT = `You are a ServiceNow service-desk triage agent. You read one inbound ticket and classify it the way an experienced service-desk analyst would.

Rules:
- Judge impact and urgency SEPARATELY. Impact is how many people/how much of the business is affected. Urgency is how fast it must move. 1 = High, 2 = Medium, 3 = Low. Do not conflate an angry tone with high urgency.
- Do NOT output a priority. Priority is derived from the impact/urgency matrix by the platform, not by you.
- assignmentGroup must be a plausible ITIL service-desk queue name (e.g. "Desktop Support", "Network Operations", "Identity & Access Management", "Application Support", "Workplace Services").
- summary is one short line an analyst would put in the short description field.
- draftReply is the first response to the requester: 2-3 sentences, plain text, acknowledging the specific situation. Never promise a fix time. Never invent a ticket number or a person's name.
- reasoning is one sentence explaining why you set impact and urgency where you did.
- Be honest when a ticket is vague: say so in reasoning rather than inventing detail.`;

const SCHEMA = {
  type: 'object',
  properties: {
    category: { type: 'string', enum: [...CATEGORIES] },
    subcategory: { type: 'string' },
    impact: { type: 'integer', enum: [1, 2, 3] },
    urgency: { type: 'integer', enum: [1, 2, 3] },
    assignmentGroup: { type: 'string' },
    isMajorIncident: { type: 'boolean' },
    sentiment: { type: 'string', enum: ['calm', 'frustrated', 'urgent'] },
    summary: { type: 'string' },
    draftReply: { type: 'string' },
    reasoning: { type: 'string' },
  },
  required: [
    'category', 'subcategory', 'impact', 'urgency', 'assignmentGroup',
    'isMajorIncident', 'sentiment', 'summary', 'draftReply', 'reasoning',
  ],
  additionalProperties: false,
} as const;

export async function POST(request: Request) {
  let ticket: string;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, simulated: false, error: 'Ticket too long' }, { status: 413 });
    }
    const body = JSON.parse(raw);
    ticket = typeof body.ticket === 'string' ? body.ticket.trim().slice(0, MAX_TICKET_CHARS) : '';
  } catch {
    return NextResponse.json({ ok: false, simulated: false, error: 'Invalid request' }, { status: 400 });
  }

  if (ticket.length < 15) {
    return NextResponse.json(
      { ok: false, simulated: false, error: 'Give me a sentence or two to work with.' },
      { status: 400 },
    );
  }

  // No key configured — labelled simulation, no quota consumed.
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ ok: true, simulated: true, result: simulateTriage(ticket) });
  }

  const ip = callerIp(request);
  const verdict = check(ip);
  if (!verdict.ok) {
    if (verdict.reason === 'global') {
      console.warn('[triage] daily cap reached — serving simulation', snapshot());
      return NextResponse.json({ ok: true, simulated: true, result: simulateTriage(ticket) });
    }
    return NextResponse.json(
      { ok: false, simulated: false, error: 'You have run a few of these — give it a minute.' },
      { status: 429, headers: { 'Retry-After': String(verdict.retryAfterSeconds) } },
    );
  }
  record(ip);

  try {
    const client = new Anthropic();
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 700,
      system: SYSTEM_PROMPT,
      output_config: { format: { type: 'json_schema', schema: SCHEMA } },
      messages: [{ role: 'user', content: `Triage this ticket:\n\n${ticket}` }],
    });

    if (message.stop_reason === 'refusal') {
      return NextResponse.json({ ok: true, simulated: true, result: simulateTriage(ticket) });
    }

    const block = message.content.find((b) => b.type === 'text');
    if (!block || block.type !== 'text') throw new Error('no text block');
    const result = JSON.parse(block.text) as TriageResult;

    return NextResponse.json({ ok: true, simulated: false, result });
  } catch (err) {
    // A live failure should still show the visitor something that works,
    // clearly marked as the fallback rather than silently pretending.
    console.error('[triage] falling back to simulation:', err);
    return NextResponse.json({ ok: true, simulated: true, result: simulateTriage(ticket) });
  }
}
