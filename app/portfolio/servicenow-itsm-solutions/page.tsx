import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  AlertTriangle,
  RefreshCw,
  FileText,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  BookOpen,
  MonitorSmartphone,
  Layers,
  Bot,
  UserCheck,
  BarChart2,
  PieChart,
  Zap,
  Link2,
  TrendingUp,
  Target,
  Workflow,
  MessageCircle,
  Brain,
  Sparkles,
  Globe,
  LineChart,
  Award,
  Rocket,
  Shield,
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
  Activity,
  Cog,
  Package,
  Gauge,
  Route,
  Wrench,
  Factory,
  HelpCircle,
  Search,
  Headphones,
  CloudLightning,
  Cpu,
  Lightbulb,
  BarChart3,
  Eye,
  Mic,
  Palette,
  Network,
  Building,
  Briefcase,
  MessageSquare
} from "lucide-react";

export default function ServiceNowITSMPage() {
  // Enhanced JSON-LD with comprehensive ITSM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow ITSM Solutions - AI-Powered IT Service Management | IfBash",
    "alternateName": ["ServiceNow ITSM", "IT Service Management", "ITSM Solutions", "GenAI ITSM", "Agentic AI ITSM", "Virtual Agent ITSM"],
    "description": "Leading ServiceNow ITSM solutions with GenAI automation, virtual agents, and agentic AI. 500+ ITSM implementations, 50% faster resolution, 85% user satisfaction. Certified ITSM specialists delivering intelligent service management globally.",
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
      "ServiceNow ITSM Solutions",
      "AI-Powered Incident Management",
      "Intelligent Problem Management", 
      "Smart Change Management",
      "GenAI Virtual Agent",
      "Agentic AI Operations",
      "ITSM Analytics & Reporting",
      "Service Portal Development",
      "ITSM Integration Services"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Complete ITSM Platform",
        "description": "End-to-end ITSM platform with incident, problem, change, and service request management",
        "category": "ITSM Platform",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "GenAI Virtual Agent",
        "description": "AI-powered virtual agents for 24/7 automated support and intelligent resolution",
        "category": "AI Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Agentic AI Operations",
        "description": "Autonomous AI agents for intelligent decision making and self-healing operations",
        "category": "AI Operations",
        "availability": "https://schema.org/InStock"
      }
    ],
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
      "email": "itsm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow ITSM and how does it transform IT operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow ITSM is a comprehensive IT Service Management platform that transforms IT operations through intelligent automation, GenAI-powered workflows, and unified service delivery. It includes incident management, problem management, change management, service requests, asset management, and knowledge management with AI capabilities that reduce MTTR by 50% and improve user satisfaction by 85%."
        }
      },
      {
        "@type": "Question",
        "name": "How do GenAI and Agentic AI enhance ServiceNow ITSM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GenAI enhances ITSM through intelligent ticket classification, automated routing, predictive problem detection, and virtual agent support. Agentic AI provides autonomous ticket resolution, intelligent decision making, workflow optimization, and self-healing capabilities that enable proactive service delivery and reduce manual intervention by 70%."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can organizations expect from ServiceNow ITSM implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically achieve 50% faster incident resolution, 40% reduction in ticket volume, 85% user satisfaction, 35% operational cost savings, and 300% average ROI within 12-18 months. Additional benefits include improved productivity, reduced downtime, enhanced user experience, and operational efficiency through intelligent automation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ServiceNow ITSM implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITSM implementation timelines vary based on complexity and requirements. Standard implementations typically take 8-16 weeks, while complex enterprise deployments take 16-24 weeks. Our accelerated methodology with pre-built templates and proven frameworks can reduce implementation time by 30-40% while ensuring best practices and optimal configuration."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ifbash.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://ifbash.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ServiceNow ITSM Solutions",
        "item": "https://ifbash.com/portfolio/servicenow-itsm-solutions"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow ITSM Solutions | AI-Powered IT Service Management | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow ITSM solutions in Hyderabad & globally. GenAI automation, virtual agents, agentic AI for intelligent service management. 500+ implementations, 50% faster resolution, 85% user satisfaction. Expert ITSM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow ITSM, IT service management, GenAI ITSM, agentic AI, virtual agent, incident management, problem management, change management, service desk automation, ITSM solutions Hyderabad, ServiceNow implementation, intelligent ITSM"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow ITSM Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow ITSM Solutions | AI-Powered IT Service Management Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow ITSM solutions with 500+ implementations. GenAI automation, virtual agents, agentic AI. Expert specialists delivering intelligent service management globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-itsm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow ITSM Solutions | AI-Powered Service Management | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow ITSM solutions with 500+ implementations. GenAI automation, virtual agents by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#6366f1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-itsm-solutions" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80" as="image" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-950 overflow-hidden">
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
                ✓ ITSM Transformation Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 500+ ITSM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ GenAI & Agentic AI Leaders
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                    ServiceNow ITSM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 font-semibold">
                      Modern IT
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8 max-w-2xl">
                  Transform IT service delivery with intelligent ServiceNow ITSM powered by{' '}
                  <span className="font-semibold text-purple-300">GenAI automation</span>, virtual agents, and agentic AI. Our certified specialists deliver next-generation ITSM solutions that accelerate resolution, enhance user experience, and drive operational excellence.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700"
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    Transform IT Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch ITSM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">GenAI Virtual Agent</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Agentic AI</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Brain className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Intelligent Automation</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Settings className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-indigo-200 text-sm">ITSM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-purple-200 text-sm">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-blue-200 text-sm">User Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-purple-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <TrendingUp className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-indigo-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ITSM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                    Next-Generation ITSM Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing IT Service
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                      Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern IT organizations face unprecedented challenges: escalating ticket volumes, complex infrastructure, skilled resource constraints, and user expectations for instant resolution. ServiceNow ITSM with{' '}
                    <span className="text-indigo-600 font-semibold">GenAI intelligence</span> transforms service delivery through autonomous workflows, predictive analytics, and self-healing operations.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI-powered incident management</strong> to{' '}
                    <strong>agentic problem resolution</strong>, our intelligent ITSM platform streamlines processes, enhances user experience, and enables proactive service delivery while maintaining the agility needed for digital transformation.
                  </p>
                  <p className="leading-relaxed">
                    We help organizations overcome reactive support models, manual processes, and fragmented tools through unified platforms that drive{' '}
                    <span className="text-purple-600 font-semibold">intelligent service excellence</span> and measurable business outcomes.
                  </p>
                </div>
                
                {/* ITSM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Automation",
                    "Predictive Problem Management", 
                    "Intelligent Virtual Agents",
                    "Self-Healing Operations",
                    "Advanced Analytics",
                    "Seamless User Experience"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-indigo-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    Explore AI-Powered ITSM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Modern IT service management dashboard with AI automation and analytics"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">ITSM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE ITSM MODULES - ENHANCED WITH OFFICIAL FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Core ITSM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Intelligent ITSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Platform Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow ITSM modules powered by GenAI automation, virtual agents, and intelligent workflows for superior service delivery
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: AlertTriangle,
                  title: "Incident Management",
                  description: "Restore services faster with intelligent routing, built-in collaboration, and AI-powered resolution recommendations.",
                  features: ["AI-Assisted Intelligent Routing", "Collaborative Resolution Workspace", "Automated Escalation Rules", "Real-time Status Updates"],
                  gradient: "from-red-600 to-pink-600",
                  bgGradient: "from-red-50 via-pink-50 to-rose-50",
                  highlight: "50% Faster Resolution",
                  officialFeature: true
                },
                {
                  icon: Brain,
                  title: "Problem Management",
                  description: "Identify the root cause of issues and proactively prevent future disruptions with AI-driven analysis and pattern recognition.",
                  features: ["Root Cause Analysis", "Pattern Recognition", "Known Error Management", "Proactive Problem Detection"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "70% Problem Prevention",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Change Management", 
                  description: "Accelerate change at DevOps speed by automating approvals while maintaining control and risk management.",
                  features: ["DevOps Integration", "Automated Risk Assessment", "Intelligent Approvals", "Change Calendar"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "DevOps Speed",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Request Management",
                  description: "Provide employees with an AI-powered self-service portal that works on all their devices with intelligent recommendations.",
                  features: ["AI-Powered Self-Service", "Cross-Device Compatibility", "Smart Request Routing", "Automated Fulfillment"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-sky-50",
                  highlight: "80% Self-Service Rate",
                  officialFeature: true
                },
                {
                  icon: Database,
                  title: "Configuration Management (CMDB)",
                  description: "Track the dependencies and relationships of supported IT services to maintain continuity with automated discovery.",
                  features: ["Automated Discovery", "Dependency Mapping", "Impact Analysis", "Service Continuity"],
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
                  highlight: "Complete Visibility",
                  officialFeature: true
                },
                {
                  icon: BookOpen,
                  title: "Knowledge Management",
                  description: "Improve business efficiency with easy knowledge sharing, collaboration, and AI-powered content generation.",
                  features: ["AI Knowledge Creation", "Smart Content Suggestions", "Collaborative Editing", "Usage Analytics"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-indigo-50",
                  highlight: "AI-Generated Content",
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

            {/* Extended ITSM Capabilities - Based on Official ServiceNow Features */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete ITSM Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive suite of ServiceNow ITSM capabilities that scale with your organization's needs, from Standard to Enterprise packages
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* ITSM Standard */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Standard</Badge>
                    Core ITSM
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Incident Management",
                      "Problem Management", 
                      "Change Management",
                      "Request Management",
                      "Asset Management",
                      "Service Operations Workspace"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ITSM Pro */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 text-white mr-3">Pro</Badge>
                    AI-Enhanced
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Virtual Agent",
                      "Predictive Intelligence",
                      "Performance Analytics", 
                      "DevOps Change Velocity",
                      "Continual Improvement",
                      "All Standard Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ITSM Enterprise */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-indigo-600 text-white mr-3">Enterprise</Badge>
                    Full Suite
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Workforce Optimization",
                      "Process Mining",
                      "Advanced Analytics",
                      "Multi-language Support",
                      "Enterprise Integrations",
                      "All Pro Features"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional ServiceNow Integrations */}
              <div className="bg-gradient-to-r from-gray-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-gray-200/50">
                <h4 className="text-xl font-bold text-center text-gray-900 mb-6">
                  Certified Integrations & Add-ons
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Phone, name: "Call Center Integration", desc: "Multichannel communications" },
                    { icon: FileText, name: "Adobe Sign", desc: "Digital signatures" },
                    { icon: Network, name: "Network Monitoring", desc: "Automatic incident creation" },
                    { icon: Link2, name: "Jira Connector", desc: "DevOps integration" },
                    { icon: MonitorSmartphone, name: "Now Mobile", desc: "Native mobile app" },
                    { icon: Eye, name: "Digital Experience", desc: "End-user monitoring" },
                    { icon: Palette, name: "Service Portal", desc: "Custom user experience" },
                    { icon: Building, name: "Employee Center", desc: "Unified portal" }
                  ].map((integration, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                      <integration.icon className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
                      <h5 className="font-semibold text-gray-900 mb-1 text-sm">{integration.name}</h5>
                      <p className="text-xs text-gray-600">{integration.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED CAPABILITIES - ENHANCED WITH OFFICIAL SERVICENOW FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
                Next-Generation AI Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for ITSM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  Revolutionary AI Capabilities
                </span>
              </h2>
              <p className="text-xl text-indigo-100 max-w-4xl mx-auto">
                Accelerate productivity with generative AI experiences on the Now Platform, featuring autonomous operations and intelligent service delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for ITSM",
                  description: "Accelerate productivity with generative AI experiences on the Now Platform. Transform how agents work with intelligent assistance and automated insights.",
                  capabilities: ["Generative AI Case Summarization", "Intelligent Solution Recommendations", "Automated Knowledge Article Creation", "Natural Language Query Processing"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-blue-600/10",
                  highlight: "GenAI-Powered",
                  metrics: "3x Faster Resolution"
                },
                {
                  icon: Sparkles,
                  title: "Predictive Intelligence",
                  description: "Simplify and accelerate everyday work with built-in machine learning that learns from your data to predict and prevent issues.",
                  capabilities: ["Anomaly Detection & Alerting", "Predictive Categorization", "Intelligent Assignment", "Proactive Problem Prevention"],
                  bgGradient: "from-purple-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "ML-Driven",
                  metrics: "60% Fewer Incidents"
                },
                {
                  icon: Search,
                  title: "AI Search & Discovery",
                  description: "Provide personalized, relevant, and actionable search results to employees and customers with semantic understanding.",
                  capabilities: ["Semantic Search Technology", "Contextual Content Discovery", "Personalized Results", "Cross-Platform Search"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Semantic AI",
                  metrics: "95% Search Accuracy"
                },
                {
                  icon: MessageCircle,
                  title: "Virtual Agent",
                  description: "Resolve issues fast with an intelligent chatbot that understands simple, human language and provides instant support.",
                  capabilities: ["Natural Language Processing", "Multi-Channel Deployment", "Contextual Conversations", "Escalation Management"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Conversational AI",
                  metrics: "70% Self-Service Rate"
                },
                {
                  icon: Activity,
                  title: "Service Operations Workspace",
                  description: "Manage incidents proactively with clear visibility when services are at risk. Predict, prevent, and resolve before impact.",
                  capabilities: ["Proactive Incident Management", "Service Health Monitoring", "Real-time Risk Assessment", "Unified Operations View"],
                  bgGradient: "from-violet-600/20 via-purple-600/15 to-indigo-600/10",
                  highlight: "Proactive Operations",
                  metrics: "50% Faster MTTR"
                },
                {
                  icon: BarChart2,
                  title: "Performance Analytics",
                  description: "Anticipate trends, prioritize resources, and continuously improve with real-time analytics and intelligent insights.",
                  capabilities: ["Real-time Dashboards", "Trend Analysis & Forecasting", "Resource Optimization", "Continuous Improvement Tracking"],
                  bgGradient: "from-emerald-600/20 via-cyan-600/15 to-blue-600/10",
                  highlight: "Analytics-Driven",
                  metrics: "40% Better Planning"
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

            {/* ServiceNow Platform Integration */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">
                Built on the Now Platform
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Cpu, name: "One Platform", desc: "Single system of action", stat: "Unified Experience" },
                  { icon: Zap, name: "Automated Workflows", desc: "Drag-and-drop automation", stat: "No-Code Solutions" },
                  { icon: Shield, name: "Enterprise Security", desc: "Built-in compliance", stat: "SOC 2 Certified" },
                  { icon: Globe, name: "Cloud-Native", desc: "Global scalability", stat: "99.99% Uptime" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                    <feature.icon className="h-10 w-10 mx-auto mb-3 text-indigo-400" />
                    <h4 className="font-semibold text-white mb-2">{feature.name}</h4>
                    <p className="text-indigo-200 text-sm mb-2">{feature.desc}</p>
                    <div className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full inline-block">
                      {feature.stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ITSM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven ITSM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered ITSM solutions deliver significant improvements in service delivery, operational efficiency, and user satisfaction
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Faster Resolution", desc: "Average MTTR improvement", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: Clock },
                { metric: "85%", label: "User Satisfaction", desc: "Service quality rating", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Users },
                { metric: "40%", label: "Ticket Reduction", desc: "Through AI automation", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-indigo-50", icon: TrendingUp },
                { metric: "300%", label: "Average ROI", desc: "Within 12-18 months", gradient: "from-orange-600 to-red-600", bgGradient: "from-orange-50 via-red-50 to-rose-50", icon: DollarSign }
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

            {/* Detailed Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Zap, title: "Operational Efficiency", metrics: ["70% automation increase", "60% manual task reduction", "50% process optimization"], gradient: "from-yellow-50 to-orange-50" },
                { icon: Shield, title: "Service Quality", metrics: ["99.9% uptime achievement", "75% first-call resolution", "95% SLA compliance"], gradient: "from-blue-50 to-indigo-50" },
                { icon: Lightbulb, title: "Innovation Impact", metrics: ["80% faster deployment", "65% feature adoption", "90% user engagement"], gradient: "from-purple-50 to-pink-50" },
                { icon: BarChart3, title: "Cost Optimization", metrics: ["35% operational savings", "25% resource optimization", "45% efficiency gains"], gradient: "from-green-50 to-emerald-50" },
                { icon: Eye, title: "Visibility & Control", metrics: ["360° service visibility", "Real-time monitoring", "Predictive insights"], gradient: "from-cyan-50 to-blue-50" },
                { icon: Rocket, title: "Business Acceleration", metrics: ["40% faster time-to-market", "30% productivity increase", "50% scalability improvement"], gradient: "from-indigo-50 to-purple-50" }
              ].map((benefit, index) => (
                <Card key={index} className={`bg-gradient-to-br ${benefit.gradient} shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50`}>
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-300/30">
                          <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                    "IfBash's AI-powered ServiceNow ITSM implementation transformed our entire IT operations. We achieved 50% faster incident resolution and 85% user satisfaction within 6 months. The GenAI virtual agent handles 70% of routine requests automatically, while agentic AI prevents problems before they impact users. The ROI exceeded 300% in the first year."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Sarah Chen, CIO
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Fortune 500 Technology Company
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

            {/* Additional Success Metrics */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { title: "Enterprise Clients", value: "200+", desc: "Organizations transformed", gradient: "from-indigo-50 to-purple-50" },
                { title: "Tickets Resolved", value: "10M+", desc: "Through AI automation", gradient: "from-purple-50 to-blue-50" },
                { title: "Hours Saved", value: "500K+", desc: "Annual productivity gain", gradient: "from-blue-50 to-indigo-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - ENHANCED */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted ITSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Transformation Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ITSM specialists who deliver intelligent ServiceNow solutions that drive exceptional business outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
              {[
                {
                  icon: Award,
                  title: "ITSM Excellence & Certifications",
                  description: "Deep ITSM domain expertise with certified ServiceNow specialists, proven methodologies, and 500+ successful implementations across industries. Our team holds advanced certifications in ServiceNow ITSM, GenAI, and enterprise architecture with focus on delivering measurable business value.",
                  stats: ["15+ ServiceNow Certifications", "500+ ITSM Implementations", "98% Customer Satisfaction"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50"
                },
                {
                  icon: Bot,
                  title: "AI & Automation Leadership",
                  description: "Industry-leading expertise in GenAI virtual agents, agentic AI operations, and intelligent automation. We deliver cutting-edge AI capabilities that transform reactive support into proactive, intelligent service delivery with proven track record of 50% faster resolution and 85% user satisfaction.",
                  stats: ["AI-First Approach", "70% Automation Rate", "50% Faster Resolution"],
                  gradient: "from-purple-600 to-blue-600",
                  bgGradient: "from-purple-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Rocket,
                  title: "Accelerated Implementation",
                  description: "Rapid deployment methodology with pre-built templates, industry best practices, and proven frameworks that deliver value in weeks, not months. Our accelerated approach reduces implementation time by 40% while ensuring optimal configuration and user adoption.",
                  stats: ["40% Faster Deployment", "Pre-built Templates", "Proven Frameworks"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50"
                },
                {
                  icon: Globe,
                  title: "Global Excellence & Support",
                  description: "Worldwide service delivery capability with local expertise, 24/7 support, and multi-language capabilities. We provide comprehensive post-implementation support including proactive monitoring, continuous optimization, and ongoing platform updates to maximize your ITSM investment.",
                  stats: ["24/7 Global Support", "Multi-language Capability", "Proactive Monitoring"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-rose-50"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-start space-x-6 bg-gradient-to-br ${item.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50`}>
                  <div className="flex-shrink-0">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {item.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications & Partnerships */}
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl p-8 border border-indigo-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Certifications & Partnerships
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "ServiceNow Elite Partner", desc: "Highest tier partnership", icon: Award, iconColor: "text-indigo-600" },
                  { title: "CSA Certified", desc: "Certified System Administrator", icon: Shield, iconColor: "text-purple-600" },
                  { title: "CIS Certified", desc: "Certified Implementation Specialist", icon: Target, iconColor: "text-blue-600" },
                  { title: "ITIL Expert", desc: "IT Service Management", icon: BookOpen, iconColor: "text-green-600" }
                ].map((cert, index) => (
                  <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105">
                    <cert.icon className={`h-10 w-10 mx-auto mb-4 ${cert.iconColor}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.desc}</p>
                  </div>
                ))}
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
                ServiceNow ITSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow ITSM solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What makes ServiceNow ITSM different from traditional IT service management?",
                  answer: "ServiceNow ITSM transforms traditional reactive support into intelligent, proactive service delivery through GenAI automation, predictive analytics, and self-healing capabilities. Unlike legacy tools, it provides unified workflows, real-time collaboration, comprehensive automation, and AI-powered insights that reduce MTTR by 50% and improve user satisfaction by 85%. The platform integrates incident, problem, change, and asset management in a single, intelligent ecosystem.",
                  gradient: "from-indigo-50 via-purple-50 to-blue-50",
                  icon: Settings
                },
                {
                  question: "How do GenAI and Agentic AI enhance ServiceNow ITSM capabilities?",
                  answer: "GenAI enhances ITSM through intelligent ticket classification, automated routing, predictive problem detection, and conversational virtual agents that provide 24/7 support. Agentic AI goes further with autonomous ticket resolution, intelligent decision making, workflow optimization, and self-healing operations. Together, they enable 70% automation of routine tasks, proactive problem prevention, and continuous service improvement without human intervention.",
                  gradient: "from-purple-50 via-blue-50 to-indigo-50",
                  icon: Bot
                },
                {
                  question: "What ROI and business benefits can organizations expect?",
                  answer: "Organizations typically achieve 50% faster incident resolution, 40% reduction in ticket volume, 85% user satisfaction, 35% operational cost savings, and 300% average ROI within 12-18 months. Additional benefits include improved productivity, reduced downtime, enhanced user experience, better SLA compliance, and operational efficiency through intelligent automation. Most clients see measurable improvements within the first 3-6 months of implementation.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: TrendingUp
                },
                {
                  question: "How long does ServiceNow ITSM implementation typically take?",
                  answer: "Implementation timelines vary based on complexity and requirements. Standard ITSM deployments typically take 8-16 weeks, while complex enterprise implementations take 16-24 weeks. Our accelerated methodology with pre-built templates, proven frameworks, and industry best practices can reduce implementation time by 30-40%. We focus on rapid value delivery with phased rollouts to ensure user adoption and business continuity.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Clock
                },
                {
                  question: "What support and training do you provide post-implementation?",
                  answer: "We provide comprehensive post-implementation support including 24/7 technical support, user training programs, administrator certification, knowledge transfer sessions, proactive platform monitoring, regular health checks, performance optimization, and ongoing platform updates. Our support includes dedicated success managers, community access, and continuous improvement recommendations to maximize your ITSM investment and ensure long-term success.",
                  gradient: "from-orange-50 via-red-50 to-rose-50",
                  icon: Headphones
                },
                {
                  question: "How does ServiceNow ITSM integrate with existing enterprise systems?",
                  answer: "ServiceNow ITSM provides extensive integration capabilities through REST APIs, web services, database connectors, and pre-built integrations with major enterprise systems including ERP, CRM, monitoring tools, CMDB, Active Directory, and cloud platforms. Our integration approach ensures data consistency, real-time synchronization, and seamless workflows across your IT ecosystem while maintaining security and compliance standards."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    {faq.icon && (
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                          <faq.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    )}
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
                Ready to transform your IT service management with AI-powered solutions?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule ITSM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform IT Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your ITSM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional IT services with AI-powered ServiceNow ITSM. From intelligent automation to superior user experiences, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700">
                <Settings className="mr-2 h-5 w-5" />
                Start ITSM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download ITSM Guide
              </Button>
            </div>
            
            {/* Value Proposition */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <Clock className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Rapid Implementation</h3>
                <p className="text-indigo-200 text-sm">8-16 weeks to value delivery</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Proven ROI</h3>
                <p className="text-purple-200 text-sm">300% average return on investment</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Expert Support</h3>
                <p className="text-blue-200 text-sm">24/7 global support coverage</p>
              </div>
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
                <p className="text-purple-200 text-xs">itsm@ifbash.com</p>
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
