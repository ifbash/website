
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Building,
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
  Users,
  Network,
  Home,
  MapPin,
  UserCheck,
  Calendar as CalendarIcon,
  Wrench,
  Clipboard,
  Navigation
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function ServiceNowWorkplaceServiceDeliveryPage() {
  // Enhanced JSON-LD with comprehensive WSD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Workplace Service Delivery Solutions - AI-Powered Facility Management | IfBash",
    "alternateName": ["ServiceNow WSD", "Workplace Service Delivery", "Facility Management Software", "Smart Building Solutions", "Workplace Experience Platform", "IWMS Solutions"],
    "description": "Leading ServiceNow Workplace Service Delivery solutions with AI-powered facility management, space optimization, and employee experience platforms. 500+ WSD implementations, 40% space optimization, 60% service efficiency. Expert WSD specialists delivering intelligent workplace solutions globally.",
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
      "ServiceNow Workplace Service Delivery",
      "Smart Facility Management",
      "Workplace Space Optimization", 
      "Employee Experience Platform",
      "Integrated Workplace Management",
      "AI-Powered Building Solutions",
      "WSD Analytics & Reporting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "160",
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
      "email": "wsd@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Workplace Service Delivery (WSD) Solutions | AI-Powered Facility Management | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow WSD solutions in Hyderabad & globally. AI-powered facility management, space optimization, workplace experience platforms for intelligent building operations. 500+ implementations, 40% space optimization, expert WSD specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow WSD, Workplace Service Delivery, facility management software, smart building solutions, space optimization, workplace experience, IWMS, ServiceNow WSD solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Workplace Service Delivery (WSD) Solutions | AI-Powered Facility Management | IfBash" />
        <meta property="og:description" content="Leading ServiceNow WSD solutions with 500+ implementations. AI-powered facility management, space optimization, expert specialists delivering intelligent workplace experiences globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-wsd-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-wsd-solutions" />
        
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
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ WSD Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 500+ WSD Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ Smart Building Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    ServiceNow WSD
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                      Modern Workplaces
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                  Transform workplace operations with intelligent ServiceNow Workplace Service Delivery powered by{' '}
                  <span className="font-semibold text-teal-300">AI-driven space optimization</span>, smart building integrations, and seamless employee experiences. Our certified specialists deliver next-generation workplace solutions that enhance productivity and operational efficiency.[80][82]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                  >
                    <Building className="mr-2 h-5 w-5" />
                    Transform Workplace Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch WSD Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered Insights</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Map className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Smart Space Management</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Network className="h-5 w-5 text-cyan-700" />
                    <span className="text-sm text-gray-900 font-semibold">Connected Buildings</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-600/25 via-teal-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-teal-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <Building className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-emerald-200 text-sm">WSD Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-cyan-600/20 to-emerald-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-cyan-600/30 hover:to-emerald-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <TrendingUp className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-teal-200 text-sm">Space Optimization</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-emerald-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-emerald-600/30 hover:to-teal-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-cyan-200 text-sm">Service Efficiency</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/25 via-cyan-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-cyan-600/30 hover:to-teal-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <Heart className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-emerald-200 text-sm">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WSD VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                    Next-Generation Workplace Experience
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Workplace
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                      Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern workplaces face unprecedented challenges: hybrid work models, space optimization needs, employee experience expectations, and operational efficiency demands. ServiceNow WSD with{' '}
                    <span className="text-emerald-600 font-semibold">AI-powered automation</span> transforms workplace operations through intelligent space management, seamless employee services, and data-driven insights.[80][82]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>smart reservation systems</strong> to{' '}
                    <strong>predictive maintenance workflows</strong>, our comprehensive WSD platform empowers employees with instant access to workplace services while enabling facility teams to optimize resources, reduce costs, and enhance productivity through intelligent automation.[85]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from traditional facility management to modern, employee-centric workplace experiences through unified platforms that deliver{' '}
                    <span className="text-teal-600 font-semibold">intelligent workplace excellence</span> and measurable operational outcomes.
                  </p>
                </div>
                
                {/* WSD Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Space Optimization",
                    "Intelligent Facility Management", 
                    "Employee Experience Platform",
                    "Smart Building Integrations",
                    "Real-time Workplace Analytics",
                    "Seamless Mobile Experience"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    Explore AI-Powered WSD
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Modern workplace service delivery platform with smart building operations and employee experience management"
                    className="rounded-xl shadow-xl w-full"
                    width={800}
                    height={600}
                    priority
                  />
                  
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">WSD Solutions</div>
                </div>
              </div>
            </div>
          
        </section>

        {/* CORE WSD MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Core WSD Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Workplace
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Service Delivery Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow WSD suite powered by AI-driven workplace intelligence, automated facility management, and seamless employee experiences for superior workplace operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Building,
                  title: "Workplace Central",
                  description: "Enable workplace managers to monitor and administer all activities from a single comprehensive workspace with real-time dashboards.[85]",
                  features: ["Centralized Dashboard", "Real-time Monitoring", "Workspace Administration", "Performance Insights"],
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
                  highlight: "Unified Management",
                  officialFeature: true
                },
                {
                  icon: Map,
                  title: "Workplace Space Management",
                  description: "Optimize the use of space with advanced planning, insights, and reporting capabilities for maximum efficiency.[81]",
                  features: ["Space Planning Tools", "Utilization Analytics", "Occupancy Insights", "Layout Optimization"],
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50",
                  highlight: "40% Space Optimization",
                  officialFeature: true
                },
                {
                  icon: CalendarIcon,
                  title: "Workplace Reservation Management", 
                  description: "Empower employees to make self-service, single-click reservations and add services or requests seamlessly.[85]",
                  features: ["Self-Service Reservations", "Single-Click Booking", "Calendar Integration", "Mobile Access"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Seamless Booking",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Workplace Case Management",
                  description: "Standardize documentation, interactions, and fulfillment of employee workplace inquiries and requests.[82]",
                  features: ["Standardized Workflows", "Request Tracking", "Automated Routing", "SLA Management"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Intelligent Routing",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Workplace Visitor Management",
                  description: "Register and welcome guests with simple, automated arrival processes and seamless communication.[80]",
                  features: ["Guest Registration", "Automated Check-in", "Visitor Tracking", "Safety Compliance"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Automated Experience",
                  officialFeature: true
                },
                {
                  icon: Wrench,
                  title: "Workplace Maintenance Management",
                  description: "Create and manage preventive maintenance plans across workplace locations with intelligent automation.[81]",
                  features: ["Preventive Maintenance", "Work Order Management", "Asset Tracking", "Predictive Analytics"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Predictive Maintenance",
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
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WSD Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete WSD Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive ServiceNow WSD packages that scale with your workplace needs, from Professional to Enterprise solutions
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* WSD Professional */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-emerald-600 text-white mr-3">Professional</Badge>
                    Core Workplace Services
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Workplace Case Management",
                      "Workplace Reservation Management", 
                      "Workplace Visitor Management",
                      "Workplace Central",
                      "Virtual Agent",
                      "Performance Analytics"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WSD Enterprise */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-teal-600 text-white mr-3">Enterprise</Badge>
                    Advanced Workplace Platform
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Workplace Space Management",
                      "Workplace Move Management",
                      "Workplace Lease Administration", 
                      "Workplace Maintenance Management",
                      "Workplace Concierge",
                      "All Professional Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED WSD CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-emerald-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Workplace Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for WSD &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Intelligent Workplace Operations
                </span>
              </h2>
              <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional workplace operations into proactive, intelligent, and automated facility management systems[85]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Workplace Concierge",
                  description: "AI-powered workplace insights and concierge services that provide intelligent recommendations and automated assistance.[85]",
                  capabilities: ["AI-Powered Insights", "Intelligent Recommendations", "Automated Assistance", "Context-Aware Responses"],
                  bgGradient: "from-emerald-600/20 via-teal-600/15 to-cyan-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "3x Smarter Insights"
                },
                {
                  icon: Navigation,
                  title: "Workplace Indoor Mapping",
                  description: "Navigate and find spaces or collaborators using intelligent indoor maps, location directory, and kiosk integrations.[85]",
                  capabilities: ["Interactive Indoor Maps", "Location Directory", "Kiosk Integration", "Real-time Navigation"],
                  bgGradient: "from-teal-600/20 via-cyan-600/15 to-emerald-600/10",
                  highlight: "Smart Navigation",
                  metrics: "Real-time Guidance"
                },
                {
                  icon: Network,
                  title: "Workplace Connectors",
                  description: "Integrate with workplace occupancy sensors to enhance in-office employee experiences and make smarter workplace decisions.[81]",
                  capabilities: ["Occupancy Sensors", "Smart Building Integration", "IoT Connectivity", "Data Analytics"],
                  bgGradient: "from-cyan-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Connected Buildings",
                  metrics: "Real-time Occupancy"
                },
                {
                  icon: TrendingUp,
                  title: "Space Optimization Analytics",
                  description: "Data-driven insights for space utilization, optimization, and strategic real estate decisions with predictive analytics.[80]",
                  capabilities: ["Space Utilization Tracking", "Predictive Analytics", "Usage Patterns", "Cost Optimization"],
                  bgGradient: "from-purple-600/20 via-pink-600/15 to-red-600/10",
                  highlight: "Predictive",
                  metrics: "40% Space Savings"
                },
                {
                  icon: Workflow,
                  title: "Automated Move Management",
                  description: "Orchestrate individual, mass employee, and asset space relocation workflows with intelligent automation.[82]",
                  capabilities: ["Automated Planning", "Move Orchestration", "Asset Tracking", "Communication Workflows"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-pink-600/10",
                  highlight: "Orchestrated",
                  metrics: "90% Automation"
                },
                {
                  icon: Clipboard,
                  title: "Lease Administration Intelligence",
                  description: "Track contracts, manage responsibilities, clauses, and options in a centralized workspace with AI insights.[85]",
                  capabilities: ["Contract Management", "Lease Tracking", "Automated Alerts", "Compliance Monitoring"],
                  bgGradient: "from-orange-600/20 via-red-600/15 to-pink-600/10",
                  highlight: "Intelligent Tracking",
                  metrics: "100% Compliance"
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
                    <p className="text-emerald-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
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

        {/* WSD RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven WSD Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Workplace
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered WSD solutions deliver significant improvements in space utilization, employee satisfaction, and operational efficiency
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Space Optimization", desc: "Improved space utilization", gradient: "from-emerald-600 to-teal-600", bgGradient: "from-emerald-50 via-teal-50 to-cyan-50", icon: TrendingUp },
                { metric: "60%", label: "Service Efficiency", desc: "Faster workplace services", gradient: "from-teal-600 to-cyan-600", bgGradient: "from-teal-50 via-cyan-50 to-blue-50", icon: Zap },
                { metric: "85%", label: "Employee Satisfaction", desc: "Enhanced workplace experience", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Heart },
                { metric: "30%", label: "Cost Reduction", desc: "Operational cost savings", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: DollarSign }
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
            <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    &quot;IfBash&apos;s ServiceNow WSD implementation transformed our workplace operations completely. We achieved 40% space optimization and 85% employee satisfaction within 5 months. The AI-powered space management and automated reservation system revolutionized how our employees interact with the workplace. Our facility costs reduced by 30% while service quality improved dramatically.&quot;
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Lisa Chen, Head of Workplace Services
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Professional Services
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow WSD
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Workplace Service Delivery solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Workplace Service Delivery and how does it enhance workplace operations?",
                  answer: "ServiceNow WSD is a comprehensive facility management platform that transforms workplace operations through AI-powered space optimization, intelligent building integrations, and seamless employee experiences. It provides unified workplace services including space management, reservations, visitor management, and maintenance automation. Organizations typically achieve 40% space optimization and 85% employee satisfaction improvement.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50",
                  icon: Building
                },
                {
                  question: "How do AI and automation improve workplace service delivery?",
                  answer: "AI enhances WSD through Now Assist for intelligent workplace insights, automated space optimization, predictive maintenance, and smart building integrations. The platform uses occupancy sensors, machine learning analytics, and automated workflows to optimize space utilization, predict facility needs, and deliver personalized employee experiences. This results in 60% service efficiency improvement and 30% cost reduction.",
                  gradient: "from-teal-50 via-cyan-50 to-emerald-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from WSD implementation?",
                  answer: "Organizations typically achieve 40% space optimization, 60% service efficiency improvement, 85% employee satisfaction, and 30% operational cost reduction. Additional benefits include automated facility management, intelligent space planning, enhanced visitor experiences, and data-driven workplace insights. Most clients see measurable improvements within the first 3-4 months of implementation.",
                  gradient: "from-cyan-50 via-emerald-50 to-teal-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow WSD support hybrid work and smart buildings?",
                  answer: "ServiceNow WSD provides comprehensive hybrid work support through workplace concierge features, flexible space reservations, presence visibility, and smart building integrations. The platform connects with occupancy sensors, IoT devices, and building systems to provide real-time space availability, automated environmental controls, and intelligent workplace recommendations for optimal hybrid work experiences.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Network
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
                Ready to transform your workplace operations with AI-powered WSD?
              </p>
              <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule WSD Consultation
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
            <Badge className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Workplace Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your WSD
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional workplace experiences with AI-powered ServiceNow WSD. From intelligent space management to automated facility operations, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700">
                <Building className="mr-2 h-5 w-5" />
                Start WSD Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download WSD Guide
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
                <p className="text-teal-200 text-xs">wsd@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-cyan-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
