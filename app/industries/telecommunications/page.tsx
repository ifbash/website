import Head from "next/head";
import { Header } from "@/components/header";
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
  Radio,
  Wifi,
  Antenna,
  Router,
  Smartphone,
  Signal,
  Satellite,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowTelecommunicationsPage() {
  // Enhanced JSON-LD with comprehensive telecommunications data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Telecommunications Industry Solutions - IfBash",
    "alternateName": ["ServiceNow Telecom", "TSM Solutions", "Network Operations Management", "Telecom Service Management"],
    "description": "Expert ServiceNow telecommunications solutions with network operations management, customer service automation, field service management, 5G deployment. 350+ telecom implementations, 60% faster service delivery, certified specialists delivering telecom excellence globally.",
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
      "ServiceNow Telecommunications Solutions",
      "Telecom Service Management (TSM)",
      "Network Operations Management",
      "Customer Service Automation",
      "Field Service Management",
      "5G Network Deployment",
      "Telecom Digital Transformation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Telecom Operations Platform",
        "description": "Complete telecom operations management with network monitoring and service automation",
        "category": "Telecom Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Network Service Management",
        "description": "End-to-end network operations with automated incident resolution and performance monitoring",
        "category": "Network Operations",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Customer Experience Platform",
        "description": "Unified telecom customer service with omnichannel support and self-service capabilities",
        "category": "Customer Experience",
        "availability": "https://schema.org/InStock"
      }
    ],
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
      "email": "telecom@ifbash.com",
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
        "name": "What are ServiceNow Telecommunications Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Telecommunications Solutions include network operations management, customer service automation, field service management, order management, inventory management, and digital transformation platforms designed specifically for telecommunications service providers."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow improve telecom operations and customer service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow improves telecom operations through automated incident management, proactive network monitoring, streamlined field service operations, unified customer service platforms, and AI-powered service assurance that reduces downtime and enhances customer experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can telecommunications companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Telecommunications companies typically achieve 60% faster service delivery, 45% reduction in network downtime, 40% improvement in customer satisfaction, and 290% average ROI through ServiceNow telecom solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support 5G and modern network technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive support for 5G networks, IoT services, edge computing, network function virtualization (NFV), and software-defined networking (SDN) with specialized workflows for modern telecom technologies."
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
        "name": "Industries",
        "item": "https://ifbash.com/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Telecommunications",
        "item": "https://ifbash.com/industries/telecommunications"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Telecommunications Solutions | Network Operations & Customer Service | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow telecommunications solutions in Hyderabad & globally. Network operations management, customer service automation, field service management. 350+ telecom implementations, 60% faster service delivery, 45% less downtime. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow telecommunications, telecom service management, TSM, network operations management, telecom customer service, ServiceNow telecom solutions Hyderabad, field service management, 5G network deployment, telecom digital transformation, network monitoring"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Telecommunications Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Telecommunications Solutions | Network Operations Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow telecommunications solutions with 350+ implementations. Network operations management, customer service automation, field service management. Certified specialists delivering telecom excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/telecommunications" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Telecommunications Solutions | Network Operations | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow telecommunications solutions with 350+ implementations. Network operations, customer service automation by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/telecommunications" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Telecom Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 350+ Telecom Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 via-violet-600 to-pink-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 5G Network Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Telecommunications
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Network{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Transform telecom operations with intelligent network management. Our certified specialists deliver{' '}
                  <span className="font-semibold text-indigo-300">AI-powered service automation</span>, proactive network monitoring, and seamless customer experiences that drive operational excellence and 5G innovation.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <Radio className="mr-2 h-5 w-5" />
                    Transform Network Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Telecom Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Signal className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Network Operations</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Customer Service</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Satellite className="h-5 w-5 text-purple-700" />
                    <span className="text-sm text-gray-900 font-semibold">5G Networks</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Antenna className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-blue-200 text-sm">Telecom Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Zap className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-indigo-200 text-sm">Faster Service Delivery</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-pink-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">45%</div>
                  <div className="text-purple-200 text-sm">Less Network Downtime</div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/25 via-pink-600/20 to-rose-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-pink-600/30 hover:to-rose-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <TrendingUp className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">290%</div>
                  <div className="text-violet-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TELECOM CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                    Telecommunications Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Telecom &
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Network Innovation
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Telecommunications companies face complex challenges: network complexity, customer service demands, 5G deployment pressures, and operational efficiency requirements. ServiceNow delivers{' '}
                    <span className="text-blue-600 font-semibold">unified telecom solutions</span> that connect network operations, customer service, field operations, and business processes through intelligent automation and AI-powered insights.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>network service management</strong> to{' '}
                    <strong>customer experience automation</strong>, our telecom-specific platforms streamline operations, enhance service delivery, and accelerate 5G innovation while maintaining service quality and customer satisfaction.
                  </p>
                  <p className="leading-relaxed">
                    We help telecom operators overcome legacy systems, operational silos, and service delivery challenges through{' '}
                    <span className="text-indigo-600 font-semibold">AI-driven automation</span> that drives network excellence and customer loyalty.
                  </p>
                </div>
                
                {/* Telecom Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Network Operations Management",
                    "Customer Service Automation", 
                    "5G Network Deployment",
                    "Service Delivery Efficiency",
                    "Field Service Coordination",
                    "Inventory & Asset Management"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    alt="Modern telecommunications network infrastructure with 5G technology and network operations center"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">350+</div>
                  <div className="text-sm opacity-90">Telecom Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TELECOM SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Telecommunications Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Telecom
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Operations Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to transform telecommunications operations, enhance network performance, and optimize the entire telecom service lifecycle
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Signal,
                  title: "Network Operations Management",
                  description: "Comprehensive network monitoring with AI-powered incident detection, automated remediation, and proactive service assurance for optimal network performance.",
                  features: ["AI-Powered Monitoring", "Automated Remediation", "Service Assurance", "Performance Analytics"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Users,
                  title: "Customer Service Automation",
                  description: "Unified customer service platform with omnichannel support, self-service capabilities, and AI-assisted agent tools for enhanced customer experiences.",
                  features: ["Omnichannel Support", "Self-Service Portal", "AI Agent Assist", "Customer Analytics"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Settings,
                  title: "Field Service Management",
                  description: "Optimized field operations with intelligent scheduling, mobile workforce management, and real-time coordination for efficient service delivery.",
                  features: ["Intelligent Scheduling", "Mobile Workforce", "Real-time Coordination", "Route Optimization"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Satellite,
                  title: "5G Network Deployment",
                  description: "Specialized 5G deployment workflows with network planning, resource allocation, and deployment tracking for accelerated 5G rollout.",
                  features: ["Network Planning", "Resource Allocation", "Deployment Tracking", "Performance Monitoring"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Database,
                  title: "Telecom Network Inventory",
                  description: "Comprehensive network inventory management with asset tracking, capacity planning, and resource optimization for network infrastructure.",
                  features: ["Asset Tracking", "Capacity Planning", "Resource Optimization", "Inventory Analytics"],
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  icon: Router,
                  title: "Order Management Telecom",
                  description: "End-to-end order management with service provisioning, activation workflows, and billing integration for seamless service delivery.",
                  features: ["Service Provisioning", "Activation Workflows", "Billing Integration", "Order Tracking"],
                  gradient: "from-rose-600 to-red-600",
                  bgGradient: "from-rose-50 via-red-50 to-orange-50"
                }
              ].map((solution, index) => (
                <Card key={index} className={`bg-gradient-to-br ${solution.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden backdrop-blur-sm`}>
                  <CardHeader className="pb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 shadow-xl`}>
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
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
            
            {/* Additional Telecom Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced Telecom Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Wifi, name: "IoT Service Management", desc: "Connected device operations", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Brain, name: "AI Network Optimization", desc: "Predictive network analytics", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Shield, name: "Network Security", desc: "Telecom security operations", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: BarChart3, name: "Service Analytics", desc: "Performance insights & KPIs", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
                ].map((capability, index) => (
                  <div key={index} className={`text-center p-6 bg-gradient-to-br ${capability.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                    <capability.icon className={`h-10 w-10 mx-auto mb-3 ${capability.iconColor}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{capability.name}</h4>
                    <p className="text-sm text-gray-600">{capability.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TELECOM RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Telecommunications Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Telecom &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Network Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our telecommunications solutions deliver measurable results through network optimization, service automation, and enhanced customer experiences
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "60%", label: "Faster Service Delivery", desc: "Through automation", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Zap },
                { metric: "45%", label: "Less Network Downtime", desc: "Proactive monitoring", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: Signal },
                { metric: "40%", label: "Customer Satisfaction", desc: "Enhanced service quality", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-pink-50", icon: Users },
                { metric: "290%", label: "Average ROI", desc: "Within 10-12 months", gradient: "from-violet-600 to-pink-600", bgGradient: "from-violet-50 via-pink-50 to-rose-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow revolutionized our entire telecom operations. We achieved 60% faster service delivery through automation, reduced network downtime by 45% with proactive monitoring, and improved customer satisfaction by 40%. The AI-powered network management has transformed how we deliver services and manage our 5G infrastructure."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Robert Kumar, VP Network Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Telecommunications Provider
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
                { title: "Telecom Operators", value: "120+", desc: "Service providers served", gradient: "from-blue-50 to-indigo-50" },
                { title: "Network Nodes", value: "50K+", desc: "Under management", gradient: "from-indigo-50 to-purple-50" },
                { title: "Service Requests", value: "2M+", desc: "Monthly automated requests", gradient: "from-purple-50 to-violet-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Telecom
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified telecommunications ServiceNow specialists who understand network operations and deliver solutions that drive service excellence and customer satisfaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Telecommunications Industry Expertise",
                  description: "Deep telecom and network operations expertise with certified ServiceNow specialists who understand network management, service delivery, customer operations, and 5G deployment across telecom operators, service providers, and network equipment manufacturers.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Signal,
                  title: "350+ Telecom Implementations",
                  description: "Proven track record with 350+ telecommunications implementations across network operators, service providers, and equipment manufacturers with 60% faster service delivery, 45% network downtime reduction, and 290% average ROI achievement through comprehensive telecom solutions.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Satellite,
                  title: "5G & Modern Network Excellence",
                  description: "Leading expertise in 5G network deployment, IoT service management, edge computing, network function virtualization (NFV), and software-defined networking (SDN) with specialized workflows that enable next-generation telecom services and network innovation.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: TrendingUp,
                  title: "Network-Centric Innovation",
                  description: "Comprehensive network operations focus from proactive monitoring to predictive maintenance, service assurance, and customer experience optimization that drives network reliability, service quality, and operational efficiency across all telecom touchpoints and services.",
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
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
                { title: "5G Specialists", desc: "Next-gen network deployment", icon: Satellite, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                { title: "Network Excellence", desc: "Proactive operations", icon: Signal, gradient: "from-blue-50 to-indigo-50", iconColor: "text-blue-600" },
                { title: "Customer Focus", desc: "Service experience optimization", icon: Users, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Proven ROI", desc: "290% average return", icon: DollarSign, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Telecom ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for the telecommunications industry
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Telecommunications Solutions?",
                  answer: "ServiceNow Telecommunications Solutions include network operations management, customer service automation, field service management, order management, inventory management, and digital transformation platforms designed specifically for telecommunications service providers. These solutions address unique telecom challenges including network complexity, customer service demands, 5G deployment, and operational efficiency through integrated platforms that connect network operations, customer service, field operations, and business processes.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "How does ServiceNow improve telecom operations and customer service?",
                  answer: "ServiceNow improves telecom operations through automated incident management, proactive network monitoring with AI-powered analytics, streamlined field service operations with intelligent scheduling, unified customer service platforms with omnichannel support, and AI-powered service assurance that reduces network downtime, accelerates service delivery, and enhances customer experiences across all touchpoints.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "What ROI can telecommunications companies expect from ServiceNow?",
                  answer: "Telecommunications companies typically achieve 60% faster service delivery, 45% reduction in network downtime, 40% improvement in customer satisfaction, 35% increase in field service efficiency, and 290% average ROI within 10-12 months. Benefits include reduced operational costs, improved network reliability, enhanced customer experiences, faster 5G deployment, and increased revenue through better service quality and operational efficiency.",
                  gradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  question: "Does ServiceNow support 5G and modern network technologies?",
                  answer: "Yes, ServiceNow provides comprehensive support for 5G networks, IoT services, edge computing, network function virtualization (NFV), software-defined networking (SDN), and network slicing with specialized workflows, automated provisioning, and intelligent management capabilities designed for next-generation telecom technologies and services that enable digital transformation and new revenue opportunities.",
                  gradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  question: "How does ServiceNow integrate with existing telecom systems and OSS/BSS platforms?",
                  answer: "ServiceNow seamlessly integrates with existing telecom ecosystems including Operations Support Systems (OSS), Business Support Systems (BSS), network management systems, billing platforms, CRM systems, and network equipment through native connectors, TMF Open APIs, real-time data synchronization, and standardized interfaces that enable unified workflows and comprehensive visibility across the entire telecom technology infrastructure.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What training and support do you provide for telecom teams?",
                  answer: "We provide comprehensive telecommunications-specific training including network operations workshops, customer service team certification, field service management training, TSM (Telecom Service Management) modules, and technical integration support. Our approach includes hands-on training for network engineers, customer service representatives, field technicians, and IT administrators with ongoing support to ensure successful adoption and sustained value realization across telecom operations."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-blue-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-indigo-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to transform your telecom operations?
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Telecom Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Network Excellence?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Telecom
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Operations Today
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 350+ telecommunications companies driving network innovation with ServiceNow. From 5G deployment to customer experience excellence, accelerate your telecom transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
                <Radio className="mr-2 h-5 w-5" />
                Start Telecom Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Telecom Guide
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
                <p className="text-indigo-200 text-xs">telecom@ifbash.com</p>
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
