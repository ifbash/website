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
  Cog
} from 'lucide-react';
import Image from 'next/image';

// Move all data arrays outside the component
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO, TechFlow Industries",
    company: "Fortune 500 Manufacturing",
    content: "ifBash transformed our ServiceNow implementation. Their AI-driven approach reduced our incident resolution time by 75% and improved employee satisfaction dramatically.",
    rating: 5,
    image: "/images/testimonials/sarah.jpg" // Update with actual image path
  },
  {
    name: "Michael Chen",
    title: "VP of Operations, GlobalTech",
    company: "Technology Provider",
    content: "The CRM integration they delivered exceeded our expectations. We saw a 200% increase in lead conversion rates within the first quarter.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Digital Transformation",
    company: "Healthcare Network",
    content: "Their expertise in ServiceNow AI capabilities helped us achieve complete digital transformation. Patient experience scores improved by 85%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const services = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Transform your operations with ServiceNow's AI capabilities. Leverage predictive analytics, intelligent automation, and machine learning to drive smarter decisions.",
    features: [
      "Predictive Analytics & Insights",
      "Intelligent Workflow Automation",
      "ML-Powered Decision Support",
      "Natural Language Processing"
    ],
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Users,
    title: "Customer Experience Excellence",
    description: "Deliver exceptional customer experiences with ServiceNow's integrated CRM solutions. Create personalized journeys and drive engagement across all channels.",
    features: [
      "360° Customer View",
      "Intelligent Case Routing",
      "Automated Service Resolution",
      "Real-time Analytics Dashboard"
    ],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: Workflow,
    title: "Enterprise Transformation",
    description: "Modernize your enterprise with end-to-end digital transformation. Streamline processes, automate workflows, and accelerate innovation.",
    features: [
      "Process Optimization",
      "Workflow Automation",
      "Integration Hub",
      "Low-Code Development"
    ],
    gradient: "from-cyan-600 to-teal-600"
  }
];

const capabilities = [
  {
    icon: Bot,
    title: "ServiceNow AI",
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

// Create a stats array for reusability
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
    label: "AI Support",
    description: "Round-the-clock intelligent assistance",
    icon: Bot
  },
  {
    value: "300%",
    label: "ROI Increase",
    description: "Average return on ServiceNow investment",
    icon: TrendingUp
  }
];

const industries = [
  { 
    icon: Building, 
    name: "Financial Services", 
    count: "150+ Projects",
    description: "Transform banking and financial operations with AI-driven ServiceNow solutions",
    gradient: "from-violet-600 to-purple-600"
  },
  { 
    icon: HeartPulse, 
    name: "Healthcare", 
    count: "200+ Projects",
    description: "Enhance patient care and streamline healthcare delivery systems",
    gradient: "from-blue-600 to-cyan-600"
  },
  { 
    icon: MonitorSmartphone, 
    name: "Technology", 
    count: "180+ Projects",
    description: "Accelerate innovation with cutting-edge ServiceNow implementations",
    gradient: "from-cyan-600 to-teal-600"
  },
  { 
    icon: Factory, 
    name: "Manufacturing", 
    count: "125+ Projects",
    description: "Optimize production workflows and enhance operational efficiency",
    gradient: "from-purple-600 to-blue-600"
  },
  { 
    icon: Globe, 
    name: "Public Sector", 
    count: "100+ Projects",
    description: "Modernize government services with secure digital transformation",
    gradient: "from-blue-600 to-indigo-600"
  },
  { 
    icon: Briefcase, 
    name: "Professional Services", 
    count: "175+ Projects",
    description: "Deliver exceptional client experiences with integrated solutions",
    gradient: "from-indigo-600 to-violet-600"
  }
];

export default function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Animation effect for counting numbers
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    implementations: 0,
    satisfaction: 0,
    years: 0
  });

  useEffect(() => {
    // First, define proper types for the intervals
    type StatKey = 'clients' | 'implementations' | 'satisfaction' | 'years';
    type IntervalMap = { [key in StatKey]?: NodeJS.Timeout };

    // Update the useEffect hook with proper typing
    const targets: Record<StatKey, number> = {
      clients: 500,
      implementations: 1200,
      satisfaction: 99,
      years: 15
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals: IntervalMap = {};

    Object.keys(targets).forEach((key) => {
      const statKey = key as StatKey;
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
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
      <div className="min-h-screen bg-white">
        {/* SEO Meta Tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ifBash - ServiceNow Solutions Expert",
              "url": "https://ifbash.com",
              "description": "Leading ServiceNow implementation specialist providing AI-powered solutions, CRM excellence, and digital transformation for enterprises worldwide.",
              "serviceArea": "Global",
              "expertise": ["ServiceNow AI", "CRM Solutions", "Digital Transformation", "Process Automation"],
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
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" 
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
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Award className="h-5 w-5 text-purple-400" />
                  <span className="text-sm">ServiceNow Solutions Provider</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-light leading-tight">
                  Transform with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">
                    ServiceNow
                  </span>
                  <span className="block text-3xl md:text-5xl mt-4">
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
                  Unite intelligent automation with exceptional customer experiences to accelerate 
                  your digital transformation journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)",
                      boxShadow: "0 20px 40px rgba(109, 40, 217, 0.4)"
                    }}
                  >
                    Start Your AI Journey
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                  
                  <button className="group px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Play className="inline-block mr-2 h-5 w-5 group-hover:text-purple-400" />
                    Watch Platform Demo
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Certified Experts</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center space-x-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Solutions Provider</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Global Support</span>
                  </div>
                </div>
              </div>

              {/* 3D Platform Visualization */}
              <div className="relative lg:h-[600px]">
                {/* Main Platform Visual */}
                <div className="relative z-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl p-8 backdrop-blur-xl border border-white/20">
                  <div className="aspect-video w-full rounded-xl overflow-hidden">
                    <PlaceholderImage
                      title="ServiceNow Platform Dashboard"
                      className="w-full h-full"
                      gradient="from-violet-600 to-blue-600"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 animate-float">
                    <PlaceholderImage
                      title="AI Analytics"
                      className="w-full h-full"
                      gradient="from-purple-600 to-pink-600"
                    />
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 animate-float delay-150">
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

        {/* Key Benefits Section - Add after Hero */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Transform Today, Lead Tomorrow
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock unprecedented efficiency with AI-powered ServiceNow solutions that put you years ahead of the competition
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "10x Faster Implementation",
                  description: "Launch ServiceNow solutions in record time with our AI-accelerated implementation methodology",
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  icon: Brain,
                  title: "AI-First Approach",
                  description: "Leverage cutting-edge AI capabilities to automate complex workflows and predict business needs",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Target,
                  title: "Guaranteed ROI",
                  description: "Average 300% ROI within first year through intelligent automation and process optimization",
                  gradient: "from-cyan-600 to-teal-600"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="relative group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} p-4 flex items-center justify-center mb-6`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Add before CRM Excellence */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Why Leading Enterprises Choose Us
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join forward-thinking organizations that trust our expertise to drive their digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  stat: "95%",
                  label: "Faster Resolution",
                  description: "AI-powered automation reduces incident resolution time",
                  icon: Zap
                },
                {
                  stat: "60%",
                  label: "Cost Reduction",
                  description: "Streamlined processes cut operational costs",
                  icon: DollarSign
                },
                {
                  stat: "24/7",
                  label: "AI Support",
                  description: "Round-the-clock intelligent assistance",
                  icon: Bot
                },
                {
                  stat: "300%",
                  label: "ROI Increase",
                  description: "Average return on ServiceNow investment",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <item.icon className="h-8 w-8 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-lg font-semibold text-blue-200 mb-2">{item.label}</div>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 mb-6">
                <Zap className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Enterprise Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Enterprise with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Intelligent Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of ServiceNow to drive innovation, enhance customer experiences, and accelerate digital transformation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="relative group rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Service Card Highlight */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient})`,
                      opacity: 0.05
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-start justify-between">
                      <div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        Enterprise Grade
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 py-6 border-t border-gray-100">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button 
                        className={`px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:shadow-lg transform hover:-translate-y-1`}
                      >
                        Learn More
                      </button>
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                { value: "85%", label: "Efficiency Increase", icon: Zap },
                { value: "24/7", label: "Platform Support", icon: Shield },
                { value: "500+", label: "Projects Delivered", icon: CheckCircle },
                { value: "99%", label: "Client Satisfaction", icon: Heart }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-100"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ServiceNow AI Innovation Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  ServiceNow AI Revolution
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Step into the future with ServiceNow's cutting-edge AI capabilities. From predictive analytics 
                to intelligent automation, we help you harness AI to transform every aspect of your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Predictive Intelligence</h4>
                      <p className="text-blue-200 leading-relaxed">
                        Anticipate issues before they occur with ML-powered predictive analytics that learn from your data patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Virtual Agents</h4>
                      <p className="text-blue-200 leading-relaxed">
                        Deploy intelligent virtual agents that provide instant, personalized support across all channels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Intelligent Automation</h4>
                      <p className="text-blue-200 leading-relaxed">
                        Automate complex workflows with AI that adapts and learns, reducing manual tasks by up to 80%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                        <Cpu className="h-12 w-12 text-white animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">AI-Powered Platform</h3>
                      <p className="text-blue-200">Next-generation intelligence</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center animate-bounce">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-bounce delay-1000">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                Explore AI Solutions
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CRM Excellence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                    CRM Excellence
                  </span>
                  <br />
                  <span className="text-gray-800">That Drives Results</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform customer relationships with our advanced ServiceNow CRM solutions. 
                  Create meaningful connections, streamline sales processes, and deliver exceptional customer experiences.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">360° Customer Intelligence</h4>
                      <p className="text-gray-600">Complete customer journey mapping with AI-powered insights and predictive analytics.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">Omnichannel Excellence</h4>
                      <p className="text-gray-600">Seamless customer interactions across all touchpoints with unified communication.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800">Sales Automation</h4>
                      <p className="text-gray-600">Intelligent lead scoring, automated workflows, and personalized engagement strategies.</p>
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
                    Discover CRM Solutions
                  </button>
                  <button className="px-6 py-3 text-purple-600 font-semibold border-2 border-purple-200 rounded-xl hover:bg-purple-50 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* CRM Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                    <h3 className="text-lg font-semibold">Customer Relationship Management</h3>
                    <p className="text-purple-100">Real-time dashboard</p>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Lead Conversion</p>
                          <p className="text-sm text-gray-600">This quarter</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+47%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Customer Satisfaction</p>
                          <p className="text-sm text-gray-600">Average score</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Revenue Growth</p>
                          <p className="text-sm text-gray-600">Year over year</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">+156%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse">
                  24/7
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse">
                  AI+
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 mb-6">
                <Globe className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Industry Expertise</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Specialized Solutions for
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Every Industry
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep domain expertise combined with ServiceNow excellence to deliver industry-specific transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${industry.gradient})`
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.gradient} p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {industry.count}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <button className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                        View Solutions
                      </button>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-gradient-to-r from-violet-600 to-blue-600">
                Explore All Industries
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped organizations achieve remarkable transformations with ServiceNow
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-purple-100">
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
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-purple-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources & Learning Center */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Knowledge Hub
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead with the latest ServiceNow insights, best practices, and industry trends
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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

              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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

        {/* ServiceNow Excellence Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                  ServiceNow Excellence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep ServiceNow expertise with certified professionals and industry recognition
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
                <Award className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Solutions</h3>
                <p className="text-sm text-gray-600">Advanced ServiceNow implementation expertise</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Certified Team</h3>
                <p className="text-sm text-gray-600">ServiceNow certified professionals</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-green-50 border border-cyan-100">
                <Target className="w-16 h-16 mx-auto mb-4 text-cyan-600" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Specializations</h3>
                <p className="text-sm text-gray-600">Multiple ServiceNow product specializations</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-purple-50 border border-green-100">
                <Globe className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Global Reach</h3>
                <p className="text-sm text-gray-600">Serving clients across 25+ countries</p>
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
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)"
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Business?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your ServiceNow AI journey today. Our experts are ready to help you unlock 
              the full potential of intelligent automation and exceptional CRM experiences.
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

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Timer className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200">Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200">Expert guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-200">Proven results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
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
                <p className="text-gray-400 mb-6 leading-relaxed">
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
                <ul className="space-y-3 text-gray-400">
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
                <ul className="space-y-3 text-gray-400">
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
                <div className="space-y-3 text-gray-400">
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

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 ifBash. All rights reserved. | ServiceNow Solutions Expert | 
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
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(109, 40, 217, 0.4); }
            50% { box-shadow: 0 0 40px rgba(109, 40, 217, 0.8); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
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
