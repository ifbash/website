import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  Activity,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  MonitorSmartphone,
  Layers,
  Bot,
  FileText,
  BarChart2,
  Zap,
  TrendingUp,
  Target,
  Workflow,
  MessageCircle,
  Brain,
  Sparkles,
  Globe,
  Award,
  Rocket,
  Quote,
  Star,
  DollarSign,
  Play,
  Phone,
  Mail,
  Calendar,
  LinkedinIcon,
  Twitter,
  Youtube,
  Eye,
  Cpu,
  Headphones,
  CloudLightning,
  LineChart,
  BarChart3,
  Route,
  Server,
  Gauge,
  Radar,
  MessageSquare,
  Lightbulb,
  Map,
  Package,
  BookOpen,
  HelpCircle,
  Heart,
  Shield,
  PieChart,
  Briefcase,
  GitBranch,
  Share2,
  Lock,
  Network,
  Home,
  MapPin,
  UserCheck,
  Clipboard,
  Navigation,
  Building,
  Database,
  Wrench,
  Truck,
  HardDrive,
  Monitor,
  Cloud,
  Cog,
  ShoppingCart,
  Smartphone,
  Plug,
  Code,
  Calculator
} from "lucide-react";

export default function ServiceNowSalesOrderManagementPage() {
  // Enhanced JSON-LD with comprehensive SOM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Sales and Order Management Solutions - AI-Powered SOM Platform | IfBash",
    "alternateName": ["ServiceNow SOM", "Sales and Order Management", "CPQ Solutions", "Lead-to-Cash Platform", "Sales Automation", "Order Management"],
    "description": "Leading ServiceNow Sales and Order Management solutions with AI-powered CPQ, lead management, and order fulfillment automation. 300+ SOM implementations, 50% manual work reduction, 30% faster sales cycles. Expert sales automation specialists delivering intelligent lead-to-cash transformation globally.",
    "provider": {
      "@type": "Organization",
      "name": "IfBash",
      "url": "https://ifbash.com",
      "logo": "https://ifbash.com/images/ifbash-logo.png",
      "foundingDate": "2016",
      "numberOfEmployees": "50-100",
      "sameAs": [
        "https://www.linkedin.com/company/ifbash",
        "https://twitter.com/ifbash",
        "https://www.youtube.com/c/ifbash"
      ]
    },
    "serviceType": [
      "ServiceNow Sales and Order Management",
      "AI-Powered CPQ Solutions",
      "Lead-to-Cash Automation", 
      "Sales Process Optimization",
      "Order Fulfillment Orchestration",
      "Revenue Operations Platform",
      "Customer Lifecycle Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "190",
      "bestRating": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXX-XXXXXX",
      "email": "som@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Sales and Order Management Solutions | AI-Powered SOM Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Sales and Order Management solutions in Hyderabad & globally. AI-powered CPQ, lead-to-cash automation, order fulfillment orchestration for intelligent revenue operations. 300+ implementations, 50% manual work reduction, expert SOM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow SOM, sales and order management, CPQ solutions, lead-to-cash platform, sales automation, order management, revenue operations, ServiceNow SOM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Sales and Order Management Solutions | AI-Powered SOM Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow SOM solutions with 300+ implementations. AI-powered CPQ, lead-to-cash automation, expert specialists delivering intelligent revenue operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-som-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-som-solutions" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Fixed Social Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a
          href="https://linkedin.com/company/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on LinkedIn"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-sky-500/25">
            <Twitter className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
            Follow on Twitter
          </span>
        </a>

        <a
          href="https://youtube.com/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Watch ifBash on YouTube"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-rose-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-red-500/25">
            <Youtube className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm border">
            Watch on YouTube
          </span>
        </a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-rose-600/10 via-pink-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-600/10 via-rose-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-pink-600/15 to-rose-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                ✓ Revenue Operations Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                ✓ 300+ SOM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-rose-500 via-pink-600 to-red-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                ✓ Lead-to-Cash Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 font-semibold">
                    Sales & Order
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Management for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 font-semibold">
                      Revenue Growth
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-rose-100 leading-relaxed mb-8 max-w-2xl">
                  Transform lead-to-cash operations with intelligent ServiceNow SOM powered by{' '}
                  <span className="font-semibold text-pink-300">AI-driven CPQ</span>, automated order fulfillment, and comprehensive customer lifecycle management. Our certified specialists deliver next-generation sales automation that accelerates deals, reduces manual work, and optimizes revenue operations.[194][195]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-rose-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-700 hover:via-pink-700 hover:to-red-700"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Accelerate Revenue
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch SOM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Calculator className="h-5 w-5 text-rose-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered CPQ</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Workflow className="h-5 w-5 text-pink-600" />
                    <span className="text-sm text-gray-900 font-semibold">Order Orchestration</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <BarChart2 className="h-5 w-5 text-red-700" />
                    <span className="text-sm text-gray-900 font-semibold">Revenue Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-rose-600/25 via-pink-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-rose-600/35 hover:via-pink-600/30 hover:to-red-600/25 transition-all duration-300 border border-rose-400/20 shadow-xl hover:shadow-rose-500/20">
                  <TrendingUp className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-rose-200 text-sm">SOM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-pink-600/25 via-red-600/20 to-rose-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-pink-600/35 hover:via-red-600/30 hover:to-rose-600/25 transition-all duration-300 border border-pink-400/20 shadow-xl hover:shadow-pink-500/20">
                  <Zap className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-pink-200 text-sm">Reduced Manual Work</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/25 via-rose-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-red-600/35 hover:via-rose-600/30 hover:to-pink-600/25 transition-all duration-300 border border-red-400/20 shadow-xl hover:shadow-red-500/20">
                  <Clock className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-red-200 text-sm">Faster Sales Cycles</div>
                </div>
                <div className="bg-gradient-to-br from-rose-600/25 via-red-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-rose-600/35 hover:via-red-600/30 hover:to-pink-600/25 transition-all duration-300 border border-rose-400/20 shadow-xl hover:shadow-rose-500/20">
                  <Target className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-rose-200 text-sm">Better Forecast Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-rose-100 via-pink-100 to-red-100 text-rose-700 mb-6 px-4 py-2 border border-rose-200/50">
                    Next-Generation Revenue Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Lead-to-Cash
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                      Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern sales organizations face mounting pressures: complex product configurations, lengthy approval processes, manual order handling, and disconnected systems that create friction throughout the revenue cycle. ServiceNow SOM with{' '}
                    <span className="text-rose-600 font-semibold">AI-powered CPQ and Logik.ai acquisition</span> transforms sales operations through intelligent configuration, automated workflows, and seamless order orchestration that reduces manual work by 50% while accelerating sales velocity.[194][200]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI-guided configuration and pricing</strong> to{' '}
                    <strong>workflow-driven order fulfillment</strong>, our comprehensive platform manages the complete sales lifecycle—leads, opportunities, quotes, orders, fulfillment, and renewals—with unified data models that eliminate silos and enable true lead-to-cash automation across direct sales, partner channels, and e-commerce touchpoints.[195][196]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations evolve from fragmented sales processes to unified, intelligent revenue operations through modern platforms that deliver{' '}
                    <span className="text-pink-600 font-semibold">measurable business acceleration</span> with faster deal closure and enhanced customer experiences.
                  </p>
                </div>
                
                {/* SOM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Configuration & Pricing",
                    "Automated Order Orchestration", 
                    "Omnichannel Revenue Optimization",
                    "Predictive Sales Analytics",
                    "Customer Lifecycle Management",
                    "Revenue Operations Intelligence"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-rose-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-rose-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                    Explore AI-Powered SOM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                    alt="Modern sales and order management platform with AI-powered CPQ and comprehensive revenue operations automation"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm opacity-90">SOM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SOM FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-rose-50/50 to-pink-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-rose-100 via-pink-100 to-red-100 text-rose-700 mb-6 px-4 py-2 border border-rose-200/50">
                Core SOM Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Sales & Order
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                  Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow SOM suite with AI-driven CPQ, automated order orchestration, and comprehensive customer lifecycle management for revenue optimization
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "AI-Enhanced Lead Management",
                  description: "Capture and nurture leads from multiple channels with AI-powered recommendations, automated scoring, and intelligent conversion workflows.[114][194]",
                  features: ["Multi-Channel Lead Capture", "AI Lead Scoring", "Automated Nurturing", "Conversion Optimization"],
                  gradient: "from-rose-600 to-pink-600",
                  bgGradient: "from-rose-50 via-pink-50 to-red-50",
                  highlight: "AI-Powered Leads",
                  officialFeature: true
                },
                {
                  icon: TrendingUp,
                  title: "Opportunity Management",
                  description: "Track and advance sales opportunities with AI-driven insights, predictive forecasting, and automated pipeline management for accelerated deal closure.[195]",
                  features: ["Pipeline Automation", "AI-Driven Insights", "Predictive Forecasting", "Deal Acceleration"],
                  gradient: "from-pink-600 to-red-600",
                  bgGradient: "from-pink-50 via-red-50 to-rose-50",
                  highlight: "Intelligent Pipeline",
                  officialFeature: true
                },
                {
                  icon: Calculator,
                  title: "AI-Powered CPQ (Logik.ai)", 
                  description: "Configure, price, and quote complex products with AI-guided selling flows, real-time pricing, and intelligent recommendations across all channels.[196][200]",
                  features: ["AI-Guided Configuration", "Real-Time Pricing", "Omnichannel Quoting", "Product Recommendations"],
                  gradient: "from-red-600 to-rose-600",
                  bgGradient: "from-red-50 via-rose-50 to-pink-50",
                  highlight: "Logik.ai Integration",
                  officialFeature: true
                },
                {
                  icon: Truck,
                  title: "Workflow-Driven Order Fulfillment",
                  description: "Orchestrate order fulfillment across departments with intelligent workflows, automated task generation, and real-time tracking for streamlined delivery.[195]",
                  features: ["Order Orchestration", "Automated Task Generation", "Cross-Department Workflows", "Real-Time Tracking"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Automated Fulfillment",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Customer Contracts & Entitlements",
                  description: "Manage customer contracts, renewals, and service entitlements with automated tracking, proactive renewal management, and lifecycle orchestration.[195]",
                  features: ["Contract Lifecycle Management", "Automated Renewals", "Entitlement Tracking", "Revenue Recognition"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Contract Intelligence",
                  officialFeature: true
                },
                {
                  icon: BarChart2,
                  title: "Revenue Analytics & Insights",
                  description: "Gain actionable insights with AI-powered analytics, sales forecasting, performance dashboards, and revenue optimization recommendations.[195]",
                  features: ["AI-Powered Analytics", "Sales Forecasting", "Performance Dashboards", "Revenue Optimization"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Revenue Intelligence",
                  officialFeature: true
                }
              ].map((feature, index) => (
                <Card key={index} className={`group bg-gradient-to-br ${feature.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden backdrop-blur-sm relative`}>
                  {/* Official Feature Badge */}
                  {feature.officialFeature && (
                    <div className="absolute top-2 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                      ServiceNow Official
                    </div>
                  )}
                  
                  {/* Highlight Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${feature.gradient} text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg`}>
                    {feature.highlight}
                  </div>
                  
                  <CardHeader className="pb-4 pt-8">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 pr-16">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-3">
                      {feature.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300/30 shadow-sm">
                          <CheckCircle className="h-4 w-4 text-rose-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lead-to-Cash Process Flow */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete Lead-to-Cash Process Flow
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow SOM manages the entire revenue lifecycle from initial lead capture through order fulfillment and ongoing customer success[195]
              </p>
              
              {/* Process Flow Steps */}
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Lead Capture", description: "Multi-channel lead generation with AI scoring", icon: Users, color: "rose" },
                  { step: "2", title: "Opportunity", description: "Pipeline management with predictive insights", icon: TrendingUp, color: "pink" },
                  { step: "3", title: "Configure & Quote", description: "AI-powered CPQ with intelligent pricing", icon: Calculator, color: "red" },
                  { step: "4", title: "Order Fulfillment", description: "Automated workflows and orchestration", icon: Truck, color: "indigo" },
                  { step: "5", title: "Customer Success", description: "Contract management and renewals", icon: Heart, color: "green" }
                ].map((process, index) => (
                  <div key={index} className={`text-center p-6 bg-gradient-to-br from-${process.color}-50 to-${process.color}-100 rounded-2xl border border-${process.color}-200/50 relative`}>
                    <div className={`h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-${process.color}-600 to-${process.color}-700 flex items-center justify-center shadow-lg`}>
                      <process.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`absolute -top-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-${process.color}-600 to-${process.color}-700 flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {process.step}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                    <p className="text-sm text-gray-600">{process.description}</p>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gray-300 transform -translate-y-1/2">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven SOM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Revenue
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered SOM solutions deliver significant improvements in sales velocity, operational efficiency, and customer satisfaction[195][200]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales and Order Management Benefits</h3>
                [201]
              </div>
            </div>
            
            {/* Success Stories */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200/50 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kraft Heinz</h3>
                <p className="text-rose-600 font-semibold mb-3">Slashed manual order touches and exceptions</p>
                <p className="text-gray-600 text-sm leading-relaxed">Automated order handling on ServiceNow platform dramatically reduced manual workload and eliminated processing errors through intelligent workflow orchestration.</p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-pink-50 to-red-50 rounded-2xl p-8 border border-pink-200/50 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-pink-600 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">KPN (Telecom)</h3>
                <p className="text-pink-600 font-semibold mb-3">Reduced order fallout from 7% to under 1%</p>
                <p className="text-gray-600 text-sm leading-relaxed">Unified order management with catalog-driven fulfillment eliminated custom processes and dramatically improved order accuracy and delivery performance.</p>
              </div>
            </div>

            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "50%", label: "Reduced Manual Work", desc: "Through automation", gradient: "from-rose-600 to-pink-600", bgGradient: "from-rose-50 via-pink-50 to-red-50", icon: Zap },
                { metric: "30%", label: "Faster Sales Cycles", desc: "Accelerated deal closure", gradient: "from-pink-600 to-red-600", bgGradient: "from-pink-50 via-red-50 to-rose-50", icon: Clock },
                { metric: "25%", label: "Better Forecast Accuracy", desc: "AI-powered predictions", gradient: "from-red-600 to-rose-600", bgGradient: "from-red-50 via-rose-50 to-pink-50", icon: Target },
                { metric: "40%", label: "Enhanced Customer Experience", desc: "Streamlined processes", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Heart }
              ].map((result, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${result.bgGradient} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50`}>
                  <div className={`h-14 w-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center shadow-lg`}>
                    <result.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <p className="text-gray-700 font-semibold mb-1 text-sm">{result.label}</p>
                  <p className="text-xs text-gray-600">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENHANCED FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-rose-100 to-pink-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow SOM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Sales and Order Management solutions and revenue operations implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Sales and Order Management and how does it transform revenue operations?",
                  answer: "ServiceNow SOM is a comprehensive lead-to-cash platform that manages the entire sales lifecycle from lead capture through order fulfillment and customer success. It transforms revenue operations through AI-powered CPQ (enhanced by Logik.ai acquisition), automated workflow orchestration, and unified customer lifecycle management. Organizations typically achieve 50% manual work reduction and 30% faster sales cycles through intelligent automation and seamless process integration.",
                  gradient: "from-rose-50 via-pink-50 to-red-50",
                  icon: TrendingUp
                },
                {
                  question: "How does AI enhance Sales and Order Management capabilities?",
                  answer: "AI enhances SOM through intelligent lead scoring, AI-powered CPQ with Logik.ai for complex product configuration, predictive sales forecasting, and automated workflow orchestration. The platform provides product recommendations, pricing optimization, and intelligent insights that accelerate deal closure. This results in 25% better forecast accuracy and 40% enhanced customer experience through personalized, data-driven sales processes.",
                  gradient: "from-pink-50 via-red-50 to-rose-50",
                  icon: Calculator
                },
                {
                  question: "What measurable benefits can organizations expect from SOM implementation?",
                  answer: "Organizations typically achieve 50% reduction in manual work, 30% faster sales cycles, 25% improved forecast accuracy, and 40% enhanced customer experience. Additional benefits include streamlined order fulfillment (KPN reduced fallout from 7% to under 1%), automated contract management, omnichannel revenue optimization, and comprehensive customer lifecycle visibility. Most clients see measurable improvements within the first 4-6 months of implementation.",
                  gradient: "from-red-50 via-rose-50 to-pink-50",
                  icon: BarChart2
                },
                {
                  question: "How does ServiceNow SOM integrate with existing CRM and ERP systems?",
                  answer: "ServiceNow SOM provides native integration with CRM, ERP, contract management, and billing systems through APIs and prebuilt connectors. The platform supports omnichannel operations across direct sales, partner portals, and e-commerce with unified data models. Integration with ServiceNow's broader ecosystem (CSM, FSM, ITSM) enables 360-degree customer visibility and seamless handoffs between sales, service, and support teams for complete customer lifecycle management.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-rose-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-pink-700 font-bold mr-2">A:</span>
                        <span className="text-gray-700">{faq.answer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to transform your revenue operations with AI-powered SOM?
              </p>
              <Button className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule SOM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-rose-600/10 via-pink-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-600/10 via-rose-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-red-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Revenue Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your SOM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-rose-100 mb-10 max-w-3xl mx-auto">
              Join 300+ organizations delivering exceptional revenue performance with AI-powered ServiceNow SOM. From intelligent CPQ to automated fulfillment, start your lead-to-cash transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-rose-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 hover:from-rose-700 hover:via-pink-700 hover:to-red-700">
                <TrendingUp className="mr-2 h-5 w-5" />
                Start SOM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download SOM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-rose-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-rose-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-pink-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-pink-200 text-xs">som@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-red-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
