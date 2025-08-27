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
  Computer,
  AlertTriangle,
  Radio
} from "lucide-react";

export default function ServiceNowTSMPage() {
  // Enhanced JSON-LD with comprehensive TSM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Telecommunications Service Management Solutions - AI-Powered TSM Platform | IfBash",
    "alternateName": ["ServiceNow TSM", "Telecommunications Service Management", "Telecom Service Management", "AI-Powered Telecom", "5G Service Management", "Network Operations"],
    "description": "Leading ServiceNow Telecommunications Service Management solutions with AI-powered service automation, 5G network operations, and comprehensive customer experience management. 300+ TSM implementations, 80% faster service delivery, 41% case reduction. Expert telecom specialists delivering intelligent network transformation globally.",
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
      "ServiceNow Telecommunications Service Management",
      "AI-Powered Telecom Operations",
      "5G Network Service Management", 
      "Customer Experience Automation",
      "Network Operations Management",
      "Telecom Service Assurance",
      "Digital Transformation for Telecoms"
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
      "email": "tsm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Telecommunications Service Management Solutions | AI-Powered TSM Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Telecommunications Service Management solutions in Hyderabad & globally. AI-powered service automation, 5G network operations, customer experience management for intelligent telecom transformation. 300+ implementations, 80% faster delivery, expert TSM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow TSM, telecommunications service management, AI-powered telecom, 5G service management, network operations, telecom customer service, ServiceNow TSM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Telecommunications Service Management Solutions | AI-Powered TSM Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow TSM solutions with 300+ implementations. AI-powered service automation, 5G network operations, expert specialists delivering intelligent telecom transformation globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-tsm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-tsm-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Telecom Innovation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ 300+ TSM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 5G Transformation Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-semibold">
                    Telecom Service
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Management for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 font-semibold">
                      5G Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Transform telecommunications operations with intelligent ServiceNow TSM powered by{' '}
                  <span className="font-semibold text-cyan-300">AI-driven network automation</span>, 5G service orchestration, and comprehensive customer experience management. Our certified specialists deliver next-generation telecom solutions that accelerate service delivery, enhance network resilience, and drive customer loyalty.[240][242]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700"
                  >
                    <Radio className="mr-2 h-5 w-5" />
                    Accelerate 5G Services
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch TSM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Now Assist for Telco</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Radio className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm text-gray-900 font-semibold">5G Network Management</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-teal-700" />
                    <span className="text-sm text-gray-900 font-semibold">Customer Experience</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600/25 via-cyan-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-cyan-600/30 hover:to-teal-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Radio className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-blue-200 text-sm">TSM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-teal-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-teal-600/30 hover:to-blue-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">80%</div>
                  <div className="text-cyan-200 text-sm">Faster Service Delivery</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-blue-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-blue-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Activity className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">41%</div>
                  <div className="text-teal-200 text-sm">Case Volume Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-teal-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-teal-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Heart className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-blue-200 text-sm">Higher NPS Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TSM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                    Next-Generation Telecom Operations
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Telecommunications
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                      Service Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern telecommunications providers face unprecedented challenges: 5G network complexity, escalating customer expectations, siloed operations, and competitive pressure for faster service delivery. ServiceNow TSM with{' '}
                    <span className="text-blue-600 font-semibold">AI-powered network automation</span> transforms telecom operations through unified service and network management, intelligent customer experiences, and automated service assurance that delivers 80% faster service delivery and 41% case volume reduction.[240][242]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for Telco with generative AI</strong> to{' '}
                    <strong>5G service orchestration and network slice management</strong>, our comprehensive platform connects front-office customer service with back-office network operations, creating seamless workflows that break down silos and enable proactive service delivery across the entire telecommunications value chain.[240][244]
                  </p>
                  <p className="leading-relaxed">
                    We help telecommunications providers evolve from reactive service models to predictive, AI-driven operations through unified platforms that deliver{' '}
                    <span className="text-cyan-600 font-semibold">measurable customer loyalty</span> with enhanced network visibility and automated service excellence.
                  </p>
                </div>
                
                {/* TSM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Service Automation",
                    "5G Network Orchestration", 
                    "Omnichannel Customer Experience",
                    "Predictive Network Operations",
                    "Automated Service Assurance",
                    "Real-Time Performance Analytics"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore AI-Powered TSM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced telecommunications service management platform with AI-powered network automation and comprehensive customer experience management"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm opacity-90">TSM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CROWN CASTLE SUCCESS STORY */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "I've used other software, but I've never been able to accomplish this much with such a small team in the way I have with ServiceNow."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Catey Gosnell
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Operations Systems Program Manager, Crown Castle
                      </p>
                    </div>
                    <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full mt-3 sm:mt-0 self-start sm:self-center">
                      Million-Dollar Savings
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE TSM FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-cyan-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Core TSM Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Telecommunications
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Service Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow TSM suite with AI-driven service automation, 5G network management, and comprehensive customer experience optimization for superior telecommunications operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Telco",
                  description: "AI-powered telecommunications assistant that understands and resolves service issues faster with instant summaries, automated case handling, and intelligent recommendations.[240][242]",
                  features: ["Service Issue Summaries", "Automated Case Handling", "AI Recommendations", "Productivity Enhancement"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
                  highlight: "GenAI-Enhanced",
                  officialFeature: true
                },
                {
                  icon: Radio,
                  title: "5G Services & Network Slicing",
                  description: "Launch differentiated 5G services quickly with network slice template models and automated service orchestration for next-generation telecommunications offerings.[240]",
                  features: ["Network Slice Templates", "5G Service Models", "Automated Orchestration", "Service Differentiation"],
                  gradient: "from-cyan-600 to-teal-600",
                  bgGradient: "from-cyan-50 via-teal-50 to-blue-50",
                  highlight: "5G Ready",
                  officialFeature: true
                },
                {
                  icon: MessageCircle,
                  title: "Omnichannel Customer Engagement", 
                  description: "Integrate customer interactions across channels with AI-powered self-service, virtual agents, and proactive communication for seamless customer experiences.[242]",
                  features: ["Multi-Channel Integration", "AI Self-Service", "Virtual Agent Support", "Proactive Communications"],
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-cyan-50",
                  highlight: "Omnichannel",
                  officialFeature: true
                },
                {
                  icon: Eye,
                  title: "360° Customer View",
                  description: "Empower support teams with comprehensive customer account visibility, service history, and predictive insights for personalized service delivery and proactive support.[240][242]",
                  features: ["Complete Customer Profiles", "Service History Tracking", "Predictive Insights", "Personalized Support"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Complete Visibility",
                  officialFeature: true
                },
                {
                  icon: Network,
                  title: "Service-Aware CMDB",
                  description: "Streamline service and network operations with unified data structure that connects customer services to network infrastructure for intelligent impact analysis.[240]",
                  features: ["Unified Data Structure", "Service-Network Mapping", "Impact Analysis", "Intelligent Operations"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Service-Aware",
                  officialFeature: true
                },
                {
                  icon: Activity,
                  title: "Real-Time Service Health",
                  description: "Gain data-driven automation and improve user experience through AI and machine learning with continuous monitoring, predictive analytics, and automated remediation.[240][242]",
                  features: ["Continuous Monitoring", "Predictive Analytics", "Automated Remediation", "Performance Optimization"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "Real-Time Intelligence",
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
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* TSM Package Tiers */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                TSM Package Options
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow TSM offers Standard, Professional, and Enterprise packages that scale with your telecommunications service complexity and operational requirements
              </p>
              
              {/* Package Comparison */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Standard Package */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-blue-600 text-white mr-3">Standard</Badge>
                    Essential Telecom
                  </h4>
                  <p className="text-gray-600 mb-6">For telecommunications providers starting their service transformation journey.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Core Features</h5>
                    {[
                      "Customer Service Management",
                      "IT Service Management", 
                      "Walk-Up Experience",
                      "Communities & Engagement Messenger",
                      "Digital Portfolio Management",
                      "Universal Request"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Package */}
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-cyan-600 text-white mr-3">Professional</Badge>
                    Advanced Operations
                  </h4>
                  <p className="text-gray-600 mb-6">Enhanced telecommunications service management with AI and intelligent automation.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Enhanced Features</h5>
                    {[
                      "All Standard Features",
                      "Platform Analytics Advanced", 
                      "Proactive Customer Service Operations",
                      "Virtual Agent & Predictive Intelligence",
                      "Mobile Publishing & DevOps",
                      "Now Assist for TSM"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enterprise Package */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-teal-600 text-white mr-3">Enterprise</Badge>
                    Complete Platform
                  </h4>
                  <p className="text-gray-600 mb-6">Comprehensive telecommunications service management with advanced analytics and optimization.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Advanced Features</h5>
                    {[
                      "All Professional Features",
                      "Workforce Optimization", 
                      "Process Mining",
                      "Advanced Analytics & Reporting",
                      "Custom Integrations",
                      "Enterprise Support"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven TSM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Telecommunications Leaders
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Transforming with TSM
                </span>
              </h2>
            </div>
            
            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  company: "Crown Castle",
                  achievement: "Million-dollar annual savings",
                  description: "Accomplished more with smaller teams through ServiceNow automation and intelligent workflows",
                  icon: Building,
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  company: "SoftBank", 
                  achievement: "Boosted operational efficiency",
                  description: "Enhanced operational efficiency through comprehensive automation and streamlined service delivery",
                  icon: Radio,
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  company: "Radius",
                  achievement: "80% faster installations",
                  description: "Delivered new installations to customers 80% faster through automated service orchestration",
                  icon: Zap,
                  gradient: "from-teal-600 to-blue-600"
                },
                {
                  company: "BT Group",
                  achievement: "10K automated transactions",
                  description: "Automated 10,000 transactions, eliminating manual processes and improving service accuracy",
                  icon: Activity,
                  gradient: "from-green-600 to-emerald-600"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${story.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <story.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm">{story.achievement}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{story.description}</p>
                </div>
              ))}
            </div>

            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "80%", label: "Faster Service Delivery", desc: "Automated workflows", gradient: "from-blue-600 to-cyan-600", bgGradient: "from-blue-50 via-cyan-50 to-teal-50", icon: Zap },
                { metric: "41%", label: "Case Volume Reduction", desc: "AI-powered automation", gradient: "from-cyan-600 to-teal-600", bgGradient: "from-cyan-50 via-teal-50 to-blue-50", icon: Activity },
                { metric: "50%", label: "Higher NPS Score", desc: "Enhanced experiences", gradient: "from-teal-600 to-blue-600", bgGradient: "from-teal-50 via-blue-50 to-cyan-50", icon: Heart },
                { metric: "730", label: "Cases Deflected", desc: "Self-service success", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: Shield }
              ].map((result, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${result.bgGradient} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50`}>
                  <div className={`h-14 w-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center shadow-lg`}>
                    <result.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
                  <p className="text-gray-700 font-semibold mb-1 text-sm">{result.label}</p>
                  <p className="text-xs text-gray-600">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENHANCED FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-cyan-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-blue-100 to-cyan-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow TSM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Telecommunications Service Management solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Telecommunications Service Management and how does it transform telecom operations?",
                  answer: "ServiceNow TSM is a comprehensive platform that unifies service and network operations for telecommunications providers. It transforms operations through AI-powered service automation, 5G network orchestration, and omnichannel customer experiences. Organizations typically achieve 80% faster service delivery and 41% case volume reduction through unified workflows that connect customer service with network operations, enabling proactive service delivery and enhanced customer loyalty.",
                  gradient: "from-blue-50 via-cyan-50 to-teal-50",
                  icon: Radio
                },
                {
                  question: "How does AI enhance Telecommunications Service Management capabilities?",
                  answer: "AI enhances TSM through Now Assist for Telco, which provides intelligent service issue summaries, automated case handling, and predictive recommendations. Machine learning analyzes network data to predict issues, automate remediation, and optimize service delivery. This results in proactive service experiences, reduced mean time to repair (MTTR), and improved customer satisfaction through intelligent automation and predictive insights.",
                  gradient: "from-cyan-50 via-teal-50 to-blue-50",
                  icon: Bot
                },
                {
                  question: "What benefits can telecommunications providers expect from TSM implementation?",
                  answer: "Telecommunications providers typically achieve 80% faster service delivery, 41% case volume reduction, 50% higher NPS scores, and significant cost savings. Additional benefits include 5G service acceleration, automated network operations, omnichannel customer experiences, and unified service-network visibility. Most providers see measurable improvements within 3-6 months through automated workflows and AI-driven service optimization.",
                  gradient: "from-teal-50 via-blue-50 to-cyan-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow TSM support 5G and next-generation network services?",
                  answer: "ServiceNow TSM includes dedicated 5G services capabilities with network slice template models, automated service orchestration, and intelligent network management. The platform enables rapid deployment of differentiated 5G services, supports network function virtualization (NFV), and provides real-time service health monitoring. Integration with network infrastructure allows seamless management of complex 5G services and network slicing for diverse use cases.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Radio
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-blue-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-cyan-700 font-bold mr-2">A:</span>
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
                Ready to transform your telecommunications operations with AI-powered TSM?
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule TSM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Telecommunications Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your TSM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 300+ telecommunications providers delivering exceptional customer experiences with AI-powered ServiceNow TSM. From 5G services to network automation, start your telecom transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700">
                <Radio className="mr-2 h-5 w-5" />
                Start TSM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download TSM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-blue-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-cyan-200 text-xs">tsm@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-teal-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
