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
    challenge: "Manual quality control causing 34% production delays and $8.7M annual losses",
    solution: "Agentic AI quality control with computer vision and predictive maintenance",
    results: ["89% reduction in defect rates", "156% production efficiency gain", "$12.4M annual savings", "Zero unplanned downtime"],
    timeline: "14 weeks",
    testimonial: "ifBash's agentic AI transformed our manufacturing floor. Our agents now predict issues before they happen and automatically optimise production."
  },
  {
    client: "HealthCare+ Network",
    industry: "Healthcare",
    challenge: "Patient data analysis taking 47 hours per case, causing treatment delays and compliance risks",
    solution: "Generative AI patient data analysis with automated report generation and compliance checking",
    results: ["94% faster data processing", "73% better diagnosis accuracy", "100% compliance adherence", "267% ROI in year one"],
    timeline: "18 weeks",
    testimonial: "The generative AI agents analyse patient data in minutes instead of days. Our clinicians now focus on care, not paperwork."
  },
  {
    client: "FinanceFlow Corp",
    industry: "Financial Services",
    challenge: "Fraud detection missing 23% of sophisticated attacks, costing $15.6M annually",
    solution: "Multi-agent AI system with real-time fraud detection and automated response protocols",
    results: ["97% fraud detection accuracy", "83% fewer false positives", "$18.9M in prevented losses", "2.3 s average response time"],
    timeline: "16 weeks",
    testimonial: "Our AI agents work 24/7 to protect customers. The sophistication is remarkable — they learn and adapt constantly."
  }
];

const clientStories = [
  {
    name: "Dr. Elena Vasquez",
    title: "Chief Innovation Officer",
    story: "ifBash's agentic AI didn't just automate our processes — it revolutionised how we think about manufacturing intelligence. Our agents are like expert technicians working 24/7.",
    metric: "156% increase in production efficiency with zero unplanned downtime",
    rating: 5
  },
  {
    name: "Dr. James Wilson",
    title: "Medical Director",
    story: "The generative AI agents analyse complex patient data in minutes that used to take days. This isn't just automation — it's augmented intelligence that makes our clinicians superhuman.",
    metric: "94% faster patient data processing with 73% better accuracy",
    rating: 5
  },
  {
    name: "Maria Santos",
    title: "Head of Risk Management",
    story: "The multi-agent fraud detection system is incredible. These agents collaborate, learn from each other, and catch sophisticated attacks our old systems missed completely.",
    metric: "$18.9M in prevented fraud losses in the first year",
    rating: 5
  },
  {
    name: "David Park",
    title: "VP of Operations",
    story: "Our agentic AI handles customer service, inventory, and demand forecasting simultaneously. It's like having an army of intelligent assistants that never sleep.",
    metric: "238% improvement in customer satisfaction scores",
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
    description: "Build autonomous agents that reason, learn, and act independently to solve complex business problems",
    benefits: ["Autonomous decision-making", "Continuous learning", "Multi-agent coordination"]
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Deploy generative AI to create content, code, insights, and solutions that accelerate business processes",
    benefits: ["Content generation", "Code automation", "Insight synthesis"]
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Orchestrate complex workflows with AI agents that adapt, optimise, and scale automatically",
    benefits: ["Adaptive workflows", "Smart optimisation", "Auto-scaling"]
  },
  {
    icon: Brain,
    title: "AI Agent Orchestration",
    description: "Coordinate multiple AI agents to work seamlessly across departments and enterprise systems",
    benefits: ["Multi-agent coordination", "Cross-system integration", "Seamless collaboration"]
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description: "Deploy AI that processes and responds to data in real-time for immediate business impact",
    benefits: ["Real-time processing", "Instant responses", "Immediate insights"]
  },
  {
    icon: CircuitBoard,
    title: "AI Platform Integration",
    description: "Seamlessly integrate AI capabilities with ServiceNow and your existing enterprise stack",
    benefits: ["Platform integration", "Enterprise connectivity", "Unified experience"]
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
    answer: "Agentic AI refers to autonomous agents that reason, make decisions, and take actions independently. Generative AI creates content, code, or insights. We combine both — agentic agents use generative AI capabilities to create solutions while operating autonomously within your ServiceNow platform."
  },
  {
    question: "How quickly can AI agents be deployed in our ServiceNow environment?",
    answer: "Simple AI agents can be deployed in 2–4 weeks, while complex multi-agent systems typically take 12–16 weeks. Our methodology includes rapid prototyping, so you'll see working agents within the first few weeks of engagement."
  },
  {
    question: "What types of business processes can agentic AI automate?",
    answer: "Agentic AI excels at decision-heavy processes like incident resolution, fraud detection, quality control, customer service, compliance monitoring, and predictive maintenance — any multi-step workflow that traditionally required human judgement."
  },
  {
    question: "How do you ensure AI agents make safe and compliant decisions?",
    answer: "We implement comprehensive governance frameworks including decision boundaries, approval workflows, audit trails, and continuous monitoring. All agents operate within defined parameters and escalate to humans when needed."
  },
  {
    question: "Can AI agents integrate with our existing enterprise systems beyond ServiceNow?",
    answer: "Yes. Our agents integrate with ERP, CRM, HR systems, databases, and custom APIs via ServiceNow's Integration Hub and custom connectors — seamless data flow across your entire technology stack."
  },
  {
    question: "How do you measure the ROI of agentic AI implementations?",
    answer: "We track process efficiency gains, cost reduction, error reduction, response time improvements, and employee productivity. Most clients achieve positive ROI within 12 weeks of deployment."
  },
  {
    question: "What training and support is provided for AI agent management?",
    answer: "Comprehensive training on agent management, monitoring, and optimisation — including admin certification, end-user workshops, monitoring dashboards, and ongoing support for performance tuning."
  },
  {
    question: "How does generative AI enhance traditional ServiceNow workflows?",
    answer: "Generative AI adds content creation, code generation, insight synthesis, and natural language processing — enabling automated reports, intelligent responses, code assistance, and dynamic content within ServiceNow workflows."
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 65%)' }} />

          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-violet-500" />
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Agentic AI &amp; Automation</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 sm:mb-12">
              {/* Left — headline + CTAs */}
              <div>
                <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-2 text-violet-300 text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  500+ AI Agents running in production now
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                  AI that thinks.{' '}
                  <span style={{ background: 'linear-gradient(90deg,#a78bfa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Acts autonomously.
                  </span>
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                  Deploy agentic AI and generative AI on ServiceNow in{' '}
                  <span className="text-violet-300 font-semibold">12–16 weeks</span>.
                  Autonomous agents that reason, decide, and act — so your teams focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
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
              </div>

              {/* Right — terminal */}
              <div className="bg-[#0d0d1f] border border-white/10 rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(124,58,237,0.12)' }}>
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-gray-500 text-xs font-mono">ifbash — agent-orchestrator — live</span>
                </div>
                <div className="px-5 py-5 space-y-3 font-mono text-xs sm:text-sm">
                  {logLines.map((line, i) => (
                    <p key={i} className={line.color}>{line.text}</p>
                  ))}
                  <p className="text-gray-600 animate-pulse">█</p>
                </div>
                <div className="px-5 py-3 border-t border-white/8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-slate-500 font-mono">All agents nominal · Last sync 0.4 s ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-white/8">
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
                Six AI disciplines.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">One unified platform.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {aiServices.map((service, index) => (
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

            {/* Capability stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-12 border-t border-white/8">
              {[
                { icon: Bot, stat: '500+ AI Agents', title: 'Deployed in Production', desc: 'Autonomous agents working across industries solving complex business challenges' },
                { icon: Zap, stat: '234% Improvement', title: 'Process Efficiency', desc: 'Average efficiency gain through intelligent automation across client deployments' },
                { icon: Target, stat: '97.3% Accuracy', title: 'AI Model Accuracy', desc: 'Average accuracy across deployed generative AI and agentic AI solutions' },
                { icon: TrendingUp, stat: '12 Weeks', title: 'Avg ROI Timeline', desc: 'Average time to achieve positive ROI from AI automation implementations' },
              ].map((item, index) => (
                <div key={index} className="group rounded-2xl p-6 border border-white/8 hover:border-violet-500/30 transition-all" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 group-hover:bg-violet-500/25 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <div className="text-2xl font-bold text-violet-400 mb-1">{item.stat}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
