'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, ShoppingCart, Target, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const A = '#ea580c';
const AG = 'linear-gradient(135deg, #ea580c, #f97316)';

const revenueOps = [
  {
    icon: TrendingUp,
    title: 'Demand Planning',
    before: 'Forecasting was spreadsheet-driven with significant error rates. Stockouts at top retailers were a monthly crisis. Seasonal demand overwhelmed stock or left costly excess.',
    after: 'ML models aggregate POS, warehouse, and shipment data into 13-week SKU-location forecasts. Auto-retrains when accuracy drifts. At-risk SKUs flagged 14+ days before stockout.',
    result: 'Stockouts at top retailers eliminated. Seasonal buying went from reactive to predictive.',
  },
  {
    icon: ShoppingCart,
    title: 'Order-to-Cash',
    before: 'Cycle averaged over two weeks. Disputed AR was significant — deductions taken without documentation. Thousands of deduction inquiries monthly.',
    after: 'CSM with automated deduction intake and retailer portal. Workflow routes disputed amounts by deduction code. Fulfillment exceptions trigger coordinated resolution.',
    result: 'Cycle: 16 days → 3.5 days. Disputed AR fell dramatically.',
  },
  {
    icon: Target,
    title: 'Trade Promotion',
    before: 'Lifecycle managed across spreadsheets and email. No deduction aging dashboards. Claims exceeding 45 days went unresolved. Reconciliation was entirely manual.',
    after: 'Custom App Engine managing planning, accrual, claim, and reconciliation. Aging dashboards flag claims exceeding 45 days with auto-escalation.',
    result: 'Deduction resolution within 90 days became the norm. Promotion ROI became measurable.',
  },
];

const caseStudies = [
  {
    label: 'Demand-to-Cash',
    context: 'CPG manufacturer · 26 weeks',
    problem: 'Demand forecasting via spreadsheets. Stockouts at top-20 retailers a monthly crisis. Trade promotion deductions with 41% unresolved beyond 90 days.',
    whatWeDid: 'ITOM for demand sensing. App Engine for trade promotion lifecycle. Integration Hub connecting retailer POS, WMS, and ERP into one platform.',
    shift: 'Forecast accuracy improved sharply. Stockouts eliminated. Deduction resolution within 90 days went from 41% to 94%. Revenue recovered from stockout losses.',
    quote: 'We went from spreadsheets to a platform where demand signals update automatically. Stockouts went from monthly crisis to hasn\'t happened.',
    author: 'VP Supply Chain',
  },
  {
    label: 'Order-to-Cash',
    context: 'Food & beverage distributor · 20 weeks',
    problem: 'Order-to-cash cycle averaging 16 days. Significant disputed AR from undocumented deductions. Thousands of deduction inquiries monthly.',
    whatWeDid: 'CSM with automated deduction intake. Retailer portal for document submission. Workflow routing disputed amounts by deduction code.',
    shift: 'Order-to-cash: 16 days to 3.5. Disputed AR fell sharply. Deduction inquiries dropped to a fraction. CS handle time reduced 67%.',
    quote: 'Retailers were deducting without documentation. ifBash gave us a platform that changed everything about how we manage deductions.',
    author: 'VP Finance',
  },
];

const faqs = [
  { q: 'How does ServiceNow improve demand forecasting for CPG?', a: 'ITOM aggregates POS, warehouse, and shipment data into ML models generating 13-week SKU-location forecasts. Accuracy improves substantially within the first quarter.' },
  { q: 'Can ServiceNow manage trade promotion deductions?', a: 'Yes. App Engine handles the full lifecycle — planning, accrual, claim, reconciliation. Dashboards auto-escalate deductions exceeding 45 days unresolved.' },
  { q: 'How fast can order-to-cash cycles improve?', a: 'Most clients see 50–70% cycle time reduction. Automated milestone tracking and exception workflows eliminate manual handoffs.' },
  { q: 'What systems do you integrate with?', a: 'Retailer POS (Walmart Retail Link, Target Partners Online), WMS, ERP (SAP, Oracle), and TPM systems. All through Integration Hub.' },
  { q: 'How long does a CPG implementation take?', a: '20–26 weeks. Demand planning and order management go live first (12–14 weeks), with trade promotion and quality following.' },
];

export default function ConsumerGoodsRetail() {
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
      <section className="relative overflow-hidden flex items-center" style={{ background: '#0d0704', minHeight: 'calc(100vh - 56px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb923c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(234,88,12,0.14) 0%, transparent 60%)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              From supplier to shelf,
              <br />
              <span style={{ color: A }}>without the gaps.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Stockouts at your biggest retailers. Deductions unresolved for months. Forecasts that miss by miles. <span className="text-white font-semibold">ifBash delivers ServiceNow</span> that connects demand planning, order-to-cash, and trade promotion on one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our CPG team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#ops" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-orange-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                See revenue operations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVENUE OPERATIONS ── */}
      <section id="ops" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> Revenue Operations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                Three revenue leaks that stop leaking.
              </h2>
            </div>

            <div data-reveal="revenue" className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${revealed.revenue ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {revenueOps.map((x, i) => (
                <div key={i} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: AG }}>
                    <x.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{x.title}</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="text-red-400 shrink-0 font-bold">✕</span>
                      <p className="text-gray-500 leading-relaxed">{x.before}</p>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: A }} />
                      <p className="text-gray-700 leading-relaxed font-medium">{x.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic">{x.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#fff7ed' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Revenue</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the P&L.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-orange-400 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-colors">
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
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#fff7ed' }}>
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
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-orange-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb923c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)` }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: `${A}08`, borderColor: `${A}25`, color: A }}>Why ifBash</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t configure software.<br /><span style={{ color: A }}>We configure revenue.</span></h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your revenue and supply chain teams, not the platform.</p>
            </div>
            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: TrendingUp, stat: 'Revenue teams first', desc: 'We sit with your demand planners before we configure a single workflow.' },
                { icon: Target, stat: 'ROI from week 1', desc: 'First automated forecasts and deduction workflows go live in weeks.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track forecast accuracy and deduction resolution until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-orange-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${A}15` }}><Icon className="h-5 w-5" style={{ color: A }} /></div>
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
              <div className="flex items-center gap-3 mb-3"><span className="inline-block w-8 h-px" style={{ backgroundColor: A }} /><span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>FAQ</span></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}40` }}>Ask us directly <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((x, i) => (
                <div key={i} className="border border-gray-200 hover:border-orange-200 rounded-xl overflow-hidden transition-colors bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{x.q}</span><ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} style={{ color: A }} /></button>
                  {openFaq === i && (<div className="px-5 pb-4 border-t border-gray-100 pt-3"><p className="text-gray-600 text-sm leading-relaxed">{x.a}</p></div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb923c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to close the revenue gaps?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest CPG bottleneck. We&apos;ll scope the approach in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>Schedule a consultation <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }} aria-label="Free Consultation"><MessageCircle className="h-6 w-6" /><div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} /></Link>
      </div>
    </>
  );
}
