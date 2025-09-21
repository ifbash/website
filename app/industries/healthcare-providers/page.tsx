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
  Heart,
  Stethoscope,
  Hospital,
  Pill,
  TestTube,
  HeartHandshake,
  Monitor,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowHealthcareLifeSciencesPage() {
  // Enhanced JSON-LD with comprehensive healthcare & life sciences data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Healthcare & Life Sciences Solutions - IfBash",
    "alternateName": ["ServiceNow Healthcare", "Life Sciences Solutions", "Healthcare IT Management", "Patient Care Operations"],
    "description": "Expert ServiceNow healthcare and life sciences solutions with patient care operations, clinical workflow automation, medical device management, regulatory compliance. 320+ healthcare implementations, 50% faster patient care, certified specialists delivering healthcare excellence globally.",
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
      "ServiceNow Healthcare Solutions",
      "Life Sciences Management",
      "Patient Care Operations",
      "Clinical Workflow Automation",
      "Medical Device Management",
      "Healthcare IT Operations",
      "Regulatory Compliance Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Healthcare Operations Platform",
        "description": "Complete healthcare operations management with patient care and clinical workflows",
        "category": "Healthcare Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Patient Care Management",
        "description": "End-to-end patient care operations with clinical workflow automation",
        "category": "Patient Care",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Life Sciences Platform",
        "description": "Comprehensive life sciences management with research and compliance support",
        "category": "Life Sciences",
        "availability": "https://schema.org/InStock"
      }
    ],
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
      "email": "healthcare@ifbash.com",
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
        "name": "What are ServiceNow Healthcare & Life Sciences Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Healthcare & Life Sciences Solutions include patient care operations, clinical workflow automation, medical device management, regulatory compliance, healthcare IT operations, and life sciences research management designed specifically for healthcare providers and life sciences organizations."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow improve patient care and clinical operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow improves patient care through automated clinical workflows, seamless EMR integration, real-time patient data access, streamlined care coordination, and intelligent automation that reduces administrative burden and enhances care delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can healthcare organizations expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare organizations typically achieve 50% faster patient care delivery, 40% reduction in administrative tasks, 35% improvement in operational efficiency, and 280% average ROI through ServiceNow healthcare solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support healthcare compliance and data security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive healthcare compliance support including HIPAA, FDA regulations, data security controls, audit trails, and patient privacy protection with built-in security features designed for healthcare environments."
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
        "name": "Healthcare & Life Sciences",
        "item": "https://ifbash.com/industries/healthcare-lifesciences"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Healthcare & Life Sciences Solutions | Patient Care Operations | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow healthcare and life sciences solutions in Hyderabad & globally. Patient care operations, clinical workflow automation, medical device management. 320+ healthcare implementations, 50% faster patient care, 40% administrative reduction. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow healthcare, life sciences solutions, patient care operations, clinical workflow automation, healthcare IT operations, ServiceNow EMR integration, medical device management Hyderabad, healthcare compliance, patient data management, clinical operations"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Healthcare Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Healthcare & Life Sciences Solutions | Patient Care Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow healthcare solutions with 320+ implementations. Patient care operations, clinical workflow automation, medical device management. Certified specialists delivering healthcare excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/healthcare-lifesciences" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Healthcare & Life Sciences Solutions | Patient Care Operations | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow healthcare solutions with 320+ implementations. Patient care operations, clinical workflows by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/healthcare-lifesciences" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-teal-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ Healthcare Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ 320+ Healthcare Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ HIPAA Compliance Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                    Healthcare &
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Life Sciences{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-teal-100 leading-relaxed mb-8 max-w-2xl">
                  Transform patient care with AI-powered healthcare solutions. Our certified specialists deliver{' '}
                  <span className="font-semibold text-cyan-300">clinical workflow automation</span>, seamless EMR integration, and intelligent healthcare operations that enhance patient outcomes and provider experiences.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-teal-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Transform Patient Care
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Healthcare Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Stethoscope className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Patient Care</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Hospital className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm text-gray-900 font-semibold">Clinical Operations</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <TestTube className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Life Sciences</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-600/25 via-cyan-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-cyan-600/30 hover:to-blue-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Hospital className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">320+</div>
                  <div className="text-teal-200 text-sm">Healthcare Projects</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-cyan-200 text-sm">Faster Patient Care</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-blue-200 text-sm">Administrative Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <TrendingUp className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">280%</div>
                  <div className="text-indigo-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEALTHCARE CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-teal-50/30 to-cyan-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 text-teal-700 mb-6 px-4 py-2 border border-teal-200/50">
                    Healthcare Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Healthcare &
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                      Life Sciences Innovation
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Healthcare and life sciences organizations face complex challenges: patient care coordination, regulatory compliance, operational efficiency, and data security. ServiceNow delivers{' '}
                    <span className="text-teal-600 font-semibold">unified healthcare solutions</span> that connect clinical, administrative, and IT operations through intelligent workflows and AI-powered insights.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>patient care operations</strong> to{' '}
                    <strong>clinical workflow automation</strong>, our healthcare-specific platforms streamline operations, enhance patient experiences, and accelerate digital transformation while maintaining HIPAA compliance and data security standards.
                  </p>
                  <p className="leading-relaxed">
                    We help healthcare organizations overcome legacy systems, operational silos, and compliance challenges through{' '}
                    <span className="text-cyan-600 font-semibold">AI-driven automation</span> that drives patient satisfaction and operational excellence.
                  </p>
                </div>
                
                {/* Healthcare Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Patient Care Coordination",
                    "Clinical Workflow Efficiency", 
                    "Regulatory Compliance",
                    "Data Security & Privacy",
                    "Operational Optimization",
                    "Provider Experience"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-teal-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Modern healthcare facility with digital technology and patient care operations"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">320+</div>
                  <div className="text-sm opacity-90">Healthcare Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEALTHCARE SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-teal-50/50 to-cyan-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 text-teal-700 mb-6 px-4 py-2 border border-teal-200/50">
                Healthcare Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Healthcare &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Life Sciences Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to transform healthcare operations, enhance patient care, and optimize the entire healthcare value chain from clinical to administrative operations
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Patient Care Operations",
                  description: "Comprehensive patient care platform with care coordination, patient services, appointment management, and real-time care delivery optimization.",
                  features: ["Care Coordination", "Patient Services", "Appointment Management", "Care Delivery"],
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  icon: Stethoscope,
                  title: "Clinical Workflow Automation",
                  description: "Automated clinical workflows with EMR integration, clinical decision support, and streamlined provider workflows for enhanced care efficiency.",
                  features: ["EMR Integration", "Clinical Decision Support", "Provider Workflows", "Care Protocols"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Hospital,
                  title: "Healthcare IT Operations",
                  description: "Comprehensive healthcare IT management with medical device management, system monitoring, and infrastructure optimization for operational excellence.",
                  features: ["Medical Device Management", "System Monitoring", "Infrastructure Optimization", "IT Service Management"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Shield,
                  title: "Healthcare Compliance Management",
                  description: "End-to-end compliance platform with HIPAA management, regulatory reporting, audit trails, and data privacy controls for healthcare organizations.",
                  features: ["HIPAA Compliance", "Regulatory Reporting", "Audit Trails", "Data Privacy"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: TestTube,
                  title: "Life Sciences Research",
                  description: "Integrated research platform with clinical trials management, research collaboration, and regulatory compliance for life sciences organizations.",
                  features: ["Clinical Trials", "Research Collaboration", "Data Management", "Regulatory Support"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: HeartHandshake,
                  title: "Provider Experience Management",
                  description: "Comprehensive provider experience platform with staff onboarding, credentialing, training management, and workforce optimization.",
                  features: ["Staff Onboarding", "Credentialing", "Training Management", "Workforce Optimization"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
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
                          <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Healthcare Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced Healthcare Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Monitor, name: "Telehealth Integration", desc: "Remote care capabilities", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Database, name: "Health Data Analytics", desc: "Patient insights & reporting", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Brain, name: "AI-Powered Insights", desc: "Predictive care analytics", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Pill, name: "Medication Management", desc: "Prescription & pharmacy", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* HEALTHCARE RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Healthcare Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Healthcare &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Life Sciences Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our healthcare solutions deliver measurable results through clinical workflow optimization, operational efficiency improvements, and enhanced patient care delivery
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Faster Patient Care", desc: "Through workflow automation", gradient: "from-teal-600 to-cyan-600", bgGradient: "from-teal-50 via-cyan-50 to-blue-50", icon: Heart },
                { metric: "40%", label: "Administrative Reduction", desc: "Streamlined operations", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Zap },
                { metric: "35%", label: "Operational Efficiency", desc: "Enhanced care delivery", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Hospital },
                { metric: "280%", label: "Average ROI", desc: "Within 12-18 months", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12 border border-teal-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow transformed our entire healthcare operation. We achieved 50% faster patient care delivery through automated workflows, reduced administrative burden by 40%, and improved operational efficiency by 35%. The seamless EMR integration and AI-powered insights have revolutionized how we deliver patient care while maintaining HIPAA compliance."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Dr. James Wilson, Chief Medical Officer
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Regional Healthcare System
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
                { title: "Healthcare Providers", value: "150+", desc: "Hospitals & health systems", gradient: "from-teal-50 to-cyan-50" },
                { title: "Patients Served", value: "5M+", desc: "Enhanced care experiences", gradient: "from-cyan-50 to-blue-50" },
                { title: "Clinical Workflows", value: "1,200+", desc: "Automated processes", gradient: "from-blue-50 to-indigo-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 text-teal-700 mb-6 px-4 py-2 border border-teal-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Healthcare
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified healthcare ServiceNow specialists who understand patient care requirements and deliver solutions that enhance clinical outcomes and operational efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Healthcare Industry Expertise",
                  description: "Deep healthcare and life sciences expertise with certified ServiceNow specialists who understand patient care workflows, clinical operations, regulatory compliance, and healthcare IT requirements across hospitals, health systems, and life sciences organizations.",
                  gradient: "from-teal-600 to-cyan-600",
                  bgGradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  icon: Hospital,
                  title: "320+ Healthcare Implementations",
                  description: "Proven track record with 320+ healthcare implementations across hospitals, health systems, and life sciences companies with 50% faster patient care, 40% administrative reduction, and 280% average ROI achievement through comprehensive healthcare solutions.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Shield,
                  title: "HIPAA Compliance Excellence",
                  description: "Leading expertise in healthcare compliance including HIPAA, FDA regulations, data security controls, patient privacy protection, and audit trails with built-in security features designed specifically for healthcare environments and regulatory requirements.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: TrendingUp,
                  title: "Patient-Centric Innovation",
                  description: "Comprehensive patient care focus from clinical workflow optimization to provider experience enhancement, patient satisfaction improvement, and care delivery excellence that drives better health outcomes, operational efficiency, and sustainable healthcare transformation.",
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
                { title: "EMR Integration", desc: "Epic, Oracle Health & more", icon: Monitor, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Patient Safety", desc: "Quality & compliance first", icon: Heart, gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                { title: "Clinical Excellence", desc: "Care workflow expertise", icon: Stethoscope, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Proven ROI", desc: "280% average return", icon: DollarSign, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-teal-50/30 to-cyan-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-teal-100 to-cyan-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Healthcare ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for healthcare and life sciences industries
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Healthcare & Life Sciences Solutions?",
                  answer: "ServiceNow Healthcare & Life Sciences Solutions include patient care operations, clinical workflow automation, medical device management, regulatory compliance, healthcare IT operations, and life sciences research management designed specifically for healthcare providers and life sciences organizations. These solutions address unique healthcare challenges including patient care coordination, regulatory compliance, operational efficiency, and data security through integrated platforms that connect clinical, administrative, and IT operations.",
                  gradient: "from-teal-50 via-cyan-50 to-blue-50"
                },
                {
                  question: "How does ServiceNow improve patient care and clinical operations?",
                  answer: "ServiceNow improves patient care through automated clinical workflows, seamless EMR integration (Epic, Oracle Health), real-time patient data access, streamlined care coordination, intelligent scheduling, and AI-powered insights that reduce administrative burden and enhance care delivery. Our platform eliminates silos between departments, automates routine tasks, and provides clinicians with unified access to patient information at the point of care.",
                  gradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "What ROI can healthcare organizations expect from ServiceNow?",
                  answer: "Healthcare organizations typically achieve 50% faster patient care delivery, 40% reduction in administrative tasks, 35% improvement in operational efficiency, 25% increase in provider satisfaction, and 280% average ROI within 12-18 months. Benefits include reduced costs, improved patient outcomes, enhanced provider experiences, better compliance, and increased operational efficiency through automated workflows and integrated systems.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "Does ServiceNow support healthcare compliance and data security requirements?",
                  answer: "Yes, ServiceNow provides comprehensive healthcare compliance support including HIPAA compliance, FDA regulations, data security controls, patient privacy protection, comprehensive audit trails, and role-based access controls. Our platform includes built-in security features, encryption, data governance, and compliance reporting capabilities designed specifically for healthcare environments and regulatory requirements.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "How does ServiceNow integrate with existing healthcare systems and EMRs?",
                  answer: "ServiceNow seamlessly integrates with existing healthcare ecosystems including Electronic Medical Records (EMR) like Epic and Oracle Health, healthcare information systems, medical devices, laboratory systems, and administrative platforms through native connectors, HL7 standards, FHIR APIs, and real-time data synchronization that enables unified workflows and comprehensive visibility across the entire healthcare technology infrastructure.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What training and support do you provide for healthcare teams?",
                  answer: "We provide comprehensive healthcare-specific training including clinical staff workshops, IT administrator certification, compliance training, EMR integration support, and change management assistance. Our approach includes hands-on training for care teams, technical training for IT staff, executive briefings for leadership, HIPAA compliance education, and ongoing support to ensure successful adoption and sustained value realization across healthcare operations."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-teal-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-cyan-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to transform your healthcare operations?
              </p>
              <Button className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Healthcare Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-teal-600/10 via-cyan-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Healthcare Excellence?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                Operations Today
              </span>
            </h2>
            
            <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
              Join 320+ healthcare and life sciences organizations driving patient care innovation with ServiceNow. From clinical workflows to operational excellence, accelerate your healthcare transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-teal-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700">
                <Heart className="mr-2 h-5 w-5" />
                Start Healthcare Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Healthcare Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-teal-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-teal-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-cyan-200 text-xs">healthcare@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-blue-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
