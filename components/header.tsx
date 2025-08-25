"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  Menu,
  Globe,
  ChevronDown,
  Settings,
  Database,
  Users,
  Info,
  BarChart3,
  Shield,
  Workflow,
  Building,
  GraduationCap,
  HeartPulse,
  Wifi,
  MonitorSmartphone,
  Phone,
  Mail,
  MapPin,
  Newspaper,
  Briefcase,
  Cog,
  Server,
  UserCheck,
  Layers,
  Target,
  Zap,
  FileText,
  CloudLightning,
  Car,
  Factory,
  ShoppingBag,
  FlaskConical,
  Bolt,
  Landmark,
  BookOpen,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Enhanced service items with better URLs and descriptions
const serviceItems = [
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Strategic digital transformation consulting and enterprise modernization roadmaps",
    icon: Workflow,
  },
  {
    title: "Implementation Services",
    href: "/services/servicenow-implementation",
    description: "End-to-end ServiceNow implementation, configuration, and deployment",
    icon: Settings,
  },  
  {
    title: "Generative AI & Agentic AI",
    href: "/services/generative-ai-solutions",
    description: "AI-driven automation and intelligent workflow solutions for enhanced business processes",
    icon: GraduationCap,
  },
  {
    title: "CRM Driven Experiences",
    href: "/services/crm-customer-experience",
    description: "Tailored CRM solutions and customer engagement platforms",
    icon: Briefcase,
  },
  {
    title: "Enterprise Consulting",  
    href: "/services/enterprise-consulting",
    description: "Comprehensive consulting solutions, system integration, and enterprise architecture",
    icon: Database,
  },
  {
    title: "Managed Services & Support",
    href: "/services/managed-services-support",
    description: "24/7 managed services, ongoing support, and system optimization",
    icon: Users,
  },
  {
    title: "Process Optimization",
    href: "/services/business-process-optimization",
    description: "Business process analysis, automation, and continuous improvement strategies",
    icon: BarChart3,
  },
  {
    title: "Strategic Advisory",
    href: "/services/advisory",
    description: "Expert advisory services for technology strategy and digital business transformation",
    icon: Shield,
  },
];

// Enhanced portfolio items with better SEO-friendly URLs
const portfolioItems = [
  {
    title: "IT Service Management (ITSM)",
    href: "/portfolio/servicenow-itsm-solutions",
    description: "Comprehensive ITSM: Incident, Problem, Change, and Service Request Management",
    icon: Settings,
  },
  {
    title: "IT Operations Management (ITOM)",
    href: "/portfolio/servicenow-itom-solutions",
    description: "Advanced ITOM: Discovery, Event Management, Infrastructure Monitoring, and Orchestration",
    icon: Server,
  },
  {
    title: "Security Operations (SecOps)",
    href: "/portfolio/servicenow-security-operations",
    description: "Integrated SecOps: Vulnerability Response, Security Incident Response, and GRC",
    icon: Shield,
  },
  {
    title: "HR Service Delivery (HRSD)",
    href: "/portfolio/servicenow-hr-service-delivery",
    description: "Modern HRSD: Employee Service Center, HR Case Management, and Onboarding",
    icon: Users,
  },
  {
    title: "Workflow Data Fabric (WDF)",
    href: "/portfolio/servicenow-workflow-automation",
    description: "Advanced Workflow Data Fabric: Process Automation and Intelligent Orchestration",
    icon: Workflow,
  },
  {
    title: "Workplace Service Delivery",
    href: "/portfolio/servicenow-workplace-services",
    description: "Enhanced Workplace Services: Employee Experience and Digital Workplace Solutions",
    icon: Building,
  },
  {
    title: "Customer Service Management (CSM)",
    href: "/portfolio/servicenow-customer-service",
    description: "Comprehensive CSM: Customer Service Operations and Omnichannel Support",
    icon: HeartPulse,
  },    
  {
    title: "Field Service Management (FSM)",
    href: "/portfolio/servicenow-field-service",
    description: "Complete FSM: Field Service Operations, Scheduling, and Mobile Workforce Management",
    icon: MapPin,
  },
  {
    title: "Strategic Portfolio Management",
    href: "/portfolio/servicenow-portfolio-management",
    description: "Enterprise SPM: Strategic Planning, Portfolio Management, and Investment Tracking",
    icon: Target,
  },
  {
    title: "IT Asset Management (SAM/HAM)",
    href: "/portfolio/servicenow-asset-management",
    description: "Complete ITAM: Asset Lifecycle Management, Software Asset Management, and Hardware Tracking",
    icon: Database,
  },
  {
    title: "Enterprise Asset Management (EAM)",
    href: "/portfolio/servicenow-enterprise-asset-management",
    description: "Advanced EAM: Enterprise Asset Management, Maintenance, and Optimization",
    icon: Cog,
  },
  {
    title: "Sourcing & Procurement Operations",
    href: "/portfolio/servicenow-procurement-solutions",
    description: "Streamlined SPO: Sourcing, Procurement Management, and Vendor Relations",
    icon: Briefcase,
  },
  {
    title: "Service Portal & Employee Experience",
    href: "/portfolio/servicenow-service-portal",
    description: "Modern Service Portal: Self-Service Capabilities and Enhanced User Experience",
    icon: MonitorSmartphone,
  },
  {
    title: "Integration Hub & APIs",
    href: "/portfolio/servicenow-integration-solutions",
    description: "Seamless Integration: Integration Hub, API Management, and System Connectivity",
    icon: Layers,
  },
  {
    title: "Sales & Order Management (SOM)",
    href: "/portfolio/servicenow-sales-order-management",
    description: "Complete SOM: Sales Operations, Order Management, and Revenue Optimization",
    icon: BarChart3,
  },
  {
    title: "App Engine & Custom Development",
    href: "/portfolio/servicenow-custom-development",
    description: "Custom Solutions: Application Development, Platform Automation, and Custom Workflows",
    icon: CloudLightning,
  },
  {
    title: "Integrated Risk Management (IRM)",
    href: "/portfolio/servicenow-risk-management",
    description: "Comprehensive IRM: Policy Management, Compliance, and Risk Assessment",
    icon: FileText,
  },    
  {
    title: "Telecom Service Management (TSM)",
    href: "/portfolio/servicenow-telecom-solutions",
    description: "Specialized TSM: Telecom Service Operations, Network Management, and Service Assurance",
    icon: Wifi,
  },
];

// Enhanced industry items with better SEO
const industryItems = [
  {
    title: "Automotive Industry",
    href: "/industries/automotive-manufacturing",
    description: "Automotive manufacturing, supply chain optimization, and connected vehicle solutions",
    icon: Car,
  },
  {
    title: "Manufacturing & Industrial",
    href: "/industries/manufacturing-solutions",
    description: "Discrete and process manufacturing, Industry 4.0, and smart factory solutions",
    icon: Factory,
  },
  {
    title: "Consumer Goods & Retail",
    href: "/industries/consumer-goods-retail",
    description: "Consumer products, retail operations, and omnichannel customer experience",
    icon: ShoppingBag,
  },
  {
    title: "Technology & Software",
    href: "/industries/technology-software-companies",
    description: "Software companies, SaaS providers, and technology service organizations",
    icon: MonitorSmartphone,
  },
  {
    title: "Public Sector & Government",
    href: "/industries/public-sector-government",
    description: "Government agencies, public services, and citizen experience platforms",
    icon: Landmark,
  },
  {
    title: "Healthcare & Life Sciences",
    href: "/industries/healthcare-providers",
    description: "Healthcare providers, hospitals, and patient experience management",
    icon: HeartPulse,
  },
  {
    title: "Pharmaceuticals & Biotech",
    href: "/industries/life-sciences-pharma",
    description: "Pharmaceutical companies, biotechnology, and regulatory compliance solutions",
    icon: FlaskConical,
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    description: "Retail operations, e-commerce platforms, and digital customer experiences",
    icon: ShoppingBag,
  },
  {
    title: "Telecommunications",
    href: "/industries/telecommunications",
    description: "Telecom service providers, network operations, and digital service delivery",
    icon: Wifi,
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy-utilities",
    description: "Energy production, utilities management, and smart grid solutions",
    icon: Bolt,
  },
];

// Enhanced company information
const companyItems = [
  {
    title: "About ifBash",
    href: "/about-us",
    description: "Learn about our ServiceNow expertise, company mission, and global presence",
    icon: Info,
  },
  {
    title: "Careers & Jobs",
    href: "/careers-servicenow-jobs", 
    description: "Join our team of ServiceNow certified professionals and grow your career",
    icon: GraduationCap,
  },
  {
    title: "Client Success Stories",
    href: "/case-studies-client-success",
    description: "Real-world success stories, client transformations, and business outcomes",
    icon: FileText,
  },
  {
    title: "News & Industry Events",
    href: "/news-events-servicenow",
    description: "Latest ServiceNow updates, industry insights, and company announcements",
    icon: Newspaper,
  },
];

// Enhanced language options with proper language codes
const languages = [
  { code: "en", name: "English", flag: "🇺🇸", locale: "en-US" },
  { code: "es", name: "Español", flag: "🇪🇸", locale: "es-ES" },
  { code: "ar", name: "العربية", flag: "🇸🇦", locale: "ar-SA", dir: "rtl" },
];

// Enhanced ListItem component with better laptop spacing
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, description, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 group",
            "hover:bg-gradient-to-r hover:from-violet-50 hover:via-purple-50/80 hover:to-blue-50",
            "hover:shadow-lg hover:border-violet-100/50 border border-transparent",
            "focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
            "min-h-[52px] flex items-center w-full", // Increased min height and full width
            className
          )}
          {...props}
        >
          <div className="flex items-start space-x-3 w-full">
            {Icon && (
              <div className="p-2.5 rounded-lg bg-violet-50 group-hover:bg-white transition-colors duration-300 flex-shrink-0">
                <Icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600" />
              </div>
            )}
            <div className="flex-1 min-w-0 pr-2"> {/* Added right padding */}
              <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight mb-1">
                {title}
              </div>
              {description && (
                <div className="text-xs text-slate-600 group-hover:text-slate-700 leading-relaxed line-clamp-2">
                  {description}
                </div>
              )}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enhanced scroll detection for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ifBash - Premier ServiceNow Partner & Implementation Specialists",
            "alternateName": "ifBash ServiceNow Consulting",
            "url": "https://ifbash.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ifbash.com/logo.png",
              "width": 500,
              "height": 500
            },
            "description": "Leading ServiceNow implementation partner specializing in ITSM, ITOM, HRSD, digital transformation, AI solutions, and custom ServiceNow development for enterprises worldwide",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "Global"
            },
            "serviceArea": "Global",
            "foundingDate": "2020",
            "numberOfEmployees": "50-200",
            "industry": "Information Technology Services",
            "knowsAbout": [
              "ServiceNow Platform",
              "ITSM Implementation", 
              "ITOM Solutions",
              "HRSD Configuration",
              "Digital Transformation",
              "AI Solutions",
              "Workflow Automation",
              "Enterprise Integration"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "ServiceNow Expert Services & Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ServiceNow ITSM Implementation & Optimization",
                    "description": "Complete IT Service Management setup, configuration, and optimization with industry best practices",
                    "serviceType": "IT Service Management"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ServiceNow ITOM & Infrastructure Monitoring",
                    "description": "IT Operations Management, infrastructure monitoring, discovery, and automated workflows",
                    "serviceType": "IT Operations Management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Transformation & Modernization Consulting",
                    "description": "Strategic digital transformation roadmaps and ServiceNow-powered enterprise modernization",
                    "serviceType": "Digital Transformation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Generative AI & Automation Solutions",
                    "description": "AI-driven automation, intelligent workflows, and generative AI solutions for enhanced business processes",
                    "serviceType": "AI Solutions"
                  }
                }
              ]
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-800-IFBASH",
                "contactType": "customer service",
                "availableLanguage": ["English", "Spanish", "Arabic"],
                "areaServed": "Worldwide"
              },
              {
                "@type": "ContactPoint",
                "email": "contact@ifbash.com",
                "contactType": "customer support",
                "availableLanguage": ["English", "Spanish", "Arabic"]
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/ifbash",
              "https://twitter.com/ifbash",
              "https://www.youtube.com/c/ifbash"
            ]
          })
        }}
      />

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 transition-all duration-300",
          isScrolled ? "shadow-lg bg-white/98" : "bg-white/95"
        )}
        style={{ 
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)", 
          color: "#1a2e61",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Enhanced Logo with Skip Link */}
          <div className="flex items-center">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-violet-600 text-white px-4 py-2 rounded-lg z-50">
              Skip to main content
            </a>
            <Link 
              href="/" 
              className="flex items-center space-x-3 group focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 rounded-lg"
              aria-label="ifBash - Premier ServiceNow Partner - Go to Homepage"
            >
              <div 
                className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-focus:scale-105"
                style={{ 
                  background: "linear-gradient(135deg, #1a2e61 0%, #6c28d9 50%, #26a3d9 100%)",
                  boxShadow: "0 4px 15px rgba(109, 40, 217, 0.3)"
                }}
              >
                <span className="text-white font-bold text-lg" aria-hidden="true">IB</span>
              </div>
              <span 
                className="font-bold text-xl hidden sm:block text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text"
              >
                ifBash
              </span>
            </Link>
          </div>

          {/* ENHANCED: Desktop Navigation with Better Laptop Spacing */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services - Enhanced laptop spacing */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent border-none shadow-none font-semibold text-base px-5 py-2.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-label="Services menu"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[520px] max-w-[90vw] p-6 rounded-xl border-0"
                      style={{
                        background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                        boxShadow: "0 20px 60px rgba(109, 40, 217, 0.1)",
                        border: "1px solid rgba(109, 40, 217, 0.1)"
                      }}
                    >
                      <ul className="grid gap-3 p-2 grid-cols-2">
                        {serviceItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Portfolio - Enhanced laptop spacing */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent border-none shadow-none font-semibold text-base px-5 py-2.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-label="Portfolio menu"
                  >
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[780px] max-w-[95vw] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid gap-3 p-3 grid-cols-3 max-h-[72vh] overflow-y-auto">
                        {portfolioItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries - Enhanced laptop spacing */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent border-none shadow-none font-semibold text-base px-5 py-2.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-label="Industries menu"
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[520px] max-w-[90vw] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid gap-3 p-2 grid-cols-2">
                        {industryItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company - Enhanced laptop spacing */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent border-none shadow-none font-semibold text-base px-5 py-2.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-label="Company menu"
                  >
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[440px] max-w-[85vw] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid gap-3 p-2 grid-cols-2">
                        {companyItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Learning Center Button */}
            <Link
              href="/learning-center-servicenow"
              className="hidden md:inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mr-2 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
              style={{ 
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)"
              }}
              aria-label="Visit Learning Center for ServiceNow training and resources"
            >
              <BookOpen className="h-4 w-4 mr-2" aria-hidden="true" />
              Learning Center
            </Link>

            {/* Enhanced Contact CTA */}
            <Link
              href="/contact-servicenow-experts"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
              style={{ 
                background: "linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%)",
                boxShadow: "0 8px 25px rgba(109, 40, 217, 0.3)"
              }}
              aria-label="Contact ifBash ServiceNow experts to get started"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              Get Started
            </Link>

            {/* Enhanced Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base font-semibold hover:bg-blue-50/30 rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-label={`Current language: ${languages.find(lang => lang.code === currentLanguage)?.name}. Click to change language`}
                >
                  <Globe 
                    className="h-5 w-5 mr-1" 
                    style={{ color: "#6c28d9" }}
                    aria-hidden="true"
                  />
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}
                  </span>
                  <ChevronDown 
                    className="h-4 w-4 ml-1" 
                    style={{ color: "#6c28d9" }}
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-44 mt-2 z-50 rounded-xl shadow-xl border-0"
                style={{
                  background: "white",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
              >
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-violet-600"
                    role="button"
                    aria-label={`Switch to ${language.name}`}
                  >
                    <span className="text-lg" aria-hidden="true">{language.flag}</span>
                    <span 
                      className="font-medium text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700"
                      style={{
                        background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {language.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Enhanced Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className="rounded-xl hover:bg-blue-50 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 min-h-[44px] min-w-[44px]"
                  >
                    <Menu className="h-6 w-6 text-violet-600" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[320px] sm:w-[400px] overflow-y-auto max-h-screen p-0"
                  style={{
                    background: "white"
                  }}
                  aria-label="Mobile navigation menu"
                >
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="h-8 w-8 rounded-lg flex items-center justify-center"
                        style={{ 
                          background: "linear-gradient(135deg, #1a2e61 0%, #6c28d9 50%, #26a3d9 100%)",
                        }}
                      >
                        <span className="text-white font-bold text-sm" aria-hidden="true">IB</span>
                      </div>
                      <span className="font-bold text-lg text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
                        ifBash
                      </span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Close menu">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <nav className="flex flex-col space-y-2 p-6" role="navigation" aria-label="Mobile navigation"> 
                    <Accordion type="multiple" className="w-full">
                      {/* Services Mobile */}
                      <AccordionItem value="services" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline flex justify-between items-center py-4">
                          <span>Services</span>
                          <ChevronDown className="h-4 w-4 text-violet-600 transition-transform duration-200" aria-hidden="true" />
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-2 max-h-[40vh] overflow-y-auto">
                            {serviceItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 text-sm p-4 rounded-xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm min-h-[44px] focus-visible:outline-2 focus-visible:outline-violet-600"
                              >
                                <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</div>
                                  <div className="text-xs text-slate-500 group-hover:text-slate-600 mt-1 line-clamp-2">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Portfolio Mobile */}
                      <AccordionItem value="portfolio" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline flex justify-between items-center py-4">
                          <span>Portfolio</span>
                          <ChevronDown className="h-4 w-4 text-violet-600 transition-transform duration-200" aria-hidden="true" />
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-2 max-h-[40vh] overflow-y-auto">
                            {portfolioItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 text-sm p-4 rounded-xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm min-h-[44px] focus-visible:outline-2 focus-visible:outline-violet-600"
                              >
                                <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-300" aria-hidden="true" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</div>
                                  <div className="text-xs text-slate-500 group-hover:text-slate-600 mt-1 line-clamp-2">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Industries Mobile */}
                      <AccordionItem value="industries" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline flex justify-between items-center py-4">
                          <span>Industries</span>
                          <ChevronDown className="h-4 w-4 text-violet-600 transition-transform duration-200" aria-hidden="true" />
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-2">
                            {industryItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 text-sm p-4 rounded-xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm min-h-[44px] focus-visible:outline-2 focus-visible:outline-violet-600"
                              >
                                <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</div>
                                  <div className="text-xs text-slate-500 group-hover:text-slate-600 mt-1 line-clamp-2">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Company Mobile */}
                      <AccordionItem value="company" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline flex justify-between items-center py-4">
                          <span>Company</span>
                          <ChevronDown className="h-4 w-4 text-violet-600 transition-transform duration-200" aria-hidden="true" />
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-2">
                            {companyItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 text-sm p-4 rounded-xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm min-h-[44px] focus-visible:outline-2 focus-visible:outline-violet-600"
                              >
                                <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0" aria-hidden="true" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</div>
                                  <div className="text-xs text-slate-500 group-hover:text-slate-600 mt-1 line-clamp-2">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Mobile Action Buttons */}
                    <div className="mt-6 space-y-4 pt-6 border-t border-slate-100">
                      <Link
                        href="/learning-center-servicenow"
                        onClick={closeMobileMenu}
                        className="w-full inline-flex items-center justify-center px-4 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                        style={{ 
                          background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                          boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)"
                        }}
                      >
                        <BookOpen className="h-5 w-5 mr-2" aria-hidden="true" />
                        Learning Center
                      </Link>

                      <Link
                        href="/contact-servicenow-experts"
                        onClick={closeMobileMenu}
                        className="w-full inline-flex items-center justify-center px-4 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2"
                        style={{ 
                          background: "linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%)",
                          boxShadow: "0 8px 25px rgba(109, 40, 217, 0.3)"
                        }}
                      >
                        <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                        Get Started Today
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced CSS with improved laptop dropdown spacing */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        .moondust-gradient {
          background: linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%);
        }
        
        .moondust-text-gradient {
          background: linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .moondust-glow {
          box-shadow: 0 4px 15px rgba(109, 40, 217, 0.3);
        }
        
        /* Enhanced dropdown animations */
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        [data-radix-popper-content-wrapper] {
          animation: slideInDown 0.2s ease-out;
        }
        
        /* Enhanced focus states for accessibility */
        .focus-visible\\:outline-2:focus-visible {
          outline: 2px solid #6c28d9;
          outline-offset: 2px;
        }

        /* Text truncation for mobile and laptop */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced scrollbar for dropdown menus */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(109, 40, 217, 0.3);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(109, 40, 217, 0.5);
        }

        /* Enhanced hover states */
        .submenu-hover-gradient {
          background-image: linear-gradient(
            to right,
            rgba(237, 233, 254, 0.5),
            rgba(236, 233, 253, 0.5),
            rgba(239, 246, 255, 0.5)
          );
        }

        /* Improved contrast for accessibility */
        @media (prefers-contrast: high) {
          .text-slate-600 {
            color: #1f2937;
          }
          .text-slate-500 {
            color: #374151;
          }
        }

        /* Laptop-specific optimizations with better spacing */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .container {
            max-width: 96%;
          }
          
          /* Better laptop dropdown positioning */
          [data-radix-popper-content-wrapper] {
            transform: translateX(-5%) !important;
          }
        }

        /* Extra wide laptop screens */
        @media (min-width: 1367px) and (max-width: 1600px) {
          .container {
            max-width: 92%;
          }
        }

        /* Print styles */
        @media print {
          header {
            display: none;
          }
        }

        /* Ensure proper dropdown alignment on all laptop sizes */
        @media (min-width: 1024px) {
          [data-radix-navigation-menu-content] {
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        }
      `}</style>
    </>
  );
}
