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
  Smartphone
} from "lucide-react";

export default function ServiceNowServicePortalPage() {
  // Enhanced JSON-LD with comprehensive Service Portal data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Service Portal Solutions - AI-Powered Self-Service Portal Platform | IfBash",
    "alternateName": ["ServiceNow Service Portal", "Employee Center", "Self-Service Portal", "AI-Powered Portal", "Mobile Portal Solutions", "Digital Workplace Portal"],
    "description": "Leading ServiceNow Service Portal solutions with AI-powered search, responsive design, and unified service delivery. 400+ portal implementations, 40% user satisfaction increase, 30% ticket deflection improvement. Expert portal specialists delivering engaging self-service experiences globally.",
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
      "ServiceNow Service Portal Development",
      "AI-Powered Portal Solutions",
      "Employee Center Implementation", 
      "Mobile-First Portal Design",
      "Self-Service Portal Creation",
      "Digital Workplace Solutions",
      "Portal Analytics & Optimization"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
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
      "email": "serviceportal@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Service Portal Solutions | AI-Powered Self-Service Portal Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Service Portal solutions in Hyderabad & globally. AI-powered self-service portals, Employee Center implementation, mobile-first design for engaging digital workplace experiences. 400+ implementations, 40% user satisfaction increase, expert portal specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow Service Portal, Employee Center, self-service portal, AI-powered portal, mobile portal, digital workplace, ServiceNow portal development, ServiceNow Service Portal solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Service Portal Solutions | AI-Powered Self-Service Portal Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow Service Portal solutions with 400+ implementations. AI-powered self-service portals, Employee Center, expert specialists delivering engaging digital workplace experiences globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-service-portal-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-service-portal-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ Portal Experience Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 400+ Portal Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ Digital Workplace Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                    Service Portal
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                      Modern Workplaces
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed mb-8 max-w-2xl">
                  Transform employee experiences with intelligent ServiceNow Service Portal powered by{' '}
                  <span className="font-semibold text-blue-300">AI-driven search</span>, responsive design, and unified service delivery. Our certified specialists create engaging self-service portals that enhance user satisfaction, reduce ticket volume, and accelerate digital workplace transformation.[172][175]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700"
                  >
                    <MonitorSmartphone className="mr-2 h-5 w-5" />
                    Transform Digital Experience
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Portal Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Search</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Mobile-First</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">Unified Portal</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <MonitorSmartphone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-cyan-200 text-sm">Portal Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Star className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-blue-200 text-sm">Higher User Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-cyan-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-cyan-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Shield className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-indigo-200 text-sm">Ticket Deflection</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-cyan-200 text-sm">Faster Service Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE PORTAL VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                    Next-Generation Digital Workplace
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Employee
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                      Experiences with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern employees expect consumer-grade digital experiences: instant access to information, intuitive interfaces, mobile-first design, and intelligent assistance. ServiceNow Service Portal with{' '}
                    <span className="text-cyan-600 font-semibold">AI-powered capabilities</span> transforms employee engagement through intelligent search, responsive design, and unified service delivery that increases user satisfaction by 40% while reducing support requests.[172][180]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI Search with semantic understanding</strong> to{' '}
                    <strong>Employee Center unified experiences</strong>, our comprehensive portal solutions create single engagement points that deflect 30% of tickets, enhance productivity, and deliver the modern workplace experiences employees demand while providing organizations with measurable operational improvements.[173][175]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations evolve from basic service portals to intelligent digital workplace platforms that deliver{' '}
                    <span className="text-blue-600 font-semibold">exceptional user experiences</span> with seamless integration, mobile accessibility, and AI-driven self-service capabilities.
                  </p>
                </div>
                
                {/* Service Portal Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Semantic Search",
                    "Mobile-First Responsive Design", 
                    "Unified Multi-Department Portal",
                    "Personalized User Experiences",
                    "Real-time Performance Analytics",
                    "Seamless Platform Integration"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-cyan-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Explore AI-Powered Portals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="Modern service portal interface with AI-powered search and responsive design for enhanced employee experiences"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">Portal Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SERVICE PORTAL FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-cyan-50/50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                Core Portal Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Service Portal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Platform Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow Service Portal suite with AI-driven search, responsive design, and unified service delivery for exceptional digital workplace experiences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: "AI-Powered Search",
                  description: "Connect users to what they need with consumer-grade search that understands intent, context, and delivers predictive suggestions with semantic understanding.[180]",
                  features: ["Semantic Search", "Natural Language Understanding", "Predictive Suggestions", "Context-Aware Results"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "AI-Enhanced Search",
                  officialFeature: true
                },
                {
                  icon: MonitorSmartphone,
                  title: "Responsive Mobile Design",
                  description: "Cross-device compatibility with seamless integration across mobile apps, tablets, and desktops for consistent user experiences anywhere, anytime.[175]",
                  features: ["Mobile-First Design", "Cross-Device Compatibility", "Responsive UI", "Touch-Optimized Interface"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Mobile-First",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Unified Service Center", 
                  description: "Deliver a unified, multi-department portal to keep employees engaged, productive, and informed with single access point for all services.[172][173]",
                  features: ["Multi-Department Access", "Unified Experience", "Role-Based Content", "Centralized Services"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-pink-50",
                  highlight: "Unified Experience",
                  officialFeature: true
                },
                {
                  icon: Settings,
                  title: "Intuitive Modular Design",
                  description: "Create and configure engaging self-service experiences with user-friendly, modular interface that supports extensive customization and branding.[175]",
                  features: ["Modular Components", "Custom Branding", "Flexible Layouts", "Widget-Based Architecture"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Modular & Flexible",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "End-to-End Self-Service",
                  description: "Build comprehensive self-service portals quickly with automated workflows, deflecting issues and empowering users with instant access to resources.[175]",
                  features: ["Self-Service Workflows", "Automated Processes", "Issue Deflection", "Instant Access"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Self-Service Automation",
                  officialFeature: true
                },
                {
                  icon: BarChart2,
                  title: "Analytics & Performance Insights",
                  description: "Monitor portal performance, user engagement, and service delivery effectiveness with comprehensive analytics and real-time dashboards.[175]",
                  features: ["Usage Analytics", "Performance Monitoring", "User Engagement Metrics", "Service Delivery Insights"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Data-Driven Insights",
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
                          <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Employee Center Evolution */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Evolution to Employee Center
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow Employee Center represents the next evolution of Service Portal, adding enhanced features, improved themes, and unified digital workplace experiences[173]
              </p>
              
              {/* Portal Evolution Timeline */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Traditional Service Portal */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-gray-600 text-white mr-3">Classic</Badge>
                    Service Portal
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Basic Self-Service",
                      "Widget-Based Design", 
                      "Mobile Responsive",
                      "Custom Branding",
                      "Multi-Portal Support",
                      "Core Search Functionality"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Employee Center */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-cyan-600 text-white mr-3">Modern</Badge>
                    Employee Center
                  </h4>
                  <div className="space-y-3">
                    {[
                      "AI-Powered Search",
                      "Topic-Based Navigation", 
                      "Enhanced Mobile Experience",
                      "Unified Workspace",
                      "Content Management",
                      "Analytics & Insights"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Employee Center Pro */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Advanced</Badge>
                    Employee Center Pro
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Advanced AI Features",
                      "Appointment Booking", 
                      "Company Events Management",
                      "Microsoft 365 Integration",
                      "External Content Connectors",
                      "Premium Analytics"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED PORTAL CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-cyan-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Portal Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for Portals &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  Intelligent User Experiences
                </span>
              </h2>
              <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional portals into intelligent, context-aware, and predictive digital workplace experiences[176][180]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "AI Search with Semantic Understanding",
                  description: "Natural Language Understanding analyzes context and intent behind searches, delivering highly relevant results that understand user needs beyond keywords.[180]",
                  capabilities: ["Semantic Search", "Intent Recognition", "Contextual Results", "Predictive Suggestions"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "Contextual Intelligence"
                },
                {
                  icon: MessageCircle,
                  title: "Virtual Agent Integration",
                  description: "AI-powered conversational chatbots provide 24/7 support across IT, HR, Facilities with enhanced generative AI for complex query handling.[110][176]",
                  capabilities: ["24/7 Conversational Support", "Multi-Department Coverage", "GenAI Responses", "Learning Capabilities"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-cyan-600/10",
                  highlight: "Always-On Support",
                  metrics: "Enhanced Understanding"
                },
                {
                  icon: Brain,
                  title: "Predictive User Assistance",
                  description: "Now Assist provides intelligent recommendations, auto-generates content, and suggests next actions based on user behavior and historical patterns.[176]",
                  capabilities: ["Predictive Recommendations", "Content Generation", "Behavioral Analysis", "Personalized Assistance"],
                  bgGradient: "from-indigo-600/20 via-cyan-600/15 to-blue-600/10",
                  highlight: "Predictive",
                  metrics: "Proactive Guidance"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics Intelligence",
                  description: "AI-driven analytics provide real-time insights into portal usage, performance trends, and user engagement patterns for continuous optimization.[110]",
                  capabilities: ["Usage Analytics", "Performance Monitoring", "Trend Analysis", "Optimization Insights"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Analytics-Driven",
                  metrics: "Data-Driven Optimization"
                },
                {
                  icon: Users,
                  title: "Personalized User Experiences",
                  description: "AI personalizes portal content, layout, and services based on user roles, preferences, and usage patterns for tailored digital workplace experiences.[172]",
                  capabilities: ["Role-Based Personalization", "Adaptive Interfaces", "Preference Learning", "Content Customization"],
                  bgGradient: "from-purple-600/20 via-pink-600/15 to-red-600/10",
                  highlight: "Personalized",
                  metrics: "Tailored Experiences"
                },
                {
                  icon: Zap,
                  title: "Automated Content Management",
                  description: "AI automates content creation, updates, and management across portal pages, knowledge bases, and service catalogs for consistent information delivery.[172]",
                  capabilities: ["Automated Content Updates", "Knowledge Management", "Content Optimization", "Version Control"],
                  bgGradient: "from-orange-600/20 via-yellow-600/15 to-red-600/10",
                  highlight: "Automated",
                  metrics: "Content Intelligence"
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
                    <p className="text-cyan-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
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

        {/* PORTAL RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven Portal Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Digital Workplace
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered Service Portal solutions deliver significant improvements in user satisfaction, service delivery, and operational efficiency[172][175]
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Higher User Satisfaction", desc: "Enhanced user experiences", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Star },
                { metric: "30%", label: "Ticket Deflection", desc: "Self-service success", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Shield },
                { metric: "25%", label: "Faster Service Delivery", desc: "Streamlined processes", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-pink-50", icon: Clock },
                { metric: "50%", label: "Increased Self-Service Usage", desc: "Employee empowerment", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Users }
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

            {/* Client Success Story */}
            <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow Service Portal implementation transformed our employee digital experience completely. We achieved 40% higher user satisfaction and 30% ticket deflection within 5 months. The AI-powered search and unified Employee Center created a single 'one-stop shop' solution that brought together our existing portal and intranet. Our self-service usage increased by 50% while service delivery became 25% faster through the enhanced user experience."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Lisa Chen, VP Digital Workplace
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Technology Enterprise
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-cyan-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow Service Portal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Service Portal solutions and Employee Center implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Service Portal and how does it enhance employee experiences?",
                  answer: "ServiceNow Service Portal is a customizable framework that delivers mobile-friendly, self-service experiences through intuitive, responsive portals. It enhances employee experiences with AI-powered search, unified service access, and personalized interfaces. Organizations typically achieve 40% higher user satisfaction and 30% ticket deflection through improved digital workplace experiences and streamlined self-service capabilities.",
                  gradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  icon: MonitorSmartphone
                },
                {
                  question: "How does AI improve Service Portal functionality and user engagement?",
                  answer: "AI enhances Service Portal through semantic search that understands user intent, virtual agent integration for 24/7 support, predictive content recommendations, and personalized experiences. Now Assist provides intelligent suggestions while AI Search delivers contextual results beyond keyword matching. This results in 50% increased self-service usage and 25% faster service delivery through intelligent automation.",
                  gradient: "from-blue-50 via-indigo-50 to-cyan-50",
                  icon: Bot
                },
                {
                  question: "What's the difference between Service Portal and Employee Center?",
                  answer: "Employee Center represents the evolution of Service Portal with enhanced AI capabilities, topic-based navigation, improved mobile experience, and unified workspace features. While Service Portal provides the foundation with widget-based design and responsive UI, Employee Center adds advanced AI search, content management, analytics, and Employee Center Pro includes appointment booking, events management, and Microsoft 365 integration.",
                  gradient: "from-indigo-50 via-cyan-50 to-blue-50",
                  icon: Users
                },
                {
                  question: "How does Service Portal integrate with existing enterprise systems and workflows?",
                  answer: "Service Portal provides seamless integration with ServiceNow platform workflows, external systems, and enterprise applications through APIs and connectors. It supports single sign-on, integrates with knowledge bases, connects to backend processes, and maintains consistent branding across all touchpoints. The platform enables end-to-end automation while providing unified access to multiple departments and services through a single portal interface.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-cyan-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-blue-700 font-bold mr-2">A:</span>
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
                Ready to transform your digital workplace with AI-powered Service Portal?
              </p>
              <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Portal Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-cyan-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Digital Workplace Experiences?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your Portal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
              Join 400+ organizations delivering exceptional employee experiences with AI-powered ServiceNow Service Portal. From intelligent search to unified Employee Center, start your digital workplace transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700">
                <MonitorSmartphone className="mr-2 h-5 w-5" />
                Start Portal Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Portal Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-cyan-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-blue-200 text-xs">serviceportal@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-indigo-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
