'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Microscope, Shield, Activity, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, FlaskConical, ClipboardCheck, Clock } from 'lucide-react';

const A = '#059669';
const AG = 'linear-gradient(135deg, #059669, #10b981)';

const pillars = [
  {
    icon: Microscope,
    title: 'Clinical Operations',
    label: 'CTMS · eTMF · EDC',
    points: [
      'Site activation accelerated from 112 days to 19',
      'Protocol deviations detected within hours, not days',
      'Medidata Rave, Veeva Vault, Oracle Clinical unified',
    ],
  },
  {
    icon: Shield,
    title: 'Quality & Compliance',
    label: 'CAPA · Audit · 21 CFR Part 11',
    points: [
      'CAPA closure rate moved from 28% to 94%',
      'First clean FDA audit after platform go-live',
      'Immutable audit trails with electronic signatures',
    ],
  },
  {
    icon: Activity,
    title: 'Pharmacovigilance',
    label: 'AE Intake · Signal Detection · Reporting',
    points: [
      'Adverse events ingested from all sources automatically',
      'Cross-therapeutic-area signal detection runs daily',
      '7-day and 15-day regulatory deadlines enforced by SLA',
    ],
  },
];

const caseStudies = [
  {
    label: 'Clinical Operations',
    context: 'Clinical-stage biopharma · 24 weeks',
    problem: 'Fourteen active trials across 37 global sites tracked through spreadsheets. Site activation averaged 112 days. Deviations discovered 9 days late.',
    whatWeDid: 'Unified clinical operations platform connecting Medidata Rave, Veeva Vault eTMF, and Oracle Clinical CTMS through ServiceNow. Daily cross-system deviation scans.',
    shift: 'Site activation dropped from 112 days to 19. Deviation identification went from 9 days to hours. Trial close-out shortened by 8 weeks.',
    quote: 'Deviations are flagged within hours. Site activation went from four months to three weeks. ifBash transformed how we run trials.',
    author: 'VP Clinical Operations',
  },
  {
    label: 'Quality Transformation',
    context: 'Medical device manufacturer · 20 weeks',
    problem: 'CAPA on-time closure at 28%. Two FDA Form 483s in 18 months. Complaint intake handled through emailed PDFs that sat for days without review.',
    whatWeDid: 'QMS on ServiceNow with CAPA workflows enforcing root-cause templates. Complaint intake replaced with structured portal and e-signatures.',
    shift: 'CAPA closure went from 28% to 94%. First clean FDA audit. Design change cycle reduced by 67%. The quality team now leads audits instead of dreading them.',
    quote: 'ifBash rebuilt our entire QMS on ServiceNow. CAPA closure went from 28% to 94%. Our last audit was the cleanest in company history.',
    author: 'VP Quality',
  },
];

const faqs = [
  { q: 'How does ServiceNow integrate with clinical trial systems?', a: 'Connects to Medidata Rave, Veeva Vault CTMS/eTMF, and Oracle Clinical through Integration Hub. Protocol deviations flow into ServiceNow within hours.' },
  { q: 'What 21 CFR Part 11 compliance is included?', a: 'System-generated audit trails, electronic signatures with unique credentials, signature-to-record binding, and role-based authority enforcement — all built in, not bolted on.' },
  { q: 'Can ServiceNow improve pharmacovigilance?', a: 'Yes. Adverse event intake routes into structured case management with SLA timers enforcing 7-day and 15-day regulatory reporting deadlines.' },
  { q: 'How does it handle cold chain monitoring?', a: 'Temperature sensor data ingested in real time. Any excursion triggers automatic quarantine holds and deviation investigation workflows.' },
  { q: 'How long does a life sciences implementation take?', a: '24–28 weeks. Clinical operations and quality go live first, with regulatory and safety following in later phases. IQ/OQ/PQ validation runs in parallel.' },
];

export default function LifeSciencesPharma() {
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
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.06] tracking-tight mb-6">
              From lab to patient.
              <br />
              <span style={{ color: A }}>Faster.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              Clinical operations stalled by spreadsheets. Quality systems that fail audits. Safety signals missed because intake is manual. <span className="text-gray-900 font-semibold">ifBash delivers ServiceNow</span> that connects trials, quality, and safety on one validated platform.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { value: '112d → 19d', label: 'Site activation' },
                { value: '28% → 94%', label: 'CAPA closure' },
                { value: '< 6 hours', label: 'Deviation detection' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border px-4 py-2.5" style={{ borderColor: `${A}20`, background: `${A}06` }}>
                  <div className="text-sm font-bold" style={{ color: A }}>{value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our life sciences team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#pillars" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-emerald-500/50 text-gray-600 hover:text-emerald-600 font-semibold rounded-xl transition-colors text-sm">
                See the platform pillars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section id="pillars" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> Platform Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
                Three systems. One validated platform.
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                Clinical, quality, and safety run on separate systems today. ServiceNow unifies them — validated, compliant, and connected.
              </p>
            </div>

            <div data-reveal="pillars" className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${revealed.pillars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {pillars.map((x, i) => (
                <div key={i} className="group relative rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg" style={{ background: AG }}>
                    {i + 1}
                  </div>

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `${A}12` }}>
                    <x.icon className="h-6 w-6" style={{ color: A }} />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-1">{x.title}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider mb-4 block" style={{ color: A }}>{x.label}</span>

                  <ul className="space-y-2.5">
                    {x.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: A }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF IN PRACTICE ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#f0fdf4' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Practice</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes from the lab to the clinic.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-emerald-400 flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-emerald-400 flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-colors">
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
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#ecfdf5' }}>
                        <div className="px-4 py-3 bg-white border-b border-gray-100 flex items-center gap-2">
                          <FlaskConical className="h-4 w-4" style={{ color: A }} />
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
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-emerald-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
                <span style={{ color: A }}>We configure speed to market.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your scientists and quality teams, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: ClipboardCheck, stat: 'Scientists first', desc: 'We sit with your clinical ops teams before we configure a single workflow.' },
                { icon: Shield, stat: 'Validated from day 1', desc: 'IQ/OQ/PQ built into every phase. Compliance is never retrofitted.' },
                { icon: Clock, stat: 'We stay', desc: '90-day hypercare. We track CAPA closure and deviation detection until they stick.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-emerald-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
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
                <div key={i} className="border border-gray-200 hover:border-emerald-200 rounded-xl overflow-hidden transition-colors bg-white">
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
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to accelerate your pipeline?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us about your biggest clinical or quality bottleneck. We&apos;ll scope the approach in 48 hours.</p>
            <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
              Schedule a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating chat button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <Link href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ background: AG, boxShadow: `0 8px 24px ${A}40` }} aria-label="Free Consultation">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: A }} />
        </Link>
      </div>
    </>
  );
}
