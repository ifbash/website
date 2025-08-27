import Head from "next/head";
import { Header } from "@/components/header";
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
  Code
} from "lucide-react";

export default function ServiceNowIntegrationHubPage() {
  // Enhanced JSON-LD with comprehensive Integration Hub data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Integration Hub Solutions - AI-Powered Integration Platform | IfBash",
    "alternateName": ["ServiceNow Integration Hub", "Workflow Data Fabric", "Integration Platform", "API Integration", "Low-Code Integration", "Enterprise Integration"],
    "description": "Leading ServiceNow Integration Hub solutions with AI-powered spoke generation, 220+ prebuilt connectors, and seamless workflow automation. 450+ integration implementations, 60% reduction in manual work, 40% faster development. Expert integration specialists delivering intelligent enterprise connectivity globally.",
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
      "ServiceNow Integration Hub Development",
      "AI-Powered Integration Solutions",
      "Custom Spoke Development", 
      "Workflow Data Fabric Implementation",
      "Enterprise API Integration",
      "Low-Code Integration Platform",
      "Integration Analytics & Monitoring"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "220",
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
      "email": "integrationhub@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Integration Hub Solutions | AI-Powered Integration Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Integration Hub solutions in Hyderabad & globally. AI-powered spoke generation, 220+ prebuilt connectors, workflow automation for seamless enterprise integration. 450+ implementations, 60% manual work reduction, expert integration specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow Integration Hub, workflow data fabric, API integration, low-code integration, custom spokes, flow designer, enterprise integration, ServiceNow Integration Hub solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Integration Hub Solutions | AI-Powered Integration Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow Integration Hub solutions with 450+ implementations. AI-powered spoke generation, 220+ prebuilt connectors, expert specialists delivering seamless enterprise integration globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-integration-hub-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-integration-hub-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-emerald-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-600/15 to-emerald-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ Integration Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 450+ Integration Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ API Integration Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 font-semibold">
                    Integration Hub
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 font-semibold">
                      Seamless Connectivity
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                  Transform enterprise connectivity with intelligent ServiceNow Integration Hub powered by{' '}
                  <span className="font-semibold text-teal-300">AI-driven spoke generation</span>, 220+ prebuilt connectors, and seamless workflow automation. Our certified specialists deliver next-generation integration solutions that eliminate silos, reduce manual work, and accelerate digital transformation.[182][185]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700"
                  >
                    <Plug className="mr-2 h-5 w-5" />
                    Connect Everything
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Integration Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Spoke Generation</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Network className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">220+ Connectors</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Workflow className="h-5 w-5 text-green-700" />
                    <span className="text-sm text-gray-900 font-semibold">Flow Automation</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-600/25 via-teal-600/20 to-green-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-teal-600/30 hover:to-green-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <Plug className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">450+</div>
                  <div className="text-emerald-200 text-sm">Integration Solutions</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-green-600/20 to-emerald-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-green-600/30 hover:to-emerald-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Zap className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-teal-200 text-sm">Reduced Manual Work</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/25 via-emerald-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-emerald-600/30 hover:to-teal-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-green-200 text-sm">Faster Development</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/25 via-green-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-green-600/30 hover:to-teal-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">70%</div>
                  <div className="text-emerald-200 text-sm">Data Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATION HUB VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-green-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                    Next-Generation Integration Platform
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Enterprise
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                      Connectivity with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern enterprises struggle with integration complexity: hundreds of disconnected applications, fragile point-to-point connections, expensive maintenance, and limited technical resources. ServiceNow Integration Hub with{' '}
                    <span className="text-emerald-600 font-semibold">AI-powered spoke generation</span> transforms enterprise connectivity through 220+ prebuilt connectors, low-code workflow automation, and intelligent data fabric that reduces manual work by 60% while accelerating time to value.[182][185]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist Spoke Generator using OpenAI specifications</strong> to{' '}
                    <strong>Workflow Data Fabric real-time connectivity</strong>, our comprehensive platform creates seamless integrations that fuel AI agents with data, eliminate technical debt, and enable rapid workflow automation without traditional integration barriers or specialized resources.[185][187]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations evolve from fragmented integration approaches to unified, intelligent connectivity through modern SaaS-embedded solutions that deliver{' '}
                    <span className="text-teal-600 font-semibold">measurable integration excellence</span> with lower TCO and faster business outcomes.
                  </p>
                </div>
                
                {/* Integration Hub Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Spoke Generation",
                    "220+ Prebuilt Connectors", 
                    "Low-Code Flow Designer",
                    "Real-Time Data Fabric",
                    "Workflow Automation",
                    "Enterprise Security & Compliance"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    Explore AI-Powered Integration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
                    alt="Modern integration platform connecting multiple enterprise systems with AI-powered automation and seamless workflows"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">450+</div>
                  <div className="text-sm opacity-90">Integration Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE INTEGRATION HUB FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-green-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Core Integration Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Integration
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                  Platform Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow Integration Hub suite with AI-driven spoke generation, prebuilt connectors, and seamless workflow automation for superior enterprise connectivity
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Plug,
                  title: "220+ Prebuilt Spokes",
                  description: "Connect instantly to hundreds of enterprise apps with certified, out-of-the-box connectors that integrate data and automate thousands of actions in critical business systems.[185][187]",
                  features: ["Certified Connectors", "Enterprise Apps", "Thousands of Actions", "Instant Connectivity"],
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-green-50",
                  highlight: "220+ Connectors",
                  officialFeature: true
                },
                {
                  icon: Code,
                  title: "AI-Powered Spoke Generator",
                  description: "Build custom spokes fast with no-code AI generation powered by OpenAPI specifications and Now Assist for rapid integration development without specialized resources.[185]",
                  features: ["GenAI Spoke Creation", "OpenAPI Specifications", "No-Code Development", "Rapid Generation"],
                  gradient: "from-teal-600 to-green-600",
                  bgGradient: "from-teal-50 via-green-50 to-emerald-50",
                  highlight: "AI-Generated",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Flow Designer & Templates", 
                  description: "Speed automation development using starter flows with built-in integrations and drag-and-drop interface for creating powerful workflows connecting multiple systems.[182][187]",
                  features: ["Drag-and-Drop Designer", "Flow Templates", "Built-in Integrations", "Multi-System Workflows"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Visual Workflows",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Remote Tables & Real-Time Data",
                  description: "View and manipulate external data in real-time without importing or storing it, enabling ServiceNow to access data as if stored locally with virtual tables.[191]",
                  features: ["Real-Time Data Access", "Virtual Tables", "No Data Import", "External System Connectivity"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Real-Time Access",
                  officialFeature: true
                },
                {
                  icon: Monitor,
                  title: "Connections Dashboard",
                  description: "Connect in minutes and simplify credential management through a single dashboard that provides centralized monitoring and control of all integrations.[187][191]",
                  features: ["Centralized Management", "Credential Security", "Integration Monitoring", "Single Dashboard"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Unified Management",
                  officialFeature: true
                },
                {
                  icon: Zap,
                  title: "REST API Triggers & Webhooks",
                  description: "Start flows from inbound API calls or webhooks without writing code, enabling real-time, event-driven integrations that respond to external system events.[187][191]",
                  features: ["API Triggers", "Webhook Integration", "Event-Driven Workflows", "No-Code Setup"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Event-Driven",
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
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Integration Hub Subscription Tiers */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Flexible Integration Hub Subscriptions
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow Integration Hub offers flexible subscription tiers from Starter to Enterprise, scaling with your integration needs and transaction volumes[182]
              </p>
              
              {/* Subscription Comparison */}
              <div className="grid md:grid-cols-4 gap-6">
                {/* Starter Tier */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Badge className="bg-gray-600 text-white mr-2 text-xs">Starter</Badge>
                    Free Tier
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>1M transactions/year</strong></p>
                    <p>SOAP, REST, OpenAPI</p>
                    <p>Build integrations</p>
                    <p>Payload Builder</p>
                    <p>Remote Tables</p>
                  </div>
                </div>

                {/* Standard Tier */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Badge className="bg-emerald-600 text-white mr-2 text-xs">Standard</Badge>
                    Developer Ops
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>1.5M transactions/year</strong></p>
                    <p>Starter + JDBC step</p>
                    <p>XML Parser</p>
                    <p>Enhanced automation</p>
                    <p>Developer operations</p>
                  </div>
                </div>

                {/* Professional Tier */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Badge className="bg-teal-600 text-white mr-2 text-xs">Professional</Badge>
                    IT Operations
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>3M transactions/year</strong></p>
                    <p>PowerShell, SFTP, SSH</p>
                    <p>JSON + XML Parser</p>
                    <p>IT operations automation</p>
                    <p>Advanced protocols</p>
                  </div>
                </div>

                {/* Enterprise Tier */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Badge className="bg-green-600 text-white mr-2 text-xs">Enterprise</Badge>
                    Full Platform
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>6M transactions/year</strong></p>
                    <p>REST API Trigger</p>
                    <p>Data Stream actions</p>
                    <p>HR, CRM, ERP automation</p>
                    <p>Dynamic I/O capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATITUDE SUCCESS STORY */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "Latitude leverages ServiceNow Integration Hub to automate workflows between ServiceNow ITSM, Workday, and Microsoft Active Directory with up to 60 supportive systems. It can now quickly process HR requests."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Erhan Stephenson
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Head of Enterprise Service Management, Latitude
                      </p>
                    </div>
                    <Badge className="bg-emerald-600 text-white px-3 py-1 rounded-full mt-3 sm:mt-0 self-start sm:self-center">
                      60 Connected Systems
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATION RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Proven Integration Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                  Integration Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered Integration Hub solutions deliver significant improvements in automation, development speed, and data accuracy[182][187]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Hub Key Benefits</h3>
                [192]
              </div>
            </div>
            
            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  company: "TD Bank",
                  achievement: "30K requests/month automated",
                  description: "Automated ID and access management with Active Directory and SCCM integration",
                  icon: Building,
                  gradient: "from-emerald-600 to-teal-600"
                },
                {
                  company: "Ballad Health", 
                  achievement: "97% ticket volume reduction",
                  description: "Automated ID and access management ticket processes for dramatic efficiency gains",
                  icon: Heart,
                  gradient: "from-teal-600 to-green-600"
                },
                {
                  company: "American University",
                  achievement: "Seamless Teams automation",
                  description: "Automated Microsoft Teams creation for uninterrupted education during remote learning",
                  icon: BookOpen,
                  gradient: "from-green-600 to-emerald-600"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${story.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <story.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{story.achievement}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>

            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "60%", label: "Reduced Manual Work", desc: "Through automation", gradient: "from-emerald-600 to-teal-600", bgGradient: "from-emerald-50 via-teal-50 to-green-50", icon: Zap },
                { metric: "40%", label: "Faster Development", desc: "With AI-powered tools", gradient: "from-teal-600 to-green-600", bgGradient: "from-teal-50 via-green-50 to-emerald-50", icon: Rocket },
                { metric: "70%", label: "Improved Data Accuracy", desc: "Real-time integration", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: CheckCircle },
                { metric: "50%", label: "Reduced Ticket Volume", desc: "Self-service automation", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Shield }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow Integration Hub
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Integration Hub solutions and enterprise connectivity implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Integration Hub and how does it transform enterprise connectivity?",
                  answer: "ServiceNow Integration Hub is a modern low/no-code integration platform that connects systems quickly and efficiently to ServiceNow AI Platform. It features 220+ prebuilt spokes, AI-powered spoke generation, and seamless workflow automation. Organizations typically achieve 60% reduction in manual work and 40% faster development through simplified connectivity that eliminates technical debt and traditional integration barriers.",
                  gradient: "from-emerald-50 via-teal-50 to-green-50",
                  icon: Plug
                },
                {
                  question: "How does AI enhance Integration Hub capabilities and development speed?",
                  answer: "AI enhances Integration Hub through Now Assist Spoke Generator that creates custom connectors using OpenAPI specifications, intelligent workflow automation, and predictive integration patterns. The AI-powered spoke generator enables rapid no-code development while maintaining enterprise security and compliance standards. This results in 40% faster development and reduced need for specialized integration resources.",
                  gradient: "from-teal-50 via-green-50 to-emerald-50",
                  icon: Bot
                },
                {
                  question: "What subscription tiers are available and how do transaction limits work?",
                  answer: "Integration Hub offers four subscription tiers: Starter (1M transactions/year - free), Standard (1.5M), Professional (3M), and Enterprise (6M transactions/year). Each tier includes different protocols and capabilities. Transactions are counted per integration action, and higher tiers provide advanced features like PowerShell steps, REST API triggers, and dynamic I/O capabilities for comprehensive enterprise integration needs.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: BarChart2
                },
                {
                  question: "How does Integration Hub integrate with existing enterprise systems and maintain security?",
                  answer: "Integration Hub supports multiple protocols (REST, SOAP, JDBC, PowerShell, SSH) and provides certified connectors for hundreds of enterprise applications. The Connections Dashboard manages credentials securely while Remote Tables enable real-time data access without storage. All integrations maintain ServiceNow's security standards with encrypted connections, role-based access controls, and compliance certifications for enterprise-grade security.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Shield
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-emerald-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-teal-700 font-bold mr-2">A:</span>
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
                Ready to transform your enterprise connectivity with AI-powered Integration Hub?
              </p>
              <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Integration Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-emerald-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-green-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Enterprise Integration?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your Integration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Join 450+ organizations delivering seamless connectivity with AI-powered ServiceNow Integration Hub. From spoke generation to workflow automation, start your integration transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700">
                <Plug className="mr-2 h-5 w-5" />
                Start Integration Hub
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Integration Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-emerald-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-emerald-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-teal-200 text-xs">integrationhub@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-green-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-green-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
