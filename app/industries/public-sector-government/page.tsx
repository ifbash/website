'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, FileText, Shield, Globe, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const A = '#0d9488';
const AG = 'linear-gradient(135deg, #0d9488, #14b8a6)';

const citizenServices = [
  {
    icon: Users,
    title: 'Citizen Services',
    before: 'Service requests through a phone line staffed 8–4 on weekdays. Average response: 12 days. Citizens couldn\'t track status. Satisfaction in the low twenties.',
    after: '24/7 digital portal. Citizens submit, track, and receive updates online. SLA timers on every service type. Staff see every request in one queue.',
    metric: 'Response: 12d → 6h. Satisfaction: 23% → 83%.',
  },
  {
    icon: FileText,
    title: 'Permits & Licensing',
    before: 'Permit approval required visiting three offices with paper documents. Processing: 34 business days. Renewals forgotten until something expired.',
    after: 'Digital workflows with structured online forms. SLA-enforced review stages. Auto-triggered renewals 60 days before expiry.',
    metric: 'Permit processing: 34 days → 6 days. Renewals became automatic.',
  },
  {
    icon: Shield,
    title: 'Legacy Modernisation',
    before: 'A 23-year-old system couldn\'t share data across 14 agencies. Caseworkers spent 40% of time on manual data entry. Processing averaged 287 days.',
    after: 'FedRAMP-authorised ServiceNow with App Engine connecting 14 agencies through Integration Hub. Applicant portal with real-time status.',
    metric: 'Processing: 287d → 73d. Data entry fell from 40% to under 10%.',
  },
];

const caseStudies = [
  {
    label: 'Municipal Transformation',
    context: 'City of 450K residents · 26 weeks',
    problem: 'Service requests through a phone line staffed 8–4 weekdays. 12-day average response. 23% satisfaction. Permit approval required visiting three offices.',
    whatWeDid: '24/7 citizen portal with digitised permit workflows. SLA timers per service type. Staff see every request in one queue.',
    shift: 'Response dropped from 12 days to 6 hours. Satisfaction moved from 23% to 83%. Permit processing went from 34 business days to 6.',
    quote: 'Citizens who used to wait 12 days for a response now get answers in hours. The portal transformed how our residents see city government.',
    author: 'City Manager',
  },
  {
    label: 'Federal Agency Modernisation',
    context: 'Federal agency · 34 weeks',
    problem: '2.3M active cases on a 23-year-old system that couldn\'t share data across 14 agencies. Caseworkers spent 40% of time on manual data entry.',
    whatWeDid: 'FedRAMP-authorised ServiceNow with App Engine. 14 agencies integrated via Integration Hub. Applicant portal for real-time status.',
    shift: 'Case processing dropped from 287 days to 73. Data entry fell from 40% to 8%. Call volume reduced 62% through self-service. FedRAMP Moderate with zero findings.',
    quote: 'We went from a 23-year-old system that couldn\'t talk to anyone to a platform that connects fourteen agencies.',
    author: 'CIO',
  },
];

const faqs = [
  { q: 'What FedRAMP authorisation does ServiceNow hold?', a: 'ServiceNow holds FedRAMP Moderate Authorisation across its platform and High Authorisation for specific federal environments.' },
  { q: 'Can you integrate with decades-old legacy systems?', a: 'Yes. Integration Hub provides pre-built connectors plus a REST/SOAP API gateway. Legacy systems need connecting, not replacing.' },
  { q: 'How do non-digital citizens access services?', a: 'Web, phone, SMS, and in-person all feed the same case record. Agents can submit on behalf of citizens who don\'t use digital channels.' },
  { q: 'What accessibility standards does the portal meet?', a: 'WCAG 2.1 AA — screen reader compatible, keyboard navigable, multi-language support.' },
  { q: 'How long does a government implementation take?', a: '26–30 weeks: 4 for assessment, 12 for configuration, 8 for testing including FedRAMP, 6 for deployment with citizen onboarding.' },
];

export default function PublicSectorGovernment() {
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { setVisible(true); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { const id = e.target.getAttribute('data-reveal'); if (id) { setRevealed(prev => ({ ...prev, [id]: true })); obs.unobserve(e.target); } } }); },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }) }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center bg-white min-h-[calc(100vh-70px)]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              Government that responds
              <br />
              in <span style={{ color: A }}>hours</span>, not weeks.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Phone lines. Paper forms. Weeks of waiting. <span className="text-gray-900 font-semibold">ifBash delivers ServiceNow</span> that digitises citizen services, connects legacy systems, and makes government responsive — on a FedRAMP-authorised platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our public sector team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-teal-500/50 text-gray-600 hover:text-teal-600 font-semibold rounded-xl transition-colors text-sm">
                See citizen services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIZEN SERVICE TRANSFORMATION ── */}
      <section id="services" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> The Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
                When citizens serve themselves, everything speeds up.
              </h2>
            </div>

            <div data-reveal="services" className={`space-y-5 transition-all duration-700 ${revealed.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {citizenServices.map((x, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-gray-100">
                  <div className="grid sm:grid-cols-5">
                    <div className="sm:col-span-2 p-5" style={{ background: '#f0fdfa' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: AG }}>
                          <x.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{x.title}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{x.before}</p>
                    </div>
                    <div className="sm:col-span-3 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-4 w-4" style={{ color: A }} />
                        <span className="text-xs font-bold text-gray-900">How it changes</span>
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed font-medium mb-3">{x.after}</p>
                      <span className="inline-block text-xs font-bold rounded-full px-3 py-1" style={{ color: A, background: `${A}08` }}>{x.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#f0fdfa' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Practice</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the public sector.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center text-slate-400 hover:text-teal-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center text-slate-400 hover:text-teal-500 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeCase * 100}%)` }}>
              {caseStudies.map((x, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                      <div className="lg:col-span-3">
                        <span className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4" style={{ color: A, backgroundColor: `${A}08` }}>{x.context}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-5">{x.label}</h3>
                        <div className="space-y-4">
                          <div className="rounded-xl border border-red-100 bg-red-50/30 p-4">
                            <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">The Problem</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{x.problem}</p>
                          </div>
                          <div className="rounded-xl border p-4" style={{ borderColor: `${A}20`, background: `${A}03` }}>
                            <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: A }}>What We Did</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{x.whatWeDid}</p>
                          </div>
                        </div>
                        <blockquote className="mt-5 pl-4 border-l-2 text-sm text-gray-600 italic" style={{ borderColor: `${A}40` }}>
                          &ldquo;{x.quote}&rdquo;
                          <span className="block text-xs text-gray-400 mt-1 not-italic">— {x.author}</span>
                        </blockquote>
                      </div>
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#f0fdfa' }}>
                        <div className="px-4 py-3 bg-white border-b border-gray-100">
                          <span className="text-sm font-semibold text-gray-800">What Shifted</span>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-800 leading-relaxed font-medium">{x.shift}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            {caseStudies.map((_, i) => (
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-teal-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #5eead4 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}25`, color: A }}>
                Why ifBash
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">
                We don&apos;t configure software.
                <br />
                <span style={{ color: A }}>We configure trust.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your citizens and caseworkers, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: Users, stat: 'Citizens first', desc: 'We map citizen journeys before we configure a single digital form.' },
                { icon: Shield, stat: 'FedRAMP from day 1', desc: 'Compliance built into the architecture, never retrofitted.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track response times and satisfaction until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-teal-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}15` }}>
                    <Icon className="h-5 w-5" style={{ color: A }} />
                  </div>
                  <div className="text-sm font-bold text-white mb-2">{stat}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}40` }}>
                Ask us directly <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((x, i) => (
                <div key={i} className="border border-gray-200 hover:border-teal-200 rounded-xl overflow-hidden transition-colors bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{x.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 border-t border-gray-100 pt-3">
                      <p className="text-gray-600 text-sm leading-relaxed">{x.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #5eead4 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to modernise citizen services?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest service delivery gap. We&apos;ll scope the approach in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }} aria-label="Free Consultation">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </Link>
      </div>
    </>
  );
}
