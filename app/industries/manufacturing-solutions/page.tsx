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
  Factory,
  Cog,
  Truck,
  Package,
  Wrench,
  Gauge,
  Route,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowManufacturingPage() {
  // Enhanced JSON-LD with comprehensive manufacturing industry data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Manufacturing Industry Solutions - IfBash",
    "alternateName": ["ServiceNow Manufacturing", "Industry 4.0 Solutions", "Smart Factory Platform", "Manufacturing Digital Transformation"],
    "description": "Expert ServiceNow manufacturing solutions with smart factory operations, Industry 4.0 automation, supply chain optimization, connected workforce. 300+ manufacturing implementations, 40% efficiency gains, certified specialists delivering manufacturing excellence globally.",
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
      "ServiceNow Manufacturing Solutions",
      "Smart Factory Operations",
      "Industry 4.0 Implementation",
      "Manufacturing Operations Management",
      "Connected Workforce Solutions",
      "Supply Chain Optimization",
      "Manufacturing Quality Management"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Smart Factory Platform",
        "description": "Complete smart factory platform with Industry 4.0 capabilities and connected operations",
        "category": "Manufacturing Solutions",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Manufacturing Operations Management",
        "description": "End-to-end manufacturing operations with predictive maintenance and quality control",
        "category": "Operations Management",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Connected Workforce",
        "description": "Digital workforce solutions with mobile-first employee experiences",
        "category": "Workforce Solutions",
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
      "email": "manufacturing@ifbash.com",
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
        "name": "What are ServiceNow Manufacturing Industry Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Manufacturing Solutions include smart factory operations, Industry 4.0 automation, operational technology management, connected workforce, supply chain optimization, and quality management designed specifically for manufacturing environments."
        }
      },
      {
        "@type": "Question", 
        "name": "How does ServiceNow support Industry 4.0 transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow enables Industry 4.0 through IoT integration, AI-powered analytics, digital twin capabilities, predictive maintenance, real-time monitoring, and connected operations that transform traditional manufacturing into smart factories."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can manufacturing companies expect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing companies typically achieve 40% reduction in manual tasks, 30% faster asset audits, 20% decrease in equipment downtime, and 350% average ROI through ServiceNow manufacturing solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Does ServiceNow integrate with manufacturing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ServiceNow seamlessly integrates with MES, ERP, SCADA, PLM, and other manufacturing systems to provide unified operations management and real-time visibility across the entire manufacturing ecosystem."
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
        "name": "ServiceNow Manufacturing",
        "item": "https://ifbash.com/industries/manufacturing"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Manufacturing Industry Solutions | Smart Factory & Industry 4.0 | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow manufacturing solutions in Hyderabad & globally. Smart factory operations, Industry 4.0 automation, connected workforce. 300+ manufacturing implementations, 40% efficiency gains, 20% downtime reduction. Certified specialists."
        />
        <meta 
          name="keywords" 
          content="ServiceNow manufacturing, smart factory, Industry 4.0, manufacturing operations, connected workforce, ServiceNow OTM, manufacturing automation Hyderabad, predictive maintenance, supply chain optimization, manufacturing digital transformation"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow Manufacturing Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Manufacturing Solutions | Smart Factory Operations | IfBash" />
        <meta property="og:description" content="Leading ServiceNow manufacturing solutions with 300+ implementations. Smart factory operations, Industry 4.0 automation, connected workforce. Certified specialists delivering manufacturing excellence globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/industries/manufacturing" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Manufacturing Solutions | Smart Factory Operations | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow manufacturing solutions with 300+ implementations. Smart factory, Industry 4.0 automation by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/industries/manufacturing" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1920&q=80" as="image" />
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
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                ✓ Manufacturing Industry Experts
              </Badge>
              <Badge className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                ✓ 300+ Manufacturing Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 via-violet-600 to-pink-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ Industry 4.0 Specialists
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                    Manufacturing
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Smart Factory{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-semibold">
                      Excellence
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                  Transform manufacturing with Industry 4.0 innovation. Our certified specialists deliver{' '}
                  <span className="font-semibold text-indigo-300">smart factory solutions</span>, connected workforce, and operational technology management that drives manufacturing excellence through intelligent automation and data-driven insights.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
                  >
                    <Factory className="mr-2 h-5 w-5" />
                    Build Smart Factory
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    View Manufacturing Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Cog className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-900 font-semibold">Smart Operations</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm text-gray-900 font-semibold">Connected Workforce</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <BarChart3 className="h-5 w-5 text-purple-700" />
                    <span className="text-sm text-gray-900 font-semibold">Predictive Analytics</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-purple-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-blue-600/35 hover:via-indigo-600/30 hover:to-purple-600/25 transition-all duration-300 border border-blue-400/20 shadow-xl hover:shadow-blue-500/20">
                  <Factory className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-blue-200 text-sm">Manufacturing Projects</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-violet-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-indigo-600/35 hover:via-purple-600/30 hover:to-violet-600/25 transition-all duration-300 border border-indigo-400/20 shadow-xl hover:shadow-indigo-500/20">
                  <Gauge className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-indigo-200 text-sm">Efficiency Gain</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-pink-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Clock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">20%</div>
                  <div className="text-purple-200 text-sm">Less Downtime</div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/25 via-pink-600/20 to-rose-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-pink-600/30 hover:to-rose-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <TrendingUp className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">350%</div>
                  <div className="text-violet-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANUFACTURING CHALLENGES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                    Manufacturing Transformation
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Driving Industry 4.0
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Manufacturing Excellence
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    Manufacturing faces complex challenges: operational efficiency, supply chain disruption, regulatory compliance, and workforce productivity. ServiceNow delivers{' '}
                    <span className="text-blue-600 font-semibold">unified smart factory solutions</span> that integrate operational technology, connect frontline workers, and optimize production processes through AI-powered insights.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>predictive maintenance</strong> to{' '}
                    <strong>connected workforce management</strong>, our Industry 4.0 solutions streamline operations, enhance quality control, and accelerate digital transformation while maintaining safety and compliance standards.
                  </p>
                  <p className="leading-relaxed">
                    We help manufacturers overcome legacy systems, fragmented processes, and operational silos through{' '}
                    <span className="text-indigo-600 font-semibold">intelligent automation</span> that drives sustainable competitive advantage and manufacturing excellence.
                  </p>
                </div>
                
                {/* Manufacturing Challenges */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Operational Efficiency",
                    "Supply Chain Visibility", 
                    "Equipment Maintenance",
                    "Quality Management",
                    "Regulatory Compliance",
                    "Workforce Productivity"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80"
                    alt="Smart manufacturing facility with connected operations and Industry 4.0 technology"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm opacity-90">Smart Factories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MANUFACTURING SOLUTIONS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Manufacturing Solutions Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Smart Factory
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Platform
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive ServiceNow manufacturing solutions designed to transform operations, connect workforce, and optimize production through Industry 4.0 innovation
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Factory,
                  title: "Smart Factory Operations",
                  description: "Complete smart factory platform with IoT integration, real-time monitoring, and AI-powered production optimization for enhanced efficiency.",
                  features: ["IoT Integration", "Real-time Monitoring", "Production Optimization", "Quality Control"],
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Cog,
                  title: "Operational Technology Management",
                  description: "Unified OT management with asset visibility, vulnerability assessment, and security management for connected manufacturing environments.",
                  features: ["Asset Management", "Security Monitoring", "Vulnerability Assessment", "Compliance Tracking"],
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Users,
                  title: "Connected Workforce",
                  description: "Digital workforce solutions with mobile-first experiences, frontline worker support, and productivity enhancement tools.",
                  features: ["Mobile Workforce", "Digital Work Instructions", "Knowledge Access", "Collaboration Tools"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: Wrench,
                  title: "Predictive Maintenance",
                  description: "AI-powered predictive maintenance with equipment monitoring, failure prediction, and maintenance optimization for reduced downtime.",
                  features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Performance Analytics"],
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Truck,
                  title: "Supply Chain Optimization",
                  description: "End-to-end supply chain management with supplier collaboration, risk management, and procurement optimization.",
                  features: ["Supplier Management", "Risk Assessment", "Procurement Optimization", "Logistics Coordination"],
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  icon: Shield,
                  title: "Quality Management",
                  description: "Comprehensive quality management with automated inspections, compliance tracking, and continuous improvement processes.",
                  features: ["Quality Control", "Compliance Management", "Audit Automation", "Continuous Improvement"],
                  gradient: "from-rose-600 to-red-600",
                  bgGradient: "from-rose-50 via-red-50 to-orange-50"
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
                          <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional Manufacturing Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Industry 4.0 Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Brain, name: "AI & Machine Learning", desc: "Intelligent automation & insights", gradient: "from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
                  { icon: Route, name: "Digital Twin", desc: "Virtual factory modeling", gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                  { icon: Package, name: "Inventory Management", desc: "Real-time inventory tracking", gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                  { icon: BarChart3, name: "Performance Analytics", desc: "Production insights & KPIs", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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

        {/* MANUFACTURING RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                Manufacturing Success Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven Manufacturing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Transformation Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our manufacturing solutions deliver measurable results through smart factory operations, connected workforce, and predictive maintenance programs
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "40%", label: "Efficiency Improvement", desc: "Through smart operations", gradient: "from-blue-600 to-indigo-600", bgGradient: "from-blue-50 via-indigo-50 to-purple-50", icon: Gauge },
                { metric: "30%", label: "Faster Asset Audits", desc: "Automated asset tracking", gradient: "from-indigo-600 to-purple-600", bgGradient: "from-indigo-50 via-purple-50 to-violet-50", icon: Clock },
                { metric: "20%", label: "Reduced Downtime", desc: "Predictive maintenance", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-pink-50", icon: Factory },
                { metric: "350%", label: "Average ROI", desc: "Within 12-18 months", gradient: "from-violet-600 to-pink-600", bgGradient: "from-violet-50 via-pink-50 to-rose-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "ServiceNow transformed our manufacturing operations completely. We've achieved 40% efficiency gains through smart factory implementation and reduced equipment downtime by 20% with predictive maintenance. The connected workforce platform improved our frontline productivity by 35%. This is true Industry 4.0 transformation."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Sarah Johnson, Manufacturing Director
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Global Chemical Manufacturing
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
                { title: "Manufacturing Plants", value: "150+", desc: "Smart factory implementations", gradient: "from-blue-50 to-indigo-50" },
                { title: "Connected Workers", value: "50K+", desc: "Frontline employees enabled", gradient: "from-indigo-50 to-purple-50" },
                { title: "Equipment Uptime", value: "99.2%", desc: "Predictive maintenance success", gradient: "from-purple-50 to-violet-50" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 mb-6 px-4 py-2 border border-blue-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Manufacturing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  ServiceNow Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified manufacturing ServiceNow specialists who understand Industry 4.0 requirements and deliver smart factory solutions that drive operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Award,
                  title: "Manufacturing Industry Expertise",
                  description: "Deep manufacturing expertise with certified ServiceNow specialists who understand production operations, quality management, supply chain complexities, and regulatory compliance across discrete, process, and hybrid manufacturing environments.",
                  gradient: "from-blue-600 to-indigo-600",
                  bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  icon: Factory,
                  title: "300+ Manufacturing Implementations",
                  description: "Proven track record with 300+ manufacturing implementations across automotive, chemical, electronics, and industrial sectors with 40% efficiency gains, 20% downtime reduction, and 350% average ROI achievement.",
                  gradient: "from-indigo-600 to-purple-600",
                  bgGradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Cog,
                  title: "Industry 4.0 Leadership",
                  description: "Leading expertise in Industry 4.0 transformation including IoT integration, digital twin development, AI-powered predictive maintenance, and connected workforce solutions that enable smart factory operations and competitive advantage.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  icon: TrendingUp,
                  title: "End-to-End Manufacturing Value",
                  description: "Comprehensive manufacturing value chain coverage from design and engineering to production, quality, and service with integrated solutions that connect operations, supply chain, and customer service for seamless business operations.",
                  gradient: "from-violet-600 to-pink-600",
                  bgGradient: "from-violet-50 via-pink-50 to-rose-50"
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
                { title: "Smart Factory Experts", desc: "Industry 4.0 transformation", icon: Brain, gradient: "from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
                { title: "Global Manufacturing", desc: "Multi-site implementations", icon: Globe, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Safety & Compliance", desc: "Regulatory standards", icon: Shield, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" },
                { title: "Proven ROI", desc: "350% average return", icon: DollarSign, gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" }
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
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-blue-100 to-indigo-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Manufacturing ServiceNow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow solutions for the manufacturing industry
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Manufacturing Industry Solutions?",
                  answer: "ServiceNow Manufacturing Solutions include smart factory operations, Industry 4.0 automation, operational technology management, connected workforce, supply chain optimization, predictive maintenance, and quality management. These solutions address manufacturing challenges including operational efficiency, equipment maintenance, regulatory compliance, and workforce productivity through integrated digital platforms that connect IT and OT systems.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "How does ServiceNow support Industry 4.0 transformation?",
                  answer: "ServiceNow enables Industry 4.0 through IoT integration, AI-powered analytics, digital twin capabilities, predictive maintenance, real-time monitoring, connected workforce solutions, and intelligent automation. Our platform connects operational technology with information technology, enabling data-driven decision making, autonomous operations, and smart factory transformation that drives manufacturing excellence and competitive advantage.",
                  gradient: "from-indigo-50 via-purple-50 to-violet-50"
                },
                {
                  question: "What ROI can manufacturing companies expect from ServiceNow?",
                  answer: "Manufacturing companies typically achieve 40% reduction in manual tasks, 30% faster asset audits, 20% decrease in equipment downtime, 25% improvement in operational efficiency, and 350% average ROI within 12-18 months. Benefits include improved production efficiency, enhanced quality control, reduced maintenance costs, better regulatory compliance, and increased workforce productivity through connected operations and predictive analytics.",
                  gradient: "from-purple-50 via-violet-50 to-pink-50"
                },
                {
                  question: "Does ServiceNow integrate with manufacturing systems like MES and SCADA?",
                  answer: "Yes, ServiceNow seamlessly integrates with Manufacturing Execution Systems (MES), SCADA, ERP, PLM, and other manufacturing systems through native connectors and APIs. Our Operational Technology Management solution provides unified visibility across IT and OT environments, enabling real-time data sharing, automated workflows, and comprehensive asset management across the entire manufacturing ecosystem.",
                  gradient: "from-violet-50 via-pink-50 to-rose-50"
                },
                {
                  question: "How does ServiceNow support manufacturing compliance and quality?",
                  answer: "ServiceNow provides comprehensive compliance and quality management including automated audit trails, regulatory reporting, quality control workflows, deviation management, and continuous monitoring. Our solutions support ISO 9001, FDA regulations, automotive standards, and other industry-specific requirements with built-in documentation, approval processes, and real-time compliance tracking that ensures manufacturing standards and regulatory adherence.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                },
                {
                  question: "What training and support do you provide for manufacturing teams?",
                  answer: "We provide comprehensive training and support including manufacturing-specific workshops, frontline worker training, administrator certification, change management support, and ongoing maintenance. Our approach includes hands-on training for production teams, technical training for IT staff, executive briefings for leadership, and continuous support to ensure successful adoption and sustained value realization across manufacturing operations."
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-blue-700 mr-2 font-bold">Q:</span>
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
                Ready to transform your manufacturing operations?
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule Manufacturing Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for Smart Factory Transformation?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build Your Smart Factory
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                with ServiceNow
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 300+ manufacturers driving Industry 4.0 innovation with ServiceNow. From connected workforce to predictive maintenance, accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700">
                <Factory className="mr-2 h-5 w-5" />
                Start Manufacturing Transformation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download Manufacturing Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-blue-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-indigo-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-indigo-200 text-xs">manufacturing@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-purple-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
