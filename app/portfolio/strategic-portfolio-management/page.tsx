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
  TestTube2
} from "lucide-react";

export default function StrategicPortfolioManagementPage() {
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
    "name": "Strategic Portfolio Management - ServiceNow SPM Implementation",
    "description": "Gain the insights to move from strategy to business outcomes. Align your organization on a single platform with Strategic Portfolio Management.",
    "applicationCategory": "Strategic Portfolio Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Strategic Portfolio Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow SPM helps deliver business outcomes with confidence by consolidating all work and aligning it on a single, AI-driven cloud platform. It connects strategy with delivery to provide 360º visibility and speed value across the organization."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main featured apps and capabilities of SPM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SPM includes Now Assist for SPM, Strategic Planning, Scenario Planning, Investment Funding, Agile Development, Project Portfolio Management, Demand Management, Collaborative Work Management, Resource Management, and Innovation Management."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: Route,
      title: "Roadmap your strategy",
      description: "Build clearly defined, continuously adaptable plans. Visualize strategies and targets, know whether you're meeting objectives, and make decisions with confidence.",
      color: "from-emerald-500 to-green-500",
      stats: "360º strategic visibility"
    },
    {
      icon: Target,
      title: "Align work to strategy",
      description: "Respond quickly when changes are needed. Enable planners to identify, prioritize, and schedule the right work while aligning teams, driving efficiency, and staying on strategy.",
      color: "from-green-500 to-lime-500",
      stats: "Unified work alignment"
    },
    {
      icon: Zap,
      title: "Deliver value fast",
      description: "Enable teams to work in the way they can be most effective, in Agile, traditional, or hybrid methodologies, while staying aligned to strategic goals.",
      color: "from-lime-500 to-yellow-500",
      stats: "Faster value delivery"
    },
    {
      icon: Activity,
      title: "Drive business agility",
      description: "Break down silos and gain visibility across the enterprise, equipping business leaders with the information they need to make decisions and meet goals quickly.",
      color: "from-yellow-500 to-orange-500",
      stats: "Enhanced business agility"
    }
  ];

  // Featured Apps and Capabilities (Exact from ServiceNow)
  const featuredApps = [
    {
      icon: Bot,
      title: "Now Assist for SPM",
      description: "Break down barriers with generative AI to deliver customer value quickly.",
      capabilities: [
        "Generative AI assistance",
        "Barrier breakdown",
        "Customer value acceleration",
        "Intelligent recommendations"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Navigation,
      title: "Strategic Planning",
      description: "Connect strategy to execution with end-to-end planning in a single workspace.",
      capabilities: [
        "Strategy-execution connection",
        "End-to-end planning",
        "Single workspace integration",
        "Strategic alignment"
      ],
      color: "from-green-500 to-lime-500"
    },
    {
      icon: TestTube2,
      title: "Scenario Planning",
      description: "Simulate and compare investment scenarios to align your portfolio with your business strategy.",
      capabilities: [
        "Investment scenario simulation",
        "Scenario comparison",
        "Portfolio-strategy alignment",
        "What-if analysis"
      ],
      color: "from-lime-500 to-yellow-500"
    },
    {
      icon: CreditCard,
      title: "Investment Funding",
      description: "Manage funds based on business needs and your organization's strategic objectives.",
      capabilities: [
        "Fund management",
        "Business needs alignment",
        "Strategic objective focus",
        "Investment optimization"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: GitBranch,
      title: "Agile Development",
      description: "Manage scrum or development work throughout the lifecycle from a unified backlog of tasks.",
      capabilities: [
        "Scrum management",
        "Lifecycle development",
        "Unified backlog",
        "Task coordination"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Briefcase,
      title: "Project Portfolio Management",
      description: "Gain visibility into traditional, agile, and hybrid work to optimize portfolios.",
      capabilities: [
        "Traditional project visibility",
        "Agile work management",
        "Hybrid methodology support",
        "Portfolio optimization"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Demand Management",
      description: "Capture, assess, and manage demands from the business in one location.",
      capabilities: [
        "Demand capture",
        "Assessment workflows",
        "Centralized management",
        "Business request handling"
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Users2,
      title: "Collaborative Work Management",
      description: "Empower teams and simplify work with a hub for planning, visualization, and collaboration.",
      capabilities: [
        "Team empowerment",
        "Work simplification",
        "Planning hub",
        "Visualization and collaboration"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: User,
      title: "Resource Management",
      description: "See staff availability, allocation, and capacities for all work tracked in ServiceNow.",
      capabilities: [
        "Staff availability tracking",
        "Allocation management",
        "Capacity planning",
        "Resource optimization"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Management",
      description: "Capture new ideas from across your organization in a single location.",
      capabilities: [
        "Idea capture",
        "Organization-wide innovation",
        "Centralized location",
        "Innovation pipeline management"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Digital Portfolio Management",
      description: "Make informed decisions with a unified view of services, products, and apps.",
      capabilities: [
        "Informed decision making",
        "Unified view",
        "Service management",
        "Product and app visibility"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Simplify and accelerate everyday work with built-in machine learning.",
      capabilities: [
        "Work simplification",
        "Acceleration capabilities",
        "Built-in machine learning",
        "Predictive insights"
      ],
      color: "from-teal-500 to-emerald-500"
    }
  ];

  // Package Options (From ServiceNow)
  const packageOptions = [
    {
      icon: Package,
      title: "SPM Standard",
      description: "For businesses driving initiatives with traditional methods that align to strategy and goals.",
      details: [
        "Cost Management",
        "Collaborative Work Management",
        "Project Portfolio Management",
        "Innovation Management",
        "Demand Management",
        "Resource Management",
        "Digital Portfolio Management",
        "Portfolio Planning",
        "Financial Planning"
      ],
      color: "from-emerald-500 to-green-500",
      ideal: "Traditional project methodologies"
    },
    {
      icon: Zap,
      title: "SPM Professional",
      description: "For businesses seeking to manage initiatives end-to-end, aligning them with strategy based on Agile or hybrid methods.",
      details: [
        "All Standard features",
        "Platform Analytics Advanced",
        "Test Management",
        "Strategic Planning",
        "Investment Funding",
        "Agile Development",
        "Predictive Intelligence",
        "Virtual Agent"
      ],
      color: "from-green-500 to-lime-500",
      ideal: "Agile and hybrid methodologies"
    }
  ];

  // Role-Based Applications (From ServiceNow)
  const roleBasedApps = [
    {
      role: "CXO",
      icon: Award,
      title: "Executive Leadership",
      description: "Gain real-time, end-to-end visibility to understand business needs in the context of strategy.",
      apps: [
        "Strategic Planning - Capture strategies and targets",
        "Performance Analytics - Focus on highest-impact work",
        "Scenario Planning - Compare scenarios and perform what-if analysis"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Director, PMO",
      icon: Briefcase,
      title: "Portfolio Management Office",
      description: "Take charge of multiple organizational priorities for increased visibility and informed funding decisions.",
      apps: [
        "Process Mining - View portfolio performance",
        "Innovation Management - Gather and prioritize ideas",
        "Demand Management - Centralize strategic requests"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      role: "Agile Leader",
      icon: GitBranch,
      title: "Agile Transformation",
      description: "Steer your organization's Agile transformation and improve business performance through greater agility.",
      apps: [
        "Agile Development - Simplify execution for faster delivery",
        "Scaled Agile Framework (SAFe) - Scale agility at enterprise level",
        "Process Mining - Uncover inefficiencies and remove roadblocks"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      role: "Project Manager",
      icon: User,
      title: "Project Leadership",
      description: "Strengthen connection between team work, leadership priorities, and organizational initiatives.",
      apps: [
        "Project Portfolio Management - Manage timelines, budget, resources",
        "Resource Management - Consolidated view of capacity and allocations",
        "Agile Development - Deliver using best-suited methodology"
      ],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Hybrid Work Delivery Benefits
  const hybridWorkFeatures = [
    {
      icon: Workflow,
      title: "Traditional Project Management",
      description: "Structured approach with defined phases, clear milestones, and comprehensive documentation.",
      benefit: "Predictability and control"
    },
    {
      icon: Zap,
      title: "Agile Methodologies",
      description: "Iterative development with continuous feedback, rapid adaptation, and customer collaboration.",
      benefit: "Speed and flexibility"
    },
    {
      icon: Shuffle,
      title: "Hybrid Approach",
      description: "Best of both worlds - structured planning with agile execution for optimal project delivery.",
      benefit: "Adaptability and efficiency"
    },
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "All methodologies aligned to strategic objectives ensuring consistent business value delivery.",
      benefit: "Goal achievement"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Strategic Portfolio Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Strategic Portfolio Management (formerly ITBM) helps organizations deliver business outcomes with confidence by:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Consolidating all work and aligning it on a single, AI-driven cloud platform</li>
            <li>Connecting strategy with delivery to provide 360º visibility</li>
            <li>Speeding value across the organization</li>
            <li>Breaking down silos and gaining visibility across the enterprise</li>
            <li>Equipping business leaders with information needed to make decisions and meet goals quickly</li>
          </ul>
          <p className="mt-3 text-sm text-emerald-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main featured apps and capabilities of SPM?",
      answer: (
        <div>
          <p className="mb-3">SPM includes twelve key applications and capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Now Assist for SPM:</strong> Break down barriers with generative AI for faster customer value delivery</li>
            <li><strong>Strategic Planning:</strong> Connect strategy to execution with end-to-end planning in single workspace</li>
            <li><strong>Scenario Planning:</strong> Simulate and compare investment scenarios for portfolio alignment</li>
            <li><strong>Investment Funding:</strong> Manage funds based on business needs and strategic objectives</li>
            <li><strong>Agile Development:</strong> Manage scrum or development work from unified backlog</li>
            <li><strong>Project Portfolio Management:</strong> Gain visibility into traditional, agile, and hybrid work</li>
            <li><strong>Demand Management:</strong> Capture, assess, and manage business demands in one location</li>
            <li><strong>Collaborative Work Management:</strong> Empower teams with planning and collaboration hub</li>
            <li><strong>Resource Management:</strong> See staff availability, allocation, and capacities</li>
            <li><strong>Innovation Management:</strong> Capture new ideas from across organization</li>
            <li><strong>Digital Portfolio Management:</strong> Make informed decisions with unified view</li>
            <li><strong>Predictive Intelligence:</strong> Accelerate work with built-in machine learning</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are the SPM package options and their differences?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers two SPM packages:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-emerald-600 mb-2">SPM Standard</h4>
              <p className="text-sm mb-2">For businesses driving initiatives with traditional methods aligned to strategy and goals.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Cost Management, Collaborative Work Management</li>
                <li>Project Portfolio Management, Innovation Management</li>
                <li>Demand Management, Resource Management</li>
                <li>Digital Portfolio Management, Portfolio Planning, Financial Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">SPM Professional</h4>
              <p className="text-sm mb-2">For businesses managing initiatives end-to-end with Agile or hybrid methods.</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>All Standard features plus:</li>
                <li>Platform Analytics Advanced, Test Management</li>
                <li>Strategic Planning, Investment Funding</li>
                <li>Agile Development, Predictive Intelligence, Virtual Agent</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">
            Professional package enables hybrid delivery combining traditional and Agile methodologies.
          </p>
        </div>
      )
    },

    {
      question: "How does SPM support hybrid work delivery methodologies?",
      answer: (
        <div>
          <p className="mb-3">SPM supports hybrid work delivery by combining the best of traditional and Agile approaches:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Traditional Project Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Structured approach with defined phases and clear milestones</li>
                <li>Comprehensive documentation and predictable outcomes</li>
                <li>Suitable for projects with stable requirements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Agile Methodologies:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Iterative development with continuous feedback</li>
                <li>Rapid adaptation and customer collaboration</li>
                <li>Ideal for projects with changing requirements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Hybrid Approach Benefits:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Customize approach to each project's specific needs</li>
                <li>Maintain strategic alignment across all methodologies</li>
                <li>Enable teams to work most effectively while staying on strategy</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What role-based applications does SPM provide?",
      answer: (
        <div>
          <p className="mb-3">
            SPM provides role-specific applications for different organizational levels:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>CXO Level:</strong> Strategic Planning, Performance Analytics, Scenario Planning for executive visibility</li>
            <li><strong>Portfolio Management Office:</strong> Process Mining, Innovation Management, Demand Management for portfolio oversight</li>
            <li><strong>Agile Leaders:</strong> Agile Development, Scaled Agile Framework (SAFe), Process Mining for transformation leadership</li>
            <li><strong>Project Managers:</strong> Project Portfolio Management, Resource Management, Agile Development for project execution</li>
          </ul>
          <p className="mt-3">
            Each role gets tailored tools to add continuous value and improve collaboration across the organization.
          </p>
        </div>
      )
    },

    {
      question: "How much does Strategic Portfolio Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on package selection, organizational size, and methodology complexity:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPM Standard Implementation:</strong> Starting from $300K - includes traditional project management and basic portfolio capabilities</li>
            <li><strong>SPM Professional Implementation:</strong> $500K-$750K - includes Agile development, strategic planning, and advanced analytics</li>
            <li><strong>Enterprise SPM Suite:</strong> $1M+ - complete suite with hybrid methodologies, predictive intelligence, and custom integrations</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 12-18 months through improved project delivery (30-40%), better resource utilization, and strategic alignment.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "SPM ROI Calculator", url: "/spm-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for SPM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on package scope and organizational methodology preferences:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>SPM Standard:</strong> 18-24 weeks for traditional project management and portfolio planning</li>
            <li><strong>SPM Professional:</strong> 24-32 weeks including Agile development, strategic planning, and advanced capabilities</li>
            <li><strong>Enterprise SPM Suite:</strong> 32-42 weeks for complete suite with hybrid methodologies and organizational transformation</li>
          </ul>
          <p className="mt-3">
            Our methodology: Strategy Assessment (4-6 weeks) → Platform Configuration & Methodology Setup (12-18 weeks) → Integration & Training (6-8 weeks) → Go-Live & Optimization (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does SPM integrate with existing tools and systems?",
      answer: (
        <div>
          <p className="mb-3">SPM provides comprehensive integration capabilities with existing tools:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Microsoft PowerPoint:</strong> Automated exports with streamlined workflows</li>
            <li><strong>Jira Integration:</strong> Bidirectional synchronization with Agile Development</li>
            <li><strong>DevOps Integration:</strong> Comprehensive software development lifecycle orchestration</li>
            <li><strong>Microsoft Project:</strong> Project actions like move, apply template, import/export</li>
            <li><strong>Team Collaboration Tools:</strong> Real-time updates and seamless team communication</li>
            <li><strong>Enterprise Systems:</strong> API-first architecture for custom integrations</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations maintain existing tool investments while gaining unified visibility and accelerated project delivery.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ServiceNow content)
  const caseStudies = [
    {
      title: "T-Systems Leverages State-of-the-Art Project Management Functionality",
      client: "T-Systems",
      industry: "Technology Services",
      challenge: "Modernizing project management capabilities across global operations while leveraging meaningful data for better decision-making and strategic alignment",
      solution: "ServiceNow Strategic Portfolio Management with platform approach for enhanced project management and data-driven insights",
      results: [
        { metric: "State-of-the-Art", description: "Project management functionality" },
        { metric: "Platform", description: "Approach implementation" },
        { metric: "Meaningful", description: "Data leverage achieved" },
        { metric: "Enhanced", description: "Decision-making capability" }
      ],
      testimonial: "ServiceNow brings state-of-the-art functionality to project management. The platform approach will make it easier to leverage meaningful data.",
      executive: "Christian Dietrich, VP, Global Project Services, T-Systems",
      logo: "/images/clients/t-systems-logo.png"
    },
    {
      title: "Argonne National Laboratory Centralizes Operational Service",
      client: "Argonne National Laboratory",
      industry: "Research & Science",
      challenge: "Centralizing operational service delivery to improve science needs support while maintaining research excellence and operational efficiency",
      solution: "ServiceNow SPM with centralized service delivery, resource management, and science-focused project portfolio management",
      results: [
        { metric: "Centralized", description: "Operational service delivery" },
        { metric: "Improved", description: "Science needs support" },
        { metric: "Enhanced", description: "Research operational efficiency" },
        { metric: "Optimized", description: "Resource allocation" }
      ],
      testimonial: "ServiceNow SPM enabled us to centralize operational service delivery, significantly improving our ability to support critical science research needs.",
      executive: "Argonne National Laboratory Operations Team",
      logo: "/images/clients/argonne-logo.png"
    },
    {
      title: "Fujitsu Standardizes IT Operations for Greater Agility",
      client: "Fujitsu",
      industry: "Technology Consulting",
      challenge: "Standardizing IT operations across global technology consulting operations to achieve greater agility and improved service delivery",
      solution: "Strategic Portfolio Management with standardized operations, agile development capabilities, and global resource management",
      results: [
        { metric: "Standardized", description: "Global IT operations" },
        { metric: "Greater", description: "Business agility achieved" },
        { metric: "Improved", description: "Service delivery" },
        { metric: "Global", description: "Resource optimization" }
      ],
      testimonial: "ServiceNow SPM allowed us to standardize IT operations globally, resulting in significantly greater agility and improved service delivery capabilities.",
      executive: "Fujitsu IT Operations Leadership",
      logo: "/images/clients/fujitsu-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Strategic Portfolio Management - Complete ServiceNow SPM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Gain the insights to move from strategy to business outcomes. Align your organization on a single platform with ServiceNow Strategic Portfolio Management. Connect strategy with delivery for 360º visibility."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-emerald-600 to-green-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SPM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss SPM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-emerald-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 width-sm-fix overflow-x-hidden max-w-[100vw]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-lime-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-lime-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-4 sm:space-y-8 px-2 sm:px-0">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-6 sm:mb-8">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-emerald-500/90 to-green-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-green-500/90 to-lime-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-green-600 hover:to-lime-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Formerly ITBM
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-lime-500/90 to-yellow-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-lime-600 hover:to-yellow-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Hybrid Ready
                  </Badge>
                </div>

                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 font-semibold">
                    Strategic Portfolio
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-emerald-100 max-w-[280px] sm:max-w-2xl leading-relaxed">
                  <span className="font-semibold text-green-300">Gain the insights to move from strategy to business outcomes.</span> Align your organization on a single platform with{' '}
                  <span className="font-semibold text-lime-300">360º visibility and accelerated value delivery</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:via-green-700 hover:to-lime-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-lime-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SPM Implementation
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                  
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-lime-400 group-hover:text-lime-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Strategic Portfolio Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-emerald-600 to-green-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">360°</div>
                      <div className="text-xs text-emerald-200">Visibility</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Driven</div>
                      <div className="text-xs text-green-200">Platform</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-lime-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Workflow className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600">
                  Benefits of Strategic
                </span>
                <br />
                <span className="text-gray-800">
                  Portfolio Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Align your entire organization to deliver the outcomes that matter with comprehensive strategic portfolio management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Key Impact</div>
                      <div className="text-emerald-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-600 to-yellow-600">
                  Featured Apps and Capabilities
                </span>
                <br />
                <span className="text-gray-800">
                  for Strategic Portfolio Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                SPM groups key applications and capabilities into packages that can scale with your organizational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredApps.slice(0, 8).map((app, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-lime-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {app.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {app.capabilities.map((capability, idx) => (
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

            {/* Show More Apps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 mt-8">
              {featuredApps.slice(8).map((app, index) => (
                <div key={index + 8} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-lime-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <app.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {app.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {app.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {app.capabilities.map((capability, idx) => (
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-lime-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-yellow-600 to-orange-600">
                  SPM Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable Strategic Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get the tools you need most with SPM packages that meet your business needs and methodology preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {packageOptions.map((pkg, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-lime-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-lime-50 to-yellow-50 rounded-xl p-3 mb-6 border border-lime-200">
                      <div className="text-sm font-semibold text-lime-700">Ideal for: {pkg.ideal}</div>
                    </div>

                    <div>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hybrid Work Delivery Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
                  The Rise of Hybrid
                </span>
                <br />
                <span className="text-gray-800">
                  Work Delivery
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                High-performing organizations prioritize flexible work delivery that combines traditional and Agile methodologies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {hybridWorkFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                      <div className="text-sm font-semibold text-yellow-700 mb-1">Key Benefit</div>
                      <div className="text-yellow-600 text-sm">{feature.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role-Based Applications Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Role-Based Applications
                </span>
                <br />
                <span className="text-gray-800">
                  Tailored for Every Role
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Add continuous value to the business with role-specific applications designed for different organizational levels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {roleBasedApps.map((roleApp, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${roleApp.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <roleApp.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{roleApp.title}</h3>
                      <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-xs px-2 py-1 mt-1">
                        {roleApp.role}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{roleApp.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {roleApp.apps.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-600 to-orange-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Strategic Portfolio Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SPM implementation, capabilities, and hybrid methodologies.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-pink-500 to-red-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-pink-600 hover:text-pink-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-red-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real SPM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                See how companies align their organization to deliver outcomes that matter with Strategic Portfolio Management.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-4 sm:p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <div className="flex items-center mb-6">
                              <Badge className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-200 border border-red-400/30 mr-3">
                                {study.industry}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-200 border border-orange-400/30">
                                Case Study
                              </Badge>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.client}</h3>
                            
                            <div className="space-y-4 mb-6">
                              <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Challenge</h4>
                                <p className="text-gray-200 leading-relaxed">{study.challenge}</p>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
                                <p className="text-gray-200 leading-relaxed">{study.solution}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-4 border-l-4 border-red-400">
                              <Quote className="h-6 w-6 text-red-400 mb-2" />
                              <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                              <p className="text-sm font-semibold text-red-300">— {study.executive}</p>
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
                                <span className="text-red-200 text-sm">(5.0/5.0)</span>
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
                        ? 'bg-red-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-3xl p-4 sm:p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Align Strategy with Delivery?
                </h2>
                <p className="text-lg md:text-xl text-red-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to put AI to work and shorten the line between your business strategy and strong results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SPM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-3 sm:px-8 py-2 sm:py-4 text-xs sm:text-base border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    See Infographic
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-red-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">spm-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-yellow-200 mx-auto mb-2" />
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

        /* Prevent horizontal scroll */
        :root {
          overflow-x: hidden;
          max-width: 100vw;
        }

        body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .text-content {
            font-size: 0.875rem;
            line-height: 1.4;
          }
          
          .card {
            padding: 0.75rem;
          }
          
          .grid-gap {
            gap: 0.5rem;
          }

          /* Prevent text overflow */
          h1, h2, h3, p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Adjust mobile spacing */
          .section-padding {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          /* Reduce image sizes */
          img {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
