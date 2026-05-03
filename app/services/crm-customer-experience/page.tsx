'use client';
import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Target,
  MessageCircle,
  ChevronDown,
  BarChart3,
  Smile,
  ThumbsUp,
  MessageSquare,
  Headphones,
} from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    client: "RetailMax Enterprise",
    industry: "Retail",
    challenge: "Customer contacts arriving through 7 disconnected channels — email, chat, phone, social, in-store, app, and SMS — with no shared history. Agents spent 4 minutes per contact just reconstructing context. CSAT was 41%. Staff turnover in the contact centre was 67% annually.",
    solution: "Unified ServiceNow CRM consolidating all 7 channels into a single customer record with full interaction history. AI agents handle routine enquiries (order status, returns, FAQs) autonomously. Staff see full context before first response.",
    results: ["CSAT: 41% → 89% in 6 months", "Average handle time: 11 min → 3.2 min (context now instant)", "Contact centre turnover: 67% → 24% (staff no longer drowning in context switching)", "$31M revenue growth attributed to retention improvement"],
    timeline: "14 weeks",
    testimonial: "Our agents used to spend half the call just figuring out who they were talking to. Now everything is there before they say hello. That alone changed the job."
  },
  {
    client: "TechServe Solutions",
    industry: "Technology",
    challenge: "Employee IT service requests averaging 5.7 days resolution through a single shared inbox. No categorisation, no routing intelligence, no self-service. 34% of requests were simple password resets or access grants that required engineer involvement.",
    solution: "AI-driven employee experience platform on ServiceNow with intelligent self-service portal, automated resolution for 34 common request types, and smart routing for complex cases. Engineers now only handle cases the AI cannot resolve.",
    results: ["Resolution time: 5.7 days → 9 hours average", "34 request types fully automated — zero engineer touch", "Employee satisfaction: 34% → 91%", "Engineer capacity freed: 2.3 FTE redeployed to infrastructure projects"],
    timeline: "12 weeks",
    testimonial: "I reset my own password for the first time in 12 years working here. It took 30 seconds. That's the kind of thing that actually changes how people feel about where they work."
  },
  {
    client: "HealthFirst Network",
    industry: "Healthcare",
    challenge: "45 locations each running separate patient intake, appointment, and discharge processes with no shared data. Patients transferred between facilities had to re-provide history every time. Staff across sites had no view of bed availability, creating manual phone chains for transfers.",
    solution: "Integrated CX and EX platform unifying patient records, staff workflows, and inter-facility coordination on ServiceNow. Patient history travels with the patient. Bed availability is live across all 45 sites.",
    results: ["Patient re-registration at transfer: eliminated entirely", "Inter-facility transfer coordination: 45 min → 8 min", "Patient satisfaction: 61% → 96% (Press Ganey)", "Staff time on manual coordination: 3.1 hrs/shift → 22 min/shift"],
    timeline: "18 weeks",
    testimonial: "A patient transferred from our Northside facility arrived at Central and their nurse already had the full history on screen. That has never happened before in 12 years."
  }
];

const clientStories = [
  {
    name: "Jennifer Walsh",
    title: "Chief Customer Officer, RetailMax Enterprise",
    story: "We had tried three different CRM implementations in six years. All of them added more systems to the problem instead of solving it. What ifBash did differently was start by mapping exactly where contacts were falling through — not by pitching a platform. By week two of discovery they'd identified that 34% of our re-contacts were caused by agents not having history from the previous channel. That's the problem they solved.",
    metric: "CSAT: 41% → 89%. Contact centre turnover halved.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    title: "Head of Employee Experience, TechServe Solutions",
    story: "The number that surprised us most wasn't resolution time. It was that 34 of our most common request types — things engineers were handling manually every day — could be completely automated without reducing quality. Those engineers didn't lose their jobs. They got moved onto infrastructure work they'd been asking to do for two years. That's what good automation looks like.",
    metric: "5.7-day resolution → 9 hours. 34 request types fully automated.",
    rating: 5
  },
  {
    name: "Dr. Lisa Chen",
    title: "Chief Experience Officer, HealthFirst Network",
    story: "The governance challenge across 45 locations was the thing everyone said would slow us down. ifBash ran parallel configuration tracks — six locations at a time — rather than a sequential rollout. We had 18 locations live by week 12 and the remaining 27 by week 18. Zero sites went back to manual after going live.",
    metric: "Inter-facility transfer: 45 min → 8 min. Patient satisfaction: 61% → 96%.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    title: "VP Customer Success, B2B SaaS firm",
    story: "We were measuring NPS and CSAT but we had no view of the customer journey between survey responses. ifBash built us a real-time health score that pulls from product usage, support ticket history, contract stage, and last interaction. Our CSMs now know which accounts need attention before the customer tells them.",
    metric: "Customer churn: 18% → 7% in 12 months. At-risk accounts identified 47 days earlier on average.",
    rating: 5
  }
];

const crmMethodology = [
  {
    phase: "Experience Strategy & Design",
    duration: "Week 1–3",
    features: ["Journey mapping", "Persona development", "Touchpoint analysis", "Experience blueprint", "KPI definition"]
  },
  {
    phase: "Platform Configuration",
    duration: "Week 4–8",
    features: ["CRM setup", "Workflow automation", "System integration", "AI agent configuration", "Portal development"]
  },
  {
    phase: "Intelligence & Automation",
    duration: "Week 9–12",
    features: ["AI model training", "Predictive analytics", "Chatbot development", "Process automation", "Personalisation engine"]
  },
  {
    phase: "Launch & Optimisation",
    duration: "Week 13–16",
    features: ["Phased rollout", "User training", "Performance monitoring", "Experience optimisation", "Continuous improvement"]
  }
];

const crmServices = [
  {
    icon: Heart,
    title: "Customer Experience Orchestration",
    description: "We build a unified customer record that follows the customer across every channel — web, phone, chat, email, in-person. Agents see full history before first response. AI handles routine contacts autonomously. Every interaction is logged, searchable, and feeds into experience analytics.",
    benefits: ["Single customer record across all channels", "AI autonomous resolution for defined contact types", "Full interaction history available before first response"]
  },
  {
    icon: Users,
    title: "Employee Experience Platform",
    description: "We replace the shared inbox and manual routing with an intelligent self-service portal and AI triage. Common requests — access, equipment, HR queries, IT issues — are resolved automatically. Complex cases route to the right team with full context attached. Engineers stop doing Tier 1 work.",
    benefits: ["Self-service resolution for high-volume request types", "Intelligent routing with context attached to every case", "Tier 1 automation freeing specialist capacity"]
  },
  {
    icon: MessageSquare,
    title: "Intelligent Customer Service",
    description: "AI agents handle your highest-volume contact types — order status, account queries, FAQs, password resets, booking changes. Each agent is scoped to a defined set of intents with a confidence threshold; anything outside that scope escalates to a human with full context. Resolution rates for automated contacts typically exceed 85%.",
    benefits: ["Defined intent scope with measurable resolution rates", "Confidence-based escalation with full context handed over", "Performance dashboard from day one of live deployment"]
  },
  {
    icon: BarChart3,
    title: "Experience Analytics & Insights",
    description: "We build a live experience dashboard pulling from CRM interactions, satisfaction surveys, product usage, and operational metrics. One definition per KPI — no more five teams with five different CSAT numbers. Customer health scores, churn prediction signals, and effort scores available at account and segment level.",
    benefits: ["Single definition per KPI across all teams", "Customer health scores with contributing factor breakdown", "Churn prediction signal with 30–60 day lead time"]
  },
  {
    icon: Zap,
    title: "Process Automation & Workflows",
    description: "We map your current service and support workflows, identify where manual steps create delay or error, and automate them on ServiceNow. Approvals, escalations, assignment rules, SLA enforcement, and notification chains — all defined in Flow Designer with human override at every step.",
    benefits: ["Process mining to identify highest-delay manual steps", "Automated approval and escalation chains", "SLA enforcement with real-time breach alerting"]
  },
  {
    icon: Shield,
    title: "Compliance & Data Security",
    description: "Customer and employee data handled through ServiceNow with role-based access controls, consent management, data retention policies, and full audit trails. For healthcare clients we implement HIPAA-compliant data handling. For financial services, SOX and PCI-DSS controls are built into every data flow from architecture design.",
    benefits: ["Role-based data access with field-level controls", "Consent management and data retention automation", "Audit trail for every data access and modification"]
  }
];

const faqs = [
  {
    question: "How does ServiceNow CRM differ from traditional CRM systems?",
    answer: "Traditional CRMs like Salesforce or HubSpot are optimised for pipeline management and sales activity. ServiceNow CRM is built for service operations — it connects customer-facing interactions to the back-office workflows that resolve them. When a customer raises an issue, ServiceNow doesn't just log it; it can trigger a fulfilment workflow, route it to the right team, enforce an SLA, and update the customer automatically. The difference is a system that records vs a system that acts."
  },
  {
    question: "Can the platform handle both customer and employee experiences simultaneously?",
    answer: "Yes — and the shared platform is a deliberate design choice, not a technical convenience. When your employee experience (the people handling customer contacts) is broken — slow tooling, missing context, manual routing — your customer experience reflects it directly. Building both on the same ServiceNow data model means employee service requests, customer interactions, and operational workflows share a single record system. Changes in one affect the other in real time."
  },
  {
    question: "What AI capabilities are included in the CRM solution?",
    answer: "We deploy AI where it directly reduces measurable effort: autonomous resolution of defined high-volume contact types (typically 30–40% of inbound volume), AI triage and routing for complex cases, real-time customer health scoring, and predictive churn signals. Each AI capability has a defined accuracy threshold before it touches production — we don't deploy AI that hasn't demonstrated it performs better than the manual process it's replacing."
  },
  {
    question: "How quickly can we see improvements in satisfaction scores?",
    answer: "Contact handle time and first-contact resolution typically improve within the first 2–3 weeks of go-live as agents gain access to unified history. CSAT scores start improving once customers notice shorter resolution times — usually measurable by week 6–8. Structural improvements like churn reduction and NPS shift take 3–6 months as the data accumulates. We track all three time horizons from day one so you have visibility across short, medium, and long-term impact."
  },
  {
    question: "What integrations are possible with existing systems?",
    answer: "ServiceNow CRM integrates with your telephony platform (Genesys, Avaya, Five9), marketing automation (Marketo, HubSpot), billing and ERP (SAP, Oracle, Netsuite), e-commerce platforms, and any system with an API. We also build custom integrations for proprietary or legacy systems. The integration architecture is built in the first phase of discovery — we don't start building the platform until we know exactly what needs to connect."
  },
  {
    question: "How do you measure the success of experience implementations?",
    answer: "We agree specific KPI targets in week one of discovery — CSAT score, NPS, first-contact resolution rate, average handle time, employee satisfaction, request resolution time — and build measurement into the platform from day one. You have a live dashboard from go-live, not a quarterly report. We also run a formal 90-day post-go-live review where we compare every agreed metric against the baseline and target."
  },
  {
    question: "What training and support is provided post-launch?",
    answer: "Three tracks: administrator training covering platform configuration, workflow management, and AI threshold tuning; supervisor training covering performance dashboards, queue management, and escalation handling; and end-user training covering the self-service portal and case submission. We also run a 90-day hypercare period with a dedicated support line staffed by the delivery team — the people who built the platform, not a generic helpdesk."
  },
  {
    question: "Can the platform scale as our business grows?",
    answer: "ServiceNow's cloud architecture scales horizontally — additional users, contact volume, and integration connections don't require re-architecture. What does require planning is the data model: we design the customer record structure in week one of discovery with scale in mind, so adding new channels, products, or geographies later is additive rather than structural. Clients who've doubled in size post-implementation have added new capabilities without rebuilding."
  }
];

export default function CRMCustomerEmployeeExperience() {
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
          style={{ background: 'linear-gradient(135deg, #e11d48, #db2777)', boxShadow: '0 8px 24px rgba(225,29,72,0.4)' }}
          aria-label="Free CRM Consultation"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">
            Free CRM Consultation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-rose-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f43f5e 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(225,29,72,0.08) 0%, transparent 60%)' }} />

          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-14 sm:pt-20 pb-0 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-rose-500" />
              <span className="text-rose-500 text-sm font-semibold tracking-widest uppercase">CRM &amp; Customer Experience</span>
              <span className="inline-block w-8 h-px bg-rose-500" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.0] tracking-tight mb-6">
              Every interaction.{' '}
              <span style={{ background: 'linear-gradient(90deg,#e11d48,#db2777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                A loyalty moment.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              Unify customer and employee journeys on ServiceNow in{' '}
              <span className="text-rose-600 font-semibold">14–16 weeks</span>.
              AI-powered CRM that turns every touchpoint into measurable satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ background: 'linear-gradient(135deg, #e11d48, #db2777)', boxShadow: '0 8px 24px rgba(225,29,72,0.3)' }}
              >
                Transform Customer Experience <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-rose-400 text-gray-700 hover:text-rose-600 font-semibold rounded-xl transition-colors text-sm sm:text-base"
              >
                See Client Stories
              </a>
            </div>

            {/* Customer Journey — 4 stage visualization */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-0">
              {[
                { stage: 'Awareness', icon: '◎', score: '4.2×', metric: 'more touchpoints captured', desc: 'Unified profile captures web, app, email, social and in-store — all in one record from first visit', color: 'rose', bar: 'w-[85%]' },
                { stage: 'Engagement', icon: '⟳', score: '68%', metric: 'faster first response', desc: 'Agents see full history before they respond — no time wasted reconstructing context across channels', color: 'pink', bar: 'w-[68%]' },
                { stage: 'Retention', icon: '♥', score: '30–60', metric: 'days early churn signal', desc: 'Health score model surfaces at-risk accounts before they ask to leave — not after', color: 'fuchsia', bar: 'w-[94%]' },
                { stage: 'Advocacy', icon: '★', score: '+44', metric: 'average NPS gain', desc: 'Across retail, tech and healthcare clients — 12 months post go-live', color: 'rose', bar: 'w-[80%]' },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl border p-5 text-left hover:-translate-y-1 transition-transform border-${item.color}-100`} style={{ background: i % 2 === 0 ? '#fff8f9' : '#fff5f7' }}>
                  <div className={`text-2xl mb-3 text-${item.color}-400`}>{item.icon}</div>
                  <div className={`text-xs font-bold text-${item.color}-500 uppercase tracking-widest mb-1`}>{item.stage}</div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`text-3xl font-bold text-${item.color}-600`}>{item.score}</span>
                    <span className="text-xs text-gray-400 mb-1">{item.metric}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className={`h-full bg-${item.color}-400 rounded-full ${item.bar}`} />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 border-t border-gray-100 bg-gray-50">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                {[
                  { value: '+44 pts', label: 'Avg NPS gain post go-live', sub: 'across all CRM programmes' },
                  { value: '68%', label: 'Faster first response time', sub: 'unified history before first reply' },
                  { value: '30–60 days', label: 'Earlier churn detection', sub: 'vs. survey-only measurement' },
                  { value: '14 wks', label: 'Max go-live timeline', sub: 'strategy to live platform' },
                ].map((stat, i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-rose-500">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CRM SERVICES ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: '#07071a' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 left-0 w-[600px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse at top left, #e11d48, transparent 65%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-rose-500" />
                <span className="text-rose-400 text-sm font-semibold tracking-widest uppercase">What We Deliver</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Two audiences.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">One unified platform.</span>
              </h2>
              <p className="text-slate-400 mt-3 max-w-xl">External customers and internal employees — both deserve intelligent, seamless experiences. We build them together, on one platform.</p>
            </div>

            {/* CX / EX split layout */}
            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              {/* Customer Experience column */}
              <div className="rounded-2xl border border-rose-500/20 overflow-hidden" style={{ background: 'rgba(225,29,72,0.04)' }}>
                <div className="px-6 py-4 border-b border-rose-500/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center shrink-0">
                    <Heart className="h-4 w-4 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-rose-300">Customer Experience</div>
                    <div className="text-xs text-slate-500">External-facing journeys</div>
                  </div>
                  <div className="ml-auto text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">CX</div>
                </div>
                <div className="p-5 space-y-4">
                  {crmServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-rose-500/25 transition-colors" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <div className="w-9 h-9 rounded-lg bg-rose-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <service.icon className="h-4 w-4 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm mb-1">{service.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-2">{service.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.benefits.map((b, i) => (
                            <span key={i} className="text-[10px] text-rose-400 bg-rose-500/10 rounded px-2 py-0.5">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employee Experience column */}
              <div className="rounded-2xl border border-pink-500/20 overflow-hidden" style={{ background: 'rgba(236,72,153,0.04)' }}>
                <div className="px-6 py-4 border-b border-pink-500/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-pink-300">Employee Experience</div>
                    <div className="text-xs text-slate-500">Internal workforce journeys</div>
                  </div>
                  <div className="ml-auto text-xs font-semibold text-pink-400 bg-pink-500/10 px-2 py-1 rounded-full">EX</div>
                </div>
                <div className="p-5 space-y-4">
                  {crmServices.slice(3).map((service, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-pink-500/25 transition-colors" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <div className="w-9 h-9 rounded-lg bg-pink-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <service.icon className="h-4 w-4 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm mb-1">{service.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-2">{service.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.benefits.map((b, i) => (
                            <span key={i} className="text-[10px] text-pink-400 bg-pink-500/10 rounded px-2 py-0.5">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Before / After strip */}
            <div className="rounded-2xl border border-white/8 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/8 text-center">
                <span className="text-sm font-semibold text-white">What changes when you implement with ifBash</span>
              </div>
              <div className="grid md:grid-cols-2 divide-x divide-white/8">
                <div className="p-6">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">Before</div>
                  <div className="space-y-3">
                    {[
                      'Siloed CRM, ITSM, and HR systems — no single view',
                      'Average 5.7-day service resolution time',
                      'Customer satisfaction dropping quarter over quarter',
                      'Manual routing causing 34% re-work rate',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6" style={{ background: 'rgba(225,29,72,0.04)' }}>
                  <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">After</div>
                  <div className="space-y-3">
                    {[
                      '360° unified view of every customer and employee',
                      '78% faster resolution — under 30 minutes on average',
                      'CSAT up 89% — NPS from negative to +72',
                      'AI routing eliminates re-work entirely',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle className="h-4 w-4 text-rose-400 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-PHASE METHODOLOGY ── */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #e11d48 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-rose-600" />
              <span className="text-rose-600 text-sm font-semibold tracking-widest uppercase">How We Deliver</span>
            </div>
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
                Four phases.{' '}
                <span className="text-rose-600">One experience vision.</span>
              </h2>
              <p className="text-gray-500 text-lg">
                A structured journey from strategy to live platform — customer and employee satisfaction transformed in 16 weeks.
              </p>
            </div>

            <div className="relative mb-0">
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-rose-100 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-rose-400 to-rose-200 rounded-full"
                  style={{ width: phasesVisible ? '100%' : '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)', transitionDelay: '200ms' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
                {crmMethodology.map((step, index) => (
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
                      className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-rose-600 text-rose-600 font-bold text-xl mb-5 group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-sm"
                      style={{
                        transform: phasesVisible ? 'scale(1)' : 'scale(0.65)',
                        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                        transitionDelay: `${index * 150 + 80}ms`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="inline-block text-xs font-medium text-rose-500 bg-rose-50 rounded-full px-3 py-1 mb-3">{step.duration}</span>
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
                          <CheckCircle className="h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 border-t border-gray-100">
            <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                {[
                  { value: '16 weeks', label: 'Max go-live timeline' },
                  { value: '1,500+', label: 'Implementations delivered' },
                  { value: '89%', label: 'Average CSAT achieved' },
                  { value: '50+', label: 'Certified CX experts' },
                ].map((stat, i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-rose-600">{stat.value}</div>
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
                <span className="inline-block w-8 h-px bg-rose-600" />
                <span className="text-rose-600 text-sm font-semibold tracking-widest uppercase">Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Real satisfaction.<br />Real growth.
              </h2>
            </div>

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
                              <span className="text-xs font-semibold text-rose-600 bg-rose-50 rounded-full px-3 py-1">{study.industry}</span>
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                            <div className="space-y-5">
                              <div>
                                <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-rose-500 uppercase tracking-widest mb-1.5">CRM Solution</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                              </div>
                            </div>
                            <blockquote className="mt-6 pl-4 border-l-2 border-rose-200 text-sm text-gray-600 italic">
                              &ldquo;{study.testimonial}&rdquo;
                            </blockquote>
                          </div>
                          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#fff5f7' }}>
                            <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-800">Experience Impact</span>
                              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                                  <CheckCircle className="h-4 w-4 text-rose-500 mb-2" />
                                  <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                                </div>
                              ))}
                            </div>
                            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-xs text-gray-400">Delivered in</span>
                              <span className="text-sm font-bold text-rose-600">{study.timeline}</span>
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
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-rose-400 flex items-center justify-center text-gray-500 hover:text-rose-600 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCase(i)}
                      className={`rounded-full transition-all duration-300 ${i === currentCase ? 'w-8 h-2 bg-rose-600' : 'w-2 h-2 bg-gray-300 hover:bg-rose-300'}`}
                      aria-label={`Case study ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentCase(prev => (prev + 1) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-rose-400 flex items-center justify-center text-gray-500 hover:text-rose-600 transition-colors"
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
          <div className="absolute top-0 left-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(ellipse at top left, #e11d48, transparent 60%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-rose-500" />
                <span className="text-rose-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span>
                <span className="inline-block w-8 h-px bg-rose-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What experience leaders say.</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-2xl p-8 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                            <Users className="h-6 w-6 text-rose-400" />
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-8 bg-rose-400' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
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
                  <span className="inline-block w-8 h-px bg-rose-600" />
                  <span className="text-rose-600 text-sm font-semibold tracking-widest uppercase">FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Common questions.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Everything you need to know before starting your CRM transformation.
                </p>
                <a href="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #e11d48, #db2777)', boxShadow: '0 8px 24px rgba(225,29,72,0.3)' }}
                >
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 hover:border-rose-200 rounded-xl overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-rose-500 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #e11d48, transparent 70%)' }} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/25 rounded-full px-4 py-2 text-rose-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Accepting new CRM engagements · 16-week go-live commitment
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ready to delight every customer?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us your biggest experience gap. We&apos;ll map your CX and EX journey in 48 hours and show you exactly what&apos;s possible — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #e11d48, #db2777)', boxShadow: '0 8px 32px rgba(225,29,72,0.4)' }}
              >
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-rose-500 hover:text-white transition-all text-base"
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
