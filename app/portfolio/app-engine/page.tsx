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
FileCheck,
Building as BankIcon,
Scale,
HeartPulse,
UserCog,
FileUser,
Users as Patients,
ShoppingCartIcon as CartIcon,
Package2,
Antenna,
Waves,
Flag,
Landmark,
Rss,
Plug,
Lock,
Bug,
Container,
Crosshair,
GraduationCap as CapIcon,
ExternalLinkIcon,
Layers as LayersIcon,
ShieldIcon,
UserIcon,
Trees,
PenTool,
Home,
Terminal
} from "lucide-react";

export default function AppEnginePage() {
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
  "name": "App Engine - ServiceNow Low-Code Development Platform",
  "description": "Reimagine every process as a digital workflow. With ServiceNow App Engine, you can build and extend workflow apps to work the way you work.",
  "applicationCategory": "App Engine"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ServiceNow App Engine and how does it help organizations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ServiceNow App Engine reimagines every process as a digital workflow. It moves beyond static automation to scale development teams and create intelligent apps that embed powerful AI agents to reason, plan, and act autonomously."
      }
    },
    {
      "@type": "Question", 
      "name": "What is Now Assist for Creator and how does it enhance development productivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Now Assist for Creator uses generative AI to boost productivity and efficiency during the app development lifecycle with flow generation, intelligent code recommendations, and automated testing capabilities powered by the ServiceNow AI Platform."
      }
    }
  ]
};

// Core Benefits (From ServiceNow App Engine content)
const benefits = [
  {
    icon: Rocket,
    title: "Elevate experiences with proactive apps",
    description: "Empower your teams to build smart, data-driven apps that adapt to real-time needs. Scale systems, automate work, and boost workflow efficiency all on one platform.",
    color: "from-purple-500 to-pink-500",
    stats: "Smart, adaptive applications"
  },
  {
    icon: Shield,
    title: "Scale safely with governance",
    description: "Set guardrails throughout development based on tested, accurate AI. Create AI agents grounded in your trusted data to reduce manual work for admins.",
    color: "from-pink-500 to-rose-500",
    stats: "Secure, governed development"
  },
  {
    icon: Zap,
    title: "Build smarter and deploy faster",
    description: "Use AI tools in a unified environment to innovate, create, and deploy apps faster. Manage metadata centrally and rapidly scale automations across developer studios.",
    color: "from-rose-500 to-red-500",
    stats: "Accelerated development"
  },
  {
    icon: Brain,
    title: "AI-powered intelligent automation",
    description: "Move beyond static automation to create intelligent apps that embed powerful AI agents to reason, plan, and act with autonomous capabilities.",
    color: "from-red-500 to-orange-500",
    stats: "Autonomous AI capabilities"
  }
];

// Key Features (From ServiceNow App Engine content)
const keyFeatures = [
  {
    icon: Bot,
    title: "Now Assist for App Engine",
    description: "Build smarter apps that adapt to real-time needs with data-driven generative AI and AI agents for intelligent application development.",
    capabilities: [
      "Data-driven generative AI",
      "Real-time app adaptation",
      "AI agent integration",
      "Intelligent development assistance"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Now Assist for Creator",
    description: "Use the power of generative AI to boost productivity and efficiency during the app development lifecycle with intelligent recommendations.",
    capabilities: [
      "Generative AI productivity",
      "Development lifecycle efficiency",
      "Intelligent code recommendations",
      "Automated flow generation"
    ],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Take action with autonomous AI agents that work for you, capable of reasoning, planning, and acting independently to automate complex processes.",
    capabilities: [
      "Autonomous AI agents",
      "Complex process automation",
      "Independent reasoning",
      "Intelligent action planning"
    ],
    color: "from-rose-500 to-red-500"
  },
  {
    icon: Terminal,
    title: "ServiceNow Studio",
    description: "Use one unified, intuitive development environment to build, deploy, and manage your apps with comprehensive development tools.",
    capabilities: [
      "Unified development environment",
      "Comprehensive dev tools",
      "App deployment management",
      "Intuitive development interface"
    ],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Layout,
    title: "Creator Studio",
    description: "Create intelligent workflows in a guided, focused environment using no code with drag-and-drop interface for business process automation.",
    capabilities: [
      "No-code workflow creation",
      "Guided development environment",
      "Drag-and-drop interface",
      "Business process automation"
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Settings,
    title: "App Engine Management Center",
    description: "Empower business and IT to collaborate, manage, and govern low-code app development with comprehensive governance and collaboration tools.",
    capabilities: [
      "Low-code app governance",
      "Business-IT collaboration",
      "Development management",
      "Comprehensive oversight"
    ],
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Workflow,
    title: "Flow Designer",
    description: "Automate business processes as digital workflows across departments, apps, and systems with comprehensive workflow automation capabilities.",
    capabilities: [
      "Cross-department workflows",
      "Digital process automation",
      "System integration",
      "Business process digitization"
    ],
    color: "from-yellow-500 to-green-500"
  },
  {
    icon: BarChart3,
    title: "Process Automation Designer",
    description: "Build and manage multiple complex workflows with no-code playbooks for comprehensive process automation and workflow management.",
    capabilities: [
      "No-code playbooks",
      "Complex workflow management",
      "Multiple process automation",
      "Comprehensive workflow tools"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

// Role-Based Applications
const roleBasedApps = [
  {
    role: "App Delivery Leader",
    description: "Innovate fast while governing for scale. Expand development capabilities to the business while giving IT admins peace of mind with comprehensive governance.",
    applications: [
      "App Engine Management Center - Enable business and IT collaboration with governance and management",
      "App Engine Studio - Fuel business growth with low-code visual app development environment",
      "Delegated Development - Allow developers with any expertise level to build apps for specific needs"
    ],
    icon: Award,
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "Platform Owner", 
    description: "Build out the automation you need while empowering the business to assist IT, ensuring clear visibility and implementing appropriate guardrails.",
    applications: [
      "Flow Designer - Transform business operations and automate processes as digital workflows",
      "Integration Hub - Enable developers and no-code builders to integrate ServiceNow workflows",
      "App Engine Management Center - Empower business and IT teams for efficient collaboration"
    ],
    icon: Shield,
    color: "from-pink-500 to-rose-500"
  },
  {
    role: "Developer",
    description: "Get more done with AI-powered low code. Boost your productivity by automating repetitive tasks so you can focus on solving complex problems.",
    applications: [
      "Now Assist for Creator - Increase productivity with generative AI recommendations and code generation",
      "Process Automation Designer - Automate common processes with no-code playbooks easily",
      "Studio IDE - Use web-based integrated development environment for application creation and distribution"
    ],
    icon: Code,
    color: "from-rose-500 to-red-500"
  },
  {
    role: "Business Technologist",
    description: "Use intelligent workflows to automate manual tasks and processes. Get access to templates and reusable components in drag-and-drop manner.",
    applications: [
      "App Engine Studio - Automate workflows in easy-to-use, low-code visual app environment",
      "Prebuilt Templates - Accelerate development with templates for variety of use cases",
      "Now Assist for Creator - Let AI guide you with flow generation and intelligent recommendations"
    ],
    icon: Users,
    color: "from-red-500 to-orange-500"
  }
];

// Package Tiers
const packageTiers = [
  {
    name: "App Engine Starter",
    description: "For businesses that want to grow and evolve workflows with custom applications using essential low-code development capabilities",
    features: [
      "ServiceNow Studio",
      "Mobile App Builder",
      "Guided Application Creator",
      "Delegated Development",
      "Service Creator",
      "Form Designer",
      "Service Portal Designer",
      "UI Builder",
      "Automated Testing Framework",
      "Flow Designer",
      "Action Designer",
      "Process Automation Designer",
      "Now Experience Platform"
    ],
    color: "from-purple-500 to-pink-500",
    price: "Starter Package"
  },
  {
    name: "App Engine Enterprise",
    description: "For businesses looking to app development as a means to innovate at scale across the enterprise with comprehensive capabilities",
    features: [
      "All Starter features",
      "Creator Studio", 
      "App Engine Studio",
      "Table Builder",
      "Workspace Builder",
      "App Engine Management Center",
      "Prebuilt Templates",
      "Process Mining",
      "Performance Analytics",
      "Virtual Agent",
      "Predictive Intelligence",
      "Mobile Publishing",
      "Dynamic Translation",
      "ServiceNow Voice",
      "Universal Request Pro"
    ],
    color: "from-pink-500 to-rose-500",
    price: "Enterprise Package"
  }
];

// Advanced Development Capabilities
const advancedCapabilities = [
  {
    title: "Process Mining",
    description: "Improve outcomes by optimizing process flows to streamline work with data-driven insights into process efficiency and bottleneck identification.",
    icon: TrendingUp,
    benefit: "Process optimization"
  },
  {
    title: "Predictive Intelligence",
    description: "Simplify and accelerate everyday work with built-in machine learning for predictive analytics and intelligent automation capabilities.",
    icon: Brain,
    benefit: "Predictive automation"
  },
  {
    title: "Performance Analytics",
    description: "Anticipate and continuously improve with real-time analytics providing comprehensive insights into application and workflow performance.",
    icon: BarChart3,
    benefit: "Real-time insights"
  },
  {
    title: "Automated Testing Framework",
    description: "Complete upgrades and innovate faster. Reduce risk and quickly remediate customization issues by automating slow manual testing processes.",
    icon: CheckCircle,
    benefit: "Automated quality assurance"
  },
  {
    title: "Integration Hub",
    description: "Enable developers, IT generalists, and no-code builders to quickly integrate ServiceNow workflows to any modern system with comprehensive connectivity.",
    icon: Plug,
    benefit: "Seamless integration"
  },
  {
    title: "Mobile App Builder",
    description: "Design applications optimized for mobile devices ensuring solutions are accessible anytime, anywhere with consumer-grade mobile experiences.",
    icon: Smartphone,
    benefit: "Mobile-first development"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What is ServiceNow App Engine and how does it help organizations?",
    answer: (
      <div>
        <p className="mb-3">
          ServiceNow App Engine reimagines every process as a digital workflow and transforms application development:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Moves beyond static automation to scale your development teams with intelligent low-code capabilities</li>
          <li>Creates intelligent apps that embed powerful AI agents to reason, plan, and act autonomously</li>
          <li>Enables developers and non-tech professionals to create unique workflows at scale with prebuilt templates</li>
          <li>Provides a unified environment to innovate, create, and deploy apps faster with AI-powered development tools</li>
          <li>Facilitates collaboration between business and IT teams with comprehensive governance and management capabilities</li>
        </ul>
        <p className="mt-3 text-sm text-purple-600">
          <strong>Built on ServiceNow AI Platform</strong> with Now Assist for Creator providing generative AI capabilities and autonomous AI agents for intelligent development.
        </p>
      </div>
    )
  },
  
  {
    question: "What is Now Assist for Creator and how does it enhance development productivity?",
    answer: (
      <div>
        <p className="mb-3">Now Assist for Creator provides comprehensive generative AI capabilities for enhanced development productivity:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Flow Generation:</strong> Accelerates workflow development by transforming plain text into low-code automation using simple prompts</li>
          <li><strong>Intelligent Recommendations:</strong> Provides AI-powered suggestions for conditional logic, relevant actions, and workflow optimization during development</li>
          <li><strong>Code Generation:</strong> Enables direct progression from comment to code with sophisticated autocomplete capabilities and JavaScript assistance</li>
          <li><strong>Generative AI Controller:</strong> Embedded within Flow Designer for summarization, sentiment analysis, and content creation with just a few clicks</li>
          <li><strong>Multi-Context Support:</strong> Available across various development environments including business rules and custom integrations</li>
          <li><strong>ServiceNow Syntax Support:</strong> Eliminates need to master JavaScript or remember ServiceNow-specific syntax for high-quality code generation</li>
          <li><strong>Universal Accessibility:</strong> Benefits both seasoned ServiceNow developers and newcomers starting their first function development</li>
        </ul>
        <p className="mt-3">
          This comprehensive AI assistance radically improves productivity and lowers the barrier of entry for intelligent automation and low-code app development.
        </p>
      </div>
    )
  },

  {
    question: "What are the key features and capabilities of ServiceNow App Engine?",
    answer: (
      <div>
        <p className="mb-3">ServiceNow App Engine provides comprehensive low-code development capabilities:</p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-pink-600 mb-2">Core Development Features:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>ServiceNow Studio:</strong> Unified, intuitive development environment for building, deploying, and managing apps</li>
              <li><strong>Creator Studio:</strong> No-code workflow creation in guided environment with drag-and-drop interface</li>
              <li><strong>App Engine Studio:</strong> Low-code development environment with prebuilt templates for rapid application creation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2">AI-Powered Capabilities:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Now Assist for App Engine:</strong> Data-driven generative AI for smart apps that adapt to real-time needs</li>
              <li><strong>AI Agents:</strong> Autonomous AI agents that reason, plan, and act independently for complex automation</li>
              <li><strong>Flow Designer:</strong> Digital workflow automation across departments with comprehensive process capabilities</li>
              <li><strong>App Engine Management Center:</strong> Business-IT collaboration with governance and low-code app development management</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  {
    question: "How do role-based applications work in ServiceNow App Engine?",
    answer: (
      <div>
        <p className="mb-3">
          ServiceNow App Engine provides role-based applications tailored to different development professionals and their specific responsibilities:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>App Delivery Leader:</strong> App Engine Management Center for governance, App Engine Studio for business growth, and Delegated Development for scalable creation</li>
          <li><strong>Platform Owner:</strong> Flow Designer for business automation, Integration Hub for workflow connectivity, and Management Center for collaborative development</li>
          <li><strong>Developer:</strong> Now Assist for Creator with AI productivity, Process Automation Designer for no-code playbooks, and Studio IDE for comprehensive development</li>
          <li><strong>Business Technologist:</strong> App Engine Studio for visual workflows, Prebuilt Templates for accelerated development, and AI guidance for intelligent recommendations</li>
        </ul>
        <p className="mt-3">
          Each role receives tailored applications, development environments, and AI assistance optimized for their specific development responsibilities and skill levels.
        </p>
      </div>
    )
  },

  {
    question: "What package tiers are available for ServiceNow App Engine?",
    answer: (
      <div>
        <p className="mb-3">ServiceNow App Engine offers two main package tiers to meet different organizational development needs:</p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">App Engine Starter:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>ServiceNow Studio, Mobile App Builder, Guided Application Creator, and Delegated Development</li>
              <li>Form Designer, Service Portal Designer, UI Builder, and Automated Testing Framework</li>
              <li>Essential capabilities for businesses growing and evolving workflows with custom applications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">App Engine Enterprise:</h4>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>All Starter features plus Creator Studio, App Engine Studio, and App Engine Management Center</li>
              <li>Process Mining, Performance Analytics, Virtual Agent, Predictive Intelligence, and Mobile Publishing</li>
              <li>Comprehensive solution for businesses innovating at enterprise scale with advanced development capabilities</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-green-600">
          <strong>Note:</strong> App Engine Management Center is available exclusively through standalone App Engine product purchase with flexible governance options.
        </p>
      </div>
    )
  },

  {
    question: "How much does ServiceNow App Engine implementation cost?",
    answer: (
      <div>
        <p className="mb-3">
          Implementation costs depend on organization size, development complexity, and automation requirements:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>App Engine Starter Implementation:</strong> Starting from $150K - includes basic low-code development, workflow automation, and mobile app building for mid-size organizations</li>
          <li><strong>App Engine Enterprise Implementation:</strong> $250K-$400K - includes Creator Studio, advanced analytics, and comprehensive app development for large enterprises</li>
          <li><strong>App Engine Complete Suite:</strong> $500K+ - comprehensive solution with AI agents, process mining, and enterprise-scale development capabilities</li>
        </ul>
        <p className="mt-3">
          ROI typically achieved within 4-8 months through development acceleration (60%), process automation (45%), and operational efficiency (40%). Low-code development can reduce traditional development time by 70%.
        </p>
      </div>
    ),
    links: [
      { text: "Get Custom Quote", url: "https://meetings.hubspot.com/ifbash" },
      { text: "App Engine ROI Calculator", url: "/app-engine-roi-calculator" }
    ]
  },

  {
    question: "What is the typical implementation timeline for ServiceNow App Engine?",
    answer: (
      <div>
        <p className="mb-3">Implementation timeline depends on development program maturity and automation scope:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>App Engine Starter:</strong> 6-10 weeks for basic low-code development, workflow automation, and mobile app building capabilities</li>
          <li><strong>App Engine Enterprise:</strong> 10-16 weeks including Creator Studio, advanced analytics, process mining, and comprehensive development tools</li>
          <li><strong>App Engine Complete Suite:</strong> 16-22 weeks for complete solution with AI agents, enterprise integrations, and advanced automation capabilities</li>
        </ul>
        <p className="mt-3">
          Our methodology: Development Assessment & Use Case Analysis (1-2 weeks) → Core App Engine Platform & Studio Configuration (3-5 weeks) → Advanced Features & AI Integration (2-4 weeks) → Process Automation & Analytics Setup (2-4 weeks) → Go-Live & Developer Training (2-3 weeks).
        </p>
      </div>
    )
  },

  {
    question: "How does App Engine integrate with existing development tools and enterprise systems?",
    answer: (
      <div>
        <p className="mb-3">App Engine provides extensive integration capabilities for comprehensive development ecosystems:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Development Tools:</strong> Integration with Git, Jenkins, and other CI/CD platforms for comprehensive development lifecycle management</li>
          <li><strong>Enterprise Systems:</strong> Integration Hub enables connection with ERP, CRM, and other business systems for unified workflow automation</li>
          <li><strong>Cloud Platforms:</strong> Native integration with AWS, Azure, and Google Cloud for hybrid and multi-cloud development scenarios</li>
          <li><strong>API Management:</strong> Comprehensive REST and SOAP API support for custom integrations and third-party system connectivity</li>
          <li><strong>Mobile Platforms:</strong> Mobile App Builder with native iOS and Android capabilities for comprehensive mobile development</li>
          <li><strong>Analytics Platforms:</strong> Integration with BI tools and data warehouses for comprehensive analytics and reporting capabilities</li>
          <li><strong>Collaboration Tools:</strong> Integration with Microsoft Teams, Slack, and other platforms for developer collaboration and workflow notifications</li>
        </ul>
        <p className="mt-3 text-green-600">
          <strong>Result:</strong> Organizations achieve unified low-code development while maintaining existing development tool investments and enterprise system connectivity.
        </p>
      </div>
    )
  }
];

// Case Studies (Based on App Engine success stories)
const caseStudies = [
  {
    title: "Desjardins Accelerates Development with 3x Faster ServiceNow App Creation",
    client: "Desjardins Group",
    industry: "Financial Services",
    challenge: "Financial services cooperative requiring accelerated development capabilities with reduced onboarding time and enhanced developer productivity across digital transformation initiatives",
    solution: "ServiceNow App Engine with comprehensive low-code development, Now Assist for Creator, and financial services-specific application development optimization",
    results: [
      { metric: "3x", description: "Faster development" },
      { metric: "10 Days", description: "Developer onboarding" },
      { metric: "Development", description: "Speed accelerated" },
      { metric: "Financial", description: "Services optimized" }
    ],
    testimonial: "ServiceNow development is three times faster than traditional application development...New developers get up to speed in 10 days or less.",
    executive: "Jean-Pierre Thibert, Shared Services Director",
    logo: "/images/clients/desjardins-logo.png"
  },
  {
    title: "Ndlovu Care Group Digitizes Clinical Healthcare with Low-Code Applications",
    client: "Ndlovu Care Group",
    industry: "Healthcare",
    challenge: "Healthcare organization requiring digitization of clinical healthcare processes with improved outcomes in remote communities and transformative patient care",
    solution: "ServiceNow App Engine with healthcare-specific low-code applications, clinical workflow automation, and remote healthcare service delivery optimization",
    results: [
      { metric: "Clinical", description: "Healthcare digitized" },
      { metric: "Remote", description: "Communities served" },
      { metric: "Patient", description: "Outcomes improved" },
      { metric: "Healthcare", description: "Lives transformed" }
    ],
    testimonial: "ServiceNow App Engine enabled us to digitize clinical healthcare processes, improving outcomes in remote communities and transforming lives through technology.",
    executive: "Clinical Operations Director",
    logo: "/images/clients/ndlovu-logo.png"
  },
  {
    title: "Bayer Frees Legal and Compliance Teams from Manual Tasks with App Engine Automation",
    client: "Bayer AG",
    industry: "Life Sciences",
    challenge: "Global life sciences company requiring automation of repetitive manual tasks for legal and compliance teams with enhanced operational efficiency",
    solution: "ServiceNow App Engine with legal compliance automation, workflow optimization, and life sciences-specific process automation for enhanced team productivity",
    results: [
      { metric: "Legal", description: "Tasks automated" },
      { metric: "Compliance", description: "Teams freed" },
      { metric: "Manual", description: "Work eliminated" },
      { metric: "Life Sciences", description: "Operations optimized" }
    ],
    testimonial: "ServiceNow App Engine freed our legal and compliance teams from repetitive manual tasks, enabling them to focus on strategic initiatives and value-added activities.",
    executive: "Head of Digital Operations",
    logo: "/images/clients/bayer-logo.png"
  },
  {
    title: "NTT Data Unlocks Efficiency with Low-Code Apps Closing Cases 65% Faster",
    client: "NTT Data Corporation",
    industry: "Technology Services",
    challenge: "Global technology services requiring enhanced operational efficiency with faster case resolution and improved service delivery through low-code automation",
    solution: "ServiceNow App Engine with comprehensive low-code applications, case management automation, and technology services workflow optimization",
    results: [
      { metric: "65%", description: "Faster case closure" },
      { metric: "Low-Code", description: "Apps deployed" },
      { metric: "Operational", description: "Efficiency unlocked" },
      { metric: "Technology", description: "Services enhanced" }
    ],
    testimonial: "ServiceNow App Engine with low-code applications unlocked operational efficiency, enabling us to close cases 65% faster and enhance our service delivery capabilities.",
    executive: "VP of Digital Transformation",
    logo: "/images/clients/ntt-data-logo.png"
  }
];

return (
  <>
    <Head>
      <title>App Engine - ServiceNow Low-Code Development Portfolio | ifBash</title>
      <meta
        name="description"
        content="Reimagine every process as a digital workflow. With ServiceNow App Engine, you can build and extend workflow apps to work the way you work."
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
        className="relative group min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95"
        aria-label="Discuss App Engine Implementation"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute right-[calc(100%+12px)] px-3 py-2 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap text-sm text-gray-800 min-w-[180px] text-center">
          Discuss App Engine Implementation
        </span>
        <div className="absolute inset-0 rounded-full animate-ping bg-purple-600 opacity-20"></div>
      </button>
    </div>

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-700/20 via-transparent to-transparent animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-700/20 via-transparent to-transparent animate-pulse-slow delay-75" />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float delay-150 opacity-40" />
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-rose-400 rounded-full animate-float delay-300 opacity-80" />
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              {/* ServiceNow Official Badge */}
              <div className="flex items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2 sm:px-0">
                <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  <Award className="w-3 h-3 mr-1" />
                  ServiceNow Certified
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500/90 to-rose-600/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-pink-600 hover:to-rose-700 transition-all duration-300">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Development
                </Badge>
                <Badge className="bg-gradient-to-r from-rose-500/90 to-red-500/90 backdrop-blur-sm text-white border-transparent text-[10px] sm:text-sm whitespace-nowrap py-1 px-2 sm:px-3 hover:from-rose-600 hover:to-red-600 transition-all duration-300">
                  <Trophy className="w-3 h-3 mr-1" />
                  Low-Code Platform
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-3 sm:px-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 font-semibold">
                  App
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-3 sm:mt-4 font-light">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 font-semibold">
                    Engine
                  </span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-2xl leading-relaxed">
                <span className="font-semibold text-pink-300">Reimagine every process as a digital workflow.</span>{' '}
                <span className="font-semibold text-rose-300">Move beyond static automation to scale development teams</span> and create intelligent apps with powerful AI agents.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="group w-full sm:w-auto min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl transition-all duration-300 relative touch-manipulation focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:scale-95 overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700"
                  style={{
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-rose-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    Get App Engine Implementation
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
  <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:scale-110 transition-transform duration-300 text-cyan-400 group-hover:text-cyan-300" />
  Watch Video
</span>
</button>

              </div>

              {/* Low-Code Platform Badge */}
              <div className="bg-gradient-to-r from-purple-500/15 to-pink-500/15 backdrop-blur-sm rounded-xl p-4 border border-purple-300/20">
                <div className="flex items-center gap-3">
                  <Code className="h-8 w-8 text-purple-300" />
                  <div>
                    <div className="text-lg font-bold text-white">AI-Powered Low-Code Development Platform</div>
                    <div className="text-sm text-purple-200">Build intelligent apps with autonomous AI agents</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative lg:h-[600px]">
              <div className="relative z-20 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-300/20 hover:border-gray-300/30 transition-all duration-500">
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
                  <PlaceholderImage
                    title="ServiceNow App Engine Platform"
                    className="w-full h-full object-cover"
                    gradient="from-purple-600 to-pink-600"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">Low-Code</div>
                    <div className="text-xs text-purple-200">Development</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">AI</div>
                    <div className="text-xs text-pink-200">Agents</div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-20 h-20 sm:w-28 sm:h-28 animate-float">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 w-20 h-20 sm:w-28 sm:h-28 animate-float delay-150">
                  <div className="w-full h-full bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Bot className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                Transform Development
              </span>
              <br />
              <span className="text-gray-800">
                with AI-Powered Apps
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Use AI to create better experiences, enhance workflows, and scale development teams with intelligent automation and autonomous agents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                    <div className="text-sm font-semibold text-purple-700 mb-1">Key Value</div>
                    <div className="text-purple-600">{benefit.stats}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
                Key App Engine Features
              </span>
              <br />
              <span className="text-gray-800">
                Complete Development Platform
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive low-code development features from AI-powered assistance to autonomous agents with intelligent workflow automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
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

      {/* Role-Based Applications Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-orange-600">
                Role-Based Applications
              </span>
              <br />
              <span className="text-gray-800">
                Development Professional Focus
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tailored applications for different development roles, from app delivery leadership to business technologists and platform ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {roleBasedApps.map((roleApp, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-rose-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${roleApp.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <roleApp.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {roleApp.role}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {roleApp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {roleApp.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {app}
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

      {/* Package Tiers Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                App Engine Package Tiers
              </span>
              <br />
              <span className="text-gray-800">
                Scalable Development Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose the App Engine package that meets your development needs, from starter low-code capabilities to enterprise-scale AI-powered automation.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {packageTiers.map((tier, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {tier.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Package Features:</h4>
                    <ul className="space-y-2 max-h-64 overflow-y-auto">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
                    <div className="text-sm font-semibold text-red-700 mb-1">Package Type</div>
                    <div className="text-red-600 text-lg font-bold">{tier.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                Advanced Capabilities
              </span>
              <br />
              <span className="text-gray-800">
                Enterprise Development Features
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Advanced development capabilities including process mining, predictive intelligence, and comprehensive mobile app building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200">
                    <div className="text-sm font-semibold text-orange-700 mb-1">Key Benefit</div>
                    <div className="text-orange-600 text-lg font-bold">{capability.benefit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-green-600">
                Frequently Asked Questions
              </span>
              <br />
              <span className="text-gray-800">
                About App Engine
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about App Engine implementation, low-code development, and AI-powered automation.
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
                      <div className="w-full h-px bg-gradient-to-r from-amber-500 to-yellow-500 mb-4" />
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer}
                        {faq.links && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {faq.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                className="inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium transition-colors"
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-700/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-yellow-700/20 via-transparent to-transparent" />
        </div>

        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                ServiceNow Case Studies
              </span>
              <br />
              <span className="text-white">
                Real App Engine Success Stories
              </span>
            </h2>
            <p className="text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              See how organizations transformed their development capabilities with AI-powered App Engine solutions and low-code automation platforms.
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
                            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-200 border border-yellow-400/30 mr-3">
                              {study.industry}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 border border-orange-400/30">
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

                          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-4 border-l-4 border-yellow-400">
                            <Quote className="h-6 w-6 text-yellow-400 mb-2" />
                            <p className="text-gray-100 italic leading-relaxed mb-3">"{study.testimonial}"</p>
                            <p className="text-sm font-semibold text-yellow-300">— {study.executive}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-yellow-300 mb-4">Results Achieved</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                <div className="text-2xl font-bold text-yellow-400 mb-1">{result.metric}</div>
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
                              <span className="text-yellow-200 text-sm">(5.0/5.0)</span>
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
                      ? 'bg-yellow-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative overflow-hidden">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform App Development?
              </h2>
              <p className="text-lg md:text-xl text-yellow-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Connect with our ServiceNow experts to implement comprehensive App Engine with AI-powered low-code development and autonomous agent capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button 
                  onClick={() => window.open('https://meetings.hubspot.com/ifbash', '_blank')}
                  className="px-8 py-4 bg-white text-yellow-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact App Engine Experts
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Download className="mr-2 h-5 w-5 inline" />
                  Read Brief
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Mail className="h-6 w-6 text-yellow-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">app-engine-experts@ifbash.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Phone className="h-6 w-6 text-orange-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">+91-XXXX-XXXXXX</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <Calendar className="h-6 w-6 text-red-200 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Watch Demo</p>
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
