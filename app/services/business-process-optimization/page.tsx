import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Brain,
  Database,
  UserCheck,
  MessageCircle,
  Star,
  Quote,
  Clock,
  DollarSign,
  Globe,
  Phone,
  Mail,
  Calendar,
  Play,
  Briefcase,
  Building,
  Settings,
  BookOpen,
  PieChart,
  Compass,
  Search,
  MapPin,
  FileText,
  Layers,
  Activity,
  GitBranch,
  RotateCcw,
  Gauge,
  Eye,
  Filter,
  Shuffle,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowProcessOptimizationPage() {
  // Enhanced JSON-LD with comprehensive process optimization data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Process Optimization Services - IfBash",
    "alternateName": ["Process Mining ServiceNow", "Business Process Optimization", "Workflow Optimization", "Process Analysis Services"],
    "description": "Expert ServiceNow process optimization services with process mining, workflow analysis, bottleneck identification, performance improvement. 400+ optimized processes, 50% efficiency gains, certified specialists delivering enterprise solutions globally.",
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
      "ServiceNow Process Optimization",
      "Process Mining Services",
      "Workflow Analysis",
      "Business Process Improvement",
      "Bottleneck Identification",
      "Performance Analytics",
      "Process Automation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Process Mining & Analysis",
        "description": "Comprehensive process mining and analysis to identify optimization opportunities",
        "category": "Process Optimization",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Workflow Optimization",
        "description": "End-to-end workflow optimization and automation services",
        "category": "Workflow Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Performance Improvement",
        "description": "Process performance improvement with measurable business outcomes",
        "category": "Performance Services",
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
      "email": "processoptimization@ifbash.com",
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
        "name": "What are ServiceNow Process Optimization Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Process Optimization Services include process mining, workflow analysis, bottleneck identification, performance improvement, and automation to maximize business process efficiency and drive measurable outcomes through data-driven insights."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow process mining work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow process mining analyzes event logs and transaction data to create visual process maps, identify bottlenecks, detect deviations, and provide AI-powered insights for process improvement and optimization opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from process optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically achieve 50% efficiency improvement, 40% cycle time reduction, 60% cost savings, and 280% average ROI within 6-12 months through systematic process optimization and automation."
        }
      },
      {
        "@type": "Question",
        "name": "Which processes can be optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We optimize all ServiceNow processes including ITSM, HR, procurement, customer service, change management, incident management, and custom workflows across all business functions and departments."
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
        "name": "Services",
        "item": "https://ifbash.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ServiceNow Process Optimization",
        "item": "https://ifbash.com/servicenow-process-optimization"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Process Optimization Services | Process Mining & Workflow Analysis | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow process optimization services in Hyderabad & globally. Process mining, workflow analysis, bottleneck identification. 400+ optimized processes, 50% efficiency gains, 40% cycle time reduction. Certified process specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow process optimization, process mining, workflow analysis, business process improvement, bottleneck identification, ServiceNow consulting Hyderabad, process automation, performance analytics, workflow optimization, process analysis"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Process Optimization Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Process Optimization Services | Process Mining & Analysis | IfBash" />
        <meta property="og:description" content="Leading ServiceNow process optimization with 400+ optimized processes. Process mining, workflow analysis, 50% efficiency gains. Certified specialists delivering process excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-process-optimization" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Process Optimization | Process Mining & Analysis | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow process optimization with 400+ optimized processes. Process mining, workflow analysis by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-process-optimization" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-600/10 via-yellow-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-600/15 to-yellow-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ Process Optimization Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                ✓ 400+ Optimized Processes
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                ✓ Process Mining Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Process
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                    Optimization
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Workflow{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8 max-w-2xl">
                  Transform your business processes with ServiceNow optimization expertise. Our certified specialists deliver{' '}
                  <span className="font-semibold text-amber-300">process mining</span>, workflow analysis, and performance improvement that drives measurable efficiency gains and operational excellence.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Analyze Your Processes
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Optimization Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Search className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-900 font-semibold">Process Mining</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Workflow className="h-5 w-5 text-amber-600" />
                    <span className="text-sm text-gray-900 font-semibold">Workflow Analysis</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Zap className="h-5 w-5 text-yellow-700" />
                    <span className="text-sm text-gray-900 font-semibold">Performance Tuning</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-600/25 via-amber-600/20 to-yellow-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-amber-600/30 hover:to-yellow-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <GitBranch className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-orange-200 text-sm">Optimized Processes</div>
                </div>
                <div className="bg-gradient-to-br from-amber-600/25 via-yellow-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-amber-600/35 hover:via-yellow-600/30 hover:to-orange-600/25 transition-all duration-300 border border-amber-400/20 shadow-xl hover:shadow-amber-500/20">
                  <Gauge className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-amber-200 text-sm">Efficiency Gain</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/25 via-orange-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-yellow-600/35 hover:via-orange-600/30 hover:to-red-600/25 transition-all duration-300 border border-yellow-400/20 shadow-xl hover:shadow-yellow-500/20">
                  <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-yellow-200 text-sm">Cycle Time Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/25 via-red-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-red-600/30 hover:to-pink-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <DollarSign className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">280%</div>
                  <div className="text-orange-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS PROCESS OPTIMIZATION SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                    Process Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What is ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                      Process Optimization?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Process Optimization</strong> leverages advanced process mining and analytics to identify, analyze, and improve business processes through{' '}
                    <span className="text-orange-600 font-semibold">data-driven insights</span>,{' '}
                    <span className="text-amber-600 font-semibold">workflow analysis</span>, and automated optimization that drives measurable business outcomes.
                  </p>
                  <p className="leading-relaxed">
                    Our certified process specialists use{' '}
                    <strong>ServiceNow's Process Mining</strong>,{' '}
                    <strong>performance analytics</strong>, and{' '}
                    <strong>AI-powered insights</strong> to discover bottlenecks, eliminate inefficiencies, and streamline workflows across ITSM, HR, procurement, and custom business processes.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>process discovery</strong> to continuous improvement, we deliver comprehensive optimization services that reduce cycle times, eliminate waste, and enhance process performance for sustained operational excellence and competitive advantage.
                  </p>
                </div>
                
                {/* Key Optimization Areas */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Process Mining & Discovery",
                    "Bottleneck Identification", 
                    "Workflow Analysis",
                    "Performance Analytics",
                    "Automation Opportunities",
                    "Continuous Improvement"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-orange-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Discover Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow process optimization dashboard showcasing process mining and workflow analysis"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">Process Improvements</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPTIMIZATION SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-orange-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                Complete Optimization Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Process Optimization Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow process optimization services designed to identify inefficiencies, eliminate bottlenecks, and drive measurable performance improvements
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Process Mining & Discovery",
                  description: "Advanced process mining to discover actual process flows, identify variations, and uncover hidden inefficiencies using ServiceNow's built-in analytics.",
                  features: ["Automated Process Discovery", "Process Flow Mapping", "Variation Analysis", "Real-time Insights"],
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  icon: Filter,
                  title: "Bottleneck Identification",
                  description: "Systematic identification of process bottlenecks, delays, and constraint points with root cause analysis and improvement recommendations.",
                  features: ["Bottleneck Analysis", "Root Cause Identification", "Impact Assessment", "Priority Ranking"],
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  icon: BarChart3,
                  title: "Performance Analytics",
                  description: "Comprehensive performance measurement, KPI tracking, and analytics to monitor process health and optimization outcomes.",
                  features: ["KPI Dashboards", "Performance Metrics", "Trend Analysis", "Benchmark Comparisons"],
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-red-50"
                },
                {
                  icon: Workflow,
                  title: "Workflow Redesign",
                  description: "Strategic workflow redesign and optimization to eliminate waste, reduce handoffs, and streamline process execution.",
                  features: ["Workflow Analysis", "Process Redesign", "Handoff Optimization", "Automation Integration"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-rose-50"
                },
                {
                  icon: Zap,
                  title: "Automation Opportunities",
                  description: "Identification and implementation of automation opportunities to reduce manual effort and improve process efficiency.",
                  features: ["Automation Assessment", "Robot Process Automation", "AI Integration", "Workflow Automation"],
                  gradient: "from-red-600 to-pink-600",
                  bgGradient: "from-red-50 via-pink-50 to-rose-50"
                },
                {
                  icon: RotateCcw,
                  title: "Continuous Improvement",
                  description: "Ongoing process monitoring, optimization, and improvement programs to sustain performance gains and drive innovation.",
                  features: ["Continuous Monitoring", "Improvement Programs", "Change Management", "Performance Tracking"],
                  gradient: "from-pink-600 to-purple-600",
                  bgGradient: "from-pink-50 via-purple-50 to-violet-50"
                }
              ].map((service, index) => (
                <Card key={index} className={`bg-gradient-to-br ${service.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden backdrop-blur-sm`}>
                  <CardHeader className="pb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-xl`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300/30 shadow-sm">
                          <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Optimization Areas */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Process Areas We Optimize
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Database, name: "ITSM Processes", desc: "Incident, problem, change management", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Users, name: "HR Workflows", desc: "Employee onboarding, case management", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Building, name: "Procurement", desc: "Purchase orders, vendor management", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Briefcase, name: "Custom Processes", desc: "Business-specific workflows", gradient: "from-indigo-50 to-blue-50", iconColor: "text-indigo-600" }
                ].map((area, index) => (
                  <div key={index} className={`text-center p-6 bg-gradient-to-br ${area.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                    <area.icon className={`h-10 w-10 mx-auto mb-3 ${area.iconColor}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{area.name}</h4>
                    <p className="text-sm text-gray-600">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OPTIMIZATION RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Optimization Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Process Optimization
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Results & Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our process optimization delivers measurable results through systematic analysis, intelligent automation, and continuous improvement methodologies
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Efficiency Improvement", desc: "Through process optimization", gradient: "from-orange-600 to-amber-600", bgGradient: "from-orange-50 via-amber-50 to-yellow-50", icon: Gauge },
                { metric: "40%", label: "Cycle Time Reduction", desc: "Faster process completion", gradient: "from-amber-600 to-yellow-600", bgGradient: "from-amber-50 via-yellow-50 to-orange-50", icon: Clock },
                { metric: "60%", label: "Cost Reduction", desc: "Through waste elimination", gradient: "from-yellow-600 to-orange-600", bgGradient: "from-yellow-50 via-orange-50 to-red-50", icon: DollarSign },
                { metric: "280%", label: "Average ROI", desc: "Within 6-12 months", gradient: "from-orange-600 to-red-600", bgGradient: "from-orange-50 via-red-50 to-rose-50", icon: TrendingUp }
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

            {/* Client Testimonial */}
            <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's process optimization transformed our incident management workflow completely. Through process mining, they identified bottlenecks that reduced our resolution time by 45% and eliminated 30% of manual handoffs. The ROI was achieved within 4 months with sustained improvements continuing."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Patricia Williams, Process Manager
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Enterprise Technology Services
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
                { title: "Processes Optimized", value: "400+", desc: "Successful optimization projects", gradient: "from-orange-50 to-amber-50" },
                { title: "Bottlenecks Eliminated", value: "1200+", desc: "Process constraints removed", gradient: "from-amber-50 to-yellow-50" },
                { title: "Client Satisfaction", value: "96%", desc: "Exceeding expectations", gradient: "from-yellow-50 to-orange-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-orange-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Process
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Optimization Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow process optimization experts who deliver data-driven insights, measurable improvements, and sustained operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified Process Specialists",
                  description: "Our team includes ServiceNow certified process optimization specialists, business analysts, and workflow experts with deep expertise in process mining, analysis, and improvement across diverse industries and business functions.",
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  icon: Award,
                  title: "400+ Process Optimizations",
                  description: "Proven track record of successful process optimization projects across ITSM, HR, procurement, and custom workflows with 50% average efficiency gains, 40% cycle time reduction, and 280% average ROI achievement.",
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  icon: Eye,
                  title: "Advanced Process Mining",
                  description: "Expertise in ServiceNow's process mining capabilities, advanced analytics, and AI-powered insights that provide deep visibility into actual process performance, bottlenecks, and optimization opportunities for data-driven improvements.",
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-red-50"
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Business Impact",
                  description: "Focus on quantifiable results with clear ROI tracking, performance metrics, and business value realization. Our optimization projects deliver sustained improvements, competitive advantage, and operational excellence that drives long-term success.",
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
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Differentiators */}
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Data-Driven Insights", desc: "Analytics-based optimization", icon: BarChart3, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "AI-Powered Analysis", desc: "Machine learning insights", icon: Brain, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                { title: "Continuous Monitoring", desc: "Ongoing performance tracking", icon: Activity, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "ROI Guarantee", desc: "Measurable business value", icon: Target, gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" }
              ].map((item, index) => (
                <div key={index} className={`text-center p-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                  <item.icon className={`h-10 w-10 mx-auto mb-4 ${item.iconColor}`} />
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPTIMIZATION PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-orange-50/50 to-amber-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 text-orange-700 mb-6 px-4 py-2 border border-orange-200/50">
                Our Optimization Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Process Optimization
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic approach ensures comprehensive process analysis, strategic optimization, and sustained performance improvement through data-driven insights
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Search,
                  title: "1. Process Discovery",
                  description: "Comprehensive process mining and discovery to understand current state, identify variations, and map actual process flows using advanced analytics and data visualization.",
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  icon: Filter,
                  title: "2. Analysis & Diagnosis",
                  description: "Deep analysis of process performance, bottleneck identification, root cause analysis, and opportunity assessment with prioritized improvement recommendations.",
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  icon: Settings,
                  title: "3. Optimization Design",
                  description: "Strategic optimization design, workflow redesign, automation planning, and solution architecture with clear implementation roadmap and success metrics.",
                  gradient: "from-yellow-600 to-orange-600",
                  bgGradient: "from-yellow-50 via-orange-50 to-red-50"
                },
                {
                  icon: Rocket,
                  title: "4. Implementation & Monitoring",
                  description: "Optimization implementation, performance monitoring, continuous improvement, and value realization tracking with ongoing support and refinement.",
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-rose-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-amber-400" />
                  )}
                  <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Optimization Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical Optimization Project Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "Process Discovery", deliverable: "Process Maps & Analysis", gradient: "from-orange-50 to-amber-50" },
                  { phase: "Weeks 3-4", activity: "Analysis & Diagnosis", deliverable: "Optimization Opportunities", gradient: "from-amber-50 to-yellow-50" },
                  { phase: "Weeks 5-8", activity: "Optimization Design", deliverable: "Implementation Plan", gradient: "from-yellow-50 to-orange-50" },
                  { phase: "Weeks 9-12", activity: "Implementation & Monitoring", deliverable: "Optimized Processes", gradient: "from-orange-50 to-red-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-orange-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-orange-100 to-amber-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Process Optimization
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow process optimization and workflow improvement services
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Process Optimization Services?",
                  answer: "ServiceNow Process Optimization Services include comprehensive process mining, workflow analysis, bottleneck identification, performance improvement, and automation to maximize business process efficiency. We use ServiceNow's built-in process mining capabilities, advanced analytics, and AI-powered insights to discover actual process flows, identify inefficiencies, eliminate waste, and implement data-driven improvements that drive measurable business outcomes.",
                  gradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  question: "How does ServiceNow process mining work?",
                  answer: "ServiceNow process mining analyzes event logs and transaction data from your ServiceNow platform to automatically create visual process maps showing actual process flows, variations, and deviations. The AI-powered analytics identify bottlenecks, delays, rework patterns, and non-conformant activities, providing deep insights into process performance with root cause analysis and actionable recommendations for improvement.",
                  gradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  question: "What ROI can I expect from process optimization?",
                  answer: "Organizations typically achieve 50% efficiency improvement, 40% cycle time reduction, 60% cost savings, and 280% average ROI within 6-12 months through systematic process optimization. Benefits include reduced manual effort, eliminated waste, faster processing times, improved compliance, enhanced user satisfaction, and significant operational cost reductions through automated workflows and streamlined processes.",
                  gradient: "from-yellow-50 via-orange-50 to-red-50"
                },
                {
                  question: "Which processes can be optimized with ServiceNow?",
                  answer: "We optimize all ServiceNow processes including ITSM (incident, problem, change management), HR service delivery (onboarding, case management), procurement (purchase orders, vendor management), customer service management, security operations, and custom business workflows. Our approach works across all ServiceNow modules and can be applied to any process that generates event data within the platform.",
                  gradient: "from-orange-50 via-red-50 to-rose-50"
                },
                {
                  question: "How long does a process optimization project take?",
                  answer: "Process optimization projects typically take 8-16 weeks depending on scope and complexity. Simple process optimization takes 8-12 weeks, while comprehensive multi-process optimization requires 12-16 weeks. Our phased approach includes process discovery (2 weeks), analysis and diagnosis (2 weeks), optimization design (4 weeks), and implementation with monitoring (4-8 weeks) ensuring systematic and sustainable improvements.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "Do you provide ongoing process monitoring and improvement?",
                  answer: "Yes, we provide continuous process monitoring, performance tracking, and ongoing optimization services. Our approach includes real-time process monitoring, KPI dashboards, regular performance reviews, continuous improvement programs, and proactive optimization recommendations. We ensure sustained performance gains through ongoing monitoring, analysis, and refinement to adapt to changing business needs and maintain operational excellence."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-orange-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-amber-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to optimize your business processes?
              </p>
              <Button className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Process Analysis
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-600/10 via-yellow-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Optimize Your Processes?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Process Performance
              </span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
              Join 400+ organizations that have achieved operational excellence through our process optimization expertise. Start your transformation with comprehensive process analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700">
                <Eye className="mr-2 h-5 w-5" />
                Start Process Analysis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Optimization Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-orange-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-amber-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-amber-200 text-xs">processoptimization@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-yellow-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Analysis</p>
                <p className="text-yellow-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
