'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Star, Users, Zap, Shield, TrendingUp, Target, Clock, Wrench, HeartPulse, Activity, MessageCircle, ChevronDown } from 'lucide-react';

const caseStudies = [
  { client: "TechCorp Global", industry: "Technology", challenge: "ServiceNow platform performance degrading with response times exceeding 12 seconds during peak hours, a 34% ticket backlog growing month-on-month, and no internal expertise to diagnose root cause — let alone fix it", solution: "Full platform audit in week one identified 3 custom scripts causing database lock contention. Monitoring instrumentation added across 200+ components. Dedicated pod of 4 engineers with defined SLA ownership.", results: ["Peak response time: 12 sec → 1.1 sec after tuning", "Ticket backlog eliminated in 6 weeks, now maintained at zero", "99.97% uptime — up from 96.3% in the 6 months prior", "23 incidents prevented proactively in the first quarter"], timeline: "Ongoing since week 1", testimonial: "They found in 5 days what our internal team had been unable to diagnose for 8 months. The platform performance improvement alone paid for the first year of managed services." },
  { client: "HealthNet Systems", industry: "Healthcare", challenge: "HIPAA-critical ServiceNow environment with 3 compliance gaps identified in an external audit, reactive support causing 2 outages per quarter, and no proactive monitoring capability — issues discovered only when users reported them", solution: "Compliance gap remediation completed in week 3. Proactive monitoring with 200 custom health checks across the platform. Dedicated compliance review every 90 days with audit-ready reporting.", results: ["3 compliance gaps resolved before next audit cycle", "Outages: 2/quarter → 0 in 18 months under management", "P1 response time: 15 min SLA met 100% of the time", "Zero compliance findings across 3 audit cycles"], timeline: "Ongoing since week 2", testimonial: "Zero compliance findings in 18 months. The proactive posture means we find things before auditors do — and before our patients are affected." },
  { client: "RetailChain Co", industry: "Retail", challenge: "Black Friday 2022: ServiceNow platform degraded under 3× normal load, causing order management delays and $2.1M in missed transactions. No capacity model, no peak-season runbooks, and no auto-scaling in place", solution: "Capacity model built from 18 months of historical load data. Auto-scaling rules configured for 200%, 300%, and 400% load thresholds. Peak-season runbooks with 30-minute check cadence. Pre-Black Friday load test every October.", results: ["3 consecutive peak seasons: zero outages, zero degradation", "$2.1M outage cost in 2022 → $0 in 2023 and 2024", "Auto-scaling triggered and resolved in under 60 seconds", "Infrastructure cost down 47% through right-sizing between peaks"], timeline: "Ongoing since week 3", testimonial: "We ran load tests in October, the platform handled 400% of normal load without a single issue. That's the first time in four years we went into peak season without anxiety." },
];

const clientStories = [
  { name: "David Kim", title: "VP of Technology, TechCorp Global", story: "The diagnostic alone was worth it. In 5 days they'd traced our 12-second response times to 3 custom scripts written 4 years ago that nobody touched because nobody understood them. They fixed the scripts, added monitoring, and our platform has run at under 1.1 seconds ever since. I've been in IT for 22 years — I've never seen that kind of root-cause speed.", metric: "Response time 12s → 1.1s. 23 incidents prevented before users noticed.", rating: 5 },
  { name: "Sandra Mills", title: "Chief Compliance Officer, HealthNet Systems", story: "Our auditors used to be the ones finding things. Now ifBash's 90-day compliance review finds them first — with a remediation plan already attached. Three audit cycles with zero findings. That's not luck. That's what a proactive managed services team actually looks like versus a reactive one.", metric: "Zero compliance findings across 3 audit cycles. 0 outages in 18 months.", rating: 5 },
  { name: "Paul Chang", title: "Head of IT Operations, RetailChain Co", story: "We told them about 2022. They built us a capacity model, set auto-scaling thresholds, wrote the runbooks, and ran a load test in October. Black Friday 2023 we hit 380% of normal load. The platform didn't notice. The business didn't notice. That's exactly what you want — no drama, just uptime.", metric: "$2.1M outage cost eliminated. 3 consecutive peak seasons without a single incident.", rating: 5 },
];

const methodology = [
  { phase: "Onboarding & Baseline", duration: "Week 1–2", features: ["Platform audit", "SLA definition", "Monitoring setup", "Runbook creation", "Team introduction"] },
  { phase: "Stabilise & Optimise", duration: "Week 3–6", features: ["Performance tuning", "Backlog clearance", "Alert calibration", "Quick wins delivery", "Baseline reporting"] },
  { phase: "Proactive Management", duration: "Week 7+", features: ["24/7 monitoring", "Incident prevention", "Capacity planning", "Health checks", "Monthly reviews"] },
  { phase: "Continuous Improvement", duration: "Ongoing", features: ["Platform upgrades", "Feature adoption", "Cost optimisation", "Roadmap planning", "QBRs"] },
];

const services = [
  { icon: Activity, title: "24/7 Platform Monitoring", description: "We instrument your ServiceNow platform with 200+ custom health checks across scripts, integrations, database performance, and user-facing response times. Degradation is detected in seconds — typically before any user reports an issue. Our NOC is staffed 24/7/365 with engineers who know your platform specifically, not a generic helpdesk reading a runbook.", benefits: ["200+ custom health checks per environment", "Alert-to-engineer escalation in under 90 seconds", "Monthly monitoring coverage report with trend analysis"] },
  { icon: Zap, title: "Incident Management", description: "Tiered SLA-backed response with engineers who own incidents end to end — not a ticket system that assigns and re-assigns. For P1s, a senior engineer is on the call within 15 minutes and doesn't hand off until resolution is confirmed. Every incident closes with a root cause analysis and a preventive action so it doesn't recur.", benefits: ["P1: 15-min response, senior engineer on call until resolved", "Root cause analysis on every P1 and P2 incident", "Preventive action tracking so incidents don't repeat"] },
  { icon: Shield, title: "Compliance & Security", description: "We run compliance checks against SOC 2, HIPAA, SOX, and FedRAMP controls on a 90-day cycle, producing audit-ready reports before your external auditors ask for them. Security patches are applied within defined windows — tested in sandbox first, production deployment with rollback plan ready.", benefits: ["90-day compliance cycle with audit-ready reporting", "Patch applied in sandbox, tested, then promoted to production", "Zero compliance findings across all active managed clients"] },
  { icon: TrendingUp, title: "Performance Optimisation", description: "We run query analysis, script performance profiling, and cache optimisation on a continuous basis — not just when something breaks. Most clients see measurable performance improvements within the first 30 days. We track response time, database query cost, and integration latency in your monthly performance report.", benefits: ["Query and script performance profiling monthly", "Cache and index optimisation on defined schedule", "Month-on-month performance trend report"] },
  { icon: Wrench, title: "Platform Administration", description: "Day-to-day administration handled by certified ServiceNow administrators who know your instance — not offshore generalists. Configuration changes follow a change management process: scoped, documented, tested in sandbox, and approved before production. Release management handles all platform upgrades with zero unplanned downtime.", benefits: ["Certified admins with instance-specific knowledge", "Change management process for every configuration change", "Upgrade planning, testing, and deployment with rollback plan"] },
  { icon: HeartPulse, title: "Proactive Health Checks", description: "Monthly technical health review covering performance trends, technical debt accumulation, upgrade readiness, and adoption metrics. Quarterly strategic review with your platform owner covering roadmap alignment, cost optimisation opportunities, and capability gaps. You always know the state of your platform before it becomes a problem.", benefits: ["Monthly technical health report with action items", "Quarterly strategic review with roadmap alignment", "Upgrade readiness scoring before each ServiceNow release"] },
];

const faqs = [
  { question: "What does your managed services offering include?", answer: "Our managed services covers 24/7 platform monitoring, incident management with SLA-backed response times, performance optimisation, compliance management, platform administration, upgrades, and proactive health checks. You get a dedicated pod of ServiceNow experts as an extension of your team." },
  { question: "What SLAs do you guarantee?", answer: "P1 critical: 15-minute response, 4-hour resolution. P2 high: 30-minute response, 8-hour resolution. P3 medium: 2-hour response, 24-hour resolution. We also guarantee 99.9%+ platform uptime with financial penalties if we miss targets." },
  { question: "How quickly can managed services start after implementation?", answer: "We can begin managed services in parallel with the final implementation phase, ensuring zero gap between go-live and ongoing support. For existing platforms, onboarding takes 2 weeks including full audit, monitoring setup, and runbook creation." },
  { question: "Do you handle ServiceNow platform upgrades?", answer: "Yes — we manage all upgrades including planning, testing in sandbox, user communication, rollback planning, and production deployment. Our upgrade methodology has a 100% success rate with zero unplanned downtime." },
  { question: "Can you support a ServiceNow environment implemented by another vendor?", answer: "Absolutely. We onboard third-party implementations regularly. Our 2-week onboarding audit identifies any technical debt, configuration risks, and quick wins, then we take over ongoing management from there." },
  { question: "How is pricing structured for managed services?", answer: "Pricing is based on platform complexity, user count, SLA tier, and scope of services. Most clients pay a fixed monthly retainer with optional add-ons for major projects. We provide transparent pricing in the first week — no surprises." },
];

export default function ManagedServicesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentTestimonial(p => (p + 1) % clientStories.length), 6000); return () => clearInterval(i); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 5000); return () => clearInterval(i); }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#0d9488,#059669)', boxShadow: '0 8px 24px rgba(13,148,136,0.4)' }} aria-label="Talk to Support">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Talk to Support</span>
          <div className="absolute inset-0 rounded-full animate-ping bg-teal-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

          {/* Live status banner — runs full width at very top of hero */}
          <div className="relative z-10 w-full border-b border-white/8" style={{ background: 'rgba(13,148,136,0.08)' }}>
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto py-2.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
              <span className="flex items-center gap-2 text-xs font-mono text-teal-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                All managed instances: <span className="text-white font-bold">NOMINAL</span>
              </span>
              <span className="text-white/20 hidden sm:block">|</span>
              <span className="flex items-center gap-2 text-xs font-mono text-slate-400">
                P1 avg response: <span className="text-teal-300 font-bold">12 min</span> <span className="text-slate-600">(SLA: 15 min)</span>
              </span>
              <span className="text-white/20 hidden sm:block">|</span>
              <span className="flex items-center gap-2 text-xs font-mono text-slate-400">
                Active incidents: <span className="text-green-400 font-bold">0</span>
              </span>
              <span className="text-white/20 hidden sm:block">|</span>
              <span className="text-xs font-mono text-slate-500">847 instances monitored globally</span>
            </div>
          </div>

          {/* Centered headline block */}
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-18 pb-0 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-teal-500" />
              <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">Managed Services &amp; Support</span>
              <span className="inline-block w-8 h-px bg-teal-500" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6">
              While you sleep.{' '}
              <span style={{ background: 'linear-gradient(90deg,#2dd4bf,#34d399,#6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                We watch.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Your ServiceNow platform — monitored, managed, and continuously optimised by{' '}
              <span className="text-teal-300 font-semibold">50+ certified experts</span>.
              Proactive support that stops incidents before your users notice them.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm" style={{ background: 'linear-gradient(135deg,#0d9488,#059669)', boxShadow: '0 8px 24px rgba(13,148,136,0.35)' }}>
                Get Managed Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-teal-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm">
                See Uptime Records
              </a>
            </div>

            {/* Ops center — full width */}
            <div className="bg-[#060f0e] border border-teal-500/20 rounded-2xl overflow-hidden text-left" style={{ boxShadow: '0 0 80px rgba(13,148,136,0.12), 0 40px 80px rgba(0,0,0,0.5)' }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b border-teal-500/15 bg-teal-500/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-gray-500 text-xs font-mono">ifbash — ops-center — live 24/7/365</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />ALL SYSTEMS NOMINAL
                </span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                <div className="px-6 py-6 space-y-2.5 font-mono text-xs sm:text-sm">
                  <p className="text-green-400">✓ Platform Health &nbsp;&nbsp;&nbsp;&nbsp; — 99.97% uptime · all instances nominal</p>
                  <p className="text-teal-400">✓ P1 Response Time &nbsp;&nbsp; — 12 min avg · SLA: 15 min · 0 breaches</p>
                  <p className="text-blue-400">→ Proactive Alert &nbsp;&nbsp;&nbsp;&nbsp; — memory spike detected, auto-scaled</p>
                  <p className="text-yellow-400">⟳ Compliance Check &nbsp;&nbsp; — SOC2 audit cycle running · clean</p>
                  <p className="text-slate-500">→ Patch Management &nbsp; — 3 instances queued for maintenance</p>
                  <p className="text-slate-600 animate-pulse">█</p>
                </div>
                <div className="px-6 py-6 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Platform uptime', value: '99.97%', color: 'text-green-400' },
                    { label: 'P1 avg response', value: '12 min', color: 'text-teal-400' },
                    { label: 'Incidents prevented', value: '2,847', color: 'text-blue-400' },
                    { label: 'Client satisfaction', value: '4.9/5', color: 'text-yellow-400' },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl p-4 border border-white/5" style={{ background: 'rgba(13,148,136,0.06)' }}>
                      <div className={`text-xl font-bold font-mono ${m.color}`}>{m.value}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-500 font-mono">Monitoring 847 instances globally · 0 active incidents · last check 2s ago</span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/8">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
                {[{v:'99.97%',l:'Uptime guarantee'},{v:'15 min',l:'P1 response SLA'},{v:'24/7',l:'Expert coverage'},{v:'0',l:'Missed SLAs'}].map((s,i)=>(
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-teal-400">{s.v}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle,#818cf8 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 left-0 w-[600px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse at top left,#0d9488,transparent 65%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-500" /><span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">What We Manage</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">Comprehensive coverage.{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Zero gaps.</span></h2>
            </div>

            {/* Service cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {services.map((s,i)=>(
                <div key={i} className="group rounded-2xl p-6 border border-white/8 hover:border-teal-500/40 transition-all hover:-translate-y-0.5" style={{background:'rgba(255,255,255,0.04)'}}>
                  <div className="w-11 h-11 rounded-xl bg-teal-500/15 group-hover:bg-teal-500/25 flex items-center justify-center mb-4 transition-colors">
                    <s.icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.description}</p>
                  <div className="space-y-1.5">
                    {s.benefits.map((b,j)=>(
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />{b}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* SLA commitment table */}
            <div className="rounded-2xl border border-teal-500/20 overflow-hidden">
              <div className="px-6 py-4 border-b border-teal-500/15 flex items-center gap-3" style={{ background: 'rgba(13,148,136,0.08)' }}>
                <Shield className="h-5 w-5 text-teal-400 shrink-0" />
                <span className="text-sm font-bold text-white">Our SLA Commitment — contractually guaranteed</span>
                <span className="ml-auto text-xs font-semibold text-teal-400 bg-teal-500/10 px-2 py-1 rounded-full">Enforceable</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Response</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Resolution</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Coverage</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Our avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { p: 'P1 — Critical', resp: '15 min', res: '4 hours', cov: '24/7/365', avg: '12 min', color: 'text-red-400' },
                      { p: 'P2 — High', resp: '30 min', res: '8 hours', cov: '24/7/365', avg: '22 min', color: 'text-orange-400' },
                      { p: 'P3 — Medium', resp: '2 hours', res: '24 hours', cov: 'Business hours', avg: '1.4 hrs', color: 'text-yellow-400' },
                      { p: 'P4 — Low', resp: '8 hours', res: '72 hours', cov: 'Business hours', avg: '6.2 hrs', color: 'text-teal-400' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className={`px-6 py-4 font-semibold ${row.color}`}>{row.p}</td>
                        <td className="px-6 py-4 text-white font-mono">{row.resp}</td>
                        <td className="px-6 py-4 text-slate-300 font-mono">{row.res}</td>
                        <td className="px-6 py-4 text-slate-400">{row.cov}</td>
                        <td className="px-6 py-4">
                          <span className="text-teal-400 font-semibold font-mono">{row.avg}</span>
                          <span className="text-xs text-slate-500 ml-1">actual</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 border-t border-white/8 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-teal-400 shrink-0" />
                <span className="text-xs text-slate-400">We have never missed a contracted SLA. Financial penalty clause included in every agreement.</span>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle,#0d9488 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">How We Onboard</span></div>
            <div className="max-w-2xl mb-10"><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Live in 2 weeks. <span className="text-teal-600">Optimised in 6.</span></h2><p className="text-gray-500 text-lg">From handover to fully managed — structured onboarding that ensures no gaps in coverage.</p></div>
            <div className="relative mb-0">
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-teal-100 overflow-hidden rounded-full"><div className="h-full bg-gradient-to-r from-teal-500 via-teal-400 to-teal-200 rounded-full" style={{width:phasesVisible?'100%':'0%',transition:'width 1.2s cubic-bezier(0.4,0,0.2,1)',transitionDelay:'200ms'}} /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">{methodology.map((step,i)=>(<div key={i} className="relative flex flex-col items-start md:items-center px-4 pb-10 md:pb-0 group" style={{opacity:phasesVisible?1:0,transform:phasesVisible?'translateY(0)':'translateY(20px)',transition:'opacity 0.55s ease,transform 0.55s ease',transitionDelay:`${i*150}ms`}}><div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-teal-600 text-teal-600 font-bold text-xl mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm" style={{transform:phasesVisible?'scale(1)':'scale(0.65)',transition:'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',transitionDelay:`${i*150+80}ms`}}>{i+1}</div><span className="inline-block text-xs font-medium text-teal-500 bg-teal-50 rounded-full px-3 py-1 mb-3">{step.duration}</span><h3 className="text-base font-bold text-gray-900 mb-3 md:text-center">{step.phase}</h3><ul className="space-y-1.5 w-full">{step.features.map((f,j)=>(<li key={j} className="flex items-start gap-2 text-sm text-gray-500" style={{opacity:phasesVisible?1:0,transition:'opacity 0.4s ease',transitionDelay:`${i*150+j*60+300}ms`}}><CheckCircle className="h-3.5 w-3.5 text-teal-400 mt-0.5 shrink-0" />{f}</li>))}</ul></div>))}</div>
            </div>
          </div>
          <div className="mt-10 bg-gray-50 border-t border-gray-100"><div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">{[{v:'2 weeks',l:'To fully managed'},{v:'847+',l:'Instances managed'},{v:'99.97%',l:'Average uptime'},{v:'0',l:'Missed SLAs ever'}].map((s,i)=>(<div key={i} className="py-6 px-6 text-center"><div className="text-2xl sm:text-3xl font-bold text-teal-600">{s.v}</div><div className="text-xs sm:text-sm text-gray-500 mt-1">{s.l}</div></div>))}</div></div></div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12"><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Zero outages.<br />Zero excuses.</h2></div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentCase*100}%)`}}>{caseStudies.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"><div className="grid lg:grid-cols-2 gap-10 items-start"><div><div className="flex items-center gap-3 mb-5"><span className="text-xs font-semibold text-teal-600 bg-teal-50 rounded-full px-3 py-1">{s.industry}</span><span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{s.timeline}</span></div><h3 className="text-2xl font-bold text-gray-900 mb-6">{s.client}</h3><div className="space-y-5"><div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div><p className="text-gray-600 text-sm leading-relaxed">{s.challenge}</p></div><div><div className="text-xs font-semibold text-teal-500 uppercase tracking-widest mb-1.5">Solution</div><p className="text-gray-600 text-sm leading-relaxed">{s.solution}</p></div></div><blockquote className="mt-6 pl-4 border-l-2 border-teal-200 text-sm text-gray-600 italic">&ldquo;{s.testimonial}&rdquo;</blockquote></div><div className="rounded-2xl overflow-hidden border border-gray-100" style={{background:'#f0fdfb'}}><div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">Outcomes</span><span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div><div className="p-5 grid grid-cols-2 gap-3">{s.results.map((r,j)=>(<div key={j} className="bg-white rounded-xl p-4 border border-gray-100"><CheckCircle className="h-4 w-4 text-teal-500 mb-2" /><p className="text-sm font-semibold text-gray-800 leading-tight">{r}</p></div>))}</div><div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between"><span className="text-xs text-gray-400">Engagement</span><span className="text-sm font-bold text-teal-600">{s.timeline}</span></div></div></div></div></div>))}</div></div>
              <div className="flex items-center justify-between mt-6">
                <button onClick={()=>setCurrentCase(p=>(p-1+caseStudies.length)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center text-gray-500 hover:text-teal-600 transition-colors" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
                <div className="flex items-center gap-2">{caseStudies.map((_,i)=>(<button key={i} onClick={()=>setCurrentCase(i)} className={`rounded-full transition-all duration-300 ${i===currentCase?'w-8 h-2 bg-teal-600':'w-2 h-2 bg-gray-300 hover:bg-teal-300'}`} aria-label={`Case ${i+1}`} />))}</div>
                <button onClick={()=>setCurrentCase(p=>(p+1)%caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal-400 flex items-center justify-center text-gray-500 hover:text-teal-600 transition-colors" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="absolute top-0 left-0 w-1/2 h-full opacity-10" style={{background:'radial-gradient(ellipse at top left,#0d9488,transparent 60%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center"><div className="flex items-center justify-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-500" /><span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span><span className="inline-block w-8 h-px bg-teal-500" /></div><h2 className="text-3xl sm:text-4xl font-bold text-white">What IT leaders say.</h2></div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl"><div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentTestimonial*100}%)`}}>{clientStories.map((s,i)=>(<div key={i} className="w-full shrink-0"><div className="rounded-2xl p-8 border border-white/8" style={{background:'rgba(255,255,255,0.04)'}}><div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0"><Users className="h-6 w-6 text-teal-400" /></div><div><div className="font-bold text-white">{s.name}</div><div className="text-sm text-slate-400">{s.title}</div></div><div className="ml-auto flex gap-0.5">{[...Array(s.rating)].map((_,j)=>(<Star key={j} className="h-4 w-4 text-yellow-400 fill-current" />))}</div></div><p className="text-slate-300 leading-relaxed mb-5">&ldquo;{s.story}&rdquo;</p><div className="flex items-center gap-2 pt-4 border-t border-white/8"><CheckCircle className="h-4 w-4 text-green-400 shrink-0" /><span className="text-green-400 text-sm font-medium">{s.metric}</span></div></div></div>))}</div></div>
              <div className="flex justify-center gap-2 mt-6">{clientStories.map((_,i)=>(<button key={i} onClick={()=>setCurrentTestimonial(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i===currentTestimonial?'w-8 bg-teal-400':'w-1.5 bg-white/20 hover:bg-white/40'}`} />))}</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div><div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-teal-600" /><span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions.</h2><p className="text-gray-500 text-sm leading-relaxed mb-8">Everything you need to know about our managed services offering.</p><a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#0d9488,#059669)',boxShadow:'0 8px 24px rgba(13,148,136,0.3)'}}>Ask us directly <ArrowRight className="h-4 w-4" /></a></div>
              <div className="lg:col-span-2 space-y-3">{faqs.map((f,i)=>(<div key={i} className="border border-gray-200 hover:border-teal-200 rounded-xl overflow-hidden transition-colors"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"><span className="font-semibold text-gray-800 pr-4 text-sm">{f.question}</span><ChevronDown className={`h-5 w-5 text-teal-500 shrink-0 transition-transform duration-200 ${openFaq===i?'rotate-180':''}`} /></button>{openFaq===i&&(<div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{f.answer}</p></div>)}</div>))}</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{background:'#07071a'}}>
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle,#818cf8 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{background:'radial-gradient(ellipse,#0d9488,transparent 70%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/25 rounded-full px-4 py-2 text-teal-300 text-sm mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Onboarding in 2 weeks · 99.97% uptime guaranteed</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Never worry about your platform again.</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">Tell us about your current ServiceNow environment. We&apos;ll complete a free platform health audit and propose your managed services package — in 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg,#0d9488,#059669)',boxShadow:'0 8px 32px rgba(13,148,136,0.4)'}}>Free Platform Audit <ArrowRight className="h-5 w-5" /></a>
              <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-teal-500 hover:text-white transition-all text-base">View uptime records</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
