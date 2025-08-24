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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Services (keeping your original structure)
const serviceItems = [
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Strategic digital transformation consulting and roadmaps",
    icon: Workflow,
  },
  {
    title: "Implementation",
    href: "/services/implementation",
    description: "End-to-end implementation and configuration",
    icon: Settings,
  },  
  {
    title: "Gen AI and Agentic AI",
    href: "/services/gen-ai",
    description: "AI-driven solutions for enhanced business processes",
    icon: GraduationCap,
  },
  {
    title: "CRM Driven Experiences",
    href: "/services/crm",
    description: "Tailored CRM solutions for enhanced customer engagement",
    icon: Briefcase,
  },
  {
    title: "Consulting",  
    href: "/services/consulting",
    description: "Comprehensive consulting solutions and enterprise integration",
    icon: Database,
  },
  {
    title: "Managed Services",
    href: "/services/managed-services",
    description: "Ongoing support and managed services for your systems",
    icon: Users,
  },
  {
    title: "Process Optimization",
    href: "/services/process-optimization",
    description: "Business process analysis and optimization strategies",
    icon: BarChart3,
  },
  {
    title: "Advisory",
    href: "/services/advisory",
    description: "Expert advisory services for technology and business alignment",
    icon: Shield,
  },
];

// Complete ServiceNow Portfolio (from your original)
const portfolioItems = [
  {
    title: "IT Service Management (ITSM)",
    href: "/portfolio/servicenow/itsm",
    description: "Incident, Problem, Change, and Service Request Management",
    icon: Settings,
  },
  {
    title: "IT Operations Management (ITOM)",
    href: "/portfolio/servicenow/itom",
    description: "Discovery, Event Management, and Orchestration",
    icon: Server,
  },
  {
    title: "Security Operations (SecOps)",
    href: "/portfolio/servicenow/secops",
    description: "Vulnerability Response and Security Incident Response",
    icon: Shield,
  },
  {
    title: "HR Service Delivery (HRSD)",
    href: "/portfolio/servicenow/hrsd",
    description: "Employee Service Center and HR Case Management",
    icon: Users,
  },
  {
    title: "Workflow Data Fabric (WDF)",
    href: "/portfolio/servicenow/wdf",
    description: "Workflow Automation and Orchestration",
    icon: Workflow,
  },
  {
    title: "Workplace Service Delivery (WSD)",
    href: "/portfolio/servicenow/workplace",
    description: "Workplace Services and Employee Experience",
    icon: Building,
  },
  {
    title: "Customer Service Management (CSM)",
    href: "/portfolio/servicenow/csm",
    description: "Customer Service Operations and Field Service Management",
    icon: HeartPulse,
  },    
  {
    title: "Field Service Management (FSM)",
    href: "/portfolio/servicenow/fsm",
    description: "Field Service Operations and Scheduling",
    icon: MapPin,
  },
  {
    title: "Strategic Portfolio Management (SPM)",
    href: "/portfolio/servicenow/spm",
    description: "Strategic Planning and Portfolio Management",
    icon: Target,
  },
  {
    title: "IT Asset Management (SAM / HAM)",
    href: "/portfolio/servicenow/itam",
    description: "Asset Lifecycle Management and Software Asset Management",
    icon: Database,
  },
  {
    title: "Enterprise Asset Management (EAM)",
    href: "/portfolio/servicenow/eam",
    description: "Enterprise Asset Management and Optimization",
    icon: Cog,
  },
  {
    title: "Sourcing and Procurement Operations (SPO)",
    href: "/portfolio/servicenow/sourcing",
    description: "Sourcing and Procurement Management",
    icon: Briefcase,
  },
  {
    title: "Service Portal",
    href: "/portfolio/servicenow/service-portal",
    description: "Service Portal for User Self-Service",
    icon: MonitorSmartphone,
  },
  {
    title: "Integration Hub",
    href: "/portfolio/servicenow/integration",
    description: "Integration Solutions for ServiceNow",
    icon: Layers,
  },
  {
    title: "Sales and Order Management (SOM)",
    href: "/portfolio/servicenow/som",
    description: "Sales and Order Management Solutions",
    icon: BarChart3,
  },
  {
    title: "App Engine & Development (AED)",
    href: "/portfolio/servicenow/app-engine",
    description: "Custom Application Development and Platform Automation",
    icon: CloudLightning,
  },
  {
    title: "Integrated Risk Management (IRM)",
    href: "/portfolio/servicenow/irm",
    description: "Policy and Compliance Management",
    icon: FileText,
  },    
  {
    title: "Telecommunication Service Management (TSM)",
    href: "/portfolio/servicenow/tsm",
    description: "Telecom Service Operations and Management",
    icon: Wifi,
  },
];

// Your original industries (restored)
const industryItems = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    description: "Automotive manufacturing and supply chain solutions",
    icon: Car,
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Discrete and process manufacturing solutions",
    icon: Factory,
  },
  {
    title: "Consumer Goods",
    href: "/industries/consumer-goods",
    description: "Consumer products and retail solutions",
    icon: ShoppingBag,
  },
  {
    title: "Technology Providers",
    href: "/industries/technology-provider",
    description: "Software and technology companies",
    icon: MonitorSmartphone,
  },
  {
    title: "Public Sector",
    href: "/industries/public-sector",
    description: "Government and public service organizations",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Healthcare providers and life sciences solutions",
    icon: HeartPulse,
  },
  {
    title: "Life Sciences",
    href: "/industries/life-sciences",
    description: "Pharmaceuticals and biotechnology solutions",
    icon: FlaskConical,
  },
  {
    title: "Retail",
    href: "/industries/retail",
    description: "Retail operations and consumer goods",
    icon: ShoppingBag,
  },
  {
    title: "Telecom",
    href: "/industries/telecom",
    description: "Telecom service providers and network solutions",
    icon: Wifi,
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy-utilities",
    description: "Energy production and utility management solutions",
    icon: Bolt,
  },
];

// Company information
const companyItems = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our ServiceNow expertise and company values",
    icon: Info,
  },
  {
    title: "Careers",
    href: "/careers", 
    description: "Join our team of ServiceNow certified professionals",
    icon: GraduationCap,
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Success stories and client transformations",
    icon: FileText,
  },
  {
    title: "News & Events",
    href: "/news",
    description: "Latest ServiceNow updates and company news",
    icon: Newspaper,
  },
];

// Simplified language options
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

// Update the ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 group",
            "hover:bg-gradient-to-r hover:from-violet-50 hover:via-purple-50/80 hover:to-blue-50",
            "hover:shadow-md hover:border-violet-100/50 border border-transparent",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-3">
            {Icon && (
              <div className="p-2 rounded-md bg-violet-50 group-hover:bg-white transition-colors duration-300">
                <Icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600" />
              </div>
            )}
            <div className="text-sm font-medium text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700">
              {title}
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

  return (
    <>
      {/* Enhanced SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ifBash - Premier ServiceNow Partner",
            "url": "https://ifbash.com",
            "logo": "https://ifbash.com/logo.png",
            "description": "Leading ServiceNow implementation partner specializing in ITSM, ITOM, HRSD, digital transformation, and custom ServiceNow solutions for enterprises worldwide",
            "serviceArea": "Global",
            "foundingDate": "2020",
            "knowsAbout": ["ServiceNow", "ITSM", "ITOM", "HRSD", "Digital Transformation", "AI Solutions"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "ServiceNow Expert Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ServiceNow ITSM Implementation",
                    "description": "Complete IT Service Management setup, configuration, and optimization with best practices"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ServiceNow ITOM Solutions",
                    "description": "IT Operations Management, infrastructure monitoring, and automated workflows"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Transformation Consulting",
                    "description": "Strategic digital transformation roadmaps and ServiceNow-powered modernization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI and Automation Solutions",
                    "description": "Generative AI and agentic AI solutions for enhanced business processes"
                  }
                }
              ]
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-IFBASH",
              "contactType": "customer service",
              "availableLanguage": ["English", "Spanish"]
            }
          })
        }}
      />

      <header
        className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/95"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 1)", 
          color: "#1a2e61",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
        }}
        role="banner"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="ifBash - Premier ServiceNow Partner Homepage"
            >
              <div 
                className="h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{ 
                  background: "linear-gradient(135deg, #1a2e61 0%, #6c28d9 50%, #26a3d9 100%)",
                  boxShadow: "0 4px 15px rgba(109, 40, 217, 0.3)"
                }}
              >
                <span className="text-white font-bold text-base">IB</span>
              </div>
              <span 
                className="font-bold text-xl hidden sm:block text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text"
              >
                ifBash
              </span>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[520px] p-4 rounded-xl border-0"
                      style={{
                        background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 50%, #f1f4ff 100%)",
                        boxShadow: "0 10px 40px rgba(109, 40, 217, 0.08)",
                        border: "1px solid rgba(109, 40, 217, 0.1)"
                      }}
                    >
                      <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
                        {serviceItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Portfolio */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[900px] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid w-[850px] gap-3 p-4 md:grid-cols-3">
                        {portfolioItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[520px] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                        {industryItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="w-[420px] p-6 rounded-xl shadow-2xl border-0"
                      style={{
                        background: "white",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                        {companyItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Learning Center Button */}
            <Link
              href="/learning-center"
              className="hidden md:inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mr-2"
              style={{ 
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)"
              }}
              aria-label="Visit Learning Center for ServiceNow resources"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Learning Center
            </Link>

            {/* Enhanced Contact CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ 
                background: "linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%)",
                boxShadow: "0 8px 25px rgba(109, 40, 217, 0.3)"
              }}
              aria-label="Contact ifBash to get started with ServiceNow"
            >
              <Phone className="h-4 w-4 mr-2" />
              Get Started
            </Link>

            {/* Enhanced Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base font-semibold hover:bg-blue-50/30 rounded-lg transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-label="Select language"
                >
                  <Globe 
                    className="h-5 w-5 mr-1" 
                    style={{ color: "#6c28d9" }}
                  />
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}
                  </span>
                  <ChevronDown 
                    className="h-4 w-4 ml-1" 
                    style={{ color: "#6c28d9" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-40 mt-2 z-50 rounded-lg shadow-xl border-0"
                style={{
                  background: "white",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
              >
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm"
                  >
                    <span className="text-lg">{language.flag}</span>
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    aria-label="Open navigation menu"
                    className="rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Menu className="h-5 w-5 text-violet-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px]"
                  style={{
                    background: "white"
                  }}
                >
                  <nav className="flex flex-col space-y-2 mt-6">
                    <Accordion type="multiple" className="w-full">
                      {/* Services Mobile */}
                      <AccordionItem value="services" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline">
                          Services
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-3">
                            {serviceItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center space-x-3 text-sm p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm"
                              >
                                <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                <span className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Portfolio Mobile */}
                      <AccordionItem value="portfolio" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline">
                          Portfolio
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-3 max-h-60 overflow-y-auto">
                            {portfolioItems.slice(0, 10).map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center space-x-3 text-sm p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm"
                              >
                                <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-300" />
                                <span className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</span>
                              </Link>
                            ))}
                            <Link
                              href="/portfolio"
                              className="text-xs text-violet-600 hover:text-blue-600 font-medium px-2 py-1 rounded hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 transition-all duration-300"
                            >
                              View all portfolio items →
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Industries Mobile */}
                      <AccordionItem value="industries" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline">
                          Industries
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-3">
                            {industryItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center space-x-3 text-sm p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm"
                              >
                                <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                <span className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Company Mobile */}
                      <AccordionItem value="company" className="border-blue-100">
                        <AccordionTrigger className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text hover:no-underline">
                          Company
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-2 space-y-3">
                            {companyItems.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center space-x-3 text-sm p-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-blue-50 hover:shadow-sm"
                              >
                                <item.icon className="h-4 w-4 text-violet-600 group-hover:text-blue-600 transition-colors duration-300" />
                                <span className="text-slate-700 group-hover:text-slate-800 font-medium">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Mobile Learning Center */}
                    <Link
                      href="/learning-center"
                      className="mt-4 inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      style={{ 
                        background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                        boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)"
                      }}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Learning Center
                    </Link>

                    {/* Mobile CTA */}
                    <Link
                      href="/contact"
                      className="mt-2 inline-flex items-center justify-center px-4 py-3 text-base font-semibold text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      style={{ 
                        background: "linear-gradient(135deg, #6c28d9 0%, #26a3d9 100%)",
                        boxShadow: "0 8px 25px rgba(109, 40, 217, 0.3)"
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Get Started Today
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Additional SEO and Performance optimizations */}
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
        @keyframes slideIn {
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
          animation: slideIn 0.2s ease-out;
        }
        
        /* Improved focus states for accessibility */
        .focus-visible:focus-visible {
          outline: 2px solid #6c28d9;
          outline-offset: 2px;
        }

        .submenu-hover-gradient {
          background-image: linear-gradient(
            to right,
            rgba(237, 233, 254, 0.5),
            rgba(236, 233, 253, 0.5),
            rgba(239, 246, 255, 0.5)
          );
        }
      `}</style>
    </>
  );
}