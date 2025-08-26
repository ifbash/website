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
  Code,
  Cpu,
  Monitor,
  Server,
  GitBranch,
  Bug,
  CloudCog,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowTechnologySoftwarePage() {
  // Enhanced JSON-LD with comprehensive technology industry data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Technology & Software Industry Solutions - IfBash",
    "alternateName": ["ServiceNow Technology", "Software Industry Solutions", "IT Operations Management", "DevOps Automation"],
    "description": "Expert ServiceNow technology and software industry solutions with DevOps automation, IT operations management, product lifecycle, AI-powered development. 400+ technology implementations, 45% faster delivery, certified specialists delivering software excellence globally.",
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
      "ServiceNow Technology Solutions",
      "DevOps Automation",
      "IT Operations Management",
      "Software Development Lifecycle",
      "AI-Powered Development",
      "Technology Service Management",
      "Product Lifecycle Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "DevOps Platform",
        "description": "Complete DevOps automation with CI/CD pipelines and release management",
        "category": "Technology Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "IT Operations Management",
        "description": "AI-powered IT operations with predictive analytics and automated remediation",
        "category": "IT Operations",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Software Lifecycle Platform",
        "description": "End-to-end software development lifecycle management with agile delivery",
        "category": "Software Development",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "220",
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
      "email": "technology@ifbash.com",
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
        "name": "What are ServiceNow Technology & Software Industry Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Technology & Software Solutions include DevOps automation, IT operations management, software development lifecycle, AI-powered development tools, product lifecycle management, and technology service management designed specifically for technology and software companies."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow accelerate software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow accelerates software development through automated CI/CD pipelines, integrated testing, release management, agile project management, and AI-assisted coding that reduces manual tasks and improves delivery speed and quality."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can technology companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technology companies typically achieve 45% faster software delivery, 50% reduction in deployment issues, 35% improvement in developer productivity, and 320% average ROI through ServiceNow technology solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support DevOps and agile methodologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive DevOps support including CI/CD automation, agile project management, sprint planning, release orchestration, and integrated toolchain management that streamlines the entire software development lifecycle."
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
        "name": "Technology & Software",
        "item": "https://ifbash.com/industries/technology-software"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Technology & Software Industry Solutions | DevOps & IT Operations | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow technology and software solutions in Hyderabad & globally. DevOps automation, IT operations management, software lifecycle. 400+ technology implementations, 45% faster delivery, 50% fewer deployment issues. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow technology, software industry, DevOps automation, IT operations management, software development lifecycle, ServiceNow ITSM, technology service management Hyderabad, AI development tools, product lifecycle management, agile delivery"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Technology Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Technology & Software Solutions | DevOps Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow technology solutions with 400+ implementations. DevOps automation, IT operations management, software development. Certified specialists delivering technology excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/technology-software" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Technology & Software Solutions | DevOps Operations | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow technology solutions with 400+ implementations. DevOps automation, IT operations by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/technology-software" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80" as="image" />
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
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                ✓ Technology Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ 400+ Technology Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 via-purple-600 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ DevOps Automation Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                    Technology &
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Software{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed mb-8 max-w-2xl">
                  Accelerate software innovation with AI-powered development platforms. Our certified specialists deliver{' '}
                  <span className="font-semibold text-blue-300">DevOps automation</span>, IT operations excellence, and intelligent development workflows that transform software delivery and operational efficiency.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700"
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Accelerate Development
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Technology Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <GitBranch className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm text-gray-900 font-semibold">DevOps</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Server className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">IT Operations</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Brain className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">AI Development</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-cyan-600/35 hover:via-blue-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-cyan-400/20 shadow-xl hover:shadow-cyan-500/20">
                  <Code className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400+</div>
                  <div className="text-cyan-200 text-sm">Technology Projects</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Rocket className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">45%</div>
                  <div className="text-blue-200 text-sm">Faster Delivery</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Bug className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-indigo-200 text-sm">Fewer Deployment Issues</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-pink-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">320%</div>
                  <div className="text-purple-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                    Technology Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Technology &
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                      Software Innovation
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Technology and software companies face unique challenges: rapid development cycles, complex IT operations, security compliance, and scalability demands. ServiceNow delivers{' '}
                    <span className="text-cyan-600 font-semibold">integrated technology solutions</span> that connect development, operations, and business processes through intelligent automation and AI-powered insights.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>DevOps automation</strong> to{' '}
                    <strong>IT operations management</strong>, our technology-specific platforms streamline software delivery, enhance operational efficiency, and accelerate innovation while maintaining security and compliance standards.
                  </p>
                  <p className="leading-relaxed">
                    We help technology companies overcome development bottlenecks, operational silos, and deployment challenges through{' '}
                    <span className="text-blue-600 font-semibold">AI-driven automation</span> that drives faster time-to-market and sustainable competitive advantage.
                  </p>
                </div>
                
                {/* Technology Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Development Velocity",
                    "IT Operations Complexity", 
                    "Security & Compliance",
                    "Scalability Management",
                    "DevOps Integration",
                    "Product Lifecycle"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-cyan-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
                    alt="Modern technology workspace with AI-powered development and DevOps automation"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">400+</div>
                  <div className="text-sm opacity-90">Tech Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-cyan-50/50 to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 text-cyan-700 mb-6 px-4 py-2 border border-cyan-200/50">
                Technology Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Technology &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Software Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to accelerate software development, optimize IT operations, and drive technology innovation through AI-powered automation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GitBranch,
                  title: "DevOps Automation",
                  description: "End-to-end DevOps platform with CI/CD automation, release management, and deployment orchestration for faster software delivery.",
                  features: ["CI/CD Pipelines", "Release Management", "Deployment Automation", "Quality Gates"],
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Server,
                  title: "IT Operations Management",
                  description: "AI-powered IT operations with AIOps, incident management, and automated remediation for proactive infrastructure management.",
                  features: ["AIOps Analytics", "Incident Management", "Automated Remediation", "Performance Monitoring"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Code,
                  title: "Software Development Lifecycle",
                  description: "Comprehensive SDLC management with agile planning, development tracking, and integrated testing for efficient software delivery.",
                  features: ["Agile Planning", "Development Tracking", "Test Management", "Code Quality"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Brain,
                  title: "AI-Powered Development",
                  description: "Intelligent development tools with AI-assisted coding, automated testing, and smart deployment recommendations for enhanced productivity.",
                  features: ["AI Code Assistance", "Automated Testing", "Smart Deployments", "Predictive Analytics"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Shield,
                  title: "Security Operations",
                  description: "Integrated security operations with vulnerability management, compliance tracking, and automated security workflows.",
                  features: ["Vulnerability Management", "Compliance Tracking", "Security Workflows", "Risk Assessment"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: CloudCog,
                  title: "Cloud Operations",
                  description: "Multi-cloud operations management with resource optimization, cost management, and automated scaling for cloud-native applications.",
                  features: ["Multi-Cloud Management", "Resource Optimization", "Cost Control", "Auto-scaling"],
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
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
                          <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Technology Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced Technology Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Monitor, name: "Application Performance", desc: "Real-time app monitoring", gradient: "from-emerald-50 to-teal-50", iconColor: "text-emerald-600" },
                  { icon: Database, name: "Data Management", desc: "Unified data platform", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                  { icon: Cpu, name: "Infrastructure Automation", desc: "Automated provisioning", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: Activity, name: "Performance Analytics", desc: "Development insights", gradient: "from-violet-50 to-purple-50", iconColor: "text-violet-600" }
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

        {/* TECHNOLOGY RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Technology Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Technology &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Software Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our technology solutions deliver measurable results through DevOps automation, AI-powered development, and intelligent IT operations management
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "45%", label: "Faster Software Delivery", desc: "Through DevOps automation", gradient: "from-cyan-600 to-blue-600", bgGradient: "from-cyan-50 via-blue-50 to-indigo-50", icon: Rocket },
                { metric: "50%", label: "Fewer Deployment Issues", desc: "Automated quality gates", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Bug },
                { metric: "35%", label: "Developer Productivity", desc: "AI-assisted development", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: Code },
                { metric: "320%", label: "Average ROI", desc: "Within 9-12 months", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-pink-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow revolutionized our entire software development lifecycle. We achieved 45% faster delivery through DevOps automation, reduced deployment issues by 50% with intelligent quality gates, and improved developer productivity by 35% with AI-assisted development tools. The integrated platform connected our entire technology stack seamlessly."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Alex Rodriguez, CTO
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Software Company
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
                { title: "Technology Companies", value: "120+", desc: "Software & tech clients served", gradient: "from-cyan-50 to-blue-50" },
                { title: "Applications Managed", value: "5,000+", desc: "Under DevOps automation", gradient: "from-blue-50 to-indigo-50" },
                { title: "Code Deployments", value: "100K+", desc: "Monthly automated deployments", gradient: "from-indigo-50 to-purple-50" }
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
                Your Trusted Technology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified technology ServiceNow specialists who understand software development challenges and deliver solutions that accelerate innovation and operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Technology Industry Expertise",
                  description: "Deep technology and software expertise with certified ServiceNow specialists who understand DevOps workflows, agile methodologies, cloud operations, and software development lifecycle management across startups, enterprises, and technology service providers.",
                  gradient: "from-cyan-600 to-blue-600",
                  bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  icon: Code,
                  title: "400+ Technology Implementations",
                  description: "Proven track record with 400+ technology implementations across software companies, SaaS providers, and tech enterprises with 45% faster delivery, 50% fewer deployment issues, and 320% average ROI achievement through comprehensive DevOps and IT operations solutions.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Brain,
                  title: "AI-Powered Development Excellence",
                  description: "Leading expertise in AI-powered development tools, intelligent automation, machine learning integration, and next-generation development workflows that accelerate coding, testing, and deployment through advanced AI capabilities and automated intelligence.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: TrendingUp,
                  title: "End-to-End Technology Solutions",
                  description: "Comprehensive technology value chain coverage from development and testing to deployment and operations with integrated solutions that connect development teams, IT operations, security, and business stakeholders for seamless software delivery and operational excellence.",
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
                { title: "DevOps Masters", desc: "End-to-end automation", icon: GitBranch, gradient: "from-emerald-50 to-teal-50", iconColor: "text-emerald-600" },
                { title: "AI Integration", desc: "Intelligent development", icon: Brain, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                { title: "Global Delivery", desc: "Multi-region support", icon: Globe, gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                { title: "Proven ROI", desc: "320% average return", icon: DollarSign, gradient: "from-violet-50 to-purple-50", iconColor: "text-violet-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-cyan-100 to-blue-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Technology ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for technology and software industries
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Technology & Software Industry Solutions?",
                  answer: "ServiceNow Technology & Software Solutions include DevOps automation, IT operations management, software development lifecycle management, AI-powered development tools, security operations, and cloud operations. These solutions address technology challenges including development velocity, operational complexity, security compliance, scalability management, and integration requirements through intelligent workflows that connect development, operations, and business processes.",
                  gradient: "from-cyan-50 via-blue-50 to-indigo-50"
                },
                {
                  question: "How does ServiceNow accelerate software development and deployment?",
                  answer: "ServiceNow accelerates software development through automated CI/CD pipelines, integrated testing frameworks, release orchestration, agile project management, AI-assisted coding, and intelligent deployment strategies. Our platform reduces manual tasks, automates quality gates, enables continuous integration, and provides real-time visibility into development progress, resulting in 45% faster delivery and 50% fewer deployment issues.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "What ROI can technology companies expect from ServiceNow?",
                  answer: "Technology companies typically achieve 45% faster software delivery, 50% reduction in deployment issues, 35% improvement in developer productivity, 60% faster incident resolution, and 320% average ROI within 9-12 months. Benefits include reduced development cycles, improved code quality, enhanced operational efficiency, better security posture, and increased innovation velocity through automated workflows and AI-powered insights.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "Does ServiceNow support DevOps and agile development methodologies?",
                  answer: "Yes, ServiceNow provides comprehensive DevOps support including automated CI/CD pipelines, agile project management, sprint planning, release orchestration, integrated toolchain management, and continuous monitoring. Our platform supports popular development methodologies including Agile, Scrum, Kanban, and SAFe with built-in templates, workflows, and automation that streamline the entire software development lifecycle.",
                  gradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  question: "How does ServiceNow integrate with existing development tools and platforms?",
                  answer: "ServiceNow seamlessly integrates with existing development ecosystems including Git repositories (GitHub, GitLab, Bitbucket), CI/CD tools (Jenkins, Azure DevOps), cloud platforms (AWS, Azure, GCP), monitoring tools (Prometheus, Grafana), and collaboration platforms (Slack, Teams) through native connectors, APIs, and webhook integrations that enable unified workflows and real-time data synchronization.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What support do you provide for technology teams and developers?",
                  answer: "We provide comprehensive support including developer onboarding, DevOps training, agile coaching, tool integration workshops, best practices guidance, and ongoing technical support. Our approach includes hands-on training for development teams, architectural guidance for tech leads, executive briefings for leadership, and continuous optimization to ensure successful adoption and sustained value realization across technology organizations."
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
                Ready to accelerate your technology operations?
              </p>
              <Button className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Technology Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Development Excellence?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Accelerate Your Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Innovation Today
              </span>
            </h2>
            
            <p className="text-xl text-cyan-100 mb-10 max-w-3xl mx-auto">
              Join 400+ technology companies driving software innovation with ServiceNow. From DevOps automation to AI-powered development, accelerate your technology transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700">
                <Code className="mr-2 h-5 w-5" />
                Start Technology Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Technology Guide
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
                <p className="text-blue-200 text-xs">technology@ifbash.com</p>
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
