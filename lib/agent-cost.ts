/**
 * Cost model behind the agent cost calculator.
 *
 * Kept out of the component so the arithmetic is readable and reviewable — the
 * whole point of the widget is to show that we cost these things properly, so
 * the maths had better be right and had better be inspectable.
 *
 * Prices are Anthropic list prices per million tokens, current at the date
 * below. Sonnet 5 also has promotional pricing at the time of writing; we quote
 * standard list so nobody budgets against a rate that expires.
 */

export const PRICES_AS_OF = 'July 2026';

export interface Model {
  id: string;
  name: string;
  /** USD per million input tokens. */
  input: number;
  /** USD per million output tokens. */
  output: number;
  /**
   * Minimum cacheable prefix in tokens. Below this, a cache_control marker is
   * silently inert — no error, no caching. It is why prompt caching does
   * nothing for a small system prompt on Haiku.
   */
  cacheMinimum: number;
  note: string;
}

export const MODELS: Model[] = [
  {
    id: 'haiku',
    name: 'Haiku 4.5',
    input: 1,
    output: 5,
    cacheMinimum: 4096,
    note: 'Right for scripted support and qualification agents.',
  },
  {
    id: 'sonnet',
    name: 'Sonnet 5',
    input: 3,
    output: 15,
    cacheMinimum: 1024,
    note: 'Right when the agent has to reason across your data.',
  },
  {
    id: 'opus',
    name: 'Opus 5',
    input: 5,
    output: 25,
    cacheMinimum: 512,
    note: 'Right for long-horizon agentic work, rarely for chat.',
  },
];

/** Cache reads bill at roughly a tenth of the input rate; writes at 1.25x. */
const CACHE_READ_MULTIPLIER = 0.1;
const CACHE_WRITE_MULTIPLIER = 1.25;

export interface Assumptions {
  systemTokens: number;
  userTokens: number;
  replyTokens: number;
}

export const DEFAULT_ASSUMPTIONS: Assumptions = {
  systemTokens: 600,
  userTokens: 60,
  replyTokens: 250,
};

export interface CostInput {
  conversationsPerMonth: number;
  turnsPerConversation: number;
  caching: boolean;
  assumptions?: Assumptions;
}

export interface CostBreakdown {
  perConversation: number;
  perMonth: number;
  perYear: number;
  /** True when caching was requested but the prefix is below the model's floor. */
  cachingInert: boolean;
}

/**
 * Cost of one conversation, then scaled out.
 *
 * The history grows every turn — turn 5 resends turns 1-4 — which is the part
 * people forget when they estimate this on a napkin, and the reason a long
 * conversation costs far more than "turns x price".
 */
export function computeCost(model: Model, input: CostInput): CostBreakdown {
  const a = input.assumptions ?? DEFAULT_ASSUMPTIONS;
  const turns = Math.max(1, Math.round(input.turnsPerConversation));

  const cachingApplies = input.caching && a.systemTokens >= model.cacheMinimum;

  let inputCost = 0;
  let outputTokens = 0;

  for (let i = 1; i <= turns; i++) {
    // Everything the model re-reads this turn, excluding the system prompt.
    const history = (i - 1) * (a.userTokens + a.replyTokens) + a.userTokens;

    let systemCost: number;
    if (!cachingApplies) {
      systemCost = a.systemTokens;
    } else if (i === 1) {
      systemCost = a.systemTokens * CACHE_WRITE_MULTIPLIER;
    } else {
      systemCost = a.systemTokens * CACHE_READ_MULTIPLIER;
    }

    inputCost += (systemCost + history) * (model.input / 1_000_000);
    outputTokens += a.replyTokens;
  }

  const perConversation = inputCost + outputTokens * (model.output / 1_000_000);

  return {
    perConversation,
    perMonth: perConversation * input.conversationsPerMonth,
    perYear: perConversation * input.conversationsPerMonth * 12,
    cachingInert: input.caching && !cachingApplies,
  };
}

export function formatUsd(n: number): string {
  if (n < 0.01) return `$${n.toFixed(4)}`;
  if (n < 100) return `$${n.toFixed(2)}`;
  return `$${Math.round(n).toLocaleString('en-US')}`;
}
