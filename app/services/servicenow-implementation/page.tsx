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
  Code,
  Settings,
  Monitor,
  Layers,
  GitBranch,
  Package,
  Wrench,
  TestTube,
  CloudDownload,
  Activity,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowImplementationServicesPage() {
  // Enhanced JSON-LD with comprehensive implementation services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Implementation Services - IfBash",
    "alternateName": ["ServiceNow Platform Implementation", "Enterprise ServiceNow Deployment", "ServiceNow System Integration"],
    "description": "Expert ServiceNow implementation services with ITSM, ITOM, HR, CSM deployment. 1000+ successful implementations, certified professionals delivering enterprise solutions globally. 40% faster delivery, 99.9% success rate.",
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
      "ServiceNow Implementation",
      "ITSM Implementation",
      "ITOM Implementation", 
      "HR Service Delivery Implementation",
      "Customer Service Management",
      "Platform Configuration",
      "System Integration Services"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Full Platform Implementation",
        "description": "Complete ServiceNow platform implementation with 40% faster delivery",
        "category": "Implementation Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Module-Specific Implementation",
        "description": "Focused implementation of specific ServiceNow modules",
        "category": "Specialized Implementation",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Migration & Upgrade Services",
        "description": "Legacy system migration and ServiceNow platform upgrades",
        "category": "Migration Services",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "750",
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
      "email": "implementation@ifbash.com",
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
        "name": "What are ServiceNow Implementation Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Implementation Services include complete platform deployment, configuration, customization, integration, and go-live support. This covers ITSM, ITOM, HR, CSM modules with data migration, user training, and ongoing support to ensure successful adoption."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does ServiceNow implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow implementation typically takes 12-24 weeks depending on scope and complexity. Our accelerated methodology delivers 40% faster implementation through proven frameworks, pre-built templates, and certified expertise."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in implementation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation services include platform setup, module configuration, workflow design, integration development, data migration, user training, testing, go-live support, and post-implementation optimization with comprehensive documentation and knowledge transfer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-implementation support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive post-implementation support including 24/7 monitoring, bug fixes, performance optimization, user training, platform updates, and ongoing enhancement services to ensure continued success."
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
        "name": "ServiceNow Implementation Services",
        "item": "https://ifbash.com/servicenow-implementation-services"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Implementation Services | Expert Platform Deployment | IfBash</title>
        <meta
          name="description"
          content="Professional ServiceNow implementation services in Hyderabad & globally. ITSM, ITOM, HR, CSM deployment. 1000+ successful implementations, 40% faster delivery, 99.9% success rate. Certified experts, proven methodologies. Free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow implementation, ServiceNow deployment, ITSM implementation, ITOM implementation, HR ServiceNow implementation, ServiceNow integration, platform configuration, ServiceNow migration, implementation services Hyderabad, ServiceNow consultants"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Implementation Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Implementation Services | Expert Platform Deployment | IfBash" />
        <meta property="og:description" content="Professional ServiceNow implementation services with 1000+ successful deployments. ITSM, ITOM, HR, CSM implementation. 40% faster delivery, certified experts delivering enterprise solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-implementation-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Implementation Services | Expert Platform Deployment | IfBash" />
        <meta name="twitter:description" content="Professional ServiceNow implementation with 1000+ successful deployments. 40% faster delivery by certified experts." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-implementation-services" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ ServiceNow Implementation Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 1000+ Successful Deployments
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 via-purple-600 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ Certified Implementation Team
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Implementation
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                    Services
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Enterprise{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                      Platform Deployment
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed mb-8 max-w-2xl">
                  Deploy ServiceNow with confidence through our proven implementation methodology. Our certified experts deliver{' '}
                  <span className="font-semibold text-blue-300">complete platform deployment</span>, seamless integrations, and comprehensive training that ensures successful go-live and user adoption.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Implementation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Implementation Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Code className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm text-gray-900 font-semibold">Expert Developers</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Platform Configuration</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Activity className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Package className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-cyan-200 text-sm">Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-blue-200 text-sm">Faster Delivery</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Award className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-indigo-200 text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-pink-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-purple-200 text-sm">User Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ARE IMPLEMENTATION SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                    Implementation Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What are ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                      Implementation Services?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Implementation Services</strong> encompass complete platform deployment, configuration, and optimization to deliver{' '}
                    <span className="text-cyan-600 font-semibold">enterprise-grade solutions</span> that transform business operations through{' '}
                    <span className="text-blue-600 font-semibold">proven methodologies</span> and certified expertise.
                  </p>
                  <p className="leading-relaxed">
                    Our certified implementation team delivers end-to-end deployment covering{' '}
                    <strong>ITSM, ITOM, HR Service Delivery</strong>, and{' '}
                    <strong>Customer Service Management</strong> with comprehensive data migration, system integration, and user training to ensure seamless adoption.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>platform setup</strong> to go-live support, we provide complete implementation services including workflow configuration, custom development, testing, and ongoing optimization for sustained business value.
                  </p>
                </div>
                
                {/* Key Implementation Areas */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Platform Configuration",
                    "Module Implementation", 
                    "Data Migration",
                    "System Integration",
                    "Custom Development",
                    "User Training & Support"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-cyan-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Explore Our Implementation Process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow implementation services dashboard showcasing platform configuration and deployment process"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">Platform Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-cyan-50/50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                Complete Implementation Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                End-to-End Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Services Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow implementation services covering all modules and platforms with proven methodologies and certified expertise
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "ITSM Implementation",
                  description: "Complete IT Service Management deployment with incident, problem, change, and asset management configured for optimal service delivery.",
                  features: ["Incident Management", "Problem Management", "Change Management", "Service Catalog"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Monitor,
                  title: "ITOM Implementation", 
                  description: "IT Operations Management setup with discovery, monitoring, and automation capabilities for comprehensive infrastructure management.",
                  features: ["Discovery & Service Mapping", "Event Management", "Orchestration", "Cloud Management"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Users,
                  title: "HR Service Delivery",
                  description: "Human Resources service implementation with employee onboarding, case management, and self-service portal configuration.",
                  features: ["Employee Onboarding", "HR Case Management", "Knowledge Base", "Mobile Access"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: MessageCircle,
                  title: "Customer Service Management",
                  description: "CSM platform deployment with omnichannel support, customer portal, and proactive service capabilities.",
                  features: ["Customer Portal", "Case Management", "Knowledge Management", "SLA Configuration"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Shield,
                  title: "Security Operations",
                  description: "SecOps implementation with threat detection, incident response, and vulnerability management capabilities.",
                  features: ["Threat Intelligence", "Incident Response", "Vulnerability Management", "Security Dashboard"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: GitBranch,
                  title: "Custom Application Development",
                  description: "Bespoke application development and platform customization to meet specific business requirements and workflows.",
                  features: ["Custom Workflows", "Application Development", "UI/UX Design", "API Integration"],
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
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
                          <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Implementation Services */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Specialized Implementation Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: CloudDownload, name: "Data Migration", desc: "Legacy system data migration", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Layers, name: "System Integration", desc: "Third-party integrations", gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                  { icon: TestTube, name: "Testing & QA", desc: "Comprehensive testing services", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Wrench, name: "Platform Optimization", desc: "Performance optimization", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* IMPLEMENTATION RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Implementation Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Results & Outcomes
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our implementation services deliver measurable results through proven methodologies, certified expertise, and comprehensive project management
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "1000+", label: "Successful Implementations", desc: "Across all industries globally", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Package },
                { metric: "40%", label: "Faster Delivery", desc: "Compared to industry average", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Clock },
                { metric: "99.9%", label: "Implementation Success Rate", desc: "On-time, on-budget delivery", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: Award },
                { metric: "95%", label: "User Adoption Rate", desc: "Within first 90 days", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-pink-50", icon: Users }
              ].map((stat, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${stat.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50`}>
                  <div className={`h-16 w-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                  <p className="text-gray-700 font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash delivered our ServiceNow implementation 6 weeks ahead of schedule with zero post-go-live issues. Their systematic approach and expert team configured our entire ITSM platform flawlessly, achieving 98% user adoption within the first month. The project was a complete success."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        David Chen, IT Director
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Technology Corporation
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
                { title: "Enterprise Clients", value: "200+", desc: "Fortune 500 implementations", gradient: "from-cyan-50 to-blue-50" },
                { title: "Average Project Duration", value: "16 weeks", desc: "Faster than industry standard", gradient: "from-blue-50 to-indigo-50" },
                { title: "Post-Implementation Issues", value: "<1%", desc: "Highest quality delivery", gradient: "from-indigo-50 to-purple-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-cyan-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow implementation experts who deliver enterprise-grade solutions with proven methodologies and guaranteed results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Certified Implementation Experts",
                  description: "Our team includes ServiceNow certified implementation specialists, application developers, and system administrators with deep expertise across all ServiceNow modules and enterprise deployment scenarios.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Rocket,
                  title: "Proven Implementation Methodology",
                  description: "Accelerated delivery through our tested implementation framework, pre-built templates, and automated deployment tools that ensure consistent, high-quality results with 40% faster time-to-value.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Shield,
                  title: "Enterprise-Grade Security & Compliance",
                  description: "Robust security implementation with enterprise compliance frameworks including SOC 2, GDPR, HIPAA, and industry-specific regulations ensuring secure, compliant platform deployment.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Activity,
                  title: "24/7 Support & Monitoring",
                  description: "Comprehensive post-implementation support with 24/7 monitoring, proactive maintenance, performance optimization, and immediate incident response to ensure sustained platform success.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
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
                { title: "Fixed-Price Projects", desc: "Transparent, predictable pricing", icon: DollarSign, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Agile Methodology", desc: "Iterative, flexible delivery", icon: GitBranch, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Quality Assurance", desc: "Comprehensive testing protocols", icon: TestTube, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                { title: "Knowledge Transfer", desc: "Complete documentation & training", icon: Target, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* IMPLEMENTATION PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-cyan-50/50 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                Our Implementation Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic implementation approach ensures successful platform deployment with minimal risk, accelerated delivery, and maximum user adoption
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Discovery & Planning",
                  description: "Comprehensive requirements gathering, current state analysis, and detailed project planning with stakeholder alignment and success criteria definition.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Settings,
                  title: "2. Design & Configuration",
                  description: "Platform architecture design, module configuration, workflow development, and custom solution building based on business requirements.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Code,
                  title: "3. Development & Integration",
                  description: "Custom development, third-party integrations, data migration, and API connections with comprehensive testing at every stage.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: TestTube,
                  title: "4. Testing & Validation",
                  description: "Comprehensive testing including unit, integration, user acceptance, and performance testing with issue resolution and optimization.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Rocket,
                  title: "5. Go-Live & Support",
                  description: "Production deployment, user training, hypercare support, and ongoing optimization with performance monitoring and continuous improvement.",
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-400" />
                  )}
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Implementation Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical Implementation Timeline
              </h3>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "Discovery & Planning", deliverable: "Project Charter & Plan", gradient: "from-cyan-50 to-blue-50" },
                  { phase: "Weeks 3-8", activity: "Design & Configuration", deliverable: "Configured Platform", gradient: "from-blue-50 to-indigo-50" },
                  { phase: "Weeks 9-14", activity: "Development & Integration", deliverable: "Integrated Solution", gradient: "from-indigo-50 to-purple-50" },
                  { phase: "Weeks 15-18", activity: "Testing & Validation", deliverable: "Tested System", gradient: "from-purple-50 to-violet-50" },
                  { phase: "Weeks 19-20", activity: "Go-Live & Support", deliverable: "Production System", gradient: "from-violet-50 to-pink-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-cyan-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">{timeline.activity}</div>
                    <div className="text-xs text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-cyan-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Implementation Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow implementation services and platform deployment
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Implementation Services?",
                  answer: "ServiceNow Implementation Services include complete platform deployment, configuration, customization, integration, and go-live support. This covers all ServiceNow modules including ITSM, ITOM, HR Service Delivery, and CSM with comprehensive data migration, workflow configuration, user training, and ongoing support to ensure successful adoption and business value realization.",
                  gradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "How long does ServiceNow implementation typically take?",
                  answer: "ServiceNow implementation duration varies based on scope and complexity, typically ranging from 12-24 weeks. Our accelerated methodology delivers 40% faster implementation through proven frameworks, pre-built templates, automated deployment tools, and certified expertise. Simple ITSM implementations may take 12-16 weeks, while complex multi-module deployments require 18-24 weeks.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "What is included in your implementation services?",
                  answer: "Our comprehensive implementation services include platform setup and configuration, module deployment, workflow design, custom development, third-party integrations, data migration, comprehensive testing, user training, documentation, go-live support, and post-implementation optimization. We also provide project management, change management, and ongoing hypercare support.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "Do you provide post-implementation support and maintenance?",
                  answer: "Yes, we provide comprehensive post-implementation support including 24/7 monitoring, incident response, bug fixes, performance optimization, platform updates, user training, enhancement services, and ongoing consulting. Our support ensures continued platform success, user adoption, and business value optimization with proactive monitoring and continuous improvement.",
                  gradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  question: "What is your implementation success rate?",
                  answer: "We maintain a 99.9% implementation success rate with on-time, on-budget delivery across 1000+ successful deployments. Our proven methodology, certified experts, comprehensive testing, and risk management approach ensure successful platform deployment with 95% average user adoption rates within the first 90 days of go-live.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "Can you migrate data from our existing systems?",
                  answer: "Yes, we provide comprehensive data migration services from legacy systems to ServiceNow including data mapping, transformation, cleansing, and validation. Our migration approach includes assessment, migration strategy development, automated migration tools, data quality assurance, and rollback procedures to ensure seamless transition with zero data loss.",
                  gradient: "from-orange-50 via-yellow-50 to-amber-50"
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-cyan-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-blue-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to start your ServiceNow implementation?
              </p>
              <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Implementation Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Implement?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Implementation Today
              </span>
            </h2>
            
            <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
              Join 1000+ organizations that have successfully deployed ServiceNow with our expert implementation services. Get your project started with a comprehensive assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700">
                <Rocket className="mr-2 h-5 w-5" />
                Start Implementation Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Implementation Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-cyan-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-blue-200 text-xs">implementation@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Call</p>
                <p className="text-indigo-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
