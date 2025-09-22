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
  Settings as ToolIcon  // ✅ Fixed: Use Settings instead of Tool
} from "lucide-react";

export default function FieldServiceManagementPage() {
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
    "name": "Field Service Management - ServiceNow FSM Implementation",
    "description": "Manage work orders, resources, skills, assets, and locations with ServiceNow Field Service Management. Optimize scheduling, dispatch, and mobile workforce operations.",
    "applicationCategory": "Field Service Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Field Service Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow FSM enables management of work orders and related tasks, resources, skills, assets, and locations. It automates processes, enhances communication, and transforms field service delivery with AI-powered capabilities."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the key features of ServiceNow FSM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FSM includes dynamic scheduling, mobile agent capabilities, dispatcher workspace, asset management, inventory management, predictive intelligence, and Now Assist for enhanced field service operations."
        }
      }
    ]
  };

  // Benefits (Based on ServiceNow content)
  const benefits = [
    {
      icon: Calendar,
      title: "Intelligent scheduling & dispatch",
      description: "Assign tasks to the most qualified technician automatically using skill-based routing, location optimization, and real-time availability tracking.",
      color: "from-orange-500 to-amber-500",
      stats: "70% scheduling efficiency improvement"
    },
    {
      icon: Smartphone,
      title: "Mobile-first field operations",
      description: "Empower technicians with native mobile apps for iOS and Android, enabling offline work, real-time updates, and seamless field operations.",
      color: "from-amber-500 to-yellow-500",
      stats: "60% productivity improvement"
    },
    {
      icon: Truck,
      title: "Optimized route management",
      description: "Minimize travel time and costs with AI-powered route optimization, reducing fuel expenses and maximizing technician utilization.",
      color: "from-yellow-500 to-lime-500",
      stats: "40% reduction in travel time"
    },
    {
      icon: Cog,
      title: "Preventive maintenance automation",
      description: "Solve problems before customers notice them with automated preventive maintenance scheduling and asset management capabilities.",
      color: "from-lime-500 to-green-500",
      stats: "85% issue prevention rate"
    }
  ];

  // FSM Features (From ServiceNow research)
  const fsmFeatures = [
    {
      icon: Calendar,
      title: "Dynamic Scheduling",
      description: "Automatically assign tasks to the most qualified person using configurable rules based on skills, location, and inventory availability.",
      capabilities: [
        "Skill-based automatic assignment",
        "Location optimization",
        "Real-time availability tracking",
        "Configurable scheduling rules"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Monitor,
      title: "Dispatcher Workspace",
      description: "Unified workspace providing dispatchers with everything needed to make quick, informed scheduling decisions and manage field teams effectively.",
      capabilities: [
        "Unified dispatcher interface",
        "Real-time team visibility",
        "Quick scheduling decisions",
        "Field team management tools"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Agent",
      description: "Native mobile interface for technicians to examine and record data quickly, with offline capabilities and streamlined workflows.",
      capabilities: [
        "Native iOS and Android apps",
        "Offline work capabilities",
        "Real-time data recording",
        "Streamlined mobile workflows"
      ],
      color: "from-yellow-500 to-lime-500"
    },
    {
      icon: Bot,
      title: "Now Assist for FSM",
      description: "AI-powered capabilities driving productivity with generative AI experiences, conversational exchange, and content creation.",
      capabilities: [
        "Generative AI assistance",
        "Conversational interfaces",
        "Content creation automation",
        "Productivity enhancement"
      ],
      color: "from-lime-500 to-green-500"
    },
    {
      icon: Route,
      title: "Schedule Optimization",
      description: "Foster productivity by automating scheduling and route optimization to minimize travel time and maximize technician efficiency.",
      capabilities: [
        "Automated route optimization",
        "Travel time minimization",
        "Efficiency maximization",
        "Resource allocation optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users2,
      title: "Workforce Optimization",
      description: "Build high-performing service teams by streamlining schedules, tasks, and creating personalized coaching paths within a single platform.",
      capabilities: [
        "Team performance optimization",
        "Schedule streamlining",
        "Personalized coaching paths",
        "Cross-team collaboration"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Monitor and source trunk stock of field technicians in real-time, ensuring parts availability for efficient service delivery.",
      capabilities: [
        "Real-time inventory tracking",
        "Trunk stock management",
        "Parts availability monitoring",
        "Supply chain optimization"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Asset Management",
      description: "Core asset management capabilities for overseeing operations, infrastructure, and field services with comprehensive asset tracking.",
      capabilities: [
        "Comprehensive asset tracking",
        "Infrastructure oversight",
        "Operations management",
        "Asset lifecycle management"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  // Package Options (From ServiceNow attachment)
  const packageOptions = [
    {
      icon: Package,
      title: "FSM Standard",
      description: "Essential field service capabilities for growing organizations with core scheduling, mobile, and asset management features.",
      details: [
        "Dynamic Scheduling",
        "Mobile & Virtual Agent",
        "Planned Maintenance",
        "Asset & Cost Management", 
        "Field Service Contractor Management",
        "Dispatcher Workspace",
        "Inventory Management"
      ],
      color: "from-orange-500 to-amber-500",
      ideal: "Growing field service organizations"
    },
    {
      icon: Zap,
      title: "FSM Professional",
      description: "Advanced field service capabilities with crew operations, predictive intelligence, and performance analytics for enterprise operations.",
      details: [
        "All Standard features",
        "Field Service Crew Operations",
        "Capacity and Reservations Management",
        "Continual Improvement Management",
        "Predictive Intelligence",
        "Performance Analytics",
        "Field Service Multi-Day Task Scheduling"
      ],
      color: "from-amber-500 to-yellow-500",
      ideal: "Enterprise field service operations",
      addOns: [
        "Schedule Optimization (additional cost)",
        "Field Service Marketplace (additional cost)",
        "Now Assist (additional cost)"
      ]
    }
  ];

  // Field Service Metrics
  const fieldServiceMetrics = [
    {
      icon: TrendingUp,
      title: "First Contact Resolution",
      description: "Improve first-time fix rates through better technician assignment and mobile access to knowledge and parts.",
      metric: "85% first-call resolution"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Reduce service response times through optimized scheduling, routing, and real-time dispatch capabilities.",
      metric: "50% faster response"
    },
    {
      icon: Users,
      title: "Technician Productivity",
      description: "Increase daily work order completion through mobile optimization and administrative time reduction.",
      metric: "60% productivity boost"
    },
    {
      icon: DollarSign,
      title: "Operational Cost Reduction",
      description: "Decrease operational costs through route optimization, preventive maintenance, and efficient resource utilization.",
      metric: "40% cost savings"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Field Service Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Field Service Management (FSM) enables organizations to manage work orders and related tasks, resources, skills, assets, and locations. Key benefits include:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Automated processes and enhanced communication capabilities</li>
            <li>AI-powered field service delivery transformation</li>
            <li>Intelligent scheduling and dispatching optimization</li>
            <li>Mobile-first technician empowerment</li>
            <li>Preventive maintenance and asset management integration</li>
          </ul>
          <p className="mt-3 text-sm text-orange-600">
            <strong>Built on ServiceNow Platform</strong> with single data model architecture for consistent performance.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the key features of ServiceNow FSM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSM includes comprehensive field service capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Dynamic Scheduling:</strong> Skill-based automatic assignment with configurable rules</li>
            <li><strong>Dispatcher Workspace:</strong> Unified interface for quick scheduling decisions and team management</li>
            <li><strong>Mobile Agent:</strong> Native iOS/Android apps with offline capabilities and real-time updates</li>
            <li><strong>Now Assist for FSM:</strong> AI-powered productivity with generative AI experiences</li>
            <li><strong>Schedule Optimization:</strong> Automated route optimization and travel time minimization</li>
            <li><strong>Workforce Optimization:</strong> High-performing teams with streamlined schedules and coaching</li>
            <li><strong>Inventory Management:</strong> Real-time trunk stock monitoring and parts availability</li>
            <li><strong>Asset Management:</strong> Comprehensive asset tracking and lifecycle management</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are the FSM package options and their differences?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers two main FSM packages:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">FSM Standard</h4>
              <p className="text-sm mb-2">Essential field service capabilities for growing organizations.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Dynamic Scheduling, Mobile & Virtual Agent</li>
                <li>Planned Maintenance, Asset & Cost Management</li>
                <li>Field Service Contractor Management, Dispatcher Workspace</li>
                <li>Inventory Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">FSM Professional</h4>
              <p className="text-sm mb-2">Advanced capabilities for enterprise field service operations.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus advanced capabilities</li>
                <li>Field Service Crew Operations, Capacity Management</li>
                <li>Predictive Intelligence, Performance Analytics</li>
                <li>Multi-Day Task Scheduling</li>
              </ul>
              <div className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-xs text-yellow-800"><strong>Add-ons available:</strong> Schedule Optimization, Field Service Marketplace, Now Assist (additional cost)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does ServiceNow FSM improve technician productivity?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow FSM enhances technician productivity through multiple capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Mobile-First Design:</strong> Native iOS and Android apps with offline capabilities</li>
            <li><strong>Intelligent Assignment:</strong> Skills-based routing ensures right technician for the job</li>
            <li><strong>Route Optimization:</strong> AI-powered routing minimizes travel time</li>
            <li><strong>Real-Time Information:</strong> Access to work orders, parts, knowledge, and safety checklists</li>
            <li><strong>Streamlined Workflows:</strong> Reduced administrative time and simplified processes</li>
            <li><strong>Preventive Maintenance:</strong> Proactive service reduces repeat visits</li>
          </ul>
          <p className="mt-3">
            Organizations typically see 60% productivity improvement and 40% reduction in administrative time.
          </p>
        </div>
      )
    },

    {
      question: "What industries benefit most from ServiceNow FSM?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSM is ideal for industries requiring on-site service, equipment maintenance, or field inspections:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Primary Industries:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Telecommunications: Network maintenance, equipment installation</li>
                <li>Utilities & Energy: Infrastructure maintenance, emergency repairs</li>
                <li>Healthcare: Medical equipment service, facility maintenance</li>
                <li>Manufacturing: Equipment maintenance, quality inspections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Additional Sectors:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>HVAC and facilities management companies</li>
                <li>Security services and installations</li>
                <li>Transportation and logistics</li>
                <li>Retail and consumer services</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does ServiceNow FSM implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs depend on organization size, technician count, and feature complexity:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>FSM Standard Implementation:</strong> Starting from $250K - includes core scheduling, mobile, and basic asset management for up to 100 technicians</li>
            <li><strong>FSM Professional Implementation:</strong> $400K-$600K - includes advanced features, predictive intelligence, and crew operations for up to 500 technicians</li>
            <li><strong>Enterprise FSM Suite:</strong> $750K+ - complete suite with all add-ons, custom integrations, and enterprise-scale deployment</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through productivity gains (60%), cost reduction (40%), and improved first-call resolution (85%).
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "FSM ROI Calculator", url: "/fsm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for FSM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on technician count and integration complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>FSM Standard:</strong> 14-18 weeks for core features including scheduling, mobile apps, and basic integrations</li>
            <li><strong>FSM Professional:</strong> 18-24 weeks including advanced features, predictive intelligence, and crew operations</li>
            <li><strong>Enterprise FSM Suite:</strong> 24-32 weeks for complete suite with all add-ons and complex integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Discovery & Process Design (3-4 weeks) → Platform Configuration & Mobile Setup (8-12 weeks) → Integration & Testing (4-6 weeks) → Go-Live & Training (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ServiceNow FSM integrate with existing systems?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow FSM provides comprehensive integration capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ERP Systems:</strong> Integration with SAP, Oracle, Microsoft Dynamics for financials and inventory</li>
            <li><strong>Asset Management:</strong> Connect with existing asset tracking and maintenance systems</li>
            <li><strong>CRM Platforms:</strong> Integration with Salesforce and other customer management systems</li>
            <li><strong>Inventory Systems:</strong> Real-time integration with parts and supply chain systems</li>
            <li><strong>Telematics:</strong> Integration with vehicle tracking and GPS systems</li>
            <li><strong>IoT Platforms:</strong> Connect with IoT sensors for predictive maintenance</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing investments while gaining unified field service capabilities and AI-powered optimization.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on FSM success stories)
  const caseStudies = [
    {
      title: "Telecommunications Leader Achieves 85% First-Call Resolution with FSM",
      client: "Global Telecom Services",
      industry: "Telecommunications",
      challenge: "Managing 10,000+ technicians across multiple regions with poor first-call resolution rates and inefficient scheduling leading to customer dissatisfaction",
      solution: "ServiceNow FSM Professional with dynamic scheduling, mobile optimization, skill-based routing, and predictive maintenance for network infrastructure",
      results: [
        { metric: "85%", description: "First-call resolution achievement" },
        { metric: "60%", description: "Technician productivity improvement" },
        { metric: "50%", description: "Faster service response times" },
        { metric: "10,000+", description: "Technicians managed globally" }
      ],
      testimonial: "ServiceNow FSM transformed our field operations with 85% first-call resolution and 60% productivity improvement across 10,000+ technicians worldwide.",
      executive: "VP of Field Operations",
      logo: "/images/clients/telecom-services-logo.png"
    },
    {
      title: "Utility Company Reduces Costs 40% with Route Optimization",
      client: "National Utility Provider",
      industry: "Utilities & Energy",
      challenge: "High operational costs from inefficient routing and scheduling across vast service territories with emergency response requirements and regulatory compliance",
      solution: "Complete FSM suite with schedule optimization, route planning, emergency dispatch capabilities, and regulatory compliance management for utility operations",
      results: [
        { metric: "40%", description: "Operational cost reduction" },
        { metric: "Emergency", description: "Response optimization" },
        { metric: "Regulatory", description: "Compliance achieved" },
        { metric: "Territory", description: "Coverage optimization" }
      ],
      testimonial: "ServiceNow FSM with route optimization reduced our operational costs by 40% while improving emergency response and maintaining full regulatory compliance.",
      executive: "Chief Operations Officer",
      logo: "/images/clients/utility-provider-logo.png"
    },
    {
      title: "Healthcare System Enhances Equipment Service with Predictive FSM",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Critical medical equipment maintenance across 50+ facilities with strict uptime requirements and specialized technician certifications",
      solution: "ServiceNow FSM with predictive maintenance, specialized workforce management, compliance tracking, and critical equipment prioritization",
      results: [
        { metric: "50+", description: "Facilities managed" },
        { metric: "Predictive", description: "Maintenance implemented" },
        { metric: "99.9%", description: "Equipment uptime achieved" },
        { metric: "Compliance", description: "Requirements met" }
      ],
      testimonial: "ServiceNow FSM enabled predictive maintenance across 50+ facilities, achieving 99.9% equipment uptime while meeting all healthcare compliance requirements.",
      executive: "Director of Facilities Management",
      logo: "/images/clients/healthcare-network-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Field Service Management - Complete ServiceNow FSM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Manage work orders, resources, skills, assets, and locations with ServiceNow Field Service Management. Optimize scheduling, dispatch, and mobile workforce operations."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss FSM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss FSM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-yellow-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-amber-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-amber-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-amber-500/90 to-yellow-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-amber-600 hover:to-yellow-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered FSM
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-500/90 to-lime-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-yellow-600 hover:to-lime-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Mobile-First
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 font-semibold">
                    Field Service
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-lime-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-amber-300">Manage work orders, resources, and assets</span> with intelligent scheduling, mobile-first operations, and{' '}
                  <span className="font-semibold text-yellow-300">AI-powered field service optimization</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-yellow-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get FSM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-yellow-400 group-hover:text-yellow-300" />
                      View Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Field Service Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-orange-600 to-amber-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Smart</div>
                      <div className="text-xs text-orange-200">Scheduling</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Mobile</div>
                      <div className="text-xs text-amber-200">Operations</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Truck className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ToolIcon className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Benefits of Field Service
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform field operations with intelligent scheduling, mobile-first capabilities, and AI-powered optimization for maximum efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                      <div className="text-sm font-semibold text-orange-700 mb-1">Key Achievement</div>
                      <div className="text-orange-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FSM Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-lime-600">
                  FSM Features and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  Complete Field Service Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive field service management with AI-powered scheduling, mobile optimization, and intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fsmFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, idx) => (
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

        {/* Package Options Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-lime-600 to-green-600">
                  FSM Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Field Service Solutions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose the FSM package that fits your organization's field service needs and growth trajectory.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {packageOptions.map((pkg, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-lime-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-lime-50 rounded-xl p-3 mb-6 border border-yellow-200">
                      <div className="text-sm font-semibold text-yellow-700">Ideal for: {pkg.ideal}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.addOns && (
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
                        <h4 className="font-semibold text-amber-700 mb-2">Available Add-Ons:</h4>
                        <ul className="space-y-1">
                          {pkg.addOns.map((addon, idx) => (
                            <li key={idx} className="text-sm text-amber-600">{addon}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Field Service Metrics Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600">
                  Field Service
                </span>
                <br />
                <span className="text-gray-800">
                  Performance Metrics
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Measure and improve field service performance with comprehensive tracking and optimization capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fieldServiceMetrics.map((metric, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-lime-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-lime-500 to-green-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <metric.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {metric.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {metric.description}
                    </p>

                    <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-xl p-4 border border-lime-200">
                      <div className="text-sm font-semibold text-lime-700 mb-1">Target Achievement</div>
                      <div className="text-lime-600 text-lg font-bold">{metric.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Field Service Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about FSM implementation, mobile operations, and field service optimization.
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
                        <div className="w-full h-px bg-gradient-to-r from-green-500 to-emerald-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-teal-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-emerald-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real FSM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                See how organizations transformed their field service operations with AI-powered Field Service Management.
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
                              <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-200 border border-emerald-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-200 border border-teal-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-4 border-l-4 border-emerald-400">
                              <Quote className="h-6 w-6 text-emerald-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-emerald-300">— {study.executive}</p>
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
                                <span className="text-emerald-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-emerald-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Optimize Field Service Operations?
                </h2>
                <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to implement AI-powered field service management with intelligent scheduling and mobile-first operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact FSM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Get FSM Guide
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-emerald-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">fsm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-cyan-200 mx-auto mb-2" />
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
