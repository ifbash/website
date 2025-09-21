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
  Car,
  Wrench,
  Truck,
  Factory,
  Cog,
  Package,
  Gauge,
  Route,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowAutomotivePage() {
  // Enhanced JSON-LD with comprehensive automotive industry data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Automotive Industry Solutions - IfBash",
    "alternateName": ["ServiceNow Automotive", "Automotive Operations", "Vehicle Lifecycle Management", "Automotive Digital Transformation"],
    "description": "Expert ServiceNow automotive industry solutions with vehicle lifecycle management, dealer operations, supply chain optimization, connected vehicle services. 200+ automotive implementations, 40% faster production, certified specialists delivering automotive excellence globally.",
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
      "ServiceNow Automotive Solutions",
      "Vehicle Lifecycle Management",
      "Dealer Operations Management",
      "Supply Chain Optimization",
      "Connected Vehicle Services",
      "Manufacturing Operations",
      "Automotive CRM Solutions"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Automotive Operations Platform",
        "description": "Complete automotive operations management with vehicle lifecycle and dealer management",
        "category": "Automotive Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Connected Vehicle Services",
        "description": "IoT-enabled vehicle management with real-time monitoring and predictive maintenance",
        "category": "Connected Services",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Automotive Supply Chain",
        "description": "End-to-end supply chain management with supplier collaboration and risk management",
        "category": "Supply Chain",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
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
      "email": "automotive@ifbash.com",
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
        "name": "What are ServiceNow Automotive Industry Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Automotive Solutions include vehicle lifecycle management, dealer operations, supply chain optimization, connected vehicle services, manufacturing operations, and customer service management tailored specifically for automotive industry needs."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow help automotive manufacturers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow helps automotive manufacturers through production optimization, quality management, supply chain visibility, connected workforce solutions, and predictive maintenance that reduces downtime and improves efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can automotive companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automotive companies typically achieve 40% faster production cycles, 50% reduction in warranty claims, 35% supply chain cost savings, and 300% average ROI through ServiceNow automotive solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow support connected vehicle management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow provides comprehensive connected vehicle management including IoT integration, real-time monitoring, predictive maintenance, over-the-air updates, and customer support for connected car ecosystems."
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
        "name": "ServiceNow Automotive",
        "item": "https://ifbash.com/industries/automotive"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Automotive Industry Solutions | Vehicle Lifecycle Management | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow automotive solutions in Hyderabad & globally. Vehicle lifecycle management, dealer operations, supply chain optimization. 200+ automotive implementations, 40% faster production, 50% warranty reduction. Certified automotive specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow automotive, vehicle lifecycle management, automotive operations, dealer management, connected vehicles, automotive supply chain, ServiceNow manufacturing, automotive CRM Hyderabad, vehicle service management, automotive digital transformation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Automotive Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Automotive Industry Solutions | Vehicle Operations Excellence | IfBash" />
        <meta property="og:description" content="Leading ServiceNow automotive solutions with 200+ implementations. Vehicle lifecycle management, dealer operations, supply chain optimization. Certified specialists delivering automotive excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/automotive" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Automotive Solutions | Vehicle Operations | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow automotive solutions with 200+ implementations. Vehicle lifecycle management, dealer operations by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/automotive" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/30">

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-red-900 via-orange-900 to-amber-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/10 via-amber-600/5 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-amber-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                ✓ Automotive Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                ✓ 200+ Automotive Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-amber-500 via-yellow-600 to-orange-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                ✓ Vehicle Lifecycle Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 font-semibold">
                    Automotive
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Industry{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8 max-w-2xl">
                  Accelerate automotive innovation with ServiceNow's industry-specific solutions. From{' '}
                  <span className="font-semibold text-orange-300">vehicle lifecycle management</span> to connected car services, our certified specialists deliver digital transformation that drives operational excellence across the automotive value chain.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:via-orange-700 hover:to-amber-700"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Transform Operations
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Automotive Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Factory className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-gray-900 font-semibold">Manufacturing</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Truck className="h-5 w-5 text-orange-600" />
                    <span className="text-sm text-gray-900 font-semibold">Supply Chain</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-amber-700" />
                    <span className="text-sm text-gray-900 font-semibold">Dealer Network</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-600/25 via-orange-600/20 to-amber-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-red-600/35 hover:via-orange-600/30 hover:to-amber-600/25 transition-all duration-300 border border-red-400/20 shadow-xl hover:shadow-red-500/20">
                  <Car className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-red-200 text-sm">Automotive Projects</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/25 via-amber-600/20 to-yellow-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-orange-600/35 hover:via-amber-600/30 hover:to-yellow-600/25 transition-all duration-300 border border-orange-400/20 shadow-xl hover:shadow-orange-500/20">
                  <Gauge className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-orange-200 text-sm">Faster Production</div>
                </div>
                <div className="bg-gradient-to-br from-amber-600/25 via-yellow-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-amber-600/35 hover:via-yellow-600/30 hover:to-red-600/25 transition-all duration-300 border border-amber-400/20 shadow-xl hover:shadow-amber-500/20">
                  <Shield className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-amber-200 text-sm">Warranty Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-600/25 via-red-600/20 to-orange-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-yellow-600/35 hover:via-red-600/30 hover:to-orange-600/25 transition-all duration-300 border border-yellow-400/20 shadow-xl hover:shadow-yellow-500/20">
                  <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-yellow-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTOMOTIVE CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 text-red-700 mb-6 px-4 py-2 border border-red-200/50">
                    Automotive Industry Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Automotive
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                      Digital Excellence
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    The automotive industry faces unprecedented challenges: electrification, autonomous vehicles, supply chain complexity, and evolving customer expectations. ServiceNow delivers{' '}
                    <span className="text-red-600 font-semibold">integrated solutions</span> that connect manufacturing, dealers, suppliers, and customers across the entire automotive ecosystem.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>vehicle lifecycle management</strong> to{' '}
                    <strong>connected car services</strong>, our automotive-specific workflows streamline operations, enhance quality, and accelerate innovation while maintaining the agility needed to adapt to industry disruption.
                  </p>
                  <p className="leading-relaxed">
                    We help automotive companies overcome fragmented systems, siloed processes, and operational inefficiencies through unified platforms that drive{' '}
                    <span className="text-orange-600 font-semibold">operational excellence</span> and sustainable competitive advantage.
                  </p>
                </div>
                
                {/* Industry Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Complex Supply Chains",
                    "Quality & Compliance", 
                    "Connected Vehicle Management",
                    "Dealer Network Coordination",
                    "Manufacturing Optimization",
                    "Customer Experience"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-red-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-red-100 via-orange-100 to-amber-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
                    alt="Modern automotive manufacturing facility showcasing connected operations and digital transformation"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm opacity-90">Automotive Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTOMOTIVE SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-red-50/50 to-orange-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 text-red-700 mb-6 px-4 py-2 border border-red-200/50">
                Automotive Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Automotive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  Operations Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed specifically for automotive industry challenges, from vehicle design to customer service
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Car,
                  title: "Vehicle Lifecycle Management",
                  description: "End-to-end vehicle lifecycle management from design and development to production, sales, and service with integrated workflows.",
                  features: ["Design & Engineering", "Production Planning", "Quality Control", "Service Management"],
                  gradient: "from-red-600 to-orange-600",
                  bgGradient: "from-red-50 via-orange-50 to-amber-50"
                },
                {
                  icon: Factory,
                  title: "Manufacturing Operations",
                  description: "Smart manufacturing solutions with connected workforce, predictive maintenance, and production optimization for enhanced efficiency.",
                  features: ["Connected Workforce", "Predictive Maintenance", "Production Optimization", "Quality Assurance"],
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  icon: Truck,
                  title: "Supply Chain Management",
                  description: "Integrated supply chain solutions with supplier collaboration, risk management, and procurement optimization for automotive components.",
                  features: ["Supplier Collaboration", "Risk Management", "Procurement Optimization", "Logistics Coordination"],
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  icon: Users,
                  title: "Dealer Network Management",
                  description: "Comprehensive dealer operations management with CRM, inventory management, and customer service coordination.",
                  features: ["Dealer CRM", "Inventory Management", "Sales Support", "Service Coordination"],
                  gradient: "from-yellow-600 to-red-600",
                  bgGradient: "from-yellow-50 via-red-50 to-rose-50"
                },
                {
                  icon: Cog,
                  title: "Connected Vehicle Services",
                  description: "IoT-enabled connected vehicle management with real-time monitoring, predictive maintenance, and over-the-air updates.",
                  features: ["IoT Integration", "Real-time Monitoring", "Predictive Analytics", "Remote Updates"],
                  gradient: "from-red-600 to-pink-600",
                  bgGradient: "from-red-50 via-pink-50 to-rose-50"
                },
                {
                  icon: MessageCircle,
                  title: "Customer Service Management",
                  description: "Automotive-specific customer service with warranty management, service scheduling, and omnichannel support.",
                  features: ["Warranty Management", "Service Scheduling", "Customer Portal", "Multi-channel Support"],
                  gradient: "from-pink-600 to-purple-600",
                  bgGradient: "from-pink-50 via-purple-50 to-violet-50"
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
                          <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Automotive Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Industry-Specific Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Route, name: "Fleet Management", desc: "Vehicle tracking & optimization", gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                  { icon: Wrench, name: "Service Operations", desc: "Maintenance & repair workflows", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Package, name: "Parts Management", desc: "Inventory & distribution", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Shield, name: "Compliance Management", desc: "Regulatory & safety standards", gradient: "from-indigo-50 to-blue-50", iconColor: "text-indigo-600" }
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

        {/* AUTOMOTIVE RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Automotive Industry Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Automotive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  Success Metrics
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our automotive solutions deliver measurable results through operational optimization, quality improvement, and customer satisfaction enhancement
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Faster Production", desc: "Streamlined manufacturing", gradient: "from-red-600 to-orange-600", bgGradient: "from-red-50 via-orange-50 to-amber-50", icon: Factory },
                { metric: "50%", label: "Warranty Reduction", desc: "Quality improvements", gradient: "from-orange-600 to-amber-600", bgGradient: "from-orange-50 via-amber-50 to-yellow-50", icon: Shield },
                { metric: "35%", label: "Supply Chain Savings", desc: "Cost optimization", gradient: "from-amber-600 to-yellow-600", bgGradient: "from-amber-50 via-yellow-50 to-orange-50", icon: Truck },
                { metric: "300%", label: "Average ROI", desc: "Within 12-18 months", gradient: "from-yellow-600 to-red-600", bgGradient: "from-yellow-50 via-red-50 to-rose-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-red-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12 border border-red-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow transformed our entire automotive operations. From manufacturing to dealer management, we've seen 40% faster production cycles and 50% reduction in warranty claims. The integrated platform connects our entire value chain - suppliers, manufacturing, dealers, and customers - driving unprecedented operational efficiency."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Michael Schmidt, VP Operations
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Automotive Manufacturer
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
                { title: "Automotive Clients", value: "50+", desc: "OEMs and suppliers served", gradient: "from-red-50 to-orange-50" },
                { title: "Connected Vehicles", value: "2M+", desc: "Vehicles under management", gradient: "from-orange-50 to-amber-50" },
                { title: "Dealer Networks", value: "5000+", desc: "Dealerships connected", gradient: "from-amber-50 to-yellow-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-red-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-red-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-red-100 via-orange-100 to-amber-100 text-red-700 mb-6 px-4 py-2 border border-red-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Automotive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified automotive ServiceNow specialists who understand industry challenges and deliver solutions that drive operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Automotive Industry Expertise",
                  description: "Deep automotive industry knowledge with certified ServiceNow specialists who understand OEM operations, supplier ecosystems, dealer networks, and customer lifecycle management across traditional and electric vehicle platforms.",
                  gradient: "from-red-600 to-orange-600",
                  bgGradient: "from-red-50 via-orange-50 to-amber-50"
                },
                {
                  icon: Car,
                  title: "200+ Automotive Implementations",
                  description: "Proven track record with 200+ automotive implementations across manufacturers, suppliers, and dealers with 40% faster production cycles, 50% warranty reduction, and 35% supply chain cost savings.",
                  gradient: "from-orange-600 to-amber-600",
                  bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  icon: Cog,
                  title: "Connected Vehicle Solutions",
                  description: "Specialized expertise in connected vehicle management, IoT integration, predictive maintenance, and over-the-air update capabilities that support the future of automotive technology and customer service.",
                  gradient: "from-amber-600 to-yellow-600",
                  bgGradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  icon: TrendingUp,
                  title: "End-to-End Value Chain",
                  description: "Comprehensive automotive value chain coverage from R&D and manufacturing to sales and service with integrated solutions that connect suppliers, manufacturers, dealers, and customers for seamless operations.",
                  gradient: "from-yellow-600 to-red-600",
                  bgGradient: "from-yellow-50 via-red-50 to-rose-50"
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
                { title: "OEM Experience", desc: "Major manufacturer partnerships", icon: Factory, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "Global Reach", desc: "Multi-region implementations", icon: Globe, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Innovation Focus", desc: "Electric & autonomous vehicles", icon: Zap, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                { title: "Proven ROI", desc: "300% average return", icon: DollarSign, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-red-100 to-orange-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Automotive ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for the automotive industry
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Automotive Industry Solutions?",
                  answer: "ServiceNow Automotive Solutions include vehicle lifecycle management, manufacturing operations, supply chain management, dealer network management, connected vehicle services, and customer service management. These industry-specific solutions address unique automotive challenges including complex supply chains, quality control, regulatory compliance, and evolving customer expectations across traditional and electric vehicle platforms.",
                  gradient: "from-red-50 via-orange-50 to-amber-50"
                },
                {
                  question: "How does ServiceNow help automotive manufacturers?",
                  answer: "ServiceNow helps automotive manufacturers through production optimization, quality management, supply chain visibility, connected workforce solutions, predictive maintenance, and regulatory compliance management. Our solutions reduce production cycle times by 40%, improve quality control, optimize supply chain operations, and enable real-time collaboration across global manufacturing networks for enhanced operational efficiency.",
                  gradient: "from-orange-50 via-amber-50 to-yellow-50"
                },
                {
                  question: "What ROI can automotive companies expect from ServiceNow?",
                  answer: "Automotive companies typically achieve 40% faster production cycles, 50% reduction in warranty claims, 35% supply chain cost savings, and 300% average ROI within 12-18 months. Benefits include improved manufacturing efficiency, enhanced quality control, optimized supply chain operations, better dealer coordination, and superior customer service delivery that drives competitive advantage and sustainable growth.",
                  gradient: "from-amber-50 via-yellow-50 to-orange-50"
                },
                {
                  question: "Does ServiceNow support connected vehicle management?",
                  answer: "Yes, ServiceNow provides comprehensive connected vehicle management including IoT integration, real-time vehicle monitoring, predictive maintenance, over-the-air software updates, remote diagnostics, and customer support for connected car ecosystems. Our solutions enable proactive vehicle service, enhance customer experiences, and support the evolving connected and autonomous vehicle landscape.",
                  gradient: "from-yellow-50 via-orange-50 to-red-50"
                },
                {
                  question: "How does ServiceNow integrate with automotive systems?",
                  answer: "ServiceNow integrates seamlessly with automotive-specific systems including PLM (Product Lifecycle Management), ERP, MES (Manufacturing Execution Systems), DMS (Dealer Management Systems), telematics platforms, and quality management systems. Our integration approach ensures data consistency, process automation, and real-time visibility across the entire automotive value chain from design to customer service.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "What support do you provide for automotive compliance?",
                  answer: "We provide comprehensive automotive compliance support including ISO/TS 16949, IATF 16949, environmental regulations, safety standards, and regional automotive requirements. Our solutions include automated compliance tracking, audit management, documentation control, and reporting capabilities that ensure adherence to automotive quality standards, safety regulations, and environmental requirements across global operations."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-red-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-orange-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to transform your automotive operations?
              </p>
              <Button className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:via-orange-700 hover:to-amber-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Automotive Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-900 via-orange-900 to-amber-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600/10 via-orange-600/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/10 via-amber-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready to Accelerate Innovation?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Automotive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                Operations Today
              </span>
            </h2>
            
            <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
              Join 200+ automotive companies driving innovation with ServiceNow. From manufacturing to customer service, accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-700 hover:via-orange-700 hover:to-amber-700">
                <Car className="mr-2 h-5 w-5" />
                Start Automotive Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Automotive Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-red-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-red-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-orange-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-orange-200 text-xs">automotive@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-amber-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-amber-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
