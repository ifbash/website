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
  MapPin,
  Briefcase,
  Settings,
  BookOpen,
  PieChart,
  LineChart,
  BarChart,
  Activity,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowAdvisoryServicesPage() {
  // Enhanced JSON-LD with comprehensive advisory services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Advisory Services - IfBash",
    "alternateName": ["ServiceNow Strategic Consulting", "Enterprise Advisory Services", "ServiceNow Business Transformation"],
    "description": "Expert ServiceNow advisory services with strategic consulting, platform assessment, digital transformation roadmaps. 500+ successful advisory engagements, certified experts delivering strategic guidance globally.",
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
      "Digital Transformation Roadmap",
      "Business Process Optimization",
      "ServiceNow Health Check",
      "ROI Analysis & Planning"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "ServiceNow Platform Assessment",
        "description": "Comprehensive platform health check and optimization recommendations",
        "category": "Advisory Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Digital Transformation Strategy",
        "description": "Strategic roadmap and implementation planning for ServiceNow transformation",
        "category": "Strategic Consulting",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Business Process Optimization",
        "description": "Process analysis and optimization using ServiceNow best practices",
        "category": "Process Consulting",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
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
          "text": "ServiceNow Advisory Services provide strategic consulting and guidance to help organizations maximize their ServiceNow investment. This includes platform assessments, digital transformation roadmaps, process optimization, and strategic planning to drive business value and operational excellence."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does a ServiceNow assessment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive ServiceNow platform assessment typically takes 2-4 weeks, depending on the scope and complexity. This includes current state analysis, gap identification, recommendations report, and strategic roadmap development."
        }
      },
      {
        "@type": "Question",
        "name": "What deliverables do I get from advisory services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advisory engagements deliver comprehensive reports including current state assessment, gap analysis, strategic roadmap, ROI projections, implementation recommendations, best practices guide, and ongoing optimization strategies tailored to your business objectives."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing advisory support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing advisory support including quarterly health checks, strategic reviews, performance optimization, roadmap updates, and continuous improvement recommendations to ensure sustained value from your ServiceNow investment."
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
        "name": "ServiceNow Advisory Services",
        "item": "https://ifbash.com/servicenow-advisory-services"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Advisory Services | Strategic Consulting & Platform Assessment | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow advisory services in Hyderabad & globally. Strategic consulting, platform assessment, digital transformation roadmap. 500+ successful engagements, certified advisors delivering strategic guidance. Free consultation."
        />
        <meta 
          name="keywords" 
          content="ServiceNow advisory services, ServiceNow consulting, platform assessment, digital transformation strategy, ServiceNow health check, business process optimization, ServiceNow roadmap, strategic consulting Hyderabad, ServiceNow best practices, enterprise consulting"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Advisory Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Advisory Services | Strategic Consulting Experts | IfBash" />
        <meta property="og:description" content="Leading ServiceNow advisory services with 500+ successful engagements. Strategic consulting, platform assessment, transformation roadmaps. Certified advisors delivering strategic guidance globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-advisory-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Advisory Services | Strategic Consulting | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow advisory services with strategic consulting, platform assessment & transformation roadmaps by certified advisors." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-advisory-services" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/15 to-violet-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ Strategic Advisory Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 500+ Advisory Engagements
              </Badge>
              <Badge className="bg-gradient-to-r from-violet-500 via-purple-600 to-pink-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ✓ Certified ServiceNow Advisors
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Advisory
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 font-semibold">
                    Services
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Strategic{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8 max-w-2xl">
                  Maximize your ServiceNow investment with expert advisory services. Our certified consultants deliver{' '}
                  <span className="font-semibold text-purple-300">strategic roadmaps</span>, platform assessments, and transformation guidance that drives measurable business value.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700"
                  >
                    <Briefcase className="mr-2 h-5 w-5" />
                    Get Strategic Assessment
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Case Studies
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Strategic Expertise</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Proven Methodologies</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <TrendingUp className="h-5 w-5 text-violet-700" />
                    <span className="text-sm text-gray-900 font-semibold">Business Value Focus</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Briefcase className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-indigo-200 text-sm">Advisory Engagements</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-pink-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">250%</div>
                  <div className="text-purple-200 text-sm">Average ROI Increase</div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <Clock className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">2-4</div>
                  <div className="text-violet-200 text-sm">Weeks to Insights</div>
                </div>
                <div className="bg-gradient-to-br from-pink-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-pink-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-pink-400/20 shadow-xl hover:shadow-pink-500/20">
                  <Users className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-pink-200 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ARE ADVISORY SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                    Strategic Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What are ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                      Advisory Services?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Advisory Services</strong> provide strategic consulting and expert guidance to help organizations maximize their ServiceNow investment and achieve{' '}
                    <span className="text-indigo-600 font-semibold">transformational business outcomes</span> through{' '}
                    <span className="text-purple-600 font-semibold">data-driven insights</span> and proven methodologies.
                  </p>
                  <p className="leading-relaxed">
                    Our certified advisors conduct comprehensive platform assessments, develop strategic roadmaps, and provide ongoing guidance across{' '}
                    <strong>digital transformation strategy</strong>,{' '}
                    <strong>process optimization</strong>, and{' '}
                    <strong>organizational change management</strong>.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>platform health checks</strong> to strategic planning, we deliver actionable recommendations that drive operational efficiency, user adoption, and measurable ROI for enterprises worldwide.
                  </p>
                </div>
                
                {/* Key Services */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Platform Assessment",
                    "Strategic Roadmapping", 
                    "Process Optimization",
                    "ROI Analysis",
                    "Health Check Audits",
                    "Best Practices Guidance"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-indigo-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    Explore Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-violet-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow advisory services strategic consulting dashboard showcasing business analytics and transformation roadmaps"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Strategic Assessments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADVISORY SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Advisory Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Strategic Advisory Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  That Drive Value
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive advisory services designed to unlock the full potential of your ServiceNow platform through strategic guidance and proven methodologies
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Platform Assessment & Health Check",
                  description: "Comprehensive evaluation of your current ServiceNow implementation with detailed analysis of configuration, performance, and optimization opportunities.",
                  features: ["Current State Analysis", "Performance Benchmarking", "Security Assessment", "Optimization Recommendations"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: MapPin,
                  title: "Digital Transformation Roadmap",
                  description: "Strategic planning and roadmap development to guide your ServiceNow journey with clear milestones, priorities, and business value alignment.",
                  features: ["Strategic Planning", "Roadmap Development", "Priority Setting", "Success Metrics Definition"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-indigo-50"
                },
                {
                  icon: Settings,
                  title: "Business Process Optimization",
                  description: "Analysis and redesign of business processes to maximize efficiency, reduce complexity, and align with ServiceNow best practices.",
                  features: ["Process Analysis", "Workflow Optimization", "Best Practices Implementation", "Efficiency Improvements"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-purple-50"
                },
                {
                  icon: PieChart,
                  title: "ROI Analysis & Business Case",
                  description: "Detailed financial analysis and business case development to quantify ServiceNow value and justify investment decisions.",
                  features: ["ROI Modeling", "Cost-Benefit Analysis", "Business Case Development", "Value Realization Planning"],
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  icon: BookOpen,
                  title: "Governance & Best Practices",
                  description: "Establishment of governance frameworks, standards, and best practices to ensure sustainable ServiceNow operations and growth.",
                  features: ["Governance Framework", "Standards Development", "Best Practices Guide", "Change Management"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Activity,
                  title: "Performance Optimization",
                  description: "Ongoing performance monitoring, optimization recommendations, and continuous improvement strategies for sustained value delivery.",
                  features: ["Performance Monitoring", "Optimization Strategies", "Continuous Improvement", "Success Tracking"],
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
                          <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Advisory Areas */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Specialized Advisory Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Shield, name: "Security & Compliance", desc: "Security assessment & compliance", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: Users, name: "Change Management", desc: "Organizational transformation", gradient: "from-blue-50 to-indigo-50", iconColor: "text-blue-600" },
                  { icon: BarChart, name: "Analytics & Reporting", desc: "Data-driven insights", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Workflow, name: "Integration Strategy", desc: "System integration planning", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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

        {/* RESULTS & VALUE SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Proven Value & Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable Advisory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our advisory services deliver quantifiable business value through strategic insights, optimization recommendations, and transformation guidance
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "250%", label: "Average ROI Increase", desc: "Through strategic optimization", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: TrendingUp },
                { metric: "65%", label: "Process Efficiency Gain", desc: "Via process optimization", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-pink-50", icon: Activity },
                { metric: "2-4", label: "Weeks to Insights", desc: "Rapid assessment delivery", gradient: "from-violet-600 to-pink-600", bgGradient: "from-violet-50 via-pink-50 to-rose-50", icon: Clock },
                { metric: "98%", label: "Client Satisfaction", desc: "Exceeding expectations", gradient: "from-pink-600 to-rose-600", bgGradient: "from-pink-50 via-rose-50 to-red-50", icon: Star }
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
            <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's advisory services transformed our ServiceNow strategy completely. Their comprehensive assessment revealed optimization opportunities worth $1.8M in annual savings, and their roadmap helped us increase platform adoption by 75% within 6 months. The strategic guidance was invaluable."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Michael Rodriguez, VP of IT
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Financial Services Company
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
                { title: "Advisory Engagements", value: "500+", desc: "Successful strategic consultations", gradient: "from-indigo-50 to-purple-50" },
                { title: "Client Retention Rate", value: "96%", desc: "Long-term advisory partnerships", gradient: "from-purple-50 to-violet-50" },
                { title: "Average Value Realization", value: "$2.1M", desc: "Annual savings identified", gradient: "from-violet-50 to-pink-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 via-indigo-100 to-violet-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Strategic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Advisory Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow advisors who deliver strategic insights, proven methodologies, and measurable business value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Certified Strategic Advisors",
                  description: "Our team includes ServiceNow certified strategic portfolio advisors with deep expertise in digital transformation, process optimization, and business value realization across multiple industries.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Target,
                  title: "500+ Advisory Engagements",
                  description: "Proven track record of successful strategic consulting engagements with Fortune 500 companies, delivering measurable outcomes and transformation guidance across all ServiceNow modules.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Shield,
                  title: "Industry-Specific Expertise",
                  description: "Deep domain knowledge across healthcare, financial services, manufacturing, and technology sectors with proven frameworks for regulatory compliance and industry best practices.",
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: TrendingUp,
                  title: "Value-Driven Approach",
                  description: "Focus on measurable business outcomes with clear ROI tracking, performance metrics, and value realization strategies that align with your organizational objectives and strategic goals.",
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
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
                { title: "Rapid Insights", desc: "2-4 weeks to actionable recommendations", icon: Zap, gradient: "from-yellow-50 to-orange-50", iconColor: "text-yellow-600" },
                { title: "Proven Methodologies", desc: "Industry-tested frameworks", icon: BookOpen, gradient: "from-blue-50 to-indigo-50", iconColor: "text-blue-600" },
                { title: "Ongoing Partnership", desc: "Continuous advisory support", icon: Users, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "ROI Guarantee", desc: "Value-backed engagements", icon: DollarSign, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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

        {/* ADVISORY PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 text-indigo-700 mb-6 px-4 py-2 border border-indigo-200/50">
                Our Advisory Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Advisory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic advisory approach ensures strategic insights, actionable recommendations, and measurable business value through proven methodologies
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. Current State Assessment",
                  description: "Comprehensive evaluation of your ServiceNow platform, processes, and organizational readiness with detailed analysis and benchmarking.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: MapPin,
                  title: "2. Strategic Planning",
                  description: "Development of strategic roadmap with clear priorities, milestones, and business value alignment based on your organizational objectives.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Lightbulb,
                  title: "3. Recommendations & Roadmap",
                  description: "Detailed recommendations with implementation roadmap, resource requirements, and success metrics for optimal value realization.",
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: TrendingUp,
                  title: "4. Implementation Support",
                  description: "Ongoing advisory support during implementation with progress tracking, optimization recommendations, and course corrections as needed.",
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-400" />
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
            
            {/* Advisory Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical Advisory Engagement Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Week 1", activity: "Kickoff & Discovery", deliverable: "Engagement Plan", gradient: "from-indigo-50 to-purple-50" },
                  { phase: "Weeks 2-3", activity: "Assessment & Analysis", deliverable: "Current State Report", gradient: "from-purple-50 to-violet-50" },
                  { phase: "Week 4", activity: "Strategy & Planning", deliverable: "Strategic Roadmap", gradient: "from-violet-50 to-pink-50" },
                  { phase: "Ongoing", activity: "Support & Optimization", deliverable: "Continuous Guidance", gradient: "from-pink-50 to-rose-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-indigo-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-indigo-100 to-purple-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Advisory Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow advisory services and strategic consulting
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Advisory Services?",
                  answer: "ServiceNow Advisory Services provide strategic consulting and expert guidance to help organizations maximize their ServiceNow investment. This includes comprehensive platform assessments, digital transformation roadmaps, process optimization, ROI analysis, and ongoing strategic support to drive business value and operational excellence through proven methodologies and best practices.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "How long does a ServiceNow platform assessment take?",
                  answer: "A comprehensive ServiceNow platform assessment typically takes 2-4 weeks, depending on the scope and complexity of your implementation. This includes current state analysis, performance evaluation, security assessment, process review, and development of detailed recommendations with a strategic roadmap for optimization and growth.",
                  gradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  question: "What deliverables do I receive from advisory services?",
                  answer: "Advisory engagements deliver comprehensive reports including current state assessment, gap analysis, strategic roadmap with priorities and timelines, ROI projections, implementation recommendations, best practices guide, governance framework, and ongoing optimization strategies tailored to your specific business objectives and organizational needs.",
                  gradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  question: "Do you provide ongoing advisory support after the initial engagement?",
                  answer: "Yes, we offer ongoing advisory support including quarterly health checks, strategic reviews, performance optimization recommendations, roadmap updates, change management guidance, and continuous improvement strategies. Our ongoing partnership ensures sustained value realization and helps you adapt to evolving business needs and ServiceNow platform capabilities.",
                  gradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  question: "What ROI can I expect from advisory services?",
                  answer: "Organizations typically see 200-300% ROI from strategic advisory services through identified cost savings, process optimizations, performance improvements, and strategic guidance. Our assessments often uncover $1-3M in annual savings opportunities, while strategic roadmaps help organizations achieve 40-60% faster time-to-value on new initiatives and platform enhancements.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "How do advisory services differ from implementation services?",
                  answer: "Advisory services focus on strategic guidance, assessment, and planning rather than hands-on implementation. While implementation services execute specific projects, advisory services provide strategic direction, optimize existing implementations, develop roadmaps, and ensure alignment with business objectives. Many organizations use advisory services before, during, and after implementation projects for maximum value.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-indigo-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-purple-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to discuss your ServiceNow advisory needs?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Advisory Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-violet-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Strategic Guidance?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Expert ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                Advisory Services
              </span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Partner with 500+ organizations that have unlocked strategic value with our ServiceNow advisory expertise. Get your comprehensive platform assessment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700">
                <Briefcase className="mr-2 h-5 w-5" />
                Get Strategic Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Advisory Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-indigo-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-purple-200 text-xs">advisory@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-violet-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                <p className="text-white text-sm">Book Consultation</p>
                <p className="text-violet-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
