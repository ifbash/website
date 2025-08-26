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
  Flag,
  Scale,
  Eye,
  Lock,
  Landmark,
  UserSquare,
  Gavel,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowPublicSectorGovernmentPage() {
  // Enhanced JSON-LD with comprehensive public sector data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Public Sector & Government Solutions - IfBash",
    "alternateName": ["ServiceNow Government", "Public Sector Digital Services", "Government Digital Transformation", "Citizen Services Platform"],
    "description": "Expert ServiceNow public sector and government solutions with citizen services, digital transformation, compliance management, public safety. 180+ government implementations, 50% faster service delivery, certified specialists delivering government excellence globally.",
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
      "ServiceNow Public Sector Solutions",
      "Government Digital Services",
      "Citizen Service Management",
      "Public Safety Operations",
      "Government Compliance Management",
      "Digital Government Transformation",
      "Public Sector IT Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Public Sector Digital Services",
        "description": "Complete digital government platform with citizen services and public sector management",
        "category": "Government Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Citizen Service Management",
        "description": "Unified citizen service delivery with multi-channel support and case management",
        "category": "Citizen Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Government Compliance Platform",
        "description": "Comprehensive compliance management with regulatory tracking and audit support",
        "category": "Compliance Management",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
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
      "email": "publicsector@ifbash.com",
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
        "name": "What are ServiceNow Public Sector & Government Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Public Sector Solutions include citizen service management, digital government transformation, public safety operations, compliance management, and IT service delivery designed specifically for federal, state, and local government agencies."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow improve citizen services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow improves citizen services through unified case management, multi-channel support, self-service portals, automated workflows, and real-time tracking that provides transparent and efficient government service delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can government agencies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Government agencies typically achieve 50% faster service delivery, 40% reduction in processing time, 30% cost savings, and 250% average ROI through ServiceNow public sector solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow meet government security and compliance requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow meets strict government security standards including FedRAMP, FISMA, NIST frameworks, and various international compliance requirements with built-in security controls and audit capabilities."
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
        "name": "Public Sector & Government",
        "item": "https://ifbash.com/industries/public-sector-government"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Public Sector & Government Solutions | Digital Citizen Services | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow public sector and government solutions in Hyderabad & globally. Digital citizen services, government compliance, public safety operations. 180+ government implementations, 50% faster service delivery, 40% cost reduction. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow public sector, government solutions, citizen services, digital government, public sector IT, ServiceNow FedRAMP, government compliance Hyderabad, public safety operations, digital transformation government, citizen case management"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Public Sector Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Public Sector & Government Solutions | Digital Government | IfBash" />
        <meta property="og:description" content="Leading ServiceNow public sector solutions with 180+ implementations. Digital citizen services, government compliance, public safety operations. Certified specialists delivering government excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/public-sector-government" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Public Sector & Government Solutions | Digital Government | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow public sector solutions with 180+ implementations. Digital citizen services, government compliance by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/public-sector-government" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                ✓ Government Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
                ✓ 180+ Government Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ FedRAMP Certified Solutions
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 font-semibold">
                    Public Sector &
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Government{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                  Transform government operations with digital citizen services. Our certified specialists deliver{' '}
                  <span className="font-semibold text-teal-300">secure government solutions</span>, public safety operations, and compliance management that drives transparency, efficiency, and citizen satisfaction.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:via-teal-700 hover:to-blue-700"
                  >
                    <Flag className="mr-2 h-5 w-5" />
                    Transform Government Services
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Government Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <UserSquare className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-gray-900 font-semibold">Citizen Services</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <span className="text-sm text-gray-900 font-semibold">Security & Compliance</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Landmark className="h-5 w-5 text-blue-700" />
                    <span className="text-sm text-gray-900 font-semibold">Digital Government</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-600/25 via-teal-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-emerald-600/35 hover:via-teal-600/30 hover:to-blue-600/25 transition-all duration-300 border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20">
                  <Landmark className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">180+</div>
                  <div className="text-emerald-200 text-sm">Government Projects</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-teal-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-teal-400/20 shadow-xl hover:shadow-teal-500/20">
                  <Clock className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-teal-200 text-sm">Faster Service Delivery</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-blue-200 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <TrendingUp className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">250%</div>
                  <div className="text-indigo-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNMENT CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-blue-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                    Government Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Public Sector
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                      Digital Excellence
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Government agencies face unique challenges: citizen service expectations, regulatory compliance, budget constraints, and security requirements. ServiceNow delivers{' '}
                    <span className="text-emerald-600 font-semibold">secure government solutions</span> that connect citizens, employees, and departments through transparent, efficient, and compliant digital services.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>citizen service management</strong> to{' '}
                    <strong>public safety operations</strong>, our government-specific platforms streamline operations, enhance transparency, and accelerate digital transformation while maintaining strict security and compliance standards.
                  </p>
                  <p className="leading-relaxed">
                    We help government agencies overcome legacy systems, bureaucratic processes, and operational silos through{' '}
                    <span className="text-teal-600 font-semibold">intelligent automation</span> that drives citizen satisfaction and operational excellence.
                  </p>
                </div>
                
                {/* Government Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Citizen Service Delivery",
                    "Regulatory Compliance", 
                    "Data Security & Privacy",
                    "Budget Optimization",
                    "Legacy System Integration",
                    "Transparency & Accountability"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:via-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-emerald-100 via-teal-100 to-blue-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80"
                    alt="Modern government building with digital transformation and citizen service technology"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">180+</div>
                  <div className="text-sm opacity-90">Government Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNMENT SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-emerald-50/50 to-teal-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-blue-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Government Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Public Sector
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  Digital Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to transform government operations, enhance citizen services, and ensure security and compliance across all levels of government
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: UserSquare,
                  title: "Citizen Service Management",
                  description: "Unified citizen service platform with case management, multi-channel support, and self-service portals for transparent government service delivery.",
                  features: ["Case Management", "Multi-channel Support", "Self-service Portals", "Service Tracking"],
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-blue-50"
                },
                {
                  icon: Shield,
                  title: "Government Security Operations",
                  description: "Comprehensive security operations with threat intelligence, incident response, and compliance management for government agencies.",
                  features: ["Threat Intelligence", "Incident Response", "Compliance Management", "Risk Assessment"],
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Landmark,
                  title: "Public Sector Digital Services",
                  description: "Digital government platform with automated workflows, document management, and inter-agency collaboration for efficient operations.",
                  features: ["Automated Workflows", "Document Management", "Inter-agency Collaboration", "Digital Forms"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Scale,
                  title: "Regulatory Compliance Management",
                  description: "Comprehensive compliance platform with audit management, policy tracking, and regulatory reporting for government requirements.",
                  features: ["Audit Management", "Policy Tracking", "Regulatory Reporting", "Compliance Monitoring"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Eye,
                  title: "Public Safety Operations",
                  description: "Integrated public safety platform with emergency management, incident coordination, and resource allocation for safety agencies.",
                  features: ["Emergency Management", "Incident Coordination", "Resource Allocation", "Response Planning"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Building,
                  title: "Government IT Service Management",
                  description: "Complete ITSM platform with asset management, change control, and service delivery optimized for government IT operations.",
                  features: ["Asset Management", "Change Control", "Service Delivery", "Performance Monitoring"],
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
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Government Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Government-Specific Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Lock, name: "FedRAMP Compliance", desc: "Federal security standards", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: Database, name: "Records Management", desc: "Digital records & archives", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                  { icon: Gavel, name: "Legal Case Management", desc: "Court & legal workflows", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Users, name: "Workforce Management", desc: "Employee & contractor services", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" }
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

        {/* GOVERNMENT RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Government Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Public Sector &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  Government Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our government solutions deliver measurable results through digital transformation, citizen service enhancement, and operational efficiency improvements
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "50%", label: "Faster Service Delivery", desc: "Through digital workflows", gradient: "from-emerald-600 to-teal-600", bgGradient: "from-emerald-50 via-teal-50 to-blue-50", icon: Clock },
                { metric: "40%", label: "Reduced Processing Time", desc: "Automated case management", gradient: "from-teal-600 to-blue-600", bgGradient: "from-teal-50 via-blue-50 to-indigo-50", icon: Zap },
                { metric: "30%", label: "Cost Savings", desc: "Operational efficiency gains", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: DollarSign },
                { metric: "250%", label: "Average ROI", desc: "Within 18-24 months", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 border border-emerald-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow transformed our entire citizen service delivery. We achieved 50% faster service processing, reduced case resolution time by 40%, and improved citizen satisfaction scores by 35%. The platform's security and compliance features met all our government requirements while providing transparency and efficiency our citizens deserve."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Maria Gonzalez, Chief Information Officer
                      </cite>
                      <p className="text-gray-600 font-medium">
                        State Government Agency
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
                { title: "Government Agencies", value: "85+", desc: "Federal, state & local served", gradient: "from-emerald-50 to-teal-50" },
                { title: "Citizens Served", value: "2.5M+", desc: "Digital service interactions", gradient: "from-teal-50 to-blue-50" },
                { title: "Compliance Standards", value: "100%", desc: "Security & regulatory adherence", gradient: "from-blue-50 to-indigo-50" }
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
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-blue-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Government
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified government ServiceNow specialists who understand public sector requirements and deliver solutions that enhance citizen services and operational efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Government Industry Expertise",
                  description: "Deep public sector expertise with certified ServiceNow specialists who understand government operations, regulatory compliance, security requirements, and citizen service delivery across federal, state, and local government levels.",
                  gradient: "from-emerald-600 to-teal-600",
                  bgGradient: "from-emerald-50 via-teal-50 to-blue-50"
                },
                {
                  icon: Landmark,
                  title: "180+ Government Implementations",
                  description: "Proven track record with 180+ government implementations across agencies, departments, and municipalities with 50% faster service delivery, 40% processing time reduction, and 250% average ROI achievement through secure and compliant solutions.",
                  gradient: "from-teal-600 to-blue-600",
                  bgGradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Lock,
                  title: "Security & Compliance Excellence",
                  description: "Leading expertise in government security standards including FedRAMP, FISMA, NIST frameworks, and international compliance requirements with built-in security controls, audit capabilities, and data protection that meet the strictest government standards.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: TrendingUp,
                  title: "Citizen-Centric Solutions",
                  description: "Comprehensive citizen service focus from digital service delivery to transparency initiatives, multi-channel support, and accessibility compliance that drives citizen satisfaction, government accountability, and public trust through modern digital experiences.",
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
                { title: "FedRAMP Certified", desc: "Federal security compliance", icon: Shield, gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                { title: "Transparency Focus", desc: "Open government initiatives", icon: Eye, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Multi-Level Government", desc: "Federal, state & local", icon: Building, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Proven ROI", desc: "250% average return", icon: DollarSign, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-emerald-100 to-teal-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Government ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for public sector and government agencies
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Public Sector & Government Solutions?",
                  answer: "ServiceNow Public Sector & Government Solutions include citizen service management, digital government transformation, public safety operations, regulatory compliance management, and IT service delivery designed specifically for federal, state, and local government agencies. These solutions address unique government challenges including citizen service expectations, regulatory compliance, security requirements, and budget constraints through secure, compliant, and transparent digital platforms.",
                  gradient: "from-emerald-50 via-teal-50 to-blue-50"
                },
                {
                  question: "How does ServiceNow improve citizen services and government operations?",
                  answer: "ServiceNow improves citizen services through unified case management, multi-channel support (web, mobile, phone, in-person), self-service portals, automated workflows, and real-time service tracking. For government operations, it provides inter-agency collaboration, document management, automated approvals, and performance analytics that eliminate silos, reduce bureaucracy, and increase transparency and efficiency.",
                  gradient: "from-teal-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "What ROI can government agencies expect from ServiceNow?",
                  answer: "Government agencies typically achieve 50% faster service delivery, 40% reduction in processing time, 30% cost savings, 35% improvement in citizen satisfaction, and 250% average ROI within 18-24 months. Benefits include reduced operational costs, improved service quality, enhanced transparency, better resource allocation, and increased citizen trust through efficient and accessible government services.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "Does ServiceNow meet government security and compliance requirements?",
                  answer: "Yes, ServiceNow meets strict government security standards including FedRAMP (Federal Risk and Authorization Management Program), FISMA (Federal Information Security Management Act), NIST (National Institute of Standards and Technology) frameworks, and various international compliance requirements. The platform includes built-in security controls, audit capabilities, data encryption, access controls, and comprehensive compliance reporting that ensure government data protection and regulatory adherence.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "How does ServiceNow integrate with existing government systems and databases?",
                  answer: "ServiceNow seamlessly integrates with existing government systems including legacy databases, ERP systems, document management systems, identity management platforms, and inter-agency systems through secure APIs, data connectors, and integration platforms. Our approach ensures data consistency, maintains security protocols, and provides unified access while preserving existing investments and meeting interoperability requirements.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What support do you provide for government agencies and public sector training?",
                  answer: "We provide comprehensive government-specific training including citizen service representative workshops, administrator certification programs, security and compliance training, change management support, and ongoing technical assistance. Our approach includes hands-on training for government staff, security briefings for IT teams, executive presentations for leadership, and continuous support to ensure successful adoption and sustained value realization across government operations."
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
                Ready to transform your government operations?
              </p>
              <Button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:via-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Government Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-600/10 via-teal-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-600/10 via-blue-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Digital Government?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Government
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
                Operations Today
              </span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
              Join 180+ government agencies driving digital transformation with ServiceNow. From citizen services to public safety operations, accelerate your government modernization journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:via-teal-700 hover:to-blue-700">
                <Flag className="mr-2 h-5 w-5" />
                Start Government Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Government Guide
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
                <p className="text-teal-200 text-xs">publicsector@ifbash.com</p>
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
