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
  Microscope,
  FlaskConical,
  HeartPulse,
  Pill,
  Stethoscope,
  TestTube,
  Dna,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowPharmaceuticalsBiotechPage() {
  // Enhanced JSON-LD with comprehensive pharma & biotech data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Pharmaceuticals & Biotech Industry Solutions - IfBash",
    "alternateName": ["ServiceNow Life Sciences", "Pharmaceutical Operations", "Biotech Solutions", "Clinical Trial Management"],
    "description": "Expert ServiceNow pharmaceuticals and biotech solutions with clinical trials management, regulatory compliance, drug development lifecycle, patient care operations. 220+ life sciences implementations, 40% faster drug development, certified specialists delivering pharma excellence globally.",
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
      "ServiceNow Pharmaceutical Solutions",
      "Biotech Operations Management",
      "Clinical Trial Management",
      "Regulatory Compliance",
      "Drug Development Lifecycle",
      "Medical Device Management",
      "Patient Care Operations"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Life Sciences Platform",
        "description": "Complete pharmaceutical operations with clinical trials and regulatory compliance",
        "category": "Pharmaceutical Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Clinical Trial Management",
        "description": "End-to-end clinical trial management with patient recruitment and data management",
        "category": "Clinical Operations",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Regulatory Compliance Platform",
        "description": "Comprehensive regulatory compliance with FDA, EMA, and global standards management",
        "category": "Compliance Management",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "160",
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
      "email": "lifesciences@ifbash.com",
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
        "name": "What are ServiceNow Pharmaceuticals & Biotech Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Pharmaceuticals & Biotech Solutions include clinical trial management, regulatory compliance, drug development lifecycle, medical device management, patient care operations, and life sciences manufacturing designed specifically for pharmaceutical and biotech companies."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow accelerate drug development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow accelerates drug development through automated clinical trial workflows, streamlined regulatory submissions, integrated R&D processes, and real-time collaboration that reduces development timelines and improves compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can pharmaceutical companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pharmaceutical companies typically achieve 40% faster drug development cycles, 50% reduction in regulatory compliance time, 35% improvement in clinical trial efficiency, and 300% average ROI through ServiceNow life sciences solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support FDA and global regulatory compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive regulatory compliance support including FDA 21 CFR Part 11, EMA guidelines, GCP, GMP, and other global regulatory standards with built-in validation, audit trails, and compliance reporting."
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
        "name": "Pharmaceuticals & Biotech",
        "item": "https://ifbash.com/industries/pharmaceuticals-biotech"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Pharmaceuticals & Biotech Solutions | Clinical Trials & Life Sciences | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow pharmaceuticals and biotech solutions in Hyderabad & globally. Clinical trials management, regulatory compliance, drug development. 220+ life sciences implementations, 40% faster development, 50% compliance improvement. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow pharmaceuticals, biotech solutions, clinical trials management, regulatory compliance, drug development lifecycle, ServiceNow life sciences, pharmaceutical operations Hyderabad, medical device management, patient care operations, FDA compliance"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Life Sciences Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Pharmaceuticals & Biotech Solutions | Life Sciences Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow pharmaceutical solutions with 220+ implementations. Clinical trials management, regulatory compliance, drug development. Certified specialists delivering life sciences excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/pharmaceuticals-biotech" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Pharmaceuticals & Biotech Solutions | Life Sciences | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow pharmaceutical solutions with 220+ implementations. Clinical trials, regulatory compliance by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/pharmaceuticals-biotech" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ✓ Life Sciences Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 220+ Pharma Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ FDA Compliance Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 font-semibold">
                    Pharmaceuticals
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    & Biotech{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-violet-100 leading-relaxed mb-8 max-w-2xl">
                  Accelerate life-saving therapies with intelligent life sciences platforms. Our certified specialists deliver{' '}
                  <span className="font-semibold text-purple-300">clinical trial excellence</span>, regulatory compliance, and drug development lifecycle management that transforms pharmaceutical operations and patient outcomes.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-violet-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700"
                  >
                    <Pill className="mr-2 h-5 w-5" />
                    Accelerate Drug Development
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Life Sciences Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Microscope className="h-5 w-5 text-violet-600" />
                    <span className="text-sm text-gray-900 font-semibold">Clinical Trials</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Regulatory Compliance</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <HeartPulse className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">Patient Care</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-violet-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <FlaskConical className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">220+</div>
                  <div className="text-violet-200 text-sm">Life Sciences Projects</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-purple-200 text-sm">Faster Development</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <TestTube className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-indigo-200 text-sm">Compliance Improvement</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-cyan-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-cyan-600/30 hover:to-teal-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-blue-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHARMA CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200/50">
                    Life Sciences Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Pharmaceutical
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                      & Biotech Innovation
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Pharmaceutical and biotech companies face complex challenges: lengthy drug development cycles, strict regulatory compliance, clinical trial complexity, and patient safety requirements. ServiceNow delivers{' '}
                    <span className="text-violet-600 font-semibold">integrated life sciences solutions</span> that connect research, clinical operations, manufacturing, and patient care through intelligent workflows and real-time collaboration.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>clinical trial management</strong> to{' '}
                    <strong>regulatory compliance</strong>, our pharmaceutical-specific platforms streamline operations, enhance patient safety, and accelerate time-to-market while maintaining strict quality and compliance standards.
                  </p>
                  <p className="leading-relaxed">
                    We help pharmaceutical companies overcome regulatory complexity, operational silos, and development bottlenecks through{' '}
                    <span className="text-purple-600 font-semibold">AI-powered automation</span> that drives therapeutic innovation and patient outcomes.
                  </p>
                </div>
                
                {/* Pharma Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Drug Development Lifecycle",
                    "Regulatory Compliance", 
                    "Clinical Trial Management",
                    "Patient Safety & Outcomes",
                    "Manufacturing Quality",
                    "Supply Chain Integrity"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-violet-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-violet-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80"
                    alt="Modern pharmaceutical laboratory with advanced research and development technology"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">220+</div>
                  <div className="text-sm opacity-90">Life Sciences Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHARMA SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-violet-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200/50">
                Life Sciences Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Pharmaceutical
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  & Biotech Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to accelerate drug development, ensure regulatory compliance, and optimize the entire pharmaceutical value chain from research to patient care
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Clinical Trial Management",
                  description: "End-to-end clinical trial platform with patient recruitment, protocol management, and data collection for accelerated development.",
                  features: ["Patient Recruitment", "Protocol Management", "Data Collection", "Site Management"],
                  gradient: "from-violet-600 to-purple-600",
                  bgGradient: "from-violet-50 via-purple-50 to-indigo-50"
                },
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  description: "Comprehensive regulatory compliance with FDA, EMA, and global standards management, automated submissions, and audit trails.",
                  features: ["FDA Compliance", "Automated Submissions", "Audit Trails", "Global Standards"],
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: FlaskConical,
                  title: "Drug Development Lifecycle",
                  description: "Integrated R&D platform with discovery workflows, preclinical studies, and development pipeline management for faster innovation.",
                  features: ["Discovery Workflows", "Preclinical Studies", "Pipeline Management", "Innovation Tracking"],
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: Stethoscope,
                  title: "Medical Device Management",
                  description: "Complete medical device lifecycle with design controls, quality management, and post-market surveillance for device companies.",
                  features: ["Design Controls", "Quality Management", "Surveillance", "Lifecycle Management"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  icon: HeartPulse,
                  title: "Patient Care Operations",
                  description: "Patient-centric platform with care coordination, safety monitoring, and outcomes tracking for improved patient experiences.",
                  features: ["Care Coordination", "Safety Monitoring", "Outcomes Tracking", "Patient Portal"],
                  gradient: "from-cyan-600 to-teal-600",
                  bgGradient: "from-cyan-50 via-teal-50 to-green-50"
                },
                {
                  icon: Pill,
                  title: "Manufacturing Operations",
                  description: "GMP-compliant manufacturing platform with batch management, quality control, and supply chain optimization for pharmaceutical production.",
                  features: ["GMP Compliance", "Batch Management", "Quality Control", "Supply Chain"],
                  gradient: "from-teal-600 to-green-600",
                  bgGradient: "from-teal-50 via-green-50 to-emerald-50"
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
                          <CheckCircle className="h-4 w-4 text-violet-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Life Sciences Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced Life Sciences Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Dna, name: "Genomics Research", desc: "Genetic data management", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: TestTube, name: "Laboratory Management", desc: "Sample & test tracking", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Database, name: "Clinical Data", desc: "Patient data analytics", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Brain, name: "AI Drug Discovery", desc: "Machine learning insights", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* PHARMA RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Life Sciences Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Pharmaceutical
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  & Biotech Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our life sciences solutions deliver measurable results through accelerated drug development, regulatory compliance excellence, and improved patient outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Faster Drug Development", desc: "Through streamlined workflows", gradient: "from-violet-600 to-purple-600", bgGradient: "from-violet-50 via-purple-50 to-indigo-50", icon: FlaskConical },
                { metric: "50%", label: "Compliance Improvement", desc: "Automated regulatory processes", gradient: "from-purple-600 to-indigo-600", bgGradient: "from-purple-50 via-indigo-50 to-blue-50", icon: Shield },
                { metric: "35%", label: "Clinical Trial Efficiency", desc: "Enhanced patient recruitment", gradient: "from-indigo-600 to-blue-600", bgGradient: "from-indigo-50 via-blue-50 to-cyan-50", icon: Microscope },
                { metric: "300%", label: "Average ROI", desc: "Within 15-18 months", gradient: "from-blue-600 to-cyan-600", bgGradient: "from-blue-50 via-cyan-50 to-teal-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-violet-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border border-violet-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow revolutionized our drug development process completely. We achieved 40% faster clinical trial initiation, reduced regulatory submission time by 50%, and improved patient recruitment efficiency by 35%. The integrated platform connected our research, clinical, and regulatory teams seamlessly, accelerating our path to market for life-saving therapies."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Dr. Jennifer Liu, VP Clinical Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Pharmaceutical Company
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
                { title: "Pharma Companies", value: "75+", desc: "Biotech & pharmaceutical clients", gradient: "from-violet-50 to-purple-50" },
                { title: "Clinical Trials", value: "500+", desc: "Trials managed successfully", gradient: "from-purple-50 to-indigo-50" },
                { title: "Patient Safety", value: "99.8%", desc: "Adverse event reporting accuracy", gradient: "from-indigo-50 to-blue-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-violet-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-violet-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100 text-violet-700 mb-6 px-4 py-2 border border-violet-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Life Sciences
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified life sciences ServiceNow specialists who understand pharmaceutical challenges and deliver solutions that accelerate innovation and improve patient outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Life Sciences Industry Expertise",
                  description: "Deep pharmaceutical and biotech expertise with certified ServiceNow specialists who understand drug development, regulatory compliance, clinical operations, and manufacturing processes across big pharma, biotech startups, and medical device companies.",
                  gradient: "from-violet-600 to-purple-600",
                  bgGradient: "from-violet-50 via-purple-50 to-indigo-50"
                },
                {
                  icon: FlaskConical,
                  title: "220+ Life Sciences Implementations",
                  description: "Proven track record with 220+ pharmaceutical implementations across drug development, clinical trials, and regulatory compliance with 40% faster development cycles, 50% compliance improvement, and 300% average ROI achievement through comprehensive life sciences solutions.",
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: Shield,
                  title: "Regulatory Compliance Excellence",
                  description: "Leading expertise in FDA 21 CFR Part 11, EMA guidelines, GCP, GMP, and other global regulatory standards with built-in validation, electronic signatures, audit trails, and comprehensive compliance reporting that meet the strictest pharmaceutical requirements.",
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: TrendingUp,
                  title: "Patient-Centric Innovation",
                  description: "Comprehensive patient outcome focus from clinical trial optimization to post-market surveillance, patient safety monitoring, and real-world evidence generation that drives therapeutic innovation, regulatory approval success, and improved patient care outcomes.",
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50"
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
                { title: "FDA Compliance", desc: "21 CFR Part 11 validated", icon: Shield, gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                { title: "Clinical Excellence", desc: "Trial optimization expertise", icon: Microscope, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "GxP Standards", desc: "Good practice compliance", icon: TestTube, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Proven ROI", desc: "300% average return", icon: DollarSign, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-violet-100 to-purple-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Life Sciences ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for pharmaceuticals and biotech industries
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Pharmaceuticals & Biotech Solutions?",
                  answer: "ServiceNow Pharmaceuticals & Biotech Solutions include clinical trial management, regulatory compliance, drug development lifecycle, medical device management, patient care operations, and life sciences manufacturing designed specifically for pharmaceutical and biotech companies. These solutions address unique industry challenges including lengthy development cycles, strict regulatory compliance, clinical trial complexity, and patient safety requirements through integrated platforms that connect research, clinical operations, manufacturing, and patient care.",
                  gradient: "from-violet-50 via-purple-50 to-indigo-50"
                },
                {
                  question: "How does ServiceNow accelerate drug development and clinical trials?",
                  answer: "ServiceNow accelerates drug development through automated clinical trial workflows, streamlined patient recruitment, integrated protocol management, real-time data collection, and regulatory submission automation. Our platform reduces development timelines by eliminating manual processes, improving collaboration between research teams, enabling faster decision-making, and providing real-time visibility into trial progress and regulatory milestones.",
                  gradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  question: "What ROI can pharmaceutical companies expect from ServiceNow?",
                  answer: "Pharmaceutical companies typically achieve 40% faster drug development cycles, 50% reduction in regulatory compliance time, 35% improvement in clinical trial efficiency, 60% faster regulatory submissions, and 300% average ROI within 15-18 months. Benefits include reduced development costs, accelerated time-to-market, improved regulatory success rates, enhanced patient safety, and increased operational efficiency through automated workflows and integrated processes.",
                  gradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  question: "Does ServiceNow support FDA and global regulatory compliance requirements?",
                  answer: "Yes, ServiceNow provides comprehensive regulatory compliance support including FDA 21 CFR Part 11 (electronic signatures and records), EMA guidelines, GCP (Good Clinical Practice), GMP (Good Manufacturing Practice), and other global regulatory standards. Our platform includes built-in validation, electronic signatures, comprehensive audit trails, data integrity controls, and regulatory reporting capabilities that ensure compliance with the strictest pharmaceutical regulations.",
                  gradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  question: "How does ServiceNow integrate with existing pharmaceutical systems and clinical platforms?",
                  answer: "ServiceNow seamlessly integrates with existing pharmaceutical systems including Electronic Data Capture (EDC), Clinical Trial Management Systems (CTMS), Laboratory Information Management Systems (LIMS), Electronic Health Records (EHR), Manufacturing Execution Systems (MES), and regulatory submission platforms through native connectors, APIs, and validated interfaces that maintain data integrity and compliance while enabling unified workflows.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What training and validation support do you provide for pharmaceutical teams?",
                  answer: "We provide comprehensive GxP-compliant training including clinical operations workshops, regulatory affairs training, quality assurance certification, validation documentation, change control procedures, and ongoing technical support. Our approach includes hands-on training for clinical teams, validation support for quality teams, compliance briefings for regulatory staff, and continuous support to ensure successful implementation and sustained compliance across pharmaceutical operations."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-violet-700 mr-2 font-bold">Q:</span>
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
                Ready to accelerate your pharmaceutical operations?
              </p>
              <Button className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Life Sciences Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Transform Life Sciences?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your Pharmaceutical
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Innovation Today
              </span>
            </h2>
            
            <p className="text-xl text-violet-100 mb-10 max-w-3xl mx-auto">
              Join 220+ pharmaceutical and biotech companies driving therapeutic innovation with ServiceNow. From clinical trials to regulatory compliance, accelerate your life sciences transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-violet-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700">
                <Pill className="mr-2 h-5 w-5" />
                Start Life Sciences Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Pharma Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-violet-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-violet-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-purple-200 text-xs">lifesciences@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-indigo-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
