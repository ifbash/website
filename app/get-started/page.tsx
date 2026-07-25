'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ArrowRight, CheckCircle, ChevronDown, Clock, Shield, Users, Zap, Loader2, Mail,
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().min(1, 'Please enter your company'),
  companySize: z.string().optional(),
  serviceInterest: z.string().min(1, 'Pick the area closest to your need'),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
});
type FormValues = z.infer<typeof formSchema>;

const services = [
  'ServiceNow Implementation',
  'Agentic AI & Automation',
  'AI Engineering on Claude',
  'Web & Mobile Development',
  'CRM & Customer Experience',
  'Managed Services',
  'Custom App Development',
  'Digital Transformation',
  'Not sure yet',
];

const steps = [
  { icon: Mail, title: 'Tell us where you are', desc: 'Share your goals, your current ServiceNow state (or lack of one), and what success looks like.' },
  { icon: Clock, title: 'Scoping call within two working days', desc: 'A senior consultant — not a salesperson — walks through your situation and asks the hard questions.' },
  { icon: CheckCircle, title: 'A concrete plan', desc: 'You get a clear approach, timeline, and team shape. Use it with us or without us — it’s yours.' },
];

const faqs = [
  { q: 'What happens after I submit this form?', a: 'A senior consultant reviews your message and replies within one business day to set up the scoping call. No automated drip campaigns, no sales pressure.' },
  { q: 'Is the scoping call really free?', a: 'Yes. You leave the call with a concrete view of approach, timeline, and effort — whether or not you work with us.' },
  { q: 'We already have ServiceNow. Can you take over or improve it?', a: 'Absolutely. A large share of our work is rescuing stalled implementations, untangling over-customised instances, and adding AI capabilities to existing platforms.' },
  { q: 'How do you price engagements?', a: 'Each engagement is scoped individually — fixed-price for well-defined implementations, capacity-based for managed services. You’ll always know the number before we start.' },
  { q: 'Can you work with our in-house team?', a: 'Yes — we prefer it. We build alongside your people and hand over documentation, tests, and knowledge so you’re not dependent on us forever.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function GetStartedPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', company: '', companySize: '', serviceInterest: '', message: '', website: '' },
  });

  async function onSubmit(values: FormValues) {
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source: 'get-started form' }),
      });
      const data = await res.json();
      setStatus(data.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'w-full bg-white/5 border border-white/10 focus:border-sea/60 rounded-xl px-4 py-3 text-sm text-onink placeholder:text-onink-faint outline-none transition-colors';
  const err = form.formState.errors;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO + FORM ── */}
      <section className="relative overflow-hidden" style={{ background: '#0B1417' }}>
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, #79D8E2 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 w-[700px] h-[500px] opacity-[0.12]" style={{ background: 'radial-gradient(ellipse at top left, #00707C, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-[0.08]" style={{ background: 'radial-gradient(ellipse at bottom right, #00939F, transparent 65%)' }} />

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — pitch */}
            <div className="space-y-8 self-start">
              <div className="inline-flex items-center gap-2 bg-sea/10 border border-sea/25 rounded-full px-4 py-2 text-sea-soft text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Accepting new clients
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-onink leading-[1.1] tracking-tight">
                Let&apos;s scope your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-soft to-sea-soft animate-gradient-text">implementation.</span>
              </h1>
              <p className="text-lg text-onink-muted leading-relaxed max-w-lg">
                Tell us about your ServiceNow goals. Within two working days, a consultant walks you through exactly how we&apos;d approach it — no commitment, no sales pressure, just a clear plan.
              </p>

              <div className="space-y-5 pt-2">
                {steps.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-sea/15 border border-sea/30 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-sea-soft" />
                      </div>
                      {i < steps.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-sea/30 to-transparent mt-2" />}
                    </div>
                    <div className="pb-2">
                      <div className="font-semibold text-onink text-sm mb-1">{title}</div>
                      <p className="text-sm text-onink-muted leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-onink-muted">
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-sea-soft" /> Your details stay private</span>
                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-sea-soft" /> Senior consultants only</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-sea-soft" /> Reply within 1 business day</span>
              </div>
            </div>

            {/* Right — form card */}
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8 self-start" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
              {status === 'sent' ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-7 w-7 text-green-400" />
                  </div>
                  <h2 className="text-xl font-bold text-onink mb-2">Thanks — we&apos;ve got it.</h2>
                  <p className="text-onink-muted text-sm max-w-xs mx-auto mb-8">
                    A senior consultant will reach out within one business day to set up your scoping call.
                  </p>
                  <Link href="/" className="text-sea-soft hover:text-sea-soft text-sm font-semibold">
                    Back to home →
                  </Link>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <h2 className="text-lg font-bold text-onink mb-1">Start the conversation</h2>
                  <p className="text-xs text-onink-muted mb-4">Three fields required. The rest helps us prepare.</p>

                  <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...form.register('website')} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gs-name" className="sr-only">Your name</label>
                      <input id="gs-name" placeholder="Your name *" aria-required="true" aria-invalid={!!err.name} aria-describedby={err.name ? 'gs-name-err' : undefined} className={inputCls} {...form.register('name')} />
                      {err.name && <p id="gs-name-err" className="text-red-400 text-xs mt-1.5">{err.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="gs-email" className="sr-only">Work email</label>
                      <input id="gs-email" placeholder="Work email *" type="email" aria-required="true" aria-invalid={!!err.email} aria-describedby={err.email ? 'gs-email-err' : undefined} className={inputCls} {...form.register('email')} />
                      {err.email && <p id="gs-email-err" className="text-red-400 text-xs mt-1.5">{err.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gs-company" className="sr-only">Company</label>
                      <input id="gs-company" placeholder="Company *" aria-required="true" aria-invalid={!!err.company} aria-describedby={err.company ? 'gs-company-err' : undefined} className={inputCls} {...form.register('company')} />
                      {err.company && <p id="gs-company-err" className="text-red-400 text-xs mt-1.5">{err.company.message}</p>}
                    </div>
                    <label htmlFor="gs-size" className="sr-only">Company size</label>
                    <select
                      id="gs-size"
                      className={`${inputCls} appearance-none ${form.watch('companySize') ? 'text-onink' : 'text-onink-faint'}`}
                      {...form.register('companySize')}
                    >
                      <option value="" className="bg-[#0B1417]">Company size</option>
                      {['1–200', '200–1,000', '1,000–5,000', '5,000+'].map((s) => (
                        <option key={s} value={s} className="bg-[#0B1417]">{s} employees</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="gs-service" className="sr-only">What do you need?</label>
                    <select
                      id="gs-service"
                      aria-required="true"
                      aria-invalid={!!err.serviceInterest}
                      className={`${inputCls} appearance-none ${form.watch('serviceInterest') ? 'text-onink' : 'text-onink-faint'}`}
                      {...form.register('serviceInterest')}
                    >
                      <option value="" className="bg-[#0B1417]">What do you need? *</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0B1417]">{s}</option>
                      ))}
                    </select>
                    {err.serviceInterest && <p className="text-red-400 text-xs mt-1.5">{err.serviceInterest.message}</p>}
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals, timeline, or current setup (optional)"
                    className={`${inputCls} resize-none`}
                    {...form.register('message')}
                  />

                  {status === 'error' && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please email us directly at{' '}
                      <a href="mailto:connect@ifbash.com" className="underline">connect@ifbash.com</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-onink text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #00707C, #00939F)', boxShadow: '0 8px 32px rgba(0,112,124,0.35)' }}
                  >
                    {status === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>Request my scoping call <ArrowRight className="h-4 w-4" /></>)}
                  </button>
                  <p className="text-[11px] text-onink-faint text-center">No newsletters. No spam. We only use this to reply to you.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-sea" />
                <span className="text-sea text-sm font-semibold tracking-widest uppercase">FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">Before you hit send.</h2>
              <p className="text-slate-light text-sm leading-relaxed mb-6">Prefer email? Write to us directly and a consultant will reply.</p>
              <a href="mailto:connect@ifbash.com" className="inline-flex items-center gap-2 text-sea font-semibold text-sm hover:underline">
                connect@ifbash.com <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map(({ q, a }, i) => (
                <div key={q} className="border border-hairline rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-wash transition-colors"
                  >
                    <span className="font-semibold text-ink text-sm">{q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-faint shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <p className="px-5 pb-4 text-sm text-slate-light leading-relaxed">{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
