import { NextResponse } from 'next/server';

const LEAD_EMAIL = process.env.LEAD_EMAIL || 'connect@ifbash.com';

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

  try {
    if (process.env.RESEND_API_KEY) {
      // Preferred: Resend (set RESEND_API_KEY and LEAD_FROM_EMAIL in env)
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || 'ifBash Website <onboarding@resend.dev>',
          to: [LEAD_EMAIL],
          reply_to: email,
          subject: `New lead: ${body.name || email} — ${body.serviceInterest || 'General'}`,
          text: lines,
        }),
      });
      if (!res.ok) throw new Error(`Resend failed: ${res.status}`);
    } else {
      // Fallback: FormSubmit (requires one-time activation email sent to LEAD_EMAIL)
      const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New lead: ${body.name || email} — ${body.serviceInterest || 'General'}`,
          name: body.name,
          email,
          company: body.company,
          jobTitle: body.jobTitle,
          companySize: body.companySize,
          serviceInterest: body.serviceInterest,
          source: body.source || 'website form',
          message: body.message,
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit failed: ${res.status}`);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] delivery failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not submit right now. Please email connect@ifbash.com directly.' },
      { status: 502 },
    );
  }
}
