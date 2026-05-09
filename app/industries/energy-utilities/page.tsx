'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Thermometer, AlertTriangle, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Gauge, Clock } from 'lucide-react';

const A = '#d97706';
const AG = 'linear-gradient(135deg, #d97706, #eab308)';

const gridShift = [
  {
    icon: Zap,
    label: 'Outage Response',
    old: 'Average outage across 1,800 substations lasted 47 hours. Fault isolation was manual across three separate systems. Nine hours from detection to dispatch.',
    new: 'Unified alert feeds from SCADA, ADMS, and substation RTUs into a single incident record. Auto-generated switching sequences and location-based crew routing.',
    metric: 'Outage duration: 47h → 3h. Dispatch: 9.4h → 38min.',
  },
  {
    icon: Thermometer,
    label: 'Asset Performance',
    old: 'Turbine availability in the mid-80s. Two-thirds of faults discovered through unscheduled stops. O&M costs climbing year over year with no ceiling.',
    new: 'IoT vibration sensors flag pre-fault conditions 14–21 days ahead. ML generation models produce P50/P90 forecasts. Maintenance became scheduled, not reactive.',
    metric: 'Availability: 84% → 97%. O&M costs down 40%. Forecast accuracy: 51% → 93%.',
  },
  {
    icon: AlertTriangle,
    label: 'NERC CIP Compliance',
    old: 'Overlapping NERC CIP, EPA, and state mandates. Evidence collection was manual. Three-week scrambles before every audit. Reports assembled from disconnected systems.',
    new: 'GRC maps requirements to assets with automated evidence collection. Continuous emissions monitoring flows directly into EPA report templates. Audit readiness is continuous.',
    metric: 'Zero findings on last review. Audit prep went from weeks to always-ready.',
  },
];

const caseStudies = [
  {
    label: 'Grid Reliability',
    context: 'Investor-owned utility · 32 weeks',
    problem: 'Average outage across 1,800 substations lasted 47 hours. Manual fault isolation across three separate systems. Nine hours from detection to dispatch.',
    whatWeDid: 'Unified alert feeds from SCADA, ADMS, and substation RTUs into a single incident record with auto-generated switching sequences and location-based crew routing.',
    shift: 'Outage duration dropped from 47 hours to just over 3. Dispatch fell from 9.4 hours to 38 minutes. SAIFI and SAIDI improved enough to avoid regulatory penalties.',
    quote: 'ifBash unified three systems into one view. Outage response went from nearly two days to under four hours.',
    author: 'VP Grid Operations',
  },
  {
    label: 'Renewable Operations',
    context: 'Wind generation operator · 28 weeks',
    problem: 'Turbine availability averaged 84% across 14 sites. 67% of faults detected through unscheduled stops. Annual O&M costs climbing without a ceiling.',
    whatWeDid: 'IoT sensors on critical turbine components. Vibration analysis flagging pre-fault conditions 14–21 days ahead. ML generation models for P50/P90 forecasting.',
    shift: 'Availability moved from 84% to 97%. O&M costs fell 40%. Forecast accuracy improved from 51% to 93% MAPE. Zero imbalance charge events in 12 months.',
    quote: 'When turbines stopped failing unexpectedly, our entire P&L changed. ifBash made predictive maintenance real.',
    author: 'VP Asset Management',
  },
];

const faqs = [
  { q: 'How does ServiceNow improve grid reliability?', a: 'SCADA, ADMS, and substation RTU data unified into a single incident record with auto-identified fault location and generated switching sequences.' },
  { q: 'What renewable capabilities does it provide?', a: 'Automated weather API integration, ML models for P50/P90 forecasting, day-ahead bidding automation, and predictive maintenance on turbine components.' },
  { q: 'How does it help with NERC CIP?', a: 'GRC maps NERC CIP requirements to assets with automated evidence collection and an audit-window compliance calendar.' },
  { q: 'Can it handle demand response and storage?', a: 'Yes. Automated dispatch across customer segments, plus real-time storage schedule updates from market pricing and BMS data.' },
  { q: 'How long does an energy implementation take?', a: '28–34 weeks. Grid operations go live first, with renewables and demand response following in later phases.' },
];

export default function EnergyUtilities() {
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              The grid is changing.
              <br />
              <span style={{ color: A }}>Your operations should too.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Aging infrastructure, renewable integration, regulatory pressure — all hitting at once. <span className="text-gray-900 font-semibold">ifBash delivers ServiceNow</span> that unifies grid data, automates outage response, and provides the evidence layer for compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our energy team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#shift" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-amber-500/50 text-gray-600 hover:text-amber-600 font-semibold rounded-xl transition-colors text-sm">
                See the grid shift
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OLD GRID → NEW GRID ── */}
      <section id="shift" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> Old Grid → New Grid
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where the grid was. Where it goes.
              </h2>
            </div>

            <div data-reveal="gridshift" className={`space-y-6 transition-all duration-700 ${revealed.gridshift ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {gridShift.map((x, i) => (
                <div key={i} className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200">
                  <div className="p-6" style={{ background: '#fffbeb' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-amber-100">
                        <x.icon className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Old — {x.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{x.old}</p>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-4 w-4" style={{ color: A }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: A }}>New — {x.label}</span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium">{x.new}</p>
                    <p className="text-xs mt-3 font-medium" style={{ color: A }}>{x.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#fffbeb' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in the Field</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the control room.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-amber-400 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-amber-400 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors">
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
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#fffbeb' }}>
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
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-amber-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
                <span style={{ color: A }}>We configure reliability.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your NOC engineers and field crews, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: Gauge, stat: 'Operators first', desc: 'We sit in your NOC before we configure a single alert rule.' },
                { icon: Zap, stat: 'Reliability from day 1', desc: 'First correlated alerts and automated dispatches go live in weeks.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track SAIFI, SAIDI, and MTTR until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-amber-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
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
                <div key={i} className="border border-gray-200 hover:border-amber-200 rounded-xl overflow-hidden transition-colors bg-white">
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
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to modernise your grid?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest operational bottleneck. We&apos;ll scope the approach in 48 hours.</p>
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
