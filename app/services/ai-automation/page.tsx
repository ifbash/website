'use client';
import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Bot,
  Brain,
  Workflow,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Building,
  MessageCircle,
  Clock,
  Network,
  ChevronDown,
  Sparkles,
  CircuitBoard,
  BrainCircuit,
} from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    client: "AutoTech Industries",
    industry: "Manufacturing",
    challenge: "Manual quality inspection across 3 production lines flagging defects only after assembly — 34% of defective units reaching packaging before detection, costing $8.7M annually in rework and returns",
    solution: "Computer vision quality agents deployed at 12 inspection points with automated rejection triggers. Predictive maintenance agents monitor 847 equipment sensors and raise work orders before failure.",
    results: ["Defect detection: post-assembly → real-time at source", "$8.7M rework cost reduced to $1.1M in year one", "Unplanned downtime: 23 incidents → 2 in 12 months", "First ROI milestone hit: week 9 of deployment"],
    timeline: "14 weeks",
    testimonial: "The quality agents catch defects in milliseconds that our inspectors would miss entirely. We haven't had an unplanned line stoppage in 11 months."
  },
  {
    client: "HealthCare+ Network",
    industry: "Healthcare",
    challenge: "Clinical documentation agents spending 47 hours per complex case on data extraction, cross-referencing, and report drafting — creating 3-day treatment delays and adding 6 FTE worth of administrative burden",
    solution: "Generative AI agents extract and structure data from 14 connected systems, cross-reference against clinical guidelines, and produce draft reports for clinician review in under 8 minutes.",
    results: ["Case documentation: 47 hours → 8 minutes per case", "Administrative burden reduced by 5.8 FTE equivalent", "Treatment delay eliminated: same-day report availability", "100% compliance with documentation standards maintained"],
    timeline: "18 weeks",
    testimonial: "Our clinicians review a finished draft instead of building one from scratch. Eight minutes versus two days. That time goes directly back to patient care."
  },
  {
    client: "FinanceFlow Corp",
    industry: "Financial Services",
    challenge: "Rule-based fraud detection missing 23% of sophisticated attacks — $15.6M in annual losses from false negatives, while generating 1,200 false positives per week that required manual review by a 14-person team",
    solution: "Multi-agent fraud detection system: a pattern recognition agent, a behavioural analysis agent, and a network graph agent collaborate in real time. Suspicious transactions escalate to human review only when agent confidence falls below threshold.",
    results: ["False negative rate: 23% → 1.8% (97% detection accuracy)", "False positives: 1,200/week → 204/week (83% reduction)", "Manual review team: 14 FTE → 3 FTE reassigned to strategy", "Fraud losses in year one: $15.6M → under $800K"],
    timeline: "16 weeks",
    testimonial: "The three agents work together the way a fraud investigation team would — but in under two seconds. We stopped $14.8M in fraud in the first year alone."
  }
];

const clientStories = [
  {
    name: "Dr. Elena Vasquez",
    title: "Chief Innovation Officer, AutoTech Industries",
    story: "We'd tried RPA before and hit the same wall — it breaks the moment something changes. ifBash's agents don't just follow rules, they reason. When a new defect pattern emerged last quarter that our old system would have missed entirely, the agent identified it in the first shift and updated its own detection criteria.",
    metric: "$8.7M rework cost → $1.1M. Zero unplanned downtime for 11 months.",
    rating: 5
  },
  {
    name: "Dr. James Wilson",
    title: "Medical Director, HealthCare+ Network",
    story: "I was sceptical. AI in clinical documentation sounds like a liability risk. What changed my mind was watching the agent cross-reference a patient's medication history against drug interaction guidelines in real time — something a tired resident at 2am might miss. It's not replacing clinical judgement. It's protecting it.",
    metric: "47-hour documentation process → 8 minutes. 5.8 FTE of admin burden eliminated.",
    rating: 5
  },
  {
    name: "Maria Santos",
    title: "Head of Risk Management, FinanceFlow Corp",
    story: "The previous system was binary — flag or don't flag. The multi-agent system gives us a confidence score and a reasoning trace. When it escalates something, we know exactly why. Our analysts went from drowning in 1,200 alerts a week to reviewing 200, all of which were genuinely worth their attention.",
    metric: "$14.8M fraud prevented in year one. Manual review workload cut by 83%.",
    rating: 5
  },
  {
    name: "David Park",
    title: "VP of Operations, RetailLogistics Group",
    story: "Inventory optimisation, demand forecasting, and carrier selection all ran separately with different teams. The agents now handle all three in a coordinated loop — when demand shifts, inventory targets update, and carrier allocations adjust automatically. We haven't had a stockout at a top-20 SKU in 8 months.",
    metric: "Stockouts at top-20 SKUs: eliminated. Inventory carrying cost down 31%.",
    rating: 5
  }
];

const aiMethodology = [
  {
    phase: "AI Assessment & Planning",
    duration: "Week 1–3",
    features: ["AI readiness evaluation", "Use case identification", "Data quality assessment", "Agent architecture design", "ROI modelling"]
  },
  {
    phase: "Agent Development & Training",
    duration: "Week 4–8",
    features: ["AI model development", "Agent training cycles", "Workflow integration", "Testing protocols", "Performance optimisation"]
  },
  {
    phase: "Orchestration & Integration",
    duration: "Week 9–12",
    features: ["Multi-agent orchestration", "System integration", "Security implementation", "User interface build", "Change management"]
  },
  {
    phase: "Deployment & Optimisation",
    duration: "Week 13–16",
    features: ["Production deployment", "Performance monitoring", "Continuous learning loops", "User adoption", "Optimisation cycles"]
  }
];

const aiServices = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Development",
    description: "We build agents that don't just execute — they reason. Each agent has a defined goal, a set of tools it can call, and a decision loop that handles exceptions, escalates when uncertain, and learns from resolved cases. Not RPA with an LLM bolted on.",
    benefits: ["Goal-directed reasoning, not rule-following", "Escalation thresholds you define and control", "Decision audit trail for every action taken"]
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Generative AI deployed where it reduces measurable manual effort: draft generation, data synthesis, incident summarisation, and knowledge article creation. Every output is human-reviewable before it reaches production.",
    benefits: ["Draft generation with source citation", "Incident and case summarisation", "Knowledge base auto-population from resolved cases"]
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "We instrument your existing ServiceNow workflows with AI decision points — replacing manual triage, routing, and approval steps with agents that handle routine cases and escalate exceptions. You define what 'routine' means; the agent enforces it.",
    benefits: ["AI triage replacing manual queue management", "Exception-based human escalation only", "Workflow performance dashboards from day one"]
  },
  {
    icon: Brain,
    title: "AI Agent Orchestration",
    description: "When one agent isn't enough, we build orchestration layers that coordinate multiple specialised agents — passing context, resolving conflicts, and maintaining a single audit trail across all agent actions. Each agent has a defined scope; the orchestrator handles handoffs.",
    benefits: ["Specialist agents with defined capability boundaries", "Cross-agent context passing and state management", "Single audit log across all agent activity"]
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description: "Agents that process events as they happen — fraud signals, equipment anomalies, compliance triggers, inventory movements — and take defined actions within milliseconds. Latency is measured, SLA-bound, and monitored in production.",
    benefits: ["Sub-second event processing on defined triggers", "Action SLAs contractually defined pre-deployment", "Real-time monitoring dashboard for all live agents"]
  },
  {
    icon: CircuitBoard,
    title: "AI Platform Integration",
    description: "AI agents only deliver value when they can read from and write to your actual systems. We integrate agents with ServiceNow's native data layer plus external systems — ERP, CRM, IoT platforms, databases — using authenticated, audited API calls.",
    benefits: ["Integration with 300+ enterprise system connectors", "Authenticated API calls with full logging", "Data governance and access controls per agent"]
  }
];

const aiStats = [
  { value: '500+', label: 'AI Agents Deployed' },
  { value: '234%', label: 'Avg Efficiency Gain' },
  { value: '97.3%', label: 'Model Accuracy' },
  { value: '12 wks', label: 'Avg ROI Timeline' },
];

const faqs = [
  {
    question: "What is the difference between agentic AI and generative AI in ServiceNow?",
    answer: "Generative AI produces content — drafts, summaries, code suggestions. Agentic AI takes actions — it reads data, makes decisions, calls APIs, and updates records autonomously. We combine both: our agents use generative AI to reason about what to do, then use agentic capabilities to actually do it. The distinction matters because agentic systems require governance, audit trails, and escalation logic that pure generative tools don't need."
  },
  {
    question: "How quickly can AI agents be deployed in our ServiceNow environment?",
    answer: "A focused single-purpose agent — incident triage, approval routing, compliance monitoring — typically takes 6–10 weeks from scoping to production. Complex multi-agent systems with cross-system integrations run 12–16 weeks. In every engagement we deliver a working agent in a sandbox environment by week 4, so you validate the behaviour before we harden it for production."
  },
  {
    question: "What types of business processes can agentic AI automate?",
    answer: "The highest-value processes are those with high volume, clear decision criteria, and a measurable cost of human handling: IT incident triage and first-line resolution, fraud and anomaly detection, compliance monitoring, procurement approval routing, HR case classification, and demand forecasting. We start with a process audit to identify where agent ROI is highest before we write a line of code."
  },
  {
    question: "How do you ensure AI agents make safe and compliant decisions?",
    answer: "Every agent we deploy has defined capability boundaries — what data it can read, what actions it can take, and what triggers an escalation to human review. We implement approval workflows for high-risk actions, full decision audit trails for every agent action, and confidence thresholds below which the agent must escalate. Governance is designed in week one, not bolted on after go-live."
  },
  {
    question: "Can AI agents integrate with our existing enterprise systems beyond ServiceNow?",
    answer: "Yes — and integration quality is often what determines agent value. We connect agents to ERP systems (SAP, Oracle), IoT and OT platforms (SCADA, sensor streams), CRM (Salesforce), HR platforms (Workday), and custom databases via ServiceNow's Integration Hub plus direct API connectors. Every integration is authenticated, rate-limited, and logged."
  },
  {
    question: "How do you measure the ROI of agentic AI implementations?",
    answer: "Before deployment, we agree specific metrics: cases handled per day, resolution time, error rate, FTE hours saved, false positive rate. We instrument ServiceNow to measure each one from day one of go-live. Most clients reach positive ROI within 10–14 weeks of production deployment. We track these in a shared dashboard so you see the numbers in real time — not in a monthly report."
  },
  {
    question: "What training and support is provided for AI agent management?",
    answer: "We train your team on three levels: administrators who configure agent parameters and thresholds, supervisors who review escalations and feedback loops, and platform owners who manage the agent governance framework. We also provide a 90-day hypercare period post-launch where our team actively monitors agent performance and tunes behaviour before handing full ownership to your team."
  },
  {
    question: "How does generative AI enhance traditional ServiceNow workflows?",
    answer: "The highest-impact use cases are automated incident summarisation (agents read ticket history and generate a structured handoff note), knowledge article creation from resolved cases (agents draft articles that admins review and publish), and intelligent approval routing (agents analyse request context and route to the appropriate approver based on policy, not just category). All outputs are human-reviewable before they affect downstream systems."
  }
];

const logLines = [
  { color: 'text-green-400',  text: '✓ Agent:IncidentResolver   — resolved 847 tickets today' },
  { color: 'text-blue-400',   text: '→ Agent:FraudDetector       — flagged 3 anomalies (97.3% confidence)' },
  { color: 'text-violet-400', text: '→ Agent:InventoryOptimizer  — reordered 12 SKUs autonomously' },
  { color: 'text-yellow-400', text: '⟳ Agent:ComplianceMonitor   — continuous audit cycle running' },
];

export default function SmartAutomationAgenticAI() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [phasesVisible, setPhasesVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setPhasesVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase(prev => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      {/* Floating CTA */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.4)' }}
          aria-label="Free AI Consultation"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">
            Free AI Consultation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,58,237,0.28) 0%, transparent 60%)' }} />

          {/* Centered headline block */}
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-20 pb-0 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-violet-500" />
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Agentic AI &amp; Automation</span>
              <span className="inline-block w-8 h-px bg-violet-500" />
            </div>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 text-violet-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              500+ AI Agents live in production — right now
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6">
              Agents that{' '}
              <span style={{ background: 'linear-gradient(90deg,#c4b5fd,#a78bfa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                think, decide, act.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Deploy agentic and generative AI on ServiceNow in{' '}
              <span className="text-violet-300 font-semibold">12–16 weeks</span>.
              Autonomous agents that handle complex reasoning and action — so your teams stay focused on strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.35)' }}
              >
                Deploy Your AI Agents <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 hover:border-violet-400/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm sm:text-base"
              >
                See AI in Action
              </a>
            </div>

            {/* Full-width terminal */}
            <div className="bg-[#080815] border border-white/10 rounded-2xl overflow-hidden text-left" style={{ boxShadow: '0 0 100px rgba(124,58,237,0.18), 0 40px 80px rgba(0,0,0,0.6)' }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8 bg-white/[0.015]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-gray-500 text-xs font-mono">ifbash — agent-orchestrator — live</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-green-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />4 agents active · 0 failures
                </span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                <div className="px-6 py-6 space-y-3 font-mono text-xs sm:text-sm">
                  {logLines.map((line, i) => (
                    <p key={i} className={line.color}>{line.text}</p>
                  ))}
                  <p className="text-slate-600 animate-pulse">█</p>
                </div>
                <div className="px-6 py-6 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Tickets auto-resolved', value: '14,302', color: 'text-green-400', note: 'today' },
                    { label: 'Fraud signals caught', value: '847', color: 'text-violet-400', note: 'this week' },
                    { label: 'Compliance cycles', value: '3,219', color: 'text-blue-400', note: 'running' },
                    { label: 'Human escalations', value: '12', color: 'text-yellow-400', note: 'needed' },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl p-4 border border-white/6" style={{ background: 'rgba(124,58,237,0.06)' }}>
                      <div className={`text-xl font-bold font-mono ${m.color}`}>{m.value}</div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-tight">{m.label}</div>
                      <div className={`text-[10px] ${m.color} opacity-50`}>{m.note}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-500 font-mono">All agents nominal · Last sync 0.4 s ago · monitoring 500+ production agents</span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 border-t border-white/8">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
                {aiStats.map((stat, i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-violet-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AI SERVICES ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 65%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-violet-500" />
                <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">What We Build</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Every AI discipline.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">One unified intelligence.</span>
              </h2>
            </div>

            {/* Orchestration Hub — featured card */}
            <div className="rounded-2xl p-7 border border-violet-500/25 mb-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.14), rgba(79,70,229,0.07))' }}>
              <div className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }} />
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/25 flex items-center justify-center shrink-0">
                      <Network className="h-5 w-5 text-violet-400" />
                    </div>
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Core Platform Capability</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Agent Orchestration</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">The central nervous system of your AI operation. Multiple specialised agents — each reasoning independently — coordinated in real time across your enterprise to handle complex, multi-step workflows without human intervention.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Multi-agent coordination', 'Cross-system integration', 'Real-time reasoning', 'Autonomous decisions', 'Audit & governance', 'Adaptive learning'].map((cap, i) => (
                    <div key={i} className="rounded-lg px-3 py-2 text-xs text-violet-300 text-center border border-violet-500/20" style={{ background: 'rgba(124,58,237,0.08)' }}>{cap}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 supporting capabilities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {aiServices.filter(s => s.title !== 'AI Agent Orchestration').map((service, index) => (
                <div key={index} className="group rounded-2xl p-6 border border-white/8 hover:border-violet-500/40 transition-all duration-200 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="w-11 h-11 rounded-xl bg-violet-500/15 group-hover:bg-violet-500/25 flex items-center justify-center mb-4 transition-colors shrink-0">
                    <service.icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="space-y-1.5">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live agent activity strip */}
            <div className="rounded-2xl border border-white/8 overflow-hidden mb-0" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-white">Agents running right now across client environments</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">live</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
                {[
                  { label: 'Tickets auto-resolved today', value: '14,302', color: 'text-green-400' },
                  { label: 'Fraud signals flagged', value: '847', color: 'text-violet-400' },
                  { label: 'Compliance checks run', value: '3,219', color: 'text-blue-400' },
                  { label: 'Human escalations needed', value: '12', color: 'text-yellow-400' },
                ].map((item, i) => (
                  <div key={i} className="px-6 py-5 text-center">
                    <div className={`text-2xl font-bold font-mono ${item.color} mb-1`}>{item.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-PHASE METHODOLOGY ── */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-violet-600" />
              <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">How We Deliver</span>
            </div>
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
                Four phases.{' '}
                <span className="text-violet-600">Zero ambiguity.</span>
              </h2>
              <p className="text-gray-500 text-lg">
                A proven methodology that takes you from AI readiness to live autonomous agents in 16 weeks.
              </p>
            </div>

            {/* Animated timeline */}
            <div className="relative mb-0">
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-violet-100 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-violet-200 rounded-full"
                  style={{ width: phasesVisible ? '100%' : '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)', transitionDelay: '200ms' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
                {aiMethodology.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-start md:items-center px-4 pb-10 md:pb-0 group"
                    style={{
                      opacity: phasesVisible ? 1 : 0,
                      transform: phasesVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.55s ease, transform 0.55s ease',
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div
                      className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-violet-600 text-violet-600 font-bold text-xl mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors shadow-sm"
                      style={{
                        transform: phasesVisible ? 'scale(1)' : 'scale(0.65)',
                        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                        transitionDelay: `${index * 150 + 80}ms`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="inline-block text-xs font-medium text-violet-500 bg-violet-50 rounded-full px-3 py-1 mb-3">{step.duration}</span>
                    <h3 className="text-base font-bold text-gray-900 mb-3 md:text-center">{step.phase}</h3>
                    <ul className="space-y-1.5 w-full">
                      {step.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-500"
                          style={{
                            opacity: phasesVisible ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            transitionDelay: `${index * 150 + idx * 60 + 300}ms`,
                          }}
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-violet-400 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 bg-gray-50 border-t border-gray-100">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                {[
                  { value: '16 weeks', label: 'Max go-live timeline' },
                  { value: '500+', label: 'Agents in production' },
                  { value: '97.3%', label: 'Average model accuracy' },
                  { value: '50+', label: 'Certified AI experts' },
                ].map((stat, i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-violet-600">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-violet-600" />
                <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Real agents.<br />Real outcomes.
              </h2>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCase * 100}%)` }}
                >
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-5">
                              <span className="text-xs font-semibold text-violet-600 bg-violet-50 rounded-full px-3 py-1">{study.industry}</span>
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                            <div className="space-y-5">
                              <div>
                                <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-1.5">AI Solution</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                              </div>
                            </div>
                            <blockquote className="mt-6 pl-4 border-l-2 border-violet-200 text-sm text-gray-600 italic">
                              &ldquo;{study.testimonial}&rdquo;
                            </blockquote>
                          </div>
                          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#f8f6ff' }}>
                            <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-800">AI Impact</span>
                              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                                  <CheckCircle className="h-4 w-4 text-violet-500 mb-2" />
                                  <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                                </div>
                              ))}
                            </div>
                            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-xs text-gray-400">Delivered in</span>
                              <span className="text-sm font-bold text-violet-600">{study.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setCurrentCase(prev => (prev - 1 + caseStudies.length) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCase(i)}
                      className={`rounded-full transition-all duration-300 ${i === currentCase ? 'w-8 h-2 bg-violet-600' : 'w-2 h-2 bg-gray-300 hover:bg-violet-300'}`}
                      aria-label={`Case study ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentCase(prev => (prev + 1) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-violet-400 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 60%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-violet-500" />
                <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span>
                <span className="inline-block w-8 h-px bg-violet-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What leaders say about our AI.</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-2xl p-8 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                            <Users className="h-6 w-6 text-violet-400" />
                          </div>
                          <div>
                            <div className="font-bold text-white">{story.name}</div>
                            <div className="text-sm text-slate-400">{story.title}</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-5 text-base">&ldquo;{story.story}&rdquo;</p>
                        <div className="flex items-center gap-2 pt-4 border-t border-white/8">
                          <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                          <span className="text-green-400 text-sm font-medium">{story.metric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-8 bg-violet-400' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-8 h-px bg-violet-600" />
                  <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Common questions.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Everything you need to know before starting your AI transformation.
                </p>
                <a href="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 24px rgba(124,58,237,0.3)' }}
                >
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 hover:border-violet-200 rounded-xl overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-violet-500 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
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
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 text-violet-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Accepting new AI engagements · 16-week go-live commitment
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ready to deploy autonomous agents?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us your biggest operational bottleneck. We&apos;ll design an agent architecture in 48 hours and show you exactly how autonomous AI would solve it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}
              >
                Free AI Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-violet-500 hover:text-white transition-all text-base"
              >
                View all case studies
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
