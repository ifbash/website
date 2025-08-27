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

export default function ServiceNowProcurementPage() {
  // Enhanced JSON-LD with comprehensive Procurement data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Sourcing and Procurement Operations Solutions - AI-Powered Procurement Platform | IfBash",
    "alternateName": ["ServiceNow Procurement", "Sourcing and Procurement Operations", "SPO", "Procurement Service Management", "AI-Powered Procurement", "Source-to-Pay Solutions"],
    "description": "Leading ServiceNow Sourcing and Procurement Operations solutions with AI-powered automation, Shopping Hub, case management, and employee self-service. 350+ procurement implementations, 50% faster resolution, 30% cycle time reduction. Expert procurement specialists delivering intelligent sourcing operations globally.",
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
      "ServiceNow Sourcing and Procurement Operations",
      "AI-Powered Procurement Management",
      "Shopping Hub Implementation", 
      "Procurement Case Management",
      "Source-to-Pay Automation",
      "Supplier Lifecycle Management",
      "Procurement Analytics & Reporting"
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
      "email": "procurement@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Sourcing and Procurement Operations Solutions | AI-Powered Procurement Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Sourcing and Procurement Operations solutions in Hyderabad & globally. AI-powered procurement automation, Shopping Hub, case management for intelligent sourcing operations. 350+ implementations, 50% faster resolution, expert procurement specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow procurement, sourcing and procurement operations, SPO, Shopping Hub, procurement case management, AI procurement automation, source-to-pay, ServiceNow procurement solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Sourcing and Procurement Operations Solutions | AI-Powered Procurement Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow SPO solutions with 350+ implementations. AI-powered procurement automation, Shopping Hub, expert specialists delivering intelligent sourcing operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-procurement-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-procurement-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Procurement Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 350+ SPO Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Source-to-Pay Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Procurement Operations
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Modern Sourcing
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Transform procurement operations with intelligent ServiceNow SPO powered by{' '}
                  <span className="font-semibold text-indigo-300">AI-driven automation</span>, Shopping Hub self-service, and comprehensive case management. Our certified specialists deliver next-generation procurement solutions that reduce cycle times, enhance compliance, and optimize spend management.[154][156]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Transform Procurement
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch SPO Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Procurement</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <ShoppingCart className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Shopping Hub</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Workflow className="h-5 w-5 text-purple-700" />
                    <span className="text-sm text-gray-900 font-semibold">Case Management</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <ShoppingCart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-blue-200 text-sm">SPO Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-indigo-200 text-sm">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-purple-200 text-sm">Cycle Time Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">20%</div>
                  <div className="text-blue-200 text-sm">Better Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCUREMENT VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                    Next-Generation Procurement Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Sourcing &
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Procurement with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern procurement organizations face mounting pressures: maverick spending, complex approval chains, disconnected systems, and supplier management challenges. ServiceNow SPO with{' '}
                    <span className="text-blue-600 font-semibold">AI-powered automation</span> transforms procurement operations through intelligent self-service, automated workflows, and comprehensive supplier engagement that reduces cycle times by 50% while ensuring compliance and control.[154][156]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for conversational procurement</strong> to{' '}
                    <strong>Shopping Hub e-commerce experience</strong>, our comprehensive platform creates a single engagement layer across systems that makes indirect procurement easier, orchestrates teams efficiently, and uses AI to eliminate manual work while improving employee experience and business process speed.[156][158]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from fragmented procurement processes to unified, intelligent operations through single platforms that deliver{' '}
                    <span className="text-indigo-600 font-semibold">measurable procurement excellence</span> with enhanced visibility, compliance, and supplier collaboration.
                  </p>
                </div>
                
                {/* Procurement Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Procurement Automation",
                    "Shopping Hub Self-Service", 
                    "Intelligent Case Management",
                    "Supplier Lifecycle Integration",
                    "Real-time Spend Analytics",
                    "Compliance & Risk Management"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore AI-Powered SPO
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                    alt="Modern procurement operations platform with AI-powered automation and comprehensive sourcing management"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">350+</div>
                  <div className="text-sm opacity-90">SPO Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SPO MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Core SPO Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Sourcing &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Procurement Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow SPO suite powered by AI-driven procurement intelligence, Shopping Hub self-service, and automated workflow orchestration for superior sourcing operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Clipboard,
                  title: "Procurement Case Management",
                  description: "Resolve common procurement requests with virtual agent support and searchable knowledge base for streamlined issue resolution.[152][159]",
                  features: ["Virtual Agent Support", "Searchable Knowledge Base", "Request Tracking", "Automated Workflows"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "AI-Enhanced Support",
                  officialFeature: true
                },
                {
                  icon: ShoppingCart,
                  title: "Shopping Hub",
                  description: "Make it easy for employees to buy goods and services they need with e-commerce-style self-service portal and intuitive shopping experience.[153][159]",
                  features: ["E-commerce Portal", "Self-Service Shopping", "Catalog Management", "Approval Workflows"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "Consumer-Grade Experience",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Employee Center", 
                  description: "Provide a single, unified portal for service delivery across the enterprise with seamless access to procurement services and support.[152]",
                  features: ["Unified Portal", "Cross-Enterprise Access", "Service Integration", "Self-Service Capabilities"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Unified Experience",
                  officialFeature: true
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Management",
                  description: "Improve business efficiency with easy knowledge sharing and collaboration, powered by AI-driven search and contextual recommendations.[152][160]",
                  features: ["AI-Powered Search", "Knowledge Sharing", "Contextual Recommendations", "Collaboration Tools"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "AI-Driven Knowledge",
                  officialFeature: true
                },
                {
                  icon: Smartphone,
                  title: "Now Mobile",
                  description: "Find answers, get help, and make requests across departments from a single, native mobile app with comprehensive procurement access.[152]",
                  features: ["Native Mobile App", "Cross-Department Access", "Mobile Workflows", "Offline Capabilities"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Mobile-First",
                  officialFeature: true
                },
                {
                  icon: BarChart2,
                  title: "Reporting & Analytics",
                  description: "Create on-demand reports using a single data model for instant, up-to-date insights into procurement performance and spend analytics.[152]",
                  features: ["Real-time Reporting", "Spend Analytics", "Performance Dashboards", "Custom Reports"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Real-time Insights",
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
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Dropbox Success Story */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "With ServiceNow, we've cut procurement cycle times by more than 50% in just eight weeks, and we have complete control of our corporate spend."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Reunan Varene
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Director of Source to Pay, Dropbox
                      </p>
                    </div>
                    <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full mt-3 sm:mt-0 self-start sm:self-center">
                      Client Success Story
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED SPO CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Procurement Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for SPO &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Intelligent Procurement Operations
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional procurement operations into proactive, intelligent, and automated sourcing systems[156][160]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Procurement",
                  description: "Conversational AI transforms procurement with intelligent virtual agents that handle routine requests, provide instant answers, and guide users through complex processes.[156][160]",
                  capabilities: ["Conversational Procurement", "Intelligent Virtual Agents", "Process Guidance", "Instant Answers"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "50% Faster Resolution"
                },
                {
                  icon: Brain,
                  title: "AI Search & Recommendations",
                  description: "Advanced AI search capabilities provide contextual recommendations, intelligent catalog suggestions, and predictive insights for optimal purchasing decisions.[160]",
                  capabilities: ["AI-Powered Search", "Contextual Recommendations", "Catalog Intelligence", "Predictive Insights"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-blue-600/10",
                  highlight: "Intelligent Search",
                  metrics: "Enhanced Discovery"
                },
                {
                  icon: Workflow,
                  title: "Automated Workflow Orchestration",
                  description: "AI orchestrates end-to-end procurement workflows, eliminates manual work, and connects stakeholders with data-driven process optimization.[156][158]",
                  capabilities: ["Process Orchestration", "Workflow Automation", "Stakeholder Connection", "Data-Driven Optimization"],
                  bgGradient: "from-purple-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Automated",
                  metrics: "30% Cycle Reduction"
                },
                {
                  icon: TrendingUp,
                  title: "Spend Analytics & Intelligence",
                  description: "Real-time spend analytics with AI-powered insights enable continuous improvement, risk identification, and strategic procurement decisions.[155][158]",
                  capabilities: ["Real-time Analytics", "Spend Intelligence", "Risk Identification", "Strategic Insights"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Analytics-Driven",
                  metrics: "Complete Visibility"
                },
                {
                  icon: Shield,
                  title: "Compliance & Risk Management",
                  description: "AI-powered compliance monitoring ensures procurement policies adherence, identifies risk exposure, and automates regulatory reporting requirements.[157]",
                  capabilities: ["Compliance Monitoring", "Risk Assessment", "Policy Enforcement", "Regulatory Reporting"],
                  bgGradient: "from-red-600/20 via-orange-600/15 to-yellow-600/10",
                  highlight: "Risk Intelligence",
                  metrics: "20% Better Compliance"
                },
                {
                  icon: Users,
                  title: "Supplier Collaboration Intelligence",
                  description: "Enhanced supplier engagement through AI-driven collaboration tools, performance analytics, and integrated value chain management.[157][158]",
                  capabilities: ["Supplier Intelligence", "Performance Analytics", "Collaboration Tools", "Value Chain Integration"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Collaborative",
                  metrics: "Enhanced Partnerships"
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
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
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

        {/* SPO RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven SPO Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Procurement
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered SPO solutions deliver significant improvements in resolution speed, compliance, and employee satisfaction[155][156]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Procurement Management Key Metrics</h3>
                [161]
              </div>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Faster Request Resolution", desc: "Through AI automation", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Clock },
                { metric: "30%", label: "Reduced Cycle Time", desc: "Streamlined processes", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: Zap },
                { metric: "20%", label: "Improved Compliance", desc: "Automated enforcement", gradient: "from-purple-600 to-pink-600", bgGradient: "from-purple-50 via-pink-50 to-rose-50", icon: Shield },
                { metric: "40%", label: "Employee Satisfaction", desc: "Enhanced experience", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Heart }
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
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow SPO implementation revolutionized our procurement operations completely. We achieved 50% faster request resolution and 30% cycle time reduction within 6 months. The AI-powered Shopping Hub and case management transformed how employees engage with procurement services. Our compliance improved by 20% while employee satisfaction increased by 40% through the enhanced user experience."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Jennifer Adams, VP Procurement
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Technology Corporation
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow SPO
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Sourcing and Procurement Operations solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Sourcing and Procurement Operations and how does it transform procurement processes?",
                  answer: "ServiceNow SPO is a comprehensive AI-powered platform that transforms procurement operations through intelligent self-service, automated workflows, and comprehensive supplier engagement. It creates a single engagement layer across systems making indirect procurement easier while orchestrating teams efficiently. Organizations typically achieve 50% faster request resolution and 30% cycle time reduction through Shopping Hub e-commerce experience and intelligent case management.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: ShoppingCart
                },
                {
                  question: "How does AI enhance Sourcing and Procurement Operations capabilities?",
                  answer: "AI enhances SPO through Now Assist for conversational procurement, intelligent virtual agents, AI-powered search and recommendations, and automated compliance monitoring. Machine learning eliminates manual work, provides contextual suggestions, and optimizes procurement workflows. This results in 50% faster resolution times and 20% improved compliance through proactive automation and intelligent decision support.",
                  gradient: "from-indigo-50 via-purple-50 to-blue-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from SPO implementation?",
                  answer: "Organizations typically achieve 50% faster request resolution, 30% reduced procurement cycle time, 20% improved compliance, and 40% increased employee satisfaction. Additional benefits include Shopping Hub self-service experience, automated approval workflows, comprehensive spend analytics, and enhanced supplier collaboration. Most clients see measurable improvements within the first 4-6 months of implementation.",
                  gradient: "from-purple-50 via-blue-50 to-indigo-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow SPO integrate with existing procurement and enterprise systems?",
                  answer: "ServiceNow SPO provides extensive integration capabilities with ERP systems, supplier networks, contract management platforms, and financial systems. The platform supports real-time data synchronization, unified procurement workflows, and seamless connectivity while maintaining data security and compliance standards. Shopping Hub integrates with existing catalogs and supplier systems for comprehensive procurement management.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-blue-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-indigo-700 font-bold mr-2">A:</span>
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
                Ready to transform your procurement operations with AI-powered SPO?
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule SPO Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Procurement Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your SPO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 350+ organizations delivering exceptional procurement experiences with AI-powered ServiceNow SPO. From Shopping Hub self-service to intelligent case management, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start SPO Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download SPO Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-blue-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-indigo-200 text-xs">procurement@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-purple-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
