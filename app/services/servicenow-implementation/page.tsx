'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  ChevronLeft,
  Play,
  Users, 
  Zap, 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Bot,
  Brain,
  Workflow,
  Database,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
  Globe,
  Settings,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Building,
  Factory,
  HeartPulse,
  Car,
  Briefcase,
  MonitorSmartphone,
  Quote,
  Video,
  FileText,
  Download,
  ExternalLink,
  Timer,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  CloudLightning,
  GraduationCap,
  BookOpen,
  UserCheck,
  Layers,
  Cog,
  ShoppingBag,
  Store,
  Microscope,
  Music,
  MessageCircle,
  Wrench,
  Clock,
  Gauge,
  Network,
  RefreshCw,
  CloudDownload,
  Server,
  Search,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
  {
    client: "TechFlow Industries",
    industry: "Manufacturing",
    challenge: "47 separate applications handling IT service management across 8 business units — each with its own queue, its own SLA definitions, and no shared data. Incident resolution averaged 6.4 days because tickets crossed systems manually. Engineers spent 40% of their time on context-switching rather than resolution.",
    solution: "Unified ServiceNow ITSM across all 8 business units with a single incident queue, automated routing, and a custom integration hub connecting the 12 most-used legacy tools. Engineers work from one interface.",
    results: ["Incident resolution: 6.4 days → 1.7 days average", "Engineer context-switching time: 40% → under 8%", "$2.3M annual savings from resolution efficiency alone", "99.7% platform uptime in the 12 months post go-live"],
    timeline: "12 weeks",
    image: "/images/case-studies/techflow-manufacturing.jpg",
    testimonial: "We had 47 places to look for a ticket. Now there's one. That sounds simple but it changed everything about how our engineers work."
  },
  {
    client: "GlobalHealth Network",
    industry: "Healthcare",
    challenge: "23 healthcare facilities each running independent IT service management — separate tools, separate queues, no shared knowledge base. A fix discovered at one facility took months to reach others. HIPAA audit prep required 3 weeks of manual evidence gathering per facility.",
    solution: "Scalable ServiceNow ITSM with a shared global knowledge base, automated compliance workflows generating audit evidence continuously, and a unified monitoring layer giving the central IT team visibility across all 23 sites.",
    results: ["HIPAA audit prep: 3 weeks/facility → 2-day automated report", "Repeat incidents resolved 67% faster using shared knowledge base", "Central IT visibility: 23 separate dashboards → one unified view", "Zero downtime across all 23 facilities during the 16-week migration"],
    timeline: "16 weeks",
    image: "/images/case-studies/globalhealth-healthcare.jpg",
    testimonial: "The 23-location rollout was the part I was most worried about. ifBash ran six sites at a time in parallel. Nobody noticed the migration was happening — which is exactly what you want."
  },
  {
    client: "FinanceCore Ltd",
    industry: "Financial Services",
    challenge: "SOX audit requirements demanding full incident audit trails that the existing system couldn't produce automatically. Audit prep required a dedicated 4-person team for 6 weeks per audit cycle. Two security incidents in the prior 18 months traced to access control gaps in the legacy ITSM.",
    solution: "Enterprise-grade ServiceNow ITSM with automated SOX control documentation, role-based access controls designed to SOX requirements, and continuous audit trail generation. Security review embedded in implementation from week one.",
    results: ["SOX audit prep: 6-week manual exercise → 3-day automated report", "Access control gaps identified and closed before go-live", "Zero security incidents in 24 months post-implementation", "91% user satisfaction score at 90-day post-go-live survey"],
    timeline: "14 weeks",
    image: "/images/case-studies/financecore-financial.jpg",
    testimonial: "Our auditors expected the usual box of evidence. Instead we handed them a system-generated report with every control documented and timestamped. They called it the cleanest audit package they'd seen."
  }
];

// Client Stories
const clientStories = [
  {
    name: "David Miller",
    title: "CTO, TechFlow Industries",
    company: "",
    story: "We'd been told for years that consolidating 47 systems was too risky and too expensive. ifBash came in, did a 2-week discovery, and showed us a phased plan where we'd see ROI before we'd committed to the full programme. We were live in 12 weeks with measurable outcomes from week one. The 6.4-day average incident resolution time that had plagued us for years dropped to 1.7 days in the first month.",
    metric: "Incident resolution: 6.4 days → 1.7 days. $2.3M annual savings.",
    rating: 5,
    avatar: "/images/testimonials/david-miller.jpg"
  },
  {
    name: "Sarah Chen",
    title: "VP Operations, GlobalHealth Network",
    company: "",
    story: "Twenty-three locations, most of which had been running their own IT systems for over a decade. The change management risk was enormous. ifBash identified the 6 most resistant stakeholders by name in the first week of discovery and worked with them specifically — not a generic training programme, but dedicated sessions. We had zero rollbacks and zero outages during the migration.",
    metric: "23 locations migrated with zero downtime. HIPAA audit prep: 3 weeks → 2 days.",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen.jpg"
  },
  {
    name: "Michael Torres",
    title: "IT Director, FinanceCore Ltd",
    company: "",
    story: "We'd had two security incidents in 18 months and our auditors were watching us closely. ifBash built the access control model from SOX requirements up — they didn't implement ServiceNow and then figure out compliance. Every role, every permission, every audit trail was designed before a single workflow was built. Zero incidents in 24 months since go-live.",
    metric: "Zero security incidents post-go-live. SOX audit prep: 6 weeks → 3 days.",
    rating: 5,
    avatar: "/images/testimonials/michael-torres.jpg"
  },
  {
    name: "Jennifer Walsh",
    title: "Chief Digital Officer",
    company: "",
    story: "The thing that surprised me most was the adoption rate. We expected the usual 6-month battle to get engineers to use the new system. By week 4 post go-live, 94% of tickets were being raised through ServiceNow. ifBash's training approach — role-specific, not generic, with dedicated champions in each department — made the difference.",
    metric: "94% adoption by week 4. 47% improvement in service delivery metrics.",
    rating: 5,
    avatar: "/images/testimonials/jennifer-walsh.jpg"
  }
];

// Implementation Methodology
const methodology = [
  {
    phase: "Discovery",
    duration: "Week 1-2",
    features: [
      "Current state analysis",
      "Process mapping",
      "Risk assessment",
      "Stakeholder alignment"
    ],
    icon: <Search className="h-6 w-6" />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    phase: "Design",
    duration: "Week 3-6",
    features: [
      "Instance setup",
      "Workflow design",
      "Security config",
      "UX Design"
    ],
    icon: <Lightbulb className="h-6 w-6" />,
    color: "from-indigo-600 to-purple-600"
  },
  {
    phase: "Development",
    duration: "Week 7-10",
    features: [
      "Custom development",
      "Integration build",
      "Automated testing",
      "Validation"
    ],
    icon: <Cog className="h-6 w-6" />,
    color: "from-purple-600 to-pink-600"
  },
  {
    phase: "Deployment",
    duration: "Week 11-12",
    features: [
      "Data migration",
      "User training",
      "Go-live support",
      "KPI monitoring"
    ],
    icon: <Rocket className="h-6 w-6" />,
    color: "from-pink-600 to-orange-500"
  }
];

// Service Features
const serviceFeatures = [
  {
    icon: Rocket,
    title: "Rapid Implementation",
    description: "73-day average go-live using pre-built accelerators. See working workflows in week two, not a presentation.",
    benefits: ["Pre-built accelerators", "Parallel workstreams", "Demo environment week 2"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Network,
    title: "Seamless Integration",
    description: "Connect ServiceNow to ERP, HR, and CRM using 300+ pre-built patterns or custom connectors.",
    benefits: ["300+ connector patterns", "Load-tested integrations", "Proprietary system support"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Security designed into architecture before build. RBAC and audit trails implemented as structural requirements.",
    benefits: ["Security-first architecture", "Compliance-driven models", "Automated audit trails"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Change Management",
    description: "We focus on adoption with role-specific training and live dashboards. Clients average 91% adoption.",
    benefits: ["Department champions", "Role-specific training", "Adoption dashboards"],
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimisation",
    description: "KPI frameworks agreed upfront. Monthly reviews ensure you hit targets that justified the programme.",
    benefits: ["Agreed KPI targets", "Live performance metrics", "90-day optimisation"],
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description: "Support from the original build team. Managed services offer 24/7 monitoring and 15-min P1 response.",
    benefits: ["Original engineer support", "24/7 P1 response", "Seamless management"],
    gradient: "from-green-500 to-emerald-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How long does a typical ServiceNow implementation take with ifBash?",
    answer: "Most implementations run 12–16 weeks from kickoff to go-live. The 73-day average comes from pre-built configuration accelerators that eliminate repeated setup work, parallel workstreams where testing runs alongside build (not after it), and a phase gate process that catches scope creep early. For comparison, the industry average without accelerators is 6–9 months. Complex multi-module implementations with significant custom development run 16–20 weeks."
  },
  {
    question: "What makes ifBash different from other ServiceNow consulting firms?",
    answer: "Three things distinguish us. First, our accelerators: 1,500+ implementations have produced pre-built configuration patterns for the most common workflows — we start from working code, not blank instances. Second, our phase gate model: every phase has defined exit criteria; if phase one doesn't hit its targets, phase two doesn't start — this accountability is rare. Third, we don't disappear after go-live: the team that implements stays on as your managed services provider if you want continuity."
  },
  {
    question: "Can you integrate ServiceNow with our existing enterprise systems?",
    answer: "Integration is one of the most common reasons implementations run over time and budget — and one of our specific strengths. We start integration design in week one of discovery (not week 8 of build), use 300+ pre-built connector patterns as starting points, and build custom connectors for systems without native support. Every integration is tested under production load before cutover. We've integrated ServiceNow with SAP, Oracle, Workday, Salesforce, Dynamics, mainframes, IoT platforms, and proprietary industry systems."
  },
  {
    question: "What support do you provide after the ServiceNow implementation?",
    answer: "The 90 days after go-live are the most critical. We include a structured hypercare period in every engagement: daily check-ins for the first two weeks, weekly performance reviews through week 12, and a formal 90-day outcome review against the KPIs agreed in discovery. After hypercare, clients can move to our managed services offering — the same engineers who built the platform continue to manage and optimise it."
  },
  {
    question: "How do you ensure the ServiceNow implementation meets our security requirements?",
    answer: "We design the security model before we design any workflow. Role-based access controls, data encryption, audit trail requirements, and compliance framework mappings (SOC 2, HIPAA, SOX) are defined in weeks one and two and drive every subsequent architecture decision. Clients in regulated industries get a dedicated security review before production deployment and receive audit-ready documentation as a standard deliverable."
  },
  {
    question: "What training is included in your ServiceNow consulting services?",
    answer: "Role-specific training, not generic workshops. We deliver separate tracks for platform administrators, service desk agents, department managers, and executive stakeholders — each focused on what that role actually does in the new platform. We also train department champions in week one and support them throughout, so there's a peer network for questions before and after formal training. Training documentation is produced as a live deliverable during build, not assembled at the end."
  },
  {
    question: "Can you help with ServiceNow platform optimization and upgrades?",
    answer: "Yes — platform upgrades are a specific managed services capability. Our upgrade methodology: 6-week advance planning, full upgrade in sandbox with all custom configurations tested, stakeholder communication drafted and approved, production upgrade in a defined maintenance window with rollback tested and ready. We've completed 400+ platform upgrades without a single unplanned downtime event."
  },
  {
    question: "What industries do you serve for ServiceNow implementations?",
    answer: "Healthcare (HIPAA, HL7 integrations), Financial Services (SOX, PCI-DSS, FedRAMP), Manufacturing (OT/IT integration, ERP connectivity), Technology, Government (FedRAMP, ATO processes), Education, Retail, and Telecommunications. Industry expertise means we start from a baseline of compliance requirements and integration patterns specific to your sector — not a generic framework we adapt retroactively."
  }
];

export default function ServiceNowConsultingImplementation() {
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
            "mainEntity": faqs.map((faq) => ({
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
          style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 24px rgba(79,70,229,0.4)'}}
          aria-label="Free Strategy Call"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-[calc(100%+10px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap text-sm text-gray-800">
            Free Strategy Call
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20" />
        </a>
      </div>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto pt-10 sm:pt-14 pb-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              {/* Left: headline + CTAs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-8 h-px bg-indigo-600" />
                  <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">ServiceNow Implementation</span>
                </div>
                <br></br>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  Go-live in{' '}
                  <span className="text-indigo-600">73 days.</span><br />
                  <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl font-normal">Not 9 months.</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                  A structured four-phase methodology. 
                  <br></br>Battle-tested across numerous engagements. 
                  <br></br>Precision delivery — not guesswork.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a href="/get-started"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                    style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 24px rgba(79,70,229,0.3)'}}
                  >
                    Start Your Implementation <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="/company/case-studies-client-success"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-semibold rounded-xl transition-colors text-sm sm:text-base"
                  >
                    See Client Results
                  </a>
                </div>
              </div>

              {/* Right: integration ecosystem visual */}
              <div className="relative hidden lg:flex items-center justify-center py-8">
                {/* Center hub */}
                <div className="relative z-10 w-28 h-28 rounded-2xl border-2 border-indigo-500 bg-white shadow-xl flex flex-col items-center justify-center" style={{boxShadow:'0 0 40px rgba(79,70,229,0.2)'}}>
                  <div className="text-indigo-600 font-black text-xl leading-none">Now</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">ServiceNow</div>
                  <div className="absolute inset-0 rounded-2xl animate-ping opacity-[0.08]" style={{background:'rgba(79,70,229,1)'}} />
                </div>
                {/* Orbit ring */}
                <div className="absolute w-72 h-72 rounded-full border border-indigo-100" />
                <div className="absolute w-64 h-64 rounded-full border border-indigo-50" />
                {/* Connected nodes */}
                {[
                  {label:'SAP',sub:'ERP',angle:0,color:'#0070f3'},
                  {label:'Salesforce',sub:'CRM',angle:51,color:'#00a1e0'},
                  {label:'Workday',sub:'HR',angle:102,color:'#f8761f'},
                  {label:'Azure AD',sub:'Identity',angle:153,color:'#0078d4'},
                  {label:'Jira',sub:'Dev',angle:204,color:'#0052cc'},
                  {label:'Slack',sub:'Comms',angle:255,color:'#4a154b'},
                  {label:'MS Teams',sub:'Collab',angle:307,color:'#6264a7'},
                ].map(({label,sub,angle,color},i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 128;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div key={i}
                      className="absolute flex flex-col items-center justify-center w-16 h-16 rounded-xl border bg-white shadow-md text-center"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        borderColor: `${color}33`,
                        boxShadow: `0 4px 16px ${color}22`,
                      }}
                    >
                      <div className="text-[11px] font-bold" style={{color}}>{label}</div>
                      <div className="text-[9px] text-gray-400">{sub}</div>
                    </div>
                  );
                })}
                {/* Connector lines — SVG overlay with fixed coordinate system */}
                <svg className="absolute pointer-events-none" width="320" height="320" viewBox="-160 -160 320 320" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                  {[0,51,102,153,204,255,307].map((angle,i) => {
                    const rad = (angle * Math.PI) / 180;
                    const r = 128;
                    return (
                      <line key={i}
                        x1={0} y1={0}
                        x2={Math.cos(rad) * r} y2={Math.sin(rad) * r}
                        stroke="#4f46e5" strokeWidth="1" strokeOpacity="0.15"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>
                {/* Live pulse indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-600">300+ enterprise integrations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IFBASH (SWAPPED & TRIMMED) ── */}
        <section className="py-20 relative overflow-hidden" style={{background: '#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">The ifBash Advantage</span>
                <span className="inline-block w-8 h-px bg-indigo-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Built for enterprise. <span className="text-indigo-400">Delivered with precision.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="h-3 w-3 text-indigo-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY (ENHANCED LOOK) ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          <div className="relative z-10 w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The 73-Day Roadmap</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">A high-velocity delivery model that prioritizes working software over exhaustive documentation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent z-0" />
              
              {methodology.map((step, index) => (
                <div key={index} className="relative z-10 group">
                  <div className="mb-6 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-lg transition-transform group-hover:-translate-y-1`}>
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center text-indigo-600">
                        {step.icon}
                      </div>
                    </div>
                    <div className="mt-4 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {step.duration}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-indigo-500/10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.phase}</h3>
                    <ul className="space-y-3">
                      {step.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-indigo-600" />
                <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Client Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Real numbers.<br />Real clients.
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
                          {/* Left — narrative */}
                          <div>
                            <div className="flex items-center gap-3 mb-5">
                              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">{study.industry}</span>
                              <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                            <div className="space-y-5">
                              <div>
                                <div className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5">Challenge</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1.5">Solution</div>
                                <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                              </div>
                            </div>
                            <blockquote className="mt-6 pl-4 border-l-2 border-indigo-200 text-sm text-gray-600 italic">
                              &ldquo;{study.testimonial}&rdquo;
                            </blockquote>
                          </div>
                          {/* Right — results panel */}
                          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ background: '#f8faff' }}>
                            <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-800">Outcomes</span>
                              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <div className="p-5 grid grid-cols-2 gap-3">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                                  <CheckCircle className="h-4 w-4 text-green-500 mb-2" />
                                  <p className="text-sm font-semibold text-gray-800 leading-tight">{result}</p>
                                </div>
                              ))}
                            </div>
                            <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-xs text-gray-400">Delivered in</span>
                              <span className="text-sm font-bold text-indigo-600">{study.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setCurrentCase(prev => (prev - 1 + caseStudies.length) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentCase(i)}
                      className={`rounded-full transition-all duration-300 ${i === currentCase ? 'w-8 h-2 bg-indigo-600' : 'w-2 h-2 bg-gray-300 hover:bg-indigo-300'}`}
                      aria-label={`Case study ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentCase(prev => (prev + 1) % caseStudies.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:border-indigo-400 flex items-center justify-center text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 relative overflow-hidden" style={{background: '#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{background: 'radial-gradient(ellipse at top right, #7c3aed, transparent 60%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Client Voices</span>
                <span className="inline-block w-8 h-px bg-indigo-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What our clients say.</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-2xl p-8 border border-white/8" style={{background: 'rgba(255,255,255,0.04)'}}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                            <Users className="h-6 w-6 text-indigo-400" />
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-8 bg-indigo-400' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
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
                  <span className="inline-block w-8 h-px bg-indigo-600" />
                  <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">FAQ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Common questions.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Everything you need to know before starting your ServiceNow implementation.
                </p>
                <a href="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                  style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 24px rgba(79,70,229,0.3)'}}
                >
                  Ask us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 hover:border-indigo-200 rounded-xl overflow-hidden transition-colors">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 pr-4 text-sm">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-indigo-500 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
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
        <section className="py-24 relative overflow-hidden" style={{background: '#07071a'}}>
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 pointer-events-none" style={{background: 'radial-gradient(ellipse, #4f46e5, transparent 70%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-2 text-indigo-300 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Accepting new engagements &middot; 73-day go-live guaranteed
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ready to go live in 73 days?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us about your environment. We&apos;ll scope your implementation in 48 hours and show you exactly how we&apos;d approach it — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5"
                style={{background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 8px 32px rgba(79,70,229,0.4)'}}
              >
                Free Strategy Call <ArrowRight className="h-5 w-5" />
              </a>
              <a href="/company/case-studies-client-success"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:border-indigo-500 hover:text-white transition-all text-base"
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