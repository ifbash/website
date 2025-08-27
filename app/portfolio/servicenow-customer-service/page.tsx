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
  Building
} from "lucide-react";

export default function ServiceNowCSMPage() {
  // Enhanced JSON-LD with comprehensive CSM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Customer Service Management Solutions - AI-Powered CSM Platform | IfBash",
    "alternateName": ["ServiceNow CSM", "Customer Service Management", "Customer Support Platform", "Omnichannel Customer Service", "AI Customer Support", "CSM Solutions"],
    "description": "Leading ServiceNow Customer Service Management solutions with AI-powered automation, omnichannel support, and intelligent case management. 500+ CSM implementations, 40% faster resolution, 85% customer satisfaction. Expert CSM specialists delivering exceptional customer experiences globally.",
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
      "ServiceNow Customer Service Management",
      "AI-Powered Customer Support",
      "Omnichannel Service Platform", 
      "Customer Journey Analytics",
      "Intelligent Case Management",
      "Virtual Agent Solutions",
      "CSM Analytics & Reporting"
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
      "email": "csm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Customer Service Management (CSM) Solutions | AI-Powered Customer Support | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow CSM solutions in Hyderabad & globally. AI-powered customer support, omnichannel service management, intelligent case automation for exceptional customer experiences. 500+ implementations, 40% faster resolution, expert CSM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow CSM, Customer Service Management, AI customer support, omnichannel customer service, customer experience management, case management automation, ServiceNow CSM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Customer Service Management (CSM) Solutions | AI-Powered Customer Support | IfBash" />
        <meta property="og:description" content="Leading ServiceNow CSM solutions with 500+ implementations. AI-powered customer support, omnichannel service management, expert specialists delivering exceptional customer experiences globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-csm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-csm-solutions" />
        
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
                ✓ CSM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 500+ CSM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Customer Experience Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    ServiceNow CSM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Modern Customer Service
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Transform customer service with intelligent ServiceNow CSM powered by{' '}
                  <span className="font-semibold text-indigo-300">AI-driven automation</span>, omnichannel support, and predictive analytics. Our certified specialists deliver next-generation customer service solutions that enhance satisfaction, reduce costs, and accelerate resolution times.[89][90]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Transform Customer Service
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch CSM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Virtual Agents</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <MessageSquare className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Omnichannel Support</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <TrendingUp className="h-5 w-5 text-purple-700" />
                    <span className="text-sm text-gray-900 font-semibold">Predictive Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-200 text-sm">CSM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-indigo-200 text-sm">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <DollarSign className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-purple-200 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Star className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-blue-200 text-sm">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                    Next-Generation Customer Experience
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Customer Service
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern customer expectations are evolving rapidly: instant support, seamless experiences across channels, personalized interactions, and proactive issue resolution. ServiceNow CSM with{' '}
                    <span className="text-blue-600 font-semibold">AI-powered automation</span> transforms customer service through intelligent case routing, predictive analytics, and omnichannel engagement that delivers exceptional experiences while reducing operational costs.[89][90]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI virtual agents</strong> to{' '}
                    <strong>predictive customer journey analytics</strong>, our comprehensive CSM platform enables 24/7 customer support, automates routine tasks, and provides agents with real-time intelligence for faster, more personalized service delivery that drives customer loyalty and business growth.[91]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive customer service to proactive, intelligent customer experiences through unified platforms that deliver{' '}
                    <span className="text-indigo-600 font-semibold">intelligent service excellence</span> and measurable business outcomes.
                  </p>
                </div>
                
                {/* CSM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Customer Support",
                    "Omnichannel Service Management", 
                    "Intelligent Case Automation",
                    "Predictive Customer Analytics",
                    "Real-time Agent Intelligence",
                    "Seamless System Integration"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore AI-Powered CSM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80"
                    alt="Modern customer service management platform with AI-powered support and omnichannel engagement"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">CSM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CSM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Core CSM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Customer Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow CSM suite powered by AI-driven customer intelligence, omnichannel support, and automated service workflows for superior customer experiences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: MessageSquare,
                  title: "Omnichannel Support",
                  description: "Engage customers seamlessly across email, phone, chat, social media, and web with unified interaction history and consistent experiences.[91]",
                  features: ["Multi-Channel Engagement", "Unified Customer History", "Consistent Experience", "Channel Integration"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Unified Experience",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Intelligent Case Management",
                  description: "Automate case routing, prioritization, and escalation with AI-powered workflows that ensure faster resolution and improved SLA compliance.[88]",
                  features: ["AI-Powered Routing", "Automated Prioritization", "SLA Management", "Escalation Workflows"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "40% Faster Resolution",
                  officialFeature: true
                },
                {
                  icon: Bot,
                  title: "AI Virtual Agents & Assistants", 
                  description: "Deploy intelligent virtual agents for 24/7 customer support and AI assistants that enhance agent productivity with real-time recommendations.[89]",
                  features: ["24/7 Virtual Support", "AI Agent Assistance", "Natural Language Processing", "Continuous Learning"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "24/7 AI Support",
                  officialFeature: true
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Management",
                  description: "Centralize knowledge articles and enable intelligent search capabilities for both customers and agents to access accurate information quickly.[90]",
                  features: ["Centralized Knowledge Base", "Intelligent Search", "Article Recommendations", "Content Analytics"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Intelligent Search",
                  officialFeature: true
                },
                {
                  icon: TrendingUp,
                  title: "Customer Journey Analytics",
                  description: "Gain deep insights into customer interactions, sentiment analysis, and journey mapping to optimize service delivery and enhance experiences.[89]",
                  features: ["Journey Mapping", "Sentiment Analysis", "Interaction Analytics", "Performance Insights"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Data-Driven Insights",
                  officialFeature: true
                },
                {
                  icon: Clipboard,
                  title: "Contract & Service Management",
                  description: "Manage complex service contracts, warranties, and entitlements with configurable frameworks that boost operational efficiency.[90]",
                  features: ["Contract Management", "Warranty Tracking", "Service Entitlements", "Automated Renewals"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
                  highlight: "Contract Intelligence",
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

            {/* CSM Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete CSM Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive ServiceNow CSM packages that scale with your customer service needs, from Essentials to Enterprise solutions
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* CSM Essentials */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Essentials</Badge>
                    Core Customer Service
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Basic Case Management",
                      "Self-Service Portal", 
                      "Virtual Agent",
                      "Knowledge Management",
                      "Basic Analytics",
                      "Email Integration"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CSM Professional */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-indigo-600 text-white mr-3">Professional</Badge>
                    Advanced Service Platform
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Advanced Case Management",
                      "Now Assist for CSM",
                      "Omnichannel Support", 
                      "Predictive Intelligence",
                      "Advanced Analytics",
                      "All Essentials Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CSM Enterprise */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 text-white mr-3">Enterprise</Badge>
                    Complete CSM Suite
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Contract Management",
                      "Customer Journey Analytics",
                      "Advanced AI Agents", 
                      "Enterprise Integrations",
                      "Custom Workflows",
                      "All Professional Features"
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

        {/* AI-POWERED CSM CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Customer Service Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for CSM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Intelligent Customer Operations
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional customer service operations into proactive, intelligent, and automated customer experience systems[89]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Customer Service",
                  description: "Generative AI enhances customer service with automated case summarization, intelligent email replies, and knowledge article generation for faster resolution.[89]",
                  capabilities: ["Automated Case Summarization", "Intelligent Email Replies", "Knowledge Article Generation", "Agent Productivity Enhancement"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "3x Faster Resolution"
                },
                {
                  icon: Brain,
                  title: "Predictive Intelligence",
                  description: "AI-powered predictive analytics identify customer needs, predict case escalation, and recommend proactive actions to prevent issues.[88]",
                  capabilities: ["Predictive Case Analytics", "Customer Needs Prediction", "Proactive Recommendations", "Issue Prevention"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-blue-600/10",
                  highlight: "Predictive",
                  metrics: "30% Issue Reduction"
                },
                {
                  icon: Zap,
                  title: "Automated Workflows",
                  description: "Intelligent automation streamlines customer operations processes across departments, facilitating frictionless collaboration and timely support.[88]",
                  capabilities: ["Cross-Department Automation", "Intelligent Routing", "SLA Automation", "Process Optimization"],
                  bgGradient: "from-purple-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Automated",
                  metrics: "60% Process Efficiency"
                },
                {
                  icon: MessageSquare,
                  title: "Omnichannel Intelligence",
                  description: "AI-powered omnichannel support with intelligent routing, sentiment analysis, and personalized customer engagement across all touchpoints.[91]",
                  capabilities: ["Intelligent Channel Routing", "Sentiment Analysis", "Personalized Engagement", "Cross-Channel Context"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Omnichannel",
                  metrics: "Unified Experience"
                },
                {
                  icon: TrendingUp,
                  title: "Customer Journey Analytics",
                  description: "Advanced analytics track customer interactions, identify pain points, and optimize service delivery with real-time insights and reporting.[90]",
                  capabilities: ["Journey Mapping", "Pain Point Identification", "Real-time Analytics", "Performance Optimization"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Journey Intelligence",
                  metrics: "85% Satisfaction"
                },
                {
                  icon: Shield,
                  title: "Proactive Service Operations",
                  description: "Monitor operational health of customer products, identify potential issues before escalation, and notify impacted customers with timely solutions.[90]",
                  capabilities: ["Proactive Monitoring", "Issue Prevention", "Automated Notifications", "Health Analytics"],
                  bgGradient: "from-orange-600/20 via-red-600/15 to-pink-600/10",
                  highlight: "Proactive",
                  metrics: "Prevention-First"
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

        {/* CSM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven CSM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Customer Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered CSM solutions deliver significant improvements in customer satisfaction, service efficiency, and operational costs
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Customer Service Management Metrics</h3>
                [95]
              </div>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "30%", label: "Case Volume Reduction", desc: "Through AI automation", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: TrendingUp },
                { metric: "40%", label: "Faster Resolution", desc: "Automated workflows", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: Clock },
                { metric: "25%", label: "Cost Savings", desc: "Operational efficiency", gradient: "from-purple-600 to-pink-600", bgGradient: "from-purple-50 via-pink-50 to-rose-50", icon: DollarSign },
                { metric: "85%", label: "Customer Satisfaction", desc: "Enhanced experiences", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Star }
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
                    "IfBash's ServiceNow CSM implementation revolutionized our customer service operations. We achieved 40% faster resolution times and 85% customer satisfaction within 4 months. The AI-powered virtual agents handle 60% of routine inquiries, while intelligent case routing ensures complex issues reach the right agents immediately. Our customer service costs decreased by 25% while quality improved dramatically."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Sarah Johnson, VP Customer Experience
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Technology Services
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
                ServiceNow CSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Customer Service Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Customer Service Management and how does it enhance customer experience?",
                  answer: "ServiceNow CSM is a comprehensive AI-powered platform that transforms customer service through omnichannel support, intelligent case management, and predictive analytics. It enhances customer experience by providing 24/7 AI virtual agents, personalized service delivery, proactive issue resolution, and seamless integration across all touchpoints. Organizations typically achieve 40% faster resolution times and 85% customer satisfaction improvement.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Users
                },
                {
                  question: "How do AI and automation improve customer service delivery?",
                  answer: "AI enhances CSM through Now Assist for intelligent case summarization, automated email replies, predictive issue identification, and virtual agents for 24/7 support. Machine learning algorithms route cases to the right agents, predict customer needs, and recommend proactive actions. This results in 30% case volume reduction, faster resolution times, and improved agent productivity while maintaining personalized customer experiences.",
                  gradient: "from-indigo-50 via-purple-50 to-blue-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from CSM implementation?",
                  answer: "Organizations typically achieve 30% reduction in case volume, 40% faster resolution times, 25% cost savings, and 85% customer satisfaction improvement. Additional benefits include automated workflows, proactive service operations, comprehensive customer journey analytics, and seamless omnichannel experiences. Most clients see measurable improvements within the first 3-4 months of implementation.",
                  gradient: "from-purple-50 via-blue-50 to-indigo-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow CSM compare to traditional CRM systems?",
                  answer: "Unlike traditional CRMs focused on sales and marketing, ServiceNow CSM is designed for end-to-end service delivery with deep integration to enterprise systems like ERP and ITSM. CSM provides AI-powered service automation, complex issue resolution capabilities, and unified workflows across departments. It acts as a single system of action, combining structured and unstructured data for complete customer insights and service excellence.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Globe
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
                Ready to transform your customer service operations with AI-powered CSM?
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule CSM Consultation
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
              Ready to Transform Customer Service Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your CSM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional customer experiences with AI-powered ServiceNow CSM. From intelligent virtual agents to predictive analytics, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
                <Users className="mr-2 h-5 w-5" />
                Start CSM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download CSM Guide
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
                <p className="text-indigo-200 text-xs">csm@ifbash.com</p>
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
