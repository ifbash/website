'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactUsPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', website: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          serviceInterest: values.subject || 'General enquiry',
          message: values.message,
          website: values.website,
          source: 'contact page',
        }),
      });
      const data = await res.json();
      setStatus(data.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'w-full bg-white/5 border border-white/10 focus:border-sea/60 rounded-xl px-4 py-3 text-sm text-onink placeholder:text-onink-faint outline-none transition-colors';

  return (
    <>
      {/* ── HERO + FORM ── */}
      <section className="relative overflow-hidden" style={{ background: '#0E1120' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #A5B4FC 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] opacity-[0.1]" style={{ background: 'radial-gradient(ellipse at top right, #4338CA, transparent 65%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-block w-8 h-px bg-sea-soft" />
                  <span className="text-sea-soft text-sm font-semibold tracking-widest uppercase">Contact</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-onink leading-[1.1] tracking-tight mb-6">
                  Talk to a<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-soft to-sea-soft">consultant.</span>
                </h1>
                <p className="text-lg text-onink-muted leading-relaxed max-w-md">
                  Project enquiries, partnership questions, or support — write to us and a senior consultant replies within one business day.
                </p>
              </div>

              <div className="space-y-5">
                <a href="mailto:connect@ifbash.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-sea/15 border border-sea/30 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-sea-soft" />
                  </div>
                  <div>
                    <div className="font-semibold text-onink text-sm">Email</div>
                    <div className="text-onink-muted text-sm group-hover:text-sea-soft transition-colors">connect@ifbash.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sea/15 border border-sea/30 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-sea-soft" />
                  </div>
                  <div>
                    <div className="font-semibold text-onink text-sm">Based in</div>
                    <div className="text-onink-muted text-sm">Hyderabad, India — serving clients globally</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sea/15 border border-sea/30 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-sea-soft" />
                  </div>
                  <div>
                    <div className="font-semibold text-onink text-sm">Response time</div>
                    <div className="text-onink-muted text-sm">Within one business day</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-onink-muted">
                Scoping a project?{' '}
                <Link href="/get-started" className="text-sea-soft hover:text-sea-soft font-semibold">
                  Use the project form instead →
                </Link>
              </p>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
              {status === 'sent' ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-7 w-7 text-green-400" />
                  </div>
                  <h2 className="text-xl font-bold text-onink mb-2">Message sent.</h2>
                  <p className="text-onink-muted text-sm max-w-xs mx-auto">We&apos;ll reply within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold text-onink mb-4">Send us a message</h2>
                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" value={values.website} onChange={(e) => setValues({ ...values, website: e.target.value })} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label htmlFor="ct-name" className="sr-only">Your name</label>
                    <input id="ct-name" placeholder="Your name *" required className={inputCls} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                    <label htmlFor="ct-email" className="sr-only">Work email</label>
                    <input id="ct-email" placeholder="Work email *" type="email" required className={inputCls} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                  </div>
                  <label htmlFor="ct-subject" className="sr-only">Subject</label>
                  <input id="ct-subject" placeholder="Subject" className={inputCls} value={values.subject} onChange={(e) => setValues({ ...values, subject: e.target.value })} />
                  <label htmlFor="ct-message" className="sr-only">Your message</label>
                  <textarea id="ct-message" placeholder="Your message *" required rows={5} className={`${inputCls} resize-none`} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} />
                  {status === 'error' && (
                    <p className="text-red-400 text-xs">
                      Something went wrong — email us at <a href="mailto:connect@ifbash.com" className="underline">connect@ifbash.com</a>.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-onink text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #4338CA, #4F46E5)', boxShadow: '0 8px 32px rgba(67,56,202,0.35)' }}
                  >
                    {status === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>Send message <ArrowRight className="h-4 w-4" /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
