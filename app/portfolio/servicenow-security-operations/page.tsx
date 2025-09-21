import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Shield,
  AlertTriangle,
  Activity,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Database,
  Search,
  MonitorSmartphone,
  Layers,
  Bot,
  Lock,
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
  FileX,
  Server,
  Gauge,
  Radar,
  Building,
  MessageSquare,
  Lightbulb,
  Map,
  FileText,
  Package,
  Crosshair,
  Bug,
  ShieldCheck
} from "lucide-react";

export default function ServiceNowSecOpsPage() {
  // Enhanced JSON-LD with comprehensive SecOps data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Security Operations Solutions - AI-Powered SecOps Platform | IfBash",
    "alternateName": ["ServiceNow SecOps", "Security Operations", "SecOps Solutions", "SOAR Platform", "Security Incident Response", "Vulnerability Management"],
    "description": "Leading ServiceNow Security Operations solutions with AI-powered threat detection, automated incident response, and vulnerability management. 500+ SecOps implementations, 60% faster threat containment, 40% reduction in manual efforts. Expert SecOps specialists delivering intelligent cybersecurity globally.",
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
      "ServiceNow Security Operations",
      "Security Incident Response",
      "Vulnerability Response Management", 
      "Threat Intelligence Platform",
      "Security Orchestration and Response",
      "Security Posture Management",
      "SecOps Analytics & Reporting"
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
      "email": "secops@ifbash.com",
      "contactType": "sales",
      "availableLanguage": "English"
    }
  };

  return (
    <>
      <Head>
        <title>ServiceNow Security Operations (SecOps) Solutions | AI-Powered Cybersecurity | IfBash</title>
        <meta
          name="description"
          content="Leading ServiceNow SecOps solutions in Hyderabad & globally. AI-powered threat detection, automated incident response, vulnerability management for intelligent cybersecurity. 500+ implementations, 60% faster threat containment, expert SecOps specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow SecOps, security operations, threat detection, incident response, vulnerability management, SOAR platform, cybersecurity automation, security orchestration, SecOps solutions Hyderabad, ServiceNow security implementation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Security Operations (SecOps) Solutions | AI-Powered Cybersecurity | IfBash" />
        <meta property="og:description" content="Leading ServiceNow SecOps solutions with 500+ implementations. AI-powered threat detection, automated incident response, expert specialists delivering intelligent cybersecurity globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/portfolio/servicenow-secops-solutions" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80" />
        
        <link rel="canonical" href="https://ifbash.com/portfolio/servicenow-secops-solutions" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/10 via-red-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-red-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                ✓ SecOps Transformation Leaders
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ 500+ SecOps Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-red-500 via-orange-600 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                ✓ AI-Powered Security Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  AI-Powered
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 font-semibold">
                    ServiceNow SecOps
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Solutions for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 font-semibold">
                      Modern Cybersecurity
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8 max-w-2xl">
                  Transform cybersecurity operations with intelligent ServiceNow SecOps powered by{' '}
                  <span className="font-semibold text-orange-300">AI-driven threat detection</span>, automated incident response, and comprehensive vulnerability management. Our certified specialists deliver next-generation security operations that accelerate threat containment and enhance cyber resilience.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Transform Security Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch SecOps Demo
                  </Button>
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Threat Detection</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Zap className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-900 font-semibold">Automated Response</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <ShieldCheck className="h-5 w-5 text-yellow-700" />
                    <span className="text-sm text-gray-900 font-semibold">Vulnerability Management</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-600/25 via-orange-600/20 to-yellow-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-red-600/35 hover:via-orange-600/30 hover:to-yellow-600/25 transition-all duration-300 border border-red-400/20 shadow-xl hover:shadow-red-500/20">
                  <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-red-200 text-sm">SecOps Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/25 via-yellow-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-yellow-600/30 hover:to-red-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-orange-200 text-sm">Faster Threat Containment</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/25 via-red-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-yellow-600/35 hover:via-red-600/30 hover:to-orange-600/25 transition-all duration-300 border border-yellow-400/20 shadow-xl hover:shadow-yellow-500/20">
                  <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-yellow-200 text-sm">Less Manual Effort</div>
                </div>
                <div className="bg-gradient-to-br from-red-600/25 via-yellow-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-red-600/35 hover:via-yellow-600/30 hover:to-orange-600/25 transition-all duration-300 border border-red-400/20 shadow-xl hover:shadow-red-500/20">
                  <TrendingUp className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">250%</div>
                  <div className="text-red-200 text-sm">Security ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECOPS VALUE PROPOSITION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 text-red-700 mb-6 px-4 py-2 border border-red-200/50">
                    Next-Generation Cybersecurity
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Revolutionizing Security
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                      Operations with AI
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Modern cyber threats are sophisticated, persistent, and evolving rapidly. Organizations face alert fatigue, manual processes, fragmented security tools, and skilled analyst shortages. ServiceNow SecOps with{' '}
                    <span className="text-red-600 font-semibold">AI-powered automation</span> transforms security operations through intelligent threat detection, orchestrated response workflows, and comprehensive vulnerability management.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>automated incident response</strong> to{' '}
                    <strong>predictive threat intelligence</strong>, our intelligent SecOps platform unifies security tools, accelerates threat containment, and enables proactive cyber defense while reducing manual effort by 40% and improving response times by 60%.
                  </p>
                  <p className="leading-relaxed">
                    We help organizations move from reactive security to proactive cyber resilience through unified platforms that deliver{' '}
                    <span className="text-orange-600 font-semibold">intelligent security excellence</span> and measurable risk reduction.
                  </p>
                </div>
                
                {/* SecOps Value Drivers */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Threat Detection",
                    "Automated Incident Response", 
                    "Intelligent Vulnerability Management",
                    "Security Orchestration (SOAR)",
                    "Real-time Threat Intelligence",
                    "Comprehensive Security Analytics"
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-red-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{driver}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                    Explore AI-Powered SecOps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                    alt="Advanced cybersecurity operations center with threat detection and incident response systems"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">SecOps Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SECOPS MODULES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-red-50/50 to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 text-red-700 mb-6 px-4 py-2 border border-red-200/50">
                Core SecOps Modules
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Security
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                  Operations Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow SecOps suite powered by AI-driven security operations, automated response workflows, and intelligent threat management for superior cybersecurity posture
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: AlertTriangle,
                  title: "Security Incident Response",
                  description: "Prioritize and respond quickly to security threats using automated workflows, intelligent triage, and orchestrated remediation.",
                  features: ["Automated Incident Triage", "MITRE ATT&CK Integration", "Threat Intelligence Enrichment", "Orchestrated Response Workflows"],
                  gradient: "from-red-600 to-pink-600",
                  bgGradient: "from-red-50 via-pink-50 to-rose-50",
                  highlight: "60% Faster Response",
                  officialFeature: true
                },
                {
                  icon: Bug,
                  title: "Vulnerability Response",
                  description: "Respond efficiently and prioritize vulnerabilities based on business impact, exploitability, and threat context.",
                  features: ["Risk-Based Prioritization", "Business Impact Analysis", "Automated Patch Management", "Vulnerability Intelligence"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50",
                  highlight: "70% Risk Reduction",
                  officialFeature: true
                },
                {
                  icon: ShieldCheck,
                  title: "Security Posture Control", 
                  description: "Understand which assets are protected and which are at risk with comprehensive security posture visibility and management.",
                  features: ["Asset Security Coverage", "Risk Assessment", "Control Effectiveness", "Compliance Monitoring"],
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-red-50",
                  highlight: "Complete Visibility",
                  officialFeature: true
                },
                {
                  icon: Brain,
                  title: "Threat Intelligence",
                  description: "Gain comprehensive platform to bolster cybersecurity posture through advanced threat intelligence and context-aware analysis.",
                  features: ["Real-time Threat Feeds", "IOC Management", "Threat Actor Profiling", "Contextual Intelligence"],
                  gradient: "from-purple-600 to-red-600",
                  bgGradient: "from-purple-50 via-red-50 to-pink-50",
                  highlight: "Proactive Defense",
                  officialFeature: true
                },
                {
                  icon: Settings,
                  title: "Configuration Compliance",
                  description: "Identify, prioritize, and remediate misconfigured software and infrastructure components automatically.",
                  features: ["Configuration Scanning", "Compliance Frameworks", "Automated Remediation", "Continuous Monitoring"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
                  highlight: "Automated Compliance",
                  officialFeature: true
                },
                {
                  icon: Lock,
                  title: "Data Loss Prevention",
                  description: "Integrate SecOps with data loss prevention tools to reduce exposure and protect sensitive information.",
                  features: ["DLP Integration", "Data Classification", "Policy Enforcement", "Incident Correlation"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  highlight: "Data Protection",
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
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SecOps Integration Ecosystem */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Security Tool Integration Ecosystem
              </h3>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                Comprehensive integration with leading security tools and platforms for unified security operations management
              </p>
              
              {/* Security Tool Integrations */}
              <div className="bg-gradient-to-r from-gray-50 via-red-50 to-orange-50 rounded-2xl p-8 border border-gray-200/50">
                <h4 className="text-xl font-bold text-center text-gray-900 mb-6">
                  Certified Security Integrations
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Shield, name: "SIEM Platforms", desc: "Splunk, QRadar, ArcSight" },
                    { icon: Search, name: "Threat Intelligence", desc: "ThreatConnect, Anomali" },
                    { icon: Bug, name: "Vulnerability Scanners", desc: "Qualys, Rapid7, Tenable" },
                    { icon: Lock, name: "Endpoint Security", desc: "CrowdStrike, Carbon Black" },
                    { icon: Shield, name: "Network Security", desc: "Palo Alto, Fortinet" },
                    { icon: Database, name: "Cloud Security", desc: "AWS, Azure, GCP" },
                    { icon: Radar, name: "Email Security", desc: "Proofpoint, Mimecast" },
                    { icon: Lock, name: "DLP Solutions", desc: "Symantec, Forcepoint" }
                  ].map((integration, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50">
                      <integration.icon className="h-8 w-8 mx-auto mb-3 text-red-600" />
                      <h5 className="font-semibold text-gray-900 mb-1 text-sm">{integration.name}</h5>
                      <p className="text-xs text-gray-600">{integration.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED SECOPS CAPABILITIES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/10 via-red-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 text-white border-white/20 mb-6 px-4 py-2">
                AI-Powered Security Innovation
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Now Assist for SecOps &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                  Intelligent Security Operations
                </span>
              </h2>
              <p className="text-xl text-red-100 max-w-4xl mx-auto">
                Advanced AI capabilities that transform reactive security operations into proactive, intelligent, and automated cyber defense systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist for Security Operations",
                  description: "Enhance and scale incident response capabilities with generative AI that accelerates threat analysis and automates security workflows.",
                  capabilities: ["AI-Powered Incident Triage", "Automated Threat Analysis", "Intelligent Response Recommendations", "Security Workflow Automation"],
                  bgGradient: "from-red-600/20 via-orange-600/15 to-yellow-600/10",
                  highlight: "GenAI-Enhanced",
                  metrics: "3x Faster Analysis"
                },
                {
                  icon: Brain,
                  title: "Intelligent Threat Detection",
                  description: "AI-powered threat detection using machine learning algorithms that identify sophisticated attacks and zero-day threats in real-time.",
                  capabilities: ["Behavioral Analysis", "Anomaly Detection", "Pattern Recognition", "Predictive Threat Intelligence"],
                  bgGradient: "from-orange-600/20 via-yellow-600/15 to-red-600/10",
                  highlight: "ML-Driven",
                  metrics: "95% Detection Accuracy"
                },
                {
                  icon: Zap,
                  title: "Automated Response Orchestration",
                  description: "Intelligent automation that orchestrates security responses across multiple tools and platforms with context-aware decision making.",
                  capabilities: ["Automated Playbooks", "Multi-Tool Orchestration", "Context-Aware Actions", "Intelligent Escalation"],
                  bgGradient: "from-yellow-600/20 via-red-600/15 to-orange-600/10",
                  highlight: "Orchestrated",
                  metrics: "80% Automation Rate"
                },
                {
                  icon: Crosshair,
                  title: "Predictive Vulnerability Management",
                  description: "AI-driven vulnerability assessment that predicts exploitability and prioritizes remediation based on threat landscape analysis.",
                  capabilities: ["Exploitability Prediction", "Risk-Based Prioritization", "Threat Context Analysis", "Automated Patch Planning"],
                  bgGradient: "from-purple-600/20 via-red-600/15 to-orange-600/10",
                  highlight: "Predictive",
                  metrics: "75% Risk Reduction"
                },
                {
                  icon: Eye,
                  title: "Security Posture Intelligence",
                  description: "Comprehensive security posture monitoring with AI-powered risk assessment and continuous compliance validation.",
                  capabilities: ["Risk Posture Analysis", "Compliance Monitoring", "Control Effectiveness", "Security Metrics"],
                  bgGradient: "from-indigo-600/20 via-purple-600/15 to-red-600/10",
                  highlight: "Continuous Monitoring",
                  metrics: "99% Compliance"
                },
                {
                  icon: Globe,
                  title: "Threat Intelligence Fusion",
                  description: "AI-powered threat intelligence platform that fuses internal and external threat data for actionable security insights.",
                  capabilities: ["Multi-Source Intelligence", "IOC Correlation", "Threat Actor Attribution", "Predictive Threat Modeling"],
                  bgGradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/10",
                  highlight: "Intelligence-Driven",
                  metrics: "Real-time Updates"
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
                    <p className="text-red-100 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <CheckCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
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

        {/* SECOPS RESULTS & METRICS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Proven SecOps Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Security
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI-powered SecOps solutions deliver significant improvements in threat detection, incident response, and overall cybersecurity posture
              </p>
            </div>
            
            {/* Primary Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "60%", label: "Faster Threat Containment", desc: "Average response time improvement", gradient: "from-red-600 to-orange-600", bgGradient: "from-red-50 via-orange-50 to-yellow-50", icon: Clock },
                { metric: "40%", label: "Less Manual Effort", desc: "Automation impact", gradient: "from-orange-600 to-yellow-600", bgGradient: "from-orange-50 via-yellow-50 to-red-50", icon: Zap },
                { metric: "75%", label: "Risk Reduction", desc: "Vulnerability management improvement", gradient: "from-yellow-600 to-red-600", bgGradient: "from-yellow-50 via-red-50 to-orange-50", icon: ShieldCheck },
                { metric: "250%", label: "Security ROI", desc: "Return on investment", gradient: "from-green-600 to-emerald-600", bgGradient: "from-green-50 via-emerald-50 to-teal-50", icon: DollarSign }
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
            <div className="bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12 border border-red-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow SecOps implementation revolutionized our cybersecurity operations. We achieved 60% faster threat containment and 40% reduction in manual security tasks within 5 months. The AI-powered threat detection identifies sophisticated attacks that previously went unnoticed, while automated response workflows contain threats before they spread. Our security ROI improved by 250% in the first year."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        David Martinez, CISO
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Financial Services
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-red-100 to-orange-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow SecOps
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                  Expert Answers
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI-powered ServiceNow Security Operations solutions and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Security Operations (SecOps) and how does it enhance cybersecurity?",
                  answer: "ServiceNow SecOps is a comprehensive Security Orchestration, Automation, and Response (SOAR) platform that unifies security operations with IT operations. It enhances cybersecurity through automated threat detection, intelligent incident response, vulnerability management, and security posture control. The platform reduces threat containment time by 60%, decreases manual efforts by 40%, and provides unified visibility across the entire security ecosystem.",
                  gradient: "from-red-50 via-orange-50 to-yellow-50",
                  icon: Shield
                },
                {
                  question: "How do AI and automation improve security incident response?",
                  answer: "AI and automation in ServiceNow SecOps accelerate incident response through intelligent threat triage, automated playbooks, and predictive threat detection. Now Assist for Security Operations uses GenAI to analyze threats 3x faster, while automated workflows orchestrate responses across multiple security tools. This reduces MTTR, eliminates alert fatigue, and enables security teams to focus on strategic threat hunting and prevention.",
                  gradient: "from-orange-50 via-yellow-50 to-red-50",
                  icon: Bot
                },
                {
                  question: "What business outcomes can organizations expect from SecOps implementation?",
                  answer: "Organizations typically achieve 60% faster threat containment, 40% reduction in manual security tasks, 75% improvement in vulnerability risk reduction, and 250% security ROI. Additional benefits include improved compliance posture, reduced security alert fatigue, enhanced threat visibility, and stronger cyber resilience. Most clients see measurable security improvements within the first 3-4 months of implementation.",
                  gradient: "from-yellow-50 via-red-50 to-orange-50",
                  icon: TrendingUp
                },
                {
                  question: "How does ServiceNow SecOps integrate with existing security tools?",
                  answer: "ServiceNow SecOps provides extensive integration capabilities with leading security tools including SIEM platforms (Splunk, QRadar), endpoint security (CrowdStrike, Carbon Black), vulnerability scanners (Qualys, Tenable), and threat intelligence feeds. The platform serves as a central orchestration hub, enabling automated workflows across disparate security tools while maintaining a single pane of glass for security operations management.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50",
                  icon: Globe
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                        <span className="text-red-700 mr-2 font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <div className="text-gray-800 leading-relaxed pl-6">
                        <span className="text-orange-700 font-bold mr-2">A:</span>
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
                Ready to transform your security operations with AI-powered SecOps?
              </p>
              <Button className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                <MessageSquare className="mr-2 h-4 w-4" />
                Schedule SecOps Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/10 via-red-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Security Operations?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your SecOps
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                Transformation Journey
              </span>
            </h2>
            
            <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
              Join 500+ organizations delivering resilient cybersecurity with AI-powered ServiceNow SecOps. From intelligent threat detection to automated response, start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700">
                <Shield className="mr-2 h-5 w-5" />
                Start SecOps Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download SecOps Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-red-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-orange-200 text-xs">secops@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-yellow-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-yellow-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
