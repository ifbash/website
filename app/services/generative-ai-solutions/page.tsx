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
  Code2,
  Bot,
  Cpu,
  Sparkles,
  Wand2,
  Binary,
  Network,
  Search,
  FileText,
  Layers,
  Activity,
  LinkedinIcon,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";

export default function ServiceNowGenerativeAIServicesPage() {
  // Enhanced JSON-LD with comprehensive AI services data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "Organization"],
    "name": "ServiceNow Generative AI & Agentic AI Services - IfBash",
    "alternateName": ["ServiceNow AI Implementation", "Generative AI Solutions", "Now Assist Implementation", "Agentic AI Development"],
    "description": "Expert ServiceNow Generative AI and Agentic AI services with Now Assist implementation, AI-powered automation, text-to-code, virtual agents. 300+ AI implementations, certified AI specialists delivering intelligent enterprise solutions globally.",
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
      "ServiceNow Generative AI",
      "Now Assist Implementation",
      "Agentic AI Development",
      "AI-Powered Automation",
      "Text-to-Code Solutions",
      "Virtual Agent Development",
      "AI Integration Services"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["Global", "India", "United States", "Europe", "Asia Pacific"]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Now Assist Implementation",
        "description": "Complete Now Assist deployment with AI-powered automation and virtual agents",
        "category": "AI Implementation",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Custom AI Agent Development",
        "description": "Bespoke agentic AI solutions for enterprise automation and decision-making",
        "category": "AI Development",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "AI Integration & Consulting",
        "description": "Strategic AI consulting and integration with existing ServiceNow platforms",
        "category": "AI Consulting",
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
      "email": "ai@ifbash.com",
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
        "name": "What are ServiceNow Generative AI Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Generative AI Services include Now Assist implementation, AI-powered automation, virtual agent development, text-to-code solutions, and intelligent workflow optimization using advanced AI capabilities integrated with the ServiceNow platform."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the difference between Generative AI and Agentic AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generative AI creates new content like text, code, and documents from existing data. Agentic AI goes beyond creation to autonomous decision-making and action-taking, enabling intelligent agents that can perform complex tasks, make decisions, and execute workflows independently."
        }
      },
      {
        "@type": "Question",
        "name": "How long does AI implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI implementation typically takes 8-16 weeks depending on complexity. Basic Now Assist implementation takes 8-12 weeks, while custom agentic AI solutions require 12-16 weeks with our accelerated AI deployment methodology."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can I expect from AI implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations typically see 60% reduction in manual tasks, 70% faster case resolution, 80% improvement in user satisfaction, and average ROI of 400% within 12 months through AI-powered automation and intelligent decision-making."
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
        "name": "ServiceNow Generative AI Services",
        "item": "https://ifbash.com/servicenow-generative-ai-services"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>ServiceNow Generative AI & Agentic AI Services | Now Assist Implementation | IfBash</title>
        <meta
          name="description"
          content="Expert ServiceNow Generative AI services in Hyderabad & globally. Now Assist implementation, AI automation, virtual agents, text-to-code. 300+ AI implementations, 60% task reduction, 70% faster resolution. Certified AI specialists, proven results."
        />
        <meta 
          name="keywords" 
          content="ServiceNow Generative AI, Now Assist implementation, ServiceNow AI services, agentic AI, AI automation, virtual agents, text-to-code, ServiceNow AI consulting Hyderabad, intelligent automation, AI-powered workflows, machine learning ServiceNow"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IfBash - ServiceNow AI Specialists" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ServiceNow Generative AI & Agentic AI Services | AI Automation Experts | IfBash" />
        <meta property="og:description" content="Leading ServiceNow AI services with 300+ implementations. Generative AI, Now Assist, virtual agents, intelligent automation. 60% task reduction, certified AI specialists delivering cutting-edge solutions globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ifbash.com/servicenow-generative-ai-services" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="IfBash" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ifbash" />
        <meta name="twitter:title" content="ServiceNow Generative AI & Agentic AI Services | IfBash" />
        <meta name="twitter:description" content="Expert ServiceNow AI services with 300+ implementations. Generative AI, Now Assist, intelligent automation by certified specialists." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ifbash.com/servicenow-generative-ai-services" />
        
        {/* Preloading */}
        <link rel="preload" href="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80" as="image" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
        <Header />

        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 via-violet-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-600/10 via-purple-600/5 to-transparent" />
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Badge className="bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                ✓ ServiceNow AI Specialists
              </Badge>
              <Badge className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ✓ 300+ AI Implementations
              </Badge>
              <Badge className="bg-gradient-to-r from-fuchsia-500 via-pink-600 to-rose-600 text-white border-transparent px-4 py-2 shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300">
                ✓ Now Assist Certified Team
              </Badge>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
                  ServiceNow Generative AI
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 font-semibold">
                    & Agentic AI
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-4">
                    Intelligent{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 font-semibold">
                      Automation
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-2xl">
                  Transform your ServiceNow platform with cutting-edge AI. Our certified specialists deliver{' '}
                  <span className="font-semibold text-violet-300">Now Assist implementation</span>, intelligent virtual agents, and autonomous AI solutions that revolutionize business processes.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start AI Implementation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/60 rounded-xl hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    See AI in Action
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <span className="text-sm text-gray-900 font-semibold">AI Innovation</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Bot className="h-5 w-5 text-violet-600" />
                    <span className="text-sm text-gray-900 font-semibold">Virtual Agents</span>
                  </div>
                  <div className="h-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg flex items-center space-x-2 border border-white/10 shadow">
                    <Wand2 className="h-5 w-5 text-fuchsia-700" />
                    <span className="text-sm text-gray-900 font-semibold">Intelligent Automation</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600/25 via-violet-600/20 to-fuchsia-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-purple-600/35 hover:via-violet-600/30 hover:to-fuchsia-600/25 transition-all duration-300 border border-purple-400/20 shadow-xl hover:shadow-purple-500/20">
                  <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-purple-200 text-sm">AI Implementations</div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/25 via-fuchsia-600/20 to-pink-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-violet-600/35 hover:via-fuchsia-600/30 hover:to-pink-600/25 transition-all duration-300 border border-violet-400/20 shadow-xl hover:shadow-violet-500/20">
                  <Zap className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-violet-200 text-sm">Task Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-600/25 via-pink-600/20 to-rose-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-fuchsia-600/35 hover:via-pink-600/30 hover:to-rose-600/25 transition-all duration-300 border border-fuchsia-400/20 shadow-xl hover:shadow-fuchsia-500/20">
                  <Activity className="h-12 w-12 text-fuchsia-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">70%</div>
                  <div className="text-fuchsia-200 text-sm">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-pink-600/25 via-rose-600/20 to-red-600/15 backdrop-blur-md rounded-2xl p-6 text-center hover:from-pink-600/35 hover:via-rose-600/30 hover:to-red-600/25 transition-all duration-300 border border-pink-400/20 shadow-xl hover:shadow-pink-500/20">
                  <TrendingUp className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white">400%</div>
                  <div className="text-pink-200 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT ARE AI SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <Badge className="bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                    AI Innovation Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    What are ServiceNow
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                      Generative AI Services?
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    <strong>ServiceNow Generative AI Services</strong> harness advanced AI capabilities to create{' '}
                    <span className="text-purple-600 font-semibold">intelligent content generation</span>, automated decision-making, and{' '}
                    <span className="text-violet-600 font-semibold">autonomous virtual agents</span> that transform enterprise operations through sophisticated machine learning.
                  </p>
                  <p className="leading-relaxed">
                    Our certified AI specialists implement{' '}
                    <strong>Now Assist</strong>,{' '}
                    <strong>text-to-code generation</strong>, intelligent virtual agents, and custom agentic AI solutions that go beyond automation to deliver{' '}
                    <strong>autonomous decision-making capabilities</strong> across your ServiceNow platform.
                  </p>
                  <p className="leading-relaxed">
                    From <strong>generative content creation</strong> to autonomous workflow execution, we deliver comprehensive AI solutions including predictive analytics, intelligent search, case summarization, and proactive issue resolution that drive unprecedented efficiency.
                  </p>
                </div>
                
                {/* Key AI Capabilities */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Now Assist Implementation",
                    "Text-to-Code Generation", 
                    "Virtual Agent Development",
                    "Intelligent Automation",
                    "Predictive Analytics",
                    "AI-Powered Search"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-purple-200/50 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Discover AI Capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-purple-100 via-violet-100 to-fuchsia-100 rounded-2xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                    alt="ServiceNow generative AI dashboard showcasing intelligent automation and virtual agents"
                    className="rounded-xl shadow-xl w-full"
                    loading="eager"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm opacity-90">AI Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI SERVICES SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-purple-50/50 to-violet-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/5 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                Comprehensive AI Solutions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Intelligent AI Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  Portfolio
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Complete ServiceNow AI implementation services including generative AI, agentic AI, and intelligent automation solutions
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Now Assist Implementation",
                  description: "Complete Now Assist deployment with AI-powered case management, intelligent search, virtual agents, and automated content generation.",
                  features: ["AI-Powered Search", "Case Summarization", "Virtual Agent Setup", "Content Generation"],
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-fuchsia-50"
                },
                {
                  icon: Code2,
                  title: "Text-to-Code AI Solutions",
                  description: "Intelligent code generation from natural language descriptions, automated workflow creation, and AI-assisted development.",
                  features: ["Natural Language to Code", "Workflow Generation", "API Integration", "Code Optimization"],
                  gradient: "from-violet-600 to-fuchsia-600",
                  bgGradient: "from-violet-50 via-fuchsia-50 to-pink-50"
                },
                {
                  icon: Wand2,
                  title: "Agentic AI Development",
                  description: "Autonomous AI agents that make decisions, execute actions, and learn from interactions to handle complex business processes.",
                  features: ["Autonomous Decision Making", "Process Execution", "Learning Algorithms", "Intelligent Routing"],
                  gradient: "from-fuchsia-600 to-pink-600",
                  bgGradient: "from-fuchsia-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Search,
                  title: "Intelligent Search & Discovery",
                  description: "AI-enhanced search capabilities with semantic understanding, personalized results, and predictive suggestions.",
                  features: ["Semantic Search", "Personalized Results", "Auto-Suggestions", "Context Awareness"],
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  icon: FileText,
                  title: "Content Generation & Automation",
                  description: "Automated generation of knowledge articles, documentation, responses, and intelligent content creation workflows.",
                  features: ["Knowledge Articles", "Auto Documentation", "Response Generation", "Content Optimization"],
                  gradient: "from-blue-600 to-purple-600",
                  bgGradient: "from-blue-50 via-purple-50 to-violet-50"
                },
                {
                  icon: Network,
                  title: "AI Integration & Orchestration",
                  description: "Seamless integration of AI capabilities across platforms with intelligent orchestration and workflow automation.",
                  features: ["Platform Integration", "Workflow Orchestration", "API Management", "AI Model Training"],
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
                          <Sparkles className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Additional AI Capabilities */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Advanced AI Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Brain, name: "Machine Learning", desc: "Predictive analytics & insights", gradient: "from-purple-50 to-violet-50", iconColor: "text-purple-600" },
                  { icon: Cpu, name: "Neural Networks", desc: "Deep learning solutions", gradient: "from-violet-50 to-fuchsia-50", iconColor: "text-violet-600" },
                  { icon: Binary, name: "Natural Language Processing", desc: "Language understanding", gradient: "from-fuchsia-50 to-pink-50", iconColor: "text-fuchsia-600" },
                  { icon: Layers, name: "Computer Vision", desc: "Image & document analysis", gradient: "from-pink-50 to-rose-50", iconColor: "text-pink-600" }
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

        {/* AI RESULTS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 mb-6 px-4 py-2 border border-emerald-200/50">
                AI Implementation Results
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Measurable AI
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  Impact & ROI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our AI implementations deliver transformational results through intelligent automation, enhanced user experience, and autonomous decision-making
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { metric: "60%", label: "Task Reduction", desc: "Through intelligent automation", gradient: "from-purple-600 to-violet-600", bgGradient: "from-purple-50 via-violet-50 to-fuchsia-50", icon: Zap },
                { metric: "70%", label: "Faster Resolution", desc: "AI-powered case handling", gradient: "from-violet-600 to-fuchsia-600", bgGradient: "from-violet-50 via-fuchsia-50 to-pink-50", icon: Activity },
                { metric: "80%", label: "User Satisfaction", desc: "Enhanced AI experiences", gradient: "from-fuchsia-600 to-pink-600", bgGradient: "from-fuchsia-50 via-pink-50 to-rose-50", icon: Star },
                { metric: "400%", label: "Average ROI", desc: "Within 12 months", gradient: "from-pink-600 to-rose-600", bgGradient: "from-pink-50 via-rose-50 to-red-50", icon: TrendingUp }
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
            <div className="bg-gradient-to-br from-white via-purple-50 to-violet-50 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "IfBash's AI implementation revolutionized our ServiceNow platform. The Now Assist deployment reduced our manual ticket processing by 65%, while their custom agentic AI agents autonomously resolve 40% of routine issues. Our user satisfaction increased by 80% within just 3 months."
                  </blockquote>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <cite className="text-gray-800 not-italic font-semibold text-lg">
                        Alexandra Thompson, Head of Digital Innovation
                      </cite>
                      <p className="text-gray-600 font-medium">
                        Enterprise Software Company
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
                { title: "AI Implementations", value: "300+", desc: "Successful AI deployments", gradient: "from-purple-50 to-violet-50" },
                { title: "Autonomous Processes", value: "1000+", desc: "AI-powered workflows", gradient: "from-violet-50 to-fuchsia-50" },
                { title: "Average Efficiency Gain", value: "65%", desc: "Process optimization", gradient: "from-fuchsia-50 to-pink-50" }
              ].map((metric, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${metric.gradient} rounded-xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-600">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-purple-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                Why Choose IfBash
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted AI
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  Innovation Partner
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Partner with certified ServiceNow AI specialists who deliver cutting-edge generative and agentic AI solutions with proven results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  icon: Brain,
                  title: "Certified AI Specialists",
                  description: "Our team includes ServiceNow certified AI professionals with deep expertise in machine learning, natural language processing, and autonomous agent development across enterprise AI implementations.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-fuchsia-50"
                },
                {
                  icon: Sparkles,
                  title: "300+ AI Implementations",
                  description: "Proven track record of successful AI deployments including Now Assist, custom virtual agents, and agentic AI solutions with 95% client satisfaction and measurable ROI across all implementations.",
                  gradient: "from-violet-600 to-fuchsia-600",
                  bgGradient: "from-violet-50 via-fuchsia-50 to-pink-50"
                },
                {
                  icon: Shield,
                  title: "Responsible AI Development",
                  description: "Ethical AI implementation with comprehensive security, privacy controls, bias mitigation, and transparent decision-making processes ensuring responsible and trustworthy AI deployment.",
                  gradient: "from-fuchsia-600 to-pink-600",
                  bgGradient: "from-fuchsia-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Rocket,
                  title: "Cutting-Edge Innovation",
                  description: "Leading AI innovation with latest generative AI models, autonomous agents, and predictive analytics that keep your organization at the forefront of intelligent automation technology.",
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
                { title: "Rapid Deployment", desc: "8-16 weeks implementation", icon: Zap, gradient: "from-green-50 to-emerald-50", iconColor: "text-green-600" },
                { title: "Custom AI Models", desc: "Tailored intelligence solutions", icon: Cpu, gradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600" },
                { title: "24/7 AI Monitoring", desc: "Continuous optimization", icon: Activity, gradient: "from-indigo-50 to-purple-50", iconColor: "text-indigo-600" },
                { title: "ROI Guarantee", desc: "Measurable value delivery", icon: TrendingUp, gradient: "from-orange-50 to-yellow-50", iconColor: "text-orange-600" }
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

        {/* AI IMPLEMENTATION PROCESS SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-purple-50/50 to-violet-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-100 via-violet-100 to-fuchsia-100 text-purple-700 mb-6 px-4 py-2 border border-purple-200/50">
                Our AI Implementation Process
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Proven AI Implementation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  Methodology
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our systematic AI implementation approach ensures successful deployment of generative and agentic AI solutions with measurable business impact
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "1. AI Strategy & Assessment",
                  description: "Comprehensive AI readiness assessment, use case identification, and strategic roadmap development with ROI projections and success metrics.",
                  gradient: "from-purple-600 to-violet-600",
                  bgGradient: "from-purple-50 via-violet-50 to-fuchsia-50"
                },
                {
                  icon: Brain,
                  title: "2. AI Design & Architecture",
                  description: "AI solution architecture design, model selection, agent behavior definition, and integration planning with existing ServiceNow systems.",
                  gradient: "from-violet-600 to-fuchsia-600",
                  bgGradient: "from-violet-50 via-fuchsia-50 to-pink-50"
                },
                {
                  icon: Code2,
                  title: "3. AI Development & Training",
                  description: "AI model development, training data preparation, virtual agent creation, and custom algorithm implementation with comprehensive testing.",
                  gradient: "from-fuchsia-600 to-pink-600",
                  bgGradient: "from-fuchsia-50 via-pink-50 to-rose-50"
                },
                {
                  icon: Rocket,
                  title: "4. Deployment & Optimization",
                  description: "AI solution deployment, performance monitoring, continuous learning implementation, and ongoing optimization for maximum effectiveness.",
                  gradient: "from-pink-600 to-rose-600",
                  bgGradient: "from-pink-50 via-rose-50 to-red-50"
                }
              ].map((step, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-gray-200/50`}>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-violet-400" />
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
            
            {/* AI Implementation Timeline */}
            <div className="mt-16 bg-gradient-to-br from-white via-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Typical AI Implementation Timeline
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: "Weeks 1-2", activity: "AI Strategy & Assessment", deliverable: "AI Roadmap & Strategy", gradient: "from-purple-50 to-violet-50" },
                  { phase: "Weeks 3-6", activity: "Design & Architecture", deliverable: "AI Solution Design", gradient: "from-violet-50 to-fuchsia-50" },
                  { phase: "Weeks 7-12", activity: "Development & Training", deliverable: "Trained AI Models", gradient: "from-fuchsia-50 to-pink-50" },
                  { phase: "Weeks 13-16", activity: "Deployment & Optimization", deliverable: "Live AI Solutions", gradient: "from-pink-50 to-rose-50" }
                ].map((timeline, index) => (
                  <div key={index} className={`text-center p-4 bg-gradient-to-br ${timeline.gradient} rounded-lg border border-gray-200/30`}>
                    <div className="text-lg font-bold text-purple-600 mb-2">{timeline.phase}</div>
                    <div className="font-semibold text-gray-900 mb-1">{timeline.activity}</div>
                    <div className="text-sm text-gray-600">{timeline.deliverable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-slate-100 via-purple-100 to-violet-100 text-slate-700 mb-6 px-4 py-2 border border-slate-200/50">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                AI Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about ServiceNow Generative AI and Agentic AI services
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are ServiceNow Generative AI Services?",
                  answer: "ServiceNow Generative AI Services encompass Now Assist implementation, AI-powered content generation, virtual agent development, text-to-code solutions, and intelligent automation using advanced AI capabilities. These services include automated case summarization, knowledge article generation, predictive analytics, and autonomous decision-making systems that transform business processes through sophisticated machine learning and natural language processing.",
                  gradient: "from-purple-50 via-violet-50 to-fuchsia-50"
                },
                {
                  question: "What is the difference between Generative AI and Agentic AI?",
                  answer: "Generative AI creates new content like text, code, images, and documents from existing data patterns, focusing on content creation and automation. Agentic AI goes beyond generation to autonomous decision-making, taking independent actions, learning from interactions, and executing complex workflows without human intervention. While Generative AI assists users, Agentic AI operates autonomously to achieve specific goals and objectives.",
                  gradient: "from-violet-50 via-fuchsia-50 to-pink-50"
                },
                {
                  question: "How long does AI implementation typically take?",
                  answer: "AI implementation duration varies by complexity: Basic Now Assist implementation takes 8-12 weeks, custom generative AI solutions require 12-16 weeks, while comprehensive agentic AI systems need 16-20 weeks. Our accelerated methodology includes parallel development, pre-trained models, and proven frameworks that reduce implementation time by 40% compared to traditional approaches.",
                  gradient: "from-fuchsia-50 via-pink-50 to-rose-50"
                },
                {
                  question: "What ROI can I expect from AI implementation?",
                  answer: "Organizations typically achieve 60% reduction in manual tasks, 70% faster case resolution, 80% improvement in user satisfaction, and 400% average ROI within 12 months. AI implementations deliver value through automated processes, intelligent decision-making, enhanced user experiences, predictive insights, and autonomous workflow execution that dramatically improves operational efficiency and business outcomes.",
                  gradient: "from-pink-50 via-rose-50 to-red-50"
                },
                {
                  question: "Do you provide AI model training and customization?",
                  answer: "Yes, we provide comprehensive AI model training including custom model development, domain-specific training data preparation, fine-tuning for your business context, and continuous learning implementation. Our services include natural language processing customization, computer vision training, predictive model development, and autonomous agent behavior optimization tailored to your specific use cases and business requirements.",
                  gradient: "from-blue-50 via-indigo-50 to-purple-50"
                },
                {
                  question: "How do you ensure AI security and compliance?",
                  answer: "We implement comprehensive AI security including data encryption, access controls, audit trails, bias mitigation, and privacy protection. Our approach includes responsible AI governance, transparent decision-making processes, compliance with regulations like GDPR and industry standards, continuous monitoring for ethical AI behavior, and robust security frameworks that protect sensitive data and ensure trustworthy AI operations.",
                  gradient: "from-emerald-50 via-teal-50 to-cyan-50"
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gradient-to-br ${faq.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200/50`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-purple-700 mr-2 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <div className="text-gray-800 leading-relaxed pl-6">
                    <span className="text-violet-700 font-bold mr-2">A:</span>
                    <span className="text-gray-700">{faq.answer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Ready to explore AI possibilities for your organization?
              </p>
              <Button className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule AI Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-600/10 via-violet-600/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-fuchsia-600/10 via-purple-600/5 to-transparent" />
          </div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <Badge className="bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-fuchsia-500/20 text-white border-white/20 mb-6 px-4 py-2">
              Ready for AI Innovation?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform with ServiceNow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">
                Generative & Agentic AI
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Join 300+ organizations leveraging cutting-edge AI solutions to automate processes, enhance user experiences, and drive autonomous decision-making. Start your AI transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700">
                <Sparkles className="mr-2 h-5 w-5" />
                Start AI Implementation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/70 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Download AI Guide
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Phone className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white text-sm">Call Us</p>
                <p className="text-purple-200 text-xs">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-violet-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Mail className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                <p className="text-white text-sm">Email Us</p>
                <p className="text-violet-200 text-xs">ai@ifbash.com</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-fuchsia-500/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <Calendar className="h-6 w-6 text-fuchsia-400 mx-auto mb-2" />
                <p className="text-white text-sm">Schedule Demo</p>
                <p className="text-fuchsia-200 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
