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
  Code,
  Calculator,
  TestTube,
  Computer
} from "lucide-react";

export default function ServiceNowAppEnginePage() {
  // Enhanced JSON-LD with comprehensive App Engine data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow App Engine & Custom App Development Solutions - AI-Powered Low-Code Platform | IfBash",
    "alternateName": ["ServiceNow App Engine", "Low-Code Development", "Citizen Development", "Custom App Development", "AI-Powered Development", "Workflow Apps"],
    "description": "Leading ServiceNow App Engine solutions with AI-powered low-code development, Now Assist for Creator, and comprehensive app lifecycle management. 500+ custom app implementations, 3x faster development, 10 days developer ramp-up. Expert low-code specialists delivering intelligent application development globally.",
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
      "ServiceNow App Engine Development",
      "AI-Powered Low-Code Solutions",
      "Custom Application Development", 
      "Citizen Development Enablement",
      "Workflow App Creation",
      "App Lifecycle Management",
      "Digital Process Automation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
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
      "email": "appengine@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow App Engine & Custom App Development Solutions | AI-Powered Low-Code Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow App Engine solutions in Hyderabad & globally. AI-powered low-code development, Now Assist for Creator, citizen development enablement for intelligent workflow applications. 500+ implementations, 3x faster development, expert app development specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow App Engine, low-code development, citizen development, custom app development, Now Assist for Creator, workflow apps, digital process automation, ServiceNow App Engine solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow App Engine & Custom App Development Solutions | AI-Powered Low-Code Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow App Engine solutions with 500+ implementations. AI-powered low-code development, Now Assist for Creator, expert specialists delivering intelligent workflow applications globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-app-engine-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-app-engine-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-violet-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-violet-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ✓ Low-Code Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 500+ App Engine Solutions
              </Badge>
              <Badge className="bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ✓ Citizen Development Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 font-semibold">
                    App Engine
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 font-semibold">
                      Rapid Innovation
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-violet-100 leading-relaxed mb-8 max-w-2xl">
                  Transform business processes with intelligent ServiceNow App Engine powered by{' '}
                  <span className="font-semibold text-purple-300">AI-driven development</span>, low-code workflow creation, and citizen development enablement. Our certified specialists deliver next-generation app development solutions that accelerate innovation, reduce technical debt, and democratize application creation.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-violet-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Build Smart Apps
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch App Engine Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-violet-600" />
                    <span className="text-sm text-gray-900 font-semibold">Now Assist for Creator</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Computer className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Low-Code Studio</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">Citizen Development</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <Code className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-violet-200 text-sm">App Engine Solutions</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-indigo-600/30 hover:to-violet-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">3x</div>
                  <div className="text-purple-200 text-sm">Faster Development</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-violet-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-violet-600/30 hover:to-purple-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-indigo-200 text-sm">Days Developer Ramp-up</div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <DollarSign className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">66%</div>
                  <div className="text-violet-200 text-sm">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APP ENGINE VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200/50">
                    Next-Generation Low-Code Platform
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing App Development
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                      with AI Intelligence
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern organizations struggle with application development backlogs, shadow IT proliferation, lengthy development cycles, and technical skill shortages. ServiceNow App Engine with{' '}
                    <span className="text-violet-600 font-semibold">AI-powered development assistance</span> transforms app creation through intelligent low-code tools, guided workflows, and comprehensive governance that enables 3x faster development while maintaining enterprise security and compliance.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for Creator with generative AI</strong> to{' '}
                    <strong>App Engine Studio's visual development environment</strong>, our comprehensive platform democratizes app development across technical and business users with drag-and-drop components, prebuilt templates, and intelligent recommendations that reduce the need for specialized coding skills while delivering enterprise-grade applications.
                  </p>
                  <p className="leading-relaxed">
                    We help organizations evolve from traditional development bottlenecks to agile, citizen-enabled innovation through unified platforms that deliver{' '}
                    <span className="text-purple-600 font-semibold">measurable development acceleration</span> with proper governance and scalability.
                  </p>
                </div>
                
                {/* App Engine Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Development Assistant",
                    "Visual Low-Code Environment", 
                    "Citizen Development Enablement",
                    "Enterprise-Grade Governance",
                    "Automated Testing & Deployment",
                    "Workflow Process Automation"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-violet-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                    Explore AI-Powered App Engine
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                    alt="Modern low-code development platform with AI-powered assistance and visual workflow creation for rapid application development"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">App Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESJARDINS SUCCESS STORY */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-white via-violet-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border border-violet-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow development is three times faster than traditional application development...New developers get up to speed in 10 days or less."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Jean-Pierre Thibert
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Shared Services Director, Desjardins
                      </p>
                    </div>
                    <div className="flex items-center mt-3 sm:mt-0 space-x-4">
                      <Badge className="bg-violet-600 text-white px-3 py-1 rounded-full">
                        3x Faster Development
                      </Badge>
                      <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full">
                        10 Days Ramp-up
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE APP ENGINE FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-violet-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200/50">
                Core App Engine Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Low-Code
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  Development Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow App Engine suite with AI-powered development tools, visual environments, and comprehensive governance for enterprise-scale application development
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Creator",
                  description: "AI-powered development assistant that uses generative AI to boost productivity with intelligent code recommendations, flow generation, and automated app creation.",
                  features: ["AI Code Generation", "Flow Automation", "Natural Language Processing", "Intelligent Recommendations"],
                  gradient: "from-violet-600 to-purple-600",
                  bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
                  highlight: "GenAI-Powered",
                  officialFeature: true
                },
                {
                  icon: Computer,
                  title: "App Engine Studio",
                  description: "Visual low-code development environment with drag-and-drop components, prebuilt templates, and guided workflows for rapid application creation at scale.",
                  features: ["Drag-and-Drop Builder", "Prebuilt Templates", "Visual Development", "Guided Workflows"],
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50",
                  highlight: "Visual Low-Code",
                  officialFeature: true
                },
                {
                  icon: Shield,
                  title: "App Engine Management Center", 
                  description: "Comprehensive governance and lifecycle management for low-code development with approval workflows, role-based access, and centralized monitoring.",
                  features: ["Development Governance", "Approval Workflows", "Role-Based Access", "Lifecycle Management"],
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50",
                  highlight: "Enterprise Governance",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Flow Designer & Process Automation",
                  description: "Create automated workflows across departments and systems with no-code playbooks, process mining, and intelligent workflow orchestration.",
                  features: ["No-Code Workflows", "Process Automation", "Cross-System Integration", "Intelligent Orchestration"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Process Automation",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Citizen Development Enablement",
                  description: "Enable business users to create applications with delegated development, guided creation tools, and comprehensive training resources.",
                  features: ["Delegated Development", "Business User Tools", "Guided Creation", "Training Resources"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Citizen-Friendly",
                  officialFeature: true
                },
                {
                  icon: TestTube,
                  title: "Automated Testing Framework",
                  description: "Automated testing capabilities that reduce risk from customizations, accelerate upgrades, and ensure application quality with continuous testing.",
                  features: ["Automated Testing", "Quality Assurance", "Upgrade Safety", "Continuous Integration"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Quality Assurance",
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
                          <CheckCircle className="h-4 w-4 text-violet-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* App Engine Packages */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                App Engine Package Options
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow App Engine offers Starter and Enterprise packages that scale with your development needs, from basic low-code tools to comprehensive citizen development platforms
              </p>
              
              {/* Package Comparison */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Starter Package */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-violet-600 text-white mr-3">Starter</Badge>
                    Growing Businesses
                  </h4>
                  <p className="text-gray-600 mb-6">For businesses that want to grow and evolve workflows with custom applications.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Core Features</h5>
                    {[
                      "ServiceNow Studio",
                      "Mobile App Builder", 
                      "Guided Application Creator",
                      "Delegated Development",
                      "Flow Designer",
                      "Process Automation Designer",
                      "Automated Testing Framework"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-violet-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enterprise Package */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 text-white mr-3">Enterprise</Badge>
                    Innovation at Scale
                  </h4>
                  <p className="text-gray-600 mb-6">For businesses looking to app development as a means to innovate at scale across the enterprise.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Advanced Features</h5>
                    {[
                      "All Starter Features",
                      "App Engine Studio", 
                      "Creator Studio",
                      "App Engine Management Center",
                      "Prebuilt Templates",
                      "Process Mining",
                      "Performance Analytics",
                      "Virtual Agent",
                      "Predictive Intelligence"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT SUCCESS STORIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Client Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Organizations Innovating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  with App Engine
                </span>
              </h2>
            </div>
            
            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  company: "Dai-ichi Life Insurance",
                  achievement: "66% cost reduction",
                  description: "Transformed customer experiences and reduced operational costs through automated workflows and digital processes",
                  icon: Building,
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  company: "Bayer",
                  achievement: "Freed legal and compliance teams",
                  description: "Used App Engine to eliminate repetitive manual tasks, allowing teams to focus on higher-value strategic work",
                  icon: Heart,
                  gradient: "from-purple-600 to-indigo-600"
                },
                {
                  company: "NTT Data", 
                  achievement: "65% faster case closure",
                  description: "Unlocked efficiency with low-code apps that dramatically accelerated case resolution and improved service delivery",
                  icon: Zap,
                  gradient: "from-indigo-600 to-blue-600"
                },
                {
                  company: "Novant Health",
                  achievement: "Citizen development success",
                  description: "Unlocked the limitless potential of people by enabling citizen developers to create business-critical applications",
                  icon: Users,
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  company: "Ndlovu Care Group",
                  achievement: "Digital healthcare transformation",
                  description: "Digitized clinical healthcare processes, improving outcomes in remote communities and transforming patient care",
                  icon: Heart,
                  gradient: "from-red-600 to-pink-600"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${story.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <story.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-violet-600 font-semibold mb-3">{story.achievement}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENHANCED FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-violet-50/50 to-purple-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-violet-100 to-purple-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow App Engine
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow App Engine solutions and low-code development implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow App Engine and how does it accelerate application development?",
                  answer: "ServiceNow App Engine is a comprehensive low-code development platform that enables both technical and non-technical users to create custom applications rapidly. It accelerates development through AI-powered tools like Now Assist for Creator, visual drag-and-drop interfaces, prebuilt templates, and automated workflows. Organizations typically achieve 3x faster development compared to traditional methods, with new developers becoming productive in just 10 days.",
                  gradient: "from-violet-50 via-purple-50 to-indigo-50",
                  icon: Code
                },
                {
                  question: "How does AI enhance App Engine capabilities and developer productivity?",
                  answer: "AI enhances App Engine through Now Assist for Creator, which provides intelligent code recommendations, automated flow generation, and natural language processing for app creation. The AI assistant can generate applications from simple descriptions, create workflows automatically, and provide contextual suggestions throughout the development process. This results in significantly improved developer productivity and enables citizen developers to create sophisticated applications without extensive coding knowledge.",
                  gradient: "from-purple-50 via-indigo-50 to-violet-50",
                  icon: Bot
                },
                {
                  question: "What governance and security features ensure safe citizen development?",
                  answer: "App Engine provides comprehensive governance through the App Engine Management Center, which includes approval workflows, role-based access controls, development templates, and centralized monitoring. The platform ensures security through automated testing frameworks, compliance checks, and enterprise-grade security controls. Organizations can set development guardrails while enabling business users to innovate safely within approved boundaries.",
                  gradient: "from-indigo-50 via-violet-50 to-purple-50",
                  icon: Shield
                },
                {
                  question: "What package options are available and how do they scale with business needs?",
                  answer: "App Engine offers Starter and Enterprise packages. Starter includes core development tools like ServiceNow Studio, Flow Designer, and basic automation capabilities for growing businesses. Enterprise adds App Engine Studio, Creator Studio, Management Center, prebuilt templates, process mining, and advanced analytics for organizations seeking innovation at scale. Both packages include comprehensive support and can be customized based on specific requirements.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Package
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-violet-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-purple-700 font-bold mr-2">A:</span>
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
                Ready to accelerate your application development with AI-powered App Engine?
              </p>
              <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule App Engine Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-violet-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Application Development?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your App Engine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Innovation Journey
              </span>
            </h2>
            
            <p className="text-xl text-violet-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering rapid innovation with AI-powered ServiceNow App Engine. From citizen development to enterprise governance, start your low-code transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-violet-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700">
                <Code className="mr-2 h-5 w-5" />
                Start App Engine Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download App Engine Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-violet-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-violet-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-purple-200 text-xs">appengine@ifbash.com</p>
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
