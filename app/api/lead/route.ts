import { NextResponse } from 'next/server';

/**
 * Lead capture.
 *
 * Two hard-won rules are encoded here; both cost real leads before they were
 * understood, so do not "simplify" either away:
 *
 * 1. FormSubmit answers HTTP 200 even when it has NOT accepted a submission.
 *    An unactivated address, a missing origin, a rejected payload — all come
 *    back 200 with `{"success":"false"}`. You must read the body.
 *
 * 2. FormSubmit rejects any request that arrives with no Origin/Referer, and
 *    this runs server-side where neither is sent by default. Its rejection
 *    message ("Make sure you open this page through a web server") reads like
 *    a client-side problem and sends you looking in the wrong place entirely.
 *
 * Delivery is a CASCADE, not either/or: Resend first when configured, then
 * FormSubmit. A misconfigured Resend key used to mean the lead was lost even
 * though FormSubmit was working fine.
 *
 * ⚠ FORMSUBMIT DOES NOT WORK FROM VERCEL — and cannot be made to.
 *   It sits behind Cloudflare, which serves datacenter egress a bot challenge:
 *     HTTP 403  <title>Just a moment...</title>
 *   The identical request succeeds from a residential IP, which is why this
 *   looks like a code bug when tested locally and is not one. Solving the
 *   challenge is neither possible nor appropriate here.
 *   => RESEND_API_KEY is the only working delivery path in production.
 *   The FormSubmit branch is kept only because it still works on hosts whose
 *   egress Cloudflare does not challenge.
 */

const LEAD_EMAIL = process.env.LEAD_EMAIL || 'connect@ifbash.com';

/**
 * Origin sent to FormSubmit. Derived from the incoming request first, so this
 * works on any domain — production, a Vercel preview URL, or localhost —
 * without an env var having to be set correctly in each environment.
 */
function originFor(request: Request): string {
  const fromHeader = request.headers.get('origin');
  if (fromHeader?.startsWith('http')) return fromHeader;

  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (host) {
    const proto = request.headers.get('x-forwarded-proto') || 'https';
    return `${proto}://${host}`;
  }
  return process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://ifbash.com';
}

interface LeadPayload {
  name?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  companySize?: string;
  serviceInterest?: string;
  message?: string;
  source?: string;
  website?: string; // honeypot — real users never fill this
}

async function sendViaResend(subject: string, text: string, replyTo: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || 'ifBash Website <onboarding@resend.dev>',
      to: [LEAD_EMAIL],
      reply_to: replyTo,
      subject,
      text,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
}

async function sendViaFormSubmit(origin: string, subject: string, fields: Record<string, unknown>) {
  const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: origin,
      Referer: `${origin}/get-started`,
    },
    body: JSON.stringify({ _subject: subject, ...fields }),
  });

  if (!res.ok) {
    const body = (await res.text()).slice(0, 120);
    // Name the Cloudflare challenge explicitly — otherwise the log just shows
    // a 403 and the next person re-debugs headers for an hour.
    if (/just a moment|cf-browser-verification|challenge-platform/i.test(body)) {
      throw new Error(
        'FormSubmit is behind Cloudflare and challenged this datacenter IP ' +
          '(HTTP 403 "Just a moment..."). It cannot be used server-side from ' +
          'Vercel. Set RESEND_API_KEY.',
      );
    }
    throw new Error(`FormSubmit HTTP ${res.status}: ${body}`);
  }

  const payload = (await res.json().catch(() => null)) as
    | { success?: string | boolean; message?: string }
    | null;
  const accepted = payload?.success === true || String(payload?.success).toLowerCase() === 'true';

  if (!accepted) throw new Error(`FormSubmit rejected it: ${payload?.message ?? 'no message'}`);
}

/**
 * Health check. Reports which delivery channel is configured and whether
 * FormSubmit currently accepts us — no secrets, no lead data.
 *
 * This exists because diagnosing a failing deploy from outside is otherwise
 * guesswork: the site is static, so nothing else reveals whether the running
 * function is the version you just pushed. Hitting this on the live domain
 * answers both "did the deploy land" and "why is delivery failing" at once.
 */
export async function GET(request: Request) {
  const origin = originFor(request);
  let formsubmit = 'unknown';
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: origin,
        Referer: `${origin}/get-started`,
      },
      // _honey makes FormSubmit treat this as a bot submission: it validates
      // and answers normally but does not email anyone, so probing is free.
      body: JSON.stringify({ _honey: 'probe', _subject: 'health probe' }),
    });
    // Report the raw answer. FormSubmit's failure modes are only
    // distinguishable from its exact wording, and the same request can be
    // accepted from one host and refused from another (datacenter egress is
    // treated differently to a residential IP), so a boolean hides the thing
    // you actually need to see.
    const raw = (await res.text()).slice(0, 300);
    formsubmit = `HTTP ${res.status} ${raw}`;
  } catch (err) {
    formsubmit = `unreachable: ${(err as Error).message}`;
  }

  return NextResponse.json({
    route: 'lead',
    revision: 'origin-cascade-1',
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
    deliverTo: LEAD_EMAIL,
    originUsed: origin,
    formsubmit,
  });
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without forwarding
  if (body.website) return NextResponse.json({ ok: true });

  const email = (body.email || '').trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  const subject = `New lead: ${body.name || email} — ${body.serviceInterest || 'General'}`;
  const lines = [
    `Name: ${body.name || '—'}`,
    `Email: ${email}`,
    `Company: ${body.company || '—'}`,
    `Job title: ${body.jobTitle || '—'}`,
    `Company size: ${body.companySize || '—'}`,
    `Interested in: ${body.serviceInterest || '—'}`,
    `Source: ${body.source || 'website form'}`,
    '',
    body.message || '(no message)',
  ].join('\n');

  const failures: string[] = [];

  if (process.env.RESEND_API_KEY) {
    try {
      await sendViaResend(subject, lines, email);
      return NextResponse.json({ ok: true });
    } catch (err) {
      // Fall through to FormSubmit rather than losing the lead.
      failures.push((err as Error).message);
      console.error('[lead] Resend failed, trying FormSubmit:', err);
    }
  }

  try {
    await sendViaFormSubmit(originFor(request), subject, {
      name: body.name,
      email,
      company: body.company,
      jobTitle: body.jobTitle,
      companySize: body.companySize,
      serviceInterest: body.serviceInterest,
      source: body.source || 'website form',
      message: body.message,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    failures.push((err as Error).message);
  }

  console.error('[lead] ALL delivery channels failed:', failures.join(' | '));
  return NextResponse.json(
    { ok: false, error: `Could not submit right now. Please email ${LEAD_EMAIL} directly.` },
    { status: 502 },
  );
}
