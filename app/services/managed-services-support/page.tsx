'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Shield, TrendingUp, Wrench, HeartPulse, Activity, Zap, Clock } from 'lucide-react';

const A = '#0d9488';
const AG = 'linear-gradient(135deg, #0d9488, #059669)';

const caseStudies = [
  { client: 'TechCorp Global', industry: 'Technology', timeline: 'Ongoing', challenge: 'ServiceNow platform degrading with 12-second response times during peak. 34% ticket backlog growing monthly. No internal expertise to diagnose root cause.', solution: 'Full platform audit identified 3 custom scripts causing database lock contention in week one. 200+ health checks deployed. Dedicated pod of 4 engineers with SLA ownership.', results: ['Response time: 12s → 1.1s', 'Ticket backlog eliminated in 6 weeks', '99.97% uptime — up from 96.3%', '23 incidents prevented proactively'], quote: 'They found in 5 days what our team couldn\'t diagnose in 8 months. Performance improvement alone paid for the first year.', author: 'David Kim, VP Technology' },
  { client: 'HealthNet Systems', industry: 'Healthcare', timeline: 'Ongoing', challenge: 'HIPAA-critical environment with 3 compliance gaps identified in external audit. 2 outages per quarter. Issues discovered only when users reported them.', solution: 'Compliance gap remediation in week 3. 200 custom health checks. 90-day compliance review cycle with audit-ready reporting. Proactive monitoring catching issues before user impact.', results: ['3 compliance gaps resolved before next audit', '0 outages in 18 months — down from 2/quarter', 'P1 response: 15 min SLA met 100%', 'Zero compliance findings across 3 audits'], quote: 'Zero compliance findings in 18 months. The proactive posture means we find things before auditors do — and before patients are affected.', author: 'Sandra Mills, CCO' },
  { client: 'RetailChain Co', industry: 'Retail', timeline: 'Ongoing', challenge: 'Black Friday 2022: platform degraded under 3× load, causing $2.1M in missed transactions. No capacity model, no peak-season runbooks, no auto-scaling.', solution: 'Capacity model from 18 months of historical data. Auto-scaling at 200%, 300%, 400% thresholds. Peak-season runbooks with 30-min check cadence. Annual pre-Black Friday load test.', results: ['3 peak seasons: zero outages', '$2.1M outage cost → $0', 'Auto-scaling triggers in under 60s', 'Infrastructure cost down 47%'], quote: 'We ran load tests in October. The platform handled 400% of normal load without a single issue. First time in four years we went into peak season without anxiety.', author: 'Paul Chang, Head of IT Ops' },
];

const methodology = [
  { phase: 'Onboarding & Baseline', duration: 'Week 1–2', items: ['Full platform audit & SLA definition', '200+ health check deployment', 'Runbook creation & team introduction'] },
  { phase: 'Stabilise & Optimise', duration: 'Week 3–6', items: ['Performance tuning & backlog clearance', 'Alert calibration & quick wins', 'Baseline reporting established'] },
  { phase: 'Proactive Management', duration: 'Week 7+', items: ['24/7 monitoring with incident prevention', 'Capacity planning & monthly health reports', '90-day compliance review cycle'] },
  { phase: 'Continuous Improvement', duration: 'Ongoing', items: ['Platform upgrades with zero-downtime', 'Feature adoption & cost optimisation', 'Quarterly business reviews & roadmap'] },
];

const services = [
  { icon: Activity, title: '24/7 Platform Monitoring', desc: '200+ custom health checks across scripts, integrations, database, and response times. Degradation detected in seconds — usually before users report it. NOC staffed 24/7/365 by engineers who know your instance.', benefits: ['200+ health checks per environment', 'Alert-to-engineer in under 90 seconds'] },
  { icon: Zap, title: 'Incident Management', desc: 'Tiered SLA-backed response. P1: senior engineer on call within 15 minutes, owns until resolution. Every incident closes with root cause analysis and preventive action.', benefits: ['P1: 15-min response, engineer-owned', 'RCA + preventive action on every P1/P2'] },
  { icon: Shield, title: 'Compliance & Security', desc: '90-day compliance cycle producing audit-ready reports before auditors ask. Security patches tested in sandbox, then production with rollback plan ready.', benefits: ['90-day compliance cycle', 'Patches: sandbox → test → production'] },
  { icon: TrendingUp, title: 'Performance Optimisation', desc: 'Query analysis, script profiling, and cache optimisation run continuously — not just when something breaks. Most clients see measurable improvement within 30 days.', benefits: ['Monthly query & script profiling', 'Cache & index optimisation'] },
  { icon: Wrench, title: 'Platform Administration', desc: 'Certified admins handling configuration changes through documented change management. Release management for all upgrades with zero unplanned downtime.', benefits: ['Change-managed config updates', 'Zero-downtime upgrades'] },
  { icon: HeartPulse, title: 'Proactive Health Checks', desc: 'Monthly technical health report covering performance, technical debt, upgrade readiness, and adoption. Quarterly strategic review with platform owner.', benefits: ['Monthly health report with actions', 'Quarterly strategic review'] },
];

const faqs = [
  { q: 'What does managed services include?', a: '24/7 monitoring, incident management with SLA-backed response, performance optimisation, compliance management, platform administration, upgrades, and proactive health checks. Dedicated pod of engineers as your team extension.' },
  { q: 'What SLAs do you guarantee?', a: 'P1: 15-min response, 4-hr resolution. P2: 30-min response, 8-hr resolution. P3: 2-hr response, 24-hr resolution. 99.9%+ uptime with financial penalties if we miss. Zero missed SLAs across all active clients.' },
  { q: 'How quickly can managed services start?', a: 'Parallel with final implementation phase for new deployments — zero gap between go-live and support. For existing platforms: 2-week onboarding including full audit, monitoring setup, and runbook creation.' },
  { q: 'Do you handle platform upgrades?', a: 'Yes — planning, sandbox testing, user communication, rollback planning, and production deployment. 100% success rate with zero unplanned downtime across 400+ upgrades.' },
  { q: 'Can you support an environment implemented by another vendor?', a: 'Absolutely. 2-week onboarding audit identifies technical debt, configuration risks, and quick wins. We take over ongoing management from there — this is a significant portion of our managed services clients.' },
];

export default function ManagedServicesPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useState(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }} aria-label="Talk to Support"><MessageCircle className="h-6 w-6" /></a>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-18 pb-0 text-center">
          <div className="flex items-center justify-center gap-3 mb-6"><span className="inline-block w-8 h-px bg-teal-500" /><span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">Managed Services & Support</span><span className="inline-block w-8 h-px bg-teal-500" /></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mb-6">While you sleep.{' '}<span style={{ background: 'linear-gradient(90deg,#2dd4bf,#34d399,#6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We watch.</span></h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">Your ServiceNow platform — monitored, managed, and continuously optimised by <span className="text-teal-300 font-semibold">50+ certified experts</span>. Proactive support that stops incidents before your users notice.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 24px ${A}4d` }}>Get Managed Services <ArrowRight className="h-4 w-4" /></a>
            <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-teal-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">See Uptime Records</a>
          </div>

          {/* Ops center visual */}
          <div className="bg-[#060f0e] border border-teal-500/20 rounded-2xl overflow-hidden text-left" style={{ boxShadow: '0 0 80px rgba(13,148,136,0.12)' }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-teal-500/15 bg-teal-500/5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /><span className="ml-3 text-gray-500 text-xs font-mono">ops-center — live 24/7/365</span><span className="ml-auto text-xs font-mono text-green-400"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block mr-1" />ALL SYSTEMS NOMINAL</span></div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
              <div className="px-6 py-5 space-y-2 font-mono text-xs">
                <p className="text-green-400">✓ Platform Health — 99.97% uptime</p>
                <p className="text-teal-400">✓ P1 Response — 12 min avg</p>
                <p className="text-blue-400">→ Auto-scaled memory spike resolved</p>
                <p className="text-yellow-400">⟳ SOC2 audit cycle — clean</p>
                <p className="text-slate-600 animate-pulse">█</p>
              </div>
              <div className="px-6 py-5 grid grid-cols-2 gap-3">
                {[{ l: 'Platform uptime', v: '99.97%', c: 'text-green-400' }, { l: 'P1 avg response', v: '12 min', c: 'text-teal-400' }, { l: 'Incidents prevented', v: '2,847', c: 'text-blue-400' }, { l: 'Client satisfaction', v: '4.9/5', c: 'text-yellow-400' }].map((m, i) => (
                  <div key={i} className="rounded-xl p-3 border border-white/5" style={{ background: 'rgba(13,148,136,0.06)' }}><div className={`text-xl font-bold font-mono ${m.c}`}>{m.v}</div><div className="text-[10px] text-slate-500 mt-1">{m.l}</div></div>
                ))}
              </div>
            </div>
            <div className="px-5 py-3 border-t border-white/8 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-slate-500 font-mono">847 instances monitored · 0 active incidents · last check 2s ago</span></div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/8">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[{v:'99.97%',l:'Uptime guarantee'},{v:'15 min',l:'P1 response SLA'},{v:'24/7',l:'Expert coverage'},{v:'0',l:'Missed SLAs'}].map((s,i)=>(<div key={i} className="py-6 px-6 text-center"><div className="text-2xl font-bold text-teal-400">{s.v}</div><div className="text-xs text-slate-500 mt-1">{s.l}</div></div>))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + SLA TABLE */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-500" /><span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">What We Manage</span></div><h2 className="text-3xl sm:text-4xl font-bold text-white">Comprehensive coverage. Zero gaps.</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {services.map(({ icon: Icon, title, desc, benefits }) => (
              <div key={title} className="group rounded-2xl p-6 border border-white/8 hover:border-teal-500/40 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 group-hover:bg-teal-500/25 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-teal-400" /></div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">{desc}</p>
                <div className="space-y-1">{benefits.map(b => <div key={b} className="flex items-center gap-2 text-xs text-slate-400"><CheckCircle className="h-3 w-3 text-teal-400 shrink-0" />{b}</div>)}</div>
              </div>
            ))}
          </div>

          {/* SLA table */}
          <div className="rounded-2xl border border-teal-500/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-teal-500/15 flex items-center gap-3" style={{ background: 'rgba(13,148,136,0.08)' }}><Shield className="h-5 w-5 text-teal-400 shrink-0" /><span className="text-sm font-bold text-white">SLA Commitment — contractually guaranteed</span></div>
            <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-white/8"><th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Priority</th><th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Response</th><th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Resolution</th><th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Our avg</th></tr></thead><tbody>{[{ p: 'P1 — Critical', resp: '15 min', res: '4 hours', avg: '12 min', c: 'text-red-400' },{ p: 'P2 — High', resp: '30 min', res: '8 hours', avg: '22 min', c: 'text-orange-400' },{ p: 'P3 — Medium', resp: '2 hours', res: '24 hours', avg: '1.4 hrs', c: 'text-yellow-400' },{ p: 'P4 — Low', resp: '8 hours', res: '72 hours', avg: '6.2 hrs', c: 'text-teal-400' }].map((row, i) => (<tr key={i} className="border-b border-white/5"><td className={`px-6 py-4 font-semibold ${row.c}`}>{row.p}</td><td className="px-6 py-4 text-white font-mono">{row.resp}</td><td className="px-6 py-4 text-slate-300 font-mono">{row.res}</td><td className="px-6 py-4"><span className="text-teal-400 font-semibold font-mono">{row.avg}</span><span className="text-xs text-slate-500 ml-1">actual</span></td></tr>))}</tbody></table></div>
            <div className="px-6 py-3 border-t border-white/8 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-teal-400 shrink-0" /><span className="text-xs text-slate-400">Never missed a contracted SLA. Financial penalty clause in every agreement.</span></div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">How We Onboard</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Live in 2 weeks. Optimised in 6.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodology.map((step, i) => (
              <div key={i} className="text-center" style={{ opacity: phasesVisible ? 1 : 0, transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease', transitionDelay: `${i * 120}ms` }}>
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-lg">{i + 1}</div>
                <div className="text-xs font-semibold text-teal-600 mb-2">{step.duration}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.phase}</h3>
                <ul className="space-y-1.5 text-left">{step.items.map((item, j) => <li key={j} className="flex items-start gap-2 text-xs text-gray-500"><span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 shrink-0" />{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Zero outages. Zero excuses.</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>{caseStudies.map((cs, i) => (
              <div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-teal-600 bg-teal-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                    <div className="space-y-4"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div><div><div className="text-xs font-semibold text-teal-500 uppercase tracking-widest mb-1">Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div></div>
                    <blockquote className="mt-5 pl-4 border-l-2 border-teal-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                  </div>
                  <div className="rounded-xl p-5 border border-teal-200" style={{ background: '#f0fdfb' }}><div className="text-xs text-green-700 uppercase tracking-widest font-semibold mb-3">Results</div><div className="space-y-2">{cs.results.map((r, j) => <div key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle className="h-4 w-4 text-teal-500 shrink-0" />{r}</div>)}</div></div>
                </div>
              </div></div>
            ))}</div></div>
            <div className="flex items-center justify-between mt-5">
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center"><ChevronLeft className="h-5 w-5 text-gray-500" /></button>
              <div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-teal-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div>
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center"><ChevronRight className="h-5 w-5 text-gray-500" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl font-bold text-gray-900 mb-3">Common questions.</h2><a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{ background: AG }}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
            <div className="lg:col-span-2 space-y-3">{faqs.map((f, i) => (
              <div key={i} className="border border-gray-200 hover:border-teal-200 rounded-xl overflow-hidden transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"><span className="font-semibold text-gray-800 pr-4 text-sm">{f.q}</span><ChevronDown className={`h-5 w-5 text-teal-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} /></button>
                {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm">{f.a}</p></div>}
              </div>
            ))}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Never worry about your platform again.</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us about your environment. We&apos;ll complete a free platform health audit and propose your managed services package — in 48 hours.</p>
          <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{ background: AG, boxShadow: `0 8px 32px ${A}4d` }}>Free Platform Audit <ArrowRight className="h-5 w-5" /></a>
        </div>
      </section>
    </>
  );
}
