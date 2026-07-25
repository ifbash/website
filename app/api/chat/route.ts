import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { callerIp, check, record, snapshot } from '@/lib/ai-limits';

// claude-haiku-4-5 ($1/$5 per Mtok) is the default: this agent answers scripted
// questions about three practices from a ~600-token system prompt, which Haiku
// handles well, and it costs roughly a fifth of an Opus reply. Set
// CHAT_MODEL=claude-opus-5 if the answers ever need to be sharper — the same
// spend guards apply either way, they just bite sooner.
const MODEL = process.env.CHAT_MODEL || 'claude-haiku-4-5';

// Replies are specified as 2-4 short sentences (~100 tokens). 400 leaves room
// to finish a thought without paying for an essay.
const MAX_TOKENS = 400;

// Conversation trimming. Each turn resends the whole history, so these two
// numbers are what actually determine per-reply input cost.
const MAX_HISTORY = 8;
const MAX_CHARS_PER_MESSAGE = 700;
const MAX_BODY_BYTES = 16_000;

const SYSTEM_PROMPT = `You are the ifBash agent — the voice and chat assistant on ifbash.com. ifBash implements and runs ServiceNow, and then builds the AI layer on top of it. That ordering matters: (1) ServiceNow is the core practice — implementations, CRM & customer experience workflows, managed services, custom apps, digital transformation; (2) the AI layer on top — Now Assist, virtual agents and predictive intelligence inside ServiceNow, plus agents, voice assistants like yourself, and knowledge assistants (RAG) engineered on Anthropic's Claude, for ServiceNow and for any other stack; (3) web & mobile development — the websites, web apps, and iOS/Android surfaces those agents live in.

Rules:
- Be helpful, concise (2-4 short sentences per reply — replies may be spoken aloud), and honest. Plain text only: no markdown, no headers, no bullet lists, no emojis.
- Answer questions about ServiceNow products (ITSM, ITOM, CSM, HRSD, SecOps, GRC, FSM, App Engine, Integration Hub, Now Assist), building AI on Claude, and web/mobile development.
- Do NOT invent client names, metrics, awards, partner statuses, or prices. If asked about pricing or timelines, say each engagement is scoped individually and offer the free scoping call.
- You yourself are an example of ifBash's Claude engineering — if relevant, mention that you were built by ifBash on Claude.
- Be genuinely useful first; invite interested visitors to leave contact details for a scoping conversation. Never be pushy.
- If asked something unrelated to ifBash's work, politely steer back.
- If the user seems ready to talk business, suggest leaving their details ("Talk to the team" in chat, or the callback form on the agent page).`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    // AI mode not configured — widget falls back to guided mode
    return NextResponse.json({ fallback: true });
  }

  const declared = Number(request.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'Message too long' }, { status: 413 });
  }

  let messages: ChatMessage[];
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: 'Message too long' }, { status: 413 });
    }
    const body = JSON.parse(raw);
    messages = (body.messages as ChatMessage[]) || [];
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const history = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS_PER_MESSAGE) }));

  // The API requires the first message to be from the user — drop any leading
  // assistant greeting the widget includes in its transcript.
  while (history.length && history[0].role !== 'user') history.shift();

  if (!history.length || history[history.length - 1].role !== 'user') {
    return NextResponse.json({ ok: false, error: 'No user message' }, { status: 400 });
  }

  // Spend guards. Checked only once the request is known to be well-formed, so
  // a malformed POST can't burn a real visitor's allowance.
  const ip = callerIp(request);
  const verdict = check(ip);
  if (!verdict.ok) {
    if (verdict.reason === 'global') {
      // The whole site is over its daily budget. Degrade silently to guided
      // mode rather than telling visitors we ran out of money.
      console.warn('[chat] daily cap reached — serving guided mode', snapshot());
      return NextResponse.json({ fallback: true });
    }
    return NextResponse.json(
      {
        reply:
          "We've talked a fair bit — give me a few minutes to catch up. In the meantime, \"Talk to the team\" gets you a real person within one business day.",
      },
      { status: 429, headers: { 'Retry-After': String(verdict.retryAfterSeconds) } },
    );
  }
  record(ip);

  const client = new Anthropic();
  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      // Inert on Haiku 4.5 (its minimum cacheable prefix is 4096 tokens and
      // this prompt is ~600) — costs nothing, and starts paying off if
      // CHAT_MODEL is switched to a model with a lower cache minimum.
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages: history,
    });

    const encoder = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          stream.on('text', (delta) => controller.enqueue(encoder.encode(delta)));
          const final = await stream.finalMessage();
          if (final.stop_reason === 'refusal') {
            controller.enqueue(
              encoder.encode("I can't help with that one — but I'm happy to answer anything about ifBash's work."),
            );
          }
        } catch (err) {
          console.error('[chat] stream error:', err);
          controller.enqueue(encoder.encode(' … sorry, I lost my train of thought. Could you try that again?'));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(body, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError || err instanceof Anthropic.InternalServerError) {
      return NextResponse.json({ reply: "I'm getting a lot of questions right now — give me a moment and try again." });
    }
    console.error('[chat] error:', err);
    return NextResponse.json({ fallback: true });
  }
}
