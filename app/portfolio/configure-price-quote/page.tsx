'use client';
import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/placeholder-image";
import {
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Rocket,
  Target,
  Brain,
  Globe,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  Search,
  Filter,
  Calendar,
  User,
  GraduationCap,
  Coffee,
  Briefcase,
  Code,
  Lightbulb,
  Award,
  Shield,
  Zap,
  Settings,
  Database,
  TrendingUp,
  Quote,
  Play,
  Mail,
  Phone,
  Building,
  Factory,
  Stethoscope,
  Car,
  Banknote,
  ShoppingCart,
  Radio,
  Fuel,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Eye,
  BarChart3,
  Timer,
  Gauge,
  Video,
  Mic,
  Users2,
  Trophy,
  Presentation,
  ChevronRight,
  Share2,
  Bell,
  PlusCircle,
  Tag,
  Newspaper,
  Layers,
  Network,
  Cpu,
  Monitor,
  GitBranch,
  Workflow,
  PieChart,
  LineChart,
  Activity,
  Cloud,
  CloudLightning,
  Compass,
  Package,
  AlertTriangle,
  TrendingDown,
  RefreshCw,
  MousePointer,
  Layout,
  UserCheck,
  Palette,
  BarChart,
  GitCommit,
  Info,
  List,
  Server,
  TabletSmartphone,
  Sparkles,
  Boxes,
  Component,
  Layers3,
  ChevronDown,
  Building2,
  Cog,
  TreePine,
  Map,
  FileBarChart,
  CloudCog,
  CreditCard,
  ShieldCheck,
  Banknote as CostIcon,
  CloudDrizzle,
  Wrench,
  Search as DiscoverIcon,
  AlertTriangle as AlertIcon,
  HardHat,
  Laptop,
  HardDrive,
  Smartphone,
  ChevronUp,
  Bot,
  Radar,
  Route,
  FileX,
  MonitorSpeaker,
  CircuitBoard,
  Gauge as GaugeIcon,
  ChevronRightIcon,
  HelpCircle,
  RepeatIcon,
  GitMerge,
  Shuffle,
  BarChart4,
  Layers2,
  Link,
  Navigation,
  Gamepad2,
  TestTube2,
  Smile,
  Leaf,
  Headphones,
  ThumbsUp,
  MessageSquare,
  Headset,
  Truck,
  ShoppingBag,
  Store,
  Receipt,
  Calculator,
  HandCoins,
  Percent,
  FileCheck
} from "lucide-react";

export default function ConfigurePriceQuotePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // SEO JSON-LD with FAQ Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Configure Price Quote (CPQ) - ServiceNow CPQ Implementation",
    "description": "Boost sales velocity and efficiency with AI-powered CPQ from ServiceNow. Drive omnichannel revenue and eliminate quoting inefficiencies with guided configuration.",
    "applicationCategory": "Configure Price Quote"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Configure Price Quote (CPQ) and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow CPQ uses a powerful logic engine and AI to handle complex rules and pricing in real time. A flexible, API-first design fits into any sales process, with no coding needed, powering 85% of the Fortune 500."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the key benefits of ServiceNow CPQ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPQ accelerates sales cycles, drives revenue across all channels with consistent quotes, and simplifies rule, pricing, and configuration management with no-code administration."
        }
      }
    ]
  };

  // Benefits (From ServiceNow CPQ content)
  const benefits = [
    {
      icon: Clock,
      title: "Accelerate the sales cycle",
      description: "Guide sellers through configuration and deliver accurate pricing. Quote faster, close more deals, and help sellers spend more time with their customers.",
      color: "from-violet-500 to-purple-500",
      stats: "Faster deal closure"
    },
    {
      icon: TrendingUp,
      title: "Drive revenue in any channel",
      description: "Tap into multiple revenue sources with consistent and accurate quotes across direct sales, partner portals, and ecommerce.",
      color: "from-purple-500 to-fuchsia-500",
      stats: "Omnichannel revenue"
    },
    {
      icon: Settings,
      title: "Manage CPQ with ease",
      description: "Simplify rule, pricing, and configuration management with no-code, point-and-click administration for agile sales operations.",
      color: "from-fuchsia-500 to-pink-500",
      stats: "No-code management"
    },
    {
      icon: Bot,
      title: "AI-powered logic engine",
      description: "Handle complex rules and pricing in real time with powerful AI that eliminates quoting inefficiencies and drives sales velocity.",
      color: "from-pink-500 to-rose-500",
      stats: "Real-time AI processing"
    }
  ];

  // CPQ Use Cases (From ServiceNow content)
  const cpqUseCases = [
    {
      icon: Compass,
      title: "Guided Configuration",
      description: "Help sellers, partners, and customers build the right solutions fast. AI-guided selling flows help simplify the most complex configurations.",
      capabilities: [
        "AI-guided selling flows",
        "Complex configuration simplification",
        "Partner and customer enablement",
        "Solution building assistance"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: FileCheck,
      title: "BOM and Data Extraction",
      description: "Extract data from any screen, form, or image to use it instantly in your workflows for accurate bill of materials and configuration.",
      capabilities: [
        "Screen data extraction",
        "Form processing automation",
        "Image data capture",
        "Instant workflow integration"
      ],
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: RefreshCw,
      title: "Subscriptions and Deal Modeling",
      description: "Quote subscriptions, recurring services, ramped deals, renewals, and bundles easily, with flexible models for any sales motion.",
      capabilities: [
        "Subscription management",
        "Recurring service quotes",
        "Ramped deal modeling",
        "Bundle configuration"
      ],
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Percent,
      title: "Optimized Pricing",
      description: "Apply pricing, discounts, and approvals dynamically. Make quotes more accurate and competitive while aligning to business rules.",
      capabilities: [
        "Dynamic pricing application",
        "Automated discount management",
        "Approval workflow integration",
        "Business rule alignment"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Self-service Quoting Anywhere",
      description: "Empower customers and partners to build accurate quotes online while your sales team uses the same system for aligned transactions.",
      capabilities: [
        "Customer self-service portals",
        "Partner quote generation",
        "Unified system architecture",
        "Transaction alignment"
      ],
      color: "from-rose-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Agile Admin for Agile Sales",
      description: "Make real-time CPQ updates to quickly respond to sales needs and market changes. Add products, adjust pricing, or change logic without waiting for IT.",
      capabilities: [
        "Real-time system updates",
        "Product addition workflows",
        "Pricing adjustment tools",
        "Logic configuration changes"
      ],
      color: "from-red-500 to-orange-500"
    }
  ];

  // CPQ Features
  const cpqFeatures = [
    {
      title: "AI-Powered Logic Engine",
      description: "Handle complex rules and pricing in real time with powerful AI that processes multiple variables instantly.",
      icon: Brain,
      stat: "Real-time processing"
    },
    {
      title: "API-First Design", 
      description: "Flexible integration that fits into any sales process with no coding needed for implementation.",
      icon: Code,
      stat: "No coding required"
    },
    {
      title: "Fortune 500 Proven",
      description: "Powers 85% of Fortune 500 companies with enterprise-grade reliability and scalability.",
      icon: Trophy,
      stat: "85% Fortune 500"
    },
    {
      title: "No-Code Administration",
      description: "Point-and-click administration for easy rule, pricing, and configuration management.",
      icon: MousePointer,
      stat: "Simplified management"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Configure Price Quote (CPQ) and how does it work?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow CPQ is an AI-powered solution that simplifies and accelerates sales across all channels:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Uses a powerful logic engine and AI to handle complex rules and pricing in real time</li>
            <li>Features flexible, API-first design that fits into any sales process</li>
            <li>Requires no coding for implementation and management</li>
            <li>Powers 85% of Fortune 500 companies with proven enterprise capabilities</li>
            <li>Eliminates quoting inefficiencies and drives sales velocity</li>
          </ul>
          <p className="mt-3 text-sm text-violet-600">
            <strong>AI-Driven Intelligence</strong> processes complex configurations and pricing automatically.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the key benefits of ServiceNow CPQ?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CPQ delivers three core benefits for sales organizations:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Accelerate Sales Cycle:</strong> Guide sellers through configuration and deliver accurate pricing to quote faster and close more deals</li>
            <li><strong>Drive Revenue in Any Channel:</strong> Tap into multiple revenue sources with consistent and accurate quotes across direct sales, partner portals, and ecommerce</li>
            <li><strong>Manage CPQ with Ease:</strong> Simplify rule, pricing, and configuration management with no-code, point-and-click administration</li>
          </ul>
          <p className="mt-3">
            These benefits help sellers spend more time with customers while ensuring accuracy and consistency across all sales channels.
          </p>
        </div>
      )
    },

    {
      question: "What are the main use cases for ServiceNow CPQ?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CPQ supports comprehensive sales scenarios:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Core Use Cases:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Guided Configuration:</strong> AI-guided selling flows for complex product configurations</li>
                <li><strong>BOM and Data Extraction:</strong> Extract data from screens, forms, or images instantly</li>
                <li><strong>Subscriptions and Deal Modeling:</strong> Quote recurring services, ramped deals, and bundles</li>
                <li><strong>Optimized Pricing:</strong> Dynamic pricing, discounts, and approval workflows</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-fuchsia-600 mb-2">Advanced Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li><strong>Self-service Quoting:</strong> Customer and partner portal integration</li>
                <li><strong>Agile Administration:</strong> Real-time updates without IT dependency</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow CPQ handle complex product configurations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow CPQ provides guided configuration capabilities for even the most complex products:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>AI-Guided Selling Flows:</strong> Intelligent recommendations based on customer requirements and business rules</li>
            <li><strong>Visual Configuration Tools:</strong> Interactive product builders with real-time validation</li>
            <li><strong>Constraint-Based Logic:</strong> Automatic enforcement of compatibility rules and dependencies</li>
            <li><strong>Multi-Level Product Hierarchies:</strong> Support for complex product families and option groups</li>
            <li><strong>Real-Time Pricing:</strong> Dynamic price calculation based on configuration choices</li>
            <li><strong>Approval Workflows:</strong> Automated routing for complex deals requiring management approval</li>
          </ul>
          <p className="mt-3">
            This ensures sellers can configure even the most complex products accurately while maintaining competitive pricing.
          </p>
        </div>
      )
    },

    {
      question: "What pricing and discount capabilities does ServiceNow CPQ provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CPQ offers comprehensive pricing and discount management:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Dynamic Pricing Features:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Volume-based pricing tiers and quantity breaks</li>
                <li>Customer-specific pricing and contract rates</li>
                <li>Geographic and currency-based pricing</li>
                <li>Time-based pricing for limited offers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Discount Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Automated discount calculation and application</li>
                <li>Approval workflows for discount thresholds</li>
                <li>Promotional pricing and bundle discounts</li>
                <li>Margin protection and competitive response</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Business Rule Alignment:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Compliance with pricing policies and guidelines</li>
                <li>Automated margin analysis and protection</li>
                <li>Integration with financial and ERP systems</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow CPQ implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on configuration complexity, user count, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CPQ Standard Implementation:</strong> Starting from $200K - includes basic configuration, pricing, and quoting for up to 50 sales users</li>
            <li><strong>CPQ Professional Implementation:</strong> $350K-$500K - includes advanced features, guided selling, and complex integrations for up to 200 users</li>
            <li><strong>Enterprise CPQ Suite:</strong> $600K+ - complete solution with AI capabilities, omnichannel integration, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 8-12 months through sales acceleration, improved quote accuracy, and reduced administrative overhead.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "CPQ ROI Calculator", url: "/cpq-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ServiceNow CPQ?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on product complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CPQ Standard:</strong> 12-16 weeks for basic configuration, pricing rules, and simple integrations</li>
            <li><strong>CPQ Professional:</strong> 16-22 weeks including guided selling, advanced pricing, and CRM integration</li>
            <li><strong>Enterprise CPQ Suite:</strong> 22-30 weeks for complete solution with AI capabilities and extensive integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Product Analysis & Rules Design (3-4 weeks) → CPQ Configuration & Testing (8-12 weeks) → Integration & User Training (4-6 weeks) → Go-Live & Optimization (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow CPQ integrate with existing CRM and ERP systems?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CPQ provides seamless integration capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CRM Integration:</strong> Native integration with Salesforce, Microsoft Dynamics, and ServiceNow CRM</li>
            <li><strong>ERP Systems:</strong> Real-time connection with SAP, Oracle, Microsoft for pricing and inventory</li>
            <li><strong>E-commerce Platforms:</strong> Integration with online stores and marketplace platforms</li>
            <li><strong>Document Management:</strong> Automated proposal and contract generation systems</li>
            <li><strong>Financial Systems:</strong> Connection with billing, invoicing, and revenue recognition platforms</li>
            <li><strong>Product Information Management:</strong> Synchronization with PIM and catalog management systems</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing technology investments while gaining powerful CPQ capabilities with minimal disruption.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (From ServiceNow CPQ content)
  const caseStudies = [
    {
      title: "Keysight Speeds Quoting and Boosts Digital Commerce",
      client: "Keysight Technologies",
      industry: "Technology & Electronics",
      challenge: "Complex product configurations required extensive manual processes with lengthy quote processing times affecting sales velocity and customer experience",
      solution: "ServiceNow CPQ with advanced configuration capabilities, automated pricing, and guided selling flows for complex electronic test equipment",
      results: [
        { metric: "40%", description: "Quote processing time reduction" },
        { metric: "Simplified", description: "Product setup process" },
        { metric: "Enhanced", description: "Digital commerce capabilities" },
        { metric: "Improved", description: "Sales team efficiency" }
      ],
      testimonial: "With CPQ advanced configuration, Keysight Technologies reduced quote processing time by 40% and simplified product setup for our complex electronic test equipment.",
      executive: "VP of Sales Operations",
      logo: "/images/clients/keysight-logo.png"
    },
    {
      title: "StormTrap Transforms Engineering Workflows with CPQ Self-Service",
      client: "StormTrap",
      industry: "Engineering & Construction",
      challenge: "Duplicate data entries and slow design processes were affecting customer solution delivery and engineering team productivity",
      solution: "ServiceNow CPQ with self-service tools, single data model architecture, and automated engineering workflow integration",
      results: [
        { metric: "Single", description: "Data model implementation" },
        { metric: "Eliminated", description: "Duplicate entries" },
        { metric: "Accelerated", description: "Design processes" },
        { metric: "Faster", description: "Customer solutions" }
      ],
      testimonial: "CPQ gave StormTrap a single data model to remove duplicate entries, speed designs, and deliver faster customer solutions.",
      executive: "Engineering Director",
      logo: "/images/clients/stormtrap-logo.png"
    },
    {
      title: "Oldcastle Elevates Sales, Service, and Security Through CPQ",
      client: "Oldcastle",
      industry: "Manufacturing & Construction",
      challenge: "Siloed systems across sales, manufacturing, and admin teams created inefficiencies and inconsistent customer service experiences",
      solution: "Unified ServiceNow CPQ platform integrating all business functions with streamlined workflows and consistent data management",
      results: [
        { metric: "Unified", description: "Siloed systems integration" },
        { metric: "Improved", description: "Operational efficiency" },
        { metric: "Enhanced", description: "Customer service quality" },
        { metric: "Streamlined", description: "Cross-team workflows" }
      ],
      testimonial: "With one platform, Oldcastle unified siloed systems, improving efficiency and customer service across sales, manufacturing, and admin teams.",
      executive: "Chief Operations Officer",
      logo: "/images/clients/oldcastle-logo.png"
    },
    {
      title: "Fortress Building Products Delivers Instant, Accurate Quotes",
      client: "Fortress Building Products",
      industry: "Building Materials",
      challenge: "Manual quote processes caused delays and inaccuracies, while sales team efficiency was limited by complex product configurations",
      solution: "ServiceNow CPQ with guided selling capabilities, visual proposal generation, and automated quote processing for building materials",
      results: [
        { metric: "Zero", description: "Wait time for quotes" },
        { metric: "Accurate", description: "Visual proposals" },
        { metric: "Greater", description: "Sales team efficiency" },
        { metric: "Streamlined", description: "Quote processes" }
      ],
      testimonial: "CPQ gave Fortress Building Products zero wait time for quotes, accurate visual proposals, and greater sales team efficiency.",
      executive: "VP of Sales",
      logo: "/images/clients/fortress-logo.png"
    },
    {
      title: "CORT Delivers Perfect-Fit Rentals with CPQ Guided Selling",
      client: "CORT",
      industry: "Furniture Rental",
      challenge: "Complex rental catalog management and order processing delays were affecting customer experience and online expansion capabilities",
      solution: "ServiceNow CPQ with guided selling for rentals, catalog management tools, and zero-delay order processing for furniture rental services",
      results: [
        { metric: "Faster", description: "Catalog updates" },
        { metric: "Expanded", description: "Online offerings" },
        { metric: "Zero", description: "Rental order delays" },
        { metric: "Perfect-fit", description: "Rental matching" }
      ],
      testimonial: "With CPQ, CORT updated its catalog faster, expands online offerings, and processes rental orders with zero delays.",
      executive: "Director of Digital Commerce",
      logo: "/images/clients/cort-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Configure Price Quote (CPQ) - Complete ServiceNow CPQ Portfolio | ifBash</title>
        <meta
          name="description"
          content="Boost sales velocity and efficiency with AI-powered CPQ from ServiceNow. Drive omnichannel revenue and eliminate quoting inefficiencies with guided configuration."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <button 
          onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss CPQ Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss CPQ Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-violet-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-fuchsia-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-violet-500/90 to-purple-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/90 to-fuchsia-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered CPQ
                  </Badge>
                  <Badge className="bg-gradient-to-r from-fuchsia-500/90 to-pink-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Fortune 500
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 font-semibold">
                    Configure Price
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 font-semibold">
                      Quote (CPQ)
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-violet-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-purple-300">Boost sales velocity and efficiency</span> with AI-powered CPQ that drives omnichannel revenue and{' '}
                  <span className="font-semibold text-fuchsia-300">eliminates quoting inefficiencies</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-fuchsia-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get CPQ Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-fuchsia-400 group-hover:text-fuchsia-300" />
                      Schedule Demo
                    </span>
                  </button>
                </div>

                {/* Fortune 500 Badge */}
                <div className="bg-gradient-to-r from-violet-500/15 to-purple-500/15 backdrop-blur-sm rounded-xl p-4 border border-violet-300/20">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-violet-300" />
                    <div>
                      <div className="text-lg font-bold text-white">Powering 85% of the Fortune 500</div>
                      <div className="text-sm text-violet-200">Trusted by enterprise leaders worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Configure Price Quote Platform"
                      className="w-full h-full object-cover"
                      gradient="from-violet-600 to-purple-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Logic</div>
                      <div className="text-xs text-violet-200">Real-time</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">No-Code</div>
                      <div className="text-xs text-purple-200">Management</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Calculator className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Receipt className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
                  Benefits of ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  CPQ
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Accelerate sales cycles, drive omnichannel revenue, and manage complex configurations with AI-powered intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-violet-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200">
                      <div className="text-sm font-semibold text-violet-700 mb-1">Key Value</div>
                      <div className="text-violet-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CPQ Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600">
                  CPQ Core Features
                </span>
                <br />
                <span className="text-gray-800">
                  Enterprise-Grade Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Powerful AI-driven features that handle complex configurations and pricing with enterprise reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cpqFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Capability</div>
                      <div className="text-purple-600 text-lg font-bold">{feature.stat}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CPQ Use Cases Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-fuchsia-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600">
                  CPQ Use Cases
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Sales Scenarios
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive use cases covering guided configuration, pricing optimization, and self-service capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cpqUseCases.map((useCase, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-fuchsia-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {useCase.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Configure Price Quote
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about CPQ implementation, pricing capabilities, and configuration management.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 focus:outline-none focus:bg-gray-50/50"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        activeFAQ === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-pink-500 to-rose-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.text}
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-900 via-pink-900 to-fuchsia-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-rose-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real CPQ Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their sales operations with AI-powered Configure Price Quote capabilities.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-200 border border-rose-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-fuchsia-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-rose-400">
                              <Quote className="h-6 w-6 text-rose-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-rose-300">— {study.executive}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                  <div className="text-2xl font-bold text-green-400 mb-1">{result.metric}</div>
                                  <div className="text-xs text-gray-300">{result.description}</div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-3">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                  ))}
                                </div>
                                <span className="text-rose-200 text-sm">(5.0/5.0)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-rose-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Accelerate Your Sales with CPQ?
                </h2>
                <p className="text-lg md:text-xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement AI-powered CPQ that drives omnichannel revenue and eliminates quoting inefficiencies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-rose-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact CPQ Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-rose-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">cpq-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-fuchsia-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Schedule Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 0.75s;
        }

        .delay-150 {
          animation-delay: 1.5s;
        }

        .delay-300 {
          animation-delay: 3s;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
}
