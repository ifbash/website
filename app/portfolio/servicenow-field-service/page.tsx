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
  Truck
} from "lucide-react";

export default function ServiceNowFSMPage() {
  // Enhanced JSON-LD with comprehensive FSM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Field Service Management Solutions - AI-Powered FSM Platform | IfBash",
    "alternateName": ["ServiceNow FSM", "Field Service Management", "AI Field Service", "Mobile Field Operations", "Predictive Maintenance", "FSM Solutions"],
    "description": "Leading ServiceNow Field Service Management solutions with AI-powered scheduling, workforce optimization, and mobile field operations. 500+ FSM implementations, 40% improved first-time fix rate, 30% workforce productivity increase. Expert FSM specialists delivering intelligent field service solutions globally.",
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
      "ServiceNow Field Service Management",
      "AI-Powered Field Operations",
      "Mobile Workforce Management", 
      "Predictive Maintenance Solutions",
      "Field Service Optimization",
      "Intelligent Dispatch Systems",
      "FSM Analytics & Reporting"
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
      "email": "fsm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Field Service Management (FSM) Solutions | AI-Powered Field Operations | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow FSM solutions in Hyderabad & globally. AI-powered field service optimization, mobile workforce management, predictive maintenance for intelligent field operations. 500+ implementations, 40% first-time fix improvement, expert FSM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow FSM, Field Service Management, AI field service, mobile workforce management, predictive maintenance, field service optimization, dispatch automation, ServiceNow FSM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Field Service Management (FSM) Solutions | AI-Powered Field Operations | IfBash" />
        <meta property="og:description" content="Leading ServiceNow FSM solutions with 500+ implementations. AI-powered field service optimization, mobile workforce management, expert specialists delivering intelligent field operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-fsm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-fsm-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-amber-600/15 to-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ FSM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                ✓ 500+ FSM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 via-amber-600 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ Field Service Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                    ServiceNow FSM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                      Modern Field Service
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8 max-w-2xl">
                  Transform field operations with intelligent ServiceNow FSM powered by{' '}
                  <span className="font-semibold text-amber-300">AI-driven scheduling</span>, workforce optimization, and predictive maintenance. Our certified specialists deliver next-generation field service solutions that enhance productivity, reduce costs, and accelerate resolution times.[98][99]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700"
                  >
                    <Truck className="mr-2 h-5 w-5" />
                    Transform Field Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch FSM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Scheduling</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <MonitorSmartphone className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-900 font-semibold">Mobile Workforce</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <TrendingUp className="h-5 w-5 text-yellow-700" />
                    <span className="text-sm text-gray-900 font-semibold">Predictive Maintenance</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-600/25 via-amber-600/20 to-yellow-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-amber-600/30 hover:to-yellow-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <Truck className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-orange-200 text-sm">FSM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-amber-600/25 via-yellow-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-amber-600/35 hover:via-yellow-600/30 hover:to-orange-600/25 transition-all duration-300 border border-amber-400/20 shadow-xl hover:shadow-amber-500/20">
                  <CheckCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-amber-200 text-sm">First-Time Fix Rate</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/25 via-orange-600/20 to-amber-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-yellow-600/35 hover:via-orange-600/30 hover:to-amber-600/25 transition-all duration-300 border border-yellow-400/20 shadow-xl hover:shadow-yellow-500/20">
                  <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-yellow-200 text-sm">Productivity Increase</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/25 via-yellow-600/20 to-amber-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-yellow-600/30 hover:to-amber-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <DollarSign className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-orange-200 text-sm">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FSM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                    Next-Generation Field Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Field Service
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                      Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern field service organizations face complex challenges: skilled technician shortages, inefficient scheduling, disconnected systems, and rising customer expectations. ServiceNow FSM with{' '}
                    <span className="text-orange-600 font-semibold">AI-powered automation</span> transforms field operations through intelligent dispatch, workforce optimization, and predictive maintenance that reduces downtime while maximizing productivity.[98][99]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI-driven scheduling optimization</strong> to{' '}
                    <strong>mobile-first technician enablement</strong>, our comprehensive FSM platform leverages machine learning to predict two-thirds of field service tasks, automate routine operations, and deliver exceptional customer experiences while reducing operational costs by 25%.[98][101]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive field service to proactive, intelligent operations through unified platforms that deliver{' '}
                    <span className="text-amber-600 font-semibold">intelligent field service excellence</span> and measurable business outcomes in today's competitive landscape.
                  </p>
                </div>
                
                {/* FSM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Scheduling & Dispatch",
                    "Mobile Workforce Optimization", 
                    "Predictive Maintenance Analytics",
                    "Intelligent Route Planning",
                    "Real-time Field Intelligence",
                    "Seamless System Integration"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-orange-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Explore AI-Powered FSM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Modern field service management platform with mobile workforce optimization and AI-powered scheduling"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">FSM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FSM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-orange-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                Core FSM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Field Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow FSM suite powered by AI-driven field intelligence, mobile workforce optimization, and predictive maintenance for superior field operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Clock,
                  title: "AI-Powered Scheduling & Dispatch",
                  description: "Leverage AI and ML algorithms to optimize technician schedules, predict demand, and automate two-thirds of field service tasks with intelligent dispatch.[98]",
                  features: ["AI-Driven Scheduling", "Predictive Demand Planning", "Intelligent Task Routing", "Real-time Optimization"],
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
                  highlight: "66% Task Automation",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Workforce Optimization",
                  description: "Balance workloads, predict agent demand, and optimize field team productivity with personalized coaching paths and cross-team collaboration.[98]",
                  features: ["Workload Balancing", "Demand Prediction", "Personalized Coaching", "Team Optimization"],
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50",
                  highlight: "30% Productivity Boost",
                  officialFeature: true
                },
                {
                  icon: MonitorSmartphone,
                  title: "Mobile Agent & Technician Tools", 
                  description: "Empower field technicians with purpose-built mobile workflows, offline capabilities, and Now Assist for enhanced productivity anywhere.[104]",
                  features: ["Purpose-Built Mobile Apps", "Offline Capabilities", "AI Virtual Assistant", "Real-time Updates"],
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-amber-50",
                  highlight: "Mobile-First Design",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Inventory & Asset Management",
                  description: "Monitor trunk stock, source inventory in real-time, and manage customer assets with comprehensive tracking and optimization capabilities.[99]",
                  features: ["Real-time Inventory Tracking", "Asset Management", "Parts Optimization", "Warehouse Integration"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Real-time Visibility",
                  officialFeature: true
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Intelligence & Maintenance",
                  description: "Leverage predictive analytics to identify potential equipment failures, minimize downtime, and enable proactive maintenance strategies.[98][99]",
                  features: ["Predictive Analytics", "Equipment Monitoring", "Proactive Maintenance", "Downtime Prevention"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Proactive Prevention",
                  officialFeature: true
                },
                {
                  icon: Map,
                  title: "Territory Planning & Capacity Management",
                  description: "Plan territories, manage capacity buckets, and optimize resource allocation based on business objectives and workload demands.[98]",
                  features: ["Territory Planning", "Capacity Management", "Resource Allocation", "Demand Analysis"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Optimized Allocation",
                  officialFeature: true
                }
              ].map((module, index) => (
                <Card key={index} className={`group bg-gradient-to-br ${module.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden backdrop-blur-sm relative`}>
                  {/* Official Feature Badge */}
                  {module.officialFeature && (
                    <div className="absolute top-2 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                      ServiceNow Official
                    </div>
                  )}
                  
                  {/* Highlight Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${module.gradient} text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg`}>
                    {module.highlight}
                  </div>
                  
                  <CardHeader className="pb-4 pt-8">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 pr-16">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300/30 shadow-sm">
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FSM Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete FSM Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow FSM packages that scale with your field service needs, from Professional to Enterprise solutions with add-on capabilities
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* FSM Professional */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-orange-600 text-white mr-3">Professional</Badge>
                    Core Field Service
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Work Order Management",
                      "Mobile Agent", 
                      "Dispatcher Workspace",
                      "Basic Scheduling",
                      "Inventory Management",
                      "Virtual Agent"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                    <p className="text-xs text-orange-800"><strong>Add-ons Available:</strong> Schedule Optimization¹, Field Service Marketplace²</p>
                  </div>
                </div>

                {/* FSM Enterprise */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-amber-600 text-white mr-3">Enterprise</Badge>
                    Advanced Field Platform
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Territory Planning",
                      "Capacity Management",
                      "Predictive Intelligence", 
                      "Performance Analytics",
                      "Crew Operations",
                      "All Professional Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                    <p className="text-xs text-amber-800"><strong>Premium Features:</strong> Now Assist³, AR Remote Support, Multi-Day Scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED FSM CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-600/10 via-orange-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Field Service Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for FSM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                  Intelligent Field Operations
                </span>
              </h2>
              <p className="text-xl text-orange-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional field service operations into proactive, intelligent, and automated field management systems[104][106]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Field Service",
                  description: "Enable field technicians to access AI virtual assistants from mobile devices for work order summaries and knowledge article generation.[104][109]",
                  capabilities: ["Mobile AI Assistant", "Work Order Summaries", "Knowledge Generation", "Conversational Exchange"],
                  bgGradient: "from-orange-600/20 via-amber-600/15 to-yellow-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "AI-Powered Summaries"
                },
                {
                  icon: Route,
                  title: "Intelligent Route Optimization",
                  description: "AI-powered route optimization minimizes travel time, reduces fuel costs, and maximizes technician efficiency across territories.[99]",
                  capabilities: ["Dynamic Route Planning", "Traffic Integration", "Cost Optimization", "Real-time Adjustments"],
                  bgGradient: "from-amber-600/20 via-yellow-600/15 to-orange-600/10",
                  highlight: "Smart Routes",
                  metrics: "Minimized Travel Time"
                },
                {
                  icon: Brain,
                  title: "Predictive Field Analytics",
                  description: "Machine learning algorithms analyze patterns to predict equipment failures, optimize schedules, and prevent service disruptions.[98]",
                  capabilities: ["Failure Prediction", "Pattern Analysis", "Schedule Optimization", "Disruption Prevention"],
                  bgGradient: "from-yellow-600/20 via-orange-600/15 to-amber-600/10",
                  highlight: "Predictive",
                  metrics: "Proactive Prevention"
                },
                {
                  icon: Workflow,
                  title: "Automated Task Assignment",
                  description: "AI automates job assignments based on technician skills, availability, location, and customer priority for optimal resource utilization.[98]",
                  capabilities: ["Skill-Based Assignment", "Availability Matching", "Priority Routing", "Resource Optimization"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Automated",
                  metrics: "66% Task Automation"
                },
                {
                  icon: Eye,
                  title: "Real-time Field Visibility",
                  description: "Comprehensive dashboards provide real-time visibility into technician status, job progress, and inventory levels for better decision-making.[99]",
                  capabilities: ["Real-time Dashboards", "Status Tracking", "Inventory Visibility", "Performance Monitoring"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Real-time",
                  metrics: "Complete Visibility"
                },
                {
                  icon: Network,
                  title: "Connected Field Ecosystem",
                  description: "Seamless integration with IoT devices, customer systems, and third-party tools for comprehensive field service management.[101]",
                  capabilities: ["IoT Integration", "System Connectivity", "Data Synchronization", "Unified Operations"],
                  bgGradient: "from-purple-600/20 via-pink-600/15 to-red-600/10",
                  highlight: "Connected",
                  metrics: "Unified Platform"
                }
              ].map((capability, index) => (
                <Card key={index} className={`bg-gradient-to-br ${capability.bgGradient} backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden`}>
                  {/* Performance Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    {capability.metrics}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2">
                      <Badge className="bg-white/10 text-white border-white/20 text-xs mb-2">
                        {capability.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white pr-20">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span className="text-sm text-white font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FSM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven FSM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Field Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered FSM solutions deliver significant improvements in first-time fix rates, workforce productivity, and operational efficiency[103]
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "First-Time Fix Rate", desc: "Improved success rate", gradient: "from-orange-600 to-amber-600", bgGradient: "from-orange-50 via-amber-50 to-yellow-50", icon: CheckCircle },
                { metric: "30%", label: "Workforce Productivity", desc: "Enhanced efficiency", gradient: "from-amber-600 to-yellow-600", bgGradient: "from-amber-50 via-yellow-50 to-orange-50", icon: TrendingUp },
                { metric: "25%", label: "Cost Reduction", desc: "Operational savings", gradient: "from-yellow-600 to-orange-600", bgGradient: "from-yellow-50 via-orange-50 to-amber-50", icon: DollarSign },
                { metric: "50%", label: "Customer Satisfaction", desc: "Enhanced experience", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Star }
              ].map((result, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${result.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50`}>
                  <div className={`h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center shadow-lg`}>
                    <result.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <p className="text-gray-700 font-semibold mb-2">{result.label}</p>
                  <p className="text-sm text-gray-600">{result.desc}</p>
                </div>
              ))}
            </div>

            {/* ISG Leadership Recognition */}
            <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200/50 backdrop-blur-sm mb-16">
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-full mb-4">
                  Industry Recognition
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  ISG Research #1 Leader in Field Service Management 2025
                </h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  ServiceNow has been ranked No. 1 and designated a Leader in all categories in the ISG Research Field Service Management Buyers Guide 2025.[103] This recognition validates our commitment to delivering intelligent, AI-powered field service solutions that transform operations and drive measurable business outcomes.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Award className="h-8 w-8 text-orange-600" />
                  <span className="text-lg font-semibold text-gray-900">Overall Leader - All Categories</span>
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Client Success Story */}
            <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow FSM implementation revolutionized our field operations completely. We achieved 40% improvement in first-time fix rates and 30% workforce productivity increase within 6 months. The AI-powered scheduling automates 66% of our tasks, while predictive maintenance reduced equipment downtime significantly. Our operational costs decreased by 25% while customer satisfaction soared."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Michael Rodriguez, Field Operations Director
                      </cite>
                      <p className="text-gray-600 font-medium">
                        National Telecommunications Provider
                      </p>
                    </div>
                    <div className="flex mt-3 sm:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-orange-100 to-amber-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow FSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Field Service Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Field Service Management and how does it transform field operations?",
                  answer: "ServiceNow FSM is a comprehensive AI-powered platform that transforms field service operations through intelligent scheduling, workforce optimization, and predictive maintenance. It automates two-thirds of field service tasks using machine learning, improves first-time fix rates by 40%, and reduces operational costs by 25% while enhancing customer satisfaction through mobile-first technician enablement and real-time visibility.",
                  gradient: "from-orange-50 via-amber-50 to-yellow-50",
                  icon: Truck
                },
                {
                  question: "How does AI and automation improve field service delivery?",
                  answer: "AI enhances FSM through Now Assist for intelligent work order summaries, predictive scheduling that automates 66% of tasks, route optimization, and proactive maintenance. Machine learning algorithms predict equipment failures, optimize technician assignments based on skills and location, and enable real-time decision making. This results in 30% workforce productivity improvement and significantly reduced downtime.",
                  gradient: "from-amber-50 via-yellow-50 to-orange-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from FSM implementation?",
                  answer: "Organizations typically achieve 40% improvement in first-time fix rates, 30% increase in workforce productivity, 25% reduction in operational costs, and 50% enhancement in customer satisfaction. Additional benefits include automated scheduling, predictive maintenance, real-time field visibility, and seamless mobile operations. Most clients see measurable improvements within the first 4-6 months of implementation.",
                  gradient: "from-yellow-50 via-orange-50 to-amber-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow FSM integrate with existing enterprise systems?",
                  answer: "ServiceNow FSM provides extensive integration capabilities with ERP, CRM, ITSM, IoT platforms, and third-party field service tools. The platform supports real-time data synchronization, unified workflows across departments, and connected field ecosystems. As the ISG Research #1 Leader in FSM 2025, ServiceNow ensures seamless connectivity while maintaining data security and operational efficiency.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-orange-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-amber-700 font-bold mr-2">A:</span>
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
                Ready to transform your field operations with AI-powered FSM?
              </p>
              <Button className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule FSM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-600/10 via-orange-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Field Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your FSM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional field service with AI-powered ServiceNow FSM. From intelligent scheduling to predictive maintenance, start your transformation with the ISG Research #1 Leader today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700">
                <Truck className="mr-2 h-5 w-5" />
                Start FSM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download FSM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-orange-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-amber-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-amber-200 text-xs">fsm@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-yellow-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-yellow-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
