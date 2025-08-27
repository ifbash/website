import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Database,
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
  Building,
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
  Network
} from "lucide-react";

export default function ServiceNowWorkflowDataFabricPage() {
  // Enhanced JSON-LD with comprehensive Workflow Data Fabric data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Workflow Data Fabric Solutions - AI-Powered Enterprise Data Integration | IfBash",
    "alternateName": ["ServiceNow Workflow Data Fabric", "Data Fabric Platform", "AI Data Integration", "Enterprise Data Connectivity", "Zero-Copy Data Access", "Workflow Data Network"],
    "description": "Leading ServiceNow Workflow Data Fabric solutions with AI-powered data integration, real-time analytics, and intelligent workflow automation. 500+ implementations, 70% TCO reduction, 6x faster integration. Expert specialists delivering unified enterprise data experiences globally.",
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
      "ServiceNow Workflow Data Fabric",
      "Enterprise Data Integration",
      "Real-time Data Analytics", 
      "AI-Powered Workflows",
      "Zero-Copy Data Connections",
      "Data Governance & Security",
      "Workflow Data Network Implementation"
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
      "email": "workflow-data-fabric@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Workflow Data Fabric Solutions | AI-Powered Enterprise Data Integration | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Workflow Data Fabric solutions in Hyderabad & globally. AI-powered data integration, real-time analytics, zero-copy connections for intelligent workflows. 500+ implementations, 70% TCO reduction, expert specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow Workflow Data Fabric, enterprise data integration, AI-powered workflows, real-time analytics, zero-copy data access, workflow data network, data governance, ServiceNow data fabric solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Workflow Data Fabric Solutions | AI-Powered Enterprise Data Integration | IfBash" />
        <meta property="og:description" content="Leading ServiceNow Workflow Data Fabric solutions with 500+ implementations. AI-powered data integration, real-time analytics, expert specialists delivering unified enterprise experiences globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-workflow-data-fabric" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-workflow-data-fabric" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ Workflow Data Fabric Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 500+ Data Integration Projects
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Real-Time Data Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                    Workflow Data Fabric
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                      Enterprise Intelligence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8 max-w-2xl">
                  Transform enterprise operations with intelligent ServiceNow Workflow Data Fabric powered by{' '}
                  <span className="font-semibold text-purple-300">AI agents and real-time data</span>. Our certified specialists deliver next-generation data integration solutions that eliminate silos, accelerate workflows, and enable peak ROI with 70% TCO reduction.[67][69]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700"
                  >
                    <Database className="mr-2 h-5 w-5" />
                    Transform Data Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Data Fabric Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Agent Fabric</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Zero-Copy Connections</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Network className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Data Network Ecosystem</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Database className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-indigo-200 text-sm">Data Integrations</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">70%</div>
                  <div className="text-purple-200 text-sm">TCO Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">6x</div>
                  <div className="text-blue-200 text-sm">Faster Integration</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-purple-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Eye className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">Real-Time</div>
                  <div className="text-indigo-200 text-sm">Data Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW DATA FABRIC VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                    Next-Generation Data Integration
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Enterprise Data
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                      Operations with AI Fabric
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern enterprises struggle with data silos, slow integrations, lack of visibility, and security risks that limit AI effectiveness and hinder innovation. Gartner predicts organizations will abandon 60% of AI projects by 2026 due to lack of AI-ready data.[67] ServiceNow Workflow Data Fabric with{' '}
                    <span className="text-indigo-600 font-semibold">Workflow Data Network</span> eliminates these barriers through real-time, governed data access across any source.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>zero-copy data connections</strong> to{' '}
                    <strong>AI Agent orchestration</strong>, our comprehensive platform connects over 100 integrations across structured, unstructured, real-time and historical data sources—enabling AI agents with full context for faster, more informed decisions and peak ROI.[67][69]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from fragmented insights to enterprise-wide action through unified platforms that deliver{' '}
                    <span className="text-purple-600 font-semibold">intelligent data excellence</span> with up to 70% TCO reduction and 6x faster integration deployment.[69]
                  </p>
                </div>
                
                {/* Data Fabric Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI Agent Orchestration",
                    "Zero-Copy Data Access", 
                    "Real-Time Intelligence",
                    "Enterprise Data Governance",
                    "Workflow Data Network",
                    "Seamless Cloud Integration"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-indigo-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    Explore Data Fabric Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced workflow data fabric platform with AI-powered enterprise data integration and real-time analytics"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Data Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE WORKFLOW DATA FABRIC MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Core Data Fabric Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Workflow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Data Fabric Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow Workflow Data Fabric suite powered by AI agents, real-time data streaming, and intelligent integration capabilities for superior enterprise operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: GitBranch,
                  title: "Integration Hub",
                  description: "Connect data from 200+ pre-built spokes with custom integrations, reducing ServiceNow integration TCO and implementing integrations 3x faster.[69]",
                  features: ["200+ Pre-built Spokes", "Custom Integration Builder", "Usage Dashboard Monitoring", "Automated Performance Tracking"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "3x Faster Integration",
                  officialFeature: true
                },
                {
                  icon: Zap,
                  title: "Stream Connect",
                  description: "Work with real-time data streams from Apache Kafka and other sources with intelligent message filtering and flow triggers.[69]",
                  features: ["Real-time Data Streaming", "Apache Kafka Integration", "Message Flow Triggers", "Intelligent Data Filtering"],
                  gradient: "from-purple-600 to-blue-600",
                  bgGradient: "from-purple-50 via-blue-50 to-indigo-50",
                  highlight: "Real-Time Streaming",
                  officialFeature: true
                },
                {
                  icon: Bot,
                  title: "AI Agent Fabric", 
                  description: "Deploy AI agents across your business with Workflow Data Network, streamlining complex processes and reaching peak ROI.[67]",
                  features: ["AI Agent Orchestration", "Workflow Data Network", "Complex Process Automation", "Peak ROI Achievement"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "AI-Powered Agents",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Document Intelligence",
                  description: "Automatically extract and organize information from documents across SharePoint, Google Drive, Confluence, and more.[69]",
                  features: ["Automatic Document Processing", "Multi-Platform Connectivity", "Information Extraction", "Secure Document Integration"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Smart Document Processing",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Zero-Copy Connectors",
                  description: "Access enterprise data from Snowflake, Databricks, BigQuery, and AWS without copying, ensuring real-time data availability.[67]",
                  features: ["Zero-Copy Data Access", "Multi-Cloud Support", "Real-time Connectivity", "Enterprise Data Lakes"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "No Data Movement",
                  officialFeature: true
                },
                {
                  icon: Shield,
                  title: "Data Governance & Security",
                  description: "Establish rules, access controls, and policies to keep data secure and compliant while enabling teams and AI to operate safely.[69]",
                  features: ["Advanced Data Governance", "Access Control Policies", "Security Compliance", "Audit Trail Management"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Enterprise Security",
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
                          <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Workflow Data Network Ecosystem */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Workflow Data Network Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive ecosystem of data platforms, applications, and enterprise tools announced at Knowledge 2025[67][70]
              </p>
              
              {/* Data Platform Partners */}
              <div className="bg-gradient-to-r from-gray-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-200/50">
                <h4 className="text-xl font-bold text-center text-gray-900 mb-6">
                  Certified Data Platform Partners
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Database, name: "Snowflake", desc: "Zero-copy data cloud" },
                    { icon: Server, name: "Databricks", desc: "Unified analytics platform" },
                    { icon: CloudLightning, name: "Amazon AWS", desc: "Redshift zero-copy" },
                    { icon: Globe, name: "Google Cloud", desc: "BigQuery integration" },
                    { icon: Database, name: "Oracle", desc: "Enterprise databases" },
                    { icon: Server, name: "Microsoft", desc: "SQL Server & Azure" },
                    { icon: FileText, name: "Adobe", desc: "Document workflows" },
                    { icon: Network, name: "Boomi", desc: "API management" }
                  ].map((platform, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                      <platform.icon className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
                      <h5 className="font-semibold text-gray-900 mb-1 text-sm">{platform.name}</h5>
                      <p className="text-xs text-gray-600">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW DATA FABRIC PROCESS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
                Workflow Data Fabric Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                How Workflow Data Fabric
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  Transforms Enterprise Operations
                </span>
              </h2>
              <p className="text-xl text-indigo-100 max-w-4xl mx-auto">
                Four-step process that connects, contextualizes, acts, and governs data for intelligent enterprise transformation[69]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: Database,
                  title: "Connect Data from Anywhere",
                  description: "ServiceNow Data Fabric connects all types of data—structured, unstructured, and streaming—across internal and external systems without data transfer or duplication.[69]"
                },
                {
                  step: "02",
                  icon: Brain,
                  title: "Contextualization",
                  description: "ServiceNow contextualizes, enriches, and aligns data with workflows, resulting in faster, compliant processes and more accurate issue resolution as AI agents become context-aware.[69]"
                },
                {
                  step: "03",
                  icon: Zap,
                  title: "Perform Action",
                  description: "Deploy AI agents throughout your enterprise, automate complex processes, and gain more value from existing tools while accelerating decision-making and reaching peak ROI.[69]"
                },
                {
                  step: "04",
                  icon: Shield,
                  title: "Govern Your Data",
                  description: "Establish necessary rules, access controls, and policies to keep data secure and compliant, enabling teams and AI to operate safely on enterprise information.[69]"
                }
              ].map((process, index) => (
                <Card key={index} className="bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-blue-600/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-white/20 to-white/10 text-white text-lg font-bold px-3 py-1 rounded-full shadow-lg">
                    {process.step}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white pr-16">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-indigo-100 leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DATA FABRIC RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven Data Fabric Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Enterprise Data
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our Workflow Data Fabric solutions deliver significant improvements in data accessibility, integration speed, and operational costs[69]
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "70%", label: "TCO Reduction", desc: "Lower total cost of ownership", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: DollarSign },
                { metric: "6x", label: "Faster Integration", desc: "Accelerated deployment speed", gradient: "from-purple-600 to-blue-600", bgGradient: "from-purple-50 via-blue-50 to-indigo-50", icon: Zap },
                { metric: "100+", label: "Data Integrations", desc: "Structured & unstructured sources", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Database },
                { metric: "Real-Time", label: "Data Access", desc: "Zero-latency information", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Eye }
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
            <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow Workflow Data Fabric implementation revolutionized our enterprise data operations. We achieved 70% TCO reduction and real-time access to all our data sources within 3 months. The zero-copy connections to Snowflake and Databricks enabled our AI agents to provide instant, contextual insights while maintaining complete data security and governance. Our integration deployment is now 6x faster."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Alexander Wang, Chief Data Officer
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-purple-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Workflow Data Fabric
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow Workflow Data Fabric and enterprise data integration solutions
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Workflow Data Fabric and how does it benefit enterprises?",
                  answer: "ServiceNow Workflow Data Fabric is a comprehensive platform that connects workflows, systems, and siloed data across organizations. It enables AI agents to access enterprise data in real-time without duplication, reducing TCO by 70% and enabling 6x faster integration deployment. The platform eliminates data silos, accelerates decision-making, and powers AI-driven workflows with real-time intelligence.[69]",
                  gradient: "from-indigo-50 via-purple-50 to-blue-50",
                  icon: Database
                },
                {
                  question: "How does the new Workflow Data Network enhance AI capabilities?",
                  answer: "The Workflow Data Network, announced at Knowledge 2025, is a broad ecosystem of data platforms, applications, and enterprise tools that power AI agents and workflows with real-time intelligence. It includes partnerships with Adobe, AWS, Microsoft, Oracle, and others, enabling over 100 integrations across structured, unstructured, real-time and historical data sources to provide AI agents with full context for informed decisions.[67][70]",
                  gradient: "from-purple-50 via-blue-50 to-indigo-50",
                  icon: Bot
                },
                {
                  question: "What are zero-copy connectors and how do they work?",
                  answer: "Zero-copy connectors allow secure, scalable access to diverse data types from platforms like Amazon Redshift, Databricks, Google Cloud BigQuery, Microsoft SQL Server, Oracle, Snowflake, and Teradata without manual data movement. This eliminates operational costs, enhances governance and compliance, while providing real-time data access for AI and workflows.[67]",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Zap
                },
                {
                  question: "How does Workflow Data Fabric support data governance and security?",
                  answer: "Workflow Data Fabric establishes comprehensive rules, access controls, and policies to keep enterprise data secure and compliant. It enables teams and AI to operate safely on data while maintaining enhanced governance, compliance monitoring, and audit trails. The platform ensures that only authorized users and AI agents can access specific data sources with proper security protocols.[69]",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Shield
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-indigo-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your enterprise data operations with Workflow Data Fabric?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule Data Fabric Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Enterprise Data Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your Data Fabric
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering intelligent enterprise experiences with ServiceNow Workflow Data Fabric. From real-time data integration to AI-powered workflows, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700">
                <Database className="mr-2 h-5 w-5" />
                Start Data Fabric Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Data Fabric Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-indigo-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-purple-200 text-xs">workflow-data-fabric@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-blue-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
