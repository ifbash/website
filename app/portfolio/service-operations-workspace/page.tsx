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
  Navigation,
  MessageSquare,
  Wrench,
  GraduationCap as GuideIcon,
  Moon,
  Sun,
  PaintBucket,
  BarChart4,
  RefreshCcw,
  BookCheck,
  Lightbulb as RecommendIcon,
  Radar,
  Minimize2,
  Maximize2,
  ChevronDown
} from "lucide-react";

export default function ServiceOperationsWorkspacePage() {
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
    "name": "Service Operations Workspace - ServiceNow SOW Implementation",
    "description": "Predict, prevent, and resolve incidents proactively from a single workspace. Get clear visibility into context and impact before incidents affect employees.",
    "applicationCategory": "IT Operations Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Service Operations Workspace and how is it different from Agent Workspace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service Operations Workspace (SOW) is ServiceNow's next-generation unified workspace built on the Next Experience framework. Unlike Agent Workspace, SOW provides unified ITSM and ITOM capabilities, modern configurable UI, enhanced collaboration features, AI-powered insights, and personalized user experience."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does a typical Service Operations Workspace implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation timeline varies: Basic Implementation (8-12 weeks), Advanced Implementation (12-18 weeks), Enterprise Implementation (16-24 weeks). Timeline depends on complexity, customization requirements, and scope."
        }
      },
      {
        "@type": "Question",
        "name": "What ServiceNow licenses do I need for Service Operations Workspace?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "SOW licensing depends on modules: ITSM Access requires ITSM Pro/Standard licenses, ITOM Access requires ITOM licenses, Full SOW Experience needs both ITSM and ITOM subscriptions. User roles require sn_sow.sow_user role for workspace access."
        }
      }
    ]
  };

  // Benefits (Exact from ServiceNow)
  const benefits = [
    {
      icon: AlertTriangle,
      title: "Mitigate incidents",
      description: "Shift your service operations team from creating incidents to addressing actionable alerts.",
      color: "from-red-500 to-orange-500",
      stats: "67% reduction in incident volume"
    },
    {
      icon: Activity,
      title: "Minimize service disruption",
      description: "Maximize uptime with problem identification, collaboration, and resolution in a single workspace.",
      color: "from-orange-500 to-yellow-500",
      stats: "99.8% service availability"
    },
    {
      icon: Users,
      title: "Support greater business productivity",
      description: "Improve task focus and the overall IT employee experience with personalized, configurable views.",
      color: "from-green-500 to-emerald-500",
      stats: "45% productivity improvement"
    },
    {
      icon: Timer,
      title: "Reduce mean time to resolution",
      description: "Identify problems quickly based on anomaly detection and root cause analysis, driven by data.",
      color: "from-blue-500 to-indigo-500",
      stats: "78% faster MTTR"
    }
  ];

  // Features (Exact from ServiceNow)
  const coreFeatures = [
    {
      icon: Navigation,
      title: "Unified navigation",
      description: "Manage incidents, problems, and investigations easily. Boost productivity in your service operations.",
      capabilities: [
        "Centralized incident management",
        "Integrated problem tracking",
        "Investigation workflow management",
        "Streamlined operations interface"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: MessageSquare,
      title: "Collaboration",
      description: "Collaborate instantly across services and operations teams to resolve issues faster.",
      capabilities: [
        "Cross-team instant collaboration",
        "Service-wide communication",
        "Real-time issue resolution",
        "Team coordination tools"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Wrench,
      title: "Configurable interface",
      description: "Personalize your instance for greater efficiency based on critical alerts and incidents.",
      capabilities: [
        "Personalized workspace views",
        "Critical alert prioritization",
        "Incident-based customization",
        "Efficiency optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GuideIcon,
      title: "Guided setup",
      description: "Ease adoption with structured step-by-step guidance to help administrators configure applications and features.",
      capabilities: [
        "Step-by-step configuration",
        "Administrator guidance",
        "Application setup wizards",
        "Feature configuration help"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  // Additional Features (Exact from ServiceNow)
  const additionalFeatures = [
    {
      icon: Palette,
      title: "Personalized UI",
      description: "Let end users adjust display settings (e.g., compact mode) and color themes (e.g., dark mode).",
      details: [
        "Compact mode display options",
        "Dark mode and light mode themes",
        "Customizable color schemes",
        "Personal display preferences"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart4,
      title: "Modern visualizations",
      description: "Use data visualization styling to translate new and classic reports into one dashboard experience.",
      details: [
        "Advanced data visualization",
        "Classic report modernization",
        "Unified dashboard experience",
        "Interactive visual elements"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: RefreshCcw,
      title: "Change management",
      description: "Manage the full lifecycle through dynamic pages that display status and tasks for each change state.",
      details: [
        "Full lifecycle management",
        "Dynamic status pages",
        "Change state tracking",
        "Task management per state"
      ],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: BookCheck,
      title: "Change advisory board (CAB) workbench",
      description: "Run an efficient CAB meeting to get guidance on proposed high-risk changes.",
      details: [
        "Efficient CAB meeting management",
        "High-risk change evaluation",
        "Structured guidance process",
        "Change proposal review"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: RecommendIcon,
      title: "Recommended actions",
      description: "Use guidance-based or field-level recommendations for records.",
      details: [
        "Guidance-based recommendations",
        "Field-level suggestions",
        "Record optimization tips",
        "Best practice guidance"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Related Products (Exact from ServiceNow)
  const relatedProducts = [
    {
      name: "IT Operations Management",
      description: "Predict issues, prevent impact, and automate resolution with AIOps.",
      icon: Radar,
      features: ["Predictive AIOps", "Issue Prevention", "Automated Resolution", "Impact Analysis"],
      availability: "Available with SOW"
    },
    {
      name: "IT Service Management", 
      description: "Transform the impact, speed, and delivery of IT.",
      icon: Settings,
      features: ["Service Transformation", "Delivery Speed", "Impact Management", "IT Enhancement"],
      availability: "Available with SOW"
    },
    {
      name: "Change Management",
      description: "Accelerate change at DevOps speed by automating approvals while maintaining control.",
      icon: RefreshCw,
      features: ["DevOps Speed", "Automated Approvals", "Control Maintenance", "Change Acceleration"],
      availability: "Integration available"
    },
    {
      name: "Event Management",
      description: "Reduce event floods from monitoring tools and gain insight into business service health.",
      icon: Activity,
      features: ["Event Flood Reduction", "Monitoring Integration", "Service Health Insights", "Business Intelligence"],
      availability: "Integration available"
    },
    {
      name: "Health Log Analytics",
      description: "Deliver uninterrupted digital services with real-time log data to solve problems quickly.",
      icon: BarChart3,
      features: ["Real-time Log Data", "Quick Problem Solving", "Service Continuity", "Analytics Engine"],
      availability: "Integration available"
    }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What is Service Operations Workspace and how is it different from Agent Workspace?",
      answer: (
        <div>
          <p className="mb-3">
            Service Operations Workspace (SOW) is ServiceNow's next-generation unified workspace built on the Next Experience framework. Unlike Agent Workspace, SOW provides:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Unified ITSM and ITOM capabilities in a single interface</li>
            <li>Modern, configurable UI built with UI Builder</li>
            <li>Enhanced collaboration features and embedded chat</li>
            <li>AI-powered insights and recommendations</li>
            <li>Personalized user experience with dark mode and compact views</li>
          </ul>
          <p className="mt-3 text-sm text-orange-600">
            <strong>Note:</strong> Agent Workspace has been deprecated and is no longer supported from Washington DC Release.
          </p>
        </div>
      ),
      links: [
        { text: "SOW vs Agent Workspace Comparison", url: "/sow-comparison" }
      ]
    },
    
    {
      question: "How long does a typical Service Operations Workspace implementation take?",
      answer: (
        <div>
          <p className="mb-3">Implementation timeline varies based on complexity and scope:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Basic Implementation:</strong> 8-12 weeks for standard configuration with core ITSM modules</li>
            <li><strong>Advanced Implementation:</strong> 12-18 weeks including ITOM integration, custom dashboards, and workflow automation</li>
            <li><strong>Enterprise Implementation:</strong> 16-24 weeks for complex multi-site deployments with extensive customization</li>
          </ul>
          <p className="mt-3">
            Our implementation follows a proven methodology: Discovery (2 weeks) → Configuration (4-8 weeks) → Testing (2-3 weeks) → Go-Live & Optimization (2-4 weeks).
          </p>
        </div>
      )
    },

    {
      question: "What ServiceNow licenses do I need for Service Operations Workspace?",
      answer: (
        <div>
          <p className="mb-3">SOW licensing depends on which modules you want to access:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ITSM Access:</strong> Requires ITSM Pro or Standard licenses</li>
            <li><strong>ITOM Access:</strong> Requires ITOM licenses (Event Management, Cloud Management, etc.)</li>
            <li><strong>Full SOW Experience:</strong> Both ITSM and ITOM subscriptions for complete functionality</li>
            <li><strong>User Roles:</strong> sn_sow.sow_user role is required for workspace access</li>
          </ul>
          <p className="mt-3 text-blue-600">
            Contact us for a detailed licensing assessment based on your specific requirements.
          </p>
        </div>
      ),
      links: [
        { text: "Schedule Licensing Consultation", url: "https://meetings.hubspot.com/ifbash" }
      ]
    },

    {
      question: "Can I migrate from Agent Workspace to Service Operations Workspace?",
      answer: (
        <div>
          <p className="mb-3">
            Yes, ServiceNow provides a migration path from Agent Workspace to SOW. Our migration approach includes:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Assessment of current Agent Workspace configuration</li>
            <li>Mapping of custom forms, lists, and workflows to SOW</li>
            <li>User training and change management</li>
            <li>Phased rollout with parallel running capability</li>
            <li>Data preservation and custom configuration migration</li>
          </ul>
          <p className="mt-3 text-orange-600">
            <strong>Important:</strong> Migration should be planned soon as Agent Workspace is deprecated.
          </p>
        </div>
      )
    },

    {
      question: "What are the system requirements for Service Operations Workspace?",
      answer: (
        <div>
          <p className="mb-3">SOW system requirements include:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Browser Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Chrome 90+</li>
                <li>Firefox 88+</li>
                <li>Safari 14+</li>
                <li>Edge 90+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Platform Requirements:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>ServiceNow Vancouver Release or later</li>
                <li>SOW plugins activated</li>
                <li>1280x800 minimum screen resolution</li>
                <li>Broadband internet connection</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How much does Service Operations Workspace implementation cost?",
      answer: (
        <div>
          <p className="mb-3">
            Implementation costs vary based on scope, complexity, and customization requirements:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Basic Implementation:</strong> Starting from $85K - includes core configuration, basic training, and go-live support</li>
            <li><strong>Advanced Implementation:</strong> $150K-$200K - includes custom workflows, advanced integrations, and comprehensive training</li>
            <li><strong>Enterprise Implementation:</strong> $250K+ - full customization, multi-site deployment, and ongoing optimization</li>
          </ul>
          <p className="mt-3">
            ROI typically achieved within 6-12 months through reduced MTTR, improved productivity, and automated processes.
          </p>
        </div>
      ),
      links: [
        { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
        { text: "ROI Calculator", url: "/roi-calculator" }
      ]
    },

    {
      question: "Can Service Operations Workspace integrate with third-party tools?",
      answer: (
        <div>
          <p className="mb-3">
            Yes, SOW offers extensive integration capabilities:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Monitoring Tools:</strong> Nagios, SolarWinds, Dynatrace, New Relic, DataDog</li>
            <li><strong>Communication:</strong> Microsoft Teams, Slack, Zoom</li>
            <li><strong>ITSM Tools:</strong> Remedy, Jira Service Management, Cherwell</li>
            <li><strong>Security Tools:</strong> Splunk, QRadar, CrowdStrike</li>
            <li><strong>Cloud Platforms:</strong> AWS, Azure, Google Cloud</li>
          </ul>
          <p className="mt-3">
            Integration Hub provides 1000+ pre-built connectors with custom integration development available.
          </p>
        </div>
      )
    },

    {
      question: "What training and support do you provide after SOW implementation?",
      answer: (
        <div>
          <p className="mb-3">Our comprehensive training and support includes:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Training Programs:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>End-user training (2-3 days)</li>
                <li>Administrator training (5 days)</li>
                <li>Developer training (3 days)</li>
                <li>Custom role-based training modules</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Ongoing Support:</h4>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>24/7 support with SLA guarantees</li>
                <li>Dedicated customer success manager</li>
                <li>Monthly health checks and optimization</li>
                <li>Access to ServiceNow community and resources</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    {
      question: "How does SOW improve incident management compared to traditional tools?",
      answer: (
        <div>
          <p className="mb-3">SOW transforms incident management through:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Proactive Detection:</strong> AI-powered anomaly detection prevents incidents before they occur</li>
            <li><strong>Unified View:</strong> Single interface combining incidents, alerts, changes, and problems</li>
            <li><strong>Intelligent Routing:</strong> Automatic assignment based on skills, availability, and workload</li>
            <li><strong>Collaboration:</strong> Embedded chat, video calls, and knowledge sharing</li>
            <li><strong>Automation:</strong> Self-healing capabilities and automated resolution workflows</li>
          </ul>
          <p className="mt-3 text-green-600">
            <strong>Result:</strong> Average 78% reduction in MTTR and 67% fewer incidents reaching end users.
          </p>
        </div>
      )
    },

    {
      question: "Is Service Operations Workspace suitable for small and medium businesses?",
      answer: (
        <div>
          <p className="mb-3">
            Absolutely! SOW scales effectively for organizations of all sizes:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Small Teams (10-50 users):</strong> Simplified implementation with core ITSM features</li>
            <li><strong>Medium Businesses (50-200 users):</strong> Standard implementation with workflow automation</li>
            <li><strong>Enterprise (200+ users):</strong> Full-scale deployment with advanced customization</li>
          </ul>
          <p className="mt-3">
            Our flexible implementation approach ensures you only pay for what you need while maintaining scalability for future growth.
          </p>
        </div>
      )
    }
  ];

  // Case Studies (Exact from ServiceNow)
  const caseStudies = [
    {
      title: "Empowering IBM's Business Transformation with the ServiceNow AI Platform",
      client: "IBM",
      industry: "Technology Services",
      challenge: "Business transformation requiring enhanced service operations and AI-powered automation",
      solution: "ServiceNow AI Platform with Service Operations Workspace for comprehensive operational excellence",
      results: [
        { metric: "Enhanced", description: "Business transformation capabilities" },
        { metric: "AI-Powered", description: "Service operations automation" },
        { metric: "Comprehensive", description: "Operational excellence achieved" },
        { metric: "Improved", description: "Service delivery efficiency" }
      ],
      testimonial: "ServiceNow AI Platform empowered our business transformation with intelligent service operations and comprehensive automation capabilities.",
      executive: "IBM Leadership Team",
      logo: "/images/clients/ibm-logo.png"
    },
    {
      title: "Scania Drives Employees Toward a Fully Digitalized Future",
      client: "Scania",
      industry: "Automotive Manufacturing",
      challenge: "Driving employees toward fully digitalized future with enhanced service operations",
      solution: "Service Operations Workspace with modern visualizations and collaborative workflows for digital transformation",
      results: [
        { metric: "Fully", description: "Digitalized future achieved" },
        { metric: "Enhanced", description: "Employee experience" },
        { metric: "Modern", description: "Service operations" },
        { metric: "Collaborative", description: "Workflow transformation" }
      ],
      testimonial: "Service Operations Workspace accelerated our journey toward a fully digitalized future with enhanced employee experience and operational excellence.",
      executive: "Scania Digital Team",
      logo: "/images/clients/scania-logo.png"
    },
    {
      title: "Bell Food Group Adds Automation to Its New Recipe for Growth",
      client: "Bell Food Group",
      industry: "Food & Beverage",
      challenge: "Adding automation to growth recipe while maintaining operational excellence",
      solution: "Automated Service Operations Workspace with guided setup and configurable interfaces for scalable growth",
      results: [
        { metric: "Automated", description: "Growth recipe implementation" },
        { metric: "Scalable", description: "Operational excellence" },
        { metric: "Enhanced", description: "Service delivery" },
        { metric: "Optimized", description: "Business processes" }
      ],
      testimonial: "Service Operations Workspace provided the automation foundation we needed to scale our operations while maintaining quality and efficiency.",
      executive: "Bell Food Group Operations",
      logo: "/images/clients/bell-food-logo.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Service Operations Workspace - Complete ServiceNow SOW Portfolio | ifBash</title>
        <meta
          name="description"
          content="Predict, prevent, and resolve incidents proactively from a single workspace. Complete ServiceNow Service Operations Workspace implementation with all official modules and features."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      {/* Fixed Chat Button */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50">
        <a href="/get-started"
          className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label="Discuss SOW Implementation"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[160px] text-center">
            Discuss SOW Implementation
          </span>
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-600 opacity-20"></div>
        </a>
      </div>

      <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-[100vw] width-sm-fix">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60" />
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-float delay-150 opacity-40" />
            <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-300 opacity-80" />
          </div>

          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* ServiceNow Official Badge */}
                <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                  <Badge className="bg-gradient-to-r from-orange-500/90 to-red-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-orange-600 hover:to-red-700 transition-all duration-300">
                    <Award className="w-3 h-3 mr-1" />
                    ServiceNow Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Complete SOW
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                    <Trophy className="w-3 h-3 mr-1" />
                    Enterprise Ready
                  </Badge>
                </div>

                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-2 sm:px-0">
                  ServiceNow{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 font-semibold">
                    Service Operations
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 font-semibold">
                      Workspace
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
                  <span className="font-semibold text-red-300">Predict, prevent, and resolve incidents proactively</span> from a single workspace. Get clear visibility into context and impact{' '}
                  <span className="font-semibold text-pink-300">before incidents affect employees</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                  <a href="/get-started"
                    className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-2 sm:px-8 py-2 sm:py-4 text-xs sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700"
                    style={{
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)"
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get SOW Implementation
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
                      <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-pink-400 group-hover:text-pink-300" />
                      View Data Sheet
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="relative lg:h-[600px]">
                <div className="relative z-20 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                    <PlaceholderImage
                      title="ServiceNow Service Operations Workspace Dashboard"
                      className="w-full h-full object-cover"
                      gradient="from-orange-600 to-red-600"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Unified</div>
                      <div className="text-xs text-orange-200">Workspace</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">Proactive</div>
                      <div className="text-xs text-red-200">Resolution</div>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                    <div className="w-full h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Navigation className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                    <div className="w-full h-full bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <AlertTriangle className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                  Benefits of Service
                </span>
                <br />
                <span className="text-gray-800">
                  Operations Workspace
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Transform your service operations with these core benefits proven across enterprise implementations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                      <div className="text-sm font-semibold text-orange-700 mb-1">Impact Achieved</div>
                      <div className="text-orange-600">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section - No Images */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
                  Features of Service
                </span>
                <br />
                <span className="text-gray-800">
                  Operations Workspace
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Core ServiceNow SOW features designed for operational excellence and team productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
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

        {/* Additional Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                  Additional Features
                </span>
                <br />
                <span className="text-gray-800">
                  Enhanced Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Extended ServiceNow SOW features for comprehensive operational excellence and enhanced user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="group bg-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 capitalize">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Feature Details:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
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

        {/* Related Products Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                  Related ServiceNow
                </span>
                <br />
                <span className="text-gray-800">
                  Products & Integrations
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ServiceNow products that integrate seamlessly with Service Operations Workspace for enhanced capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {relatedProducts.map((product, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-2xl p-3 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 mt-1">
                        {product.availability}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
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

        {/* FAQ Section - NEW */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
          <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Frequently Asked Questions
                </span>
                <br />
                <span className="text-gray-800">
                  About Service Operations Workspace
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about SOW implementation, features, and benefits.
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
                        <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 mb-4" />
                        <div className="text-gray-600 leading-relaxed space-y-3">
                          {faq.answer}
                          {faq.links && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
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
                  Real Customer Success Stories
                </span>
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                See how enterprise customers achieved operational excellence with Service Operations Workspace.
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
                                <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
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
        <section className="py-8 sm:py-16 md:py-24">
          <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-2 sm:px-0 text-center">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Service Operations?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Connect with our ServiceNow experts to discuss Service Operations Workspace implementation and start your journey to operational excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a href="/get-started"
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact SOW Experts
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </a>
                  <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Download className="mr-2 h-5 w-5 inline" />
                    View Data Sheet
                  </button>
                </div>

                {/* Contact Information */}
                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-purple-200 mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">sow-experts@ifbash.com</p>
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

        /* Prevent horizontal scroll */
        :root {
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
          
          .card-content {
            padding: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
