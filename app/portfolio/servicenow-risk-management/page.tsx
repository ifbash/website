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
  AlertTriangle
} from "lucide-react";

export default function ServiceNowIRMPage() {
  // Enhanced JSON-LD with comprehensive IRM data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Integrated Risk Management Solutions - AI-Powered IRM Platform | IfBash",
    "alternateName": ["ServiceNow IRM", "Integrated Risk Management", "Risk Management", "Compliance Management", "AI-Powered Risk", "Enterprise Risk"],
    "description": "Leading ServiceNow Integrated Risk Management solutions with AI-powered risk assessment, compliance automation, and operational resilience. 350+ IRM implementations, 40% improved risk visibility, 35% increased automation. Expert risk management specialists delivering intelligent GRC transformation globally.",
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
      "ServiceNow Integrated Risk Management",
      "AI-Powered Risk Assessment",
      "Compliance Management Automation", 
      "Operational Risk Management",
      "Regulatory Change Management",
      "Audit Management Solutions",
      "Enterprise Resilience Platform"
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
      "email": "irm@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Integrated Risk Management Solutions | AI-Powered IRM Platform | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow Integrated Risk Management solutions in Hyderabad & globally. AI-powered risk assessment, compliance automation, operational resilience for intelligent enterprise governance. 350+ implementations, 40% improved visibility, expert IRM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow IRM, integrated risk management, AI-powered risk, compliance management, operational risk, GRC solutions, risk assessment automation, ServiceNow IRM solutions Hyderabad"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Integrated Risk Management Solutions | AI-Powered IRM Platform | IfBash" />
        <meta property="og:description" content="Leading ServiceNow IRM solutions with 350+ implementations. AI-powered risk assessment, compliance automation, expert specialists delivering intelligent governance globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-irm-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-irm-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-red-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-red-600/15 to-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ Risk Management Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-red-600 via-orange-600 to-rose-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                ✓ 350+ IRM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 via-red-600 to-rose-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ GRC Transformation Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 font-semibold">
                    Risk Management
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 font-semibold">
                      Enterprise Resilience
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8 max-w-2xl">
                  Transform enterprise governance with intelligent ServiceNow IRM powered by{' '}
                  <span className="font-semibold text-red-300">AI-driven risk intelligence</span>, automated compliance workflows, and comprehensive operational resilience. Our certified specialists deliver next-generation risk management solutions that enhance visibility, accelerate decision-making, and strengthen organizational defenses.[230][232]
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 hover:from-orange-700 hover:via-red-700 hover:to-rose-700"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Strengthen Risk Defense
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch IRM Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Risk Intelligence</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Clipboard className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-gray-900 font-semibold">Automated Compliance</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <AlertTriangle className="h-5 w-5 text-rose-700" />
                    <span className="text-sm text-gray-900 font-semibold">Real-time Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-600/25 via-red-600/20 to-rose-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-red-600/30 hover:to-rose-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-orange-200 text-sm">IRM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/25 via-rose-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-red-600/35 hover:via-rose-600/30 hover:to-orange-600/25 transition-all duration-300 border border-red-400/20 shadow-xl hover:shadow-red-500/20">
                  <Eye className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-red-200 text-sm">Improved Risk Visibility</div>
                </div>
                <div className="bg-gradient-to-br from-rose-600/25 via-orange-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-rose-600/35 hover:via-orange-600/30 hover:to-red-600/25 transition-all duration-300 border border-rose-400/20 shadow-xl hover:shadow-rose-500/20">
                  <Zap className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">35%</div>
                  <div className="text-rose-200 text-sm">Increased Automation</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/25 via-rose-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-rose-600/30 hover:to-red-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <Activity className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-orange-200 text-sm">Faster Decision-Making</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IRM VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-orange-100 via-red-100 to-rose-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                    Next-Generation Risk Intelligence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Enterprise
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-rose-600">
                      Risk Management with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern enterprises face escalating risk complexity: cyber threats, regulatory changes, operational disruptions, and compliance requirements that create interconnected vulnerabilities across the organization. ServiceNow IRM with{' '}
                    <span className="text-orange-600 font-semibold">AI-powered risk intelligence</span> transforms risk management through real-time visibility, automated assessments, and predictive analytics that improve risk visibility by 40% while accelerating decision-making by 30%.[232][235]
                  </p>
                  <p className="leading-relaxed">
                    From <strong>Now Assist for IRM with autonomous threat analysis</strong> to{' '}
                    <strong>integrated compliance monitoring across frameworks</strong>, our comprehensive platform creates unified risk ecosystems that connect policy management, operational resilience, and regulatory compliance with intelligent workflows that eliminate silos and enable proactive risk mitigation across all business domains.[233][234]
                  </p>
                  <p className="leading-relaxed">
                    We help organizations evolve from reactive risk management to predictive, AI-driven governance through unified platforms that deliver{' '}
                    <span className="text-red-600 font-semibold">measurable enterprise resilience</span> with continuous monitoring and automated response capabilities.
                  </p>
                </div>
                
                {/* IRM Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Risk Intelligence",
                    "Automated Compliance Monitoring", 
                    "Operational Resilience Management",
                    "Predictive Threat Analysis",
                    "Regulatory Change Automation",
                    "Integrated Audit Management"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-orange-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 hover:from-orange-700 hover:via-red-700 hover:to-rose-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Explore AI-Powered IRM
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-orange-100 via-red-100 to-rose-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced integrated risk management platform with AI-powered analytics and comprehensive enterprise governance automation"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">350+</div>
                  <div className="text-sm opacity-90">IRM Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WIPRO SUCCESS STORY */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-br from-white via-orange-50 to-red-50 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "Having 'risk central' is a new way of looking at risk management. ServiceNow makes it so easy to manage risk confidently."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Satvinder Madhok
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Head of Business IT Management for Cybersecurity, GRC at Wipro
                      </p>
                    </div>
                    <Badge className="bg-orange-600 text-white px-3 py-1 rounded-full mt-3 sm:mt-0 self-start sm:self-center">
                      Risk Central Success
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE IRM FEATURES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-orange-50/50 to-red-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 via-red-100 to-rose-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                Core IRM Features
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Integrated
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-rose-600">
                  Risk Management Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow IRM suite with AI-driven risk intelligence, automated compliance workflows, and comprehensive operational resilience for superior enterprise governance
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Clipboard,
                  title: "Policy & Compliance Management",
                  description: "Automate policy lifecycles and continuously monitor compliance across multiple frameworks with intelligent workflow orchestration and real-time tracking.",
                  features: ["Automated Policy Lifecycles", "Continuous Compliance Monitoring", "Multi-Framework Support", "Workflow Orchestration"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-rose-50",
                  highlight: "Automated Compliance",
                  officialFeature: true
                },
                {
                  icon: Shield,
                  title: "AI-Powered Risk Management",
                  description: "Enable fine-grained business impact analysis with AI-driven risk assessment, predictive analytics, and intelligent prioritization to appropriately respond to threats.",
                  features: ["AI Risk Assessment", "Business Impact Analysis", "Predictive Analytics", "Intelligent Prioritization"],
                  gradient: "from-red-600 to-rose-600",
                  bgGradient: "from-red-50 via-rose-50 to-orange-50",
                  highlight: "AI Risk Intelligence",
                  officialFeature: true
                },
                {
                  icon: Activity,
                  title: "Operational Risk Management", 
                  description: "Manage operational risks as part of integrated programs with real-time monitoring, automated assessments, and cross-functional collaboration workflows.",
                  features: ["Integrated Risk Programs", "Real-Time Monitoring", "Automated Assessments", "Cross-Functional Collaboration"],
                  gradient: "from-rose-600 to-orange-600",
                  bgGradient: "from-rose-50 via-orange-50 to-red-50",
                  highlight: "Operational Focus",
                  officialFeature: true
                },
                {
                  icon: Lock,
                  title: "Continuous Authorization & Monitoring",
                  description: "Accelerate IT system authorization processes and maintain continuous compliance monitoring with automated security controls and real-time visibility.",
                  features: ["Accelerated Authorization", "Continuous Monitoring", "Automated Security Controls", "Real-Time Compliance"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Continuous Control",
                  officialFeature: true
                },
                {
                  icon: Globe,
                  title: "Regulatory Change Management",
                  description: "Keep pace with complex regulatory landscape through integration with leading content providers and automated change impact analysis across the enterprise.",
                  features: ["Regulatory Intelligence Feeds", "Change Impact Analysis", "Content Provider Integration", "Automated Updates"],
                  gradient: "from-green-600 to-emerald-600",
                  bgGradient: "from-green-50 via-emerald-50 to-teal-50",
                  highlight: "Regulatory Intelligence",
                  officialFeature: true
                },
                {
                  icon: FileText,
                  title: "Integrated Audit Management",
                  description: "Use risk data to scope and prioritize audit plans with automated cross-functional processes, evidence collection, and comprehensive reporting capabilities.",
                  features: ["Risk-Based Audit Planning", "Automated Evidence Collection", "Cross-Functional Processes", "Comprehensive Reporting"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50",
                  highlight: "Risk-Integrated Audits",
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
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* IRM Package Tiers */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                IRM Package Options
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                ServiceNow IRM offers Standard, Professional, and Enterprise packages that scale with your risk management maturity and organizational complexity
              </p>
              
              {/* Package Comparison */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Standard Package */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-orange-600 text-white mr-3">Standard</Badge>
                    Growing Businesses
                  </h4>
                  <p className="text-gray-600 mb-6">For businesses that need integrated risk and compliance management foundations.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Core Features</h5>
                    {[
                      "Policy and Compliance Management",
                      "Risk Management", 
                      "Performance Analytics",
                      "Audit Management",
                      "Use Case Accelerators"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Package */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 border border-red-200/50 transform scale-105 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-red-600 text-white mr-3">Professional</Badge>
                    Scaling Organizations
                  </h4>
                  <p className="text-gray-600 mb-6">Optimize risk and compliance management while scaling with AI and intelligent automation.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Enhanced Features</h5>
                    {[
                      "All Standard Features",
                      "Virtual Agent", 
                      "Continuous Authorization & Monitoring",
                      "Predictive Intelligence",
                      "Regulatory Change Management",
                      "Operational Resilience"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enterprise Package */}
                <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 border border-rose-200/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Badge className="bg-rose-600 text-white mr-3">Enterprise</Badge>
                    Advanced Resilience
                  </h4>
                  <p className="text-gray-600 mb-6">Advance risk and operational insights to build comprehensive business resilience.</p>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Advanced Features</h5>
                    {[
                      "All Professional Features",
                      "Unlimited Compliance Requests", 
                      "Automated Risk Assessments",
                      "Risk Event Tasks & Loss Workflow",
                      "ORX Integration (Financial Services)",
                      "Advanced Analytics & Reporting"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-rose-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IRM RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-red-50 to-rose-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven IRM Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-rose-600">
                  Risk Transformation
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered IRM solutions deliver significant improvements in risk visibility, compliance automation, and operational resilience[230][232]
              </p>
            </div>
            
            {/* Chart Integration */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrated Risk Management Benefits</h3>
                [238]
              </div>
            </div>
            
            {/* Success Stories */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-white via-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">DNB Bank</h3>
                <p className="text-orange-600 font-semibold mb-3">Lowered risk vulnerabilities for continuous service</p>
                <p className="text-gray-600 text-sm leading-relaxed">Enhanced legal compliance and service continuity through integrated risk management and automated vulnerability monitoring.</p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-red-50 to-rose-50 rounded-2xl p-8 border border-red-200/50 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Avanade</h3>
                <p className="text-red-600 font-semibold mb-3">Automated IRM and security processes</p>
                <p className="text-gray-600 text-sm leading-relaxed">Increased visibility and responsiveness through automated risk management processes and integrated security workflows.</p>
              </div>
            </div>

            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "40%", label: "Improved Risk Visibility", desc: "Real-time monitoring", gradient: "from-orange-600 to-red-600", bgGradient: "from-orange-50 via-red-50 to-rose-50", icon: Eye },
                { metric: "35%", label: "Increased Automation", desc: "AI-driven processes", gradient: "from-red-600 to-rose-600", bgGradient: "from-red-50 via-rose-50 to-orange-50", icon: Zap },
                { metric: "30%", label: "Faster Decision-Making", desc: "Accelerated response", gradient: "from-rose-600 to-orange-600", bgGradient: "from-rose-50 via-orange-50 to-red-50", icon: Activity },
                { metric: "25%", label: "Reduced Compliance Costs", desc: "Streamlined processes", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: DollarSign }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-orange-100 to-red-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow IRM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-rose-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Integrated Risk Management solutions and enterprise governance implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Integrated Risk Management and how does it transform enterprise governance?",
                  answer: "ServiceNow IRM is a comprehensive platform that unifies risk management, compliance, and operational resilience across the enterprise. It transforms governance through AI-powered risk intelligence, automated compliance monitoring, and real-time visibility into threats and vulnerabilities. Organizations typically achieve 40% improved risk visibility and 35% increased automation through integrated workflows that connect policy management, risk assessment, and regulatory compliance in a single platform.",
                  gradient: "from-orange-50 via-red-50 to-rose-50",
                  icon: Shield
                },
                {
                  question: "How does AI enhance Integrated Risk Management capabilities and decision-making?",
                  answer: "AI enhances IRM through Now Assist for threat hunting and analysis, predictive risk modeling, automated compliance monitoring, and intelligent prioritization of risks based on business impact. Machine learning algorithms analyze vast datasets to identify patterns, predict potential threats, and recommend mitigation strategies. This results in 30% faster decision-making and proactive risk management that prevents issues before they impact business operations.",
                  gradient: "from-red-50 via-rose-50 to-orange-50",
                  icon: Brain
                },
                {
                  question: "What measurable benefits can organizations expect from IRM implementation?",
                  answer: "Organizations typically achieve 40% improved risk visibility, 35% increased automation, 30% faster decision-making, and 25% reduced compliance costs. Additional benefits include real-time threat monitoring, automated regulatory change management, integrated audit processes, and operational resilience across technology, people, and processes. Most clients see measurable improvements within the first 3-6 months through continuous monitoring and automated workflows.",
                  gradient: "from-rose-50 via-orange-50 to-red-50",
                  icon: BarChart2
                },
                {
                  question: "How does ServiceNow IRM integrate with existing security and compliance systems?",
                  answer: "ServiceNow IRM provides seamless integration with data classification tools, regulatory content providers, security information systems, and risk quantification platforms. The platform supports APIs, certified connectors, and prebuilt integrations with leading GRC tools, enabling unified visibility across the entire risk ecosystem. Integration with ServiceNow's broader platform (ITSM, SecOps, CSM) creates comprehensive governance that spans IT operations, security, and business processes.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50",
                  icon: Network
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-orange-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-red-700 font-bold mr-2">A:</span>
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
                Ready to transform your enterprise risk management with AI-powered IRM?
              </p>
              <Button className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 hover:from-orange-700 hover:via-red-700 hover:to-rose-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule IRM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600/10 via-red-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600/10 via-orange-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-rose-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Enterprise Risk Management?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your IRM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-rose-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
              Join 350+ organizations building enterprise resilience with AI-powered ServiceNow IRM. From risk intelligence to automated compliance, start your governance transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 hover:from-orange-700 hover:via-red-700 hover:to-rose-700">
                <Shield className="mr-2 h-5 w-5" />
                Start IRM Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download IRM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-orange-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-red-200 text-xs">irm@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-rose-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-rose-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-rose-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
