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
  RefreshCw,        // ✅ Fixed: Replace Sync with RefreshCw
  CloudDownload,    // ✅ Fixed: Replace CloudArrowDown with CloudDownload
  Server,           // ✅ Fixed: Replace ServerStack with Server
  Search, 
  ChevronDown, 
  Truck, 
  Fuel, 
  Battery, 
  // WrenchIcon removed - use Wrench instead
  Package, 
  BarChart, 
  AlertTriangle, 
  ShoppingCart, 
  CreditCard, 
  TrendingDown
} from 'lucide-react';

// Case Studies Data
const caseStudies = [
  {
    client: "RetailMax Global",
    industry: "Retail Chain",
    challenge: "Customer experience fragmentation across 850 stores with inventory visibility issues costing $67M in lost sales annually",
    solution: "Omnichannel ServiceNow platform with real-time inventory management, customer service automation, and unified commerce experience",
    results: ["89% improvement in customer satisfaction", "67% faster inventory turnover", "$78M revenue increase", "99% order accuracy"],
    timeline: "16 weeks implementation",
    image: "/images/case-studies/retailmax-retail.jpg",
    testimonial: "ifBash transformed our retail operations from fragmented to unified. Customers now have seamless experiences whether shopping online, mobile, or in-store."
  },
  {
    client: "ConsumerBrand Corp",
    industry: "Consumer Packaged Goods",
    challenge: "Supply chain visibility gaps across 200 suppliers with demand forecasting issues leading to $45M in excess inventory",
    solution: "AI-powered supply chain optimization platform with demand sensing, supplier collaboration, and automated replenishment",
    results: ["78% improvement in demand accuracy", "56% reduction in excess inventory", "$52M cost savings", "94% supplier compliance"],
    timeline: "20 weeks rollout",
    image: "/images/case-studies/consumerbrand-cpg.jpg",
    testimonial: "The supply chain visibility and demand forecasting capabilities ifBash delivered transformed our inventory management from reactive to predictive."
  },
  {
    client: "FashionForward Brands",
    industry: "Fashion Retail",
    challenge: "Seasonal inventory management challenges with 40% markdowns and customer engagement issues across digital channels",
    solution: "Integrated retail platform with trend analytics, dynamic pricing, and personalized customer engagement workflows",
    results: ["91% reduction in markdowns", "145% increase in customer engagement", "$34M margin improvement", "87% inventory turnover"],
    timeline: "14 weeks deployment",
    image: "/images/case-studies/fashionforward-fashion.jpg",
    testimonial: "ifBash's retail platform helped us stay ahead of fashion trends and eliminate costly markdowns while creating personalized customer experiences."
  }
];

// Client Stories
const clientStories = [
  {
    name: "Sarah Mitchell",
    title: "VP of Retail Operations",
    company: "",
    story: "ifBash's omnichannel approach unified our customer experience across 850 stores. We now deliver consistent, personalized service whether customers shop online or in-store.",
    metric: "89% customer satisfaction improvement with $78M revenue increase",
    rating: 5,
    avatar: "/images/testimonials/sarah-mitchell-retail.jpg"
  },
  {
    name: "David Chen",
    title: "Chief Supply Chain Officer",
    company: "", 
    story: "The AI-powered demand forecasting ifBash implemented transformed our supply chain. We've eliminated excess inventory and optimized our entire distribution network.",
    metric: "78% demand accuracy improvement with $52M cost savings",
    rating: 5,
    avatar: "/images/testimonials/david-chen-supply.jpg"
  },
  {
    name: "Jessica Rodriguez",
    title: "Chief Marketing Officer",
    company: "",
    story: "The personalized customer engagement platform ifBash built helped us connect with customers in ways we never thought possible. Engagement is through the roof.",
    metric: "145% customer engagement increase with 91% markdown reduction",
    rating: 5,
    avatar: "/images/testimonials/jessica-rodriguez-fashion.jpg"
  },
  {
    name: "Michael Park",
    title: "Head of Digital Commerce",
    company: "",
    story: "Our e-commerce transformation with ifBash created seamless shopping experiences. Customer satisfaction and conversion rates have never been higher.",
    metric: "234% e-commerce conversion improvement",
    rating: 5,
    avatar: "/images/testimonials/michael-park-ecommerce.jpg"
  }
];

// Retail Solutions
const retailSolutions = [
  {
    icon: ShoppingCart,
    title: "Omnichannel Customer Experience",
    description: "Create seamless shopping experiences across all channels with unified customer profiles and consistent service delivery",
    benefits: ["Unified customer view", "Consistent experiences", "Cross-channel inventory"],
    gradient: "from-emerald-500 to-teal-500",
    useCases: ["Customer service", "Inventory visibility", "Order management"]
  },
  {
    icon: Package,
    title: "Supply Chain & Inventory Optimization", 
    description: "Optimize inventory levels and supply chain operations with AI-powered demand forecasting and automated replenishment",
    benefits: ["Demand forecasting", "Inventory optimization", "Supplier collaboration"],
    gradient: "from-teal-500 to-cyan-500",
    useCases: ["Inventory management", "Supplier coordination", "Demand planning"]
  },
  {
    icon: Store,
    title: "In-Store Operations Management",
    description: "Streamline store operations with workforce management, task automation, and real-time performance monitoring",
    benefits: ["Workforce optimization", "Task automation", "Performance tracking"],
    gradient: "from-cyan-500 to-blue-500",
    useCases: ["Staff scheduling", "Store operations", "Performance analytics"]
  },
  {
    icon: CreditCard,
    title: "E-commerce & Digital Commerce",
    description: "Accelerate digital sales with intelligent order management, customer service automation, and personalization",
    benefits: ["Order automation", "Personalization", "Customer service"],
    gradient: "from-blue-500 to-indigo-500",
    useCases: ["Online orders", "Customer support", "Personalized marketing"]
  },
  {
    icon: BarChart3,
    title: "Customer Analytics & Insights",
    description: "Leverage customer data for personalized experiences, predictive analytics, and targeted marketing campaigns",
    benefits: ["Customer insights", "Predictive analytics", "Targeted campaigns"],
    gradient: "from-indigo-500 to-purple-500",
    useCases: ["Customer segmentation", "Behavior analysis", "Campaign optimization"]
  },
  {
    icon: Shield,
    title: "Brand Protection & Compliance",
    description: "Protect brand reputation with compliance management, quality assurance, and risk monitoring across all channels",
    benefits: ["Compliance tracking", "Quality assurance", "Risk management"],
    gradient: "from-purple-500 to-pink-500",
    useCases: ["Regulatory compliance", "Quality control", "Brand monitoring"]
  }
];

// Retail Metrics
const retailMetrics = [
  {
    title: "Customer Satisfaction Score",
    description: "Average improvement in customer satisfaction across retail implementations",
    stat: "89% Satisfaction",
    icon: Heart
  },
  {
    title: "Inventory Turnover Rate",
    description: "Average improvement in inventory efficiency and turnover optimization",
    stat: "67% Faster",
    icon: Package
  },
  {
    title: "Revenue Growth Achievement", 
    description: "Average revenue increase through retail optimization initiatives",
    stat: "$78M Growth",
    icon: TrendingUp
  },
  {
    title: "Order Accuracy Rate",
    description: "Average improvement in order processing accuracy and fulfillment",
    stat: "99% Accuracy",
    icon: CheckCircle
  }
];

// Implementation Approach
const implementationApproach = [
  {
    phase: "Retail Assessment & Strategy",
    duration: "Week 1-3",
    activities: ["Customer journey mapping", "Inventory analysis", "Channel evaluation", "Technology assessment", "Process optimization"],
    deliverables: ["Retail digital strategy", "Omnichannel roadmap", "Technology blueprint", "Implementation plan"],
    icon: Search,
    color: "from-emerald-500 to-teal-500"
  },
  {
    phase: "Platform Configuration & Integration",
    duration: "Week 4-10",
    activities: ["ServiceNow retail setup", "Inventory system integration", "Customer service automation", "E-commerce integration", "Mobile app development"],
    deliverables: ["Configured retail platform", "Integrated systems", "Automated workflows", "Mobile applications"],
    icon: Settings,
    color: "from-teal-500 to-cyan-500"
  },
  {
    phase: "Testing & Optimization",
    duration: "Week 11-14",
    activities: ["System testing", "User acceptance testing", "Performance optimization", "Security validation", "Training delivery"],
    deliverables: ["Tested retail platform", "Performance reports", "Security certification", "Training materials"],
    icon: CheckCircle,
    color: "from-cyan-500 to-blue-500"
  },
  {
    phase: "Launch & Continuous Improvement",
    duration: "Week 15-18",
    activities: ["Store rollout", "Customer onboarding", "Performance monitoring", "Feedback integration", "Optimization cycles"],
    deliverables: ["Live retail platform", "Customer portal", "Analytics dashboard", "Improvement roadmap"],
    icon: Rocket,
    color: "from-blue-500 to-indigo-500"
  }
];

// FAQ Data
const faqs = [
  {
    question: "How does ServiceNow enable omnichannel retail experiences?",
    answer: "ServiceNow unifies all customer touchpoints into a single platform, providing consistent experiences across online, mobile, and in-store channels. Our solution includes unified customer profiles, cross-channel inventory visibility, seamless order management, and consistent service delivery regardless of how customers choose to engage with your brand."
  },
  {
    question: "What supply chain optimization capabilities does ServiceNow offer for retail?",
    answer: "ServiceNow provides comprehensive supply chain optimization including AI-powered demand forecasting, automated replenishment, supplier collaboration portals, real-time inventory tracking, and predictive analytics. Our platform helps retailers reduce excess inventory, improve demand accuracy, and optimize supplier relationships."
  },
  {
    question: "How can ServiceNow improve in-store operations for retail chains?",
    answer: "ServiceNow streamlines in-store operations through workforce management, task automation, real-time communication, performance monitoring, and mobile-first solutions. Store associates can access information quickly, managers can optimize staffing, and headquarters gains visibility into all store operations."
  },
  {
    question: "What e-commerce capabilities are included in ServiceNow retail solutions?",
    answer: "ServiceNow e-commerce solutions include intelligent order management, automated customer service, personalization engines, inventory synchronization, and seamless integration with existing e-commerce platforms. Our platform enables retailers to deliver exceptional digital shopping experiences while optimizing operations."
  },
  {
    question: "How does ServiceNow help with customer analytics and personalization?",
    answer: "ServiceNow provides advanced customer analytics including behavior tracking, predictive modeling, segmentation tools, and personalization engines. Retailers can create targeted marketing campaigns, optimize customer experiences, and increase engagement through data-driven insights."
  },
  {
    question: "What ROI can retailers expect from ServiceNow implementations?",
    answer: "Retail companies typically see 15-30% increases in customer satisfaction, 25-50% improvements in inventory turnover, and 20-40% revenue growth through enhanced customer experiences. Most retailers achieve positive ROI within 12-18 months through improved efficiency and customer engagement."
  },
  {
    question: "How does ServiceNow integrate with existing retail systems?",
    answer: "ServiceNow seamlessly integrates with point-of-sale systems, e-commerce platforms, inventory management systems, customer relationship management tools, and enterprise resource planning solutions. Our extensive API capabilities ensure smooth integration with existing retail technology stacks."
  },
  {
    question: "What support is provided for retail ServiceNow implementations?",
    answer: "We provide comprehensive retail expertise including industry-specific consultants, store operation training, customer service optimization, change management support, and ongoing platform optimization. Our team understands retail challenges and seasonal demands unique to the industry."
  }
];

export default function ConsumerGoodsRetail() {
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
          className="relative group min-w-[44px] min-h-[44px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with Retail Expert"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-[calc(100%+8px)] px-2 py-1 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-xs sm:text-sm text-gray-800 min-w-[90px] sm:min-w-[120px] text-center">
            Chat with Retail Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Retail Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-80" />
            
            {/* Shopping Cart Pattern */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
              <ShoppingCart className="w-full h-full text-white animate-pulse" />
            </div>
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8">
                {/* Trust Badges */}
                <div className="flex items-center justify-start gap-1 sm:gap-4 mb-2 sm:mb-8 flex-wrap px-1 sm:px-0">
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    ✓ 850 Stores Connected
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    ✓ 89% Satisfaction
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    ✓ $78M Growth
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    Consumer Goods & Retail
                  </span>
                  <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light">
                    Omnichannel{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>

                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-emerald-100 max-w-xs sm:max-w-2xl leading-relaxed">
                  Transform retail operations with <span className="font-semibold text-teal-300">omnichannel experiences</span>, intelligent inventory management, and personalized customer engagement. Connect <span className="font-semibold text-cyan-300">850+ stores</span> with <span className="font-semibold text-blue-300">$78M growth</span>.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 mt-2 sm:mt-8 px-1 sm:px-0">
                  <div className="group bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20 hover:from-emerald-600/30 hover:via-teal-600/30 hover:to-cyan-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">850</div>
                    <div className="text-xs sm:text-sm text-emerald-100">Stores</div>
                  </div>
                  <div className="group bg-gradient-to-br from-teal-600/20 via-cyan-600/20 to-blue-600/20 hover:from-teal-600/30 hover:via-cyan-600/30 hover:to-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">89%</div>
                    <div className="text-xs sm:text-sm text-teal-100">Satisfaction</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 group bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-indigo-600/20 hover:from-cyan-600/30 hover:via-blue-600/30 hover:to-indigo-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                    <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">$78M</div>
                    <div className="text-xs sm:text-sm text-cyan-100">Growth</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Transform Retail Experience
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
                  <button className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm">
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
                      Watch Retail Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual Content */}
              <div className="relative sm:h-[400px] lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl p-2 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-2 sm:mb-6">
                    <PlaceholderImage
                      title="Omnichannel Retail Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-emerald-600 to-teal-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">850</div>
                      <div className="text-xs text-emerald-200">Stores</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">89%</div>
                      <div className="text-xs text-teal-200">Satisfaction</div>
                    </div>
                  </div>
                  
                  {/* Floating Retail Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ShoppingCart className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Store className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="solutions-overview">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Retail Solutions
                </span>
                <br />
                <span className="text-gray-800">
                  That Drive Growth
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Transform every aspect of retail operations with intelligent solutions designed for the omnichannel commerce era.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 mb-8 sm:mb-16">
              {retailSolutions.map((solution, index) => (
                <div key={index} className="group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-300 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-2 sm:pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Retail Metrics Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
              {retailMetrics.map((metric, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{metric.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h3>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-100/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-100/30 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="case-studies">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600">
                  Retail Success
                </span>
                <br />
                <span className="text-gray-800">
                  Stories
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                See how retail leaders have transformed their operations with ServiceNow solutions that deliver measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-white rounded-3xl p-4 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2" data-animate id={`case-${index}`}>
                  <div className="grid lg:grid-cols-2 gap-4 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm px-4 py-2">
                          {study.industry}
                        </Badge>
                        <Badge className="ml-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm px-4 py-2">
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

                        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border-l-4 border-teal-500">
                          <Quote className="h-6 w-6 text-teal-500 mb-2" />
                          <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-2 sm:p-6 overflow-hidden">
                          <PlaceholderImage
                            title={`${study.client} Retail Solution`}
                            className="w-full h-full object-cover rounded-xl"
                            gradient="from-teal-600 to-emerald-600"
                          />
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-teal-200">
                          <div className="text-lg font-bold text-teal-600">{study.timeline.split(' ')[0]}</div>
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
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-teal-900 via-emerald-900 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-cyan-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="testimonials">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                  What Retail Leaders Say
                </span>
                <br />
                <span className="text-white">
                  About Our Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-teal-100 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Hear from retail executives who transformed their operations with our ServiceNow solutions.
              </p>
            </div>

            <div className="relative max-w-xs sm:max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {clientStories.map((story, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-12 border border-white/20">
                        <div className="flex items-center mb-4 sm:mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                            <ShoppingCart className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-teal-200">{story.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 sm:mb-6">
                          <Quote className="h-8 w-8 text-cyan-400 mb-4" />
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
                            <span className="text-teal-200 text-sm">({story.rating}.0/5.0)</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-cyan-300 font-semibold">{story.metric}</div>
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
                        ? 'bg-cyan-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-100/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-100/20 via-transparent to-transparent" />
          </div>

          <div className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-16" data-animate id="faq">
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Retail Solutions
                </span>
              </h2>
              <p className="text-xs sm:text-lg md:text-xl text-gray-700 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about ServiceNow solutions for the retail industry.
              </p>
            </div>

            <div className="max-w-xs sm:max-w-4xl mx-auto">
              <div className="space-y-1 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-emerald-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-emerald-600 transition-transform duration-200 flex-shrink-0 ${
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
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-4 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  Ready to Transform Your Retail Operations?
                </h3>
                <p className="text-lg md:text-xl text-emerald-100 mb-4 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed">
                  Join retail leaders connecting 850+ stores. Get omnichannel solutions that deliver 89% satisfaction and $78M growth.
                </p>
                <a href="/get-started"
                  className="inline-block group px-8 py-4 text-lg font-semibold bg-white text-emerald-600 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Schedule Your Retail Consultation
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
