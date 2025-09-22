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
  Sync,
  CloudArrowDown,
  ServerStack,
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
  MessageSquare,
  LifeBuoy,
  MonitorSpeaker,
  AlertTriangle,
  CheckCircle2,
  Code,
  Smartphone,
  Tablet,
  Puzzle
} from 'lucide-react';
import Image from 'next/image';

// Case Studies Data
const caseStudies = [
  {
    client: "TechFlow Manufacturing",
    industry: "Manufacturing",
    challenge: "Complex asset tracking across 67 facilities with no unified system costing $12.4M annually in inefficiencies",
    solution: "Custom ServiceNow application with IoT integration, barcode scanning, and predictive maintenance workflows",
    results: ["94% reduction in asset tracking time", "156% improvement in maintenance efficiency", "$15.8M annual savings", "99.2% asset visibility"],
    timeline: "16 weeks development",
    image: "/images/case-studies/techflow-custom-app.jpg",
    testimonial: "ifBash built us a custom asset management application that's now the backbone of our operations. It's exactly what we needed and couldn't find anywhere else."
  },
  {
    client: "HealthCare Alliance",
    industry: "Healthcare",
    challenge: "Patient care coordination across multiple departments with regulatory compliance requirements and complex workflows",
    solution: "HIPAA-compliant custom patient care coordination app with automated compliance tracking and clinical decision support",
    results: ["89% faster care coordination", "100% HIPAA compliance", "73% improvement in patient outcomes", "Zero compliance violations"],
    timeline: "20 weeks development",
    image: "/images/case-studies/healthcare-custom-app.jpg",
    testimonial: "The custom patient care app transformed how our teams collaborate. It's built specifically for healthcare and handles our complex compliance needs perfectly."
  },
  {
    client: "FinTech Solutions",
    industry: "Financial Services",
    challenge: "Risk assessment processes taking 12 days with manual reviews causing regulatory delays and $8.9M opportunity costs",
    solution: "AI-powered custom risk assessment application with automated compliance checks and real-time decision support",
    results: ["91% faster risk assessments", "100% regulatory compliance", "234% increase in processing capacity", "$12.7M revenue increase"],
    timeline: "18 weeks development",
    image: "/images/case-studies/fintech-custom-app.jpg",
    testimonial: "Our custom risk assessment app gives us capabilities that no off-the-shelf solution could provide. It's perfectly tailored to our unique requirements."
  }
];

// Client Stories
const clientStories = [
  {
    name: "David Kim",
    title: "VP of Operations",
    company: "TechFlow Manufacturing",
    story: "ifBash didn't just build us an app - they created a digital solution that's perfectly aligned with our manufacturing processes. Every feature serves our exact business needs.",
    metric: "156% improvement in maintenance efficiency with $15.8M annual savings",
    rating: 5,
    avatar: "/images/testimonials/david-kim-mfg.jpg"
  },
  {
    name: "Dr. Rebecca Martinez",
    title: "Chief Medical Officer",
    company: "HealthCare Alliance", 
    story: "The custom patient care coordination app understands healthcare workflows in ways that generic applications never could. It's like having a digital clinical assistant.",
    metric: "89% faster care coordination with 73% better patient outcomes",
    rating: 5,
    avatar: "/images/testimonials/rebecca-martinez-health.jpg"
  },
  {
    name: "Jennifer Chen",
    title: "Head of Risk Management",
    company: "FinTech Solutions",
    story: "The AI-powered risk assessment application processes complex financial scenarios that would be impossible with standard tools. It's revolutionary for our industry.",
    metric: "234% increase in processing capacity with $12.7M revenue growth",
    rating: 5,
    avatar: "/images/testimonials/jennifer-chen-fintech.jpg"
  },
  {
    name: "Michael Thompson",
    title: "IT Director",
    company: "LogisticsFlow Corp",
    story: "Our custom supply chain optimization app handles unique logistics challenges that no commercial solution addresses. ifBash built exactly what we envisioned.",
    metric: "87% improvement in supply chain efficiency",
    rating: 5,
    avatar: "/images/testimonials/michael-thompson-logistics.jpg"
  }
];

// Custom App Development Methodology
const customAppMethodology = [
  {
    phase: "Discovery & Requirements Analysis",
    duration: "Week 1-3",
    activities: ["Business requirement gathering", "Process mapping", "User experience design", "Technical architecture", "Feasibility assessment"],
    deliverables: ["Requirements specification", "Technical blueprint", "UI/UX mockups", "Development roadmap"],
    icon: Search,
    color: "from-amber-500 to-orange-500"
  },
  {
    phase: "Application Design & Prototyping",
    duration: "Week 4-6",
    activities: ["Database schema design", "Workflow automation design", "User interface development", "Integration planning", "Security framework"],
    deliverables: ["Application prototype", "Database design", "Integration specifications", "Security model"],
    icon: Code,
    color: "from-orange-500 to-red-500"
  },
  {
    phase: "Development & Integration",
    duration: "Week 7-14",
    activities: ["Custom application coding", "ServiceNow integration", "Third-party API integration", "Mobile optimization", "Performance optimization"],
    deliverables: ["Functional application", "Integration framework", "Mobile app", "Performance benchmarks"],
    icon: Cog,
    color: "from-red-500 to-pink-500"
  },
  {
    phase: "Testing, Deployment & Training",
    duration: "Week 15-18",
    activities: ["Comprehensive testing", "User acceptance testing", "Production deployment", "User training", "Documentation"],
    deliverables: ["Tested application", "Deployment package", "Training materials", "Support documentation"],
    icon: Rocket,
    color: "from-pink-500 to-purple-500"
  }
];

// Custom App Services
const customAppServices = [
  {
    icon: Code,
    title: "Low-Code Development",
    description: "Build powerful applications fast using ServiceNow's low-code platform with visual development tools",
    benefits: ["Rapid development", "Visual workflow builder", "Drag-and-drop interface"],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "Integrate artificial intelligence and machine learning capabilities into custom applications",
    benefits: ["Predictive analytics", "Intelligent automation", "Natural language processing"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Create responsive, mobile-optimized applications that work seamlessly across all devices",
    benefits: ["Mobile optimization", "Cross-platform compatibility", "Offline capabilities"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Network,
    title: "Enterprise Integration",
    description: "Connect custom apps with existing enterprise systems, databases, and third-party services",
    benefits: ["API integration", "Real-time data sync", "Legacy system connectivity"],
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Build applications with enterprise-grade security and industry-specific compliance requirements",
    benefits: ["Advanced security controls", "Compliance frameworks", "Data encryption"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Design applications that scale with your business growth and evolving requirements",
    benefits: ["Auto-scaling", "Performance optimization", "Future-proof design"],
    gradient: "from-indigo-500 to-blue-500"
  }
];

// Custom App Capabilities
const customAppCapabilities = [
  {
    title: "Development Speed",
    description: "Average time to deploy custom applications using low-code methodology",
    stat: "16 Weeks Average",
    icon: Timer
  },
  {
    title: "Cost Reduction",
    description: "Average cost savings compared to traditional application development approaches",
    stat: "67% Cost Savings",
    icon: DollarSign
  },
  {
    title: "User Adoption Rate", 
    description: "Average user adoption rate for custom applications within first 3 months",
    stat: "89% Adoption",
    icon: Users
  },
  {
    title: "Business Value ROI",
    description: "Average ROI achieved from custom application investments within first year",
    stat: "234% ROI",
    icon: TrendingUp
  }
];

// FAQ Data
const faqs = [
  {
    question: "How long does it take to develop a custom ServiceNow application?",
    answer: "Development timelines vary based on complexity, but most custom applications are delivered in 12-20 weeks. Simple applications can be completed in 8-12 weeks, while complex enterprise applications may take 16-24 weeks. Our low-code approach significantly accelerates development compared to traditional methods."
  },
  {
    question: "What types of custom applications can be built on ServiceNow?",
    answer: "ServiceNow's platform supports a wide range of applications including asset management, compliance tracking, customer portals, inventory systems, project management tools, approval workflows, reporting dashboards, and industry-specific solutions. The platform's flexibility allows for virtually any business application."
  },
  {
    question: "How do custom ServiceNow apps integrate with existing systems?",
    answer: "ServiceNow provides robust integration capabilities including REST/SOAP APIs, database connectors, file imports, real-time integration, and pre-built connectors for popular enterprise systems. Our team ensures seamless integration with your existing technology stack."
  },
  {
    question: "What is the difference between low-code and traditional development?",
    answer: "Low-code development uses visual interfaces, drag-and-drop components, and pre-built templates to accelerate development by 3-5x compared to traditional coding. It requires less technical expertise, reduces development time, and enables faster iterations while maintaining enterprise-grade capabilities."
  },
  {
    question: "Can custom apps be modified after deployment?",
    answer: "Yes, ServiceNow custom applications are designed for easy modification and enhancement. Our development approach ensures applications can evolve with your business needs. We provide ongoing support for updates, feature additions, and process improvements."
  },
  {
    question: "How do you ensure custom applications are secure and compliant?",
    answer: "We implement enterprise-grade security including role-based access controls, data encryption, audit trails, and compliance frameworks (SOX, HIPAA, GDPR, etc.). All applications follow ServiceNow security best practices and undergo comprehensive security testing."
  },
  {
    question: "What support is provided after custom app deployment?",
    answer: "We provide comprehensive post-deployment support including user training, documentation, maintenance, enhancements, technical support, and performance monitoring. Our support ensures your custom application continues to deliver value and evolves with your business."
  },
  {
    question: "Can custom applications be deployed across multiple ServiceNow instances?",
    answer: "Yes, custom applications can be packaged and deployed across multiple ServiceNow instances including development, testing, and production environments. We follow best practices for application lifecycle management and version control."
  }
];

export default function CustomApps() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with App Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with App Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-amber-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{backgroundImage: `url('/images/grid-pattern.svg')`, backgroundSize: '30px 30px'}} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating App Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-red-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Code Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Code className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-orange-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    ✓ 16 Weeks Average
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    ✓ 67% Cost Savings
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-pink-600 transition-all duration-300">
                    ✓ 234% ROI
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 font-semibold">
                    Custom Applications
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    Built{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                      Perfectly
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl leading-relaxed">
                  Build custom applications in <span className="font-semibold text-orange-300">16 weeks average</span> using ServiceNow's low-code platform. <span className="font-semibold text-red-300">67% cost savings</span> with <span className="font-semibold text-pink-300">234% ROI</span> and <span className="font-semibold text-yellow-300">89% user adoption</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                  <div className="group bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20 hover:from-amber-600/30 hover:via-orange-600/30 hover:to-red-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">16W</div>
                    <div className="text-xs sm:text-sm text-amber-100">Average Dev</div>
                  </div>
                  <div className="group bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 hover:from-orange-600/30 hover:via-red-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">67%</div>
                    <div className="text-xs sm:text-sm text-orange-100">Cost Savings</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-red-600/20 via-pink-600/20 to-purple-600/20 hover:from-red-600/30 hover:via-pink-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-red-400/20 hover:border-red-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">234%</div>
                    <div className="text-xs sm:text-sm text-red-100">ROI</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Build Your Custom App
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-red-400 group-hover:text-red-300" />
                      Watch App Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="Custom App Development Studio"
                      className="w-full h-full object-cover"
                      gradient="from-amber-600 to-orange-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">16W</div>
                      <div className="text-xs text-amber-200">Dev Time</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">234%</div>
                      <div className="text-xs text-orange-200">ROI</div>
                    </div>
                  </div>
                  
                  {/* Floating App Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Code className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Smartphone className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="service-overview">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                  Why Choose ifBash
                </span>
                <br />
                <span className="text-gray-800">
                  for Custom App Development
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We don't just code applications - we create intelligent, scalable solutions that perfectly align with your unique business processes and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {customAppServices.map((service, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom App Capabilities Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {customAppCapabilities.map((capability, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{capability.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom App Development Methodology Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="methodology">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                  Our Custom App Development
                </span>
                <br />
                <span className="text-white">
                  Methodology
                </span>
              </h2>
              <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
                A comprehensive 4-phase approach that transforms your unique business requirements into powerful, scalable custom applications.
              </p>
            </div>

            <div className="space-y-12">
              {customAppMethodology.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                          <div className="text-amber-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-amber-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-amber-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 transform group-hover:scale-105`}>
                          <div className={`w-full h-full bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-amber-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-amber-300 mt-2">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < customAppMethodology.length - 1 && (
                    <div className="flex justify-center mt-8 mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-orange-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button 
                onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                className="group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Custom App Development
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="case-studies">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-red-600">
                  Custom App Development
                </span>
                <br />
                <span className="text-gray-800">
                  Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                See how our custom ServiceNow applications have solved unique business challenges with tailored solutions that deliver exceptional results.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-amber-500 to-red-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-red-600 mb-2">Business Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">Custom Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-green-600 mb-3">Business Impact</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border-l-4 border-orange-500">
                          <Quote className="h-6 w-6 text-orange-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Custom App`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-orange-600 to-amber-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-orange-200">
                          <div className="text-lg font-bold text-orange-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-900 via-amber-900 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-red-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-orange-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="testimonials">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                  What Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Custom Apps
                </span>
              </h2>
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Hear from the innovators who trusted us with their unique business challenges and achieved remarkable results with custom applications.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-6">
                            <Code className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-orange-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <Quote className="h-8 w-8 text-red-400 mb-4" />
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
                            <span className="text-orange-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-red-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-red-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16" data-animate id="faq">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Custom App Development
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our ServiceNow custom application development services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-amber-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-amber-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Build Your Custom ServiceNow Application?
                </h3>
                <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                  Join businesses achieving 234% ROI with custom apps. Get tailored solutions developed in 16 weeks average with 89% user adoption.
                </p>
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group px-8 py-4 text-lg font-semibold bg-white text-amber-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Custom App Consultation
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
