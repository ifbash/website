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
    challenge: "Legacy system fragmentation across 47 applications causing 73% slower incident resolution",
    solution: "Unified ServiceNow ITSM platform with automated workflows and custom integration hub",
    results: ["73% faster incident resolution", "89% reduction in manual processes", "$2.3M annual cost savings", "99.7% system uptime achieved"],
    timeline: "12 weeks",
    image: "/images/case-studies/techflow-manufacturing.jpg",
    testimonial: "ifBash transformed our chaotic IT landscape into a streamlined powerhouse. Their expertise saved us months of implementation time."
  },
  {
    client: "GlobalHealth Network",
    industry: "Healthcare",
    challenge: "Complex multi-location IT service management across 23 healthcare facilities with compliance requirements",
    solution: "Scalable ServiceNow ITSM with automated compliance workflows and real-time monitoring",
    results: ["95% system uptime across all facilities", "67% improved service delivery", "100% HIPAA compliance", "58% reduction in IT tickets"],
    timeline: "16 weeks",
    image: "/images/case-studies/globalhealth-healthcare.jpg",
    testimonial: "The 23-location rollout felt effortless with ifBash's proven methodology. Zero downtime during our critical migration."
  },
  {
    client: "FinanceCore Ltd",
    industry: "Financial Services",
    challenge: "Regulatory compliance requirements and secure IT service management with audit trails",
    solution: "Enterprise-grade ServiceNow ITSM with advanced security controls and compliance automation",
    results: ["100% SOX audit compliance", "85% faster incident reporting", "Zero security breaches", "91% user satisfaction score"],
    timeline: "14 weeks",
    image: "/images/case-studies/financecore-financial.jpg",
    testimonial: "Security was our biggest concern. ifBash's financial sector expertise gave us confidence throughout the entire process."
  }
];

// Client Stories
const clientStories = [
  {
    name: "David Miller",
    title: "CTO",
    company: "",
    story: "ifBash transformed our chaotic IT landscape into a streamlined powerhouse. Their ServiceNow consulting methodology saved us months of implementation time and delivered results from day one.",
    metric: "Implementation completed 23 days ahead of schedule",
    rating: 5,
    avatar: "/images/testimonials/david-miller.jpg"
  },
  {
    name: "Sarah Chen",
    title: "VP Operations",
    company: "", 
    story: "The complexity was overwhelming until ifBash stepped in. They made our 23-location ServiceNow rollout feel effortless with their proven consulting approach and deep expertise.",
    metric: "Zero downtime during migration across 23 locations",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen.jpg"
  },
  {
    name: "Michael Torres",
    title: "IT Director",
    company: "",
    story: "Security and compliance were our biggest concerns. ifBash's expertise in financial sector ServiceNow implementations gave us confidence throughout the entire consulting process.",
    metric: "Achieved SOX compliance in record time with zero findings",
    rating: 5,
    avatar: "/images/testimonials/michael-torres.jpg"
  },
  {
    name: "Jennifer Walsh",
    title: "Chief Digital Officer",
    company: "",
    story: "ifBash didn't just implement ServiceNow - they transformed how we think about IT service delivery. Their consulting expertise delivered measurable business value from week one.",
    metric: "47% improvement in customer service delivery",
    rating: 5,
    avatar: "/images/testimonials/jennifer-walsh.jpg"
  }
];

// Implementation Methodology
const methodology = [
  {
    phase: "Discovery & Assessment",
    duration: "Week 1-2",
    features: [
      "Current state analysis",
      "Process mapping",
      "Requirements gathering",
      "Risk assessment",
      "Stakeholder alignment"
    ],
    icon: "🔍",
    color: "from-purple-600 via-indigo-500 to-blue-500",
    glowColor: "from-purple-600/20 to-blue-500/20"
  },
  {
    phase: "Design & Configuration",
    duration: "Week 3-6",
    features: [
      "ServiceNow instance setup",
      "Custom workflow design",
      "Integration architecture",
      "Security configuration",
      "User experience design"
    ],
    icon: "💡",
    color: "from-indigo-600 via-blue-500 to-purple-500",
    glowColor: "from-indigo-600/20 to-blue-500/20"
  },
  {
    phase: "Development & Testing",
    duration: "Week 7-10",
    features: [
      "Custom development",
      "Integration building",
      "Automated testing",
      "Performance optimization",
      "Security validation"
    ],
    icon: "⚙️",
    color: "from-blue-600 via-purple-500 to-indigo-500",
    glowColor: "from-blue-600/20 to-purple-500/20"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 11-12",
    features: [
      "Production deployment",
      "Data migration",
      "User training",
      "Go-live support",
      "Performance monitoring"
    ],
    icon: "🚀",
    color: "from-purple-500 via-indigo-500 to-blue-500",
    glowColor: "from-purple-500/20 to-indigo-500/20"
  }
];

// Service Features
const serviceFeatures = [
  {
    icon: Rocket,
    title: "Rapid Implementation",
    description: "Deploy production-ready ServiceNow in 73 days average with our proven accelerators",
    benefits: ["Pre-built templates", "Automated testing", "Parallel workstreams"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Network,
    title: "Seamless Integration",
    description: "Connect ServiceNow with existing systems without disruption using our integration expertise",
    benefits: ["300+ connectors", "Real-time sync", "API-first approach"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Deploy with confidence using enterprise-grade security and compliance frameworks", 
    benefits: ["SOC 2 compliance", "Advanced encryption", "Audit trails"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Ensure successful adoption with comprehensive training and change management support",
    benefits: ["Role-based training", "User champions", "Adoption metrics"],
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Maximize ROI with continuous performance monitoring and optimization recommendations",
    benefits: ["KPI dashboards", "Regular reviews", "Best practice updates"],
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description: "24/7 expert support with proactive monitoring and continuous improvement programs",
    benefits: ["24/7 helpdesk", "Health checks", "Platform updates"],
    gradient: "from-green-500 to-emerald-500"
  }
];

// Why Choose ifBash
const whyChooseUs = [
  {
    title: "Certified ServiceNow Experts",
    description: "Our team holds multiple ServiceNow certifications and has deep expertise across all modules",
    stat: "50+ Certified Consultants",
    icon: Award
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 1,500+ ServiceNow implementations with 100% success rate",
    stat: "1,500+ Implementations",
    icon: Target
  },
  {
    title: "Industry Expertise", 
    description: "Deep domain knowledge across healthcare, finance, manufacturing, and technology sectors",
    stat: "15+ Industries Served",
    icon: Building
  },
  {
    title: "Rapid Time to Value",
    description: "Our accelerated methodology delivers business value in weeks, not months",
    stat: "73 Days Average",
    icon: Clock
  }
];

// FAQ Data
const faqs = [
  {
    question: "How long does a typical ServiceNow implementation take with ifBash?",
    answer: "Our proven methodology delivers most ServiceNow implementations in 12-16 weeks, compared to the industry average of 6-9 months. The exact timeline depends on complexity, scope, and integration requirements. We use pre-built accelerators and proven templates to reduce implementation time by 60%."
  },
  {
    question: "What makes ifBash different from other ServiceNow consulting firms?",
    answer: "We combine deep ServiceNow expertise with industry-specific knowledge and a proven implementation methodology. Our team of 50+ certified consultants has delivered 1,500+ successful implementations with a 100% success rate. We focus on rapid time-to-value and long-term platform optimization."
  },
  {
    question: "Can you integrate ServiceNow with our existing enterprise systems?",
    answer: "Absolutely. We specialize in complex integrations with ERP systems (SAP, Oracle), CRM platforms (Salesforce, Microsoft Dynamics), HR systems (Workday, SuccessFactors), and custom applications. Our integration hub approach ensures seamless data flow and maintains data integrity across all platforms."
  },
  {
    question: "What support do you provide after the ServiceNow implementation?",
    answer: "We offer comprehensive post-implementation support including 24/7 helpdesk, regular platform health checks, performance monitoring, user training, and continuous optimization. Our managed services team ensures your ServiceNow platform evolves with your business needs."
  },
  {
    question: "How do you ensure the ServiceNow implementation meets our security requirements?",
    answer: "Security is built into every phase of our implementation. We follow enterprise-grade security protocols including data encryption, role-based access controls, comprehensive audit trails, and compliance with frameworks like SOC 2, HIPAA, and SOX. All our consultants are security-certified."
  },
  {
    question: "What training is included in your ServiceNow consulting services?",
    answer: "Our training program includes administrator certification, end-user workshops, role-based training sessions, documentation, video tutorials, and ongoing support. We also establish user champions within your organization to drive adoption and provide peer-to-peer support."
  },
  {
    question: "Can you help with ServiceNow platform optimization and upgrades?",
    answer: "Yes, we provide ongoing optimization services including performance tuning, feature enhancement, module additions, platform upgrades, and best practice implementation. Our optimization services ensure you're maximizing your ServiceNow investment and staying current with new capabilities."
  },
  {
    question: "What industries do you serve for ServiceNow implementations?",
    answer: "We serve multiple industries including Healthcare, Financial Services, Manufacturing, Technology, Government, Education, Retail, and Telecommunications. Our consultants have deep domain expertise and understand industry-specific compliance requirements and business processes."
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
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-8 h-px bg-indigo-600" />
              <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">ServiceNow Implementation</span>
            </div>
            <div className="max-w-4xl mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Go-live in{' '}
                <span className="text-indigo-600">73 days.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
                A structured four-phase methodology. 1,500+ successful implementations. 100% success rate. Every engagement follows a battle-tested playbook — precision, not guesswork.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12">
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

            {/* 4-phase timeline */}
            <div className="relative">
              {/* Animated connector line */}
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 z-0 bg-indigo-100 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-200 rounded-full"
                  style={{ width: phasesVisible ? '100%' : '0%', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)', transitionDelay: '200ms' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
                {methodology.map((step, index) => (
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
                      className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 font-bold text-xl mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm"
                      style={{
                        transform: phasesVisible ? 'scale(1)' : 'scale(0.65)',
                        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                        transitionDelay: `${index * 150 + 80}ms`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="inline-block text-xs font-medium text-indigo-500 bg-indigo-50 rounded-full px-3 py-1 mb-3">{step.duration}</span>
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
                          <CheckCircle className="h-3.5 w-3.5 text-indigo-400 mt-0.5 shrink-0" />
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
                  { value: '73 days', label: 'Average go-live' },
                  { value: '1,500+', label: 'Implementations' },
                  { value: '100%', label: 'Project success rate' },
                  { value: '50+', label: 'Certified experts' },
                ].map((stat, i) => (
                  <div key={i} className="py-6 px-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE FEATURES ── */}
        <section className="py-20 relative overflow-hidden" style={{background: '#07071a'}}>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
          <div className="absolute top-0 left-0 w-[600px] h-[500px] opacity-10" style={{background: 'radial-gradient(ellipse at top left, #4f46e5, transparent 65%)'}} />
          <div className="w-full px-4 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px bg-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Why ifBash</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
                Built for enterprise.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Delivered on time.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="group rounded-2xl p-6 border border-white/8 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5" style={{background: 'rgba(255,255,255,0.04)'}}>
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 group-hover:bg-indigo-500/25 flex items-center justify-center mb-4 transition-colors shrink-0">
                    <feature.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                  <div className="space-y-1.5">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-12 border-t border-white/8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group rounded-2xl p-6 border border-white/8 hover:border-indigo-500/30 transition-all" style={{background: 'rgba(255,255,255,0.03)'}}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 group-hover:bg-indigo-500/25 flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-400 mb-1">{item.stat}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
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