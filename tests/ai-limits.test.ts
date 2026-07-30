import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * Spend guards on the public chat endpoint.
 *
 * This is the first thing to have tests because it is the only code on the site
 * with a direct, unbounded cost consequence: the chat agent takes anonymous
 * traffic and spends money per request. A regression here is invisible until it
 * shows up on an Anthropic bill.
 *
 * ai-limits keeps its counters in module scope, so every test re-imports the
 * module through `fresh()` to get clean state. Time is injected rather than
 * mocked — the module takes `now` on every entry point precisely so this is
 * possible.
 */

type Mod = typeof import('@/lib/ai-limits');

const ENV_KEYS = ['CHAT_MAX_PER_IP_10MIN', 'CHAT_MAX_PER_IP_HOUR', 'CHAT_MAX_PER_DAY'] as const;

let saved: Record<string, string | undefined> = {};

beforeEach(() => {
  saved = {};
  for (const k of ENV_KEYS) {
    saved[k] = process.env[k];
    delete process.env[k];
  }
});

afterEach(() => {
  for (const k of ENV_KEYS) {
    if (saved[k] === undefined) delete process.env[k];
    else process.env[k] = saved[k];
  }
});

async function fresh(env: Partial<Record<(typeof ENV_KEYS)[number], string>> = {}): Promise<Mod> {
  vi.resetModules();
  Object.assign(process.env, env);
  return import('@/lib/ai-limits');
}

const T0 = Date.parse('2026-07-15T12:00:00.000Z');
const MINUTE = 60_000;
const HOUR = 60 * MINUTE;

describe('limits() configuration', () => {
  it('falls back to conservative defaults when nothing is set', async () => {
    const { limits } = await fresh();
    expect(limits()).toEqual({ perIpBurst: 8, perIpHour: 20, globalDay: 400 });
  });

  it('reads overrides from the environment', async () => {
    const { limits } = await fresh({
      CHAT_MAX_PER_IP_10MIN: '3',
      CHAT_MAX_PER_IP_HOUR: '5',
      CHAT_MAX_PER_DAY: '10',
    });
    expect(limits()).toEqual({ perIpBurst: 3, perIpHour: 5, globalDay: 10 });
  });

  it.each([
    ['zero', '0'],
    ['negative', '-5'],
    ['non-numeric', 'lots'],
    ['empty', ''],
    ['Infinity', 'Infinity'],
  ])('ignores a %s override rather than disabling the limit', async (_label, value) => {
    const { limits } = await fresh({ CHAT_MAX_PER_DAY: value });
    // The dangerous failure is a bad value silently meaning "no ceiling".
    expect(limits().globalDay).toBe(400);
  });

  it('floors a fractional override instead of rejecting it', async () => {
    const { limits } = await fresh({ CHAT_MAX_PER_DAY: '9.7' });
    expect(limits().globalDay).toBe(9);
  });
});

describe('check() and record()', () => {
  it('allows a first-time caller', async () => {
    const { check } = await fresh();
    expect(check('1.1.1.1', T0)).toEqual({ ok: true });
  });

  it('does NOT consume quota — that is the documented contract', async () => {
    const { check } = await fresh({ CHAT_MAX_PER_IP_10MIN: '2' });
    // Called repeatedly without record(), so a malformed or honeypot request
    // must never burn a real visitor's allowance.
    for (let i = 0; i < 20; i++) expect(check('2.2.2.2', T0).ok).toBe(true);
  });

  it('blocks an IP once the burst window is full', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_IP_10MIN: '3' });
    for (let i = 0; i < 3; i++) record('3.3.3.3', T0 + i * 1000);

    const v = check('3.3.3.3', T0 + 3000);
    expect(v.ok).toBe(false);
    if (!v.ok && v.reason === 'ip') {
      expect(v.retryAfterSeconds).toBeGreaterThan(0);
      expect(v.retryAfterSeconds).toBeLessThanOrEqual(600);
    } else {
      throw new Error('expected an ip-reason rejection');
    }
  });

  it('lets the burst window slide open again', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_IP_10MIN: '2' });
    record('4.4.4.4', T0);
    record('4.4.4.4', T0 + 1000);
    expect(check('4.4.4.4', T0 + 2000).ok).toBe(false);

    // Just past ten minutes from the first two hits, the window is clear.
    expect(check('4.4.4.4', T0 + 10 * MINUTE + 2000).ok).toBe(true);
  });

  it('enforces the hourly cap independently of the burst cap', async () => {
    const { check, record } = await fresh({
      CHAT_MAX_PER_IP_10MIN: '100', // effectively disabled
      CHAT_MAX_PER_IP_HOUR: '4',
    });
    // Spread wide enough that the burst window never fills.
    for (let i = 0; i < 4; i++) record('5.5.5.5', T0 + i * 12 * MINUTE);

    const v = check('5.5.5.5', T0 + 48 * MINUTE);
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe('ip');
  });

  it('keeps IPs in separate buckets', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_IP_10MIN: '1' });
    record('6.6.6.6', T0);
    expect(check('6.6.6.6', T0).ok).toBe(false);
    expect(check('7.7.7.7', T0).ok).toBe(true);
  });
});

describe('global daily ceiling', () => {
  it('trips regardless of how many distinct IPs are involved', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_DAY: '5' });
    // Distributed abuse: every request from a different address.
    for (let i = 0; i < 5; i++) record(`10.0.0.${i}`, T0);

    const v = check('10.0.0.99', T0);
    expect(v.ok).toBe(false);
    if (!v.ok) expect(v.reason).toBe('global');
  });

  it('takes priority over the per-IP reason when both would trip', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_DAY: '2', CHAT_MAX_PER_IP_10MIN: '1' });
    record('11.0.0.1', T0);
    record('11.0.0.2', T0);
    const v = check('11.0.0.1', T0);
    expect(v.ok).toBe(false);
    // Global is checked first so the log records the real cause.
    if (!v.ok) expect(v.reason).toBe('global');
  });

  it('resets on a new UTC day', async () => {
    const { check, record } = await fresh({ CHAT_MAX_PER_DAY: '2' });
    record('12.0.0.1', T0);
    record('12.0.0.2', T0);
    expect(check('12.0.0.3', T0).ok).toBe(false);

    const nextDay = Date.parse('2026-07-16T00:00:01.000Z');
    expect(check('12.0.0.3', nextDay).ok).toBe(true);
  });

  it('rolls the day at UTC midnight, not local midnight', async () => {
    const { snapshot, record } = await fresh();
    record('13.0.0.1', Date.parse('2026-07-15T23:59:59.000Z'));
    expect(snapshot(Date.parse('2026-07-15T23:59:59.000Z'))).toMatchObject({
      day: '2026-07-15',
      used: 1,
    });
    expect(snapshot(Date.parse('2026-07-16T00:00:00.000Z'))).toMatchObject({
      day: '2026-07-16',
      used: 0,
    });
  });
});

describe('callerIp()', () => {
  const req = (headers: Record<string, string>) => new Request('https://ifbash.com/api/chat', { headers });

  it('takes the left-most x-forwarded-for entry as the client', async () => {
    const { callerIp } = await fresh();
    expect(callerIp(req({ 'x-forwarded-for': '203.0.113.7, 70.41.3.18, 150.172.238.178' })))
      .toBe('203.0.113.7');
  });

  it('trims whitespace', async () => {
    const { callerIp } = await fresh();
    expect(callerIp(req({ 'x-forwarded-for': '  203.0.113.7  ,10.0.0.1' }))).toBe('203.0.113.7');
  });

  it('falls back to x-real-ip', async () => {
    const { callerIp } = await fresh();
    expect(callerIp(req({ 'x-real-ip': '198.51.100.4' }))).toBe('198.51.100.4');
  });

  it('buckets unidentifiable callers together rather than exempting them', async () => {
    const { callerIp } = await fresh();
    expect(callerIp(req({}))).toBe('unknown');
    // An empty header must not read as "no limit applies".
    expect(callerIp(req({ 'x-forwarded-for': '' }))).toBe('unknown');
  });

  it('shares one bucket for all unidentified traffic, so the limit still bites', async () => {
    const { check, record, callerIp } = await fresh({ CHAT_MAX_PER_IP_10MIN: '1' });
    const ip = callerIp(req({}));
    record(ip, T0);
    expect(check(ip, T0).ok).toBe(false);
  });
});

describe('memory growth', () => {
  it('does not retain IPs whose hits have all aged out', async () => {
    const { record, snapshot } = await fresh();
    // Enough to cross MAX_TRACKED_IPS (5000) and force a sweep.
    for (let i = 0; i < 5_100; i++) record(`10.${(i >> 16) & 255}.${(i >> 8) & 255}.${i & 255}`, T0);
    const before = snapshot(T0).trackedIps;
    expect(before).toBeGreaterThan(0);

    // One more request an hour later: every earlier hit is now stale.
    record('172.16.0.1', T0 + HOUR + 1000);
    const after = snapshot(T0 + HOUR + 1000).trackedIps;
    expect(after).toBeLessThan(before);
  });
});
