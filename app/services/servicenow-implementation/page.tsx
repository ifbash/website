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
    company: "TechFlow Industries",
    story: "ifBash transformed our chaotic IT landscape into a streamlined powerhouse. Their ServiceNow consulting methodology saved us months of implementation time and delivered results from day one.",
    metric: "Implementation completed 23 days ahead of schedule",
    rating: 5,
    avatar: "/images/testimonials/david-miller.jpg"
  },
  {
    name: "Sarah Chen",
    title: "VP Operations",
    company: "GlobalHealth Network", 
    story: "The complexity was overwhelming until ifBash stepped in. They made our 23-location ServiceNow rollout feel effortless with their proven consulting approach and deep expertise.",
    metric: "Zero downtime during migration across 23 locations",
    rating: 5,
    avatar: "/images/testimonials/sarah-chen.jpg"
  },
  {
    name: "Michael Torres",
    title: "IT Director",
    company: "FinanceCore Ltd",
    story: "Security and compliance were our biggest concerns. ifBash's expertise in financial sector ServiceNow implementations gave us confidence throughout the entire consulting process.",
    metric: "Achieved SOX compliance in record time with zero findings",
    rating: 5,
    avatar: "/images/testimonials/michael-torres.jpg"
  },
  {
    name: "Jennifer Walsh",
    title: "Chief Digital Officer",
    company: "RetailMax Corp",
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
    activities: ["Current state analysis", "Process mapping", "Requirements gathering", "Risk assessment", "Stakeholder alignment"],
    deliverables: ["Technical architecture document", "Gap analysis report", "Implementation roadmap", "Risk mitigation plan"],
    icon: Search,
    color: "from-purple-500 to-indigo-500"
  },
  {
    phase: "Design & Configuration",
    duration: "Week 3-6",
    activities: ["ServiceNow instance setup", "Custom workflow design", "Integration architecture", "Security configuration", "User experience design"],
    deliverables: ["Configured development instance", "Technical specifications", "Security framework", "UI/UX mockups"],
    icon: Settings,
    color: "from-indigo-500 to-blue-500"
  },
  {
    phase: "Development & Testing",
    duration: "Week 7-10", 
    activities: ["Custom development", "Integration building", "Automated testing", "Performance optimization", "Security validation"],
    deliverables: ["Tested ServiceNow platform", "Integration validation", "Performance benchmarks", "Security audit report"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 11-12",
    activities: ["Production deployment", "Data migration", "User training", "Go-live support", "Performance monitoring"],
    deliverables: ["Live ServiceNow platform", "Trained user base", "Support documentation", "Optimization recommendations"],
    icon: Rocket,
    color: "from-cyan-500 to-teal-500"
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
    description: "Successfully delivered 200+ ServiceNow implementations with 100% success rate",
    stat: "200+ Implementations",
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
    answer: "We combine deep ServiceNow expertise with industry-specific knowledge and a proven implementation methodology. Our team of 50+ certified consultants has delivered 200+ successful implementations with a 100% success rate. We focus on rapid time-to-value and long-term platform optimization."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with ServiceNow Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-purple-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
                    ✓ 50+ Certified Experts
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-blue-700 transition-all duration-300">
                    ✓ 73-Day Average
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    ✓ 100% Success Rate
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 font-semibold">
                    Consulting & Implementation
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    That Delivers{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 font-semibold">
                      Real Results
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-purple-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Deploy production-ready ServiceNow in <span className="font-semibold text-pink-300">73 days average</span> with our proven consulting methodology. 200+ successful implementations with <span className="font-semibold text-cyan-300">100% success rate</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-600/20 hover:from-purple-600/30 hover:via-indigo-600/30 hover:to-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">73 Days</div>
                    <div className="text-xs sm:text-sm text-purple-100">Avg Implementation</div>
                  </div>
                  <div className="group bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-cyan-600/20 hover:from-indigo-600/30 hover:via-blue-600/30 hover:to-cyan-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">200+</div>
                    <div className="text-xs sm:text-sm text-indigo-100">Implementations</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-teal-600/20 hover:from-blue-600/30 hover:via-cyan-600/30 hover:to-teal-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">100%</div>
                    <div className="text-xs sm:text-sm text-blue-100">Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Start Your ServiceNow Journey
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                      Watch Implementation Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="ServiceNow Implementation Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-purple-600 to-indigo-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">73</div>
                      <div className="text-xs text-purple-200">Days Avg</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs text-indigo-200">Success</div>
                    </div>
                  </div>
                  
                  {/* Floating Integration Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Rocket className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Settings className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="service-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Why Choose ifBash
                </span>
                <br />
                <span className="text-gray-800">
                  for ServiceNow Consulting
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                We're not just implementers - we're ServiceNow experts who understand enterprise complexity and deliver solutions that drive real business transformation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{item.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Methodology Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="methodology">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  Our Proven ServiceNow
                </span>
                <br />
                <span className="text-white">
                  Implementation Methodology
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-purple-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                A structured 4-phase approach that ensures successful ServiceNow deployment with minimal risk and maximum value realization from day one.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {methodology.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-4 sm:mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 sm:mb-2">{phase.phase}</h3>
                          <div className="text-purple-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-purple-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-indigo-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl p-2 sm:p-8 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500`}>
                          <div className={`w-full h-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2 sm:mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-purple-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-purple-300 mt-1">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < methodology.length - 1 && (
                    <div className="flex justify-center mt-4 sm:mt-8 mb-4 sm:mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-indigo-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-16">
              <a href="/get-started"
                className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Implementation Today
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Real Success Stories
                </span>
                <br />
                <span className="text-gray-800">
                  From Our ServiceNow Implementations
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how we've helped organizations transform their IT service delivery with proven ServiceNow consulting and implementation expertise.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
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

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-l-4 border-indigo-500">
                          <Quote className="h-6 w-6 text-indigo-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} ServiceNow Implementation`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-indigo-600 to-purple-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-indigo-200">
                          <div className="text-lg font-bold text-indigo-600">{study.timeline}</div>
                          <div className="text-xs text-gray-600">Implementation</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                  What Our Clients Say
                </span>
                <br />
                <span className="text-white">
                  About Our ServiceNow Expertise
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-purple-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it - hear from the leaders who trusted us with their ServiceNow transformation.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-purple-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
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
                            <span className="text-purple-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-pink-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-pink-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About ServiceNow Consulting
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our ServiceNow consulting and implementation services.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-purple-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-4 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  Ready to Transform Your IT Services with ServiceNow?
                </h3>
                <p className="text-lg md:text-xl text-purple-100 mb-4 sm:mb-6 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
                  Join 200+ successful implementations. Get expert ServiceNow consulting that delivers real results in 73 days average.
                </p>
                <a href="/get-started"
                  className="group px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your ServiceNow Consultation
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
