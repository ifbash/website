// Shared client for the ifBash agent — used by the hero agent and the chat widget.

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Keyword-guided answers used when the AI backend is not configured.
export const GUIDED_ANSWERS: { match: RegExp; answer: string }[] = [
  {
    match: /agent|what can|automat|use case|business/i,
    answer:
      'We build AI agents on Claude that qualify leads, resolve support tickets, answer employee questions, and even make phone calls — the agent you\'re talking to is one of them. Tell me your industry and I can point at what usually pays off first, or tap "Talk to the team" to scope it properly.',
  },
  {
    match: /scope|project|start|engag|timeline|how long|price|cost|quote/i,
    answer:
      'Every engagement starts with a free 48-hour scoping call: you tell us where you are and what you need, and we come back with a concrete plan — approach, timeline, and team shape. No commitment. Leave your details and we\'ll set it up.',
  },
  {
    match: /servicenow|itsm|itom|csm|hrsd|now assist|incident/i,
    answer:
      'ServiceNow is one of our core practices — implementations, Now Assist and agentic automation, CRM workflows, managed services, and custom apps. What does your current ServiceNow landscape look like?',
  },
  {
    match: /claude|anthropic|llm|model|api/i,
    answer:
      'We build on Anthropic\'s Claude — agents, voice assistants, knowledge systems grounded in your documents, and workflow automation. This very assistant is a Claude build by ifBash. What would you want an AI to handle for you?',
  },
  {
    match: /website|web app|mobile|app|ios|android|build/i,
    answer:
      'We design and ship websites, web apps, and iOS/Android mobile apps — AI-native from day one, so assistants and automation are part of the product rather than bolted on. What are you looking to build?',
  },
];

export const FALLBACK_ANSWER =
  'Good question — that\'s one for our consultants. Leave your email via "Talk to the team" (or the callback form on the agent page) and we\'ll get back to you within one business day.';

export function guidedAnswer(question: string): string {
  const g = GUIDED_ANSWERS.find((g) => g.match.test(question));
  return g ? g.answer : FALLBACK_ANSWER;
}

/**
 * Sends the conversation to /api/chat.
 * - Streaming response (text/plain): calls onDelta per chunk, resolves with full text.
 * - JSON response: either {reply} (resolves with it, single onDelta) or {fallback:true}
 *   (resolves with a guided answer for the last user message).
 */
export async function streamChat(
  messages: ChatMessage[],
  onDelta: (fullTextSoFar: string) => void,
): Promise<string> {
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await res.json();
      if (data.reply) {
        onDelta(data.reply);
        return data.reply;
      }
      const answer = guidedAnswer(lastUser?.content || '');
      onDelta(answer);
      return answer;
    }

    if (!res.body) throw new Error('no body');
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = '';
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      full += decoder.decode(value, { stream: true });
      onDelta(full);
    }
    full += decoder.decode();
    if (full) onDelta(full);
    return full || FALLBACK_ANSWER;
  } catch {
    const answer = guidedAnswer(lastUser?.content || '');
    onDelta(answer);
    return answer;
  }
}
