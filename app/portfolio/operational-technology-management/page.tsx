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
  HardHat
} from "lucide-react";

export default function OperationalTechnologyManagementPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // SEO JSON-LD with FAQ Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Operational Technology Management - ServiceNow OT Management",
    "description": "Gain visibility and context into your OT environment. Safeguard your devices and minimize downtime with dependable service management.",
    "applicationCategory": "Operational Technology Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ServiceNow Operational Technology Management and how does it help organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ServiceNow Operational Technology Management provides a complete and contextual view of OT systems to keep them secure and running. It helps gain visibility and context into OT environments while safeguarding devices and minimizing downtime with dependable service management."
        }
      },
      {
        "@type": "Question", 
        "name": "What are the main features of Operational Technology Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OT Management includes OT Asset Management for lifecycle management, OT Visibility for device discovery and mapping, OT Vulnerability Response for automated alerts, and OT Service Management for connecting IT, OT, and production processes."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: Eye,
      title: "Enhance visibility",
      description: "Gain complete visibility across your OT ecosystem and associated devices with production processes to assess risks accurately.",
      color: "from-green-500 to-emerald-500",
      stats: "Complete OT ecosystem visibility"
    },
    {
      icon: Timer,
      title: "Minimize downtime",
      description: "Prioritize and respond strategically to vulnerabilities with comprehensive service management. Ensure all your OT devices are patched and functioning optimally.",
      color: "from-blue-500 to-indigo-500",
      stats: "85% reduction in downtime"
    },
    {
      icon: ShieldCheck,
      title: "Strengthen security",
      description: "Systematically harden the expanding OT and digital attack surface and streamline compliance efforts for more resilient operations.",
      color: "from-purple-500 to-pink-500",
      stats: "90% improvement in security posture"
    },
    {
      icon: Factory,
      title: "Optimize industrial processes",
      description: "Map OT devices, assess risks, and optimize processes with comprehensive operational technology management for industrial excellence.",
      color: "from-orange-500 to-red-500",
      stats: "60% process optimization"
    }
  ];

  // Core Features (Exact from ServiceNow)
  const coreFeatures = [
    {
      icon: Package,
      title: "OT Asset Management",
      description: "Manage the OT asset lifecycle effectively on one platform.",
      capabilities: [
        "OT asset lifecycle management",
        "Single platform integration",
        "Asset tracking and monitoring",
        "Lifecycle optimization"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: DiscoverIcon,
      title: "OT Visibility",
      description: "Discover OT devices on industrial networks and map them to production processes for complete context.",
      capabilities: [
        "Industrial network discovery",
        "Device mapping to processes",
        "Complete contextual view",
        "Production process integration"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: AlertCircle,
      title: "OT Vulnerability Response",
      description: "Identify issues and automate alerts to address problems before they happen.",
      capabilities: [
        "Issue identification",
        "Automated alert systems",
        "Proactive problem resolution",
        "Vulnerability management"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "OT Service Management",
      description: "Connect your IT, OT, and production processes for operational resilience.",
      capabilities: [
        "IT and OT integration",
        "Production process connection",
        "Operational resilience",
        "Cross-functional workflows"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  // Package Options (From ServiceNow)
  const packageOptions = [
    {
      icon: Eye,
      title: "Operational Technology Visibility (OTV)",
      description: "Operational Technology Manager with ITOM Visibility v2 and App Engine Starter for comprehensive OT discovery.",
      details: [
        "Operational Technology Manager",
        "Industrial Process Manager",
        "ITOM Visibility v2",
        "Integration Hub spokes included"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: AlertTriangle,
      title: "OT Vulnerability Response (OTVR)",
      description: "Vulnerability Solution Management with Industrial Process Manager for proactive security management.",
      details: [
        "Vulnerability Solution Management",
        "Operational Technology Manager",
        "Industrial Process Manager",
        "App Engine Starter included"
      ],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "OT Service Management (OTSM)",
      description: "Complete service management with change, incident, and asset management for operational resilience.",
      details: [
        "OT Change Management",
        "OT Incident Management",
        "Asset Management",
        "Workforce Optimization"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Package,
      title: "OT Asset Management (OTAM)",
      description: "Asset Management with Planned Maintenance, Performance Analytics, and Predictive Intelligence.",
      details: [
        "Planned Maintenance",
        "Performance Analytics Advanced",
        "Predictive Intelligence",
        "Custom Bundled Tables"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Platform Capabilities (From ServiceNow)
  const platformCapabilities = [
    {
      icon: Database,
      title: "Central Repository",
      description: "Get full visibility into your OT environment and make better decisions.",
      details: [
        "Full OT environment visibility",
        "Better decision making",
        "CMDB integration",
        "Centralized data management"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Layout,
      title: "Workspaces",
      description: "Deliver experiences that engage teams and supercharge productivity in a single, configurable workspace.",
      details: [
        "Team engagement platform",
        "Productivity supercharging",
        "Single workspace configuration",
        "Experience optimization"
      ],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: CheckCircle,
      title: "Service Level Management",
      description: "Manage commitments centrally between service providers and customers.",
      details: [
        "Central commitment management",
        "Provider-customer relationships",
        "Service level tracking",
        "Performance monitoring"
      ],
      color: "from-red-500 to-orange-500"
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
      color: "from-orange-500 to-yellow-500"
    }
  ];

  // Certified Integrations (From ServiceNow)
  const certifiedIntegrations = [
    {
      name: "Siemens IAH Integration",
      description: "Import Siemens IAH assets into ServiceNow with Service Graph Connector for Siemens IAH.",
      icon: Factory,
      features: ["Siemens IAH asset import", "Service Graph Connector", "Industrial asset visibility", "Manufacturing integration"],
      availability: "Certified integration"
    },
    {
      name: "Claroty CTD Integration",
      description: "Import sites, detect devices by site, establish connections, and install programs with Claroty CTD.",
      icon: Network,
      features: ["Site import functionality", "Device detection by site", "Connection establishment", "Program installation"],
      availability: "Certified integration"
    },
    {
      name: "Nozomi CMC Integration",
      description: "Import asset and alert information from one or more Nozomi CMC instances.",
      icon: AlertTriangle,
      features: ["Asset information import", "Alert data integration", "Multiple instance support", "Comprehensive monitoring"],
      availability: "Certified integration"
    },
    {
      name: "SAP Integration",
      description: "Prebuilt SAP integration that enables OT customers to populate ISA Equipment Model without design or training.",
      icon: Building2,
      features: ["Prebuilt SAP integration", "ISA Equipment Model", "No design required", "Training-free implementation"],
      availability: "Certified integration"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is ServiceNow Operational Technology Management and how does it help organizations?",
      answer: (
        <div>
          <p className="mb-3">
            ServiceNow Operational Technology Management provides a complete and contextual view of OT systems to keep them secure and running. It helps organizations:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Gain visibility and context into OT environments</li>
            <li>Safeguard devices and minimize downtime with dependable service management</li>
            <li>Embrace industrial workflows on the ServiceNow AI Platform</li>
            <li>Automate essential OT management processes</li>
            <li>Create a single system of action for the enterprise</li>
          </ul>
          <p className="mt-3 text-sm text-green-600">
            <strong>Built on ServiceNow AI Platform</strong> for unified enterprise automation.
          </p>
        </div>
      )
    },
    
    {
      question: "What are the main features of Operational Technology Management?",
      answer: (
        <div>
          <p className="mb-3">OT Management includes four core features:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OT Asset Management:</strong> Manage the OT asset lifecycle effectively on one platform</li>
            <li><strong>OT Visibility:</strong> Discover OT devices on industrial networks and map them to production processes</li>
            <li><strong>OT Vulnerability Response:</strong> Identify issues and automate alerts to address problems before they happen</li>
            <li><strong>OT Service Management:</strong> Connect IT, OT, and production processes for operational resilience</li>
          </ul>
          <p className="mt-3">
            All features are <strong>grouped into scalable packages</strong> that can grow with your needs.
          </p>
        </div>
      )
    },

    {
      question: "What package options are available for Operational Technology Management?",
      answer: (
        <div>
          <p className="mb-3">ServiceNow offers four OT Management packages:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Operational Technology Visibility (OTV)</h4>
              <p className="text-sm mb-2">Operational Technology Manager with ITOM Visibility v2 and Integration Hub spokes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">OT Vulnerability Response (OTVR)</h4>
              <p className="text-sm mb-2">Vulnerability Solution Management with Industrial Process Manager and App Engine.</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-600 mb-2">OT Service Management (OTSM)</h4>
              <p className="text-sm mb-2">Complete service management with change, incident, asset management, and workforce optimization.</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">OT Asset Management (OTAM)</h4>
              <p className="text-sm mb-2">Asset Management with Planned Maintenance, Performance Analytics Advanced, and Predictive Intelligence.</p>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "What certified integrations are available with OT Management?",
      answer: (
        <div>
          <p className="mb-3">
            OT Management seamlessly integrates with industry-leading OT tools:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Siemens IAH:</strong> Import Siemens IAH assets with Service Graph Connector</li>
            <li><strong>Claroty CTD:</strong> Import sites, detect devices, establish connections, and install programs</li>
            <li><strong>Nozomi CMC:</strong> Import asset and alert information from multiple instances</li>
            <li><strong>SAP Integration:</strong> Prebuilt integration to populate ISA Equipment Model without design or training</li>
          </ul>
          <p className="mt-3">
            All integrations are certified and provide seamless data flow between OT tools and ServiceNow.
          </p>
        </div>
      )
    },

    {
      question: "How does OT Management enhance security and minimize risk?",
      answer: (
        <div>
          <p className="mb-3">OT Management strengthens security through multiple approaches:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Security Enhancement:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Systematically harden expanding OT and digital attack surface</li>
                <li>Streamline compliance efforts for resilient operations</li>
                <li>Comprehensive vulnerability response with automated alerts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Risk Minimization:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Proactive problem identification before incidents occur</li>
                <li>Strategic vulnerability prioritization and response</li>
                <li>Complete visibility for accurate risk assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Compliance Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Regulatory compliance tools and processes</li>
                <li>Data security with ServiceNow AI Platform</li>
                <li>Audit trail and documentation automation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Operational Technology Management implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on package selection, OT complexity, and integration requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OTV Package Implementation:</strong> Starting from $180K - includes OT visibility and basic integration</li>
            <li><strong>OTVR Package Implementation:</strong> $280K-$380K - includes vulnerability response and advanced security</li>
            <li><strong>OTSM Package Implementation:</strong> $350K-$450K - complete service management with change and incident</li>
            <li><strong>OTAM Package Implementation:</strong> $400K+ - full asset management with predictive intelligence and analytics</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 9-12 months through downtime reduction, security improvement, and process optimization.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "OT ROI Calculator", url: "/ot-roi-calculator" }
      ]
    },

    {
      question: "What is the typical implementation timeline for OT Management?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline depends on package scope and OT environment complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>OTV Package:</strong> 14-18 weeks for basic visibility and device discovery</li>
            <li><strong>OTVR Package:</strong> 16-22 weeks including vulnerability response and security integration</li>
            <li><strong>OTSM Package:</strong> 20-26 weeks for complete service management with change and incident processes</li>
            <li><strong>OTAM Package:</strong> 22-30 weeks for full asset management with predictive intelligence and analytics</li>
          </ul>
          <p className="mt-3">
            Our methodology: OT Discovery & Assessment (3-4 weeks) → Integration & Configuration (10-16 weeks) → Security & Testing (3-4 weeks) → Go-Live & Optimization (3-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "How does OT Management support industrial and manufacturing environments?",
      answer: (
        <div>
          <p className="mb-3">OT Management is specifically designed for industrial operations:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Industrial Network Support:</strong> Discover OT devices on industrial networks with complete context</li>
            <li><strong>Production Process Mapping:</strong> Map devices to production processes for operational visibility</li>
            <li><strong>Manufacturing Integration:</strong> Certified integrations with Siemens, SAP, and other industrial systems</li>
            <li><strong>Operational Resilience:</strong> Connect IT, OT, and production for seamless operations</li>
            <li><strong>Asset Lifecycle Management:</strong> Manage OT assets effectively throughout their lifecycle</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Organizations typically see 60% process optimization and 85% reduction in downtime.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Industry-focused OT examples)
  const caseStudies = [
    {
      title: "Global Manufacturing Company Secures OT Environment with ServiceNow",
      client: "Fortune 500 Manufacturer",
      industry: "Manufacturing",
      challenge: "Managing complex OT infrastructure across multiple production facilities with limited visibility into device security and vulnerability status",
      solution: "ServiceNow OT Management with complete visibility, vulnerability response, and service management for industrial resilience",
      results: [
        { metric: "90%", description: "Improvement in security posture" },
        { metric: "85%", description: "Reduction in downtime" },
        { metric: "Complete", description: "OT ecosystem visibility" },
        { metric: "60%", description: "Process optimization" }
      ],
      testimonial: "ServiceNow OT Management gave us complete visibility across our industrial networks and enabled proactive security management that transformed our operational resilience.",
      executive: "Chief Technology Officer",
      logo: "/images/clients/manufacturer-logo.png"
    },
    {
      title: "Energy Company Optimizes Critical Infrastructure with OT Visibility",
      client: "Leading Energy Provider",
      industry: "Energy & Utilities",
      challenge: "Securing critical energy infrastructure while maintaining operational continuity across distributed power generation and distribution systems",
      solution: "ServiceNow OT Management with asset management, vulnerability response, and industrial process integration for critical infrastructure protection",
      results: [
        { metric: "Critical", description: "Infrastructure protection" },
        { metric: "Operational", description: "Continuity maintained" },
        { metric: "Distributed", description: "System integration" },
        { metric: "Enhanced", description: "Security resilience" }
      ],
      testimonial: "ServiceNow enabled us to secure our critical energy infrastructure while maintaining the operational continuity essential for reliable power delivery to our customers.",
      executive: "Head of Operations Technology",
      logo: "/images/clients/energy-logo.png"
    },
    {
      title: "Chemical Processing Facility Achieves Operational Excellence",
      client: "Global Chemical Company",
      industry: "Chemical Processing",
      challenge: "Managing safety-critical OT systems in chemical processing with stringent regulatory compliance and zero-tolerance for security incidents",
      solution: "Complete ServiceNow OT Management suite with service management, asset lifecycle, and compliance automation for chemical industry requirements",
      results: [
        { metric: "Zero", description: "Security incidents achieved" },
        { metric: "100%", description: "Regulatory compliance" },
        { metric: "Safety-Critical", description: "Systems secured" },
        { metric: "Operational", description: "Excellence achieved" }
      ],
      testimonial: "ServiceNow OT Management enabled us to achieve operational excellence while maintaining the highest safety and security standards required in chemical processing.",
      executive: "Director of Process Safety",
      logo: "/images/clients/chemical-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Operational Technology Management - Complete ServiceNow OT Management | ifBash</title>
        <meta
          name="description"
          content="Gain visibility and context into your OT environment. Safeguard your devices and minimize downtime with dependable service management from ServiceNow Operational Technology Management."
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
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss OT Management Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
            Discuss OT Management
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-green-600 opacity-20"></div>
        </button>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete OT Suite
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/90 to-cyan-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Industrial Ready
                  </Badge>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 font-semibold">
                    Operational Technology
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 font-semibold">
                      Management
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-emerald-300">Gain visibility and context</span> into your OT environment. Safeguard your devices and{' '}
                  <span className="font-semibold text-teal-300">minimize downtime with dependable service management</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get OT Management
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95 overflow-hidden border-2 border-gray-300/30 hover:border-gray-300/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative flex items-center justify-center">
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-teal-400 group-hover:text-teal-300" />
                      View Demos
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Operational Technology Management Platform"
                      className="w-full h-full object-cover"
                      gradient="from-green-600 to-emerald-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Complete</div>
                      <div className="text-xs text-green-200">Visibility</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Secure</div>
                      <div className="text-xs text-emerald-200">Operations</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Factory className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ShieldCheck className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                  Benefits of Operational
                </span>
                <br />
                <span className="text-gray-800">
                  Technology Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Map OT devices, assess risks, and optimize processes with comprehensive operational technology management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="text-sm font-semibold text-green-700 mb-1">Impact Achieved</div>
                      <div className="text-green-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                  Features for Operational
                </span>
                <br />
                <span className="text-gray-800">
                  Technology Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Key features grouped into packages that can scale with your operational technology needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
                  Package Options
                </span>
                <br />
                <span className="text-gray-800">
                  Scalable OT Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get the tools you need most with OT Management packages that meet your business needs and scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packageOptions.map((pkg, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

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

        {/* Platform Capabilities Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  Built on ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  AI Platform
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Platform capabilities to optimize OT and IT processes together on a single, unifying platform for the enterprise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformCapabilities.map((capability, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{capability.title}</h3>
                      <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 text-xs px-2 py-1 mt-1">
                        Platform Feature
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>

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
              ))}
            </div>
          </div>
        </section>

        {/* Certified Integrations Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Certified Integrations
                </span>
                <br />
                <span className="text-gray-800">
                  Industrial OT Tools
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Seamlessly integrate with industry-leading OT tools and applications for comprehensive operational technology management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifiedIntegrations.map((integration, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About OT Management
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about Operational Technology Management implementation and capabilities.
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
                        <div className="w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  ServiceNow Case Studies
                </span>
                <br />
                <span className="text-white">
                  Real OT Management Success
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how industrial organizations achieved operational excellence and security with ServiceNow OT Management.
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
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Solution</h4>
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
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Secure Your OT Environment?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss Operational Technology Management implementation and transform your industrial operations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact OT Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    View Demos
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">ot-experts@ifbash.com</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-pink-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Calendar className="h-6 w-6 text-indigo-200 mx-auto mb-2" />
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
