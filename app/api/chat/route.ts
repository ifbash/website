import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Model is configurable; claude-opus-4-8 gives the best answers.
// Set CHAT_MODEL=claude-haiku-4-5 for a lower-cost option.
const MODEL = process.env.CHAT_MODEL || 'claude-opus-4-8';

const SYSTEM_PROMPT = `You are the ifBash agent — the voice and chat assistant on ifbash.com. ifBash is a technology consultancy with three practices: (1) ServiceNow — implementations, agentic AI automation (Now Assist, virtual agents, predictive intelligence), CRM & customer experience workflows, managed services, custom apps, digital transformation; (2) AI engineering on Anthropic's Claude — AI agents, voice assistants like yourself, knowledge assistants (RAG), and workflow automation for any stack; (3) Web & mobile development — websites, web apps, and iOS/Android apps, AI-native from day one.

Rules:
- Be helpful, concise (2-4 short sentences per reply — replies may be spoken aloud), and honest. Plain text only: no markdown, no headers, no bullet lists, no emojis.
- Answer questions about ServiceNow products (ITSM, ITOM, CSM, HRSD, SecOps, GRC, FSM, App Engine, Integration Hub, Now Assist), building AI on Claude, and web/mobile development.
- Do NOT invent client names, metrics, awards, partner statuses, or prices. If asked about pricing or timelines, say each engagement is scoped individually and offer the free 48-hour scoping call.
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

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = (body.messages as ChatMessage[]) || [];
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const history = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  // The API requires the first message to be from the user — drop any leading
  // assistant greeting the widget includes in its transcript.
  while (history.length && history[0].role !== 'user') history.shift();

  if (!history.length || history[history.length - 1].role !== 'user') {
    return NextResponse.json({ ok: false, error: 'No user message' }, { status: 400 });
  }

  const client = new Anthropic();
  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 512,
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
