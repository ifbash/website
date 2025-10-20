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
  AlertCircle,
  HardHat,
  Laptop,
  HardDrive,
  Smartphone,
  ChevronUp
} from "lucide-react";

export default function ITAssetManagementPage() {
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
    "name": "IT Asset Management - ServiceNow ITAM Implementation",
    "description": "Take control of your IT assets. Automate the end-to-end lifecycle for software, hardware, and cloud assets to optimize costs while reducing risk.",
    "applicationCategory": "IT Asset Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow IT Asset Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow IT Asset Management helps manage all hardware, software, and cloud IT assets from a single platform. It automates every stage of the IT asset lifecycle at scale while controlling costs and minimizing licensing and leasing risks."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main features of IT Asset Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITAM includes Software Asset Management, Hardware Asset Management, Enterprise Asset Management, SaaS License Management, Asset Management Executive Dashboard, Asset Onboarding and Offboarding, Contract and Renewal Management, and Cloud Cost Management."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: Workflow,
      title: "Modernize and automate IT",
      description: "Run ITAM where you plan, service, and operate IT—on one platform, one data model, and one architecture. Automate asset workflows at each stage of the asset lifecycle.",
      color: "from-purple-500 to-indigo-500",
      stats: "Complete lifecycle automation"
    },
    {
      icon: DollarSign,
      title: "Slash technology costs",
      description: "Minimize waste throughout the asset lifecycle by optimizing software licenses, tracking hardware assets, and managing cloud resources.",
      color: "from-green-500 to-emerald-500",
      stats: "30-50% cost reduction"
    },
    {
      icon: ShieldCheck,
      title: "Reduce technology risk",
      description: "Align asset investments to business needs. Quickly identify and mitigate technology risks such as tech debt, shadow tech, vulnerabilities, license compliance, or lost assets.",
      color: "from-red-500 to-pink-500",
      stats: "90% risk reduction"
    },
    {
      icon: BarChart3,
      title: "Gain actionable insights",
      description: "Get work done faster with AI-powered experiences. Give everyone in your organization the info they need to make smarter decisions and improve business processes.",
      color: "from-blue-500 to-cyan-500",
      stats: "Real-time visibility"
    }
  ];

  // Featured Products (Exact from ServiceNow)
  const featuredProducts = [
    {
      icon: Code,
      title: "Software Asset Management",
      description: "Modernize software asset tracking to reduce spend, mitigate risk, and take action across IT.",
      capabilities: [
        "Software asset tracking modernization",
        "Spend reduction optimization",
        "Risk mitigation strategies",
        "IT-wide action capabilities"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: HardDrive,
      title: "Hardware Asset Management",
      description: "Reduce costs and minimize risks for hardware and consumable assets.",
      capabilities: [
        "Hardware cost reduction",
        "Risk minimization",
        "Consumable asset management",
        "Asset lifecycle optimization"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Building2,
      title: "Enterprise Asset Management",
      description: "Control CapEx and OpEx, minimize risk, and automate the full asset lifecycle.",
      capabilities: [
        "CapEx and OpEx control",
        "Risk minimization",
        "Full lifecycle automation",
        "Enterprise-wide management"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "SaaS License Management",
      description: "Manage SaaS costs and usage with meaningful insights and actionable data.",
      capabilities: [
        "SaaS cost management",
        "Usage optimization",
        "Meaningful insights",
        "Actionable data analytics"
      ],
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Asset Management Executive Dashboard",
      description: "Oversee software, hardware, and cloud technology at the executive level.",
      capabilities: [
        "Executive-level oversight",
        "Software visibility",
        "Hardware tracking",
        "Cloud technology management"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: ArrowRight,
      title: "Asset Onboarding and Offboarding",
      description: "Streamline the onboarding and offboarding of assets with digital workflows to manage the whole process.",
      capabilities: [
        "Streamlined onboarding",
        "Efficient offboarding",
        "Digital workflow management",
        "Complete process automation"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Contract and Renewal Management",
      description: "Renew hardware and software contracts through guided actions.",
      capabilities: [
        "Hardware contract renewal",
        "Software contract management",
        "Guided action workflows",
        "Renewal automation"
      ],
      color: "from-emerald-500 to-lime-500"
    },
    {
      icon: CloudCog,
      title: "Cloud Cost Management",
      description: "Gain visibility into your cloud infrastructure to manage resources, IT spend, and risk.",
      capabilities: [
        "Cloud infrastructure visibility",
        "Resource management",
        "IT spend optimization",
        "Risk management"
      ],
      color: "from-lime-500 to-yellow-500"
    }
  ];

  // Platform Capabilities (From ServiceNow)
  const platformCapabilities = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate and transform digital workflows at an enterprise scale. Build and manage multiple complex workflows with no-code playbooks.",
      details: [
        "Enterprise-scale automation",
        "Digital workflow transformation",
        "Complex workflow management",
        "No-code playbook builder"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "Single Data Model",
      description: "Say goodbye to manual data inputs, redundancy, and siloed tasks. Eliminate information silos with one data source for your enterprise.",
      details: [
        "Manual data input elimination",
        "Redundancy reduction",
        "Siloed task elimination",
        "Single enterprise data source"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "Actionable Insights",
      description: "Get work done faster with AI-powered experiences. Give everyone in your organization the info they need to make smarter decisions.",
      details: [
        "AI-powered experiences",
        "Faster work completion",
        "Organizational intelligence",
        "Smart decision support"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security Integration",
      description: "Data security is critical. ServiceNow AI Platform provides tools to improve security posture and regulatory compliance.",
      details: [
        "Critical data security",
        "Security posture improvement",
        "Regulatory compliance",
        "Risk mitigation tools"
      ],
      color: "from-cyan-500 to-teal-500"
    }
  ];

  // Certified Integrations (From ServiceNow)
  const certifiedIntegrations = [
    {
      name: "Microsoft Azure Active Directory",
      description: "Gain better visibility into SSO application usage inside Microsoft Azure Active Directory.",
      icon: Building,
      features: ["SSO application visibility", "Azure AD integration", "Usage analytics", "Identity management"],
      availability: "Certified integration"
    },
    {
      name: "BigFix Integration",
      description: "Discover, track, and understand your assets better, through extensive and near real-time endpoint data from BigFix.",
      icon: Search,
      features: ["Asset discovery", "Real-time endpoint data", "Asset tracking", "Comprehensive visibility"],
      availability: "Certified integration"
    },
    {
      name: "Jamf Pro Integration",
      description: "Automate and simplify the process of importing your asset data from Jamf Pro into your ServiceNow CMDB.",
      icon: Smartphone,
      features: ["Asset data import", "CMDB automation", "Jamf Pro integration", "Process simplification"],
      availability: "Certified integration"
    },
    {
      name: "Coupa Procurement",
      description: "Use Coupa procurement to purchase assets and automate procurement-related tasks.",
      icon: ShoppingCart,
      features: ["Asset purchasing", "Procurement automation", "Task automation", "Purchase workflow"],
      availability: "Certified integration"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow IT Asset Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow IT Asset Management helps organizations take control of their IT assets by managing all hardware, software, and cloud IT assets from a single platform. It provides:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>End-to-end lifecycle automation for software, hardware, and cloud assets</li>
            <li>Cost optimization while reducing licensing and leasing risks</li>
            <li>AI and native intelligence for asset cost, usage, and compliance insights</li>
            <li>Single platform for planning, servicing, and operating IT</li>
            <li>Enterprise-scale workflow automation at each asset lifecycle stage</li>
          </ul>
          <p className="mt-3 text-sm text-purple-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main features of IT Asset Management?",
      answer: (
        <div>
          <p className="mb-3">ITAM includes eight core featured products:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Software Asset Management:</strong> Modernize software asset tracking to reduce spend and mitigate risk</li>
            <li><strong>Hardware Asset Management:</strong> Reduce costs and minimize risks for hardware and consumable assets</li>
            <li><strong>Enterprise Asset Management:</strong> Control CapEx and OpEx, minimize risk, and automate full lifecycle</li>
            <li><strong>SaaS License Management:</strong> Manage SaaS costs and usage with meaningful insights</li>
            <li><strong>Asset Management Executive Dashboard:</strong> Executive-level oversight of all technology assets</li>
            <li><strong>Asset Onboarding and Offboarding:</strong> Digital workflows for complete process management</li>
            <li><strong>Contract and Renewal Management:</strong> Guided actions for hardware and software contracts</li>
            <li><strong>Cloud Cost Management:</strong> Visibility into cloud infrastructure, resources, and spend</li>
          </ul>
        </div>
      )
    },

    {
      question: "What are the key benefits of implementing IT Asset Management?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow ITAM delivers four key benefits:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Modernize and Automate IT</h4>
              <p className="text-sm mb-2">Run ITAM where you plan, service, and operate IT—on one platform, one data model, and one architecture with automated workflows.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Slash Technology Costs</h4>
              <p className="text-sm mb-2">Minimize waste throughout the asset lifecycle by optimizing software licenses, tracking hardware, and managing cloud resources.</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Reduce Technology Risk</h4>
              <p className="text-sm mb-2">Quickly identify and mitigate risks such as tech debt, shadow tech, vulnerabilities, license compliance, or lost assets.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Gain Actionable Insights</h4>
              <p className="text-sm mb-2">AI-powered experiences give everyone the info they need to make smarter decisions and improve business processes.</p>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What certified integrations are available with ITAM?",
      answer: (
        <div>
          <p className="mb-3">
            ITAM easily integrates with partner and third-party applications:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Microsoft Azure Active Directory:</strong> Better visibility into SSO application usage</li>
            <li><strong>BigFix:</strong> Extensive and near real-time endpoint data for asset discovery and tracking</li>
            <li><strong>Jamf Pro:</strong> Automated asset data import into ServiceNow CMDB</li>
            <li><strong>Coupa Procurement:</strong> Asset purchasing and procurement task automation</li>
            <li><strong>Engineering Software:</strong> Visibility into usage and spend with specialty license model support</li>
            <li><strong>Mobile Device Management:</strong> Automated EMM/UEM enrollment, logistics, and lifecycle management</li>
          </ul>
          <p className="mt-3">
            All integrations provide seamless data flow and process automation between systems.
          </p>
        </div>
      )
    },

    {
      question: "How does ITAM help with software license management and compliance?",
      answer: (
        <div>
          <p className="mb-3">ITAM provides comprehensive software license management through:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Software Asset Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Modernized software asset tracking to reduce spend and mitigate risk</li>
                <li>License optimization to minimize waste and ensure compliance</li>
                <li>Real-time visibility into software usage and entitlements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">SaaS License Management:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>SaaS cost and usage management with meaningful insights</li>
                <li>Actionable data for optimization decisions</li>
                <li>Shadow IT discovery and management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Risk Mitigation:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>License compliance monitoring and alerting</li>
                <li>Vulnerability identification and remediation</li>
                <li>Contract renewal management with guided actions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does IT Asset Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on asset complexity, scope, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Standard Implementation:</strong> Starting from $200K - includes core ITAM features and basic integrations</li>
            <li><strong>Advanced Implementation:</strong> $350K-$500K - includes enterprise asset management, SaaS management, and advanced analytics</li>
            <li><strong>Enterprise Implementation:</strong> $600K+ - full ITAM suite with executive dashboard, complex integrations, and custom workflows</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-12 months through cost reduction (30-50%), risk mitigation, and process automation.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "ITAM ROI Calculator", url: "/itam-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for ITAM?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on asset inventory complexity and integration scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Standard Implementation:</strong> 16-20 weeks for core ITAM features with basic asset discovery</li>
            <li><strong>Advanced Implementation:</strong> 20-26 weeks including enterprise asset management and SaaS integration</li>
            <li><strong>Enterprise Implementation:</strong> 24-32 weeks for complete ITAM suite with executive dashboard and complex integrations</li>
          </ul>
          <p className="mt-3">
            Our methodology: Asset Discovery & Inventory (4-5 weeks) → Platform Configuration (8-12 weeks) → Integration & Testing (4-6 weeks) → Go-Live & Optimization (4-6 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does ITAM support cloud asset and cost management?",
      answer: (
        <div>
          <p className="mb-3">ITAM provides comprehensive cloud management capabilities:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Cloud Cost Management:</strong> Visibility into cloud infrastructure to manage resources, IT spend, and risk</li>
            <li><strong>SaaS License Management:</strong> Manage SaaS costs and usage with meaningful insights and actionable data</li>
            <li><strong>Multi-Cloud Support:</strong> Manage assets across AWS, Azure, Google Cloud, and other providers</li>
            <li><strong>Resource Optimization:</strong> Automated recommendations for cost optimization and resource rightsizing</li>
            <li><strong>Cloud Governance:</strong> Policy enforcement and compliance monitoring across cloud environments</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations typically see 30-50% cost reduction and 90% improvement in cloud governance.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Based on ServiceNow content)
  const caseStudies = [
    {
      title: "Uniper Saves €2M in Cost Reduction and Efficiencies with Connected IT",
      client: "Uniper",
      industry: "Energy & Utilities",
      challenge: "Managing complex IT asset landscape across global energy operations with limited visibility into asset costs, usage, and optimization opportunities",
      solution: "ServiceNow IT Asset Management with comprehensive hardware, software, and cloud asset management for connected IT operations",
      results: [
        { metric: "€2M", description: "Cost reduction achieved" },
        { metric: "Connected", description: "IT operations" },
        { metric: "Operational", description: "Efficiencies gained" },
        { metric: "Global", description: "Asset visibility" }
      ],
      testimonial: "ServiceNow IT Asset Management enabled us to achieve €2M in cost reduction and operational efficiencies through connected IT operations and comprehensive asset visibility.",
      executive: "Uniper IT Leadership Team",
      logo: "/images/clients/uniper-logo.png"
    },
    {
      title: "Covéa Insurance Achieves £450K+ Estimated ROI in First Year",
      client: "Covéa Insurance",
      industry: "Financial Services",
      challenge: "Optimizing asset management processes and achieving rapid ROI while maintaining compliance and risk management in regulated insurance environment",
      solution: "ServiceNow IT Asset Management with enterprise asset management, software license optimization, and executive dashboard for first-year ROI achievement",
      results: [
        { metric: "£450K+", description: "Estimated ROI in first year" },
        { metric: "First Year", description: "ROI achievement" },
        { metric: "Optimized", description: "Asset management" },
        { metric: "Compliance", description: "Risk management maintained" }
      ],
      testimonial: "ServiceNow delivered £450K+ estimated ROI for asset management in our first year, transforming our approach to IT asset optimization and compliance.",
      executive: "Covéa Insurance Asset Management Team",
      logo: "/images/clients/covea-logo.png"
    },
    {
      title: "Cox Automotive Streamlines Software Asset Management with Centralized Platform",
      client: "Cox Automotive",
      industry: "Automotive Technology",
      challenge: "Streamlining software asset management across diverse automotive technology portfolio with centralized platform for unified visibility and control",
      solution: "ServiceNow Software Asset Management with centralized platform, license optimization, and automated workflows for automotive technology operations",
      results: [
        { metric: "Streamlined", description: "Software asset management" },
        { metric: "Centralized", description: "Platform implementation" },
        { metric: "Unified", description: "Visibility and control" },
        { metric: "Automated", description: "Workflow optimization" }
      ],
      testimonial: "ServiceNow enabled Cox Automotive to streamline software asset management with one centralized platform, providing the unified visibility and control we needed.",
      executive: "Cox Automotive IT Operations",
      logo: "/images/clients/cox-automotive-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>IT Asset Management - Complete ServiceNow ITAM Portfolio | ifBash</title>
        <meta
          name="description"
          content="Take control of your IT assets. Automate the end-to-end lifecycle for software, hardware, and cloud assets to optimize costs while reducing risk with ServiceNow IT Asset Management."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss ITAM Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss ITAM Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-purple-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-[100vw] width-sm-fix">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-4 sm:py-16 md:py-24 w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 px-2 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex flex-wrap gap-1.5 sm:gap-4 mb-4 sm:mb-8">
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-purple-500/90 to-indigo-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-indigo-500/90 to-blue-600/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-indigo-600 hover:to-blue-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete ITAM Suite
                  </Badge>
                  <Badge className="text-[10px] sm:text-sm py-0.5 sm:py-1 px-1.5 sm:px-3 bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent whitespace-nowrap hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Enterprise Ready
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 font-semibold">
                    IT Asset
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-indigo-300">Take control of your IT assets.</span> Automate the end-to-end lifecycle for software, hardware, and cloud assets to{' '}
                  <span className="font-semibold text-blue-300">optimize costs while reducing risk</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-2 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get ITAM Implementation
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
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-2 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-blue-400 group-hover:text-blue-300" />
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-purple-500/15 to-indigo-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow IT Asset Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-purple-600 to-indigo-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Complete</div>
                      <div className="text-xs text-purple-200">Lifecycle</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                      <div className="text-xs text-indigo-200">Insights</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Laptop className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-4 sm:py-16 md:py-24 w-full bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Benefits of IT Asset
                </span>
                <br />
                <span className="text-gray-800">
                  Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Take control of your hardware, software, and cloud assets with comprehensive IT Asset Management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Impact Achieved</div>
                      <div className="text-purple-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
                  Featured Products for
                </span>
                <br />
                <span className="text-gray-800">
                  IT Asset Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Comprehensive products, apps, and capabilities grouped into packages that scale with your asset management needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {product.capabilities.map((capability, idx) => (
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

        {/* Platform Capabilities Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Built on ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  AI Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ITAM includes AI and powerful platform capabilities to simplify technology asset management and optimize cloud resources.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {platformCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                      <h4 className="font-semibold text-gray-800 mb-3">Platform Benefits:</h4>
                      <ul className="space-y-2">
                        {capability.details.map((detail, idx) => (
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

        {/* Certified Integrations Section */}
        <section className="py-4 sm:py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-green-600">
                  Certified Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Third-Party Applications
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                IT Asset Management easily integrates with partner and third-party applications for comprehensive asset visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {certifiedIntegrations.map((integration, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <integration.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{integration.name}</h3>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 mt-1">
                        {integration.availability}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{integration.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Integration Features:</h4>
                    <ul className="space-y-2">
                      {integration.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About IT Asset Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about ITAM implementation, features, and benefits.
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
                      <div className="px-3 sm:px-6 py-4 sm:py-6">
                        <div className="w-full h-px bg-gradient-to-r from-teal-500 to-green-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors"
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-emerald-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-green-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real ITAM Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                See how companies like yours use IT Asset Management for actionable insight into asset use and costs.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {caseStudies.map((study, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20">
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
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
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
        <section className="py-4 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
          <div className="w-[94%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Take Control of Your IT Assets?
                </h2>
                <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss IT Asset Management implementation and transform your asset lifecycle management.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact ITAM Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    Read Brief
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-emerald-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">itam-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-green-200 mx-auto mb-2" />
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
          
          .grid-container {
            gap: 0.5rem;
          }

          /* Prevent text overflow */
          h1, h2, h3, p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        }
      `}</style>
    </>
  );
}
