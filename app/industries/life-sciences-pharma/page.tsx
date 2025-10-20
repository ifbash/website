'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
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
  Plug,
  Beaker
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "GlobalPharma Corp",
    industry: "Pharmaceutical Manufacturing",
    challenge: "Drug development lifecycle taking 8.5 years with 67% regulatory delays costing $890M in extended development",
    solution: "Integrated drug development platform with regulatory automation, clinical data management, and compliance tracking",
    results: ["34% faster development cycles", "89% reduction in regulatory delays", "$1.2B cost savings", "100% FDA compliance"],
    timeline: "26 weeks implementation",
    image: "/images/case-studies/globalpharma-corp.jpg",
    testimonial: "ifBash transformed our drug development process, reducing time-to-market by years while maintaining perfect regulatory compliance."
  },
  {
    client: "BioTech Innovations",
    industry: "Biotechnology Research",
    challenge: "Research data management across 67 studies with compliance issues and collaboration inefficiencies",
    solution: "Research data management platform with automated workflows, collaboration tools, and regulatory compliance",
    results: ["78% improvement in research efficiency", "94% faster data analysis", "$156M productivity gains", "Zero data integrity issues"],
    timeline: "20 weeks rollout",
    image: "/images/case-studies/biotech-innovations.jpg",
    testimonial: "The research platform ifBash built revolutionized our data management and collaboration, accelerating breakthrough discoveries."
  },
  {
    client: "VaccineProduction Inc",
    industry: "Vaccine Manufacturing",
    challenge: "Manufacturing quality control with 23% batch failures and $45M in rejected products annually",
    solution: "Quality management system with real-time monitoring, predictive analytics, and automated compliance reporting",
    results: ["91% reduction in batch failures", "156% improvement in quality scores", "$52M waste reduction", "Zero regulatory violations"],
    timeline: "24 weeks deployment",
    image: "/images/case-studies/vaccine-production.jpg",
    testimonial: "Quality is everything in vaccine production. ifBash's platform ensures every batch meets the highest standards with zero failures."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Amanda Foster",
    title: "Chief Scientific Officer",
    company: "GlobalPharma Corp",
    story: "ifBash's pharmaceutical expertise accelerated our drug development beyond our wildest expectations. We now bring life-saving medications to market years faster.",
    metric: "34% faster development with $1.2B cost savings",
    rating: 5,
    avatar: "/images/testimonials/amanda-foster-cso.jpg"
  },
  {
    name: "Dr. Steven Liu",
    title: "Research Director",
    company: "BioTech Innovations", 
    story: "Research collaboration was transformed by ifBash's platform. Our teams now work seamlessly across global locations, accelerating breakthrough discoveries.",
    metric: "78% research efficiency improvement with 94% faster analysis",
    rating: 5,
    avatar: "/images/testimonials/steven-liu-research.jpg"
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Quality",
    company: "VaccineProduction Inc",
    story: "Vaccine quality cannot be compromised. ifBash's quality management platform ensures every batch meets the highest standards with zero failures.",
    metric: "91% batch failure reduction with $52M waste savings",
    rating: 5,
    avatar: "/images/testimonials/maria-rodriguez-quality.jpg"
  },
  {
    name: "Dr. Robert Johnson",
    title: "Head of Regulatory Affairs",
    company: "PharmaRegulate Solutions",
    story: "Regulatory compliance complexity was eliminated by ifBash's automation. We now navigate global regulations effortlessly with perfect compliance scores.",
    metric: "100% regulatory compliance with 89% faster approvals",
    rating: 5,
    avatar: "/images/testimonials/robert-johnson-regulatory.jpg"
  }
];

// Pharmaceutical Solutions
const pharmaceuticalSolutions = [
  {
    icon: TestTube2,
    title: "Drug Development Lifecycle",
    description: "Accelerate drug discovery and development with automated protocols, regulatory compliance, and intelligent project management",
    benefits: ["Development acceleration", "Regulatory automation", "Project intelligence"],
    gradient: "from-indigo-500 to-purple-500",
    useCases: ["Drug discovery", "Clinical trials", "Regulatory submissions"]
  },
  {
    icon: Microscope,
    title: "Research Data Management", 
    description: "Manage complex research data with automated workflows, collaboration tools, and comprehensive analytics",
    benefits: ["Data automation", "Research collaboration", "Analytics insights"],
    gradient: "from-purple-500 to-violet-500",
    useCases: ["Research workflows", "Data analysis", "Scientific collaboration"]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance & Quality",
    description: "Ensure regulatory compliance with automated reporting, quality management, and audit trail capabilities",
    benefits: ["Compliance automation", "Quality assurance", "Audit trails"],
    gradient: "from-violet-500 to-fuchsia-500",
    useCases: ["FDA compliance", "Quality control", "Regulatory reporting"]
  },
  {
    icon: Beaker,
    title: "Manufacturing Operations",
    description: "Optimize pharmaceutical manufacturing with quality control, batch management, and supply chain coordination",
    benefits: ["Quality control", "Batch management", "Supply optimization"],
    gradient: "from-fuchsia-500 to-pink-500",
    useCases: ["Batch production", "Quality testing", "Supply planning"]
  },
  {
    icon: Brain,
    title: "Clinical Trial Management",
    description: "Streamline clinical trials with patient management, protocol automation, and real-time monitoring",
    benefits: ["Patient management", "Protocol automation", "Real-time monitoring"],
    gradient: "from-pink-500 to-rose-500",
    useCases: ["Trial management", "Patient recruitment", "Data collection"]
  },
  {
    icon: Network,
    title: "Supply Chain & Distribution",
    description: "Manage pharmaceutical supply chains with cold chain monitoring, serialization, and distribution tracking",
    benefits: ["Cold chain monitoring", "Serialization", "Distribution tracking"],
    gradient: "from-rose-500 to-red-500",
    useCases: ["Supply tracking", "Cold storage", "Distribution management"]
  }
];

// Pharmaceutical Metrics
const pharmaceuticalMetrics = [
  {
    title: "Development Speed Improvement",
    description: "Average acceleration in drug development and time-to-market",
    stat: "34% Faster",
    icon: Rocket
  },
  {
    title: "Regulatory Compliance Rate",
    description: "Average improvement in regulatory compliance and approval success",
    stat: "100% Compliant",
    icon: CheckCircle
  },
  {
    title: "Research Efficiency Gains", 
    description: "Average improvement in research productivity and data analysis speed",
    stat: "78% Efficient",
    icon: Brain
  },
  {
    title: "Cost Reduction Achievement",
    description: "Average cost savings through pharmaceutical process optimization",
    stat: "$1.2B Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Pharmaceutical Assessment & Strategy",
    duration: "Week 1-4",
    activities: ["Drug development process analysis", "Regulatory requirements mapping", "Research workflow assessment", "Compliance gap analysis", "Integration planning"],
    deliverables: ["Pharmaceutical digital strategy", "Regulatory compliance roadmap", "Research optimization plan", "Integration architecture"],
    icon: Search,
    color: "from-indigo-500 to-purple-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-18",
    activities: ["ServiceNow pharma setup", "Research system integration", "Regulatory workflow automation", "Clinical trial platform", "Quality system implementation"],
    deliverables: ["Pharmaceutical platform", "Integrated research systems", "Automated workflows", "Clinical trial management"],
    icon: Settings,
    color: "from-purple-500 to-violet-500"
  },
  {
    phase: "Testing & Validation",
    duration: "Week 19-24",
    activities: ["Regulatory testing", "Research workflow validation", "Quality system verification", "Compliance validation", "User training"],
    deliverables: ["Validated pharma platform", "Compliance certification", "Quality validation", "Training materials"],
    icon: CheckCircle,
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 25-28",
    activities: ["Production deployment", "Research team onboarding", "Regulatory training", "Performance monitoring", "Continuous improvement"],
    deliverables: ["Live pharmaceutical platform", "Trained research teams", "Regulatory compliance", "Monitoring systems"],
    icon: Rocket,
    color: "from-fuchsia-500 to-pink-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow accelerate drug development lifecycles?",
    answer: "ServiceNow accelerates drug development through automated protocol management, intelligent project coordination, regulatory workflow automation, and real-time collaboration tools. Our platform reduces development time by eliminating manual processes and ensuring seamless coordination across all development phases."
  },
  {
    question: "What regulatory compliance capabilities does ServiceNow provide for pharmaceuticals?",
    answer: "ServiceNow offers comprehensive regulatory compliance including FDA validation, international regulatory support, automated documentation, audit trail management, and submission workflow automation. Our platform ensures compliance with global pharmaceutical regulations while streamlining approval processes."
  },
  {
    question: "How can ServiceNow improve clinical trial management?",
    answer: "ServiceNow transforms clinical trials with automated patient recruitment, protocol management, data collection workflows, regulatory reporting, and real-time monitoring. Our platform accelerates trials while ensuring data integrity and regulatory compliance throughout the study lifecycle."
  },
  {
    question: "What research data management features are available?",
    answer: "ServiceNow provides comprehensive research data management including automated data collection, laboratory information management, research collaboration tools, data analytics, and intellectual property protection. Our platform enables seamless research coordination across global teams."
  },
  {
    question: "How does ServiceNow support pharmaceutical manufacturing quality?",
    answer: "ServiceNow ensures manufacturing quality through batch management, quality control automation, deviation tracking, CAPA management, and real-time monitoring. Our platform maintains product quality while optimizing manufacturing efficiency and regulatory compliance."
  },
  {
    question: "What ROI can pharmaceutical companies expect from ServiceNow?",
    answer: "Pharmaceutical companies typically see 25-40% reductions in development time, 30-50% improvements in regulatory compliance efficiency, and 20-35% cost savings through process optimization. Most companies achieve positive ROI within 18-24 months through accelerated time-to-market."
  },
  {
    question: "How does ServiceNow integrate with existing pharmaceutical systems?",
    answer: "ServiceNow seamlessly integrates with laboratory information management systems (LIMS), electronic data capture (EDC) systems, regulatory information management systems, and manufacturing execution systems. Our pharmaceutical-specific APIs ensure smooth integration with existing technology stacks."
  },
  {
    question: "What training and support is provided for pharmaceutical implementations?",
    answer: "We provide specialized pharmaceutical training including regulatory compliance procedures, research best practices, quality management protocols, and system administration. Our support includes 24/7 monitoring, regulatory updates, compliance guidance, and ongoing optimization services."
  }
];

export default function PharmaceuticalsBiotech() {
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
      <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 z-50">
        <a href="/get-started"
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Pharma Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Pharma Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Pharma Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-violet-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Microscope Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Microscope className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 34% Faster Development
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-violet-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-violet-700 transition-all duration-300">
                    ✓ 100% FDA Compliant
                  </Badge>
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300">
                    ✓ $1.2B Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 font-semibold">
                    Pharmaceuticals & Biotech
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Drug Discovery{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-indigo-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Accelerate life-saving innovations with <span className="font-semibold text-purple-300">intelligent drug development</span>, regulatory compliance, and research excellence. Achieve <span className="font-semibold text-violet-300">34% faster development</span> with <span className="font-semibold text-fuchsia-300">$1.2B savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-violet-600/20 hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-violet-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">34%</div>
                    <div className="text-xs sm:text-sm text-indigo-100">Faster</div>
                  </div>
                  <div className="group bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-fuchsia-600/20 hover:from-purple-600/30 hover:via-violet-600/30 hover:to-fuchsia-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">100%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Compliant</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 hover:from-violet-600/30 hover:via-fuchsia-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">$1.2B</div>
                    <div className="text-xs sm:text-sm text-violet-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-violet-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Accelerate Drug Development
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-fuchsia-400 group-hover:text-fuchsia-300" />
                      Watch Pharma Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Drug Development Platform"
                      className="w-full h-full object-cover"
                      gradient="from-indigo-600 to-purple-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">34%</div>
                      <div className="text-xs text-indigo-200">Faster</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs text-purple-200">Compliant</div>
                    </div>
                  </div>
                  
                  {/* Floating Pharma Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Microscope className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TestTube2 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Pharmaceutical Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Save Lives
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of pharmaceutical operations with intelligent solutions designed for life-saving innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {pharmaceuticalSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100 hover:border-indigo-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-2 mb-4 sm:mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pharmaceutical Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {pharmaceuticalMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="implementation">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400">
                  Our Pharmaceutical Implementation
                </span>
                <br />
                <span className="text-white">
                  Approach
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-indigo-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                A specialized 4-phase methodology designed specifically for pharmaceutical requirements and regulatory compliance.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {implementationApproach.map((phase, index) => (
                <div key={index} className="group relative" data-animate id={`phase-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mr-4 sm:mr-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1 sm:mb-2">{phase.phase}</h3>
                          <div className="text-indigo-200 flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-indigo-200">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-indigo-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-indigo-200">Key Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center">
                                <FileText className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-4 sm:p-8 backdrop-blur-sm border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-500`}>
                          <div className={`w-full h-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                            <div className="text-center relative z-10">
                              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 sm:mb-4">
                                0{index + 1}
                              </div>
                              <div className="text-lg font-semibold text-indigo-200">
                                {phase.phase.split(' & ')[0]}
                              </div>
                              <div className="text-sm text-indigo-300 mt-1">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < implementationApproach.length - 1 && (
                    <div className="flex justify-center mt-4 sm:mt-8 mb-4 sm:mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-50"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 sm:mt-16">
              <a href="/get-started"
                className="group px-8 py-4 text-sm sm:text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-violet-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Pharmaceutical Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600">
                  Pharmaceutical Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how pharmaceutical leaders have transformed their operations with ServiceNow solutions that accelerate life-saving innovations.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {study.client}
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-red-600">Challenge</h4>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-blue-600">Solution</h4>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-green-600">Results</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border-l-4 border-purple-500">
                          <Quote className="h-6 w-6 text-purple-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Pharmaceutical Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-purple-600 to-indigo-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  What Pharmaceutical Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-purple-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from pharmaceutical executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Microscope className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-purple-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-violet-400 mb-4" />
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
                            <div className="text-violet-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-violet-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Pharmaceutical Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for pharmaceuticals and biotechnology.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-indigo-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Accelerate Your Drug Development?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-indigo-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join pharmaceutical leaders bringing life-saving innovations to market faster. Get drug development solutions that deliver 34% faster development and $1.2B savings.
                </p>
                <a href="/get-started"
                  className="group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-indigo-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Pharmaceutical Consultation
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
