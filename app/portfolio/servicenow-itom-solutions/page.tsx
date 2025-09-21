import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  Network,
  MonitorSmartphone,
  Layers,
  Bot,
  Shield,
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
  Search,
  Headphones,
  CloudLightning,
  LineChart,
  BarChart3,
  Route,
  Lock,
  Server,
  Gauge,
  Radar,
  Building,
  MessageSquare,
  Lightbulb,
  Map,
  FileText,
  Package
} from "lucide-react";

export default function ServiceNowITOMPage() {
  // Enhanced JSON-LD with comprehensive ITOM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow ITOM Solutions - AI-Powered IT Operations Management | IfBash",
    "alternateName": ["ServiceNow ITOM", "IT Operations Management", "ITOM Solutions", "AIOps", "Infrastructure Monitoring", "Service Mapping"],
    "description": "Leading ServiceNow ITOM solutions with AI-powered operations, infrastructure visibility, and automated remediation. 500+ ITOM implementations, 55% fewer outages, 60% faster root-cause identification. Certified ITOM specialists delivering intelligent IT operations globally.",
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
      "ServiceNow ITOM Solutions",
      "AI-Powered Infrastructure Monitoring",
      "Service Mapping & Discovery", 
      "Event Management & AIOps",
      "Cloud Operations Management",
      "Configuration Management Database",
      "ITOM Analytics & Reporting"
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
      "email": "itom@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow ITOM Solutions | AI-Powered IT Operations Management | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow ITOM solutions in Hyderabad & globally. AI-powered infrastructure monitoring, service mapping, event management for intelligent IT operations. 500+ implementations, 55% fewer outages, expert ITOM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow ITOM, IT operations management, AIOps, service mapping, infrastructure monitoring, event management, cloud operations, CMDB, discovery, ITOM solutions Hyderabad, ServiceNow implementation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow ITOM Solutions | AI-Powered IT Operations Management | IfBash" />
        <meta property="og:description" content="Leading ServiceNow ITOM solutions with 500+ implementations. AI-powered infrastructure monitoring, service mapping, expert specialists delivering intelligent IT operations globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-itom-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-itom-solutions" />
        
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

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ ITOM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 500+ ITOM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ AIOps & Cloud Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                    ServiceNow ITOM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                      Modern IT Ops
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8 max-w-2xl">
                  Transform IT operations with intelligent ServiceNow ITOM powered by{' '}
                  <span className="font-semibold text-purple-300">AI-driven monitoring</span>, predictive analytics, and automated remediation. Our certified specialists deliver comprehensive infrastructure visibility and proactive operations management.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700"
                  >
                    <Activity className="mr-2 h-5 w-5" />
                    Transform IT Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch ITOM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered AIOps</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Map className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Service Mapping</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Cloud className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Cloud Operations</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Server className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-indigo-200 text-sm">ITOM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <AlertTriangle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">55%</div>
                  <div className="text-purple-200 text-sm">Fewer Outages</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Eye className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">45%</div>
                  <div className="text-blue-200 text-sm">Better Visibility</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-purple-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-indigo-200 text-sm">Faster Root Cause</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ITOM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                    Next-Generation IT Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Infrastructure
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                      Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern IT environments face unprecedented complexity: multi-cloud architectures, microservices, hybrid infrastructure, and exponential data growth. ServiceNow ITOM with{' '}
                    <span className="text-indigo-600 font-semibold">AI-powered operations</span> transforms infrastructure management through intelligent discovery, predictive analytics, and automated remediation.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>automated service mapping</strong> to{' '}
                    <strong>predictive AIOps capabilities</strong>, our intelligent ITOM platform provides complete visibility, proactive monitoring, and seamless cloud operations while enabling faster incident resolution and optimized resource utilization.
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive firefighting to proactive operations through unified platforms that deliver{' '}
                    <span className="text-purple-600 font-semibold">intelligent infrastructure excellence</span> and measurable business outcomes.
                  </p>
                </div>
                
                {/* ITOM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Infrastructure Monitoring",
                    "Predictive AIOps & Analytics", 
                    "Automated Service Discovery",
                    "Cloud Operations Management",
                    "Real-time Event Management",
                    "Comprehensive Visibility"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-indigo-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    Explore AI-Powered ITOM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                    alt="Modern IT operations dashboard with infrastructure monitoring and AI analytics"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">ITOM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE ITOM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Core ITOM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive ITOM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Platform Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow ITOM suite powered by AI-driven operations, automated discovery, and intelligent monitoring for superior infrastructure management
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: "Discovery & Service Mapping",
                  description: "Automated discovery across on-premises and cloud environments with intelligent service mapping and dependency visualization.",
                  features: ["Automated Asset Discovery", "Real-time Service Maps", "Dependency Mapping", "Multi-Cloud Support"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-sky-50",
                  highlight: "Complete Visibility",
                  officialFeature: true
                },
                {
                  icon: Bot,
                  title: "AIOps & Event Management",
                  description: "AI-powered operations with predictive analytics, intelligent event correlation, and automated incident response.",
                  features: ["Predictive AIOps", "Event Correlation", "Noise Reduction", "Automated Remediation"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-indigo-50",
                  highlight: "AI-Driven Operations",
                  officialFeature: true
                },
                {
                  icon: Cloud,
                  title: "Cloud Operations Management", 
                  description: "Comprehensive cloud management with automated provisioning, cost optimization, and governance across multi-cloud environments.",
                  features: ["Multi-Cloud Management", "Cost Optimization", "Automated Provisioning", "Cloud Governance"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "Cloud-Native",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Configuration Management (CMDB)",
                  description: "Centralized configuration database with automated updates, impact analysis, and comprehensive asset tracking.",
                  features: ["Automated CMDB Updates", "Impact Analysis", "Asset Relationships", "Data Quality Management"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Single Source of Truth",
                  officialFeature: true
                },
                {
                  icon: BarChart2,
                  title: "Service Observability",
                  description: "End-to-end service observability with real-time monitoring, performance analytics, and business impact assessment.",
                  features: ["Real-time Monitoring", "Performance Analytics", "Business Impact Analysis", "SLA Management"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-rose-50",
                  highlight: "Business Context",
                  officialFeature: true
                },
                {
                  icon: Shield,
                  title: "Health Log Analytics",
                  description: "Advanced log analytics with anomaly detection, pattern recognition, and proactive issue identification.",
                  features: ["Log Aggregation", "Anomaly Detection", "Pattern Analysis", "Proactive Alerts"],
                  gradient: "from-red-600 to-pink-600",
                  bgGradient: "from-red-50 via-pink-50 to-rose-50",
                  highlight: "Proactive Detection",
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

            {/* ITOM Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete ITOM Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive ServiceNow ITOM packages that scale with your infrastructure needs, from Visibility to Enterprise AIOps
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* ITOM Visibility */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Visibility</Badge>
                    Foundation
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Discovery",
                      "Service Mapping", 
                      "CMDB",
                      "Certificate Management",
                      "Service Graph Connectors",
                      "Agent Client Collector"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ITOM AIOps Professional */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 text-white mr-3">Professional</Badge>
                    AI-Enhanced
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Event Management",
                      "Metric Intelligence",
                      "Service Reliability Management", 
                      "Predictive AIOps",
                      "Automated Remediation",
                      "All Visibility Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ITOM AIOps Enterprise */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-indigo-600 text-white mr-3">Enterprise</Badge>
                    Complete Suite
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Health Log Analytics",
                      "Cloud Accelerate",
                      "Service Observability",
                      "Synthetic Monitoring",
                      "Advanced Analytics",
                      "All Professional Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Next-Generation AIOps &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  Intelligent Operations
                </span>
              </h2>
              <p className="text-xl text-indigo-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform reactive IT operations into proactive, intelligent, and self-healing infrastructure management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Agentic Workflows",
                  description: "Help operators triage alerts faster and more accurately with generative AI-powered automation and intelligent recommendations.",
                  capabilities: ["GenAI Alert Triage", "Intelligent Recommendations", "Automated Workflows", "Context-Aware Actions"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-blue-600/10",
                  highlight: "GenAI-Powered",
                  metrics: "3x Faster Triage"
                },
                {
                  icon: Brain,
                  title: "Predictive Intelligence",
                  description: "Proactively identify infrastructure issues using machine learning algorithms that analyze patterns and predict failures before they occur.",
                  capabilities: ["Failure Prediction", "Anomaly Detection", "Pattern Analysis", "Proactive Alerting"],
                  bgGradient: "from-purple-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "ML-Driven",
                  metrics: "70% Issue Prevention"
                },
                {
                  icon: CloudLightning,
                  title: "Automated Remediation",
                  description: "Intelligent automation that automatically resolves common issues using playbooks and machine learning insights.",
                  capabilities: ["Self-Healing Systems", "Automated Playbooks", "Root Cause Analysis", "Intelligent Recovery"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Self-Healing",
                  metrics: "60% Auto-Resolution"
                },
                {
                  icon: BarChart3,
                  title: "Service Observability",
                  description: "Make data-driven decisions based on business impact with comprehensive service monitoring and analytics.",
                  capabilities: ["Business Impact Analysis", "Service Health Monitoring", "Performance Metrics", "SLA Tracking"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Business-Aware",
                  metrics: "90% SLA Compliance"
                },
                {
                  icon: Radar,
                  title: "Synthetic Monitoring",
                  description: "Proactively monitor critical resource availability 24/7 with synthetic transactions and performance testing.",
                  capabilities: ["24/7 Availability Monitoring", "Performance Testing", "User Experience Simulation", "Proactive Alerting"],
                  bgGradient: "from-violet-600/20 via-purple-600/15 to-indigo-600/10",
                  highlight: "Proactive Monitoring",
                  metrics: "99.9% Uptime"
                },
                {
                  icon: Network,
                  title: "Infrastructure Discovery",
                  description: "Get a holistic view of your operations footprint across on-premises data centers and cloud environments.",
                  capabilities: ["Multi-Cloud Discovery", "Real-time Scanning", "Asset Inventory", "Relationship Mapping"],
                  bgGradient: "from-emerald-600/20 via-cyan-600/15 to-blue-600/10",
                  highlight: "Complete Discovery",
                  metrics: "100% Asset Visibility"
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
                    <p className="text-indigo-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-indigo-400 flex-shrink-0" />
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

        {/* ITOM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven ITOM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Infrastructure
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered ITOM solutions deliver significant improvements in infrastructure visibility, operational efficiency, and service reliability
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "55%", label: "Fewer Outages", desc: "Service interruption reduction", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: AlertTriangle },
                { metric: "60%", label: "Faster Root Cause", desc: "Issue identification speed", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Search },
                { metric: "45%", label: "Better Visibility", desc: "Infrastructure transparency", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-indigo-50", icon: Eye },
                { metric: "40%", label: "Cost Optimization", desc: "Operational efficiency gains", gradient: "from-orange-600 to-red-600", bgGradient: "from-orange-50 via-red-50 to-rose-50", icon: DollarSign }
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
                    "IfBash's ServiceNow ITOM implementation transformed our infrastructure operations. We achieved 55% fewer outages and 60% faster root-cause identification within 4 months. The AI-powered discovery and service mapping gave us complete visibility across our hybrid cloud environment, while automated remediation reduced our MTTR by half."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Michael Rodriguez, VP Infrastructure
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Manufacturing Company
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
                ServiceNow ITOM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow ITOM solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow ITOM and how does it differ from traditional infrastructure monitoring?",
                  answer: "ServiceNow ITOM is a comprehensive IT Operations Management suite that provides end-to-end visibility, automated discovery, and AI-powered operations across hybrid cloud environments. Unlike traditional monitoring tools, ITOM offers unified service mapping, predictive analytics, automated remediation, and business service context. It transforms reactive monitoring into proactive, intelligent operations with 55% fewer outages and 60% faster root-cause identification.",
                  gradient: "from-indigo-50 via-purple-50 to-blue-50",
                  icon: Activity
                },
                {
                  question: "How do AIOps and predictive analytics enhance ServiceNow ITOM?",
                  answer: "AIOps capabilities in ServiceNow ITOM use machine learning to analyze patterns, predict failures, and automate remediation. Features include intelligent event correlation, noise reduction, anomaly detection, and automated playbooks. Predictive analytics identify potential issues before they impact services, while agentic workflows help operators triage alerts 3x faster with GenAI-powered recommendations and context-aware actions.",
                  gradient: "from-purple-50 via-blue-50 to-indigo-50",
                  icon: Bot
                },
                {
                  question: "What business outcomes can organizations expect from ITOM implementation?",
                  answer: "Organizations typically achieve 55% fewer service outages, 60% faster root-cause identification, 45% improved infrastructure visibility, and 40% cost optimization. Additional benefits include automated discovery across hybrid environments, proactive monitoring with 99.9% uptime, intelligent service mapping, and business-aware operations that align IT performance with business outcomes. Most clients see measurable improvements within the first 3-4 months.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow ITOM support multi-cloud and hybrid environments?",
                  answer: "ServiceNow ITOM provides comprehensive multi-cloud support with automated discovery across AWS, Azure, Google Cloud, and on-premises environments. Cloud Accelerate capabilities include automated provisioning, cost optimization, governance policies, and unified visibility. The platform maintains a single CMDB for all environments while providing cloud-native monitoring, synthetic testing, and intelligent workload management across hybrid infrastructures.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Cloud
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
                Ready to transform your infrastructure operations with AI-powered ITOM?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule ITOM Consultation
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
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Infrastructure Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your ITOM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering resilient IT operations with AI-powered ServiceNow ITOM. From intelligent discovery to predictive operations, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700">
                <Activity className="mr-2 h-5 w-5" />
                Start ITOM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download ITOM Guide
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
                <p className="text-purple-200 text-xs">itom@ifbash.com</p>
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
