'use client';
import React, { useState, useEffect } from 'react';
import { PlaceholderImage } from "@/components/placeholder-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart,
  Package,
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
    client: "SteelTech Industries",
    industry: "Steel Manufacturing",
    challenge: "Equipment downtime across 12 facilities costing $89M annually with 34% unplanned maintenance issues affecting production schedules",
    solution: "ServiceNow-powered predictive maintenance platform with IoT integration, automated work orders, and intelligent asset management",
    results: ["87% reduction in unplanned downtime", "156% improvement in maintenance efficiency", "$97M annual cost savings", "99.2% equipment uptime"],
    timeline: "20 weeks implementation",
    image: "/images/case-studies/steeltech-manufacturing.jpg",
    testimonial: "ifBash transformed our manufacturing operations from reactive to predictive. We now prevent equipment failures before they happen, ensuring continuous production across all our facilities."
  },
  {
    client: "GlobalTech Assembly",
    industry: "Electronics Manufacturing",
    challenge: "Quality control issues across complex supply chain with 23% defect rates and $67M in recalls and rework costs",
    solution: "AI-powered quality management system with real-time monitoring, automated defect detection, and supplier quality tracking",
    results: ["91% reduction in defect rates", "78% faster quality issue resolution", "$74M cost avoidance", "Zero product recalls"],
    timeline: "18 weeks deployment",
    image: "/images/case-studies/globaltech-electronics.jpg",
    testimonial: "Quality was our biggest challenge until ifBash implemented their intelligent quality management system. We've eliminated recalls and achieved six-sigma quality levels."
  },
  {
    client: "ChemPro Manufacturing",
    industry: "Chemical Processing",
    challenge: "Safety compliance and environmental monitoring across hazardous processes with regulatory violations costing $45M in fines and shutdowns",
    solution: "Comprehensive safety and compliance platform with real-time monitoring, automated reporting, and predictive risk analytics",
    results: ["100% regulatory compliance", "89% reduction in safety incidents", "$52M in avoided fines", "Zero environmental violations"],
    timeline: "22 weeks rollout",
    image: "/images/case-studies/chempro-chemical.jpg",
    testimonial: "Safety and compliance are non-negotiable in chemical processing. ifBash's platform ensures we maintain perfect compliance while optimizing our operations."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Michael Rodriguez",
    title: "VP of Operations",
    company: "",
    story: "ifBash's manufacturing expertise transformed our approach to maintenance. We went from fighting daily equipment failures to predicting and preventing them weeks in advance.",
    metric: "87% reduction in unplanned downtime with $97M annual savings",
    rating: 5,
    avatar: "/images/testimonials/michael-rodriguez-steel.jpg"
  },
  {
    name: "Dr. Susan Chen",
    title: "Quality Director",
    company: "", 
    story: "The intelligent quality management system ifBash deployed gave us unprecedented visibility into our processes. We've achieved quality levels we never thought possible.",
    metric: "91% defect reduction with zero product recalls in 18 months",
    rating: 5,
    avatar: "/images/testimonials/susan-chen-quality.jpg"
  },
  {
    name: "David Thompson",
    title: "HSE Manager",
    company: "",
    story: "Safety compliance in chemical processing is critical. ifBash's platform ensures we maintain perfect regulatory compliance while optimizing our manufacturing efficiency.",
    metric: "100% regulatory compliance with 89% reduction in safety incidents",
    rating: 5,
    avatar: "/images/testimonials/david-thompson-safety.jpg"
  },
  {
    name: "Jennifer Walsh",
    title: "Plant Manager",
    company: "",
    story: "The Industry 4.0 transformation ifBash led connected all our systems into one intelligent platform. We now have real-time visibility across our entire manufacturing operation.",
    metric: "234% improvement in operational efficiency",
    rating: 5,
    avatar: "/images/testimonials/jennifer-walsh-plant.jpg"
  }
];

// Manufacturing Solutions
const manufacturingSolutions = [
  {
    icon: Factory,
    title: "Smart Manufacturing & Industry 4.0",
    description: "Transform traditional manufacturing with intelligent automation, IoT integration, and real-time operational visibility",
    benefits: ["Real-time monitoring", "Automated workflows", "Predictive analytics"],
    gradient: "from-orange-500 to-red-500",
    useCases: ["Production optimization", "Equipment monitoring", "Quality control"]
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance", 
    description: "Prevent equipment failures with AI-powered predictive maintenance, automated work orders, and intelligent asset management",
    benefits: ["Failure prediction", "Automated scheduling", "Asset optimization"],
    gradient: "from-red-500 to-pink-500",
    useCases: ["Equipment maintenance", "Asset lifecycle", "Downtime prevention"]
  },
  {
    icon: Package,
    title: "Supply Chain & Inventory Management",
    description: "Optimize supply chain operations with real-time visibility, automated inventory management, and supplier integration",
    benefits: ["Inventory optimization", "Supplier visibility", "Demand forecasting"],
    gradient: "from-pink-500 to-purple-500",
    useCases: ["Inventory tracking", "Supplier management", "Logistics coordination"]
  },
  {
    icon: Shield,
    title: "Safety & Compliance Management",
    description: "Ensure workplace safety and regulatory compliance with automated monitoring, incident management, and reporting",
    benefits: ["Safety monitoring", "Compliance automation", "Incident tracking"],
    gradient: "from-purple-500 to-indigo-500",
    useCases: ["Safety compliance", "Risk management", "Environmental monitoring"]
  },
  {
    icon: BarChart,
    title: "Quality Management System",
    description: "Maintain product quality with automated inspection, defect tracking, and continuous improvement processes",
    benefits: ["Quality tracking", "Defect prevention", "Process improvement"],
    gradient: "from-indigo-500 to-blue-500",
    useCases: ["Quality control", "Process monitoring", "Customer satisfaction"]
  },
  {
    icon: Network,
    title: "Digital Twin & Simulation",
    description: "Create digital replicas of manufacturing processes for optimization, testing, and predictive analysis",
    benefits: ["Process simulation", "Optimization testing", "Predictive modeling"],
    gradient: "from-blue-500 to-cyan-500",
    useCases: ["Process optimization", "Scenario planning", "Performance analysis"]
  }
];

// Manufacturing Metrics
const manufacturingMetrics = [
  {
    title: "Equipment Uptime Achievement",
    description: "Average equipment availability improvement across manufacturing implementations",
    stat: "99.2% Uptime",
    icon: Factory
  },
  {
    title: "Maintenance Efficiency Gains",
    description: "Average improvement in maintenance operations and predictive capabilities",
    stat: "156% Efficiency",
    icon: Wrench
  },
  {
    title: "Quality Improvement Rate", 
    description: "Average reduction in defect rates and quality-related costs",
    stat: "91% Quality Gain",
    icon: Award
  },
  {
    title: "Cost Reduction Achievement",
    description: "Average cost savings achieved through manufacturing optimization",
    stat: "$97M Savings",
    icon: DollarSign
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Manufacturing Assessment & Strategy",
    duration: "Week 1-4",
    activities: ["Production line analysis", "Equipment assessment", "Process mapping", "Quality system review", "Safety compliance audit"],
    deliverables: ["Manufacturing digital strategy", "Equipment optimization plan", "Process improvement roadmap", "Compliance framework"],
    icon: Search,
    color: "from-orange-500 to-red-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 5-12",
    activities: ["ServiceNow manufacturing setup", "Equipment connectivity", "Process automation", "Quality system integration", "Safety monitoring deployment"],
    deliverables: ["Configured manufacturing platform", "Connected equipment systems", "Automated workflows", "Quality dashboards"],
    icon: Settings,
    color: "from-red-500 to-pink-500"
  },
  {
    phase: "Testing & Validation",
    duration: "Week 13-18",
    activities: ["System testing", "Process validation", "Quality verification", "Safety testing", "Performance benchmarking"],
    deliverables: ["Validated manufacturing system", "Quality certifications", "Safety compliance", "Performance reports"],
    icon: CheckCircle,
    color: "from-pink-500 to-purple-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 19-24",
    activities: ["Production deployment", "Team training", "Performance monitoring", "Continuous improvement", "Optimization cycles"],
    deliverables: ["Live manufacturing platform", "Trained workforce", "Monitoring systems", "Improvement plans"],
    icon: Rocket,
    color: "from-purple-500 to-indigo-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow enable Industry 4.0 transformation?",
    answer: "ServiceNow provides comprehensive Industry 4.0 capabilities including IoT integration, real-time monitoring, predictive analytics, and intelligent automation. Our platform connects machines, processes, and people into a unified digital manufacturing ecosystem that enables smart decision-making and autonomous operations."
  },
  {
    question: "What predictive maintenance capabilities does ServiceNow offer?",
    answer: "ServiceNow delivers advanced predictive maintenance through AI-powered failure prediction, automated work order generation, condition-based monitoring, and intelligent scheduling. Our platform analyzes equipment data to predict failures weeks in advance, enabling proactive maintenance that prevents costly downtime."
  },
  {
    question: "How can ServiceNow improve manufacturing quality management?",
    answer: "ServiceNow transforms quality management with real-time monitoring, automated defect detection, supplier quality tracking, and continuous improvement workflows. Our platform provides end-to-end quality visibility from raw materials to finished products, enabling proactive quality control and zero-defect manufacturing."
  },
  {
    question: "What safety and compliance features does ServiceNow provide for manufacturing?",
    answer: "ServiceNow offers comprehensive safety and compliance management including incident tracking, risk assessment, regulatory reporting, environmental monitoring, and automated compliance workflows. Our platform ensures adherence to OSHA, EPA, and industry-specific regulations while maintaining operational efficiency."
  },
  {
    question: "How does ServiceNow integrate with existing manufacturing systems?",
    answer: "ServiceNow seamlessly integrates with manufacturing execution systems (MES), enterprise resource planning (ERP), programmable logic controllers (PLC), supervisory control and data acquisition (SCADA), and quality management systems. Our extensive API capabilities ensure smooth integration with existing manufacturing technology stacks."
  },
  {
    question: "What ROI can manufacturers expect from ServiceNow implementations?",
    answer: "Manufacturing companies typically see 20-35% cost reductions, 40-70% improvements in equipment uptime, and 60-90% reductions in quality issues. Most manufacturers achieve positive ROI within 12-18 months through reduced downtime, improved efficiency, and enhanced quality."
  },
  {
    question: "How does ServiceNow support supply chain optimization in manufacturing?",
    answer: "ServiceNow optimizes manufacturing supply chains through real-time inventory visibility, automated procurement, supplier performance monitoring, demand forecasting, and logistics coordination. Our platform ensures just-in-time manufacturing while preventing stockouts and reducing inventory costs."
  },
  {
    question: "What training and support is provided for manufacturing implementations?",
    answer: "We provide specialized manufacturing training including equipment maintenance procedures, quality management processes, safety protocols, and system administration. Our support includes 24/7 monitoring, preventive maintenance, performance optimization, and continuous improvement guidance."
  }
];

export default function ManufacturingIndustrial() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Manufacturing Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Mfg Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Manufacturing Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Factory Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Factory className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    ✓ 99.2% Uptime
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                    ✓ Industry 4.0 Ready
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                    ✓ $97M Savings
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                    Manufacturing & Industrial
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Industry 4.0{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 font-semibold">
                      Transformation
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-orange-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform manufacturing operations with <span className="font-semibold text-red-300">Industry 4.0 solutions</span>, predictive maintenance, and intelligent automation. Achieve <span className="font-semibold text-pink-300">99.2% equipment uptime</span> with <span className="font-semibold text-purple-300">$97M savings</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 hover:from-orange-600/30 hover:via-red-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">99.2%</div>
                    <div className="text-xs sm:text-sm text-orange-100">Uptime</div>
                  </div>
                  <div className="group bg-gradient-to-br from-red-600/20 via-pink-600/20 to-purple-600/20 hover:from-red-600/30 hover:via-pink-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-red-400/20 hover:border-red-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">87%</div>
                    <div className="text-xs sm:text-sm text-red-100">Less Downtime</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 hover:from-pink-600/30 hover:via-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">$97M</div>
                    <div className="text-xs sm:text-sm text-pink-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Start Industry 4.0 Transformation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      Watch Manufacturing Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Smart Manufacturing Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-orange-600 to-red-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.2%</div>
                      <div className="text-xs text-orange-200">Uptime</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">87%</div>
                      <div className="text-xs text-red-200">Downtime ↓</div>
                    </div>
                  </div>
                  
                  {/* Floating Manufacturing Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Factory className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Wrench className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Manufacturing Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Drive Excellence
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of manufacturing operations with intelligent solutions designed for the Industry 4.0 era.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {manufacturingSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                          <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Manufacturing Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {manufacturingMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/50 to-orange-900" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  Our Implementation
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                A proven four-phase approach that ensures successful manufacturing implementations with maximum efficiency.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {implementationApproach.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-${step.color.split(' ')[1]}/20 to-${step.color.split(' ')[3]}/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                    <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
                      style={{
                        boxShadow: "0 0 40px rgba(251, 146, 60, 0.1)"
                      }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-xl opacity-50" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-sm text-white/90 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
                          {step.phase}
                        </h3>
                        <ul className="space-y-3">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                                <CheckCircle className="h-3 w-3 text-white group-hover/item:text-white/90 transition-colors duration-200" />
                              </div>
                              <span className="text-sm text-white/80 group-hover:item:text-white transition-colors duration-200">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Manufacturing Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-pink-600">
                  Manufacturing Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how manufacturing leaders have transformed their operations with ServiceNow solutions that deliver measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm px-4 py-2">
                          {study.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
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

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-l-4 border-red-500">
                          <Quote className="h-6 w-6 text-red-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Manufacturing Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-red-600 to-orange-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-red-200">
                          <div className="text-lg font-bold text-red-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-red-900 via-orange-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">
                  What Manufacturing Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-red-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from manufacturing executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Factory className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-red-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-8">
                          <Quote className="h-8 w-8 text-pink-400 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-4">
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
                            <span className="text-red-200 text-sm">({story.rating}.0/5.0)</span>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Manufacturing Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for the manufacturing industry.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-orange-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-4 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Manufacturing Operations?
                </h3>
                <p className="text-xs sm:text-lg md:text-xl text-orange-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join manufacturing leaders achieving 99.2% uptime. Get Industry 4.0 solutions that deliver $97M savings and operational excellence.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-sm sm:text-lg font-semibold bg-white text-orange-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Manufacturing Consultation
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
