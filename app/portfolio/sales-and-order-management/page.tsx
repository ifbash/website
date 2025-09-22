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
  HandCoins
} from "lucide-react";

export default function SalesOrderManagementPage() {
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
    "name": "Sales and Order Management - ServiceNow SOM Implementation",
    "description": "Streamline lead-to-cash processes with ServiceNow Sales and Order Management. CPQ, salesforce automation, order management, and omnichannel capabilities.",
    "applicationCategory": "Sales and Order Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Sales and Order Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SOM streamlines the entire lead-to-cash process, from lead capture to order fulfillment and cash collection. It includes CPQ, salesforce automation, order management, and omnichannel capabilities on a unified platform."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the lead-to-cash process in ServiceNow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lead-to-cash encompasses all activities from selling to customers, fulfilling orders, and delivering ongoing services. ServiceNow manages this through a 5-step process: Qualify, Develop, Propose, Close, and Fulfill."
        }
      }
    ]
  };

  // Benefits (Based on ServiceNow content)
  const benefits = [
    {
      icon: TrendingUp,
      title: "Complete lead-to-cash automation",
      description: "Streamline the entire sales process from lead capture through order fulfillment with intelligent automation and unified workflows.",
      color: "from-teal-500 to-cyan-500",
      stats: "End-to-end process automation"
    },
    {
      icon: Calculator,
      title: "AI-powered CPQ capabilities",
      description: "Configure, price, and quote complex deals intelligently with AI guidance that delivers fast, accurate, customer-centric proposals.",
      color: "from-cyan-500 to-blue-500",
      stats: "Faster deal closure"
    },
    {
      icon: Receipt,
      title: "Intelligent order management",
      description: "Track and coordinate orders from inception to fulfillment with efficient processes across teams, software, and partner networks.",
      color: "from-blue-500 to-indigo-500",
      stats: "Seamless order tracking"
    },
    {
      icon: Globe,
      title: "Omnichannel sales integration",
      description: "Deliver seamless, integrated sales experiences across multiple channels including online, in-store, mobile, and partner portals.",
      color: "from-indigo-500 to-purple-500",
      stats: "Multi-channel consistency"
    }
  ];

  // SOM Core Capabilities (From ServiceNow content)
  const somCapabilities = [
    {
      icon: Users,
      title: "Lead Management",
      description: "Create and nurture leads from multiple channels with AI-powered recommendations and automated workflows for lead conversion.",
      capabilities: [
        "Multi-channel lead capture",
        "AI-powered product recommendations",
        "Automated lead nurturing",
        "Lead qualification workflows"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Calculator,
      title: "Configure Price Quote (CPQ)",
      description: "Intelligently guide product, pricing, and quoting decisions across channels to deliver fast, accurate, customer-centric deals.",
      capabilities: [
        "Complex product configuration",
        "Dynamic pricing strategies",
        "Automated quote generation",
        "Approval workflow management"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Bot,
      title: "Salesforce Automation",
      description: "Automate sales processes including lead and opportunity management, sales forecasting, and territory management.",
      capabilities: [
        "Opportunity management",
        "Sales forecasting",
        "Territory management",
        "Performance analytics"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Package,
      title: "Order Management",
      description: "Track and coordinate orders from inception to fulfillment with efficient processes among teams, software, and partners.",
      capabilities: [
        "Order lifecycle tracking",
        "Fulfillment orchestration",
        "Exception management",
        "Real-time order visibility"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Omnichannel Integration",
      description: "Seamless, integrated approach to sales, support, and service across online, in-store, mobile, and partner channels.",
      capabilities: [
        "Multi-channel coordination",
        "Consistent customer experience",
        "Partner portal integration",
        "Mobile sales enablement"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Lead-to-Cash Process",
      description: "Complete business process encompassing all activities from selling to customers through order fulfillment and service delivery.",
      capabilities: [
        "End-to-end process visibility",
        "Automated handoffs",
        "Exception handling",
        "Performance monitoring"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  // Lead-to-Cash Process Steps
  const leadToCashSteps = [
    {
      step: 1,
      title: "Qualify",
      description: "Identify and qualify potential customers based on marketing campaigns, referrals, and inbound inquiries with AI-powered lead scoring.",
      icon: Search,
      color: "from-teal-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Develop",
      description: "Create opportunities and clarify customer needs, setting goals and linking to existing accounts or creating new customer profiles.",
      icon: Users,
      color: "from-cyan-500 to-blue-500"
    },
    {
      step: 3,
      title: "Propose",
      description: "Generate accurate quotes with CPQ capabilities, including products, services, quantities, pricing, timelines, and terms.",
      icon: Calculator,
      color: "from-blue-500 to-indigo-500"
    },
    {
      step: 4,
      title: "Close",
      description: "Convert accepted quotes into firm orders, confirming purchase details, quantities, terms, delivery schedules, and logistics.",
      icon: CheckCircle,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: 5,
      title: "Fulfill",
      description: "Execute order fulfillment with automated invoicing, payment processing, and ongoing service delivery management.",
      icon: Package,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Sales Performance Metrics
  const salesMetrics = [
    {
      icon: Clock,
      title: "Sales Cycle Acceleration",
      description: "Reduce time from lead to close with automated workflows and intelligent quote generation capabilities.",
      metric: "40% faster sales cycles"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Increase revenue through better lead conversion, accurate pricing, and cross-channel sales optimization.",
      metric: "25% revenue increase"
    },
    {
      icon: Target,
      title: "Quote Accuracy",
      description: "Improve quote accuracy and reduce errors with AI-powered configuration and pricing recommendations.",
      metric: "95% quote accuracy"
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description: "Enhance customer experience through consistent omnichannel engagement and faster order processing.",
      metric: "90% satisfaction score"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Sales and Order Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Sales and Order Management (SOM) streamlines the entire lead-to-cash process by providing:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Complete end-to-end sales process automation from lead capture to fulfillment</li>
            <li>AI-powered CPQ for complex product configuration and pricing</li>
            <li>Intelligent order management with real-time tracking and coordination</li>
            <li>Omnichannel integration across all sales and service touchpoints</li>
            <li>Unified platform connecting sales, fulfillment, and service teams</li>
          </ul>
          <p className="mt-3 text-sm text-teal-600">
            <strong>Built on ServiceNow Platform</strong> with single data model for consistent customer experiences.
          </p>
        </div>
      )
    },
    
    {
      question: "What is the lead-to-cash process and how does ServiceNow manage it?",
      answer: (
        <div>
          <p className="mb-3">Lead-to-cash encompasses all activities from selling to customers through order fulfillment. ServiceNow manages this through a 5-step process:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Qualify:</strong> Identify and qualify potential customers with AI-powered lead scoring</li>
            <li><strong>Develop:</strong> Create opportunities and clarify customer needs with account management</li>
            <li><strong>Propose:</strong> Generate accurate quotes using CPQ with complex configuration and pricing</li>
            <li><strong>Close:</strong> Convert accepted quotes into firm orders with automated workflows</li>
            <li><strong>Fulfill:</strong> Execute order fulfillment with automated invoicing and service delivery</li>
          </ul>
          <p className="mt-3">
            This unified approach reduces manual handoffs, improves accuracy, and accelerates revenue collection.
          </p>
        </div>
      )
    },

    {
      question: "What are the key features of ServiceNow CPQ (Configure Price Quote)?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow CPQ provides intelligent guidance for product, pricing, and quoting decisions:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-cyan-600 mb-2">Core CPQ Capabilities:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>AI-powered logic engine for complex rules and pricing</li>
                <li>Real-time configuration and pricing recommendations</li>
                <li>Flexible, API-first design with no coding required</li>
                <li>Guided selling flows for complex configurations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Business Benefits:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Accelerated sales cycles with faster, accurate quotes</li>
                <li>Multi-channel revenue optimization across all touchpoints</li>
                <li>Simplified administration with no-code management</li>
                <li>Enhanced seller productivity and customer experience</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow order management handle complex fulfillment processes?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow order management provides comprehensive tracking and coordination capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Order Lifecycle Management:</strong> Complete visibility from order creation through fulfillment</li>
            <li><strong>Orchestration Workflows:</strong> Automated task execution based on predefined fulfillment plans</li>
            <li><strong>Exception Handling:</strong> Proactive detection and resolution of fulfillment issues</li>
            <li><strong>Multi-System Integration:</strong> Seamless coordination across teams, software, and partners</li>
            <li><strong>Real-Time Updates:</strong> Live status tracking and customer communication</li>
          </ul>
          <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">
            <p className="text-sm text-indigo-800"><strong>Advanced Features:</strong> In-flight change management, fallout management, and jeopardy management for comprehensive order handling.</p>
          </div>
        </div>
      )
    },

    {
      question: "What omnichannel capabilities does ServiceNow Sales and Order Management provide?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow delivers seamless, integrated sales experiences across all channels:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Channel Integration:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Direct sales teams with full CRM capabilities</li>
                <li>Partner portals with self-service configuration and ordering</li>
                <li>E-commerce integration with real-time inventory and pricing</li>
                <li>Mobile sales enablement for field representatives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Unified Experience:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Consistent pricing and product configuration across channels</li>
                <li>Single customer view with complete interaction history</li>
                <li>Seamless handoffs between pre-sales and post-sales teams</li>
                <li>Integrated customer service and support capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow Sales and Order Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, sales complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SOM Standard Implementation:</strong> Starting from $300K - includes basic CPQ, order management, and CRM integration for up to 100 sales users</li>
            <li><strong>SOM Professional Implementation:</strong> $500K-$750K - includes advanced CPQ, omnichannel capabilities, and complex fulfillment workflows for up to 500 users</li>
            <li><strong>Enterprise SOM Suite:</strong> $1M+ - complete lead-to-cash automation with AI capabilities, custom integrations, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through sales acceleration (40%), revenue growth (25%), and operational efficiency improvements.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SOM ROI Calculator", url: "/som-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for Sales and Order Management?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on sales complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SOM Standard:</strong> 16-20 weeks for basic CPQ, order management, and CRM integration</li>
            <li><strong>SOM Professional:</strong> 20-26 weeks including advanced CPQ, omnichannel setup, and complex fulfillment workflows</li>
            <li><strong>Enterprise SOM Suite:</strong> 26-34 weeks for complete lead-to-cash automation with AI capabilities and extensive integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Sales Process Analysis (4-5 weeks) → Platform Configuration & CPQ Setup (10-14 weeks) → Integration & Testing (6-8 weeks) → Go-Live & Training (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow SOM integrate with existing CRM and ERP systems?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow SOM provides comprehensive integration capabilities with existing systems:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CRM Integration:</strong> Seamless connection with Salesforce, Microsoft Dynamics, and other CRM platforms</li>
            <li><strong>ERP Systems:</strong> Integration with SAP, Oracle, Microsoft for financial and inventory management</li>
            <li><strong>E-commerce Platforms:</strong> Real-time connection with online stores and marketplace platforms</li>
            <li><strong>Billing Systems:</strong> Automated invoicing and payment processing integration</li>
            <li><strong>Marketing Automation:</strong> Lead generation and nurturing platform connectivity</li>
            <li><strong>Partner Systems:</strong> Channel partner portals and distributor integration</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing investments while gaining unified lead-to-cash capabilities and AI-powered sales optimization.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on SOM success stories)
  const caseStudies = [
    {
      title: "Global Technology Company Accelerates Sales 40% with AI-Powered SOM",
      client: "Enterprise Software Corporation",
      industry: "Technology & Software",
      challenge: "Complex product configurations and pricing across multiple channels with 60-day average sales cycles and frequent quote errors leading to deal delays",
      solution: "ServiceNow SOM with AI-powered CPQ, omnichannel integration, automated workflows, and real-time order tracking for enterprise software sales",
      results: [
        { metric: "40%", description: "Faster sales cycles" },
        { metric: "95%", description: "Quote accuracy improvement" },
        { metric: "25%", description: "Revenue growth achievement" },
        { metric: "Multi-channel", description: "Sales optimization" }
      ],
      testimonial: "ServiceNow SOM with AI-powered CPQ reduced our sales cycles by 40% and improved quote accuracy to 95%, driving 25% revenue growth across all channels.",
      executive: "VP of Global Sales",
      logo: "/images/clients/software-corp-logo.png"
    },
    {
      title: "Manufacturing Leader Streamlines Complex Orders with Unified SOM Platform",
      client: "Industrial Equipment Manufacturer",
      industry: "Manufacturing",
      challenge: "Complex product customization and engineering requirements across global markets with disconnected sales and fulfillment processes causing delays",
      solution: "Complete SOM platform with advanced CPQ, order orchestration, engineering workflows, and global partner portal integration for complex manufacturing sales",
      results: [
        { metric: "Complex", description: "Product configuration" },
        { metric: "Global", description: "Market coordination" },
        { metric: "Streamlined", description: "Order fulfillment" },
        { metric: "90%", description: "Customer satisfaction" }
      ],
      testimonial: "ServiceNow SOM unified our global sales and fulfillment processes, enabling complex product customization while achieving 90% customer satisfaction scores.",
      executive: "Chief Sales Officer",
      logo: "/images/clients/manufacturing-leader-logo.png"
    },
    {
      title: "Financial Services Firm Optimizes Lead-to-Cash with Omnichannel SOM",
      client: "Global Financial Services",
      industry: "Financial Services",
      challenge: "Multiple service offerings across various channels with inconsistent customer experiences and lengthy approval processes affecting deal closure",
      solution: "ServiceNow SOM with omnichannel integration, automated approval workflows, service catalog management, and customer self-service capabilities",
      results: [
        { metric: "Omnichannel", description: "Customer experience" },
        { metric: "Automated", description: "Approval workflows" },
        { metric: "Service", description: "Catalog optimization" },
        { metric: "Enhanced", description: "Self-service capabilities" }
      ],
      testimonial: "ServiceNow SOM created consistent omnichannel experiences across all our service offerings while streamlining approval workflows and enhancing customer self-service.",
      executive: "Head of Sales Operations",
      logo: "/images/clients/financial-services-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Sales and Order Management - Complete ServiceNow SOM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Streamline lead-to-cash processes with ServiceNow Sales and Order Management. CPQ, salesforce automation, order management, and omnichannel capabilities."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SOM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SOM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-teal-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered CPQ
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Lead-to-Cash
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 font-semibold">
                    Sales & Order
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-teal-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-cyan-300">Streamline lead-to-cash processes</span> with AI-powered CPQ, intelligent order management, and{' '}
                  <span className="font-semibold text-blue-300">omnichannel sales automation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 hover:from-teal-700 hover:via-cyan-700 hover:to-blue-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SOM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-blue-400 group-hover:text-blue-300" />
                      View Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Sales and Order Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-teal-600 to-cyan-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-CPQ</div>
                      <div className="text-xs text-teal-200">Smart Quoting</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Unified</div>
                      <div className="text-xs text-cyan-200">Lead-to-Cash</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ShoppingBag className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Calculator className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Benefits of Sales & Order
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform sales operations with unified lead-to-cash automation, AI-powered CPQ, and omnichannel integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Key Capability</div>
                      <div className="text-teal-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOM Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  SOM Core Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Sales Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive sales and order management with AI-powered automation and intelligent workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {somCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {capability.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {capability.capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {cap}
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

        {/* Lead-to-Cash Process Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Lead-to-Cash Process
                </span>
                <br />
                <span className="text-gray-800">
                  5-Step Automation
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Streamlined end-to-end process from lead qualification through order fulfillment with intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {leadToCashSteps.map((step, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-xl mx-auto`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-gray-800 mb-2">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Performance Metrics Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Sales Performance
                </span>
                <br />
                <span className="text-gray-800">
                  Achievement Metrics
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Measure and improve sales performance with comprehensive tracking and optimization capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {salesMetrics.map((metric, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <metric.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {metric.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {metric.description}
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-700 mb-1">Target Achievement</div>
                      <div className="text-indigo-600 text-lg font-bold">{metric.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Sales and Order Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SOM implementation, CPQ capabilities, and lead-to-cash optimization.
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
                        <div className="w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-pink-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-purple-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SOM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their sales operations with AI-powered Sales and Order Management.
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
                              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-200 border border-pink-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-red-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-red-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4 border-l-4 border-purple-400">
                              <Quote className="h-6 w-6 text-purple-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-purple-300">— {study.executive}</p>
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
                                <span className="text-purple-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-purple-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Accelerate Sales Performance?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement AI-powered sales and order management with unified lead-to-cash automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SOM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get SOM Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">som-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Book Demo</p>
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
