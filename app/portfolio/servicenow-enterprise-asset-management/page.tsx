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
  Cog
} from "lucide-react";

export default function ServiceNowEAMPage() {
  // Enhanced JSON-LD with comprehensive EAM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Enterprise Asset Management Solutions - AI-Powered EAM Platform | IfBash",
    "alternateName": ["ServiceNow EAM", "Enterprise Asset Management", "Physical Asset Management", "Asset Lifecycle Management", "Operational Technology Asset Management", "EAM Solutions"],
    "description": "Leading ServiceNow Enterprise Asset Management solutions with AI-powered automation, comprehensive asset lifecycle management, and operational technology integration. 400+ EAM implementations, 30% downtime reduction, 40% improved compliance. Expert EAM specialists delivering intelligent asset operations globally.",
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
      "ServiceNow Enterprise Asset Management",
      "Asset Lifecycle Management",
      "Operational Technology Asset Management", 
      "Planned Maintenance Management",
      "Asset Inventory Optimization",
      "Compliance & Risk Management",
      "EAM Analytics & Reporting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180",
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
      "email": "eam@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Enterprise Asset Management (EAM) Solutions | AI-Powered Physical Asset Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow EAM solutions in Hyderabad & globally. AI-powered enterprise asset management, operational technology integration, planned maintenance automation for intelligent physical asset operations. 400+ implementations, 30% downtime reduction, expert EAM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow EAM, Enterprise Asset Management, physical asset management, operational technology asset management, asset lifecycle management, planned maintenance, ServiceNow EAM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Enterprise Asset Management (EAM) Solutions | AI-Powered Physical Asset Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow EAM solutions with 400+ implementations. AI-powered enterprise asset management, operational technology integration, expert specialists delivering intelligent physical asset operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-eam-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-eam-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50/30 to-gray-50/30">


        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-600/10 via-zinc-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-zinc-600/10 via-gray-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600/20 to-zinc-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-zinc-600/15 to-gray-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-gray-500 via-zinc-500 to-slate-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                ✓ EAM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-zinc-600 via-gray-600 to-slate-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-zinc-500/25 transition-all duration-300">
                ✓ 400+ EAM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-gray-500 via-zinc-600 to-slate-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                ✓ Asset Management Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-400 font-semibold">
                    ServiceNow EAM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-400 font-semibold">
                      Enterprise Assets
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 max-w-2xl">
                  Transform enterprise asset management with intelligent ServiceNow EAM powered by{' '}
                  <span className="font-semibold text-zinc-300">AI-driven automation</span>, comprehensive lifecycle management, and operational technology integration. Our certified specialists deliver next-generation EAM solutions that reduce downtime, control costs, and optimize asset performance.[144][145]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gray-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600 hover:from-gray-700 hover:via-zinc-700 hover:to-slate-700"
                  >
                    <Cog className="mr-2 h-5 w-5" />
                    Transform Asset Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch EAM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered EAM</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Workflow className="h-5 w-5 text-zinc-600" />
                    <span className="text-sm text-gray-900 font-semibold">Lifecycle Management</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Cog className="h-5 w-5 text-slate-700" />
                    <span className="text-sm text-gray-900 font-semibold">OT Integration</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-600/25 via-zinc-600/20 to-slate-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-gray-600/35 hover:via-zinc-600/30 hover:to-slate-600/25 transition-all duration-300 border border-gray-400/20 shadow-xl hover:shadow-gray-500/20">
                  <Cog className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-gray-200 text-sm">EAM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-zinc-600/25 via-slate-600/20 to-gray-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-zinc-600/35 hover:via-slate-600/30 hover:to-gray-600/25 transition-all duration-300 border border-zinc-400/20 shadow-xl hover:shadow-zinc-500/20">
                  <Clock className="h-12 w-12 text-zinc-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-zinc-200 text-sm">Downtime Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-slate-600/25 via-gray-600/20 to-zinc-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-slate-600/35 hover:via-gray-600/30 hover:to-zinc-600/25 transition-all duration-300 border border-slate-400/20 shadow-xl hover:shadow-slate-500/20">
                  <DollarSign className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">20%</div>
                  <div className="text-slate-200 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-gray-600/25 via-slate-600/20 to-zinc-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-gray-600/35 hover:via-slate-600/30 hover:to-zinc-600/25 transition-all duration-300 border border-gray-400/20 shadow-xl hover:shadow-gray-500/20">
                  <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-gray-200 text-sm">Better Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EAM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50/30 to-slate-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-gray-100 via-zinc-100 to-slate-100 text-gray-700 mb-6 px-4 py-2 border border-gray-200/50">
                    Next-Generation Asset Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Enterprise Asset
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600">
                      Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern enterprises struggle with complex physical asset challenges: unplanned downtime, spiraling maintenance costs, regulatory compliance requirements, and limited visibility across diverse asset portfolios. ServiceNow EAM with{' '}
                    <span className="text-gray-600 font-semibold">AI-powered automation</span> transforms enterprise asset management through comprehensive lifecycle visibility, predictive maintenance, and intelligent workflows that optimize asset performance while controlling CapEx and OpEx.[144][147]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>operational technology asset management</strong> to{' '}
                    <strong>indoor mapping for precise asset tracking</strong>, our comprehensive platform manages physical business assets across manufacturing, utilities, healthcare, and transportation sectors with unified data models that provide real-time insights and enable strategic decision-making throughout the asset lifecycle.[143][145]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive maintenance to proactive asset optimization through unified platforms that deliver{' '}
                    <span className="text-zinc-600 font-semibold">measurable operational excellence</span> with 30% downtime reduction and 40% improved compliance through intelligent automation.
                  </p>
                </div>
                
                {/* EAM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Asset Intelligence",
                    "Predictive Maintenance Automation", 
                    "Operational Technology Integration",
                    "Comprehensive Lifecycle Management",
                    "Real-time Performance Analytics",
                    "Regulatory Compliance Automation"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600 hover:from-gray-700 hover:via-zinc-700 hover:to-slate-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                    Explore AI-Powered EAM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-gray-100 via-zinc-100 to-slate-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced enterprise asset management platform with AI-powered automation and comprehensive lifecycle management"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">EAM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE EAM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-slate-50/50 to-zinc-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-gray-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-zinc-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-gray-100 via-zinc-100 to-slate-100 text-gray-700 mb-6 px-4 py-2 border border-gray-200/50">
                Core EAM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600">
                  Asset Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow EAM suite powered by AI-driven asset intelligence, automated maintenance workflows, and comprehensive lifecycle management for superior enterprise operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Workflow,
                  title: "Enterprise Asset Lifecycle Management",
                  description: "Implement strategic plans, risk scoring, and financial control access across the complete asset lifecycle from planning to disposal.[143]",
                  features: ["Strategic Asset Planning", "Risk Assessment & Scoring", "Financial Control Integration", "Lifecycle Optimization"],
                  gradient: "from-gray-600 to-zinc-600",
                  bgGradient: "from-gray-50 via-zinc-50 to-slate-50",
                  highlight: "Complete Lifecycle",
                  officialFeature: true
                },
                {
                  icon: Cog,
                  title: "Operational Technology Asset Management",
                  description: "Automate the full lifecycle of OT assets with prescriptive workflows across functions, integrating IT and OT environments seamlessly.[143][148]",
                  features: ["OT Asset Integration", "Prescriptive Workflows", "Cross-Function Automation", "IT-OT Convergence"],
                  gradient: "from-zinc-600 to-slate-600",
                  bgGradient: "from-zinc-50 via-slate-50 to-gray-50",
                  highlight: "OT Integration",
                  officialFeature: true
                },
                {
                  icon: Package,
                  title: "Enterprise Asset Inventory Management", 
                  description: "Optimize asset inventory across all warehouse and stockroom locations with comprehensive tracking, auditing, and reconciliation capabilities.[143]",
                  features: ["Multi-Location Inventory", "Automated Reconciliation", "Real-time Tracking", "Audit Management"],
                  gradient: "from-slate-600 to-gray-600",
                  bgGradient: "from-slate-50 via-gray-50 to-zinc-50",
                  highlight: "Multi-Location Tracking",
                  officialFeature: true
                },
                {
                  icon: Calendar,
                  title: "Planned Maintenance Management",
                  description: "Create and manage enterprise asset maintenance plans with automated scheduling, predictive analytics, and performance monitoring.[144][147]",
                  features: ["Predictive Maintenance", "Automated Scheduling", "Performance Analytics", "Work Order Management"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Predictive Analytics",
                  officialFeature: true
                },
                {
                  icon: MapPin,
                  title: "Indoor Mapping for Assets",
                  description: "Track assets using precise and accurate location information with advanced mapping technology and real-time positioning.[143]",
                  features: ["Precise Asset Location", "Real-time Positioning", "Mapping Technology", "Location Analytics"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Precise Tracking",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Contract & Renewal Management",
                  description: "Renew enterprise asset contracts in one workspace with guided actions, automated notifications, and comprehensive contract lifecycle management.[143]",
                  features: ["Contract Lifecycle Management", "Automated Renewals", "Guided Workflows", "Compliance Tracking"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Automated Renewals",
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
                          <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* EAM Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete EAM Package Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow EAM Professional package that scales with your enterprise asset management needs, from basic lifecycle management to advanced analytics
              </p>
              
              {/* EAM Professional Package */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-zinc-50 rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-gray-600 text-white mr-3">Professional</Badge>
                    Complete Enterprise Asset Management
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-800 mb-3">Core Capabilities</h5>
                      {[
                        "Enterprise Asset Lifecycle Management",
                        "Planned Maintenance Management", 
                        "Performance Analytics for EAM",
                        "Predictive Intelligence",
                        "Indoor Mapping for Assets",
                        "Asset Inventory Management"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-800 mb-3">Advanced Features</h5>
                      {[
                        "Operational Technology Asset Management",
                        "Contract & Renewal Management", 
                        "Asset Calibration Management",
                        "Multi-Component Asset Relationships",
                        "Asset Total Cost of Ownership",
                        "Custom Bundled Tables¹"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <p className="text-xs text-gray-800"><strong>Note:</strong> ¹Custom bundled tables are primarily for configuration of packaged applications following the Unrestricted User model.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED EAM CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-600/10 via-zinc-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-zinc-600/10 via-gray-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-gray-500/20 via-zinc-500/20 to-slate-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Asset Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI Platform for EAM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-400">
                  Intelligent Asset Operations
                </span>
              </h2>
              <p className="text-xl text-gray-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional asset management into proactive, intelligent, and automated enterprise operations[144][147]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "AI-Powered Asset Intelligence",
                  description: "Leverage machine learning to predict asset failures, optimize maintenance schedules, and provide intelligent recommendations for asset performance enhancement.[144]",
                  capabilities: ["Failure Prediction", "Maintenance Optimization", "Performance Analytics", "Intelligent Recommendations"],
                  bgGradient: "from-gray-600/20 via-zinc-600/15 to-slate-600/10",
                  highlight: "AI-Enhanced",
                  metrics: "Predictive Insights"
                },
                {
                  icon: Brain,
                  title: "Predictive Maintenance Analytics",
                  description: "Advanced analytics transform historical asset data into actionable maintenance insights, reducing unplanned downtime and extending asset lifespan.[147][148]",
                  capabilities: ["Predictive Analytics", "Maintenance Forecasting", "Asset Health Monitoring", "Lifecycle Optimization"],
                  bgGradient: "from-zinc-600/20 via-slate-600/15 to-gray-600/10",
                  highlight: "Predictive",
                  metrics: "30% Downtime Reduction"
                },
                {
                  icon: Workflow,
                  title: "Automated Asset Workflows",
                  description: "Prescriptive workflows automate asset lifecycle processes from acquisition to disposal, ensuring consistent operations and compliance.[144][145]",
                  capabilities: ["Workflow Automation", "Process Standardization", "Compliance Automation", "Lifecycle Management"],
                  bgGradient: "from-slate-600/20 via-gray-600/15 to-zinc-600/10",
                  highlight: "Automated",
                  metrics: "Process Standardization"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Analytics & Insights",
                  description: "Comprehensive analytics provide real-time visibility into asset performance, utilization metrics, and cost optimization opportunities.[143][144]",
                  capabilities: ["Real-time Dashboards", "Performance Metrics", "Cost Analysis", "Utilization Tracking"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Analytics-Driven",
                  metrics: "Real-time Visibility"
                },
                {
                  icon: Shield,
                  title: "Risk Management & Compliance",
                  description: "AI-powered risk assessment identifies potential compliance issues, generates risk heatmaps, and automates regulatory reporting requirements.[144]",
                  capabilities: ["Risk Assessment", "Compliance Monitoring", "Regulatory Reporting", "Audit Trail Management"],
                  bgGradient: "from-red-600/20 via-orange-600/15 to-yellow-600/10",
                  highlight: "Risk Intelligence",
                  metrics: "40% Better Compliance"
                },
                {
                  icon: DollarSign,
                  title: "Financial Control & Optimization",
                  description: "Advanced financial controls manage CapEx and OpEx across asset portfolios with comprehensive cost analysis and budget optimization.[143][145]",
                  capabilities: ["CapEx/OpEx Control", "Cost Analysis", "Budget Optimization", "Financial Reporting"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Financial Control",
                  metrics: "20% Cost Reduction"
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
                    <p className="text-gray-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
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

        {/* EAM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-zinc-50 to-slate-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Proven EAM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Enterprise Asset
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600">
                  Management Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered EAM solutions deliver significant improvements in downtime reduction, cost optimization, and compliance management[144][145]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Asset Management Key Metrics</h3>
                [151]
              </div>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "30%", label: "Reduced Downtime", desc: "Through predictive maintenance", gradient: "from-gray-600 to-zinc-600", bgGradient: "from-gray-50 via-zinc-50 to-slate-50", icon: Clock },
                { metric: "20%", label: "Cost Reduction", desc: "CapEx and OpEx optimization", gradient: "from-zinc-600 to-slate-600", bgGradient: "from-zinc-50 via-slate-50 to-gray-50", icon: DollarSign },
                { metric: "15%", label: "Asset Utilization", desc: "Improved performance", gradient: "from-slate-600 to-gray-600", bgGradient: "from-slate-50 via-gray-50 to-zinc-50", icon: TrendingUp },
                { metric: "40%", label: "Better Compliance", desc: "Automated reporting", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Shield }
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
            <div className="bg-gradient-to-br from-white via-gray-50 to-zinc-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-500 to-zinc-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow EAM implementation revolutionized our enterprise asset operations completely. We achieved 30% downtime reduction and 20% cost optimization within 8 months. The AI-powered predictive maintenance and operational technology integration transformed how we manage our physical assets. Our compliance improved by 40% while operational efficiency increased dramatically across all facilities."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Robert Martinez, VP Asset Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Manufacturing Corporation
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50/30 to-zinc-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-gray-100 to-zinc-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow EAM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Enterprise Asset Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Enterprise Asset Management and how does it transform physical asset operations?",
                  answer: "ServiceNow EAM is a comprehensive AI-powered platform that manages the complete lifecycle of physical business assets from planning to disposal. It transforms asset operations through predictive maintenance, operational technology integration, and intelligent workflows. Organizations typically achieve 30% downtime reduction and 20% cost optimization through automated lifecycle management, precise asset tracking, and compliance automation across diverse asset portfolios.",
                  gradient: "from-gray-50 via-zinc-50 to-slate-50",
                  icon: Cog
                },
                {
                  question: "How does AI enhance Enterprise Asset Management capabilities?",
                  answer: "AI enhances EAM through predictive maintenance analytics, automated asset workflows, intelligent risk assessment, and performance optimization. Machine learning algorithms analyze asset patterns to predict failures, optimize maintenance schedules, and provide recommendations for asset lifecycle management. This results in 30% downtime reduction and 40% improved compliance through proactive maintenance and automated reporting.",
                  gradient: "from-zinc-50 via-slate-50 to-gray-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from EAM implementation?",
                  answer: "Organizations typically achieve 30% reduced downtime, 20% cost reduction in CapEx and OpEx, 15% improved asset utilization, and 40% better compliance. Additional benefits include automated maintenance workflows, operational technology integration, comprehensive asset visibility, and regulatory compliance automation. Most clients see measurable improvements within the first 6-8 months of implementation.",
                  gradient: "from-slate-50 via-gray-50 to-zinc-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow EAM integrate with operational technology and existing systems?",
                  answer: "ServiceNow EAM provides comprehensive integration with operational technology environments, SCADA systems, IoT sensors, and enterprise platforms. The platform supports IT-OT convergence through unified data models, real-time monitoring, and automated workflows that connect physical assets with digital operations. Native integration with CMDB, ITSM, and security operations ensures consistent asset data across all enterprise systems.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gray-600 to-zinc-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-gray-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-zinc-700 font-bold mr-2">A:</span>
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
                Ready to transform your enterprise asset operations with AI-powered EAM?
              </p>
              <Button className="bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600 hover:from-gray-700 hover:via-zinc-700 hover:to-slate-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule EAM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-600/10 via-zinc-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-zinc-600/10 via-gray-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-gray-500/20 via-zinc-500/20 to-slate-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Enterprise Asset Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your EAM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-zinc-400 to-slate-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
              Join 400+ organizations delivering exceptional asset performance with AI-powered ServiceNow EAM. From predictive maintenance to operational technology integration, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gray-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-gray-600 via-zinc-600 to-slate-600 hover:from-gray-700 hover:via-zinc-700 hover:to-slate-700">
                <Cog className="mr-2 h-5 w-5" />
                Start EAM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download EAM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-gray-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-zinc-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-zinc-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-zinc-200 text-xs">eam@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-slate-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-slate-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
