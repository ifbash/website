'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Car, AlertTriangle, Shield, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Gauge, ClipboardCheck, Clock } from 'lucide-react';

const A = '#1d4ed8';
const AG = 'linear-gradient(135deg, #1d4ed8, #1e40af)';

const qualityChain = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'PPAP & APQP',
    before: 'PPAP rejection rates averaged 34%. Launch delays: 28 days. Quality records assembled from five disconnected systems — 40 hours per launch package.',
    after: 'CMM data, material certs, and FMEAs flow into a single workspace. PPAP packages auto-assemble to OEM specs. 21-day missing-element alerts prevent last-minute scrambling.',
    stats: [
      { value: '97%', label: 'First-time acceptance' },
      { value: '6h', label: 'PPAP prep time' },
    ],
  },
  {
    step: '02',
    icon: AlertTriangle,
    title: 'Recall Readiness',
    before: 'A recall affecting 340,000 vehicles took 19 days to identify affected owners. 47 days to reach 80% remedy completion. NHTSA issued a formal inquiry.',
    after: 'VIN registration queried instantly. Owner letters auto-generated. Remedy tracked per VIN in real time. NHTSA-format reports generated on demand.',
    stats: [
      { value: '<4h', label: 'Owner notification' },
      { value: '11 days', label: 'Remedy completion' },
    ],
  },
  {
    step: '03',
    icon: Shield,
    title: 'IATF 16949',
    before: 'Audit prep was a quarterly fire drill. Customer-specific requirements tracked on spreadsheets. Non-conformance items had no structured closure workflow.',
    after: 'CSRs enforced through structured workflows. Real-time dashboards show open NCs and clause coverage. Evidence collected continuously — no binder assembly before audits.',
    stats: [
      { value: 'Continuous', label: 'Audit readiness' },
      { value: 'Zero', label: 'NCs overdue' },
    ],
  },
];

const caseStudies = [
  {
    label: 'PPAP Transformation',
    context: 'Tier-1 supplier · 18 weeks',
    problem: 'PPAP rejection rates from three OEMs averaged 34%. Launch delays of 28 days. Quality records pulled from five disconnected systems — 40 hours per launch.',
    whatWeDid: 'APQP/PPAP workflow connecting CMM dimensional data, material certs, and process FMEAs into OEM-specific packages with 21-day missing-element alerts.',
    shift: 'PPAP first-time acceptance went from 66% to 97%. Launch delays collapsed from 28 days to 3. PPAP prep fell from 40 hours to 6.',
    quote: 'ifBash connected five systems into one APQP workspace. PPAP acceptance went from a coin flip to near-perfect.',
    author: 'VP Quality',
  },
  {
    label: 'Recall Readiness',
    context: 'Passenger vehicle OEM · 22 weeks',
    problem: 'A recall affecting 340,000 vehicles took 19 days to identify owners. 47 days to reach 80% remedy completion. NHTSA issued a formal inquiry.',
    whatWeDid: 'Recall Management integrated with VIN registration, dealer management, and state DMV feeds. Auto-generated owner letters. Per-VIN remedy tracking with NHTSA reporting.',
    shift: 'Owner notification went from 19 days to 4 hours. Remedy completion from 47 days to 11. NHTSA compliance achieved on first audit. Regulatory exposure eliminated.',
    quote: 'When a recall hits, hours matter. ifBash got our notification time from 19 days to 4 hours. That\'s the difference between a recall and a crisis.',
    author: 'VP Safety & Compliance',
  },
];

const faqs = [
  { q: 'How does ServiceNow improve PPAP and APQP?', a: 'CMM data, material certs, and FMEAs connected into a single workspace. PPAP packages auto-assemble to OEM portal specs with 21-day missing-element alerts.' },
  { q: 'Can ServiceNow manage vehicle recalls end to end?', a: 'Yes. VIN query, owner letters, dealer scheduling, and per-VIN remedy tracking — all automated. NHTSA-format reports generated on demand.' },
  { q: 'How does it support IATF 16949 compliance?', a: 'Structured workflows enforce IATF 16949 and CSRs. Real-time dashboards show open NCs and clause coverage. Evidence collected continuously — no more audit scrambles.' },
  { q: 'Can ServiceNow ingest live production data?', a: 'Yes. OPC-UA connectors pull real-time PLC data into shift-level OEE dashboards by line, model, and variant.' },
  { q: 'How long does an automotive implementation take?', a: '16–22 weeks. PPAP and quality go live first, with recall management and production analytics following in later phases.' },
];

export default function AutomotiveManufacturing() {
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
      <section className="relative overflow-hidden flex items-center" style={{ background: '#04060d', minHeight: 'calc(100vh - 56px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(29,78,216,0.14) 0%, transparent 60%)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              Quality shouldn&apos;t be found
              <br />
              <span style={{ color: A }}>at the audit.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              PPAP rejections. Recall delays. Audit scrambles. <span className="text-white font-semibold">ifBash delivers ServiceNow</span> that builds quality into production — not inspected in at the end.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our automotive team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#quality" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                See the quality chain
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION QUALITY CHAIN ── */}
      <section id="quality" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> Quality Built In
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
                When quality lives in the process, not the inspection report.
              </h2>
            </div>

            <div data-reveal="quality" className={`space-y-12 transition-all duration-700 ${revealed.quality ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {qualityChain.map((x, i) => (
                <div key={i} className="relative">
                  {/* Connecting line between steps */}
                  {i < qualityChain.length - 1 && (
                    <div className="absolute left-[19px] top-[60px] bottom-[-48px] w-px hidden sm:block" style={{ background: `linear-gradient(to bottom, ${A}40, transparent)` }} />
                  )}

                  <div className="grid sm:grid-cols-12 gap-6">
                    {/* Step marker */}
                    <div className="sm:col-span-1 flex sm:flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: AG }}>
                        {x.step}
                      </div>
                      <div className="sm:hidden">
                        <h3 className="font-bold text-gray-900">{x.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="sm:col-span-11">
                      <div className="hidden sm:flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${A}10` }}>
                          <x.icon className="h-5 w-5" style={{ color: A }} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{x.title}</h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="rounded-xl border border-red-100 bg-red-50/30 p-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2 block">Before</span>
                          <p className="text-sm text-gray-600 leading-relaxed">{x.before}</p>
                        </div>
                        <div className="rounded-xl border p-4" style={{ borderColor: `${A}20`, background: `${A}03` }}>
                          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: A }}>After — ServiceNow + ifBash</span>
                          <p className="text-sm text-gray-800 leading-relaxed font-medium">{x.after}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {x.stats.map(({ value, label }) => (
                          <div key={label} className="rounded-lg border px-3 py-1.5" style={{ borderColor: `${A}20`, background: `${A}04` }}>
                            <span className="text-sm font-bold" style={{ color: A }}>{value}</span>
                            <span className="text-[10px] text-gray-400 ml-1.5 uppercase tracking-wider">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#f8fafc' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Production</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the plant floor.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-blue-400 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors">
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
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#eff6ff' }}>
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
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-blue-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
                <span style={{ color: A }}>We configure first-time quality.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your quality engineers and production managers, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: Gauge, stat: 'Quality teams first', desc: 'We sit with your engineers on the plant floor before we configure a single workflow.' },
                { icon: Car, stat: 'PPAP from day 1', desc: 'First PPAP packages auto-assembled in weeks, not months.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track PPAP acceptance and NC closure until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-blue-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
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
                <div key={i} className="border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden transition-colors bg-white">
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
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to build quality into production?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest quality gap. We&apos;ll scope the approach in 48 hours.</p>
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
