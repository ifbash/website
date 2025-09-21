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
  Truck
} from "lucide-react";

export default function ServiceNowSPMPage() {
  // Enhanced JSON-LD with comprehensive SPM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Strategic Portfolio Management Solutions - AI-Powered SPM Platform | IfBash",
    "alternateName": ["ServiceNow SPM", "Strategic Portfolio Management", "Portfolio Management", "Project Portfolio Management", "Strategic Planning", "Investment Management"],
    "description": "Leading ServiceNow Strategic Portfolio Management solutions with AI-powered planning, scenario modeling, and investment optimization. 500+ SPM implementations, 35% project success improvement, 25% better budget utilization. Expert SPM specialists delivering intelligent portfolio management globally.",
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
      "ServiceNow Strategic Portfolio Management",
      "AI-Powered Portfolio Planning",
      "Strategic Investment Management", 
      "Scenario Planning & Modeling",
      "Resource Optimization",
      "Project Portfolio Analytics",
      "SPM Implementation & Training"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "170",
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
      "email": "spm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Strategic Portfolio Management (SPM) Solutions | AI-Powered Portfolio Planning | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow SPM solutions in Hyderabad & globally. AI-powered strategic portfolio management, scenario planning, investment optimization for intelligent project delivery. 500+ implementations, 35% project success improvement, expert SPM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow SPM, Strategic Portfolio Management, project portfolio management, AI portfolio planning, strategic planning, investment management, scenario planning, ServiceNow SPM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Strategic Portfolio Management (SPM) Solutions | AI-Powered Portfolio Planning | IfBash" />
        <meta property="og:description" content="Leading ServiceNow SPM solutions with 500+ implementations. AI-powered strategic portfolio management, scenario planning, expert specialists delivering intelligent project portfolio outcomes globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-spm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-spm-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ SPM Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 500+ SPM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ Portfolio Strategy Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-semibold">
                    ServiceNow SPM
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-semibold">
                      Strategic Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-2xl">
                  Transform strategic portfolio management with intelligent ServiceNow SPM powered by{' '}
                  <span className="font-semibold text-indigo-300">AI-driven planning</span>, scenario modeling, and investment optimization. Our certified specialists deliver next-generation portfolio management solutions that align strategy with execution and accelerate business outcomes.[116][125]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Transform Portfolio Strategy
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch SPM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Planning</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Layers className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Scenario Modeling</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <DollarSign className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Investment Optimization</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-purple-200 text-sm">SPM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-purple-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Clock className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">20%</div>
                  <div className="text-indigo-200 text-sm">Faster Time to Market</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-blue-200 text-sm">Better Budget Utilization</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <CheckCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">35%</div>
                  <div className="text-purple-200 text-sm">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                    Next-Generation Portfolio Management
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Strategic
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                      Portfolio Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern enterprises struggle with strategic alignment: disconnected planning tools, siloed portfolios, static budgets, and limited visibility into project performance. ServiceNow SPM with{' '}
                    <span className="text-purple-600 font-semibold">AI-powered intelligence</span> transforms portfolio management through predictive analytics, scenario planning, and real-time orchestration that connects strategy to execution seamlessly.[116][120]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for SPM</strong> to{' '}
                    <strong>dynamic funding cycles</strong>, our comprehensive platform enables organizations to simulate investment scenarios, automatically reallocate resources from underperforming initiatives, and track strategic burn rates to ensure projects deliver promised outcomes with 360° visibility.[116][125]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from static annual planning to dynamic, AI-driven portfolio management through unified platforms that deliver{' '}
                    <span className="text-indigo-600 font-semibold">strategic portfolio excellence</span> and measurable business transformation at enterprise scale.
                  </p>
                </div>
                
                {/* SPM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Strategic Planning",
                    "Dynamic Scenario Modeling", 
                    "Intelligent Investment Funding",
                    "Predictive Portfolio Analytics",
                    "Real-time Resource Optimization",
                    "Seamless Workflow Orchestration"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-purple-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Explore AI-Powered SPM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced strategic portfolio management platform with AI-powered planning and investment optimization"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">SPM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SPM MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-purple-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                Core SPM Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Strategic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Portfolio Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow SPM suite powered by AI-driven strategic intelligence, scenario planning, and investment optimization for superior portfolio outcomes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Target,
                  title: "Strategic Planning",
                  description: "Connect strategy to execution with end-to-end planning in a single workspace. Set goals, align work to teams, and examine progress to drive business outcomes.[120]",
                  features: ["Goal Frameworks", "Hybrid Roadmaps", "Progress Tracking", "Outcome Alignment"],
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50",
                  highlight: "End-to-End Planning",
                  officialFeature: true
                },
                {
                  icon: Layers,
                  title: "Scenario Planning",
                  description: "Simulate and compare investment scenarios to align your portfolio with business strategy. Evaluate cost, benefits, and resource allocation with what-if analysis.[116][120]",
                  features: ["Investment Simulation", "What-If Analysis", "Scenario Comparison", "Strategic Alignment"],
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-purple-50",
                  highlight: "Multiple Scenarios",
                  officialFeature: true
                },
                {
                  icon: DollarSign,
                  title: "Investment Funding", 
                  description: "Manage funds based on business needs and strategic objectives with dynamic funding cycles that automatically reallocate resources for optimal outcomes.[116][120]",
                  features: ["Dynamic Funding", "Budget Tracking", "Resource Reallocation", "Strategic Burn Rates"],
                  gradient: "from-blue-600 to-purple-600",
                  bgGradient: "from-blue-50 via-purple-50 to-indigo-50",
                  highlight: "Dynamic Budgeting",
                  officialFeature: true
                },
                {
                  icon: Users,
                  title: "Resource Management",
                  description: "Proactively manage resources across teams, forecast risks due to constraints, and balance capacity against demand to ensure deliverable success.[116]",
                  features: ["Capacity Planning", "Resource Forecasting", "Skill Management", "Time Tracking"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Proactive Management",
                  officialFeature: true
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Intelligence",
                  description: "Transform historical project data into strategic foresight using machine learning to surface risks, predict bottlenecks, and recommend resource optimization.[116]",
                  features: ["ML-Powered Insights", "Risk Prediction", "Bottleneck Detection", "Resource Recommendations"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "ML-Driven Insights",
                  officialFeature: true
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Management",
                  description: "Collect and organize company-wide suggestions from any department, encouraging impactful ideas while increasing employee engagement and creative development.[116]",
                  features: ["Idea Collection", "Innovation Pipeline", "Employee Engagement", "Creative Development"],
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-red-50",
                  highlight: "Innovation Pipeline",
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
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SPM Three-Layer Architecture */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Three-Layer SPM Architecture
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow SPM operates across Intelligence, Orchestration, and Execution layers for comprehensive portfolio transformation[116]
              </p>
              
              {/* Architecture Layers */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Intelligence Layer */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-purple-600 text-white mr-3">Intelligence</Badge>
                    AI-Powered Decisions
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Now Assist for SPM",
                      "Predictive Intelligence", 
                      "Performance Analytics",
                      "Process Mining",
                      "ML-Driven Insights",
                      "Strategic Foresight"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orchestration Layer */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-indigo-600 text-white mr-3">Orchestration</Badge>
                    Strategic Planning
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Strategic Planning",
                      "Scenario Planning",
                      "Investment Funding", 
                      "Demand Management",
                      "Digital Portfolio Management",
                      "Dynamic Resource Allocation"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Execution Layer */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Execution</Badge>
                    Project Delivery
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Project Portfolio Management",
                      "Resource Management",
                      "Innovation Management", 
                      "Collaborative Work Management",
                      "Virtual Agent",
                      "Automated Governance"
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

        {/* AI-POWERED SPM CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Portfolio Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for SPM &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  Intelligent Strategic Operations
                </span>
              </h2>
              <p className="text-xl text-purple-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform traditional portfolio management into proactive, intelligent, and automated strategic operations[116][122]
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Strategic Portfolio",
                  description: "Break down barriers with generative AI to deliver customer value quickly. AI-powered advisor analyzing portfolio health signals and market conditions.[116][122]",
                  capabilities: ["GenAI Portfolio Analysis", "Strategic Recommendations", "Risk Assessment", "Market Intelligence"],
                  bgGradient: "from-purple-600/20 via-indigo-600/15 to-blue-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "Q2 2025 Release"
                },
                {
                  icon: Brain,
                  title: "Predictive Portfolio Analytics",
                  description: "Machine learning transforms historical data into strategic foresight, predicting bottlenecks and surfacing risks before they impact delivery.[116]",
                  capabilities: ["ML Pattern Recognition", "Bottleneck Prediction", "Risk Forecasting", "Strategic Insights"],
                  bgGradient: "from-indigo-600/20 via-blue-600/15 to-purple-600/10",
                  highlight: "Predictive",
                  metrics: "Risk Prevention"
                },
                {
                  icon: Workflow,
                  title: "Automated Portfolio Governance",
                  description: "AI handles routine governance like auto-approving low-risk changes while escalating exceptions with pre-populated context for faster decisions.[116]",
                  capabilities: ["Automated Approvals", "Exception Handling", "Context Enrichment", "Smart Escalation"],
                  bgGradient: "from-blue-600/20 via-purple-600/15 to-indigo-600/10",
                  highlight: "Automated",
                  metrics: "Smart Governance"
                },
                {
                  icon: TrendingUp,
                  title: "Dynamic Resource Optimization",
                  description: "AI continuously adjusts resource allocation based on performance data, automatically reallocating budgets from underperforming to high-potential initiatives.[116]",
                  capabilities: ["Dynamic Allocation", "Performance-Based Budgeting", "Resource Rebalancing", "Outcome Optimization"],
                  bgGradient: "from-green-600/20 via-emerald-600/15 to-teal-600/10",
                  highlight: "Dynamic",
                  metrics: "Continuous Optimization"
                },
                {
                  icon: Target,
                  title: "Strategic Burn Rate Analysis",
                  description: "Track not just spend rates but strategic burn rates - how quickly projects deliver against promised outcomes with real-time visibility.[116]",
                  capabilities: ["Outcome Tracking", "Strategic Metrics", "Real-time Analysis", "Performance Correlation"],
                  bgGradient: "from-orange-600/20 via-red-600/15 to-pink-600/10",
                  highlight: "Strategic",
                  metrics: "Outcome-Based"
                },
                {
                  icon: Layers,
                  title: "Intelligent Scenario Modeling",
                  description: "AI-powered what-if analysis simulates multiple investment scenarios with machine learning insights for optimal portfolio decision making.[125]",
                  capabilities: ["AI Scenario Generation", "Investment Simulation", "Outcome Prediction", "Decision Intelligence"],
                  bgGradient: "from-cyan-600/20 via-blue-600/15 to-indigo-600/10",
                  highlight: "Intelligent",
                  metrics: "Multiple Scenarios"
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
                    <p className="text-purple-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
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

        {/* SPM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven SPM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Strategic Portfolio
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Transformation Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered SPM solutions deliver significant improvements in time to market, budget utilization, and project success rates[125][129]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Portfolio Management Key Metrics</h3>
                [130]
              </div>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "20%", label: "Faster Time to Market", desc: "Accelerated project delivery", gradient: "from-purple-600 to-indigo-600", bgGradient: "from-purple-50 via-indigo-50 to-blue-50", icon: Clock },
                { metric: "25%", label: "Better Budget Utilization", desc: "Optimized resource allocation", gradient: "from-indigo-600 to-blue-600", bgGradient: "from-indigo-50 via-blue-50 to-purple-50", icon: DollarSign },
                { metric: "30%", label: "Improved Forecast Accuracy", desc: "Predictive intelligence insights", gradient: "from-blue-600 to-purple-600", bgGradient: "from-blue-50 via-purple-50 to-indigo-50", icon: Target },
                { metric: "35%", label: "Higher Project Success", desc: "Strategic alignment outcomes", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: CheckCircle }
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
            <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow SPM implementation transformed our strategic portfolio management completely. We achieved 35% higher project success rates and 25% better budget utilization within 8 months. The AI-powered scenario planning and predictive intelligence enabled us to reallocate resources dynamically, while Now Assist provides real-time strategic recommendations that accelerated our time to market by 20%."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Amanda Foster, Chief Strategy Officer
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Financial Services Enterprise
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-purple-100 to-indigo-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow SPM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Strategic Portfolio Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Strategic Portfolio Management and how does it transform business strategy?",
                  answer: "ServiceNow SPM is a comprehensive AI-powered platform that aligns strategy with execution through intelligent portfolio planning, scenario modeling, and investment optimization. It transforms business strategy by providing 360° visibility, connecting strategic goals to project delivery, and enabling dynamic resource allocation. Organizations typically achieve 35% higher project success rates and 20% faster time to market through unified strategic operations.",
                  gradient: "from-purple-50 via-indigo-50 to-blue-50",
                  icon: Target
                },
                {
                  question: "How does AI enhance Strategic Portfolio Management capabilities?",
                  answer: "AI enhances SPM through Now Assist for strategic recommendations, predictive intelligence for risk forecasting, and automated governance for routine approvals. Machine learning analyzes portfolio patterns, predicts bottlenecks, and dynamically reallocates resources from underperforming to high-potential initiatives. This results in 25% better budget utilization and 30% improved forecast accuracy through intelligent decision-making.",
                  gradient: "from-indigo-50 via-blue-50 to-purple-50",
                  icon: Brain
                },
                {
                  question: "What measurable benefits can organizations expect from SPM implementation?",
                  answer: "Organizations typically achieve 20% faster time to market, 25% better budget utilization, 30% improved forecast accuracy, and 35% higher project success rates. Additional benefits include dynamic funding cycles, automated portfolio governance, real-time strategic visibility, and seamless strategy-to-execution alignment. Most clients see measurable improvements within the first 6-8 months of implementation.",
                  gradient: "from-blue-50 via-purple-50 to-indigo-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow SPM integrate across the three-layer architecture?",
                  answer: "ServiceNow SPM operates across Intelligence (Now Assist, Predictive Analytics), Orchestration (Strategic Planning, Scenario Modeling), and Execution (Project Portfolio Management, Resource Management) layers. This architecture ensures AI-driven insights flow seamlessly into strategic planning and execution, enabling organizations to move from static annual planning to dynamic, responsive portfolio management with unified workflows.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Layers
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-purple-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your strategic portfolio management with AI-powered SPM?
              </p>
              <Button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule SPM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Strategic Portfolio Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your SPM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering exceptional strategic outcomes with AI-powered ServiceNow SPM. From intelligent scenario planning to dynamic resource optimization, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700">
                <Target className="mr-2 h-5 w-5" />
                Start SPM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download SPM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-purple-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-indigo-200 text-xs">spm@ifbash.com</p>
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
