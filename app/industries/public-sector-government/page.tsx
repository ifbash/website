'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scale,
  ChevronRight, 
  TestTube2,
  Stethoscope,
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
  RefreshCw,        // ✅ Fixed: Replace Sync with RefreshCw
  CloudDownload,    // ✅ Fixed: Replace CloudArrowDown with CloudDownload
  Server,           // ✅ Fixed: Replace ServerStack with Server
  Search, 
  ChevronDown, 
  Wind, 
  Sun, 
  Battery, 
  Fuel, 
  Power, 
  Plug
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "Metro City Government",
    industry: "Municipal Government",
    challenge: "Citizen service requests taking 12 days average response with 23% satisfaction rate across 450,000 residents",
    solution: "Digital government platform with citizen portal, automated workflows, and real-time service tracking",
    results: ["89% faster service response", "234% increase in citizen satisfaction", "$67M operational savings", "99% service completion"],
    timeline: "24 weeks implementation",
    image: "/images/case-studies/metro-city-gov.jpg",
    testimonial: "ifBash transformed how we serve our citizens. Response times dropped from 12 days to same-day service with unprecedented satisfaction levels."
  },
  {
    client: "State Department of Health",
    industry: "State Government",
    challenge: "Public health data management across 67 counties with compliance issues and emergency response delays costing lives",
    solution: "Integrated health information system with real-time monitoring, automated compliance, and emergency coordination",
    results: ["94% improvement in response times", "100% regulatory compliance", "$45M cost avoidance", "Zero compliance violations"],
    timeline: "32 weeks rollout",
    image: "/images/case-studies/state-health-dept.jpg",
    testimonial: "The public health platform ifBash built enables us to protect citizens more effectively with real-time data and automated emergency responses."
  },
  {
    client: "Federal IT Services",
    industry: "Federal Government",
    challenge: "Cybersecurity incident management across 23 agencies with average 67-hour response time creating national security risks",
    solution: "Unified cybersecurity operations center with AI-powered threat detection and automated incident response",
    results: ["91% faster threat response", "156% improvement in security posture", "$78M risk mitigation", "Zero successful attacks"],
    timeline: "28 weeks deployment",
    image: "/images/case-studies/federal-cyber-ops.jpg",
    testimonial: "Our cybersecurity transformation with ifBash created the most advanced government security operations center in the nation."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Margaret Wilson",
    title: "Chief Information Officer",
    company: "Metro City Government",
    story: "ifBash's digital government expertise revolutionized our citizen services. We went from bureaucratic delays to instant, transparent service delivery that citizens actually love using.",
    metric: "89% faster service response with 234% satisfaction increase",
    rating: 5,
    avatar: "/images/testimonials/margaret-wilson-gov.jpg"
  },
  {
    name: "Dr. James Rodriguez",
    title: "State Health Director",
    company: "State Department of Health", 
    story: "The public health platform ifBash created gives us capabilities that protect lives every day. Real-time data and automated responses have transformed our emergency preparedness.",
    metric: "94% response improvement with 100% regulatory compliance",
    rating: 5,
    avatar: "/images/testimonials/james-rodriguez-health.jpg"
  },
  {
    name: "Colonel Sarah Chen",
    title: "Cybersecurity Director",
    company: "Federal IT Services",
    story: "National security depends on rapid threat response. ifBash's cybersecurity platform reduced our response time from days to minutes, protecting critical infrastructure.",
    metric: "91% faster threat response with zero successful attacks",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen-cyber.jpg"
  },
  {
    name: "Robert Martinez",
    title: "Digital Services Manager",
    company: "County Administration",
    story: "The digital transformation ifBash led modernized our entire county operation. Citizens now access services 24/7 with complete transparency and satisfaction.",
    metric: "156% improvement in digital service adoption",
    rating: 5,
    avatar: "/images/testimonials/robert-martinez-county.jpg"
  }
];

// Government Solutions
const governmentSolutions = [
  {
    icon: Users,
    title: "Citizen Service Management",
    description: "Transform citizen experiences with digital service portals, automated workflows, and transparent service tracking",
    benefits: ["Digital service delivery", "Automated workflows", "Real-time tracking"],
    gradient: "from-slate-500 to-gray-500",
    useCases: ["Service requests", "Permit processing", "Citizen engagement"]
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance", 
    description: "Protect government infrastructure with advanced threat detection, incident response, and regulatory compliance management",
    benefits: ["Threat detection", "Incident response", "Compliance automation"],
    gradient: "from-gray-500 to-zinc-500",
    useCases: ["Security monitoring", "Compliance reporting", "Risk management"]
  },
  {
    icon: Building,
    title: "Public Health Management",
    description: "Manage public health initiatives with real-time monitoring, emergency response coordination, and data analytics",
    benefits: ["Health monitoring", "Emergency response", "Data analytics"],
    gradient: "from-zinc-500 to-stone-500",
    useCases: ["Disease tracking", "Emergency coordination", "Health reporting"]
  },
  {
    icon: Scale,
    title: "Case & Social Services Management",
    description: "Streamline social services delivery with case management, eligibility tracking, and outcome measurement",
    benefits: ["Case management", "Eligibility tracking", "Outcome measurement"],
    gradient: "from-stone-500 to-neutral-500",
    useCases: ["Case tracking", "Benefit administration", "Service coordination"]
  },
  {
    icon: BookOpen,
    title: "Regulatory & Licensing Services",
    description: "Automate regulatory processes with digital licensing, compliance tracking, and automated approvals",
    benefits: ["Digital licensing", "Compliance tracking", "Automated approvals"],
    gradient: "from-neutral-500 to-slate-600",
    useCases: ["License processing", "Regulatory compliance", "Permit management"]
  },
  {
    icon: Network,
    title: "Emergency Management Operations",
    description: "Coordinate emergency response with real-time communication, resource management, and incident tracking",
    benefits: ["Real-time coordination", "Resource management", "Incident tracking"],
    gradient: "from-slate-600 to-gray-600",
    useCases: ["Emergency response", "Resource allocation", "Crisis communication"]
  }
];

// Government Metrics
const governmentMetrics = [
  {
    title: "Citizen Satisfaction Rate",
    description: "Average improvement in citizen satisfaction across government implementations",
    stat: "234% Better",
    icon: Heart
  },
  {
    title: "Service Response Time",
    description: "Average improvement in government service delivery and response times",
    stat: "89% Faster",
    icon: Timer
  },
  {
    title: "Operational Cost Savings", 
    description: "Average cost reduction achieved through government process automation",
    stat: "$67M Savings",
    icon: DollarSign
  },
  {
    title: "Compliance Achievement",
    description: "Average improvement in regulatory compliance and audit performance",
    stat: "100% Compliant",
    icon: CheckCircle
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Government Assessment & Planning",
    duration: "Week 1-4",
    activities: ["Citizen service analysis", "Regulatory requirements review", "Security assessment", "Compliance mapping", "Stakeholder engagement"],
    deliverables: ["Digital government strategy", "Compliance framework", "Security architecture", "Implementation roadmap"],
    icon: Search,
    color: "from-slate-500 to-gray-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-16",
    activities: ["ServiceNow government setup", "Citizen portal development", "Workflow automation", "System integration", "Security implementation"],
    deliverables: ["Government platform", "Citizen portal", "Automated workflows", "Integrated systems"],
    icon: Settings,
    color: "from-gray-500 to-zinc-500"
  },
  {
    phase: "Testing & Compliance Validation",
    duration: "Week 17-22",
    activities: ["Security testing", "Compliance validation", "User acceptance testing", "Performance optimization", "Training delivery"],
    deliverables: ["Validated platform", "Compliance certification", "Performance reports", "Training materials"],
    icon: CheckCircle,
    color: "from-zinc-500 to-stone-500"
  },
  {
    phase: "Deployment & Citizen Onboarding",
    duration: "Week 23-26",
    activities: ["Production deployment", "Citizen onboarding", "Staff training", "Performance monitoring", "Continuous improvement"],
    deliverables: ["Live government platform", "Trained staff", "Citizen access", "Monitoring systems"],
    icon: Rocket,
    color: "from-stone-500 to-neutral-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow improve citizen service delivery?",
    answer: "ServiceNow transforms citizen services through digital portals, automated workflows, real-time tracking, and self-service capabilities. Citizens can access services 24/7, track request status, and receive faster responses while government staff focus on complex cases rather than routine processing."
  },
  {
    question: "What cybersecurity capabilities does ServiceNow provide for government?",
    answer: "ServiceNow offers comprehensive government cybersecurity including threat detection, incident response automation, vulnerability management, compliance reporting, and security orchestration. Our platform helps government agencies protect critical infrastructure while maintaining operational efficiency."
  },
  {
    question: "How can ServiceNow support public health management?",
    answer: "ServiceNow enables public health agencies to track disease outbreaks, coordinate emergency responses, manage health data, automate reporting, and ensure compliance with health regulations. Our platform provides real-time visibility and automated workflows for effective public health protection."
  },
  {
    question: "What compliance and regulatory features are available?",
    answer: "ServiceNow provides comprehensive compliance management including automated reporting, audit trails, regulatory workflow automation, compliance monitoring, and documentation management. Our platform ensures government agencies meet federal, state, and local regulatory requirements."
  },
  {
    question: "How does ServiceNow handle government data security and privacy?",
    answer: "ServiceNow meets stringent government security requirements including FedRAMP authorization, FISMA compliance, encryption standards, access controls, and audit logging. Our platform is designed to protect sensitive government data while enabling operational efficiency."
  },
  {
    question: "What ROI can government agencies expect from ServiceNow?",
    answer: "Government agencies typically see 40-70% improvements in service delivery efficiency, 50-80% increases in citizen satisfaction, and 25-45% reductions in operational costs. Most agencies achieve positive ROI within 18-24 months through improved efficiency and citizen engagement."
  },
  {
    question: "How does ServiceNow integrate with existing government systems?",
    answer: "ServiceNow seamlessly integrates with government ERP systems, legacy databases, citizen management systems, and third-party applications. Our extensive API capabilities and government-specific connectors ensure smooth integration with existing technology infrastructure."
  },
  {
    question: "What training and support is provided for government implementations?",
    answer: "We provide specialized government training including compliance procedures, security protocols, citizen service best practices, and system administration. Our support includes 24/7 monitoring, security updates, compliance guidance, and ongoing optimization services designed for government environments."
  }
];

export default function PublicSectorGovernment() {
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
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-slate-600 to-gray-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Government Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with Gov Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-slate-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Government Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gray-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-zinc-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Building Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Building className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-slate-500/90 to-gray-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-slate-600 hover:to-gray-700 transition-all duration-300">
                    ✓ 450K Citizens Served
                  </Badge>
                  <Badge className="bg-gradient-to-r from-gray-500/90 to-zinc-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-gray-600 hover:to-zinc-700 transition-all duration-300">
                    ✓ 234% Satisfaction
                  </Badge>
                  <Badge className="bg-gradient-to-r from-zinc-500/90 to-stone-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-zinc-600 hover:to-stone-600 transition-all duration-300">
                    ✓ $67M Savings
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 font-semibold">
                    Public Sector & Government
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    Digital Government{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-stone-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed">
                  Transform government operations with <span className="font-semibold text-gray-300">digital citizen services</span>, intelligent workflows, and secure compliance management. Serve <span className="font-semibold text-zinc-300">450K+ citizens</span> with <span className="font-semibold text-stone-300">$67M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                  <div className="group bg-gradient-to-br from-slate-600/20 via-gray-600/20 to-zinc-600/20 hover:from-slate-600/30 hover:via-gray-600/30 hover:to-zinc-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400">450K</div>
                    <div className="text-xs sm:text-sm text-slate-100">Citizens</div>
                  </div>
                  <div className="group bg-gradient-to-br from-gray-600/20 via-zinc-600/20 to-stone-600/20 hover:from-gray-600/30 hover:via-zinc-600/30 hover:to-stone-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-stone-400">234%</div>
                    <div className="text-xs sm:text-sm text-gray-100">Satisfaction</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-zinc-600/20 via-stone-600/20 to-neutral-600/20 hover:from-zinc-600/30 hover:via-stone-600/30 hover:to-neutral-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-stone-400 to-neutral-400">$67M</div>
                    <div className="text-xs sm:text-sm text-zinc-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 hover:from-slate-700 hover:via-gray-700 hover:to-zinc-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(71, 85, 105, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-slate-400/20 via-gray-400/20 to-zinc-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Government Services
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-zinc-400 group-hover:text-zinc-300" />
                      Watch Government Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-slate-500/15 to-gray-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="Digital Government Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-slate-600 to-gray-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">450K</div>
                      <div className="text-xs text-slate-200">Citizens</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">234%</div>
                      <div className="text-xs text-gray-200">Satisfaction</div>
                    </div>
                  </div>
                  
                  {/* Floating Government Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Building className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-gray-600 to-zinc-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-slate-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="solutions-overview">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600">
                  Government Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Serve Citizens Better
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of government operations with intelligent solutions designed for the digital government era.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {governmentSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Government Metrics Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {governmentMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-slate-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-slate-900 to-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="implementation">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400">
                  Our Government Implementation
                </span>
                <br />
                <span className="text-white">
                  Approach
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
                A specialized 4-phase methodology designed specifically for government requirements and citizen service transformation.
              </p>
            </div>

            <div className="space-y-12">
              {implementationApproach.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                          <div className="text-slate-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-slate-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-slate-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-slate-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-400/20 hover:border-slate-400/40 transition-all duration-500 transform group-hover:scale-105`}>
                          <div className={`w-full h-full bg-gradient-to-br from-slate-600/30 to-gray-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-400 mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-slate-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-slate-300 mt-2">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < implementationApproach.length - 1 && (
                    <div className="flex justify-center mt-8 mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-gray-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button 
                onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 hover:from-slate-700 hover:via-gray-700 hover:to-zinc-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(71, 85, 105, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-slate-400/20 via-gray-400/20 to-zinc-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Government Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-zinc-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-zinc-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-slate-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="case-studies">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-slate-600 to-gray-600">
                  Government Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how government leaders have transformed their operations with ServiceNow solutions that deliver measurable results.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-zinc-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <Badge className="bg-gradient-to-r from-zinc-500 to-slate-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-red-600 mb-2">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-green-600 mb-3">Results</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-zinc-50 to-slate-50 rounded-xl p-4 border-l-4 border-zinc-500">
                          <Quote className="h-6 w-6 text-zinc-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-zinc-100 to-slate-100 rounded-2xl p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Government Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-zinc-600 to-slate-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-zinc-200">
                          <div className="text-lg font-bold text-zinc-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-zinc-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-gray-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-zinc-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="testimonials">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-400">
                  What Government Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-100 max-w-3xl mx-auto leading-relaxed">
                Hear from government executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-zinc-500 rounded-full flex items-center justify-center mr-6">
                            <Building className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-zinc-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-gray-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-6">
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
                            <span className="text-zinc-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-gray-300 font-semibold">{story.metric}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {clientStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gray-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-slate-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-slate-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gray-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="faq">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Government Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for the public sector and government.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
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
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Government Operations?
                </h3>
                <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
                  Join government leaders serving 450K+ citizens. Get digital solutions that deliver 234% satisfaction and $67M savings.
                </p>
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group px-8 py-4 text-lg font-semibold bg-white text-slate-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Government Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
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
