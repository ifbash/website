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
  HeadphonesIcon,
  Monitor,
  Server,
  CloudCog,
  Wrench,
  RotateCcw,
  AlertTriangle,
  Handshake,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowManagedServicesPage() {
  // Enhanced JSON-LD with comprehensive managed services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Managed Services & Support - IfBash",
    "alternateName": ["ServiceNow Support Services", "Platform Management", "ServiceNow Maintenance", "24/7 ServiceNow Support"],
    "description": "Expert ServiceNow managed services with 24/7 support, platform management, proactive monitoring, performance optimization. 800+ managed instances, 99.9% uptime, certified support team delivering enterprise solutions globally.",
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
      "ServiceNow Managed Services",
      "24/7 Platform Support",
      "Proactive Monitoring",
      "Performance Optimization",
      "Health Check Services",
      "Platform Administration",
      "Emergency Response Support"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "24/7 Managed Services",
        "description": "Round-the-clock ServiceNow platform management and support",
        "category": "Managed Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Proactive Monitoring",
        "description": "Continuous platform monitoring with predictive issue resolution",
        "category": "Support Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Performance Optimization",
        "description": "Platform performance tuning and optimization services",
        "category": "Optimization Services",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
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
      "email": "support@ifbash.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are ServiceNow Managed Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Managed Services include 24/7 platform management, proactive monitoring, performance optimization, health checks, administration, and ongoing support to ensure optimal ServiceNow platform performance and availability."
        }
      },
      {
        "@type": "Question", 
        "name": "What is included in 24/7 support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24/7 support includes round-the-clock monitoring, incident response, emergency support, performance monitoring, proactive issue resolution, platform administration, and escalation management with guaranteed response times."
        }
      },
      {
        "@type": "Question",
        "name": "What are your SLA commitments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee 99.9% platform uptime, 15-minute critical issue response time, 2-hour P1 incident resolution, and 4-hour P2 incident resolution with comprehensive SLA reporting and continuous monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide proactive maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide proactive maintenance including regular health checks, performance optimization, security updates, platform monitoring, capacity planning, and preventive maintenance to avoid issues before they occur."
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
        "name": "ServiceNow Managed Services",
        "item": "https://ifbash.com/servicenow-managed-services"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Managed Services & Support | 24/7 Platform Management | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow managed services in Hyderabad & globally. 24/7 support, proactive monitoring, performance optimization. 800+ managed instances, 99.9% uptime, 15-min response time. Certified support team delivering enterprise solutions."
        />
        <meta 
          name="keywords" 
          content="ServiceNow managed services, 24/7 ServiceNow support, platform management, proactive monitoring, ServiceNow maintenance Hyderabad, performance optimization, health check services, ServiceNow administration, emergency support, managed support services"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Managed Services Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Managed Services & Support | 24/7 Platform Management | IfBash" />
        <meta property="og:description" content="Leading ServiceNow managed services with 800+ managed instances. 24/7 support, proactive monitoring, 99.9% uptime. Certified support team delivering enterprise solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-managed-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Managed Services & Support | 24/7 Platform Management | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow managed services with 800+ managed instances. 24/7 support, proactive monitoring by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-managed-services" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-green-900 via-teal-900 to-blue-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                ✓ 24/7 Support Specialists
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 800+ Managed Instances
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 99.9% Uptime Guarantee
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Managed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 font-semibold">
                    Services & Support
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    24/7 Platform{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8 max-w-2xl">
                  Maximize your ServiceNow investment with comprehensive managed services. Our certified support team delivers{' '}
                  <span className="font-semibold text-teal-300">24/7 monitoring</span>, proactive maintenance, and performance optimization that ensures platform excellence and business continuity.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:via-teal-700 hover:to-blue-700"
                  >
                    <HeadphonesIcon className="mr-2 h-5 w-5" />
                    Get 24/7 Support
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Support Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Monitor className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-900 font-semibold">Proactive Monitoring</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Server className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Platform Management</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Zap className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Performance Optimization</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-600/25 via-teal-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-green-600/35 hover:via-teal-600/30 hover:to-blue-600/25 transition-all duration-300 border border-green-400/20 shadow-xl hover:shadow-green-500/20">
                  <Server className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">800+</div>
                  <div className="text-green-200 text-sm">Managed Instances</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Activity className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-teal-200 text-sm">Platform Uptime</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">15 min</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-indigo-200 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ARE MANAGED SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                    Managed Services Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What are ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                      Managed Services?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Managed Services</strong> provide comprehensive platform management, ongoing support, and optimization to ensure your ServiceNow investment delivers{' '}
                    <span className="text-green-600 font-semibold">maximum business value</span> through{' '}
                    <span className="text-teal-600 font-semibold">proactive monitoring</span>, expert administration, and continuous improvement.
                  </p>
                  <p className="leading-relaxed">
                    Our certified support team delivers{' '}
                    <strong>24/7 platform monitoring</strong>,{' '}
                    <strong>performance optimization</strong>,{' '}
                    <strong>health checks</strong>, and emergency response services that keep your ServiceNow environment running at peak performance with guaranteed SLAs.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>proactive maintenance</strong> to incident resolution, we provide end-to-end managed services that reduce operational overhead, minimize downtime, and ensure optimal platform performance for sustained business operations.
                  </p>
                </div>
                
                {/* Key Service Areas */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "24/7 Platform Monitoring",
                    "Proactive Maintenance", 
                    "Performance Optimization",
                    "Health Check Services",
                    "Emergency Response",
                    "Platform Administration"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-green-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:via-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow managed services dashboard showcasing 24/7 monitoring and platform management"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">800+</div>
                  <div className="text-sm opacity-90">Managed Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANAGED SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-green-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Comprehensive Support Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Managed Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                End-to-end ServiceNow managed services designed to ensure optimal platform performance, reliability, and continuous value delivery
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Monitor,
                  title: "24/7 Platform Monitoring",
                  description: "Continuous monitoring with real-time alerts, performance tracking, and proactive issue detection to ensure optimal platform health.",
                  features: ["Real-time Monitoring", "Performance Tracking", "Proactive Alerts", "Health Dashboards"],
                  gradient: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 via-teal-50 to-blue-50"
                },
                {
                  icon: Wrench,
                  title: "Proactive Maintenance",
                  description: "Scheduled maintenance, updates, patches, and preventive measures to avoid issues and maintain platform stability.",
                  features: ["Scheduled Maintenance", "Security Updates", "Patch Management", "Preventive Measures"],
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  description: "Platform performance tuning, resource optimization, and capacity planning for enhanced system efficiency.",
                  features: ["Performance Tuning", "Resource Optimization", "Capacity Planning", "Efficiency Enhancement"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Shield,
                  title: "Health Check Services",
                  description: "Regular platform health assessments, security audits, and optimization recommendations for sustained performance.",
                  features: ["Health Assessments", "Security Audits", "Optimization Reports", "Best Practices Review"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: AlertTriangle,
                  title: "Emergency Response",
                  description: "Rapid incident response, emergency support, and critical issue resolution with guaranteed response times.",
                  features: ["Rapid Response", "Emergency Support", "Critical Issue Resolution", "Escalation Management"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Settings,
                  title: "Platform Administration",
                  description: "Complete platform administration, user management, configuration, and system optimization services.",
                  features: ["User Management", "System Configuration", "Administration Tasks", "Platform Optimization"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
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
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Support Services */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Extended Support Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: CloudCog, name: "Cloud Management", desc: "Multi-cloud platform support", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: RotateCcw, name: "Backup & Recovery", desc: "Data protection services", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: BookOpen, name: "Training & Enablement", desc: "User training programs", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: BarChart3, name: "Analytics & Reporting", desc: "Performance insights", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
                ].map((service, index) => (
                  <div key={index} className={`text-center p-6 bg-gradient-to-br ${service.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                    <service.icon className={`h-10 w-10 mx-auto mb-3 ${service.iconColor}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SLA & PERFORMANCE SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                SLA & Performance Guarantees
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Service Level
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  Commitments
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our managed services deliver guaranteed performance with comprehensive SLAs, proactive monitoring, and continuous optimization
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "99.9%", label: "Platform Uptime", desc: "Guaranteed availability", gradient: "from-green-600 to-teal-600", bgGradient: "from-green-50 via-teal-50 to-blue-50", icon: Activity },
                { metric: "15 min", label: "Critical Response", desc: "Emergency incident response", gradient: "from-teal-600 to-blue-600", bgGradient: "from-teal-50 via-blue-50 to-indigo-50", icon: Clock },
                { metric: "2 hours", label: "P1 Resolution", desc: "Critical issue resolution", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Zap },
                { metric: "98%", label: "Client Satisfaction", desc: "Customer satisfaction rate", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: Star }
              ].map((sla, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${sla.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50`}>
                  <div className={`h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${sla.gradient} flex items-center justify-center shadow-lg`}>
                    <sla.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{sla.metric}</div>
                  <p className="text-gray-700 font-semibold mb-2">{sla.label}</p>
                  <p className="text-sm text-gray-600">{sla.desc}</p>
                </div>
              ))}
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-br from-white via-green-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-green-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's managed services have been exceptional. Their 24/7 monitoring prevented 3 major outages last quarter, and their proactive maintenance reduced our incident volume by 70%. The team's expertise and responsiveness are outstanding - they truly act as an extension of our IT team."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Marcus Thompson, IT Operations Manager
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Healthcare Organization
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
                { title: "Managed Instances", value: "800+", desc: "Active platform monitoring", gradient: "from-green-50 to-teal-50" },
                { title: "Incident Prevention", value: "85%", desc: "Proactive issue resolution", gradient: "from-teal-50 to-blue-50" },
                { title: "Average Response Time", value: "12 min", desc: "Faster than SLA commitment", gradient: "from-blue-50 to-indigo-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-green-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Managed Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow managed services experts who deliver 24/7 support, proactive monitoring, and guaranteed SLAs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified Support Specialists",
                  description: "Our team includes ServiceNow certified administrators, developers, and support specialists with deep expertise in platform management, incident resolution, and performance optimization across all ServiceNow modules and enterprise environments.",
                  gradient: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 via-teal-50 to-blue-50"
                },
                {
                  icon: Award,
                  title: "800+ Managed Instances",
                  description: "Proven track record of managing 800+ ServiceNow instances across diverse industries with 99.9% uptime guarantee, 15-minute response times, and 98% client satisfaction through comprehensive managed services and proactive support.",
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Shield,
                  title: "Enterprise-Grade Security",
                  description: "Robust security protocols, data protection, compliance frameworks, and monitoring systems that ensure platform security, regulatory compliance, and business continuity with enterprise-grade security standards and best practices.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: TrendingUp,
                  title: "Proactive Service Excellence",
                  description: "Proactive monitoring, predictive analytics, and preventive maintenance that identifies and resolves issues before they impact business operations, ensuring optimal platform performance and minimal downtime through continuous optimization.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
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
                { title: "24/7 Availability", desc: "Round-the-clock support", icon: Clock, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Predictive Analytics", desc: "AI-powered monitoring", icon: Brain, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Global Coverage", desc: "Multi-timezone support", icon: Globe, gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                { title: "SLA Guarantee", desc: "Performance commitments", icon: Handshake, gradient: "from-purple-50 to-pink-50", iconColor: "text-purple-600" }
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

        {/* SUPPORT TIERS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-green-50/50 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-green-700 mb-6 px-4 py-2 border border-green-200/50">
                Our Service Tiers
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Flexible Support
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  Service Levels
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Choose the right level of support for your business needs with our flexible managed services tiers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tier: "Essential Support",
                  description: "Perfect for growing businesses",
                  features: [
                    "8x5 Monitoring",
                    "Standard Response Times",
                    "Monthly Health Checks",
                    "Basic Administration",
                    "Email Support"
                  ],
                  gradient: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 via-teal-50 to-blue-50",
                  popular: false
                },
                {
                  tier: "Professional Support",
                  description: "Ideal for enterprise operations",
                  features: [
                    "24/7 Monitoring",
                    "Priority Response Times",
                    "Weekly Health Checks",
                    "Advanced Administration",
                    "Phone & Email Support",
                    "Performance Optimization"
                  ],
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-indigo-50",
                  popular: true
                },
                {
                  tier: "Enterprise Support",
                  description: "For mission-critical systems",
                  features: [
                    "24/7 Premium Monitoring",
                    "15-min Response Time",
                    "Continuous Health Monitoring",
                    "Dedicated Support Team",
                    "All Channel Support",
                    "Proactive Optimization",
                    "Strategic Advisory"
                  ],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
                  popular: false
                }
              ].map((tier, index) => (
                <Card key={index} className={`bg-gradient-to-br ${tier.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 overflow-hidden backdrop-blur-sm relative ${tier.popular ? 'ring-2 ring-teal-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4 pt-8">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-4 shadow-xl mx-auto`}>
                      <HeadphonesIcon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 text-center">{tier.tier}</CardTitle>
                    <p className="text-gray-600 text-center">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300/30 shadow-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button className={`w-full bg-gradient-to-r ${tier.gradient} hover:from-green-700 hover:via-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300`}>
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-green-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Managed Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow managed services and support offerings
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Managed Services?",
                  answer: "ServiceNow Managed Services include comprehensive platform management, 24/7 monitoring, proactive maintenance, performance optimization, health checks, administration, and ongoing support to ensure optimal ServiceNow platform performance and availability. Our services cover platform monitoring, incident response, preventive maintenance, security management, and continuous optimization to maximize your ServiceNow investment value.",
                  gradient: "from-green-50 via-teal-50 to-blue-50"
                },
                {
                  question: "What is included in your 24/7 support services?",
                  answer: "Our 24/7 support includes round-the-clock platform monitoring, real-time alerting, incident response, emergency support, performance monitoring, proactive issue resolution, platform administration, escalation management, and guaranteed response times. We provide multi-channel support including phone, email, and chat with dedicated support specialists available around the clock to ensure business continuity.",
                  gradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "What are your SLA commitments and response times?",
                  answer: "We guarantee 99.9% platform uptime, 15-minute critical issue response time, 2-hour P1 incident resolution, 4-hour P2 incident resolution, and 8-hour P3 incident resolution. Our SLAs include comprehensive reporting, performance monitoring, availability tracking, and continuous improvement with escalation procedures for SLA breaches to ensure accountability and service excellence.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "Do you provide proactive maintenance and monitoring?",
                  answer: "Yes, we provide comprehensive proactive maintenance including regular health checks, performance monitoring, security updates, patch management, capacity planning, preventive maintenance, optimization recommendations, and predictive analytics to identify and resolve issues before they impact business operations. Our proactive approach reduces incident volume by up to 85% through early detection and prevention.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "How do you handle security and compliance requirements?",
                  answer: "We implement enterprise-grade security protocols including data encryption, access controls, security monitoring, compliance frameworks (GDPR, HIPAA, SOX), regular security audits, vulnerability assessments, and incident response procedures. Our security measures ensure platform protection, regulatory compliance, and business continuity with comprehensive security reporting and continuous monitoring.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What support tiers do you offer and how do I choose?",
                  answer: "We offer three support tiers: Essential (8x5 monitoring, standard response), Professional (24/7 monitoring, priority response), and Enterprise (24/7 premium monitoring, 15-min response, dedicated team). Choice depends on your business criticality, availability requirements, response time needs, and budget. We provide consultation to help select the optimal tier for your organization's specific requirements."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-green-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-teal-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Need more information about our managed services?
              </p>
              <Button className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:via-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support Team
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-green-900 via-teal-900 to-blue-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-green-500/20 via-teal-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for 24/7 Support?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Premium ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
                Managed Services
              </span>
            </h2>
            
            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Join 800+ organizations that trust our managed services for their ServiceNow platform. Get 24/7 monitoring, proactive support, and guaranteed SLAs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:via-teal-700 hover:to-blue-700">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Start Managed Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Service Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-green-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-white text-sm">Emergency Line</p>
                <p className="text-green-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Support Email</p>
                <p className="text-teal-200 text-xs">support@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">24/7 Availability</p>
                <p className="text-blue-200 text-xs">Always Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
