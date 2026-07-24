import { NextResponse } from 'next/server';

// Outbound voice call via Retell AI (https://retellai.com).
// Requires RETELL_API_KEY, RETELL_AGENT_NUMBER (the Retell-provisioned number
// bound to your agent). Without them, the request is stored as a priority
// callback lead so no visitor is lost.

interface CallPayload {
  name?: string;
  company?: string;
  phone?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  let body: CallPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true, mode: 'callback' });

  const phone = (body.phone || '').replace(/[\s()-]/g, '');
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
    return NextResponse.json(
      { ok: false, error: 'Use international format, e.g. +91 98765 43210' },
      { status: 400 },
    );
  }

  if (process.env.RETELL_API_KEY && process.env.RETELL_AGENT_NUMBER) {
    try {
      const res = await fetch('https://api.retellai.com/v2/create-phone-call', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RETELL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from_number: process.env.RETELL_AGENT_NUMBER,
          to_number: phone,
          retell_llm_dynamic_variables: {
            caller_name: body.name || 'there',
            company: body.company || '',
          },
        }),
      });
      if (!res.ok) throw new Error(`Retell ${res.status}: ${await res.text()}`);
      return NextResponse.json({ ok: true, mode: 'live' });
    } catch (err) {
      console.error('[agent/call] Retell failed, falling back to callback lead:', err);
      // fall through to callback capture
    }
  }

  // Not configured (or vendor error) — capture as a priority callback lead
  try {
    const origin = new URL(request.url).origin;
    const res = await fetch(`${origin}/api/lead`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name,
        email: 'callback-request@ifbash.com',
        company: body.company,
        serviceInterest: 'PRIORITY CALLBACK REQUEST',
        message: `Visitor requested a call back.\nName: ${body.name || '—'}\nCompany: ${body.company || '—'}\nPhone: ${phone}`,
        source: 'agent callback form',
      }),
    });
    const data = await res.json();
    if (!data.ok) throw new Error('lead forward failed');
    return NextResponse.json({ ok: true, mode: 'callback' });
  } catch (err) {
    console.error('[agent/call] callback capture failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not process the request. Email connect@ifbash.com and we will call you.' },
      { status: 502 },
    );
  }
}
