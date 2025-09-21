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
  Cloud
} from "lucide-react";

export default function ServiceNowITAMPage() {
  // Enhanced JSON-LD with comprehensive ITAM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow IT Asset Management Solutions - ITAM, HAM, SAM Platform | IfBash",
    "alternateName": ["ServiceNow ITAM", "IT Asset Management", "Hardware Asset Management", "Software Asset Management", "HAM", "SAM", "Asset Lifecycle Management"],
    "description": "Leading ServiceNow IT Asset Management solutions with AI-powered automation, hardware and software asset tracking, cloud optimization, and compliance management. 500+ ITAM implementations, 85% ROI increase, 20% cost reduction. Expert ITAM specialists delivering intelligent asset management globally.",
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
      "ServiceNow IT Asset Management",
      "Hardware Asset Management",
      "Software Asset Management", 
      "Cloud Asset Optimization",
      "Asset Lifecycle Automation",
      "Compliance & Risk Management",
      "ITAM Analytics & Reporting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "210",
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
      "email": "itam@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow IT Asset Management (ITAM) Solutions | AI-Powered HAM/SAM Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow ITAM solutions in Hyderabad & globally. AI-powered hardware & software asset management, cloud optimization, compliance automation for intelligent IT operations. 500+ implementations, 85% ROI increase, expert ITAM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow ITAM, IT asset management, hardware asset management, software asset management, HAM, SAM, asset lifecycle management, cloud optimization, ServiceNow ITAM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow IT Asset Management (ITAM) Solutions | AI-Powered HAM/SAM Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow ITAM solutions with 500+ implementations. AI-powered hardware & software asset management, cloud optimization, expert specialists delivering intelligent IT operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-itam-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-itam-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-teal-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-green-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-600/15 to-green-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                ✓ ITAM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 500+ ITAM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 via-teal-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                ✓ Asset Management Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 font-semibold">
                    ServiceNow ITAM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 font-semibold">
                      Smart IT Operations
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8 max-w-2xl">
                  Transform IT asset management with intelligent ServiceNow ITAM powered by{' '}
                  <span className="font-semibold text-teal-300">AI-driven automation</span>, comprehensive lifecycle management, and unified visibility across hardware, software, and cloud assets. Our certified specialists deliver next-generation ITAM solutions that reduce costs, mitigate risks, and optimize asset utilization.[135][136]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 hover:from-green-700 hover:via-teal-700 hover:to-cyan-700"
                  >
                    <HardDrive className="mr-2 h-5 w-5" />
                    Transform Asset Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch ITAM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered ITAM</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Cloud className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Cloud Optimization</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Shield className="h-5 w-5 text-cyan-700" />
                    <span className="text-sm text-gray-900 font-semibold">Risk Management</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-600/25 via-teal-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-teal-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <HardDrive className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-green-200 text-sm">ITAM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-cyan-600/20 to-green-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-cyan-600/30 hover:to-green-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <DollarSign className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">20%</div>
                  <div className="text-teal-200 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-green-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-green-600/30 hover:to-teal-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-cyan-200 text-sm">Asset Utilization</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/25 via-cyan-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-cyan-600/30 hover:to-teal-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <LineChart className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-green-200 text-sm">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ITAM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                    Next-Generation Asset Management
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing IT Asset
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600">
                      Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern IT organizations face complex asset challenges: sprawling hardware inventories, software license compliance risks, cloud cost optimization, and security vulnerabilities across hybrid environments. ServiceNow ITAM with{' '}
                    <span className="text-green-600 font-semibold">AI-powered automation</span> transforms asset management through comprehensive lifecycle visibility, predictive analytics, and intelligent workflows that reduce costs while strengthening security posture.[131][135]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for Hardware Asset Management</strong> to{' '}
                    <strong>automated software compliance monitoring</strong>, our integrated platform manages the complete IT asset ecosystem—hardware, software, cloud, and mobile—with unified data models that provide 360° visibility and enable proactive decision-making across procurement, deployment, and retirement cycles.[138][139]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive asset tracking to intelligent, automated asset optimization through unified platforms that deliver{' '}
                    <span className="text-teal-600 font-semibold">measurable business value</span> with 20% cost reduction and 85% ROI improvement through strategic asset intelligence.
                  </p>
                </div>
                
                {/* ITAM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Asset Discovery",
                    "Automated Lifecycle Management", 
                    "Software Compliance Automation",
                    "Cloud Cost Optimization",
                    "Predictive Risk Analytics",
                    "Unified Asset Visibility"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-green-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 hover:from-green-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    Explore AI-Powered ITAM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced IT asset management platform with AI-powered automation and comprehensive lifecycle management"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">ITAM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE ITAM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Core ITAM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive IT Asset
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600">
                  Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow ITAM suite powered by AI-driven asset intelligence, automated lifecycle management, and unified visibility for superior IT operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: HardDrive,
                  title: "Hardware Asset Management (HAM)",
                  description: "Track and manage the end-to-end lifecycle of all hardware assets with Now Assist for automated fulfillment and prescriptive workflows.[138][140]",
                  features: ["Asset Lifecycle Automation", "Hardware Normalization", "Return Merchandise Authorization", "Asset Reservations"],
                  gradient: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 via-teal-50 to-cyan-50",
                  highlight: "AI-Enhanced HAM",
                  officialFeature: true
                },
                {
                  icon: Monitor,
                  title: "Software Asset Management (SAM)",
                  description: "Modernize software asset tracking to reduce spend, mitigate risk, and maintain compliance with automated license optimization and vendor audit protection.[135]",
                  features: ["License Optimization", "Compliance Automation", "Vendor Audit Protection", "Software Usage Analytics"],
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50",
                  highlight: "License Optimization",
                  officialFeature: true
                },
                {
                  icon: Cloud,
                  title: "Cloud Asset Management", 
                  description: "Gain visibility into cloud infrastructure to manage resources, optimize IT spend, and mitigate risks with automated right-sizing and cost controls.[139]",
                  features: ["Cloud Cost Optimization", "Resource Right-sizing", "Usage Analytics", "Multi-Cloud Visibility"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Cost Optimization",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Asset Lifecycle Automation",
                  description: "Speed service delivery with automated processes for the entire asset lifecycle from procurement to retirement with intelligent workflows.[135][138]",
                  features: ["Automated Onboarding", "Lifecycle Management", "Retirement Workflows", "Compliance Tracking"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "End-to-End Automation",
                  officialFeature: true
                },
                {
                  icon: Shield,
                  title: "Risk & Compliance Management",
                  description: "Identify and mitigate technology risks including vulnerabilities, license compliance, and security threats with comprehensive risk assessment.[136]",
                  features: ["Vulnerability Assessment", "Compliance Monitoring", "Risk Mitigation", "Security Analytics"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Proactive Risk Management",
                  officialFeature: true
                },
                {
                  icon: DollarSign,
                  title: "Financial & Contract Management",
                  description: "Track asset costs, manage contracts and renewals, and optimize financial performance with comprehensive budgeting and chargeback capabilities.[139]",
                  features: ["Contract Management", "Financial Tracking", "Budget Optimization", "Chargeback Automation"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "Financial Intelligence",
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
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ITAM Integration Ecosystem */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete ITAM Integration Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow ITAM integrates seamlessly with leading enterprise tools and platforms for unified asset management operations
              </p>
              
              {/* Integration Partners */}
              <div className="bg-gradient-to-r from-gray-50 via-green-50 to-teal-50 rounded-2xl p-8 border border-gray-200/50">
                <h4 className="text-xl font-bold text-center text-gray-900 mb-6">
                  Certified Integration Partners
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Cloud, name: "Microsoft Azure", desc: "SSO application usage visibility" },
                    { icon: Server, name: "IBM BigFix", desc: "Real-time endpoint data" },
                    { icon: Database, name: "Jamf Pro", desc: "Apple device management" },
                    { icon: Network, name: "Coupa", desc: "Procurement automation" },
                    { icon: MonitorSmartphone, name: "Mobile Device Management", desc: "EMM/UEM enrollment" },
                    { icon: Shield, name: "Security Tools", desc: "Vulnerability integration" },
                    { icon: Building, name: "Enterprise Software", desc: "License management" },
                    { icon: Globe, name: "Cloud Platforms", desc: "Multi-cloud visibility" }
                  ].map((platform, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                      <platform.icon className="h-8 w-8 mx-auto mb-3 text-green-600" />
                      <h5 className="font-semibold text-gray-900 mb-1 text-sm">{platform.name}</h5>
                      <p className="text-xs text-gray-600">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED ITAM CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-green-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Asset Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for ITAM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
                  Intelligent Asset Operations
                </span>
              </h2>
              <p className="text-xl text-green-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional asset management into proactive, intelligent, and automated IT operations[131][138]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Hardware Assets",
                  description: "Autonomous AI agents fulfill hardware asset requests, automate onboarding workflows, and provide intelligent recommendations for asset optimization.[138]",
                  capabilities: ["Automated Asset Fulfillment", "Intelligent Onboarding", "Smart Recommendations", "Workflow Optimization"],
                  bgGradient: "from-green-600/20 via-teal-600/15 to-cyan-600/10",
                  highlight: "AI-Enhanced",
                  metrics: "Autonomous Fulfillment"
                },
                {
                  icon: Brain,
                  title: "Predictive Asset Analytics",
                  description: "Machine learning analyzes asset patterns to predict failures, optimize refresh cycles, and prevent costly downtime with proactive insights.[136][139]",
                  capabilities: ["Failure Prediction", "Lifecycle Optimization", "Maintenance Forecasting", "Risk Assessment"],
                  bgGradient: "from-teal-600/20 via-cyan-600/15 to-green-600/10",
                  highlight: "Predictive",
                  metrics: "Proactive Prevention"
                },
                {
                  icon: Workflow,
                  title: "Automated Compliance Monitoring",
                  description: "AI continuously monitors software licenses, tracks usage patterns, and automatically generates compliance reports while preventing audit violations.[135]",
                  capabilities: ["License Monitoring", "Usage Tracking", "Automated Reporting", "Audit Protection"],
                  bgGradient: "from-cyan-600/20 via-green-600/15 to-teal-600/10",
                  highlight: "Compliance",
                  metrics: "Audit-Ready"
                },
                {
                  icon: DollarSign,
                  title: "Smart Cost Optimization",
                  description: "AI analyzes spending patterns, identifies optimization opportunities, and automatically recommends cost-saving measures across hardware, software, and cloud assets.[139]",
                  capabilities: ["Cost Analysis", "Optimization Recommendations", "Budget Forecasting", "Spend Intelligence"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Cost Intelligence",
                  metrics: "20% Cost Reduction"
                },
                {
                  icon: Shield,
                  title: "Intelligent Risk Management",
                  description: "AI-powered risk assessment identifies vulnerabilities, assesses security posture, and automatically prioritizes remediation actions for comprehensive protection.[136]",
                  capabilities: ["Vulnerability Scanning", "Risk Scoring", "Automated Prioritization", "Remediation Planning"],
                  bgGradient: "from-red-600/20 via-orange-600/15 to-yellow-600/10",
                  highlight: "Risk Intelligence",
                  metrics: "Comprehensive Protection"
                },
                {
                  icon: Eye,
                  title: "Unified Asset Visibility",
                  description: "Real-time dashboards provide 360° visibility into all IT assets with AI-powered insights, enabling data-driven decisions and strategic planning.[134]",
                  capabilities: ["360° Visibility", "Real-time Dashboards", "Executive Insights", "Strategic Planning"],
                  bgGradient: "from-purple-600/20 via-pink-600/15 to-red-600/10",
                  highlight: "Complete Visibility",
                  metrics: "360° Asset View"
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
                    <p className="text-green-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
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

        {/* ITAM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Proven ITAM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable IT Asset
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600">
                  Management Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered ITAM solutions deliver significant improvements in cost reduction, asset utilization, and compliance efficiency[134][136]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Asset Management Key Metrics</h3>
                [141]
              </div>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "20%", label: "Asset Cost Reduction", desc: "Through optimization", gradient: "from-green-600 to-teal-600", bgGradient: "from-green-50 via-teal-50 to-cyan-50", icon: DollarSign },
                { metric: "30%", label: "Improved Utilization", desc: "Better asset efficiency", gradient: "from-teal-600 to-cyan-600", bgGradient: "from-teal-50 via-cyan-50 to-blue-50", icon: TrendingUp },
                { metric: "40%", label: "Faster Compliance", desc: "Automated reporting", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Shield },
                { metric: "85%", label: "Increased ROI", desc: "Strategic asset value", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: LineChart }
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
            <div className="bg-gradient-to-br from-white via-green-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-green-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow ITAM implementation transformed our asset management operations completely. We achieved 20% cost reduction and 85% ROI improvement within 7 months. The AI-powered hardware asset management with Now Assist automated 70% of our routine tasks, while comprehensive software asset tracking eliminated compliance risks and reduced license costs significantly. Our asset utilization improved by 30% through intelligent optimization."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        David Park, IT Operations Director
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Manufacturing Enterprise
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-green-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow ITAM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow IT Asset Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow IT Asset Management and how does it transform asset operations?",
                  answer: "ServiceNow ITAM is a comprehensive AI-powered platform that manages the complete lifecycle of hardware, software, and cloud assets from procurement to retirement. It transforms asset operations through automated discovery, intelligent workflows, predictive analytics, and unified visibility. Organizations typically achieve 20% cost reduction and 85% ROI improvement through optimized asset utilization and automated compliance management.",
                  gradient: "from-green-50 via-teal-50 to-cyan-50",
                  icon: HardDrive
                },
                {
                  question: "How does AI enhance IT Asset Management capabilities?",
                  answer: "AI enhances ITAM through Now Assist for automated asset fulfillment, predictive analytics for failure prevention, intelligent cost optimization, and automated compliance monitoring. Machine learning algorithms analyze asset patterns, predict maintenance needs, optimize refresh cycles, and provide proactive recommendations. This results in 30% improved asset utilization and 40% faster compliance reporting through intelligent automation.",
                  gradient: "from-teal-50 via-cyan-50 to-green-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from ITAM implementation?",
                  answer: "Organizations typically achieve 20% reduction in asset costs, 30% improved asset utilization, 40% faster compliance reporting, and 85% ROI increase. Additional benefits include automated lifecycle management, proactive risk mitigation, comprehensive visibility across hybrid environments, and seamless integration with existing IT operations. Most clients see measurable improvements within the first 6-8 months of implementation.",
                  gradient: "from-cyan-50 via-green-50 to-teal-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow ITAM integrate with existing enterprise systems?",
                  answer: "ServiceNow ITAM provides extensive integration capabilities with Microsoft Azure, IBM BigFix, Jamf Pro, Coupa, and other enterprise tools. The platform supports real-time data synchronization, automated workflows across systems, and unified asset visibility while maintaining data security and compliance standards. Native CMDB integration ensures consistent asset data across all IT operations.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-green-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your IT asset operations with AI-powered ITAM?
              </p>
              <Button className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 hover:from-green-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule ITAM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-green-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform IT Asset Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your ITAM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering intelligent asset management with AI-powered ServiceNow ITAM. From automated hardware management to software compliance optimization, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 hover:from-green-700 hover:via-teal-700 hover:to-cyan-700">
                <HardDrive className="mr-2 h-5 w-5" />
                Start ITAM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download ITAM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-green-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-green-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-teal-200 text-xs">itam@ifbash.com</p>
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
