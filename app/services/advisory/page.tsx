import Head from "next/head";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
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
  Map,
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
  FileText,
  Eye,
  Settings,
  Layers,
  Briefcase,
  ChartLine,
  BookOpen,
  LinkedinIcon,
  Twitter,
  Youtube,
  Bot,
  Cpu,
} from "lucide-react";

export default function ServiceNowAdvisoryPage() {
  // Enhanced JSON-LD with more comprehensive data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "name": "ServiceNow Advisory Services - Strategic Consulting | IfBash",
    "alternateName": ["ServiceNow Strategy Consulting", "Platform Assessment Services", "Digital Transformation Advisory"],
    "description": "Expert ServiceNow advisory and strategic consulting services. Platform assessments, transformation roadmaps, optimization strategies. 85% ROI improvement, 90% success rate. Certified advisors delivering enterprise solutions globally.",
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
      "ServiceNow Advisory Services",
      "Strategic Consulting",
      "Platform Assessment",
      "Digital Strategy Development",
      "Business Process Consulting",
      "Governance Framework Design",
      "ROI Optimization"
    ],
    "areaServed": {
      "@type": "Place", 
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Strategic Assessment",
        "description": "Comprehensive platform evaluation and strategic roadmap development with 85% ROI improvement",
        "category": "Advisory Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Digital Transformation Strategy",
        "description": "End-to-end transformation planning with ServiceNow platform optimization and governance",
        "category": "Strategic Consulting",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Platform Optimization Consulting",
        "description": "Performance optimization and best practices implementation for maximum business value",
        "category": "Optimization Services",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
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
      "email": "advisory@ifbash.com",
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
        "name": "What are ServiceNow Advisory Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Advisory Services provide strategic consulting, comprehensive platform assessment, digital transformation planning, and optimization recommendations to maximize your ServiceNow investment and business outcomes. Our services include current state analysis, roadmap development, governance framework design, and ongoing strategic guidance."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a ServiceNow strategic assessment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive ServiceNow assessment typically takes 2-4 weeks, including current state analysis, stakeholder interviews, platform evaluation, future state design, and detailed roadmap development with actionable recommendations and implementation timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in ServiceNow advisory consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advisory services include platform assessment, strategic roadmap development, business process optimization, governance framework design, ROI analysis, technical architecture recommendations, performance optimization, and ongoing strategic guidance throughout your ServiceNow transformation journey."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure advisory service success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Success is measured through strategic KPIs including 85% average ROI improvement, 90% strategy success rate, implementation timeline acceleration, user adoption rates, platform utilization metrics, and achievement of defined business objectives outlined in the strategic roadmap."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing advisory support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing strategic advisory support including quarterly reviews, roadmap updates, performance optimization recommendations, governance oversight, and guidance on new ServiceNow capabilities and industry best practices to ensure continued success and value realization."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Advisory Services | Strategic Consulting & Platform Assessment | Expert Guidance | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow advisory services in Hyderabad & globally. Strategic consulting, platform assessment, digital transformation roadmaps, optimization strategies. 85% ROI improvement, 90% success rate. Certified advisors, proven methodologies. Free strategy session."
        />
        <meta 
          name="keywords" 
          content="ServiceNow advisory services, ServiceNow consulting, ServiceNow strategy, platform assessment ServiceNow, digital transformation consulting, ServiceNow roadmap, ServiceNow optimization, strategic consulting Hyderabad, ServiceNow governance, business process consulting, ServiceNow ROI optimization, platform evaluation, transformation strategy"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Strategic Advisors" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Advisory Services | Strategic Consulting Experts | IfBash" />
        <meta property="og:description" content="Leading ServiceNow advisory experts with 200+ strategic engagements. Platform assessments, transformation roadmaps, optimization strategies. 85% ROI improvement, 90% success rate. Certified professionals delivering strategic value globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-advisory-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Advisory Services | Strategic Consulting | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow advisory consulting with 85% ROI improvement, 90% success rate. Strategic assessments, transformation roadmaps by certified advisors." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#7c3aed" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-advisory-services" />
        
        {/* Enhanced Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" as="image" />
        <link rel="preload" href="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" as="image" />
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
      </Head>
      
      {/* Fixed Social Links - Consistent with main page */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a
          href="https://linkedin.com/company/ifbash"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Follow ifBash on LinkedIn"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <Twitter className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
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
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </div>
          <span className="absolute left-14 px-3 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800">
            Watch on YouTube
          </span>
        </a>
      </div>
      
      <div className="min-h-screen bg-background">
        <Header />

        {/* Enhanced Hero Section with Main Page Gradient Theming */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" 
              style={{
                backgroundImage: `url('/images/grid-pattern.svg')`,
                backgroundSize: '30px 30px'
              }}
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Enhanced Trust Indicators with Gradients */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 text-white border-transparent px-4 py-2">
                ✓ ServiceNow Strategic Advisors
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white border-transparent px-4 py-2">
                ✓ 200+ Strategic Engagements
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-transparent px-4 py-2">
                ✓ 90% Success Rate
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Advisory
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-semibold">
                    Services
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Strategic Guidance for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 font-semibold ml-2">
                      Success
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Navigate your ServiceNow journey with expert advisory services. Our certified consultants provide{' '}
                  <span className="font-semibold text-cyan-300">strategic guidance</span>, platform assessments, and transformation roadmaps that maximize ROI and accelerate business outcomes.
                </p>
                
                {/* Enhanced CTA Buttons with Gradients */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #6c28d9 0%, #3b82f6 100%)",
                      boxShadow: "0 20px 40px rgba(109, 40, 217, 0.4)"
                    }}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Strategy Session
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Assessment Guide
                  </Button>
                </div>

                {/* Enhanced Trust Indicators with Gradients */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-600/30 rounded-lg flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-300" />
                    <span className="text-sm">Certified Strategic Advisors</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-cyan-700 via-blue-500 to-violet-400/30 rounded-lg flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-300" />
                    <span className="text-sm">Proven Methodologies</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-gradient-to-r from-blue-700 via-purple-600 to-cyan-500/20 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm">Free Initial Consultation</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Key Metrics with Gradients */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:from-violet-600/30 hover:to-purple-600/30 transition-all duration-300 border border-violet-400/20">
                  <Eye className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">360°</div>
                  <div className="text-violet-200 text-sm">Platform Assessment</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 border border-blue-400/20">
                  <Map className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">90%</div>
                  <div className="text-blue-200 text-sm">Strategy Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:from-cyan-600/30 hover:to-teal-600/30 transition-all duration-300 border border-cyan-400/20">
                  <ChartLine className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">2-4</div>
                  <div className="text-cyan-200 text-sm">Weeks to Roadmap</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:from-green-600/30 hover:to-emerald-600/30 transition-all duration-300 border border-green-400/20">
                  <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-green-200 text-sm">ROI Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What are ServiceNow Advisory Services - Enhanced */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-6 px-4 py-2">
                    Advisory Services Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What are ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                      Advisory Services?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Advisory Services</strong> provide strategic consulting and expert guidance to help organizations maximize their ServiceNow investment through{' '}
                    <span className="text-blue-600 font-semibold">comprehensive platform assessment</span>,{' '}
                    <span className="text-purple-600 font-semibold">digital transformation planning</span>, and optimization strategies.
                  </p>
                  <p className="leading-relaxed">
                    Our certified ServiceNow advisors conduct thorough evaluations of your current state, design future-state architectures, and create actionable roadmaps that align with your business objectives while ensuring optimal{' '}
                    <strong>platform utilization</strong> and <strong>ROI maximization</strong>.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>strategic planning</strong> to <strong>governance frameworks</strong>, we provide end-to-end advisory support that transforms your ServiceNow platform into a strategic business enabler driving innovation and operational excellence.
                  </p>
                </div>
                
                {/* Key Advisory Areas */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Strategic Assessment",
                    "Transformation Roadmap", 
                    "Platform Optimization",
                    "Governance Framework",
                    "ROI Analysis",
                    "Performance Tuning"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl">
                    Explore Our Advisory Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="ServiceNow advisory services dashboard showing strategic planning and platform assessment analytics with ROI metrics"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="eager"
                  width="800"
                  height="600"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm">Strategic Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Services - Enhanced with Gradients */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-6 px-4 py-2">
                Strategic Advisory Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ServiceNow Advisory Services That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Drive Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive advisory services designed to maximize your ServiceNow investment and accelerate business transformation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: "Platform Assessment",
                  description: "Comprehensive evaluation of your current ServiceNow implementation, identifying optimization opportunities and strategic recommendations.",
                  features: ["Current State Analysis", "Performance Evaluation", "Gap Assessment", "ROI Analysis"],
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  icon: Map,
                  title: "Strategic Roadmap Development", 
                  description: "Create detailed transformation roadmaps aligned with business objectives and industry best practices.",
                  features: ["Future State Design", "Implementation Planning", "Priority Mapping", "Timeline Development"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Settings,
                  title: "Platform Optimization",
                  description: "Optimize existing ServiceNow configurations for improved performance, user experience, and business value.",
                  features: ["Performance Tuning", "Workflow Optimization", "User Experience Enhancement", "Integration Improvement"],
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  icon: Shield,
                  title: "Governance & Compliance",
                  description: "Establish governance frameworks and ensure compliance with industry standards and regulations.",
                  features: ["Governance Framework", "Compliance Assessment", "Risk Management", "Policy Development"],
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  icon: Briefcase,
                  title: "Business Process Consulting",
                  description: "Analyze and optimize business processes to leverage ServiceNow capabilities effectively.",
                  features: ["Process Analysis", "Workflow Design", "Automation Opportunities", "Change Management"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  icon: Brain,
                  title: "AI & Innovation Strategy",
                  description: "Develop strategies to leverage ServiceNow's AI capabilities and emerging technologies.",
                  features: ["AI Readiness Assessment", "Innovation Planning", "Technology Roadmap", "Capability Building"],
                  gradient: "from-red-600 to-rose-600"
                }
              ].map((service, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <CardHeader className="pb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Process - Enhanced */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-6 px-4 py-2">
                Our Methodology
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Strategic Advisory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven approach ensures comprehensive assessment and actionable recommendations for ServiceNow success
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Eye,
                  title: "1. Discovery",
                  description: "Comprehensive analysis of current state, business requirements, and strategic objectives.",
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  icon: Target,
                  title: "2. Assessment",
                  description: "Detailed evaluation of platform capabilities, performance, and optimization opportunities.",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Map,
                  title: "3. Strategy",
                  description: "Development of strategic roadmap with prioritized recommendations and implementation plan.",
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  icon: Rocket,
                  title: "4. Execution Support",
                  description: "Ongoing guidance and support throughout strategy implementation and optimization.",
                  gradient: "from-green-600 to-emerald-600"
                }
              ].map((step, index) => (
                <div key={index} className="text-center bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-400" />
                  )}
                  <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact - Enhanced */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 mb-6 px-4 py-2">
                Advisory Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Strategic Results That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Matter
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advisory services deliver measurable business impact and strategic value with proven results
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "85%", label: "ROI Improvement", desc: "Average ROI increase post-advisory", gradient: "from-violet-600 to-purple-600" },
                { metric: "90%", label: "Strategy Success Rate", desc: "Successful roadmap implementation", gradient: "from-blue-600 to-cyan-600" },
                { metric: "60%", label: "Time to Value", desc: "Faster realization of benefits", gradient: "from-cyan-600 to-teal-600" },
                { metric: "95%", label: "Client Satisfaction", desc: "Advisory service satisfaction rate", gradient: "from-green-600 to-emerald-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.metric}</div>
                  <p className="text-gray-700 font-medium mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Case Study Highlight */}
            <div className="mt-16 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 mb-4 px-3 py-1">
                    Success Story
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Fortune 500 Financial Services Transformation
                  </h3>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "IfBash's strategic advisory transformed our ServiceNow approach. Their comprehensive roadmap helped us achieve 75% faster service delivery and $3M in annual savings through optimized workflows and governance."
                  </blockquote>
                  <cite className="text-gray-600 not-italic font-medium mb-4 block">
                    — VP of Digital Transformation, Leading Financial Institution
                  </cite>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Faster Service Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$3M</div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">ROI Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-orange-600 mb-1">6</div>
                    <div className="text-sm text-gray-600">Months Implementation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Advisory Services - Enhanced */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 mb-6 px-4 py-2">
                Why IfBash Advisory
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Strategic ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with experienced ServiceNow advisors who understand both technology and business strategy
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: UserCheck,
                  title: "Certified Strategic Advisors",
                  description: "Our advisory team consists of certified ServiceNow professionals with deep platform expertise and proven track record in strategic consulting across multiple industries and enterprise environments.",
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  icon: BookOpen,
                  title: "Proven Methodologies",
                  description: "Leverage our battle-tested advisory frameworks and methodologies developed through 200+ strategic engagements, ensuring consistent results and accelerated transformation timelines.",
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Globe,
                  title: "Industry Expertise",
                  description: "Deep understanding of industry-specific challenges and regulatory requirements across healthcare, financial services, manufacturing, and government sectors with tailored advisory approaches.",
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  icon: TrendingUp,
                  title: "Future-Ready Strategies",
                  description: "Advisory services focused on long-term success with strategies that adapt to emerging technologies, evolving business models, and changing market conditions for sustained competitive advantage.",
                  gradient: "from-green-600 to-emerald-600"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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
          </div>
        </section>

        {/* Advisory Deliverables - Enhanced */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6 px-4 py-2">
                What You Get
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive Advisory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Deliverables
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed assessments, strategic recommendations, and actionable roadmaps for ServiceNow success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Current State Assessment",
                  description: "Detailed analysis of existing ServiceNow implementation with performance metrics and optimization opportunities.",
                  items: ["Platform Configuration Review", "Performance Analysis", "User Experience Assessment", "Integration Evaluation"],
                  gradient: "from-violet-600 to-purple-600"
                },
                {
                  icon: Map,
                  title: "Strategic Roadmap",
                  description: "Comprehensive transformation plan with prioritized initiatives and implementation timeline.",
                  items: ["Future State Design", "Implementation Phases", "Resource Planning", "Risk Mitigation"],
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: BarChart3,
                  title: "Business Case & ROI",
                  description: "Financial analysis and business justification for recommended ServiceNow investments.",
                  items: ["Cost-Benefit Analysis", "ROI Projections", "Risk Assessment", "Value Realization Plan"],
                  gradient: "from-cyan-600 to-teal-600"
                },
                {
                  icon: Settings,
                  title: "Governance Framework",
                  description: "Structured approach to ServiceNow platform governance and ongoing management.",
                  items: ["Operating Model", "Roles & Responsibilities", "Change Management", "Performance KPIs"],
                  gradient: "from-green-600 to-emerald-600"
                },
                {
                  icon: Layers,
                  title: "Technical Architecture",
                  description: "Optimized platform architecture recommendations for scalability and performance.",
                  items: ["Architecture Blueprint", "Integration Strategy", "Security Framework", "Scalability Plan"],
                  gradient: "from-purple-600 to-pink-600"
                },
                {
                  icon: BookOpen,
                  title: "Implementation Guide",
                  description: "Step-by-step guidance for executing strategic recommendations and best practices.",
                  items: ["Implementation Methodology", "Best Practices", "Success Criteria", "Quality Assurance"],
                  gradient: "from-red-600 to-rose-600"
                }
              ].map((deliverable, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <CardHeader className="pb-4">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${deliverable.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <deliverable.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{deliverable.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {deliverable.description}
                    </p>
                    <div className="space-y-2">
                      {deliverable.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 mb-6 px-4 py-2">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Frequently Asked
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow advisory services
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Advisory Services?",
                  answer: "ServiceNow Advisory Services provide strategic consulting, comprehensive platform assessment, digital transformation planning, and optimization recommendations to maximize your ServiceNow investment and business outcomes. Our services include current state analysis, roadmap development, governance framework design, and ongoing strategic guidance."
                },
                {
                  question: "How long does a ServiceNow strategic assessment take?",
                  answer: "A comprehensive ServiceNow assessment typically takes 2-4 weeks, including current state analysis, stakeholder interviews, platform evaluation, future state design, and detailed roadmap development with actionable recommendations and implementation timeline."
                },
                {
                  question: "What's included in ServiceNow advisory consulting?",
                  answer: "Our advisory services include platform assessment, strategic roadmap development, business process optimization, governance framework design, ROI analysis, technical architecture recommendations, performance optimization, and ongoing strategic guidance throughout your ServiceNow transformation journey."
                },
                {
                  question: "How do you measure advisory service success?",
                  answer: "Success is measured through strategic KPIs including 85% average ROI improvement, 90% strategy success rate, implementation timeline acceleration, user adoption rates, platform utilization metrics, and achievement of defined business objectives outlined in the strategic roadmap."
                },
                {
                  question: "Do you provide ongoing advisory support?",
                  answer: "Yes, we offer ongoing strategic advisory support including quarterly reviews, roadmap updates, performance optimization recommendations, governance oversight, and guidance on new ServiceNow capabilities and industry best practices to ensure continued success and value realization."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" 
              style={{
                backgroundImage: `url('/images/grid-pattern.svg')`,
                backgroundSize: '30px 30px'
              }}
            />
            <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Maximize Your ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                Investment?
              </span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with IfBash for strategic ServiceNow advisory services. Get expert guidance, proven methodologies, and actionable roadmaps for transformation success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-4 text-lg font-semibold shadow-xl w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Session
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-10 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get Assessment Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-8 text-purple-100">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <span className="font-medium">+91-XXXX-XXXXXX</span>
                <span className="text-sm">Strategic Advisory Line</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <span className="font-medium">advisory@ifbash.com</span>
                <span className="text-sm">Direct Advisory Access</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <span className="font-medium">Global Advisory</span>
                <span className="text-sm">Hyderabad, India HQ</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
