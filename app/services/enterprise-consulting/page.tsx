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
  Handshake, // Add this line
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowEnterpriseConsultingPage() {
  // Enhanced JSON-LD with comprehensive consulting services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Enterprise Consulting Services - IfBash",
    "alternateName": ["ServiceNow Strategic Consulting", "Enterprise Digital Transformation", "ServiceNow Business Consulting", "IT Transformation Consulting"],
    "description": "Expert ServiceNow enterprise consulting services with digital transformation strategy, business process optimization, IT modernization. 600+ consulting engagements, strategic roadmaps, organizational change management. Certified consultants delivering enterprise solutions globally.",
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
      "ServiceNow Enterprise Consulting",
      "Digital Transformation Strategy",
      "Business Process Optimization",
      "IT Modernization Consulting",
      "Organizational Change Management",
      "ServiceNow Roadmap Development",
      "Enterprise Architecture Consulting"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Strategic Consulting",
        "description": "Comprehensive digital transformation strategy and roadmap development",
        "category": "Consulting Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Process Optimization",
        "description": "Business process analysis and optimization using ServiceNow best practices",
        "category": "Process Consulting",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Change Management",
        "description": "Organizational change management and user adoption strategies",
        "category": "Change Management",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "450",
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
      "email": "consulting@ifbash.com",
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
        "name": "What are ServiceNow Enterprise Consulting Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Enterprise Consulting Services include strategic consulting, digital transformation planning, business process optimization, organizational change management, and enterprise architecture consulting to maximize ServiceNow platform value and drive business transformation."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does enterprise consulting engagement take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise consulting engagements typically range from 4-16 weeks depending on scope. Strategic assessments take 4-8 weeks, while comprehensive transformation programs require 12-16 weeks with ongoing advisory support."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from enterprise consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically achieve 50% reduction in operational costs, 65% improvement in process efficiency, 80% faster time-to-market, and 350% average ROI through strategic consulting and digital transformation initiatives."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing consulting support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide ongoing strategic consulting including quarterly business reviews, continuous optimization, performance monitoring, roadmap updates, and executive advisory services to ensure sustained transformation success."
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
        "name": "ServiceNow Enterprise Consulting",
        "item": "https://ifbash.com/servicenow-enterprise-consulting"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Enterprise Consulting Services | Digital Transformation Strategy | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow enterprise consulting services in Hyderabad & globally. Digital transformation strategy, business process optimization, IT modernization. 600+ consulting engagements, 50% cost reduction, 65% efficiency improvement. Certified consultants."
        />
        <meta 
          name="keywords" 
          content="ServiceNow enterprise consulting, digital transformation strategy, business process optimization, IT modernization consulting, ServiceNow consulting Hyderabad, organizational change management, enterprise architecture, strategic roadmap, transformation consulting"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Enterprise Consultants" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Enterprise Consulting Services | Strategic Transformation | IfBash" />
        <meta property="og:description" content="Leading ServiceNow enterprise consulting with 600+ engagements. Digital transformation strategy, process optimization, IT modernization. 50% cost reduction, certified consultants delivering strategic solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-enterprise-consulting" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Enterprise Consulting | Strategic Transformation | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow enterprise consulting with 600+ engagements. Digital transformation, process optimization by certified consultants." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-enterprise-consulting" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" as="image" />
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
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-indigo-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-slate-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-slate-500 via-indigo-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-slate-500/25 transition-all duration-300">
                ✓ Enterprise Consulting Specialists
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-blue-600 to-slate-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 600+ Strategic Engagements
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-slate-600 to-gray-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Transformation Experts
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Enterprise
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-indigo-400 to-blue-400 font-semibold">
                    Consulting
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Strategic{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-indigo-400 to-blue-400 font-semibold">
                      Transformation
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-100 leading-relaxed mb-8 max-w-2xl">
                  Transform your enterprise with strategic ServiceNow consulting. Our certified experts deliver{' '}
                  <span className="font-semibold text-indigo-300">digital transformation strategies</span>, business process optimization, and organizational change management that drives measurable business outcomes.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600 hover:from-slate-700 hover:via-indigo-700 hover:to-blue-700"
                  >
                    <Compass className="mr-2 h-5 w-5" />
                    Start Strategic Assessment
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Transformation Stories
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Briefcase className="h-5 w-5 text-slate-600" />
                    <span className="text-sm text-gray-900 font-semibold">Strategic Consulting</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Building className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Enterprise Architecture</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <TrendingUp className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Business Transformation</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-slate-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-slate-400/20 shadow-xl hover:shadow-slate-500/20">
                  <Briefcase className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">600+</div>
                  <div className="text-slate-200 text-sm">Strategic Engagements</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-slate-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-slate-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <TrendingUp className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-indigo-200 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-slate-600/20 to-gray-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-slate-600/30 hover:to-gray-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">65%</div>
                  <div className="text-blue-200 text-sm">Efficiency Improvement</div>
                </div>
                <div className="bg-gradient-to-br from-slate-600/25 via-gray-600/20 to-stone-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-slate-600/35 hover:via-gray-600/30 hover:to-stone-600/25 transition-all duration-300 border border-slate-400/20 shadow-xl hover:shadow-slate-500/20">
                  <Award className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">350%</div>
                  <div className="text-slate-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS ENTERPRISE CONSULTING SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                    Strategic Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What is ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                      Enterprise Consulting?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Enterprise Consulting</strong> provides strategic guidance and expertise to help organizations maximize their ServiceNow investment through{' '}
                    <span className="text-slate-600 font-semibold">comprehensive digital transformation</span>,{' '}
                    <span className="text-indigo-600 font-semibold">business process optimization</span>, and organizational change management.
                  </p>
                  <p className="leading-relaxed">
                    Our certified enterprise consultants deliver{' '}
                    <strong>strategic roadmaps</strong>,{' '}
                    <strong>architecture design</strong>,{' '}
                    <strong>process optimization</strong>, and change management strategies that align technology initiatives with business objectives to drive measurable transformation outcomes.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>strategic assessment</strong> to implementation guidance, we provide end-to-end consulting services that ensure successful enterprise transformation, sustainable adoption, and continuous value realization across your ServiceNow ecosystem.
                  </p>
                </div>
                
                {/* Key Consulting Areas */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Strategic Assessment & Planning",
                    "Digital Transformation Strategy", 
                    "Business Process Optimization",
                    "Enterprise Architecture Design",
                    "Change Management",
                    "Value Realization & ROI"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-slate-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600 hover:from-slate-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-slate-500/25 transition-all duration-300">
                    Explore Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-slate-100 via-indigo-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow enterprise consulting dashboard showcasing strategic transformation and business process optimization"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">600+</div>
                  <div className="text-sm opacity-90">Strategic Engagements</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTING SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-slate-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-slate-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Comprehensive Consulting Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Enterprise Consulting Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Strategic ServiceNow consulting services designed to drive digital transformation and business value through proven methodologies and expert guidance
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Compass,
                  title: "Strategic Assessment & Planning",
                  description: "Comprehensive business assessment, current state analysis, and strategic roadmap development with clear priorities and success metrics.",
                  features: ["Current State Analysis", "Strategic Roadmapping", "Business Case Development", "Success Metrics Definition"],
                  gradient: "from-slate-600 to-indigo-600",
                  bgGradient: "from-slate-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: Rocket,
                  title: "Digital Transformation Strategy",
                  description: "End-to-end digital transformation consulting with technology alignment, process modernization, and organizational readiness.",
                  features: ["Transformation Roadmap", "Technology Alignment", "Process Modernization", "Organizational Readiness"],
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-slate-50"
                },
                {
                  icon: Settings,
                  title: "Business Process Optimization",
                  description: "Process analysis, redesign, and optimization using ServiceNow best practices and industry standards for maximum efficiency.",
                  features: ["Process Analysis", "Workflow Redesign", "Best Practices Implementation", "Efficiency Optimization"],
                  gradient: "from-blue-600 to-slate-600",
                  bgGradient: "from-blue-50 via-slate-50 to-gray-50"
                },
                {
                  icon: Building,
                  title: "Enterprise Architecture Design",
                  description: "Architecture consulting, system design, and integration strategy for scalable, future-ready ServiceNow implementations.",
                  features: ["Architecture Design", "System Integration", "Scalability Planning", "Future-Ready Solutions"],
                  gradient: "from-slate-600 to-gray-600",
                  bgGradient: "from-slate-50 via-gray-50 to-stone-50"
                },
                {
                  icon: Users,
                  title: "Organizational Change Management",
                  description: "Change management strategy, stakeholder engagement, and adoption planning to ensure successful transformation outcomes.",
                  features: ["Change Strategy", "Stakeholder Engagement", "Adoption Planning", "Training Programs"],
                  gradient: "from-gray-600 to-stone-600",
                  bgGradient: "from-gray-50 via-stone-50 to-slate-50"
                },
                {
                  icon: BarChart3,
                  title: "Value Realization & ROI Analysis",
                  description: "Business value assessment, ROI analysis, and performance measurement to maximize ServiceNow investment returns.",
                  features: ["Value Assessment", "ROI Analysis", "Performance Metrics", "Investment Optimization"],
                  gradient: "from-stone-600 to-slate-600",
                  bgGradient: "from-stone-50 via-slate-50 to-indigo-50"
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
                          <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Consulting Areas */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Specialized Consulting Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Shield, name: "Risk & Compliance", desc: "Governance & risk management", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: Brain, name: "AI & Automation", desc: "Intelligent process automation", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Globe, name: "Global Delivery", desc: "Multi-region implementations", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Award, name: "Performance Excellence", desc: "Continuous improvement", gradient: "from-yellow-50 to-orange-50", iconColor: "text-yellow-600" }
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

        {/* CONSULTING RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Consulting Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Consulting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                  Results & Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our enterprise consulting delivers transformational results through strategic guidance, process optimization, and organizational change management
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Operational Cost Reduction", desc: "Through process optimization", gradient: "from-slate-600 to-indigo-600", bgGradient: "from-slate-50 via-indigo-50 to-blue-50", icon: DollarSign },
                { metric: "65%", label: "Process Efficiency Gain", desc: "Via strategic optimization", gradient: "from-indigo-600 to-blue-600", bgGradient: "from-indigo-50 via-blue-50 to-slate-50", icon: Zap },
                { metric: "80%", label: "Faster Time-to-Market", desc: "Accelerated delivery", gradient: "from-blue-600 to-slate-600", bgGradient: "from-blue-50 via-slate-50 to-gray-50", icon: Clock },
                { metric: "350%", label: "Average ROI", desc: "Within 18 months", gradient: "from-slate-600 to-gray-600", bgGradient: "from-slate-50 via-gray-50 to-stone-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-slate-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's enterprise consulting transformed our entire ServiceNow strategy. Their strategic assessment identified $3.2M in annual cost savings opportunities, while their transformation roadmap reduced our process cycle time by 65%. The consulting engagement delivered exceptional ROI within 12 months."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Jennifer Walsh, Chief Strategy Officer
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Fortune 100 Financial Services
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
                { title: "Enterprise Clients", value: "150+", desc: "Fortune 500 consulting engagements", gradient: "from-slate-50 to-indigo-50" },
                { title: "Strategic Transformations", value: "600+", desc: "Successful consulting projects", gradient: "from-indigo-50 to-blue-50" },
                { title: "Client Satisfaction Rate", value: "97%", desc: "Long-term partnerships", gradient: "from-blue-50 to-slate-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-slate-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-slate-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                  Consulting Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow enterprise consultants who deliver strategic transformation solutions with proven methodologies and measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Certified Strategic Consultants",
                  description: "Our team includes ServiceNow certified strategic portfolio consultants, enterprise architects, and transformation specialists with deep expertise in digital transformation, process optimization, and organizational change management across Fortune 500 enterprises.",
                  gradient: "from-slate-600 to-indigo-600",
                  bgGradient: "from-slate-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: Briefcase,
                  title: "600+ Strategic Engagements",
                  description: "Proven track record of successful enterprise consulting with Fortune 500 companies, delivering strategic roadmaps, transformation programs, and change management initiatives with 97% client satisfaction and measurable business outcomes.",
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-slate-50"
                },
                {
                  icon: Building,
                  title: "Enterprise-Grade Methodologies",
                  description: "Proven consulting frameworks including strategic assessment, transformation roadmapping, change management, and value realization methodologies designed for large-scale enterprise implementations and complex organizational transformations.",
                  gradient: "from-blue-600 to-slate-600",
                  bgGradient: "from-blue-50 via-slate-50 to-gray-50"
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Business Outcomes",
                  description: "Focus on quantifiable results with clear ROI tracking, performance metrics, and business value realization that align with strategic objectives. Our consulting delivers average 350% ROI and 50% operational cost reduction through strategic optimization.",
                  gradient: "from-slate-600 to-gray-600",
                  bgGradient: "from-slate-50 via-gray-50 to-stone-50"
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
                { title: "Executive Advisory", desc: "C-level strategic guidance", icon: Briefcase, gradient: "from-blue-50 to-indigo-50", iconColor: "text-blue-600" },
                { title: "Proven Methodologies", desc: "Enterprise-tested frameworks", icon: BookOpen, gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                { title: "Global Delivery", desc: "Multi-region consulting", icon: Globe, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Continuous Partnership", desc: "Ongoing strategic support", icon: Handshake, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }              ].map((item, index) => (
                <div key={index} className={`text-center p-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:scale-105`}>
                  <item.icon className={`h-10 w-10 mx-auto mb-4 ${item.iconColor}`} />
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSULTING PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Our Consulting Methodology
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Enterprise Consulting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic consulting approach ensures strategic alignment, successful transformation outcomes, and sustained business value realization
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Search,
                  title: "1. Strategic Assessment",
                  description: "Comprehensive business assessment, current state analysis, stakeholder interviews, and opportunity identification with detailed gap analysis and strategic recommendations.",
                  gradient: "from-slate-600 to-indigo-600",
                  bgGradient: "from-slate-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: MapPin,
                  title: "2. Roadmap Development",
                  description: "Strategic roadmap creation with clear priorities, timelines, resource requirements, and success metrics aligned with business objectives and transformation goals.",
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-slate-50"
                },
                {
                  icon: Settings,
                  title: "3. Implementation Guidance",
                  description: "Implementation oversight, project management support, risk mitigation, and continuous optimization with regular checkpoint reviews and course corrections.",
                  gradient: "from-blue-600 to-slate-600",
                  bgGradient: "from-blue-50 via-slate-50 to-gray-50"
                },
                {
                  icon: TrendingUp,
                  title: "4. Value Realization",
                  description: "Value measurement, performance monitoring, benefit realization tracking, and continuous improvement with ongoing strategic advisory and optimization support.",
                  gradient: "from-slate-600 to-gray-600",
                  bgGradient: "from-slate-50 via-gray-50 to-stone-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-indigo-400" />
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
            
            {/* Consulting Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical Consulting Engagement Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "Strategic Assessment", deliverable: "Current State Analysis", gradient: "from-slate-50 to-indigo-50" },
                  { phase: "Weeks 3-4", activity: "Roadmap Development", deliverable: "Strategic Roadmap", gradient: "from-indigo-50 to-blue-50" },
                  { phase: "Weeks 5-12", activity: "Implementation Guidance", deliverable: "Transformation Support", gradient: "from-blue-50 to-slate-50" },
                  { phase: "Ongoing", activity: "Value Realization", deliverable: "Continuous Advisory", gradient: "from-slate-50 to-gray-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-slate-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-slate-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-gray-100 via-slate-100 to-indigo-100 text-gray-700 mb-6 px-4 py-2 border border-gray-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Enterprise Consulting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow enterprise consulting and strategic transformation services
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Enterprise Consulting Services?",
                  answer: "ServiceNow Enterprise Consulting Services include strategic consulting, digital transformation planning, business process optimization, enterprise architecture design, organizational change management, and value realization support. Our certified consultants provide comprehensive guidance to maximize ServiceNow platform value, align technology initiatives with business objectives, and drive measurable transformation outcomes through proven methodologies and best practices.",
                  gradient: "from-slate-50 via-indigo-50 to-blue-50"
                },
                {
                  question: "How long does an enterprise consulting engagement typically take?",
                  answer: "Enterprise consulting engagements vary based on scope and complexity. Strategic assessments take 4-8 weeks, comprehensive transformation programs require 12-16 weeks, while ongoing advisory services continue throughout the implementation lifecycle. Our phased approach includes assessment, roadmap development, implementation guidance, and value realization support with regular checkpoints and deliverables.",
                  gradient: "from-indigo-50 via-blue-50 to-slate-50"
                },
                {
                  question: "What ROI can I expect from enterprise consulting services?",
                  answer: "Organizations typically achieve 50% reduction in operational costs, 65% improvement in process efficiency, 80% faster time-to-market, and 350% average ROI within 18 months. Our consulting delivers value through strategic optimization, process improvement, technology alignment, and organizational transformation that drives sustained business outcomes and competitive advantage.",
                  gradient: "from-blue-50 via-slate-50 to-gray-50"
                },
                {
                  question: "Do you provide ongoing strategic consulting support?",
                  answer: "Yes, we provide ongoing strategic consulting including quarterly business reviews, performance monitoring, roadmap updates, continuous optimization recommendations, and executive advisory services. Our long-term partnership approach ensures sustained transformation success, adaptation to changing business needs, and continuous value realization from your ServiceNow investment.",
                  gradient: "from-slate-50 via-gray-50 to-stone-50"
                },
                {
                  question: "What industries do you provide enterprise consulting for?",
                  answer: "We provide enterprise consulting across all major industries including financial services, healthcare, manufacturing, retail, technology, government, and telecommunications. Our consultants have deep domain expertise with industry-specific regulations, compliance requirements, and best practices to deliver tailored transformation strategies that address unique business challenges and opportunities.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "How do you measure consulting success and business value?",
                  answer: "We measure success through comprehensive metrics including cost reduction, process efficiency gains, time-to-market improvements, user adoption rates, ROI achievement, and strategic objective alignment. Our value realization framework includes baseline measurement, progress tracking, benefit quantification, and continuous monitoring with regular business reviews and optimization recommendations to ensure sustained transformation success."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-slate-700 mr-2 font-bold">Q:</span>
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
                Ready to begin your strategic transformation journey?
              </p>
              <Button className="bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600 hover:from-slate-700 hover:via-indigo-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-slate-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Strategic Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-indigo-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 via-slate-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-slate-500/20 via-indigo-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Strategic Transformation?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-indigo-400 to-blue-400">
                Enterprise Transformation
              </span>
            </h2>
            
            <p className="text-xl text-slate-100 mb-10 max-w-3xl mx-auto">
              Join 600+ organizations that have achieved strategic transformation success with our enterprise consulting expertise. Start your journey with a comprehensive strategic assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-slate-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-slate-600 via-indigo-600 to-blue-600 hover:from-slate-700 hover:via-indigo-700 hover:to-blue-700">
                <Compass className="mr-2 h-5 w-5" />
                Start Strategic Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Consulting Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-slate-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-slate-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-indigo-200 text-xs">consulting@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Meeting</p>
                <p className="text-blue-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
