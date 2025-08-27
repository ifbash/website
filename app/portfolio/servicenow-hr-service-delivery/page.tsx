import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  UserCheck,
  Activity,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
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
  UserPlus,
  Briefcase
} from "lucide-react";

export default function ServiceNowHRSDPage() {
  // Enhanced JSON-LD with comprehensive HRSD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow HR Service Delivery Solutions - AI-Powered Human Resources Management | IfBash",
    "alternateName": ["ServiceNow HRSD", "HR Service Delivery", "Human Resources Management", "Employee Experience Platform", "HR Automation", "Digital HR"],
    "description": "Leading ServiceNow HR Service Delivery solutions with AI-powered automation, employee self-service, and intelligent workflows. 500+ HRSD implementations, 50% reduction in HR queries, 85% employee satisfaction. Expert HRSD specialists delivering exceptional employee experiences globally.",
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
      "ServiceNow HR Service Delivery",
      "Employee Experience Management",
      "HR Process Automation", 
      "Employee Self-Service Portal",
      "HR Case Management",
      "Digital Employee Onboarding",
      "HRSD Analytics & Reporting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "220",
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
      "email": "hrsd@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow HR Service Delivery (HRSD) Solutions | AI-Powered Human Resources | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow HRSD solutions in Hyderabad & globally. AI-powered HR automation, employee self-service, intelligent workflows for exceptional employee experiences. 500+ implementations, 50% reduction in HR queries, expert HRSD specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow HRSD, HR service delivery, employee experience, HR automation, employee self-service, digital HR, human resources management, HR case management, HRSD solutions Hyderabad, ServiceNow HR implementation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow HR Service Delivery (HRSD) Solutions | AI-Powered Human Resources | IfBash" />
        <meta property="og:description" content="Leading ServiceNow HRSD solutions with 500+ implementations. AI-powered HR automation, employee self-service, expert specialists delivering exceptional employee experiences globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-hrsd-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-hrsd-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-green-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-green-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                ✓ HRSD Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 500+ HRSD Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                ✓ Employee Experience Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 font-semibold">
                    ServiceNow HRSD
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 font-semibold">
                      Modern HR
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8 max-w-2xl">
                  Transform employee experiences with intelligent ServiceNow HRSD powered by{' '}
                  <span className="font-semibold text-blue-300">AI-driven automation</span>, self-service portals, and streamlined HR workflows. Our certified specialists deliver next-generation HR solutions that enhance employee satisfaction and operational efficiency.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 hover:from-green-700 hover:via-blue-700 hover:to-indigo-700"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Transform HR Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch HRSD Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI-Powered Self-Service</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Workflow Automation</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Heart className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">Employee Experience</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-green-200 text-sm">HRSD Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-green-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-green-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-blue-200 text-sm">Reduced HR Queries</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-green-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-green-600/30 hover:to-blue-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-indigo-200 text-sm">Faster Onboarding</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <Heart className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-green-200 text-sm">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HRSD VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-green-100 via-blue-100 to-indigo-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                    Next-Generation Employee Experience
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Human Resources
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                      Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern HR departments face mounting challenges: increased employee expectations, remote workforce management, complex compliance requirements, and the need for personalized experiences. ServiceNow HRSD with{' '}
                    <span className="text-green-600 font-semibold">AI-powered automation</span> transforms HR operations through intelligent self-service, streamlined workflows, and data-driven insights.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>automated employee onboarding</strong> to{' '}
                    <strong>intelligent case management</strong>, our comprehensive HRSD platform empowers employees with instant access to HR services while enabling HR teams to focus on strategic initiatives that drive engagement and retention.
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from traditional HR processes to modern, employee-centric experiences through unified platforms that deliver{' '}
                    <span className="text-blue-600 font-semibold">intelligent HR excellence</span> and measurable business outcomes.
                  </p>
                </div>
                
                {/* HRSD Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Employee Self-Service",
                    "Automated HR Workflow Management", 
                    "Intelligent Case Resolution",
                    "Employee Journey Optimization",
                    "Real-time HR Analytics",
                    "Seamless Mobile Experience"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-green-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 hover:from-green-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    Explore AI-Powered HRSD
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-green-100 via-blue-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Modern HR service delivery platform with employee self-service and AI-powered automation"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">HRSD Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE HRSD MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-blue-100 to-indigo-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Core HRSD Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive HR Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                  Delivery Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow HRSD suite powered by AI-driven employee experiences, automated workflows, and intelligent service delivery for superior HR operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Employee Center",
                  description: "Provide a single, unified portal for service delivery across the enterprise with personalized employee experiences.",
                  features: ["Unified Service Portal", "Personalized Dashboard", "Cross-Department Services", "Mobile-First Design"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Single Point of Access",
                  officialFeature: true
                },
                {
                  icon: Workflow,
                  title: "Employee Journey Management",
                  description: "Build complete workflows to support employees through complex life moments and career transitions.",
                  features: ["Lifecycle Event Management", "Journey Orchestration", "Milestone Tracking", "Automated Notifications"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "End-to-End Automation",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Case & Knowledge Management", 
                  description: "Standardize documentation, interactions, and fulfillment of employee requests with intelligent routing.",
                  features: ["Automated Case Routing", "Knowledge Base", "Collaborative Workspace", "SLA Management"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "Intelligent Resolution",
                  officialFeature: true
                },
                {
                  icon: Bot,
                  title: "Virtual Agent & AI Assist",
                  description: "Resolve issues fast with intelligent chatbots and Now Assist for HRSD that understand natural language.",
                  features: ["Natural Language Processing", "24/7 Availability", "Multi-Channel Support", "GenAI-Powered Responses"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "AI-Enhanced Support",
                  officialFeature: true
                },
                {
                  icon: UserPlus,
                  title: "Enterprise Onboarding",
                  description: "Deliver great employee experiences across onboarding and transitions with automated workflows.",
                  features: ["Digital Onboarding", "Automated Provisioning", "Compliance Tracking", "Experience Optimization"],
                  gradient: "from-teal-600 to-green-600",
                  bgGradient: "from-teal-50 via-green-50 to-emerald-50",
                  highlight: "Seamless Experience",
                  officialFeature: true
                },
                {
                  icon: BarChart2,
                  title: "Performance Analytics",
                  description: "Anticipate trends, prioritize resources, and continuously improve with real-time HR analytics.",
                  features: ["Real-time Dashboards", "Predictive Analytics", "KPI Tracking", "Continuous Improvement"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Data-Driven Insights",
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

            {/* HRSD Package Structure */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Complete HRSD Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive ServiceNow HRSD packages that scale with your HR needs, from Professional to Enterprise solutions
              </p>
              
              {/* Package-Based Capabilities */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* HRSD Professional */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-green-600 text-white mr-3">Professional</Badge>
                    Core HR Services
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Employee Center",
                      "Case & Knowledge Management", 
                      "Virtual Agent",
                      "HR Agent Workspace",
                      "Performance Analytics",
                      "Now Mobile"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HRSD Enterprise */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Enterprise</Badge>
                    Advanced HR Platform
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Employee Journey Management",
                      "Now Assist for HRSD",
                      "Alumni Service Center",
                      "Employee Document Management", 
                      "Process Mining",
                      "All Professional Features"
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

        {/* AI-POWERED HRSD CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-green-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered HR Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for HRSD &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400">
                  Intelligent Employee Experiences
                </span>
              </h2>
              <p className="text-xl text-green-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional HR operations into proactive, intelligent, and personalized employee service delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for HRSD",
                  description: "Accelerate productivity with generative AI experiences that provide instant, accurate responses to employee queries.",
                  capabilities: ["GenAI-Powered Responses", "Natural Language Understanding", "Contextual Recommendations", "Continuous Learning"],
                  bgGradient: "from-green-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "3x Faster Responses"
                },
                {
                  icon: Zap,
                  title: "Issue Auto Resolution",
                  description: "Use AI-powered automation to solve routine employee requests quickly without human intervention.",
                  capabilities: ["Automated Problem Solving", "Smart Request Routing", "Self-Healing Processes", "Exception Handling"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-green-600/10",
                  highlight: "Auto-Resolution",
                  metrics: "70% Self-Service Rate"
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Intelligence",
                  description: "Simplify and accelerate HR work with built-in machine learning that anticipates employee needs.",
                  capabilities: ["Predictive Analytics", "Trend Analysis", "Proactive Notifications", "Behavioral Insights"],
                  bgGradient: "from-indigo-600/20 via-green-600/15 to-blue-600/10",
                  highlight: "Predictive",
                  metrics: "90% Accuracy"
                },
                {
                  icon: Heart,
                  title: "Employee Relations Management",
                  description: "Manage sensitive employee requests and cases with care using intelligent workflows and confidentiality controls.",
                  capabilities: ["Confidential Case Handling", "Compliance Workflows", "Escalation Management", "Audit Trails"],
                  bgGradient: "from-purple-600/20 via-pink-600/15 to-red-600/10",
                  highlight: "Confidential",
                  metrics: "100% Compliance"
                },
                {
                  icon: MonitorSmartphone,
                  title: "Now Mobile Experience",
                  description: "Find answers, get help, and make requests across departments from a single, native mobile app.",
                  capabilities: ["Native Mobile App", "Offline Capabilities", "Push Notifications", "Responsive Design"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Mobile-First",
                  metrics: "Anytime Access"
                },
                {
                  icon: BarChart3,
                  title: "Process Mining for HR",
                  description: "Improve outcomes by optimizing process flows to streamline HR work and eliminate bottlenecks.",
                  capabilities: ["Process Discovery", "Bottleneck Identification", "Optimization Recommendations", "Continuous Improvement"],
                  bgGradient: "from-orange-600/20 via-red-600/15 to-pink-600/10",
                  highlight: "Process Optimization",
                  metrics: "35% Efficiency Gain"
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

        {/* HRSD RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven HRSD Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Employee Experience
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered HRSD solutions deliver significant improvements in employee satisfaction, operational efficiency, and HR productivity
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <img 
                src="/api/placeholder/800/400" 
                alt="Key Metrics of ServiceNow HR Service Delivery in 2025"
                className="mx-auto rounded-lg shadow-lg"
                style={{maxWidth: '100%', height: 'auto'}}
              />
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Reduced HR Queries", desc: "Through self-service automation", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: TrendingUp },
                { metric: "40%", label: "Faster Onboarding", desc: "Automated workflow optimization", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Clock },
                { metric: "35%", label: "Cost Savings", desc: "Operational efficiency gains", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-blue-50", icon: DollarSign },
                { metric: "85%", label: "Employee Satisfaction", desc: "Enhanced service experience", gradient: "from-purple-600 to-pink-600", bgGradient: "from-purple-50 via-pink-50 to-rose-50", icon: Heart }
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
            <div className="bg-gradient-to-br from-white via-green-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-green-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow HRSD implementation transformed our employee experience completely. We achieved 50% reduction in routine HR queries and 85% employee satisfaction within 6 months. The AI-powered self-service portal and automated workflows freed our HR team to focus on strategic initiatives. Our onboarding process is now 40% faster and significantly more engaging."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Jennifer Thompson, VP of Human Resources
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Technology Company
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-green-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow HRSD
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow HR Service Delivery solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow HR Service Delivery and how does it improve HR functions?",
                  answer: "ServiceNow HRSD is a comprehensive digital platform that streamlines HR processes by providing employees with easy access to HR services, automating workflows, and integrating HR systems. It improves HR functions through AI-powered self-service, intelligent case management, automated onboarding, and real-time analytics. Organizations typically see 50% reduction in routine HR queries and 85% employee satisfaction improvement.",
                  gradient: "from-green-50 via-blue-50 to-indigo-50",
                  icon: Users
                },
                {
                  question: "How does AI enhance HR Service Delivery capabilities?",
                  answer: "AI enhances HRSD through Now Assist for intelligent responses, virtual agents for 24/7 support, automated case routing, and predictive analytics. GenAI capabilities provide instant, accurate answers to employee queries, while machine learning optimizes workflows and identifies trends. This results in 70% self-service rate and 3x faster response times for employee requests.",
                  gradient: "from-blue-50 via-indigo-50 to-green-50",
                  icon: Bot
                },
                {
                  question: "What measurable benefits can organizations expect from HRSD implementation?",
                  answer: "Organizations typically achieve 50% reduction in routine HR queries, 40% faster employee onboarding, 35% operational cost savings, and 85% employee satisfaction improvement. Additional benefits include improved compliance, reduced manual effort, enhanced employee experience, and data-driven HR insights. Most clients see measurable improvements within the first 3-4 months of implementation.",
                  gradient: "from-indigo-50 via-green-50 to-blue-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow HRSD integrate with existing HR systems?",
                  answer: "ServiceNow HRSD provides extensive integration capabilities with major HR systems including SAP SuccessFactors, Oracle HCM, Workday, and other enterprise tools. The platform supports real-time data synchronization, automated workflows across systems, and unified employee experiences while maintaining data security and compliance standards.",
                  gradient: "from-purple-50 via-blue-50 to-green-50",
                  icon: Globe
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-green-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your HR operations with AI-powered HRSD?
              </p>
              <Button className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 hover:from-green-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule HRSD Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-green-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Employee Experience?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your HRSD
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional employee experiences with AI-powered ServiceNow HRSD. From intelligent self-service to automated workflows, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 hover:from-green-700 hover:via-blue-700 hover:to-indigo-700">
                <Users className="mr-2 h-5 w-5" />
                Start HRSD Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download HRSD Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-green-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-green-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-blue-200 text-xs">hrsd@ifbash.com</p>
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
