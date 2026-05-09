'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HeartPulse, Stethoscope, MonitorSmartphone, Shield, MessageCircle, ChevronDown, Activity, ChevronLeft, ChevronRight, Bed, Users, ClipboardCheck, Clock } from 'lucide-react';

const A = '#e11d48';
const AG = 'linear-gradient(135deg, #e11d48, #be123c)';

const snCapabilities = [
  {
    icon: Stethoscope,
    title: 'Clinical Service Desk',
    product: 'ITSM + HCLS',
    outcomes: ['42% fewer clinical IT tickets', 'Nurse call resolution under 4 min'],
  },
  {
    icon: Bed,
    title: 'Patient Flow & Operations',
    product: 'HCLS Operations',
    outcomes: ['Bed turnover accelerated 38%', 'Transfer delays eliminated'],
  },
  {
    icon: Users,
    title: 'Care Team Collaboration',
    product: 'Provider Collaboration',
    outcomes: ['Referral closure in hours, not days', 'Readmission risk flagged at discharge'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Patient Digital Front Door',
    product: 'CSM Portal',
    outcomes: ['Portal adoption: 23% → 71%', 'No-show rate cut by two-thirds'],
  },
];

const transformations = [
  {
    icon: HeartPulse,
    label: 'Risk Detection',
    before: 'Manual chart review to find high-risk patients. Most missed for two days after discharge — readmissions were a surprise, not a signal.',
    after: 'Daily automated risk scoring. Patients above threshold auto-routed within 24 hours.',
    metric: 'Readmissions dropped sharply. High-risk patients reached within 24 hours.',
  },
  {
    icon: Activity,
    label: 'Care Continuity',
    before: 'Discharge instructions trapped in a single EHR. The next provider never sees them. Follow-up is hope, not process.',
    after: 'Care plans shared across every facility in real time. Follow-up triggers within two hours.',
    metric: 'Follow-up completion crossed 90%. Care coordination moved into the top decile.',
  },
  {
    icon: Shield,
    label: 'HIPAA Compliance',
    before: 'Privacy audits were quarterly fire drills. PHI access logs scattered across systems. Breach detection relied on someone noticing.',
    after: 'Role-based PHI access with full audit logging. Anomaly detection notifies the Privacy Officer within minutes.',
    metric: 'Zero audit findings. Breach detection went from days to minutes. BAAs never expire unnoticed.',
  },
];

const caseStudies = [
  {
    label: 'Care Coordination',
    context: 'Multi-hospital system · 24 weeks',
    problem: 'Fourteen hospitals. Fourteen discharge processes. High-risk patients identified through manual chart review — most missed for two days after leaving.',
    whatWeDid: 'Unified care plans across every facility. Predictive readmission scoring runs daily. Patients above threshold auto-routed to a coordinator.',
    shift: 'Readmissions dropped sharply. Care coordination moved into the top decile. High-risk patients reached within 24 hours.',
    quote: 'We had fourteen hospitals running fourteen different discharge processes. ifBash built a platform that eliminated every crack.',
    author: 'Chief Medical Officer',
  },
  {
    label: 'Patient Access',
    context: 'Large clinic group · 20 weeks',
    problem: 'Twenty-three day wait for primary care. One in five appointments was a no-show. Portal activation stuck in the low twenties — ten clicks to sign up.',
    whatWeDid: 'Real-time scheduling across all locations. Three-step portal activation. Automated reminders with two-tap reschedule.',
    shift: 'Wait times dropped to under a week. No-shows fell by two-thirds. Portal adoption crossed 70%.',
    quote: 'No-shows went from one in five to almost none because patients could reschedule on their own. The portal went from a checkbox to the front door.',
    author: 'VP of Operations',
  },
];

const faqs = [
  { q: 'What EHR systems does ServiceNow integrate with?', a: 'Epic, Oracle Health (Cerner), and Meditech via HL7 FHIR R4. Custom integrations with any EHR through Integration Hub.' },
  { q: 'How long does a healthcare implementation take?', a: 'Most engagements go live in 20–24 weeks. Care coordination and patient access deploy first — typically live by week 12.' },
  { q: 'What HIPAA compliance comes built in?', a: 'Role-based PHI access controls, full audit logging, automated anomaly detection with Privacy Officer notification, and BAA lifecycle management.' },
  { q: 'Will patients actually use the digital portal?', a: 'Yes — when activation takes three steps instead of ten. Most clinics see adoption cross 70% within the first quarter.' },
  { q: 'How do you handle multi-facility rollouts?', a: 'Phased deployment — one facility at a time, starting with the one that needs it most. We don\'t move on until each site is stable.' },
];

export default function HealthcareProviders() {
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { setVisible(true); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute('data-reveal');
            if (id) { setRevealed(prev => ({ ...prev, [id]: true })); obs.unobserve(e.target); }
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }) }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center" style={{ background: '#0d0406', minHeight: 'calc(100vh - 56px)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(225,29,72,0.14) 0%, transparent 60%)' }} />
        {/* Subtle decorative orbs */}
        <div className="absolute top-1/4 right-[15%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.06]" style={{ background: `radial-gradient(circle, ${A}, transparent 70%)`, filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 left-[10%] w-[200px] h-[200px] rounded-full pointer-events-none opacity-[0.04]" style={{ background: `radial-gradient(circle, #fb7185, transparent 70%)`, filter: 'blur(40px)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-12 sm:py-14">
          <div className={`max-w-3xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
              A patient sees five providers.
              <br />
              <span style={{ background: `linear-gradient(90deg, #fb7185, ${A})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                None of them share a care plan.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Every handoff between facilities is where care breaks down. <span className="text-white font-semibold">ifBash delivers ServiceNow</span> that connects your entire care network — no gaps, no missed handoffs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: AG, boxShadow: `0 8px 28px ${A}40` }}>
                Talk to our healthcare team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#capabilities" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 hover:border-rose-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                Explore platform capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICENOW HEALTHCARE ENGINE ── */}
      <section id="capabilities" className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> Platform Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                The ServiceNow Healthcare Engine.
              </h2>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                Four platform capabilities that turn fragmented care into a connected system.
              </p>
            </div>

            <div data-reveal="capabilities" className={`grid sm:grid-cols-2 gap-5 transition-all duration-700 ${revealed.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {snCapabilities.map((x, i) => (
                <div key={i} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all bg-white" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0" style={{ background: AG }}>
                      <x.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{x.title}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: A }}>{x.product}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {x.outcomes.map((o, j) => (
                      <span key={j} className="inline-flex items-center gap-1 text-[11px] font-medium rounded-full px-2.5 py-1" style={{ color: A, background: `${A}08`, border: `1px solid ${A}15` }}>
                        <CheckCircle className="h-3 w-3" /> {o}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TRANSFORMATION ── */}
      <section className="py-16 lg:py-20" style={{ background: '#fff5f5' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: A }}>
                <span className="w-6 h-px" style={{ backgroundColor: A }} /> The Shift
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                This is what changes when every provider sees the same patient.
              </h2>
            </div>

            <div className="space-y-6">
              {transformations.map((x, i) => (
                <div key={i} className="relative group">
                  {/* Gradient flow bar at top */}
                  <div className="absolute top-0 left-[5%] right-[5%] h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, #fca5a5, ${A}, #fca5a5)` }} />

                  <div className="grid sm:grid-cols-12 rounded-2xl overflow-hidden border border-gray-200 bg-white">
                    {/* Before */}
                    <div className="sm:col-span-5 p-5" style={{ background: '#fef2f2' }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2 block">Before</span>
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${A}10` }}>
                          <x.icon className="h-3.5 w-3.5" style={{ color: A }} />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{x.before}</p>
                      </div>
                    </div>

                    {/* Visual transition bridge — arrow column */}
                    <div className="hidden sm:flex sm:col-span-2 items-center justify-center relative" style={{ background: `linear-gradient(90deg, #fef2f2, #fff, #fff)` }}>
                      <div className="absolute inset-y-4 left-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${A}30, transparent)` }} />
                      <div className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 z-10">
                        <ArrowRight className="h-4 w-4" style={{ color: A }} />
                      </div>
                      <div className="absolute inset-y-4 right-0 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${A}30, transparent)` }} />
                    </div>

                    {/* After */}
                    <div className="sm:col-span-5 p-5 flex flex-col justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: A }}>After — {x.label}</span>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: A }} />
                        <div>
                          <p className="text-sm text-gray-800 leading-relaxed font-medium">{x.after}</p>
                          <p className="text-xs mt-2 font-medium" style={{ color: A }}>{x.metric}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Results scorecard */}
            <div className="mt-14 pt-10 border-t border-rose-100">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Results across our healthcare engagements</span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { value: '62%', label: 'Fewer readmissions' },
                  { value: '71%', label: 'Portal adoption' },
                  { value: '<24h', label: 'Risk reach' },
                  { value: '90%', label: 'Follow-up rate' },
                  { value: '0', label: 'Audit findings' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{value}</div>
                    <div className="w-6 h-0.5 rounded-full mx-auto my-2 group-hover:w-10 transition-all duration-300" style={{ background: AG }} />
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE IFBASH DIFFERENCE ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
                <span style={{ color: A }}>We configure outcomes.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                We start with your clinicians, not the platform.
              </p>
            </div>

            <div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {[
                { icon: ClipboardCheck, stat: 'Clinicians first', desc: 'We shadow shifts for two weeks before we configure a single workflow.' },
                { icon: Clock, stat: 'Quiet go-lives', desc: 'No war rooms. No escalations. No clinicians surprised on Monday morning.' },
                { icon: HeartPulse, stat: 'We stay', desc: '90-day hypercare minimum. We track every metric until it holds.' },
              ].map(({ icon: Icon, stat, desc }) => (
                <div key={stat} className="rounded-2xl border p-6 text-center hover:border-rose-500/30 transition-all" style={{ borderColor: `${A}15`, background: `${A}04` }}>
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

      {/* ── PROOF IN PRACTICE ── */}
      <section id="impact" className="py-16 lg:py-20" style={{ background: '#fff5f5' }}>
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-px" style={{ backgroundColor: A }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: A }}>Proof in Practice</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real outcomes, real voices.</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <button onClick={() => setActiveCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-rose-400 flex items-center justify-center text-slate-400 hover:text-rose-400 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setActiveCase(p => (p + 1) % caseStudies.length)} className="w-9 h-9 rounded-full border border-gray-200 hover:border-rose-400 flex items-center justify-center text-slate-400 hover:text-rose-400 transition-colors">
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
                      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#fff5f5' }}>
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
              <button key={i} onClick={() => setActiveCase(i)} className={`rounded-full transition-all duration-300 ${i === activeCase ? 'w-8 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-rose-400'}`} style={i === activeCase ? { backgroundColor: A } : {}} />
            ))}
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
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Quick answers about ServiceNow for healthcare — from EHR integration to multi-facility rollouts.</p>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 6px 20px ${A}40` }}>
                Ask us directly <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-2 space-y-2">
              {faqs.map((x, i) => (
                <div key={i} className="border border-gray-200 hover:border-rose-200 rounded-xl overflow-hidden transition-colors bg-white">
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
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fb7185 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="max-w-xl mx-auto rounded-3xl border p-8 sm:p-10 text-center" style={{ borderColor: `${A}30`, background: `linear-gradient(135deg, ${A}0C, ${A}04)` }}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border" style={{ backgroundColor: `${A}15`, borderColor: `${A}30`, color: A }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />48-hour scoping call
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Ready to connect your care?</h2>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">Tell us your biggest gap — readmissions, portal adoption, care coordination. We&apos;ll scope the approach in 48 hours.</p>
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
