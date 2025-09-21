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
  ShoppingCart,
  Package,
  Store,
  Truck,
  Smartphone,
  ShoppingBag,
  CreditCard,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowConsumerGoodsRetailPage() {
  // Enhanced JSON-LD with comprehensive retail and consumer goods data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Consumer Goods & Retail Solutions - IfBash",
    "alternateName": ["ServiceNow Retail", "Consumer Packaged Goods", "Retail Operations", "Omnichannel Commerce"],
    "description": "Expert ServiceNow consumer goods and retail solutions with omnichannel commerce, store operations, supply chain optimization, customer experience management. 250+ retail implementations, 35% faster order fulfillment, certified specialists delivering retail excellence globally.",
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
      "ServiceNow Retail Solutions",
      "Consumer Goods Management",
      "Omnichannel Commerce",
      "Store Operations Management",
      "Retail Customer Experience",
      "Supply Chain Optimization",
      "Inventory Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Retail Operations Platform",
        "description": "Complete retail operations management with store systems and omnichannel integration",
        "category": "Retail Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Consumer Goods Management",
        "description": "End-to-end consumer packaged goods lifecycle and distribution management",
        "category": "CPG Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Customer Experience Platform",
        "description": "Unified customer experience management across all retail touchpoints",
        "category": "Customer Experience",
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
      "email": "retail@ifbash.com",
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
        "name": "What are ServiceNow Consumer Goods & Retail Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Consumer Goods & Retail Solutions include omnichannel commerce, store operations management, inventory optimization, customer experience management, supply chain visibility, and retail service management designed specifically for retail and CPG environments."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow improve retail operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow improves retail operations through automated incident management, unified store systems, real-time inventory visibility, streamlined customer service, and connected workforce solutions that eliminate silos and enhance operational efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can retail companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retail companies typically achieve 35% faster order fulfillment, 40% reduction in service resolution time, 25% increase in customer satisfaction, and 280% average ROI through ServiceNow retail solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support omnichannel commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive omnichannel commerce support with unified customer profiles, inventory visibility across channels, seamless order management, and consistent customer experience across online, mobile, and in-store touchpoints."
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
        "name": "Consumer Goods & Retail",
        "item": "https://ifbash.com/industries/consumer-goods-retail"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Consumer Goods & Retail Solutions | Omnichannel Commerce | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow consumer goods and retail solutions in Hyderabad & globally. Omnichannel commerce, store operations, customer experience management. 250+ retail implementations, 35% faster fulfillment, 40% better service resolution. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow retail, consumer goods, omnichannel commerce, store operations, retail customer experience, ServiceNow CPG, retail automation Hyderabad, inventory management, supply chain retail, customer service management"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Retail Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Consumer Goods & Retail Solutions | Omnichannel Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow retail solutions with 250+ implementations. Omnichannel commerce, store operations, customer experience management. Certified specialists delivering retail excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/consumer-goods-retail" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Consumer Goods & Retail Solutions | Omnichannel Commerce | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow retail solutions with 250+ implementations. Omnichannel commerce, store operations by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/consumer-goods-retail" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-purple-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-pink-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                ✓ Retail Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ 250+ Retail Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ Omnichannel Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold">
                    Consumer Goods
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    & Retail{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-pink-100 leading-relaxed mb-8 max-w-2xl">
                  Transform retail operations with omnichannel excellence. Our certified specialists deliver{' '}
                  <span className="font-semibold text-purple-300">unified commerce solutions</span>, store operations management, and customer experience platforms that drive retail innovation and sustainable growth.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Transform Retail Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Retail Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Store className="h-5 w-5 text-pink-600" />
                    <span className="text-sm text-gray-900 font-semibold">Store Operations</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Smartphone className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">Omnichannel</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-indigo-700" />
                    <span className="text-sm text-gray-900 font-semibold">Customer Experience</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-600/25 via-purple-600/20 to-indigo-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-pink-600/35 hover:via-purple-600/30 hover:to-indigo-600/25 transition-all duration-300 border border-pink-400/20 shadow-xl hover:shadow-pink-500/20">
                  <ShoppingBag className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">250+</div>
                  <div className="text-pink-200 text-sm">Retail Projects</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-blue-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-indigo-600/30 hover:to-blue-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">35%</div>
                  <div className="text-purple-200 text-sm">Faster Fulfillment</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-blue-600/20 to-cyan-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-blue-600/30 hover:to-cyan-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Star className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">25%</div>
                  <div className="text-indigo-200 text-sm">Higher Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/25 via-cyan-600/20 to-teal-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-cyan-600/30 hover:to-teal-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">280%</div>
                  <div className="text-blue-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RETAIL CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-pink-700 mb-6 px-4 py-2 border border-pink-200/50">
                    Retail Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Retail & Consumer
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                      Goods Excellence
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Retail and consumer goods companies face unprecedented challenges: omnichannel customer expectations, supply chain complexity, inventory optimization, and operational efficiency. ServiceNow delivers{' '}
                    <span className="text-pink-600 font-semibold">unified retail solutions</span> that connect stores, warehouses, customers, and corporate systems through intelligent workflows and real-time visibility.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>omnichannel commerce</strong> to{' '}
                    <strong>store operations management</strong>, our retail-specific platforms streamline operations, enhance customer experiences, and accelerate digital transformation while maintaining brand consistency across all touchpoints.
                  </p>
                  <p className="leading-relaxed">
                    We help retailers overcome fragmented systems, disconnected data, and operational silos through{' '}
                    <span className="text-purple-600 font-semibold">intelligent automation</span> that drives sustainable competitive advantage and customer loyalty.
                  </p>
                </div>
                
                {/* Retail Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Omnichannel Integration",
                    "Inventory Optimization", 
                    "Customer Experience",
                    "Store Operations",
                    "Supply Chain Visibility",
                    "Staff Productivity"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-pink-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                    alt="Modern retail store with omnichannel technology and connected customer experience"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">250+</div>
                  <div className="text-sm opacity-90">Retail Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RETAIL SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-pink-50/50 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-pink-700 mb-6 px-4 py-2 border border-pink-200/50">
                Retail Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Retail & Consumer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Goods Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to transform retail operations, enhance customer experiences, and optimize the entire consumer goods value chain
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Store,
                  title: "Retail Operations Management",
                  description: "Unified store operations with incident management, task automation, and real-time visibility across all retail locations.",
                  features: ["Store Incident Management", "Task Automation", "Real-time Visibility", "Performance Analytics"],
                  gradient: "from-pink-600 to-purple-600",
                  bgGradient: "from-pink-50 via-purple-50 to-indigo-50"
                },
                {
                  icon: ShoppingCart,
                  title: "Omnichannel Commerce",
                  description: "Seamless customer experience across online, mobile, and in-store channels with unified inventory and order management.",
                  features: ["Unified Inventory", "Order Management", "Channel Integration", "Customer Journey"],
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: Package,
                  title: "Consumer Goods Management",
                  description: "End-to-end CPG lifecycle management from product development to distribution with supply chain optimization.",
                  features: ["Product Lifecycle", "Supply Chain", "Distribution Management", "Compliance Tracking"],
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: Users,
                  title: "Customer Experience Platform",
                  description: "Unified customer service management with personalized experiences, loyalty programs, and omnichannel support.",
                  features: ["Personalized Service", "Loyalty Management", "Omnichannel Support", "Customer Analytics"],
                  gradient: "from-blue-600 to-cyan-600",
                  bgGradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  icon: Truck,
                  title: "Supply Chain Optimization",
                  description: "Real-time supply chain visibility with demand planning, inventory optimization, and supplier collaboration.",
                  features: ["Demand Planning", "Inventory Optimization", "Supplier Collaboration", "Risk Management"],
                  gradient: "from-cyan-600 to-teal-600",
                  bgGradient: "from-cyan-50 via-teal-50 to-green-50"
                },
                {
                  icon: Smartphone,
                  title: "Mobile Workforce Solutions",
                  description: "Empower retail staff with mobile-first tools for customer service, inventory management, and task execution.",
                  features: ["Mobile Apps", "Task Management", "Real-time Communication", "Knowledge Access"],
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
                          <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Retail Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced Retail Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: CreditCard, name: "Payment Integration", desc: "Unified payment processing", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                  { icon: BarChart3, name: "Retail Analytics", desc: "Sales & customer insights", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Shield, name: "Fraud Prevention", desc: "Security & compliance", gradient: "from-red-50 to-rose-50", iconColor: "text-red-600" },
                  { icon: Brain, name: "AI Personalization", desc: "Smart recommendations", gradient: "from-violet-50 to-purple-50", iconColor: "text-violet-600" }
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

        {/* RETAIL RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Retail Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Retail & Consumer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Goods Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our retail solutions deliver measurable results through omnichannel integration, operational efficiency, and enhanced customer experiences
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "35%", label: "Faster Order Fulfillment", desc: "Through omnichannel integration", gradient: "from-pink-600 to-purple-600", bgGradient: "from-pink-50 via-purple-50 to-indigo-50", icon: Clock },
                { metric: "40%", label: "Better Service Resolution", desc: "Automated incident management", gradient: "from-purple-600 to-indigo-600", bgGradient: "from-purple-50 via-indigo-50 to-blue-50", icon: Zap },
                { metric: "25%", label: "Higher Customer Satisfaction", desc: "Enhanced experiences", gradient: "from-indigo-600 to-blue-600", bgGradient: "from-indigo-50 via-blue-50 to-cyan-50", icon: Star },
                { metric: "280%", label: "Average ROI", desc: "Within 12-15 months", gradient: "from-blue-600 to-cyan-600", bgGradient: "from-blue-50 via-cyan-50 to-teal-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12 border border-pink-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow revolutionized our retail operations completely. We achieved 35% faster order fulfillment across all channels, reduced service resolution time by 40%, and improved customer satisfaction by 25%. The unified platform connected our stores, warehouses, and corporate systems seamlessly. This is true omnichannel transformation."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        David Chen, VP Retail Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Fashion Retailer
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
                { title: "Retail Locations", value: "2,500+", desc: "Stores under management", gradient: "from-pink-50 to-purple-50" },
                { title: "Omnichannel Orders", value: "10M+", desc: "Monthly order processing", gradient: "from-purple-50 to-indigo-50" },
                { title: "Customer Touchpoints", value: "50M+", desc: "Monthly interactions", gradient: "from-indigo-50 to-blue-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-pink-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-pink-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-pink-700 mb-6 px-4 py-2 border border-pink-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified retail ServiceNow specialists who understand omnichannel commerce and deliver solutions that drive customer satisfaction and operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Retail Industry Expertise",
                  description: "Deep retail and consumer goods expertise with certified ServiceNow specialists who understand omnichannel commerce, store operations, inventory management, and customer experience across traditional retail, e-commerce, and hybrid business models.",
                  gradient: "from-pink-600 to-purple-600",
                  bgGradient: "from-pink-50 via-purple-50 to-indigo-50"
                },
                {
                  icon: ShoppingBag,
                  title: "250+ Retail Implementations",
                  description: "Proven track record with 250+ retail implementations across fashion, electronics, grocery, and specialty retail with 35% faster fulfillment, 40% better service resolution, and 280% average ROI achievement through comprehensive retail solutions.",
                  gradient: "from-purple-600 to-indigo-600",
                  bgGradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  icon: Smartphone,
                  title: "Omnichannel Excellence",
                  description: "Leading expertise in omnichannel commerce including unified inventory management, seamless customer experiences, mobile commerce, social selling, and integrated order management that connects online, mobile, and in-store channels for consistent brand experiences.",
                  gradient: "from-indigo-600 to-blue-600",
                  bgGradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  icon: TrendingUp,
                  title: "Customer-Centric Solutions",
                  description: "Comprehensive customer experience focus from personalized shopping journeys to loyalty programs, customer service excellence, and data-driven insights that drive customer satisfaction, retention, and lifetime value across all retail touchpoints and channels.",
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
                { title: "Omnichannel Masters", desc: "Unified commerce expertise", icon: Globe, gradient: "from-cyan-50 to-teal-50", iconColor: "text-cyan-600" },
                { title: "Customer Experience", desc: "Personalization & loyalty", icon: Users, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Mobile Commerce", desc: "Mobile-first solutions", icon: Smartphone, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                { title: "Proven ROI", desc: "280% average return", icon: DollarSign, gradient: "from-violet-50 to-purple-50", iconColor: "text-violet-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-pink-100 to-purple-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Retail ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for retail and consumer goods industries
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Consumer Goods & Retail Solutions?",
                  answer: "ServiceNow Consumer Goods & Retail Solutions include omnichannel commerce management, store operations automation, customer experience platforms, inventory optimization, supply chain visibility, and retail service management. These solutions address retail challenges including disconnected systems, inventory management, customer service coordination, and operational efficiency through unified digital workflows that connect stores, warehouses, corporate systems, and customer touchpoints.",
                  gradient: "from-pink-50 via-purple-50 to-indigo-50"
                },
                {
                  question: "How does ServiceNow improve retail operations and customer experience?",
                  answer: "ServiceNow improves retail operations through automated incident management, unified store systems, real-time inventory visibility, streamlined customer service, mobile workforce solutions, and connected omnichannel experiences. Our platform eliminates silos between departments, automates routine tasks, provides real-time visibility into operations, and enables personalized customer experiences across all touchpoints including online, mobile, and in-store channels.",
                  gradient: "from-purple-50 via-indigo-50 to-blue-50"
                },
                {
                  question: "What ROI can retail companies expect from ServiceNow?",
                  answer: "Retail companies typically achieve 35% faster order fulfillment, 40% reduction in service resolution time, 25% increase in customer satisfaction, 30% improvement in inventory turnover, and 280% average ROI within 12-15 months. Benefits include reduced operational costs, improved customer experiences, enhanced staff productivity, better inventory management, and increased sales through omnichannel integration and automated workflows.",
                  gradient: "from-indigo-50 via-blue-50 to-cyan-50"
                },
                {
                  question: "Does ServiceNow support omnichannel commerce and inventory management?",
                  answer: "Yes, ServiceNow provides comprehensive omnichannel commerce support with unified customer profiles, real-time inventory visibility across all channels, seamless order management, consistent customer experience across online, mobile, and in-store touchpoints, and integrated fulfillment options including buy-online-pickup-in-store, ship-from-store, and direct-to-customer delivery with real-time tracking and communication.",
                  gradient: "from-blue-50 via-cyan-50 to-teal-50"
                },
                {
                  question: "How does ServiceNow integrate with existing retail systems like POS and ERP?",
                  answer: "ServiceNow seamlessly integrates with existing retail systems including Point-of-Sale (POS), Enterprise Resource Planning (ERP), e-commerce platforms, warehouse management systems, customer relationship management (CRM), and payment processing systems through native connectors and APIs. Our integration approach ensures real-time data synchronization, unified workflows, and comprehensive visibility across the entire retail technology ecosystem.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What support do you provide for retail staff training and adoption?",
                  answer: "We provide comprehensive retail staff training including store associate workshops, manager certification programs, mobile app training, customer service excellence modules, and change management support. Our approach includes hands-on training for frontline staff, technical training for IT teams, executive briefings for leadership, and ongoing support to ensure successful adoption and sustained value realization across all retail locations and departments."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-pink-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your retail operations?
              </p>
              <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Retail Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-pink-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/10 via-indigo-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Omnichannel Excellence?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Retail
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Operations Today
              </span>
            </h2>
            
            <p className="text-xl text-pink-100 mb-10 max-w-3xl mx-auto">
              Join 250+ retail and consumer goods companies driving omnichannel innovation with ServiceNow. From unified commerce to customer experience excellence, accelerate your retail transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Retail Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Retail Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-pink-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-pink-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-pink-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-purple-200 text-xs">retail@ifbash.com</p>
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
