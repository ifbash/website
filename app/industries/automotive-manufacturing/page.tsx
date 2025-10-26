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
  Truck,
  Fuel,
  Battery,
  WrenchIcon
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "AutoTech Motors",
    industry: "Automotive Manufacturing",
    challenge: "Connected vehicle data management across 2.3M vehicles with service scheduling inefficiencies costing $47M annually",
    solution: "ServiceNow-powered connected car management platform with predictive maintenance, automated service scheduling, and dealer integration",
    results: ["89% reduction in unplanned maintenance", "156% improvement in service efficiency", "$52M annual cost savings", "97% customer satisfaction"],
    timeline: "18 weeks implementation",
    image: "/images/case-studies/autotech-automotive.jpg",
    testimonial: "ifBash transformed our connected vehicle operations. We now predict maintenance needs before customers even know there's an issue, creating unprecedented service experiences."
  },
  {
    client: "ElectricDrive Corporation",
    industry: "Electric Vehicles",
    challenge: "EV battery management and charging network coordination across 150,000 vehicles with range anxiety and charging optimization issues",
    solution: "AI-powered ServiceNow platform for battery lifecycle management, charging network optimization, and predictive range analytics",
    results: ["94% improvement in battery performance tracking", "78% faster charging network management", "167% increase in customer confidence", "Zero battery failures"],
    timeline: "22 weeks rollout",
    image: "/images/case-studies/electricdrive-ev.jpg",
    testimonial: "Our EV customers now have complete confidence in their vehicles. The predictive battery management and charging optimization has revolutionized the EV experience."
  },
  {
    client: "GlobalAuto Supply Chain",
    industry: "Automotive Supply Chain",
    challenge: "Supply chain disruptions across 450 suppliers affecting production timelines with $23M in delays and inventory inefficiencies",
    solution: "ServiceNow supply chain visibility platform with real-time supplier monitoring, predictive analytics, and automated risk mitigation",
    results: ["91% reduction in supply chain disruptions", "234% improvement in supplier visibility", "$31M in cost avoidance", "98% on-time delivery"],
    timeline: "16 weeks deployment",
    image: "/images/case-studies/globalauto-supply.jpg",
    testimonial: "Supply chain visibility was transformed overnight. We now anticipate and prevent disruptions before they impact production, ensuring seamless automotive manufacturing."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Dr. Elena Rodriguez",
    title: "Chief Technology Officer",
    company: "AutoTech Motors",
    story: "ifBash's automotive expertise is unmatched. They understood our connected vehicle challenges and delivered a solution that's transforming how we serve 2.3 million customers.",
    metric: "89% reduction in unplanned maintenance with $52M annual savings",
    rating: 5,
    avatar: "/images/testimonials/elena-rodriguez-auto.jpg"
  },
  {
    name: "Marcus Thompson",
    title: "VP of Operations",
    company: "ElectricDrive Corporation", 
    story: "The EV-specific solutions ifBash created give us capabilities that are years ahead of the competition. Battery management and charging optimization are now our competitive advantages.",
    metric: "94% improvement in battery performance with 167% customer confidence increase",
    rating: 5,
    avatar: "/images/testimonials/marcus-thompson-ev.jpg"
  },
  {
    name: "Sarah Kim",
    title: "Supply Chain Director",
    company: "GlobalAuto Supply Chain",
    story: "Supply chain disruptions were costing us millions. ifBash's platform now gives us complete visibility and predictive capabilities across 450 suppliers.",
    metric: "91% reduction in supply disruptions with $31M cost avoidance",
    rating: 5,
    avatar: "/images/testimonials/sarah-kim-supply.jpg"
  },
  {
    name: "Robert Chen",
    title: "Head of Digital Innovation",
    company: "SmartAuto Solutions",
    story: "The autonomous vehicle support platform ifBash built handles complex scenarios we never thought possible. It's revolutionizing our R&D and testing processes.",
    metric: "78% faster autonomous system testing and validation",
    rating: 5,
    avatar: "/images/testimonials/robert-chen-smart.jpg"
  }
];

// Automotive Solutions
const automotiveSolutions = [
  {
    icon: Car,
    title: "Connected Vehicle Management",
    description: "Manage connected car data, over-the-air updates, and real-time vehicle health monitoring across your entire fleet",
    benefits: ["Real-time diagnostics", "OTA update management", "Predictive maintenance"],
    gradient: "from-blue-500 to-indigo-500",
    useCases: ["Vehicle health monitoring", "Remote diagnostics", "Software update deployment"]
  },
  {
    icon: Battery,
    title: "EV & Battery Management", 
    description: "Optimize electric vehicle performance with intelligent battery lifecycle management and charging network coordination",
    benefits: ["Battery health tracking", "Charging optimization", "Range prediction"],
    gradient: "from-indigo-500 to-purple-500",
    useCases: ["Battery performance analytics", "Charging station management", "Energy consumption optimization"]
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization",
    description: "Ensure seamless automotive supply chain operations with real-time visibility and predictive risk management",
    benefits: ["Supplier visibility", "Risk mitigation", "Inventory optimization"],
    gradient: "from-purple-500 to-pink-500",
    useCases: ["Supplier performance tracking", "Inventory management", "Logistics coordination"]
  },
  {
    icon: Wrench,
    title: "Service & Maintenance Operations",
    description: "Streamline service operations with automated scheduling, parts management, and technician workflow optimization",
    benefits: ["Automated scheduling", "Parts availability", "Technician efficiency"],
    gradient: "from-pink-500 to-rose-500",
    useCases: ["Service appointment scheduling", "Parts inventory management", "Warranty processing"]
  },
  {
    icon: Shield,
    title: "Automotive Cybersecurity",
    description: "Protect connected vehicles and infrastructure with comprehensive cybersecurity monitoring and threat response",
    benefits: ["Threat detection", "Incident response", "Security compliance"],
    gradient: "from-rose-500 to-orange-500",
    useCases: ["Vehicle security monitoring", "Cyber incident management", "Compliance reporting"]
  },
  {
    icon: Brain,
    title: "Autonomous Vehicle Support",
    description: "Enable autonomous vehicle development with advanced testing, validation, and deployment management systems",
    benefits: ["Testing automation", "Validation workflows", "Deployment tracking"],
    gradient: "from-orange-500 to-amber-500",
    useCases: ["AV testing management", "Safety validation", "Performance analytics"]
  }
];

// Automotive Metrics
const automotiveMetrics = [
  {
    title: "Vehicle Uptime Improvement",
    description: "Average improvement in vehicle availability and performance across automotive implementations",
    stat: "89% Uptime",
    icon: Car
  },
  {
    title: "Service Efficiency Gains",
    description: "Average improvement in automotive service and maintenance operational efficiency",
    stat: "156% Efficiency",
    icon: Wrench
  },
  {
    title: "Cost Reduction Achievement", 
    description: "Average cost savings achieved through automotive ServiceNow implementations",
    stat: "$52M Savings",
    icon: DollarSign
  },
  {
    title: "Customer Satisfaction Score",
    description: "Average customer satisfaction improvement in automotive service experiences",
    stat: "97% Satisfaction",
    icon: Heart
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Automotive Assessment & Planning",
    duration: "Week 1-3",
    activities: ["Vehicle ecosystem analysis", "Connected car data assessment", "Service process mapping", "Supplier integration planning", "Compliance requirements review"],
    deliverables: ["Automotive digital strategy", "Vehicle data architecture", "Service optimization plan", "Integration roadmap"],
    icon: Search,
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 4-10",
    activities: ["ServiceNow automotive module setup", "Vehicle data integration", "Service workflow automation", "Supplier system connectivity", "Mobile app development"],
    deliverables: ["Configured automotive platform", "Integrated vehicle systems", "Automated service workflows", "Mobile applications"],
    icon: Settings,
    color: "from-indigo-500 to-purple-500"
  },
  {
    phase: "Testing & Validation",
    duration: "Week 11-16",
    activities: ["Vehicle connectivity testing", "Service process validation", "Performance benchmarking", "Security testing", "User acceptance testing"],
    deliverables: ["Validated automotive platform", "Performance reports", "Security certifications", "User training materials"],
    icon: CheckCircle,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Deployment & Optimization",
    duration: "Week 17-20",
    activities: ["Production deployment", "Vehicle fleet integration", "Service team training", "Performance monitoring", "Continuous optimization"],
    deliverables: ["Live automotive platform", "Trained service teams", "Monitoring dashboards", "Optimization recommendations"],
    icon: Rocket,
    color: "from-pink-500 to-rose-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow support connected vehicle management?",
    answer: "ServiceNow provides comprehensive connected vehicle management through real-time data integration, predictive maintenance, over-the-air update management, and customer service automation. Our platform handles vehicle diagnostics, performance monitoring, and proactive service scheduling across your entire connected fleet."
  },
  {
    question: "What specific benefits does ServiceNow offer for electric vehicle operations?",
    answer: "For EV operations, ServiceNow delivers battery lifecycle management, charging network optimization, range prediction analytics, energy consumption tracking, and predictive maintenance. We help optimize battery performance, manage charging infrastructure, and provide customers with confidence in their EV experience."
  },
  {
    question: "How can ServiceNow improve automotive supply chain operations?",
    answer: "ServiceNow transforms automotive supply chains through real-time supplier visibility, predictive risk analytics, automated inventory management, and intelligent logistics coordination. Our platform helps prevent disruptions, optimize inventory levels, and ensure just-in-time manufacturing efficiency."
  },
  {
    question: "What automotive cybersecurity capabilities does ServiceNow provide?",
    answer: "ServiceNow offers comprehensive automotive cybersecurity including connected vehicle threat monitoring, security incident response, compliance management, and vulnerability assessment. We protect both vehicle systems and manufacturing infrastructure from cyber threats while maintaining regulatory compliance."
  },
  {
    question: "How does ServiceNow support autonomous vehicle development?",
    answer: "For autonomous vehicles, ServiceNow provides testing management, safety validation workflows, performance analytics, deployment tracking, and regulatory compliance support. Our platform streamlines AV development processes while ensuring safety and quality standards."
  },
  {
    question: "What ROI can automotive companies expect from ServiceNow implementations?",
    answer: "Automotive companies typically see 25-40% cost reductions, 50-80% improvements in operational efficiency, and 90%+ customer satisfaction scores. Specific ROI depends on implementation scope, but most clients achieve positive returns within 12-18 months."
  },
  {
    question: "How does ServiceNow integrate with existing automotive manufacturing systems?",
    answer: "ServiceNow integrates seamlessly with automotive ERP systems, manufacturing execution systems (MES), quality management systems, and supplier platforms. Our extensive API capabilities and pre-built connectors ensure smooth integration with existing automotive technology stacks."
  },
  {
    question: "What support is provided for automotive ServiceNow implementations?",
    answer: "We provide specialized automotive expertise including industry-specific consultants, 24/7 support, automotive compliance guidance, training programs, and ongoing optimization services. Our team understands automotive regulations, processes, and technology requirements."
  }
];

export default function AutomotiveIndustry() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Automotive Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Auto Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Automotive Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Car Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <Car className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    ✓ 2.3M Vehicles Managed
                  </Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                    ✓ 89% Uptime
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    ✓ $52M Savings
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Automotive Industry
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Connected Vehicle{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform automotive operations with <span className="font-semibold text-indigo-300">connected vehicle management</span>, predictive maintenance, and intelligent service operations. Manage <span className="font-semibold text-purple-300">2.3M+ vehicles</span> with <span className="font-semibold text-pink-300">89% uptime</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 hover:from-blue-600/30 hover:via-indigo-600/30 hover:to-purple-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">2.3M</div>
                    <div className="text-xs sm:text-sm text-blue-100">Vehicles</div>
                  </div>
                  <div className="group bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">89%</div>
                    <div className="text-xs sm:text-sm text-indigo-100">Uptime</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-rose-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">$52M</div>
                    <div className="text-xs sm:text-sm text-purple-100">Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Automotive Operations
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-purple-400 group-hover:text-purple-300" />
                      Watch Automotive Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Connected Vehicle Management Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-blue-600 to-indigo-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">2.3M</div>
                      <div className="text-xs text-blue-200">Vehicles</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">89%</div>
                      <div className="text-xs text-indigo-200">Uptime</div>
                    </div>
                  </div>
                  
                  {/* Floating Automotive Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Car className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Battery className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Automotive Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Drive Innovation
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of automotive operations with intelligent solutions designed for the connected vehicle era.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {automotiveSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Automotive Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {automotiveMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="w-16 h-16 mx-auto mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1 sm:mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
        <section className="py-20 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  Our Implementation
                </span>
                <span className="text-white"> Methodology</span>
              </h2>
              <p className="text-gray-400 text-lg">
                A proven four-phase approach that ensures successful ServiceNow implementation with minimal risk and maximum value realization.
              </p>
            </div>

            <div className="relative">
              {/* Journey Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform -translate-y-1/2 opacity-50" />
              
              {/* Journey Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {implementationApproach.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r ${
                      `from-${step.color.split(' ')[1]}/20 to-${step.color.split(' ')[3]}/20`
                    } rounded-full blur-2xl group-hover:scale-150 transition-all duration-500 opacity-80`} />
                    <div className={`relative h-full bg-gradient-to-br ${step.color} p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-white/20 flex flex-col group-hover:border-white/30 shadow-lg hover:shadow-2xl`}
                      style={{
                        boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)"
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keep existing Call to Action */}
            <div className="text-center mt-8 sm:mt-16">
              <a href="/get-started"
                className="inline-block group px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105"
                style={{
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Start Your Implementation Journey
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
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
                  Automotive Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how automotive leaders have transformed their operations with ServiceNow solutions that deliver measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-2">
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

                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border-l-4 border-indigo-500">
                          <Quote className="h-6 w-6 text-indigo-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-4 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Automotive Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-indigo-600 to-blue-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-indigo-200">
                          <div className="text-lg font-bold text-indigo-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  What Automotive Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-indigo-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from automotive executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <Car className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-indigo-200">{story.title}, {story.company}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
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
                            <span className="text-indigo-200 text-sm">({story.rating}.0/5.0)</span>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full max-w-[98vw] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Automotive Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for the automotive industry.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-blue-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-4 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  Ready to Transform Your Automotive Operations?
                </h3>
                <p className="text-lg md:text-xl text-blue-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto">
                  Join automotive leaders managing 2.3M+ connected vehicles. Get intelligent solutions that deliver 89% uptime and $52M savings.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Automotive Consultation
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
