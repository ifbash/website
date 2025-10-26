'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
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
  ChevronDown,
  Compass,
  Map,
  Route,
  Navigation,
  TrendingDown,
  LineChart,
  Sparkles,
  Wand2,
  Infinity,
  CircuitBoard,
  BrainCircuit,
  Smile,
  ThumbsUp,
  UserPlus,
  Headphones,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
  {
    client: "RetailMax Enterprise",
    industry: "Retail",
    challenge: "Fragmented customer touchpoints causing 67% drop in satisfaction and $23M revenue loss",
    solution: "Unified ServiceNow CRM with AI-powered customer journey orchestration and employee self-service portals",
    results: ["89% increase in customer satisfaction", "234% improvement in employee engagement", "$31M revenue growth", "2.3 min average response time"],
    timeline: "14 weeks transformation",
    image: "/images/case-studies/retailmax-retail.jpg",
    testimonial: "ifBash created a seamless experience ecosystem. Our customers and employees now have unified, intelligent interactions across all touchpoints."
  },
  {
    client: "TechServe Solutions",
    industry: "Technology Services",
    challenge: "Employee service requests taking 5.7 days average with 34% satisfaction rate affecting productivity",
    solution: "AI-driven employee experience platform with intelligent service delivery and predictive support",
    results: ["91% employee satisfaction score", "78% faster service resolution", "156% productivity improvement", "Zero escalated complaints"],
    timeline: "12 weeks deployment",
    image: "/images/case-studies/techserve-technology.jpg",
    testimonial: "Our employees now get instant, intelligent support. The AI understands context and delivers personalized experiences that actually work."
  },
  {
    client: "HealthFirst Network",
    industry: "Healthcare",
    challenge: "Patient experience fragmentation across 45 locations with compliance and coordination issues",
    solution: "Integrated customer and employee experience platform with healthcare-specific workflows and compliance automation",
    results: ["96% patient satisfaction", "83% staff engagement improvement", "100% compliance adherence", "47% operational efficiency gain"],
    timeline: "18 weeks rollout",
    image: "/images/case-studies/healthfirst-healthcare.jpg",
    testimonial: "The unified platform transformed both patient care and staff experience. Everything flows seamlessly with intelligent automation handling the complexity."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Jennifer Walsh",
    title: "Chief Customer Officer",
    company: "RetailMax Enterprise",
    story: "ifBash didn't just implement a CRM - they created an experience ecosystem. Our customers and employees now have unified, intelligent interactions that drive real business value.",
    metric: "234% improvement in employee engagement with 89% customer satisfaction",
    rating: 5,
    avatar: "/images/testimonials/jennifer-walsh.jpg"
  },
  {
    name: "Marcus Johnson",
    title: "Head of Employee Experience",
    company: "TechServe Solutions", 
    story: "The AI-powered employee experience platform is incredible. Our staff gets instant, context-aware support that feels almost human. Productivity has skyrocketed.",
    metric: "78% faster service resolution with 91% employee satisfaction",
    rating: 5,
    avatar: "/images/testimonials/marcus-johnson.jpg"
  },
  {
    name: "Dr. Lisa Chen",
    title: "Chief Experience Officer",
    company: "HealthFirst Network",
    story: "The unified platform seamlessly connects patient care with staff experience. Our 45 locations now operate as one cohesive, intelligent healthcare ecosystem.",
    metric: "96% patient satisfaction with 83% staff engagement improvement",
    rating: 5,
    avatar: "/images/testimonials/lisa-chen-health.jpg"
  },
  {
    name: "Robert Martinez",
    title: "VP Customer Success",
    company: "ServiceFlow Inc",
    story: "The intelligence built into every customer and employee interaction is remarkable. Our CRM doesn't just track relationships - it actively enhances them.",
    metric: "312% increase in customer lifetime value",
    rating: 5,
    avatar: "/images/testimonials/robert-martinez.jpg"
  }
];

// CRM Implementation Methodology
const crmMethodology = [
  {
    phase: "Experience Strategy & Design",
    duration: "Week 1-3",
    features: [
      "Journey mapping",
      "Persona development", 
      "Touchpoint analysis",
      "Experience blueprint",
      "KPI definition"
    ],
    icon: "🎯",
    color: "from-rose-600 via-pink-500 to-purple-500",
    glowColor: "from-rose-600/20 to-purple-500/20"
  },
  {
    phase: "Platform Configuration",
    duration: "Week 4-8",
    features: [
      "CRM setup",
      "Workflow automation",
      "System integration",
      "AI agent configuration",
      "Portal development"
    ],
    icon: "⚙️",
    color: "from-pink-600 via-purple-500 to-rose-500",
    glowColor: "from-pink-600/20 to-rose-500/20"
  },
  {
    phase: "Intelligence & Automation",
    duration: "Week 9-12",
    features: [
      "AI model training",
      "Predictive analytics",
      "Chatbot development",
      "Process automation",
      "Personalization engine"
    ],
    icon: "🤖",
    color: "from-purple-600 via-rose-500 to-pink-500",
    glowColor: "from-purple-600/20 to-pink-500/20"
  },
  {
    phase: "Launch & Optimization",
    duration: "Week 13-16",
    features: [
      "Phased rollout",
      "User training",
      "Performance monitoring",
      "Experience optimization",
      "Continuous improvement"
    ],
    icon: "🚀",
    color: "from-rose-600 via-pink-500 to-purple-500",
    glowColor: "from-rose-600/20 to-purple-500/20"
  }
];

// CRM Service Features
const crmServices = [
  {
    icon: Heart,
    title: "Customer Experience Orchestration",
    description: "Create seamless, personalized customer journeys across all touchpoints with intelligent orchestration",
    benefits: ["360° customer view", "Journey automation", "Omnichannel consistency"],
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Employee Experience Platform",
    description: "Empower employees with intelligent self-service, instant support, and streamlined workflows",
    benefits: ["Self-service portals", "AI-powered support", "Workflow automation"],
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Intelligent Customer Service",
    description: "Deploy AI agents that understand context, resolve issues, and escalate intelligently to human agents",
    benefits: ["AI agent support", "Contextual responses", "Smart escalation"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: BarChart3,
    title: "Experience Analytics & Insights",
    description: "Gain deep insights into customer and employee experiences with real-time analytics and predictions",
    benefits: ["Real-time dashboards", "Predictive insights", "Experience scoring"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Process Automation & Workflows",
    description: "Automate complex business processes that span customer service, sales, and employee operations",
    benefits: ["End-to-end automation", "Intelligent routing", "Exception handling"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Ensure data privacy, compliance, and security across all customer and employee interactions",
    benefits: ["Data protection", "Compliance automation", "Security controls"],
    gradient: "from-cyan-500 to-teal-500"
  }
];

// CRM Capabilities
const crmCapabilities = [
  {
    title: "Customer Satisfaction Score",
    description: "Average improvement in customer satisfaction across all implementations",
    stat: "89% Satisfaction",
    icon: Smile
  },
  {
    title: "Employee Engagement Rate",
    description: "Average increase in employee engagement and productivity metrics",
    stat: "234% Improvement",
    icon: ThumbsUp
  },
  {
    title: "Response Time Reduction", 
    description: "Average reduction in customer service response times with AI automation",
    stat: "78% Faster",
    icon: Zap
  },
  {
    title: "Experience ROI Timeline",
    description: "Average time to achieve positive ROI from experience platform investments",
    stat: "16 Weeks ROI",
    icon: TrendingUp
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow CRM differ from traditional CRM systems?",
    answer: "ServiceNow CRM is built on a unified platform that connects customer-facing processes with back-office operations. Unlike traditional CRMs that focus on data storage, ServiceNow CRM is a system of action with AI agents that autonomously handle tasks, orchestrate workflows, and provide real-time integration across your entire technology stack."
  },
  {
    question: "Can the platform handle both customer and employee experiences simultaneously?",
    answer: "Yes, our unified platform seamlessly manages both customer and employee experiences on the same architecture. This allows for consistent processes, shared data insights, and coordinated workflows that benefit both external customer service and internal employee support."
  },
  {
    question: "What kind of AI capabilities are included in the CRM solution?",
    answer: "Our CRM includes AI agents for customer service automation, predictive analytics for experience optimization, intelligent routing for service requests, natural language processing for chatbots, and machine learning for personalization. These AI capabilities work autonomously while seamlessly escalating to humans when needed."
  },
  {
    question: "How quickly can we see improvements in customer and employee satisfaction?",
    answer: "Most clients see initial improvements within 4-6 weeks of deployment, with significant gains by week 12. We implement in phases, so you'll experience value incrementally as each component goes live, rather than waiting for full implementation completion."
  },
  {
    question: "What integrations are possible with existing systems?",
    answer: "ServiceNow CRM integrates with virtually any system including ERP, HR platforms, marketing automation, billing systems, and communication tools. Our platform has 300+ pre-built connectors and can create custom integrations for unique requirements."
  },
  {
    question: "How do you measure the success of experience implementations?",
    answer: "We track comprehensive metrics including customer satisfaction scores, Net Promoter Score, employee engagement rates, response times, resolution rates, and business impact metrics like revenue growth and cost reduction. Our analytics provide real-time dashboards and predictive insights."
  },
  {
    question: "What training and support is provided for the CRM platform?",
    answer: "We provide comprehensive training including admin certification, end-user workshops, AI agent management, experience design principles, and ongoing platform optimization. Our support includes 24/7 helpdesk, regular health checks, and continuous improvement recommendations."
  },
  {
    question: "Can the platform scale as our business grows?",
    answer: "Absolutely. ServiceNow's cloud-native architecture scales automatically with your business growth. The platform handles increased users, transactions, and complexity seamlessly, while our AI agents become more intelligent with more data and interactions."
  }
];

export default function CRMCustomerEmployeeExperience() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-rose-600 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with CRM Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with CRM Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-rose-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-rose-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Experience Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Experience Heart Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Heart className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-rose-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                    ✓ 89% Satisfaction
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 234% Engagement
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-indigo-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
                    ✓ 78% Faster
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  CRM -{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 font-semibold">
                    Customer & Employee
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Experience{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-rose-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform experiences in <span className="font-semibold text-pink-300">14-16 weeks</span> with AI-powered CRM that unifies customer and employee journeys. <span className="font-semibold text-purple-300">89% satisfaction rates</span> with <span className="font-semibold text-indigo-300">234% engagement improvement</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-rose-600/20 via-pink-600/20 to-purple-600/20 hover:from-rose-600/30 hover:via-pink-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-rose-400/20 hover:border-rose-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">89%</div>
                    <div className="text-xs sm:text-sm text-rose-100">Satisfaction</div>
                  </div>
                  <div className="group bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 hover:from-pink-600/30 hover:via-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">234%</div>
                    <div className="text-xs sm:text-sm text-pink-100">Engagement</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-600/20 hover:from-purple-600/30 hover:via-indigo-600/30 hover:to-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">78%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Faster</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(244, 63, 94, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Customer Experience
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Watch CRM Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-rose-500/15 to-pink-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="CRM Experience Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-rose-600 to-pink-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">89%</div>
                      <div className="text-xs text-rose-200">Satisfaction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">234%</div>
                      <div className="text-xs text-pink-200">Engagement</div>
                    </div>
                  </div>
                  
                  {/* Floating Experience Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-rose-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="service-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                  Why Choose ifBash
                </span>
                <br />
                <span className="text-gray-800">
                  for Experience Excellence
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                We don't just deploy CRM - we create intelligent experience ecosystems that unify customer and employee journeys for exponential business impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {crmServices.map((service, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100 hover:border-rose-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CRM Capabilities Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {crmCapabilities.map((capability, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-rose-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-rose-600 mb-2">{capability.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Methodology Section */}
        <section className="py-20 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-rose-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Experience Pattern Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-400 rounded-full animate-float opacity-60" />
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float delay-150 opacity-40" />
              <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
            </div>
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
                  Our CRM Experience
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                A proven four-phase approach that ensures successful CRM implementation with exceptional customer experiences.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {crmMethodology.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${step.glowColor} rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                    <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
                      style={{
                        boxShadow: "0 0 40px rgba(244, 63, 94, 0.1)"
                      }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl opacity-50" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                            {step.icon}
                          </div>
                          <div className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
                          {step.phase}
                        </h3>
                        <ul className="space-y-3 mt-auto">
                          {step.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                                <CheckCircle className="h-3 w-3 text-white group-hover/item:text-white/90 transition-colors duration-200" />
                              </div>
                              <span className="text-sm text-white/80 group-hover:item:text-white transition-colors duration-200">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(244, 63, 94, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Transform Your Customer Experience
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-rose-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600">
                  Experience Transformation
                </span>
                <br />
                <span className="text-gray-800">
                  Success Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how our CRM solutions have revolutionized customer and employee experiences with measurable business impact.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-red-600">Experience Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-blue-600">CRM Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-600">Experience Impact</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border-l-4 border-pink-500">
                          <Quote className="h-6 w-6 text-pink-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-2 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} CRM Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-pink-600 to-rose-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-pink-200">
                          <div className="text-lg font-bold text-pink-600">{study.timeline.split(' ')[0]}</div>
                          <div className="text-xs text-gray-600">Weeks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-pink-900 via-rose-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-pink-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-rose-400 to-pink-400">
                  What Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our CRM Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-rose-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from the experience champions who trusted us with their customer and employee transformation journeys.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Heart className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-rose-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-purple-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4 sm:mb-6">
                            {story.story}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-3">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                            </div>
                            <span className="text-rose-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-purple-300 font-semibold">{story.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-purple-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About CRM Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our customer and employee experience CRM solutions.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-rose-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-rose-600 transition-transform duration-200 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFaq === index && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-8 sm:mt-16">
              <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Customer & Employee Experience?
                </h3>
                <p className="text-lg md:text-xl text-rose-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
                  Join enterprises achieving 89% satisfaction rates. Get intelligent CRM that unifies experiences in 14-16 weeks.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-lg font-semibold bg-white text-rose-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your CRM Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 0.75s;
        }

        .delay-150 {
          animation-delay: 1.5s;
        }

        .delay-300 {
          animation-delay: 3s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </>
  );
}
