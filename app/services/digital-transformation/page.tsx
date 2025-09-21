"use client";
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
  Bot,
  Cpu,
  Building,
  Factory,
  HeartPulse,
  MonitorSmartphone,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowDigitalTransformationPage() {
  // Enhanced JSON-LD with more comprehensive data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Digital Transformation Services - IfBash",
    "alternateName": ["ServiceNow Implementation & Consulting", "Enterprise AI Automation", "Digital Workplace Transformation"],
    "description": "Leading ServiceNow digital transformation services with AI automation, ITSM, HR automation, and CRM integration. 40% faster implementations, 30% cost reduction, 99.9% uptime. Certified experts delivering enterprise solutions globally.",
    "provider": {
      "@type": "Organization",
      "name": "IfBash",
      "url": "https://ifbash.com",
      "logo": "https://ifbash.com/images/ifbash-logo.png",
      "foundingDate": "2016",
      "numberOfEmployees": "50-100"
    },
    "serviceType": [
      "ServiceNow Digital Transformation",
      "AI Workflow Automation", 
      "ITSM Implementation",
      "HR Service Delivery",
      "Customer Service Management",
      "Business Intelligence Analytics",
      "Security & GRC Implementation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Implementation",
        "description": "Complete ServiceNow platform implementation with 40% faster delivery and certified expertise",
        "category": "Digital Transformation",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "AI Workflow Automation",
        "description": "Intelligent process automation using ServiceNow AI capabilities with predictive analytics",
        "category": "Automation",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Consulting",
        "description": "Strategic ServiceNow consulting for enterprise digital transformation initiatives",
        "category": "Consulting",
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
      "email": "servicenow@ifbash.com",
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
        "name": "What is ServiceNow Digital Transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Digital Transformation leverages the world's leading cloud platform to modernize enterprise operations through intelligent workflow automation, AI-driven insights, and seamless system integration. It includes ITSM implementation, HR automation, customer service management, and business process optimization to drive measurable business outcomes."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does ServiceNow implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our ServiceNow implementations typically take 3-6 months, which is 40% faster than industry average due to our proven methodologies, certified expertise, and pre-built accelerators. Timeline varies based on project scope, complexity, and organization size."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from ServiceNow transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically see 30% cost reduction, 40% faster service delivery, 99.9% platform uptime, and 85% user adoption rates within the first year of ServiceNow implementation. ROI is usually achieved within 12-18 months with continued optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ServiceNow support after implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive 24/7 support, maintenance, continuous optimization, user training, and platform updates. Our ongoing partnership ensures your ServiceNow investment continues to deliver value and evolves with your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Which ServiceNow modules do you implement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement all major ServiceNow modules including ITSM, ITOM, HR Service Delivery, Customer Service Management, Security Operations, GRC, Business Intelligence, and AI-powered workflow automation across all ServiceNow products."
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
        "name": "ServiceNow Digital Transformation",
        "item": "https://ifbash.com/servicenow-digital-transformation"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Digital Transformation Services | AI Workflow Automation | Enterprise Solutions | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow digital transformation services in Hyderabad & globally. AI workflow automation, ITSM, HR automation, CRM integration. 40% faster implementation, 30% cost savings, 99.9% uptime. Certified experts, proven ROI. Free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow digital transformation, ServiceNow implementation, workflow automation, ITSM ServiceNow, HR automation ServiceNow, ServiceNow consulting Hyderabad, ServiceNow AI automation, enterprise automation, ServiceNow CRM integration, digital workplace transformation, ServiceNow certified experts, business process automation, ServiceNow platform"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Implementation Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Digital Transformation Services | AI Automation Experts | IfBash" />
        <meta property="og:description" content="Leading ServiceNow transformation experts with 500+ successful implementations. AI automation, ITSM, HR workflows. 40% faster delivery, 30% cost reduction, 99.9% uptime. Certified professionals delivering enterprise solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-digital-transformation" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Digital Transformation | Enterprise AI Automation | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow consulting with 40% faster implementations, 30% cost reduction. AI automation & workflow optimization by certified professionals." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-digital-transformation" />
        
        {/* Enhanced Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1920&q=80" as="image" />
        <link rel="preload" href="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" as="image" />
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

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95"
          aria-label="Chat with ServiceNow Expert"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-gray-50 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[120px] text-center">
            Chat with Expert
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-indigo-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section 
          className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)"
          }}
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>
          
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 backdrop-blur-md">
                ✓ ServiceNow Implementation Specialists
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 backdrop-blur-md">
                ✓ 500+ Successful Projects
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 backdrop-blur-md">
                ✓ Certified Expert Team
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-white mb-6">
                  ServiceNow Digital
                  <span className="block font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                    Transformation
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                    Powered by{' '}
                    <span className="font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      AI Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                  Transform your organization with enterprise-grade ServiceNow solutions. Our certified consultants deliver{' '}
                  <span className="font-semibold text-yellow-300">AI-powered workflow automation</span>, seamless integrations, and exceptional experiences that drive measurable ROI.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-white text-purple-700 hover:bg-gray-100 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Assessment
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Success Stories
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 shadow">
                    <Shield className="h-5 w-5 text-yellow-300" />
                    <span className="text-sm text-white font-medium">Certified Professionals</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 shadow">
                    <Award className="h-5 w-5 text-blue-300" />
                    <span className="text-sm text-white font-medium">Proven Track Record</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-green-300" />
                    <span className="text-sm text-white font-medium">Global Delivery</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-300 border border-white/20">
                  <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-white/80 text-sm">Faster Implementation</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-300 border border-white/20">
                  <DollarSign className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-white/80 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-300 border border-white/20">
                  <Globe className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-white/80 text-sm">Platform Uptime</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all duration-300 border border-white/20">
                  <Users className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-white/80 text-sm">User Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SERVICENOW SECTION */}
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 text-purple-700 mb-6 px-4 py-2">
                    Digital Transformation Excellence
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What is ServiceNow Digital
                    <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Transformation?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Digital Transformation</strong> leverages the world's leading cloud platform to modernize enterprise operations through{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">intelligent workflow automation</span>,{' '}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">AI-driven insights</span>, and seamless system integration.
                  </p>
                  <p className="leading-relaxed">
                    Our certified ServiceNow consultants help organizations unlock operational efficiency, enhance employee experiences, and accelerate innovation across{' '}
                    <strong>IT Service Management (ITSM)</strong>,{' '}
                    <strong>HR automation</strong>,{' '}
                    <strong>customer service</strong>, and business applications.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>AI workflow automation</strong> to predictive analytics, we deliver comprehensive digital transformation solutions that drive measurable business outcomes and competitive advantage for enterprises globally.
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "AI-Powered Automation",
                    "ITSM Implementation", 
                    "HR Service Delivery",
                    "CRM Integration",
                    "Predictive Analytics",
                    "Security & GRC"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-green-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore Our Methodology
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div 
                  className="relative rounded-3xl p-6 shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow digital transformation dashboard showcasing AI workflow automation and real-time analytics for enterprise operations"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold">1,500+</div>
                  <div className="text-sm opacity-90">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700 mb-6 px-4 py-2">
                Comprehensive Solutions
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow Solutions That
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Drive Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                End-to-end ServiceNow implementation and consulting services designed to modernize your enterprise operations with measurable ROI
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI Workflow Automation",
                  description: "Intelligent process automation with predictive analytics, machine learning capabilities, and AI-powered virtual agents.",
                  features: ["Process Mining & Optimization", "Predictive Analytics Dashboard", "AI Virtual Agents", "Smart Case Routing"],
                  gradient: "from-purple-600 to-pink-600",
                  bgGradient: "from-purple-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Database,
                  title: "ITSM Implementation",
                  description: "Complete IT Service Management setup with incident, problem, change, and asset management for operational excellence.",
                  features: ["Incident & Problem Management", "Change Management", "Asset Lifecycle Management", "Knowledge Management"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  icon: Users,
                  title: "HR Service Delivery",
                  description: "Streamline HR processes with employee self-service, automated workflows, and enhanced employee experiences.",
                  features: ["Employee Onboarding", "HR Case Management", "Self-Service Portal", "Mobile HR Access"],
                  gradient: "from-green-600 to-teal-600",
                  bgGradient: "from-green-50 via-teal-50 to-cyan-50"
                },
                {
                  icon: MessageCircle,
                  title: "Customer Service Management",
                  description: "Transform customer service with omnichannel support, AI-powered assistance, and proactive service delivery.",
                  features: ["Omnichannel Support", "AI Customer Assistants", "Proactive Case Management", "SLA Optimization"],
                  gradient: "from-orange-600 to-red-600",
                  bgGradient: "from-orange-50 via-red-50 to-pink-50"
                },
                {
                  icon: BarChart3,
                  title: "Business Intelligence & Analytics",
                  description: "Advanced analytics and reporting capabilities for data-driven decision making and performance optimization.",
                  features: ["Real-time Dashboards", "Performance Analytics", "Custom Report Builder", "KPI Tracking & Alerts"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-pink-50"
                },
                {
                  icon: Shield,
                  title: "Security & GRC",
                  description: "Enterprise-grade security with governance, risk, and compliance management for regulatory adherence.",
                  features: ["GRC Implementation", "Risk Assessment", "Compliance Monitoring", "Security Operations"],
                  gradient: "from-gray-600 to-slate-600",
                  bgGradient: "from-gray-50 via-slate-50 to-zinc-50"
                }
              ].map((service, index) => (
                <Card key={index} className={`bg-gradient-to-br ${service.bgGradient} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden`}>
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
            
            {/* Additional ServiceNow Modules */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Additional ServiceNow Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Building, name: "Facilities Management", desc: "Space & workplace optimization", gradient: "from-orange-50 to-amber-50", iconColor: "text-orange-600" },
                  { icon: Factory, name: "Manufacturing Operations", desc: "Production workflow automation", gradient: "from-indigo-50 to-blue-50", iconColor: "text-indigo-600" },
                  { icon: HeartPulse, name: "Healthcare Operations", desc: "Patient care optimization", gradient: "from-rose-50 to-pink-50", iconColor: "text-rose-600" },
                  { icon: MonitorSmartphone, name: "Digital Workplace", desc: "Modern employee experience", gradient: "from-violet-50 to-purple-50", iconColor: "text-violet-600" }
                ].map((module, index) => (
                  <div key={index} className={`text-center p-6 bg-gradient-to-br ${module.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                    <module.icon className={`h-10 w-10 mx-auto mb-3 ${module.iconColor}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{module.name}</h4>
                    <p className="text-sm text-gray-600">{module.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/10">
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-700 mb-6 px-4 py-2">
                Proven Results & ROI
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Business
                <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our ServiceNow implementations deliver quantifiable results across all business metrics with proven ROI and operational excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Faster Implementation", desc: "Accelerated delivery vs industry average", gradient: "from-violet-600 via-purple-600 to-indigo-600", bgGradient: "from-violet-50 via-purple-50 to-indigo-50", icon: Clock },
                { metric: "30%", label: "Cost Reduction", desc: "Through automation and efficiency", gradient: "from-indigo-600 via-blue-600 to-cyan-600", bgGradient: "from-indigo-50 via-blue-50 to-cyan-50", icon: DollarSign },
                { metric: "99.9%", label: "Platform Uptime", desc: "Enterprise-grade reliability", gradient: "from-cyan-600 via-teal-600 to-emerald-600", bgGradient: "from-cyan-50 via-teal-50 to-emerald-50", icon: Globe },
                { metric: "85%", label: "User Adoption", desc: "Employee engagement success", gradient: "from-emerald-600 via-green-600 to-teal-600", bgGradient: "from-emerald-50 via-green-50 to-teal-50", icon: Users }
              ].map((stat, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${stat.bgGradient} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
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
            <div 
              className="rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #667eea 100%)"
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                    "IfBash transformed our ServiceNow implementation timeline by 40% while maintaining the highest quality standards. Their expertise in AI automation and workflow optimization delivered immediate ROI of $2.3M in operational savings and significantly improved our employee experience across all departments."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-white not-italic font-semibold text-lg">
                        Sarah Johnson, CTO
                      </cite>
                      <p className="text-white/80 font-medium">
                        Fortune 500 Manufacturing Company
                      </p>
                    </div>
                    <div className="flex mt-3 sm:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Success Metrics */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { title: "Enterprise Implementations", value: "1,500+", desc: "Successful projects across industries", gradient: "from-blue-50 to-cyan-50" },
                { title: "Client Retention Rate", value: "98%", desc: "Long-term partnerships & satisfaction", gradient: "from-indigo-50 to-blue-50" },
                { title: "Average ROI Achievement", value: "340%", desc: "Within first 12 months", gradient: "from-green-50 to-emerald-50" }
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
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 text-indigo-700 mb-6 px-4 py-2">
                Why IfBash
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted ServiceNow
                <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Transformation Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow experts who deliver enterprise-grade solutions with proven results and measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified ServiceNow Experts",
                  description: "Our team consists of certified ServiceNow professionals with deep platform expertise and years of implementation experience across industries including healthcare, manufacturing, and financial services.",
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: Award,
                  title: "1,500+ Successful Implementations",
                  description: "Proven track record of delivering successful ServiceNow transformations for enterprises worldwide with 98% client retention rate and consistent project success across all verticals.",
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security & Compliance",
                  description: "Robust data protection, privacy controls, and regulatory compliance frameworks including GDPR, HIPAA, and SOX trusted by Fortune 500 companies worldwide.",
                  gradient: "from-cyan-600 to-teal-600",
                  bgGradient: "from-cyan-50 via-teal-50 to-emerald-50"
                },
                {
                  icon: TrendingUp,
                  title: "Scalable & Future-Ready Solutions",
                  description: "Solutions designed to scale with your business growth and adapt to evolving technology landscapes with seamless integration capabilities and AI-powered automation.",
                  gradient: "from-teal-600 to-emerald-600",
                  bgGradient: "from-teal-50 via-emerald-50 to-green-50"
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
                { title: "24/7 Support", desc: "Round-the-clock expert assistance", icon: Clock, gradient: "from-orange-50 to-amber-50", iconColor: "text-orange-600" },
                { title: "Agile Methodology", desc: "Faster delivery with quality", icon: Rocket, gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                { title: "Custom Integrations", desc: "Seamless system connectivity", icon: Database, gradient: "from-indigo-50 to-blue-50", iconColor: "text-indigo-600" },
                { title: "Training & Enablement", desc: "User adoption & success", icon: Users, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" }
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
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30">
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 text-indigo-700 mb-6 px-4 py-2">
                Our Methodology
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Implementation
                <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic approach ensures successful ServiceNow transformation with measurable business outcomes and accelerated time-to-value
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Discovery & Assessment",
                  description: "Comprehensive evaluation of your current digital maturity, business processes, and transformation readiness with detailed gap analysis.",
                  gradient: "from-violet-600 via-purple-600 to-indigo-600",
                  bgGradient: "from-violet-50 via-purple-50 to-indigo-50"
                },
                {
                  icon: Lightbulb,
                  title: "2. Strategy & Design",
                  description: "Design tailored transformation roadmaps leveraging ServiceNow capabilities for maximum business impact and ROI optimization.",
                  gradient: "from-indigo-600 via-blue-600 to-cyan-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: Zap,
                  title: "3. Build & Deploy",
                  description: "Execute AI-powered workflows, automation, and integrations using agile methodology with continuous testing and validation.",
                  gradient: "from-cyan-600 via-teal-600 to-emerald-600",
                  bgGradient: "from-cyan-50 via-teal-50 to-emerald-50"
                },
                {
                  icon: TrendingUp,
                  title: "4. Optimize & Scale",
                  description: "Continuous improvement with advanced analytics, user feedback collection, and performance optimization for sustained growth.",
                  gradient: "from-emerald-600 via-green-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-green-50 to-teal-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-400" />
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
            
            {/* Implementation Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical Implementation Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "Discovery & Assessment", deliverable: "Current State Analysis", gradient: "from-indigo-50 to-blue-50" },
                  { phase: "Weeks 3-6", activity: "Design & Planning", deliverable: "Solution Architecture", gradient: "from-blue-50 to-cyan-50" },
                  { phase: "Weeks 7-16", activity: "Build & Configure", deliverable: "Working Platform", gradient: "from-cyan-50 to-teal-50" },
                  { phase: "Weeks 17-20", activity: "Testing & Go-Live", deliverable: "Production Deployment", gradient: "from-teal-50 to-emerald-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-blue-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-5 md:py-8 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-blue-100 to-cyan-100 text-slate-700 mb-6 px-4 py-2">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow Transformation
                <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow digital transformation and implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is ServiceNow Digital Transformation?",
                  answer: "ServiceNow Digital Transformation is the process of modernizing enterprise operations using the ServiceNow platform to automate workflows, integrate systems, and enhance employee and customer experiences through AI-powered solutions. It includes ITSM implementation, HR automation, customer service management, business process optimization, and AI-driven analytics to drive measurable business outcomes and competitive advantage.",
                  gradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  question: "How long does ServiceNow implementation take?",
                  answer: "Our ServiceNow implementations typically take 3-6 months (12-24 weeks), which is 40% faster than industry average due to our proven methodologies, certified expertise, pre-built accelerators, and agile approach. Timeline varies based on project scope, complexity, organization size, number of modules, and integration requirements. We provide detailed project timelines during the assessment phase.",
                  gradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  question: "What ROI can I expect from ServiceNow transformation?",
                  answer: "Organizations typically see 30% cost reduction, 40% faster service delivery, 99.9% platform uptime, 85% user adoption rates, and significant improvements in employee satisfaction within the first year. Average ROI of 340% is usually achieved within 12-18 months through operational efficiency, automation savings, reduced manual effort, and improved productivity across all business functions.",
                  gradient: "from-cyan-50 via-teal-50 to-emerald-50"
                },
                {
                  question: "Do you provide ServiceNow support after implementation?",
                  answer: "Yes, we provide comprehensive 24/7 support including platform maintenance, continuous optimization, user training, system updates, performance monitoring, troubleshooting, and strategic consulting. Our ongoing partnership ensures your ServiceNow investment continues to deliver value, adapts to changing business needs, and evolves with new platform capabilities and industry best practices.",
                  gradient: "from-teal-50 via-emerald-50 to-green-50"
                },
                {
                  question: "Which ServiceNow modules and applications do you implement?",
                  answer: "We implement all major ServiceNow modules including IT Service Management (ITSM), IT Operations Management (ITOM), HR Service Delivery, Customer Service Management (CSM), Security Operations (SecOps), Governance Risk & Compliance (GRC), Business Intelligence, AI and Machine Learning capabilities, Integration Hub, and custom applications. Our certified experts have deep expertise across the entire ServiceNow ecosystem.",
                  gradient: "from-emerald-50 via-green-50 to-teal-50"
                },
                {
                  question: "How do you ensure successful user adoption?",
                  answer: "We ensure successful user adoption through comprehensive change management, role-based training programs, intuitive interface design, gradual rollout approach, continuous user feedback collection, performance monitoring, ongoing support, and user champions programs. Our approach typically achieves 85%+ user adoption rates within the first 90 days of go-live.",
                  gradient: "from-green-50 via-teal-50 to-cyan-50"
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-blue-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-green-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Still have questions about ServiceNow transformation?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Our Experts
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section 
          className="py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%)"
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="w-[92%] xl:w-[82%] 2xl:w-[72%] mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 backdrop-blur-md">
              Ready to Transform?
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your ServiceNow
              <span className="block text-yellow-300">
                Digital Transformation
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join 1,500+ organizations that have successfully transformed their operations with our certified ServiceNow expertise. Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-purple-700 hover:bg-gray-100 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get ROI Assessment
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Phone className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Call Us</p>
                <p className="text-white/70 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Mail className="h-6 w-6 text-green-300 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Email Us</p>
                <p className="text-white/70 text-xs">servicenow@ifbash.com</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <Calendar className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Book Meeting</p>
                <p className="text-white/70 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
