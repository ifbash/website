'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Star, Users, MessageCircle, Network, Sparkles, Workflow, Brain, Zap, CircuitBoard, BrainCircuit, Shield, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    client: 'AutoTech Industries', industry: 'Manufacturing', timeline: '14 weeks',
    challenge: 'Manual quality inspection across 3 production lines — 34% of defective units reached packaging before detection, costing $8.7M annually in rework and returns.',
    solution: 'Computer vision agents deployed at 12 inspection points with automated rejection triggers. Predictive maintenance agents monitor 847 equipment sensors and raise work orders before failure.',
    results: ['Defects caught at source, not post-assembly', '$8.7M rework → $1.1M in year one', '23 unplanned downtime events → 2 in 12 months'],
    quote: 'The quality agents catch defects in milliseconds that our inspectors would miss entirely.', author: 'Dr. Elena Vasquez, CIO',
  },
  {
    client: 'HealthCare+ Network', industry: 'Healthcare', timeline: '18 weeks',
    challenge: 'Clinical documentation: 47 hours per complex case for data extraction and report drafting. Creating 3-day treatment delays and 6 FTE of admin burden.',
    solution: 'Generative AI agents extract data from 14 systems, cross-reference clinical guidelines, and produce draft reports for clinician review in under 8 minutes.',
    results: ['47 hours → 8 minutes per case', '5.8 FTE admin burden eliminated', 'Same-day report availability, zero treatment delays'],
    quote: 'Our clinicians review a finished draft instead of building one from scratch. That time goes directly back to patient care.', author: 'Dr. James Wilson, Medical Director',
  },
  {
    client: 'FinanceFlow Corp', industry: 'Financial Services', timeline: '16 weeks',
    challenge: 'Rule-based fraud detection missing 23% of sophisticated attacks. $15.6M annual losses. 1,200 false positives weekly requiring 14-person manual review team.',
    solution: 'Multi-agent system: pattern recognition, behavioural analysis, and network graph agents collaborating in real time. Human review only when confidence falls below threshold.',
    results: ['False negatives: 23% → 1.8%', 'False positives: 1,200/week → 204/week', '$14.8M fraud prevented in year one'],
    quote: 'The three agents work together like an investigation team — but in under two seconds. We stopped $14.8M in fraud in the first year.', author: 'Maria Santos, Head of Risk',
  },
];

const services = [
  { icon: BrainCircuit, title: 'Agentic AI', desc: 'Agents that reason, not just follow rules. Defined goals, decision loops, escalation thresholds you control. Full audit trail.', benefits: ['Goal-directed reasoning', 'Configurable escalation thresholds'] },
  { icon: Sparkles, title: 'Generative AI', desc: 'Draft generation, data synthesis, incident summarisation, knowledge article creation. Every output human-reviewable.', benefits: ['Incident & case summarisation', 'KB auto-population from resolved cases'] },
  { icon: Workflow, title: 'Intelligent Automation', desc: 'AI triage replacing manual queues. Agents handle routine cases, escalate exceptions. You define the boundary.', benefits: ['AI triage & routing', 'Exception-based human escalation'] },
  { icon: Brain, title: 'Agent Orchestration', desc: 'Multiple specialised agents coordinated in real time. Cross-agent context passing, single audit log, defined capability boundaries per agent.', benefits: ['Specialist agents with defined scope', 'Single audit log across all agents'] },
  { icon: Zap, title: 'Real-time Intelligence', desc: 'Agents processing events as they happen — fraud signals, equipment anomalies, compliance triggers — with sub-second response.', benefits: ['Sub-second event processing', 'Production SLAs defined pre-deployment'] },
  { icon: CircuitBoard, title: 'Enterprise Integration', desc: 'Agents connected to ServiceNow data layer plus ERP, CRM, IoT, databases. Authenticated, audited API calls with full logging.', benefits: ['300+ enterprise connectors', 'Data governance per agent'] },
];

const methodology = [
  { phase: 'AI Assessment', duration: 'Weeks 1–3', features: ['AI readiness evaluation & use case scoring', 'Data quality audit & agent architecture design', 'ROI modelling with specific KPI targets'] },
  { phase: 'Build & Train', duration: 'Weeks 4–8', features: ['Agent development & model training cycles', 'Workflow integration & sandbox testing', 'Performance validation against agreed benchmarks'] },
  { phase: 'Orchestrate', duration: 'Weeks 9–12', features: ['Multi-agent coordination layer deployment', 'System integration with authenticated APIs', 'Security review & change management'] },
  { phase: 'Deploy & Optimise', duration: 'Weeks 13–16', features: ['Production deployment with hypercare', 'Continuous learning loops & performance tuning', '90-day outcome review against KPIs'] },
];

const faqs = [
  { q: 'What\'s the difference between agentic AI and generative AI in ServiceNow?', a: 'Generative AI produces content — drafts, summaries, code. Agentic AI takes actions — reads data, makes decisions, calls APIs, updates records. We combine both: agents use generative AI to reason, then use agentic capabilities to act. Agentic systems require governance, audit trails, and escalation logic.' },
  { q: 'How fast can AI agents go live?', a: 'Single-purpose agent (triage, routing, monitoring): 6–10 weeks. Multi-agent system with cross-system integrations: 12–16 weeks. Working agent in sandbox by week 4 in every engagement.' },
  { q: 'Which processes deliver the highest AI ROI?', a: 'High-volume, clear-decision-criteria processes: IT incident triage, fraud detection, compliance monitoring, procurement approvals, HR case classification. We run a process audit to rank opportunities by ROI before writing any code.' },
  { q: 'How do you ensure agents make safe decisions?', a: 'Defined capability boundaries per agent, confidence thresholds for auto-escalation, approval workflows for high-risk actions, full decision audit trails. Governance designed in week one, not bolted on after go-live.' },
  { q: 'How do you measure AI ROI?', a: 'Specific metrics agreed pre-deployment: cases handled, resolution time, error rate, FTE hours saved, false positive rate. Live dashboard tracks every metric from day one. Most clients reach positive ROI within 10–14 weeks.' },
  { q: 'Can agents integrate with systems beyond ServiceNow?', a: 'Yes. ERP (SAP, Oracle), IoT/OT platforms (SCADA), CRM (Salesforce), HR (Workday), custom databases. Integration Hub plus direct API connectors. Every connection authenticated, rate-limited, and logged.' },
];

const logLines = [
  { color: 'text-green-400', text: '✓ Agent:IncidentResolver — resolved 847 tickets today' },
  { color: 'text-blue-400', text: '→ Agent:FraudDetector — flagged 3 anomalies (97.3% confidence)' },
  { color: 'text-violet-400', text: '→ Agent:InventoryOptimizer — reordered 12 SKUs autonomously' },
  { color: 'text-yellow-400', text: '⟳ Agent:ComplianceMonitor — continuous audit cycle running' },
];

export default function AIAutomationPage() {
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => { const t = setTimeout(() => setPhasesVisible(true), 120); return () => clearTimeout(t); }, []);
  useEffect(() => { const i = setInterval(() => setCurrentCase(p => (p + 1) % caseStudies.length), 6000); return () => clearInterval(i); }, []);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started" className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.4)' }} aria-label="Free AI Consultation">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">Free AI Consultation</span>
        </a>
      </div>

      {/* ── HERO: centered with terminal ── */}
      <section className="relative overflow-hidden" style={{ background: '#08040d' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,58,237,0.28) 0%, transparent 60%)' }} />

        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-20 pb-0 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-violet-500" />
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Agentic AI & Automation</span>
            <span className="inline-block w-8 h-px bg-violet-500" />
          </div>
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 text-violet-300 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />500+ AI Agents live in production
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6">
            Agents that{' '}
            <span style={{ background: 'linear-gradient(90deg,#c4b5fd,#a78bfa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>think, decide, act.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Deploy agentic and generative AI on ServiceNow in <span className="text-violet-300 font-semibold">12–16 weeks</span>. Autonomous agents handling complex reasoning — your teams stay focused on strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.35)' }}>Deploy Your AI Agents <ArrowRight className="h-4 w-4" /></a>
            <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-violet-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">See AI in Action</a>
          </div>

          {/* Terminal */}
          <div className="bg-[#080815] border border-white/10 rounded-2xl overflow-hidden text-left" style={{ boxShadow: '0 0 100px rgba(124,58,237,0.18), 0 40px 80px rgba(0,0,0,0.6)' }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8 bg-white/[0.015]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-gray-500 text-xs font-mono">agent-orchestrator — live</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-green-400"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />4 agents active</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
              <div className="px-6 py-6 space-y-3 font-mono text-xs sm:text-sm">
                {logLines.map((line, i) => <p key={i} className={line.color}>{line.text}</p>)}
                <p className="text-slate-600 animate-pulse">█</p>
              </div>
              <div className="px-6 py-6 grid grid-cols-2 gap-3">
                {[{ label: 'Tickets auto-resolved', value: '14,302', color: 'text-green-400', note: 'today' }, { label: 'Fraud signals caught', value: '847', color: 'text-violet-400', note: 'this week' }, { label: 'Compliance cycles', value: '3,219', color: 'text-blue-400', note: 'running' }, { label: 'Human escalations', value: '12', color: 'text-yellow-400', note: 'needed' }].map((m, i) => (
                  <div key={i} className="rounded-xl p-4 border border-white/6" style={{ background: 'rgba(124,58,237,0.06)' }}>
                    <div className={`text-xl font-bold font-mono ${m.color}`}>{m.value}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{m.label}</div>
                    <div className={`text-[10px] ${m.color} opacity-50`}>{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-5 py-3 border-t border-white/8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-xs text-slate-500 font-mono">All agents nominal · Last sync 0.4s ago · 500+ agents in production</span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 border-t border-white/8">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {[{ v: '500+', l: 'AI Agents Deployed' }, { v: '234%', l: 'Avg Efficiency Gain' }, { v: '97.3%', l: 'Model Accuracy' }, { v: '12 wks', l: 'Avg ROI Timeline' }].map((s, i) => (
                <div key={i} className="py-6 px-6 text-center"><div className="text-2xl sm:text-3xl font-bold text-violet-400">{s.v}</div><div className="text-xs text-slate-500 mt-1">{s.l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-500" /><span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">What We Build</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Every AI discipline. One unified intelligence.</h2>
          </div>

          {/* Orchestration featured card */}
          <div className="rounded-2xl p-7 border border-violet-500/25 mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(79,70,229,0.07))' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-violet-500/25 flex items-center justify-center"><Network className="h-5 w-5 text-violet-400" /></div><span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Core Platform</span></div>
                <h3 className="text-xl font-bold text-white mb-2">AI Agent Orchestration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Multiple specialised agents coordinated in real time across your enterprise. Each reasons independently, handles defined tasks, and escalates when uncertain — with a single audit trail across all activity.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Multi-agent coordination', 'Cross-system integration', 'Real-time reasoning', 'Autonomous decisions', 'Audit & governance', 'Adaptive learning'].map(c => <div key={c} className="rounded-lg px-3 py-2 text-xs text-violet-300 text-center border border-violet-500/20" style={{ background: 'rgba(124,58,237,0.08)' }}>{c}</div>)}
              </div>
            </div>
          </div>

          <div data-reveal="services" className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${revealed.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {services.filter(s => s.title !== 'Agent Orchestration').map(({ icon: Icon, title, desc, benefits }, i) => (
              <div key={title} className="group rounded-2xl p-6 border border-white/8 hover:border-violet-500/40 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.04)', transitionDelay: `${i * 80}ms` }}>
                <div className="w-11 h-11 rounded-xl bg-violet-500/15 group-hover:bg-violet-500/25 flex items-center justify-center mb-4 transition-colors"><Icon className="h-5 w-5 text-violet-400" /></div>
                <h3 className="font-bold text-white mb-2 text-base">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
                <div className="space-y-1.5">
                  {benefits.map(b => <div key={b} className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle className="h-3.5 w-3.5 text-violet-400 shrink-0" />{b}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">How We Deliver</span></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Four phases. Zero ambiguity.</h2>
          <p className="text-gray-500 mb-12">From AI readiness to live autonomous agents in 16 weeks.</p>

          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-violet-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-violet-200 rounded-full" style={{ width: phasesVisible ? '100%' : '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)', transitionDelay: '200ms' }} />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0">
              {methodology.map((step, i) => (
                <div key={i} className="relative flex flex-col items-start md:items-center px-4 pb-10 md:pb-0 group"
                  style={{ opacity: phasesVisible ? 1 : 0, transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.55s ease, transform 0.55s ease', transitionDelay: `${i * 150}ms` }}>
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-violet-600 text-violet-600 font-bold text-xl mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors shadow-sm"
                    style={{ transform: phasesVisible ? 'scale(1)' : 'scale(0.65)', transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)', transitionDelay: `${i * 150 + 80}ms` }}>{i + 1}</div>
                  <span className="inline-block text-xs font-medium text-violet-500 bg-violet-50 rounded-full px-3 py-1 mb-3">{step.duration}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 md:text-center">{step.phase}</h3>
                  <ul className="space-y-1.5 w-full">
                    {step.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-500" style={{ opacity: phasesVisible ? 1 : 0, transition: 'opacity 0.4s ease', transitionDelay: `${i * 150 + j * 60 + 300}ms` }}>
                        <CheckCircle className="h-3.5 w-3.5 text-violet-400 mt-0.5 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Client Results</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real agents. Real outcomes.</h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentCase * 100}%)` }}>
                {caseStudies.map((cs, i) => (
                  <div key={i} className="w-full shrink-0">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8">
                      <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                          <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold text-violet-600 bg-violet-50 rounded-full px-3 py-1">{cs.industry}</span><span className="text-xs text-gray-500">{cs.timeline}</span></div>
                          <h3 className="text-xl font-bold text-gray-900 mb-5">{cs.client}</h3>
                          <div className="space-y-4">
                            <div><div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1">Challenge</div><p className="text-sm text-gray-600">{cs.challenge}</p></div>
                            <div><div className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-1">AI Solution</div><p className="text-sm text-gray-600">{cs.solution}</p></div>
                          </div>
                          <blockquote className="mt-5 pl-4 border-l-2 border-violet-200 text-sm text-gray-600 italic">&ldquo;{cs.quote}&rdquo;<span className="block text-xs text-gray-400 mt-1 not-italic">— {cs.author}</span></blockquote>
                        </div>
                        <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: '#f8f6ff' }}>
                          <div className="px-5 py-3 bg-white border-b border-gray-100 flex items-center justify-between"><span className="text-sm font-semibold text-gray-800">AI Impact</span><span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified</span></div>
                          <div className="p-5 grid grid-cols-1 gap-3">
                            {cs.results.map((r, j) => <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100"><CheckCircle className="h-4 w-4 text-violet-500 shrink-0" /><span className="text-sm font-semibold text-gray-800">{r}</span></div>)}
                          </div>
                          <div className="px-5 py-3 border-t border-gray-100 flex justify-between"><span className="text-xs text-gray-400">Delivered in</span><span className="text-sm font-bold text-violet-600">{cs.timeline}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <button onClick={() => setCurrentCase(p => (p - 1 + caseStudies.length) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center transition-colors"><ChevronLeft className="h-5 w-5 text-gray-500" /></button>
              <div className="flex gap-2">{caseStudies.map((_, i) => <button key={i} onClick={() => setCurrentCase(i)} className={`rounded-full transition-all ${i === currentCase ? 'w-8 h-2 bg-violet-600' : 'w-2 h-2 bg-gray-300'}`} />)}</div>
              <button onClick={() => setCurrentCase(p => (p + 1) % caseStudies.length)} className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center transition-colors"><ChevronRight className="h-5 w-5 text-gray-500" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IFBASH ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto"><div className="max-w-4xl mx-auto"><div className="text-center mb-12"><div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-8 border" style={{ backgroundColor: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.25)', color: '#a78bfa' }}>Why ifBash</div><h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-6">We don&apos;t just deploy AI.<br /><span style={{ color: '#a78bfa' }}>We deploy intelligence.</span></h2><p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">We start with your processes and your data, not the platform.</p></div><div data-reveal="whyifbash" className={`grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto transition-all duration-700 ${revealed.whyifbash ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{[{ icon: BrainCircuit, stat: '500+ agents live', desc: 'AI agents in production across manufacturing, healthcare, and financial services.' },{ icon: Shield, stat: 'Governance built in', desc: 'Defined capability boundaries, confidence thresholds, full audit trails. Designed week one.' },{ icon: TrendingUp, stat: '12-week ROI average', desc: 'Most clients reach positive ROI within 10–14 weeks of go-live. KPIs agreed upfront.' }].map(({ icon: Icon, stat, desc }) => (<div key={stat} className="rounded-2xl border p-6 text-center hover:border-violet-500/30 transition-all" style={{ borderColor: 'rgba(124,58,237,0.15)', background: 'rgba(124,58,237,0.04)' }}><div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(124,58,237,0.15)' }}><Icon className="h-5 w-5 text-violet-400" /></div><div className="text-sm font-bold text-white mb-2">{stat}</div><p className="text-xs text-slate-400 leading-relaxed">{desc}</p></div>))}</div></div></div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4"><span className="inline-block w-8 h-px bg-violet-600" /><span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">FAQ</span></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions.</h2>
              <p className="text-gray-500 text-sm mb-8">Straight answers about AI on ServiceNow.</p>
              <a href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.3)' }}>Ask us directly <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 hover:border-violet-200 rounded-xl overflow-hidden transition-colors">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-violet-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100 pt-4"><p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#07071a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #7c3aed, transparent 70%)' }} />
        <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 text-violet-300 text-sm mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Accepting new AI engagements · 16-week go-live</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">Ready to deploy autonomous agents?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">Tell us your biggest operational bottleneck. We&apos;ll design an agent architecture in 48 hours — no commitment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}>Free AI Strategy Call <ArrowRight className="h-5 w-5" /></a>
            <a href="/company/case-studies-client-success" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-violet-500 hover:text-white transition-all text-base">View all case studies</a>
          </div>
        </div>
      </section>
    </>
  );
}
