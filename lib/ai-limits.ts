/**
 * Spend guards for the public AI endpoints.
 *
 * The chat agent is open to anyone on the internet with no login, so the only
 * thing standing between a bored visitor with a `for` loop and the Anthropic
 * balance is this file. Three layers, cheapest first:
 *
 *   1. per-IP sliding windows  — stops one person hammering the widget
 *   2. a global daily ceiling  — caps total spend even under distributed abuse
 *   3. (outside this file)     — a spend limit on the API key in the Anthropic
 *                                Console. That is the only HARD guarantee;
 *                                everything here is best-effort. See README
 *                                notes in .env.example.
 *
 * Counters live in module memory. On Vercel Fluid Compute instances are reused
 * across requests, so this catches ordinary abuse, but a burst spread across
 * cold instances can exceed the limits — which is exactly why layer 3 exists.
 * Swap `ipHits` / `globalDay` for Redis if the site ever needs a hard number.
 */

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;

/** Read a positive integer from the environment, else the default. */
function envInt(name: string, fallback: number): number {
  const raw = Number(process.env[name]);
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : fallback;
}

export function limits() {
  return {
    /** Messages one IP may send in a rolling 10 minutes. */
    perIpBurst: envInt('CHAT_MAX_PER_IP_10MIN', 8),
    /** Messages one IP may send in a rolling hour. */
    perIpHour: envInt('CHAT_MAX_PER_IP_HOUR', 20),
    /** Messages everyone combined may send in one UTC day. */
    globalDay: envInt('CHAT_MAX_PER_DAY', 400),
  };
}

// ── IP windows ───────────────────────────────────────────────────────
// Map of ip -> ascending request timestamps within the last hour.
const ipHits = new Map<string, number[]>();
const MAX_TRACKED_IPS = 5_000;

// forEach rather than for-of: the project targets es5, where iterating a Map
// needs --downlevelIteration.
function sweep(now: number) {
  const stale: string[] = [];
  ipHits.forEach((hits, ip) => {
    const live = hits.filter((t) => now - t < HOUR);
    if (live.length) ipHits.set(ip, live);
    else stale.push(ip);
  });
  stale.forEach((ip) => ipHits.delete(ip));
}

// ── Global daily counter ─────────────────────────────────────────────
let globalDay = { key: '', count: 0 };

function dayKey(now: number) {
  return new Date(now).toISOString().slice(0, 10); // UTC date
}

export type LimitVerdict =
  | { ok: true }
  | { ok: false; reason: 'ip'; retryAfterSeconds: number }
  | { ok: false; reason: 'global' };

/**
 * Checks the caller against every limit WITHOUT consuming quota.
 * Call `record()` once the request is validated and about to hit the model,
 * so malformed or honeypot requests don't burn a visitor's allowance.
 */
export function check(ip: string, now = Date.now()): LimitVerdict {
  const L = limits();

  if (globalDay.key === dayKey(now) && globalDay.count >= L.globalDay) {
    return { ok: false, reason: 'global' };
  }

  const hits = ipHits.get(ip) ?? [];
  const inHour = hits.filter((t) => now - t < HOUR);
  const inBurst = inHour.filter((t) => now - t < 10 * MINUTE);

  if (inBurst.length >= L.perIpBurst) {
    const oldest = inBurst[0];
    return {
      ok: false,
      reason: 'ip',
      retryAfterSeconds: Math.max(1, Math.ceil((10 * MINUTE - (now - oldest)) / 1000)),
    };
  }
  if (inHour.length >= L.perIpHour) {
    const oldest = inHour[0];
    return {
      ok: false,
      reason: 'ip',
      retryAfterSeconds: Math.max(1, Math.ceil((HOUR - (now - oldest)) / 1000)),
    };
  }

  return { ok: true };
}

/** Consumes one unit of quota for this IP and for the day. */
export function record(ip: string, now = Date.now()) {
  const key = dayKey(now);
  if (globalDay.key !== key) globalDay = { key, count: 0 };
  globalDay.count += 1;

  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < HOUR);
  hits.push(now);
  ipHits.set(ip, hits);

  if (ipHits.size > MAX_TRACKED_IPS) sweep(now);
}

/**
 * Best-effort caller identity. Vercel and most proxies set x-forwarded-for;
 * the left-most entry is the client. Everything unidentifiable shares one
 * bucket, which is deliberately strict rather than permissive.
 */
export function callerIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) {
    const first = fwd.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

/** Current usage — logged when the daily cap trips. */
export function snapshot(now = Date.now()) {
  const key = dayKey(now);
  return {
    day: key,
    used: globalDay.key === key ? globalDay.count : 0,
    limit: limits().globalDay,
    trackedIps: ipHits.size,
  };
}
