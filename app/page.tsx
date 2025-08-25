'use client';
import React, { useState, useEffect } from 'react';
import { Header } from "@/components/header";
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
  LinkedinIcon,
  Twitter,
  Facebook,
  Youtube,
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';

// Enhanced testimonials with specific metrics
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, TechFlow Industries",
    company: "Fortune 500 Manufacturing",
    content: "ifBash delivered our ServiceNow implementation in just 67 days - 23 days ahead of schedule. Within 6 months, we reduced incident resolution time by 78% and saved $2.3M in operational costs. Their expertise made all the difference.",
    rating: 5,
    metrics: "78% faster resolution • $2.3M saved • 67-day implementation",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    name: "Michael Chen",
    title: "VP of Operations, GlobalTech",
    company: "Technology Provider",
    content: "The CRM integration they delivered exceeded our expectations. We saw a 200% increase in lead conversion rates within the first quarter, plus their approach meant no surprise costs. ROI achieved in just 4 months.",
    rating: 5,
    metrics: "200% lead conversion increase • 4-month ROI • Fixed pricing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Digital Transformation",
    company: "Healthcare Network",
    content: "Their expertise in ServiceNow AI capabilities helped us achieve complete digital transformation. Patient experience scores improved by 85% and we're now processing 300% more cases with the same staff.",
    rating: 5,
    metrics: "85% patient satisfaction • 300% case processing • Same staff",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

// Enhanced services with measurable outcomes
const services = [
  {
    icon: Rocket,
    title: "Rapid ServiceNow Implementation",
    description: "Launch production-ready ServiceNow in 90 days or less with our proven methodology. Pre-built industry templates and automated testing accelerate your time-to-value.",
    features: [
      "Industry-specific workflows (200+)",
      "Automated testing & deployment",
      "Risk mitigation strategies",
      "Average delivery: 73 days"
    ],
    gradient: "from-violet-600 to-purple-600",
    metric: "Avg: 73 days"
  },
  {
    icon: Brain,
    title: "AI-First ServiceNow Platform",
    description: "Deploy with cutting-edge AI capabilities built-in. Predictive analytics, intelligent automation, and machine learning models trained on 1,500+ implementations.",
    features: [
      "Pre-configured ML models",
      "Predictive incident management", 
      "Intelligent case routing",
      "Auto-optimization algorithms"
    ],
    gradient: "from-blue-600 to-cyan-600",
    metric: "65% faster setup"
  },
  {
    icon: Target,
    title: "Measurable ROI Tracking",
    description: "Real-time ROI tracking dashboard with measurable results. Our clients typically see 340% ROI within the first year through intelligent automation and process optimization.",
    features: [
      "ROI tracking dashboard",
      "Monthly performance reviews",
      "KPI monitoring & reporting",
      "Continuous optimization"
    ],
    gradient: "from-cyan-600 to-teal-600",
    metric: "Avg ROI: 340%"
  }
];

const capabilities = [
  {
    icon: Bot,
    title: "ServiceNow AI Solutions",
    description: "Next-gen automation with predictive intelligence",
    gradient: "from-violet-600 to-purple-600",
    features: ["Process Mining", "Predictive Analytics", "Virtual Agents"]
  },
  {
    icon: Users,
    title: "CRM Excellence", 
    description: "Unified customer experience platform",
    gradient: "from-blue-600 to-cyan-600",
    features: ["Case Management", "Service Catalog", "Knowledge Base"]
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Intelligent workflow orchestration",
    gradient: "from-cyan-600 to-teal-600",
    features: ["Flow Designer", "Integration Hub", "Business Rules"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Comprehensive security operations",
    gradient: "from-purple-600 to-blue-600",
    features: ["GRC", "SecOps", "Risk Management"]
  }
];

const stats = [
  {
    value: "95%",
    label: "Faster Resolution",
    description: "AI-powered automation reduces incident resolution time",
    icon: Zap
  },
  {
    value: "60%",
    label: "Cost Reduction", 
    description: "Streamlined processes cut operational costs",
    icon: DollarSign
  },
  {
    value: "24/7",
    label: "Expert Support",
    description: "Round-the-clock intelligent assistance",
    icon: Bot
  },
  {
    value: "340%",
    label: "Average ROI",
    description: "Typical return on ServiceNow investment",
    icon: TrendingUp
  }
];

const industries = [
  { 
    icon: Car, 
    name: "Automotive",
    count: "120+ Projects",
    description: "Accelerate digital transformation in automotive with intelligent workflows",
    gradient: "from-violet-600 to-purple-600",
    link: "/industries/automotive",
    image: "/images/industries/automotive.jpg"
  },
  { 
    icon: Factory, 
    name: "Manufacturing",
    count: "180+ Projects",
    description: "Optimize production processes with smart automation solutions",
    gradient: "from-blue-600 to-cyan-600",
    link: "/industries/manufacturing",
    image: "/images/industries/manufacturing.jpg"
  },
  { 
    icon: ShoppingBag, 
    name: "Consumer Goods",
    count: "150+ Projects",
    description: "Transform consumer experience with seamless service delivery",
    gradient: "from-cyan-600 to-teal-600",
    link: "/industries/consumer-goods",
    image: "/images/industries/consumer-goods.jpg"
  },
  { 
    icon: MonitorSmartphone, 
    name: "Technology Providers",
    count: "200+ Projects",
    description: "Empower tech companies with next-gen ServiceNow solutions",
    gradient: "from-purple-600 to-blue-600",
    link: "/industries/technology",
    image: "/images/industries/technology.jpg"
  },
  { 
    icon: Globe, 
    name: "Public Sector",
    count: "140+ Projects",
    description: "Modernize government services with secure digital solutions",
    gradient: "from-blue-600 to-indigo-600",
    link: "/industries/public-sector",
    image: "/images/industries/public-sector.jpg"
  },
  { 
    icon: HeartPulse, 
    name: "Healthcare",
    count: "170+ Projects",
    description: "Enhance patient care with intelligent service management",
    gradient: "from-indigo-600 to-violet-600",
    link: "/industries/healthcare",
    image: "/images/industries/healthcare.jpg"
  },
  { 
    icon: Microscope, 
    name: "Life Sciences",
    count: "130+ Projects",
    description: "Accelerate research and development with automated workflows",
    gradient: "from-rose-600 to-pink-600",
    link: "/industries/life-sciences",
    image: "/images/industries/life-sciences.jpg"
  },
  { 
    icon: Store, 
    name: "Retail",
    count: "160+ Projects",
    description: "Deliver exceptional retail experiences with unified platforms",
    gradient: "from-amber-600 to-yellow-600",
    link: "/industries/retail",
    image: "/images/industries/retail.jpg"
  },
  { 
    icon: Phone, 
    name: "Telecom",
    count: "145+ Projects",
    description: "Transform telecommunications with digital service excellence",
    gradient: "from-emerald-600 to-green-600",
    link: "/industries/telecom",
    image: "/images/industries/telecom.jpg"
  },
  { 
    icon: Zap, 
    name: "Energy & Utilities",
    count: "135+ Projects",
    description: "Modernize utility operations with intelligent automation",
    gradient: "from-fuchsia-600 to-pink-600",
    link: "/industries/energy-utilities",
    image: "/images/industries/energy-utilities.jpg"
  }
];

export default function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    implementations: 0,
    satisfaction: 0,
    years: 0
  });

  useEffect(() => {
    const targets = {
      clients: 500,
      implementations: 1500,
      satisfaction: 99,
      years: 8
    };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const intervals = {};

    Object.keys(targets).forEach((key) => {
      const statKey = key;
      const target = targets[statKey];
      const increment = target / steps;
      let current = 0;

      intervals[statKey] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          if (intervals[statKey]) {
            clearInterval(intervals[statKey]);
          }
        }
        setAnimatedStats(prev => ({ ...prev, [statKey]: Math.floor(current) }));
      }, stepTime);
    });

    return () => {
      Object.values(intervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
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
      <Header />
      
      {/* Fixed Social Links - Left Side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a
          href="https://linkedin.com/company/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on LinkedIn"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Follow on LinkedIn
          </span>
        </a>

        <a
          href="https://twitter.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on Twitter"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <Twitter className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Follow on Twitter
          </span>
        </a>

        <a
          href="https://facebook.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on Facebook"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <Facebook className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Follow on Facebook
          </span>
        </a>

        <a
          href="https://youtube.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Watch ifBash on YouTube"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Watch on YouTube
          </span>
        </a>
      </div>

      {/* Fixed Chat Button - Right Side */}
      <div className="fixed right-4 bottom-6 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Chat with ServiceNow Expert"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-16 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Chat with Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-purple-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-white">
        {/* SEO Meta Tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ifBash - ServiceNow Implementation Specialists",
              "url": "https://ifbash.com",
              "description": "ServiceNow implementation specialists with 1,500+ successful projects. Proven expertise in AI-powered solutions, CRM excellence, and digital transformation for enterprises worldwide.",
              "serviceArea": "Global",
              "expertise": ["ServiceNow Implementation", "CRM Solutions", "Digital Transformation", "Process Automation"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            })
          }}
        />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" 
              style={{
                backgroundImage: `url('/images/grid-pattern.svg')`,
                backgroundSize: '30px 30px'
              }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 text-white border-transparent">
                    ✓ 1,500+ ServiceNow Successes
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white border-transparent">
                    ✓ AI & CRM Transformation Experts
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-green-400 text-white border-transparent">
                    ✓ Enterprise Grade Delivery
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                  Transform with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">
                    ServiceNow
                  </span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl mt-4">
                    Smarter with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 font-semibold">
                      AI
                    </span>
                    , Stronger with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
                      CRM
                    </span>
                  </span>
                </h1>

                <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                  Unlock ServiceNow's new era—where <span className="font-semibold text-cyan-300">AI-driven automation</span> and <span className="font-semibold text-blue-300">CRM excellence</span> are at the core. Accelerate transformation, deliver brilliant customer experiences, and empower your enterprise with solutions designed for tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 relative"
                    style={{
                      background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)",
                      boxShadow: "0 20px 40px rgba(109, 40, 217, 0.4)"
                    }}
                  >
                    Start Your AI+CRM Journey
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                  
                  <button className="group px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Play className="inline-block mr-2 h-5 w-5 group-hover:text-purple-400" />
                    Watch Platform Demo
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-600/30 rounded-lg flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-300" />
                    <span className="text-sm">Certified Professionals</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-cyan-700 via-blue-500 to-violet-400/30 rounded-lg flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-300" />
                    <span className="text-sm">Proven Track Record</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-blue-700 via-purple-600 to-cyan-500/20 rounded-lg flex items-center space-x-2">
                    <Users className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm">Global Delivery</span>
                  </div>
                </div>
              </div>

              {/* 3D Platform Visualization */}
              <div className="relative lg:h-[600px] mt-12 lg:mt-0">
                {/* Main Platform Visual */}
                <div className="relative z-20 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-3xl p-8 backdrop-blur-xl border border-white/20">
                  <div className="aspect-video w-full rounded-xl overflow-hidden">
                    <PlaceholderImage
                      title="ServiceNow AI+CRM Platform Dashboard"
                      className="w-full h-full"
                      gradient="from-violet-600 to-blue-600"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 animate-float">
                    <PlaceholderImage
                      title="AI Analytics"
                      className="w-full h-full"
                      gradient="from-purple-600 to-pink-600"
                    />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 animate-float delay-150">
                    <PlaceholderImage
                      title="CRM Insights"
                      className="w-full h-full"
                      gradient="from-blue-600 to-cyan-600"
                    />
                  </div>
                </div>

                {/* Background Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <ChevronRight className="h-8 w-8 rotate-90" />
          </div>
        </section>

        {/* Key Benefits Section - Gradient Themed */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Why Global Leaders Choose Our ServiceNow Expertise
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Proven methodology from 1,500+ implementations with measurable results and transparent pricing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <Rocket className="h-10 w-10 mb-4 mx-auto text-white" />
                <h3 className="text-2xl font-bold mb-2">10x Faster Implementation</h3>
                <p className="text-blue-100">Launch ServiceNow AI+CRM in record time with our automation-driven project accelerators.</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-600 to-green-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <Brain className="h-10 w-10 mb-4 mx-auto text-white" />
                <h3 className="text-2xl font-bold mb-2">AI-First Approach</h3>
                <p className="text-cyan-100">Leverage built-in ServiceNow AI features and workflows trained on real enterprise data.</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-600 via-teal-500 to-emerald-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <Target className="h-10 w-10 mb-4 mx-auto text-white" />
                <h3 className="text-2xl font-bold mb-2">Guaranteed Measurable ROI</h3>
                <p className="text-teal-100">Average 340% ROI within your first year through digital process optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section - Gradient Stats */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Proven Results That Matter
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                Join forward-thinking organizations that trust our ServiceNow expertise to drive measurable transformation
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-500 to-pink-600 border border-violet-400/20 shadow-xl">
                <Zap className="h-8 w-8 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-lg font-semibold text-purple-100 mb-2">Faster Resolution</div>
                <p className="text-purple-100 text-sm">AI-powered automation reduces incident resolution time</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 border border-blue-400/20 shadow-xl">
                <DollarSign className="h-8 w-8 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Cost Reduction</div>
                <p className="text-blue-100 text-sm">Streamlined processes cut operational costs</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-600 via-green-500 to-emerald-600 border border-cyan-400/20 shadow-xl">
                <Bot className="h-8 w-8 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-lg font-semibold text-cyan-100 mb-2">Expert Support</div>
                <p className="text-cyan-100 text-sm">Round-the-clock intelligent assistance</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-600 via-teal-500 to-blue-600 border border-green-400/20 shadow-xl">
                <TrendingUp className="h-8 w-8 mx-auto mb-4 text-white" />
                <div className="text-3xl font-bold text-white mb-2">340%</div>
                <div className="text-lg font-semibold text-green-100 mb-2">Average ROI</div>
                <p className="text-green-100 text-sm">Typical return on ServiceNow investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section - Enhanced Gradients */}
        <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
                <Zap className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">ServiceNow Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Transform Your Enterprise with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  ServiceNow Intelligence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of ServiceNow to drive innovation, enhance customer experiences, and accelerate digital transformation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-100 to-blue-100 px-2 py-1 rounded-full text-xs font-semibold text-purple-700 shadow-sm">
                    {service.metric}
                  </div>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-left">
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                          index === 0 ? 'text-violet-500' :
                          index === 1 ? 'text-blue-500' :
                          'text-cyan-500'
                        }`} />
                        <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats - Gradient Background */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200 shadow-sm">
                <Zap className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-4 text-violet-600" />
                <div className="text-2xl md:text-3xl font-bold text-violet-800 mb-2">85%</div>
                <div className="text-xs md:text-sm text-violet-700">Efficiency Increase</div>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 shadow-sm">
                <Shield className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-4 text-blue-600" />
                <div className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">24/7</div>
                <div className="text-xs md:text-sm text-blue-700">Expert Support</div>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 border border-cyan-200 shadow-sm">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-4 text-cyan-600" />
                <div className="text-2xl md:text-3xl font-bold text-cyan-800 mb-2">1,500+</div>
                <div className="text-xs md:text-sm text-cyan-700">Projects Delivered</div>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 shadow-sm">
                <Heart className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-4 text-green-600" />
                <div className="text-2xl md:text-3xl font-bold text-green-800 mb-2">99%</div>
                <div className="text-xs md:text-sm text-green-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* ServiceNow AI Innovation Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  ServiceNow AI Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Step into the future with ServiceNow's cutting-edge AI capabilities. From predictive analytics 
                to intelligent automation, we help you harness AI to transform every aspect of your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 md:space-y-8">
                <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 hover:from-violet-600/30 hover:to-purple-600/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Predictive Intelligence</h4>
                      <p className="text-blue-200 leading-relaxed text-sm md:text-base">
                        Anticipate issues before they occur with ML-powered predictive analytics that learn from your data patterns and 1,500+ implementations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Virtual Agents</h4>
                      <p className="text-blue-200 leading-relaxed text-sm md:text-base">
                        Deploy intelligent virtual agents with pre-trained industry knowledge that provide instant, personalized support across all channels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-cyan-600/20 to-teal-600/20 backdrop-blur-sm border border-white/20 hover:from-cyan-600/30 hover:to-teal-600/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Intelligent Automation</h4>
                      <p className="text-blue-200 leading-relaxed text-sm md:text-base">
                        Automate complex workflows with AI that adapts and learns, reducing manual tasks by up to 80% with built-in optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                        <Cpu className="h-10 w-10 md:h-12 md:w-12 text-white animate-pulse" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">AI-Powered Platform</h3>
                      <p className="text-blue-200 text-sm md:text-base">Next-generation intelligence</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center animate-bounce">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-bounce delay-1000">
                  <Rocket className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                Explore AI Solutions
                <ArrowRight className="inline-block ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CRM Excellence Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                    ServiceNow CRM
                  </span>
                  <br />
                  <span className="text-gray-800">That Drives Results</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform customer relationships with our advanced ServiceNow CRM solutions. 
                  Create meaningful connections, streamline sales processes, and deliver exceptional customer experiences with proven methodologies.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">360° Customer Intelligence</h4>
                      <p className="text-gray-600 text-sm md:text-base">Complete customer journey mapping with AI-powered insights, predictive analytics, and automated lead scoring.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">Omnichannel Excellence</h4>
                      <p className="text-gray-600 text-sm md:text-base">Seamless customer interactions across all touchpoints with unified communication and real-time dashboard.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">Sales Automation</h4>
                      <p className="text-gray-600 text-sm md:text-base">Intelligent lead scoring, automated workflows, and personalized engagement strategies with measurable ROI tracking.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)"
                    }}
                  >
                    Explore CRM Solutions
                  </button>
                  <button className="px-6 py-3 text-purple-600 font-semibold border-2 border-purple-200 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    View Success Stories
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* CRM Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                    <h3 className="text-base md:text-lg font-semibold">ServiceNow CRM Dashboard</h3>
                    <p className="text-purple-100 text-sm">Real-time ROI tracking</p>
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-4">
                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm md:text-base">Lead Conversion</p>
                          <p className="text-xs md:text-sm text-gray-600">This quarter</p>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">+47%</div>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm md:text-base">Customer Satisfaction</p>
                          <p className="text-xs md:text-sm text-gray-600">Average score</p>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">4.8/5</div>
                    </div>

                    <div className="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                          <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm md:text-base">Revenue Growth</p>
                          <p className="text-xs md:text-sm text-gray-600">Year over year</p>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">+156%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-xl animate-pulse">
                  24/7
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-xl animate-pulse">
                  AI+
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
                <Globe className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Industry Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Transforming
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Every Industry
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Deep domain expertise combined with ServiceNow excellence to deliver industry-specific transformations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Left side - Interactive Industry Showcase */}
              <div className="relative h-[600px] bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                
                {/* Industry Stats Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-violet-400/20">
                        <div className="text-3xl font-bold text-white">1,500+</div>
                        <div className="text-purple-200">Projects Delivered</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/20">
                        <div className="text-3xl font-bold text-white">10+</div>
                        <div className="text-blue-200">Industries Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Industry Cards */}
              <div className="space-y-4 overflow-y-auto max-h-[600px] pr-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-200">
                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href={industry.link}
                    className="group flex bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gradient-to-br ${industry.gradient} p-4 md:p-6 flex items-center justify-center`}>
                      <industry.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-600">
                          {industry.name}
                        </h3>
                        <span className="text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 px-2 py-1 rounded-full text-purple-700">
                          {industry.count}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{industry.description}</p>
                    </div>
                    
                    <div className="w-10 md:w-12 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Industry Expertise Highlights - Gradient Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-6 shadow-sm border border-purple-200">
                <div className="flex items-center space-x-3 text-purple-700 mb-4">
                  <Shield className="h-6 w-6" />
                  <span className="font-semibold">Regulatory Compliance</span>
                </div>
                <p className="text-sm text-purple-600">Industry-specific compliance and security standards</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 shadow-sm border border-blue-200">
                <div className="flex items-center space-x-3 text-blue-700 mb-4">
                  <Users className="h-6 w-6" />
                  <span className="font-semibold">Domain Expertise</span>
                </div>
                <p className="text-sm text-blue-600">Specialized teams for each industry vertical</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl p-6 shadow-sm border border-cyan-200">
                <div className="flex items-center space-x-3 text-cyan-700 mb-4">
                  <Target className="h-6 w-6" />
                  <span className="font-semibold">Industry Solutions</span>
                </div>
                <p className="text-sm text-cyan-600">Custom-built solutions for specific industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials - Enhanced with Gradients */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped organizations achieve remarkable transformations with ServiceNow
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-xl">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-purple-300" />
                
                <div className="text-center mb-8">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-purple-600 font-semibold">{testimonials[currentTestimonial].title}</p>
                      <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-1 mt-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                        : 'bg-gray-300 hover:bg-purple-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources & Learning Center */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Knowledge Hub
                </span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead with the latest ServiceNow insights, best practices, and industry trends
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/20 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Learning Center</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Comprehensive guides, tutorials, and best practices for ServiceNow implementation and optimization.
                </p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
                  Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Webinars & Demos</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Live demonstrations, expert webinars, and interactive sessions on ServiceNow AI and automation.
                </p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
                  Join Sessions <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-white/20 hover:from-green-600/30 hover:to-teal-600/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">White Papers</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  In-depth research, case studies, and strategic insights on digital transformation and AI adoption.
                </p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
                  Download Now <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ServiceNow Excellence Section - Gradient Cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  ServiceNow Excellence
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Deep ServiceNow expertise with certified professionals and proven track record
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 border border-purple-200 shadow-sm">
                <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-base md:text-lg font-bold text-purple-800 mb-2">Expert Solutions</h3>
                <p className="text-xs md:text-sm text-purple-600">Advanced ServiceNow implementation expertise</p>
              </div>

              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 shadow-sm">
                <Shield className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-base md:text-lg font-bold text-blue-800 mb-2">Certified Team</h3>
                <p className="text-xs md:text-sm text-blue-600">ServiceNow certified professionals</p>
              </div>

              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-100 border border-cyan-200 shadow-sm">
                <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-cyan-600" />
                <h3 className="text-base md:text-lg font-bold text-cyan-800 mb-2">Specializations</h3>
                <p className="text-xs md:text-sm text-cyan-600">Multiple ServiceNow product specializations</p>
              </div>

              <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 shadow-sm">
                <Globe className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-base md:text-lg font-bold text-green-800 mb-2">Global Reach</h3>
                <p className="text-xs md:text-sm text-green-600">Serving clients across 25+ countries</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">Join hundreds of satisfied clients who trust ifBash for their ServiceNow journey</p>
              <button 
                className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)"
                }}
              >
                Start Your Project
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section 
          className="py-16 md:py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)"
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your ServiceNow AI+CRM journey today. Our experts are ready to help you unlock 
              the full potential of intelligent automation and exceptional customer experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                className="px-10 py-5 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
              >
                <Phone className="inline-block mr-2 h-5 w-5" />
                Schedule Free Consultation
              </button>
              
              <button className="px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Mail className="inline-block mr-2 h-5 w-5" />
                Get Expert Assessment
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Timer className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200 text-sm md:text-base">Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200 text-sm md:text-base">Expert guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200 text-sm md:text-base">Proven results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Gradient Enhanced */}
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)"
                    }}
                  >
                    <span className="text-white font-bold text-lg">IB</span>
                  </div>
                  <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    ifBash
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your trusted ServiceNow implementation specialist for AI-powered digital transformation and exceptional CRM solutions.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">t</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Services
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">AI & Automation</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">CRM Solutions</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">ITSM Implementation</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Managed Services</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Resources
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Learning Center</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Case Studies</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">White Papers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Webinars</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  Contact
                </h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <span>+1-800-IFBASH</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span>hello@ifbash.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <span>Global Offices</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 ifBash. All rights reserved. | ServiceNow Implementation Specialists | 
                <span className="text-cyan-400 mx-2">Privacy Policy</span> | 
                <span className="text-cyan-400 mx-2">Terms of Service</span>
              </p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};
