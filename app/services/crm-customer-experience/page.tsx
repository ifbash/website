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
  ShoppingCart,
  Handshake,
  HeadphonesIcon,
  PieChart,
  BarChart,
  LineChart,
  Contact,
  Building,
  Briefcase,
  Smartphone,
  Monitor,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowCRMServicesPage() {
  // Enhanced JSON-LD with comprehensive CRM services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow CRM Services - IfBash",
    "alternateName": ["ServiceNow Customer Relationship Management", "ServiceNow CSM Implementation", "CRM Integration Services", "Sales Automation ServiceNow"],
    "description": "Expert ServiceNow CRM services with customer service management, sales automation, contact center integration. 400+ CRM implementations, AI-powered customer engagement, unified platform. Certified CRM specialists delivering enterprise solutions globally.",
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
      "ServiceNow CRM Implementation",
      "Customer Service Management",
      "Sales Automation",
      "Contact Center Integration",
      "Customer Portal Development",
      "CRM Analytics & Reporting",
      "AI-Powered Customer Engagement"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow CRM Implementation",
        "description": "Complete CRM platform deployment with sales, service, and customer engagement capabilities",
        "category": "CRM Implementation",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Customer Service Management",
        "description": "CSM module implementation with omnichannel support and AI-powered automation",
        "category": "Customer Service",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Sales Automation & CPQ",
        "description": "Sales process automation with configure-price-quote and opportunity management",
        "category": "Sales Automation",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "300",
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
      "email": "crm@ifbash.com",
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
        "name": "What are ServiceNow CRM Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CRM Services include customer service management, sales automation, contact center integration, customer portal development, and AI-powered customer engagement solutions built on the unified Now Platform for seamless customer lifecycle management."
        }
      },
      {
        "@type": "Question", 
        "name": "How is ServiceNow CRM different from traditional CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CRM is built on a unified platform that integrates sales, service, and operations with AI-powered automation, real-time orchestration, and deep integration with existing business systems, unlike traditional CRMs that operate in silos."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from ServiceNow CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically see 45% faster case resolution, 60% improvement in customer satisfaction, 35% increase in sales productivity, and 300% average ROI within 12 months through unified customer operations and AI-powered automation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide CRM integration services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive CRM integration services including ERP integration, contact center systems, marketing automation platforms, e-commerce systems, and third-party applications with real-time data synchronization."
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
        "name": "ServiceNow CRM Services",
        "item": "https://ifbash.com/servicenow-crm-services"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow CRM Services | Customer Service Management & Sales Automation | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow CRM services in Hyderabad & globally. Customer service management, sales automation, contact center integration. 400+ CRM implementations, 45% faster resolution, 60% customer satisfaction improvement. Certified CRM specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow CRM, customer service management, ServiceNow CSM, sales automation, contact center integration, CRM implementation Hyderabad, customer portal, ServiceNow CRM consulting, unified customer platform, AI-powered CRM"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow CRM Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow CRM Services | Customer Engagement Experts | IfBash" />
        <meta property="og:description" content="Leading ServiceNow CRM services with 400+ implementations. Customer service management, sales automation, AI-powered engagement. 45% faster resolution, certified CRM specialists delivering unified customer solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-crm-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow CRM Services | Customer Engagement Solutions | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow CRM services with 400+ implementations. Customer service management, sales automation, unified customer platform by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-crm-services" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-teal-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ ServiceNow CRM Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 400+ CRM Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ Customer Engagement Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow CRM
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                    Services
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Unified Customer{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                      Engagement
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                  Transform customer relationships with ServiceNow's unified CRM platform. Our certified specialists deliver{' '}
                  <span className="font-semibold text-teal-300">AI-powered customer service</span>, sales automation, and omnichannel engagement that drives exceptional customer experiences.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700"
                  >
                    <Handshake className="mr-2 h-5 w-5" />
                    Start CRM Implementation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View CRM Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <HeadphonesIcon className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-gray-900 font-semibold">Customer Service</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <ShoppingCart className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Sales Automation</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <BarChart3 className="h-5 w-5 text-cyan-700" />
                    <span className="text-sm text-gray-900 font-semibold">Analytics & Insights</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-600/25 via-teal-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-teal-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <Contact className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-emerald-200 text-sm">CRM Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-cyan-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-cyan-600/30 hover:to-blue-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Zap className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">45%</div>
                  <div className="text-teal-200 text-sm">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Star className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-cyan-200 text-sm">Customer Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-blue-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SERVICENOW CRM SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                    Customer Engagement Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What is ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                      CRM Platform?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow CRM</strong> is a next-generation customer relationship management platform built on the unified Now Platform that delivers{' '}
                    <span className="text-emerald-600 font-semibold">end-to-end customer lifecycle management</span> through{' '}
                    <span className="text-teal-600 font-semibold">AI-powered automation</span> and seamless integration across sales, service, and operations.
                  </p>
                  <p className="leading-relaxed">
                    Unlike traditional CRMs, ServiceNow integrates{' '}
                    <strong>Customer Service Management (CSM)</strong>,{' '}
                    <strong>sales automation</strong>,{' '}
                    <strong>contact center operations</strong>, and customer portals into a single, intelligent platform that orchestrates workflows across departments for unified customer experiences.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>omnichannel customer support</strong> to intelligent case routing, our CRM solutions deliver personalized engagement, predictive insights, and autonomous service delivery that transforms how organizations connect with their customers.
                  </p>
                </div>
                
                {/* Key CRM Capabilities */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Customer Service Management",
                    "Sales Process Automation", 
                    "Contact Center Integration",
                    "Customer Portal Development",
                    "Omnichannel Support",
                    "AI-Powered Insights"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    Explore CRM Capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow CRM dashboard showcasing customer service management and unified customer engagement platform"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">CRM Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Complete CRM Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive CRM Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                End-to-end ServiceNow CRM implementation and optimization services designed to transform customer engagement and drive business growth
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: HeadphonesIcon,
                  title: "Customer Service Management",
                  description: "Complete CSM implementation with omnichannel support, case management, knowledge base, and AI-powered service delivery.",
                  features: ["Omnichannel Support", "Intelligent Case Routing", "Knowledge Management", "Self-Service Portal"],
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  icon: ShoppingCart,
                  title: "Sales Process Automation",
                  description: "End-to-end sales automation with opportunity management, CPQ, proposal generation, and pipeline analytics.",
                  features: ["Opportunity Management", "Configure-Price-Quote", "Proposal Automation", "Sales Analytics"],
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  icon: Contact,
                  title: "Contact Center Integration",
                  description: "Unified contact center platform with voice, chat, email integration and AI-powered agent assistance.",
                  features: ["Multi-Channel Integration", "AI Agent Assistance", "Real-time Analytics", "Quality Management"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Monitor,
                  title: "Customer Portal Development",
                  description: "Self-service customer portals with personalized experiences, case tracking, and knowledge access.",
                  features: ["Self-Service Portal", "Case Tracking", "Knowledge Access", "Mobile Responsive"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: BarChart3,
                  title: "CRM Analytics & Reporting",
                  description: "Advanced analytics and reporting with customer insights, performance metrics, and predictive analytics.",
                  features: ["Customer Analytics", "Performance Dashboards", "Predictive Insights", "Custom Reports"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Workflow,
                  title: "CRM Integration Services",
                  description: "Seamless integration with ERP, marketing automation, e-commerce, and third-party systems.",
                  features: ["ERP Integration", "Marketing Automation", "E-commerce Connect", "API Management"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
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
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional CRM Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Extended CRM Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Smartphone, name: "Mobile CRM", desc: "Mobile-first customer engagement", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Brain, name: "AI-Powered Insights", desc: "Intelligent customer analytics", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Building, name: "Field Service", desc: "On-site customer service", gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                  { icon: Briefcase, name: "B2B Commerce", desc: "Business-to-business sales", gradient: "from-purple-50 to-pink-50", iconColor: "text-purple-600" }
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

        {/* CRM RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                CRM Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven CRM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Results & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our CRM implementations deliver measurable business results through improved customer satisfaction, sales productivity, and operational efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "45%", label: "Faster Case Resolution", desc: "Through intelligent automation", gradient: "from-emerald-600 to-teal-600", bgGradient: "from-emerald-50 via-teal-50 to-cyan-50", icon: Zap },
                { metric: "60%", label: "Customer Satisfaction", desc: "Improved service delivery", gradient: "from-teal-600 to-cyan-600", bgGradient: "from-teal-50 via-cyan-50 to-blue-50", icon: Star },
                { metric: "35%", label: "Sales Productivity", desc: "Enhanced sales processes", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: TrendingUp },
                { metric: "300%", label: "Average ROI", desc: "Within 12 months", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: DollarSign }
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
            <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's ServiceNow CRM implementation transformed our customer operations completely. Case resolution time improved by 45%, customer satisfaction increased to 92%, and our sales team productivity rose by 35%. The unified platform eliminated data silos and delivered exceptional ROI within 8 months."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Robert Martinez, VP Customer Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Retail Corporation
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
                { title: "Customer Implementations", value: "400+", desc: "Successful CRM deployments", gradient: "from-emerald-50 to-teal-50" },
                { title: "Average Implementation Time", value: "14 weeks", desc: "Faster than industry average", gradient: "from-teal-50 to-cyan-50" },
                { title: "Customer Retention Rate", value: "94%", desc: "Long-term client satisfaction", gradient: "from-cyan-50 to-blue-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted CRM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Implementation Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow CRM experts who deliver unified customer engagement solutions with proven results and measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified CRM Specialists",
                  description: "Our team includes ServiceNow certified customer service management professionals with deep expertise in CRM implementation, sales automation, and customer engagement across diverse industries and business models.",
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  icon: Award,
                  title: "400+ CRM Implementations",
                  description: "Proven track record of successful CRM deployments including customer service management, sales automation, contact center integration, and customer portal development with 94% client satisfaction rate.",
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  icon: Shield,
                  title: "Industry-Specific Solutions",
                  description: "Deep domain expertise across retail, healthcare, financial services, manufacturing, and technology sectors with proven CRM frameworks tailored to industry-specific customer engagement requirements.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: TrendingUp,
                  title: "Unified Customer Platform",
                  description: "End-to-end customer lifecycle management on a single platform integrating sales, service, marketing, and operations with AI-powered automation and real-time customer insights for superior engagement.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
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
                { title: "Omnichannel Support", desc: "Unified customer engagement", icon: HeadphonesIcon, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "AI-Powered Automation", desc: "Intelligent case routing", icon: Brain, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Real-time Analytics", desc: "Customer insights dashboard", icon: BarChart3, gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                { title: "Mobile-First Design", desc: "Responsive customer portals", icon: Smartphone, gradient: "from-purple-50 to-pink-50", iconColor: "text-purple-600" }
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

        {/* CRM IMPLEMENTATION PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-emerald-50/50 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Our CRM Implementation Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven CRM Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic CRM implementation approach ensures successful customer engagement platform deployment with measurable business outcomes
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Discovery & Strategy",
                  description: "Comprehensive customer journey analysis, current state assessment, and CRM strategy development with stakeholder alignment and success criteria.",
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  icon: Lightbulb,
                  title: "2. Design & Configuration",
                  description: "CRM architecture design, module configuration, workflow development, and user experience optimization based on customer engagement requirements.",
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  icon: Zap,
                  title: "3. Integration & Testing",
                  description: "System integration with existing platforms, data migration, comprehensive testing, and performance optimization for seamless customer operations.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Rocket,
                  title: "4. Launch & Optimization",
                  description: "Production deployment, user training, change management, and ongoing optimization with continuous improvement and customer feedback integration.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-400" />
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
            
            {/* CRM Implementation Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical CRM Implementation Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "Discovery & Strategy", deliverable: "CRM Strategy & Roadmap", gradient: "from-emerald-50 to-teal-50" },
                  { phase: "Weeks 3-8", activity: "Design & Configuration", deliverable: "Configured CRM Platform", gradient: "from-teal-50 to-cyan-50" },
                  { phase: "Weeks 9-12", activity: "Integration & Testing", deliverable: "Integrated & Tested System", gradient: "from-cyan-50 to-blue-50" },
                  { phase: "Weeks 13-14", activity: "Launch & Optimization", deliverable: "Live CRM System", gradient: "from-blue-50 to-indigo-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-emerald-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow CRM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow CRM services and customer engagement platform implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow CRM Services?",
                  answer: "ServiceNow CRM Services include comprehensive customer relationship management solutions built on the unified Now Platform. This encompasses Customer Service Management (CSM), sales process automation, contact center integration, customer portal development, omnichannel support, and AI-powered customer engagement capabilities that deliver end-to-end customer lifecycle management with real-time orchestration across departments.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "How is ServiceNow CRM different from traditional CRM systems?",
                  answer: "ServiceNow CRM is built on a unified platform that integrates sales, service, and operations with AI-powered automation and real-time orchestration. Unlike traditional CRMs that operate in silos, ServiceNow connects customer-facing processes with back-end operations, enabling seamless workflow execution, intelligent case routing, and proactive customer engagement through a single, intelligent system.",
                  gradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  question: "What ROI can I expect from ServiceNow CRM implementation?",
                  answer: "Organizations typically achieve 45% faster case resolution, 60% improvement in customer satisfaction, 35% increase in sales productivity, and 300% average ROI within 12 months. ServiceNow CRM delivers value through unified customer operations, AI-powered automation, reduced manual processes, improved service delivery, and enhanced customer engagement that drives revenue growth and operational efficiency.",
                  gradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "Do you provide CRM integration with existing systems?",
                  answer: "Yes, we provide comprehensive CRM integration services including ERP systems (SAP, Oracle, NetSuite), marketing automation platforms (Salesforce, HubSpot), contact center solutions (Genesys, Avaya), e-commerce platforms (Shopify, Magento), and third-party applications. Our integration approach ensures real-time data synchronization and seamless workflow orchestration across your entire technology ecosystem.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "What customer service capabilities does ServiceNow CRM offer?",
                  answer: "ServiceNow CRM provides comprehensive customer service capabilities including omnichannel support (phone, email, chat, social), intelligent case routing, knowledge management, self-service portals, AI-powered agent assistance, predictive analytics, proactive issue resolution, and real-time customer insights. The platform enables seamless customer experiences across all touchpoints with unified data and processes.",
                  gradient: "from-green-50 via-emerald-50 to-teal-50"
                },
                {
                  question: "How long does ServiceNow CRM implementation take?",
                  answer: "ServiceNow CRM implementation typically takes 12-16 weeks depending on scope and complexity. Basic CSM implementation requires 10-14 weeks, while comprehensive CRM with sales automation and integrations takes 14-18 weeks. Our accelerated methodology includes proven frameworks, pre-built templates, and certified expertise that delivers 30% faster implementation compared to industry standards."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-emerald-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your customer engagement with ServiceNow CRM?
              </p>
              <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule CRM Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-cyan-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Customer Experience?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Implement ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                CRM Platform Today
              </span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Join 400+ organizations that have transformed their customer engagement with our ServiceNow CRM expertise. Start building unified customer experiences today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700">
                <Handshake className="mr-2 h-5 w-5" />
                Start CRM Implementation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download CRM Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-emerald-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-emerald-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-teal-200 text-xs">crm@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-cyan-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
