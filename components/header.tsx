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
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import {
  Menu,
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
  Server,
  Layers,
  Target,
  FileText,
  CloudLightning,
  Car,
  Factory,
  ShoppingBag,
  FlaskConical,
  Bolt,
  Landmark,
  X,
  ArrowRight,
  Cloud,
  Wrench,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

// Enhanced service items with better URLs and descriptions
const serviceItems = [
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Strategic digital transformation consulting and enterprise modernization roadmaps",
    icon: Workflow,
  },
  {
    title: "Consulting & Implementation Services",
    href: "/services/servicenow-implementation",
    description: "End-to-end ServiceNow implementation, configuration, and deployment",
    icon: Settings,
  },  
  {
    title: "Generative AI & Agentic AI",
    href: "/services/ai-automation",
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
    title: "Managed Services & Support",
    href: "/services/managed-services-support",
    description: "24/7 managed services, ongoing support, and system optimization",
    icon: Users,
  },
  {
    title: "ServiceNow Custom Apps",
    href: "/services/custom-apps",
    description: "Business process analysis, automation, and continuous improvement strategies",
    icon: BarChart3,
  },
];

// Updated portfolio items based on official ServiceNow products by category
const portfolioItems = [
  {
    category: "IT and Digital Operations",
    items: [
      { title: "Enterprise Architecture", icon: Building },
      { title: "Service Operations Workspace", icon: MonitorSmartphone },
      { title: "Cloud Governance Suite", icon: Cloud },
      { title: "Operational Technology Management", icon: Wrench },
      { title: "IT Asset Management", icon: Database },
      { title: "IT Operations Management", icon: Server },
      { title: "IT Service Management", icon: Settings },
      { title: "ServiceNow Cloud Observability", icon: CloudLightning },
      { title: "Strategic Portfolio Management", icon: Target },
      { title: "Digital End-User Experience", icon: MonitorSmartphone },
    ],
  },
  {
    category: "CRM",
    items: [
      { title: "Customer Service Management", icon: HeartPulse },
      { title: "Field Service Management", icon: MapPin },
      { title: "Sales and Order Management", icon: BarChart3 },
      { title: "Configure, Price, Quote", icon: Briefcase },
      { title: "Financial Services Operations", icon: Briefcase },
      { title: "Healthcare and Life Sciences Service Management", icon: HeartPulse },
      { title: "Sales and Order Management for Technology Providers", icon: MonitorSmartphone },
      { title: "Sales and Order Management for Telecommunications", icon: Wifi },
      { title: "Public Sector Digital Services", icon: Landmark },
      { title: "Telecommunications Service Management", icon: Wifi },
      { title: "Technology Provider Service Management", icon: MonitorSmartphone },
    ],
  },
  {
    category: "Risk and Security", 
    items: [
      { title: "Security Operations", icon: Shield },
      { title: "Security Incident Response", icon: Shield },
      { title: "Vulnerability Response", icon: Shield },
      { title: "Threat Intelligence Security Center", icon: Shield },
      { title: "Integrated Risk Management", icon: FileText },
      { title: "Third-Party Risk Management", icon: Briefcase },
      { title: "Security Posture Control", icon: Shield },
      { title: "Privacy Management", icon: FileText },
    ],
  },
  {
    category: "Human Resources",
    items: [
      { title: "HR Service Delivery", icon: Users },
      { title: "Talent Development", icon: GraduationCap },
      { title: "Legal Service Delivery", icon: FileText },
      { title: "Workplace Service Delivery", icon: Building },
    ],
  },
  {
    category: "App Development",
    items: [
      { title: "App Engine", icon: CloudLightning },
      { title: "Integration Hub", icon: Layers },
    ],
  },
  {
    category: "Finance and Supply Chain",
    items: [
      { title: "Accounts Payable Operations", icon: BarChart3 },
      { title: "Sourcing and Procurement Operations", icon: Briefcase },
      { title: "Supplier Lifecycle Operations", icon: Layers },
    ],
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
    href: "/company/about-us",
    description: "Learn about our ServiceNow expertise, company mission, and global presence",
    icon: Info,
  },
  {
    title: "Careers & Jobs",
    href: "/company/careers-servicenow-jobs", 
    description: "Join our team of ServiceNow certified professionals and grow your career",
    icon: GraduationCap,
  },
  {
    title: "Client Success Stories",
    href: "/company/case-studies-client-success",
    description: "Real-world success stories, client transformations, and business outcomes",
    icon: FileText,
  },
  {
    title: "News & Industry Events",
    href: "/company/news-events-servicenow",
    description: "Latest ServiceNow updates, industry insights, and company announcements",
    icon: Newspaper,
  },
];

// Enhanced Mobile Portfolio Menu Component
const MobilePortfolioMenu = ({ closeMobileMenu }: { closeMobileMenu: () => void }) => {
  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);

  return (
    <div className="pl-2 space-y-3">
      {portfolioItems.map((category, categoryIndex) => (
        <div key={category.category} className="space-y-2">
          <button
            onClick={() => setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-violet-50/80 to-blue-50/80 hover:from-violet-100/90 hover:to-blue-100/90 transition-all duration-300 border border-violet-200/50 hover:border-violet-300/70 min-h-[56px]"
          >
            <span className="text-sm font-bold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
              {category.category}
            </span>
            <ChevronDown 
              className={cn(
                "h-4 w-4 text-violet-600 transition-transform duration-200",
                activeCategory === categoryIndex && "rotate-180"
              )}
            />
          </button>
          
          {activeCategory === categoryIndex && (
            <div className="space-y-2 pl-3">
              {category.items.map((item) => (
                <Link
                  key={item.title}
                  href={`/portfolio/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 text-sm p-3 rounded-xl transition-all duration-300 group transform border border-transparent hover:border-violet-200/60 hover:bg-gradient-to-br hover:from-violet-50/80 hover:via-purple-50/60 hover:to-blue-50/80 hover:shadow-md hover:shadow-violet-200/30 hover:scale-[1.01] min-h-[52px] focus-visible:outline-2 focus-visible:outline-violet-600"
                >
                  <div className="p-2.5 rounded-lg bg-violet-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 flex-shrink-0 border border-transparent group-hover:border-violet-100">
                    <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <span className="text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 font-medium flex-1">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Enhanced ListItem component with portfolio-style hover effects
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
            "block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 group transform",
            "border-2 border-transparent hover:border-violet-200/70",
            "hover:bg-gradient-to-br hover:from-violet-50/95 hover:via-purple-50/80 hover:to-blue-50/95",
            "hover:shadow-xl hover:shadow-violet-200/40 hover:scale-[1.02]",
            "focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
            "min-h-[80px] flex items-center w-full bg-white/80",
            className
          )}
          style={{
            backdropFilter: "blur(12px)",
            boxShadow: "0 2px 10px rgba(109, 40, 217, 0.05)"
          }}
          {...props}
        >
          <div className="flex items-start space-x-3 w-full min-w-0">
            {Icon && (
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50/90 to-blue-50/90 group-hover:from-white group-hover:to-violet-50 group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-violet-100/60 group-hover:border-violet-200/90">
                <Icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
            )}
            <div className="flex-1 min-w-0 pt-1">
              <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight">
                {title}
              </div>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePortfolioCategory, setActivePortfolioCategory] = useState(0);

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
      {/* Enhanced SEO Schema Markup - Updated social media links */}
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
                "areaServed": "Worldwide"
              },
              {
                "@type": "ContactPoint",
                "email": "contact@ifbash.com",
                "contactType": "customer support"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/ifbash",
              "https://x.com/ifbashx",
              "https://www.youtube.com/@c-ifbash"
            ]
          })
        }}
      />

      {/* Enhanced Header with reduced height (10% smaller) */}
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[54px]">
            {/* Logo Section - Reduced dimensions */}
            <div className="flex items-center flex-shrink-0">
              <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-violet-600 text-white px-4 py-2 rounded-lg z-50">
                Skip to main content
              </a>
              <Link 
                href="/" 
                className="flex items-center group focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 rounded-lg"
                aria-label="ifBash - Premier ServiceNow Partner - Go to Homepage"
              >
                {/* Logo with reduced dimensions */}
                <div className="w-[250px] h-[51px] relative flex items-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="ifBash Logo" 
                    width={250} 
                    height={60}
                    className="object-contain"
                    priority
                    style={{ 
                      width: '250px', 
                      height: '51px',
                      maxWidth: '100%',
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center flex-1 justify-center" role="navigation" aria-label="Main navigation">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-1">
                  {/* Services - Updated with portfolio-style mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent border-none shadow-none font-semibold text-base px-4 py-1.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600 h-[32px]"
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
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div 
                          className="w-full rounded-xl shadow-2xl border-0 p-1"
                          style={{
                            background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                            boxShadow: "0 20px 60px rgba(109, 40, 217, 0.1)",
                            border: "1px solid rgba(109, 40, 217, 0.1)"
                          }}
                        >
                          {/* Services Items */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {serviceItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 transform border-2 border-transparent hover:border-violet-200/70 hover:bg-gradient-to-br hover:from-violet-50/95 hover:via-purple-50/80 hover:to-blue-50/95 hover:shadow-xl hover:shadow-violet-200/40 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 min-h-[80px] bg-white/80"
                                  style={{
                                    backdropFilter: "blur(12px)",
                                    boxShadow: "0 2px 10px rgba(109, 40, 217, 0.05)"
                                  }}
                                >
                                  <div className="flex items-start space-x-3 w-full min-w-0">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50/90 to-blue-50/90 group-hover:from-white group-hover:to-violet-50 group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-violet-100/60 group-hover:border-violet-200/90">
                                      <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                      <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight">
                                        {item.title}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Portfolio - Fixed with proper containment */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent border-none shadow-none font-semibold text-base px-4 py-1.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600 h-[32px]"
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
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div 
                          className="w-full rounded-xl shadow-2xl border-0 p-1"
                          style={{
                            background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                            boxShadow: "0 20px 60px rgba(109, 40, 217, 0.1)",
                            border: "1px solid rgba(109, 40, 217, 0.1)"
                          }}
                        >
                          {/* Side-by-side Layout */}
                          <div className="flex">
                            {/* Left Side - Categories */}
                            <div className="w-64 border-r border-violet-100/60 p-4 space-y-2">
                              {portfolioItems.map((category, index) => (
                                <button
                                  key={category.category}
                                  onMouseEnter={() => setActivePortfolioCategory(index)}
                                  className={cn(
                                    "w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-50/60 hover:to-blue-50/60",
                                    activePortfolioCategory === index
                                      ? "bg-gradient-to-r from-violet-50/80 to-blue-50/80 shadow-sm"
                                      : "hover:shadow-sm"
                                  )}
                                >
                                  <span 
                                    className={cn(
                                      "text-transparent bg-gradient-to-r bg-clip-text font-semibold transition-all duration-300",
                                      activePortfolioCategory === index 
                                        ? "from-violet-700 via-blue-600 to-cyan-600" 
                                        : "from-gray-600 via-gray-700 to-gray-600 hover:from-violet-600 hover:via-blue-600 hover:to-cyan-600"
                                    )}
                                  >
                                    {category.category}
                                  </span>
                                </button>
                              ))}
                            </div>

                            {/* Right Side - Items */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {portfolioItems[activePortfolioCategory]?.items.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={`/portfolio/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                    className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 transform border-2 border-transparent hover:border-violet-200/70 hover:bg-gradient-to-br hover:from-violet-50/95 hover:via-purple-50/80 hover:to-blue-50/95 hover:shadow-xl hover:shadow-violet-200/40 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 min-h-[80px] bg-white/80"
                                    style={{
                                      backdropFilter: "blur(12px)",
                                      boxShadow: "0 2px 10px rgba(109, 40, 217, 0.05)"
                                    }}
                                  >
                                    <div className="flex items-start space-x-3 w-full min-w-0">
                                      <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50/90 to-blue-50/90 group-hover:from-white group-hover:to-violet-50 group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-violet-100/60 group-hover:border-violet-200/90">
                                        <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                      </div>
                                      <div className="flex-1 min-w-0 pt-1">
                                        <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight">
                                          {item.title}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries - Updated with portfolio-style mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent border-none shadow-none font-semibold text-base px-4 py-1.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600 h-[32px]"
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
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div 
                          className="w-full rounded-xl shadow-2xl border-0 p-1"
                          style={{
                            background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                            boxShadow: "0 20px 60px rgba(109, 40, 217, 0.1)",
                            border: "1px solid rgba(109, 40, 217, 0.1)"
                          }}
                        >
                          {/* Industries Items */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {industryItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 transform border-2 border-transparent hover:border-violet-200/70 hover:bg-gradient-to-br hover:from-violet-50/95 hover:via-purple-50/80 hover:to-blue-50/95 hover:shadow-xl hover:shadow-violet-200/40 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 min-h-[80px] bg-white/80"
                                  style={{
                                    backdropFilter: "blur(12px)",
                                    boxShadow: "0 2px 10px rgba(109, 40, 217, 0.05)"
                                  }}
                                >
                                  <div className="flex items-start space-x-3 w-full min-w-0">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50/90 to-blue-50/90 group-hover:from-white group-hover:to-violet-50 group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-violet-100/60 group-hover:border-violet-200/90">
                                      <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                      <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight">
                                        {item.title}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Company - Updated with portfolio-style mega menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent border-none shadow-none font-semibold text-base px-4 py-1.5 transition-colors moondust-text-gradient focus-visible:outline-2 focus-visible:outline-violet-600 h-[32px]"
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
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div 
                          className="w-full rounded-xl shadow-2xl border-0 p-1"
                          style={{
                            background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                            boxShadow: "0 20px 60px rgba(109, 40, 217, 0.1)",
                            border: "1px solid rgba(109, 40, 217, 0.1)"
                          }}
                        >
                          {/* Company Items */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {companyItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="group block select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 transform border-2 border-transparent hover:border-violet-200/70 hover:bg-gradient-to-br hover:from-violet-50/95 hover:via-purple-50/80 hover:to-blue-50/95 hover:shadow-xl hover:shadow-violet-200/40 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 min-h-[80px] bg-white/80"
                                  style={{
                                    backdropFilter: "blur(12px)",
                                    boxShadow: "0 2px 10px rgba(109, 40, 217, 0.05)"
                                  }}
                                >
                                  <div className="flex items-start space-x-3 w-full min-w-0">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-50/90 to-blue-50/90 group-hover:from-white group-hover:to-violet-50 group-hover:shadow-lg transition-all duration-300 flex-shrink-0 border border-violet-100/60 group-hover:border-violet-200/90">
                                      <item.icon className="h-5 w-5 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-1">
                                      <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 leading-tight">
                                        {item.title}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right Side Actions - Reduced dimensions */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Contact CTA Button - Reduced size */}
              <Link
                href="/get-started"
                className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2 h-[32px]"
                style={{ 
                  background: "linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%)",
                  boxShadow: "0 8px 25px rgba(109, 40, 217, 0.3)"
                }}
                aria-label="Contact ifBash ServiceNow experts to get started"
              >
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                <span className="whitespace-nowrap hidden lg:inline">Get Started</span>
                <span className="whitespace-nowrap lg:hidden">Contact</span>
              </Link>

              {/* Mobile Menu Button - Reduced size */}
              <div className="lg:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      aria-label="Open navigation menu"
                      aria-expanded={isMobileMenuOpen}
                      className="rounded-xl hover:bg-blue-50 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 h-[34px] w-[34px]"
                    >
                      <Menu className="h-6 w-6 text-violet-600" aria-hidden="true" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent 
                    side="right" 
                    className="w-[320px] sm:w-[380px] overflow-y-auto max-h-screen p-0"
                    style={{
                      background: "white"
                    }}
                    aria-label="Mobile navigation menu"
                  >
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100">
                        <div className="w-[250px] h-[51px] relative flex items-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="ifBash Logo" 
                    width={250} 
                    height={60}
                    className="object-contain"
                    priority
                    style={{ 
                      width: '250px', 
                      height: '51px',
                      maxWidth: '100%',
                    }}
                  />
                </div>
                     {/* <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Close menu">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>*/}
                    </div>

                    {/* Mobile Navigation */}
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
                                  className="flex items-center space-x-3 text-sm p-3 rounded-xl transition-all duration-300 group transform border border-transparent hover:border-violet-200/60 hover:bg-gradient-to-br hover:from-violet-50/80 hover:via-purple-50/60 hover:to-blue-50/80 hover:shadow-md hover:shadow-violet-200/30 hover:scale-[1.01] min-h-[52px] focus-visible:outline-2 focus-visible:outline-violet-600"
                                >
                                  <div className="p-2.5 rounded-lg bg-violet-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 flex-shrink-0 border border-transparent group-hover:border-violet-100">
                                    <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 font-medium">{item.title}</div>
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
                            <MobilePortfolioMenu closeMobileMenu={closeMobileMenu} />
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
                                  className="flex items-center space-x-3 text-sm p-3 rounded-xl transition-all duration-300 group transform border border-transparent hover:border-violet-200/60 hover:bg-gradient-to-br hover:from-violet-50/80 hover:via-purple-50/60 hover:to-blue-50/80 hover:shadow-md hover:shadow-violet-200/30 hover:scale-[1.01] min-h-[52px] focus-visible:outline-2 focus-visible:outline-violet-600"
                                >
                                  <div className="p-2.5 rounded-lg bg-violet-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 flex-shrink-0 border border-transparent group-hover:border-violet-100">
                                    <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 font-medium">{item.title}</div>
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
                                  className="flex items-center space-x-3 text-sm p-3 rounded-xl transition-all duration-300 group transform border border-transparent hover:border-violet-200/60 hover:bg-gradient-to-br hover:from-violet-50/80 hover:via-purple-50/60 hover:to-blue-50/80 hover:shadow-md hover:shadow-violet-200/30 hover:scale-[1.01] min-h-[52px] focus-visible:outline-2 focus-visible:outline-violet-600"
                                >
                                  <div className="p-2.5 rounded-lg bg-violet-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 flex-shrink-0 border border-transparent group-hover:border-violet-100">
                                    <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700 font-medium">{item.title}</div>
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
                          href="/get-started"
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
        </div>
      </header>

      {/* Enhanced CSS with improved dropdown positioning */}
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
        
        /* Hide scrollbar utility */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Prevent layout shift by reserving space for loading states */
        .layout-stable {
          min-height: 46px;
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

        /* Mobile responsive optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1023px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /* Laptop optimizations */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .max-w-7xl {
            max-width: 96%;
          }
        }

        /* Large laptop and desktop optimizations */
        @media (min-width: 1367px) {
          .max-w-7xl {
            max-width: 80rem;
          }
        }

        /* Print styles */
        @media print {
          header {
            display: none;
          }
        }

        /* Fixed positioning for all mega menus - prevents overflow */
        [data-radix-navigation-menu-content] {
          position: static !important;
          transform: none !important;
          left: auto !important;
          right: auto !important;
          width: auto !important;
        }
        
        /* Prevent body horizontal scroll */
        html, body {
          overflow-x: hidden;
        }
        
        /* Ensure proper z-index layering */
        header {
          position: relative;
          z-index: 40;
        }
        
        /* Navigation dropdown z-index */
        [data-radix-navigation-menu-content] {
          z-index: 50 !important;
        }
      `}</style>
    </>
  );
}