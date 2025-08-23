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
  navigationMenuTriggerStyle,
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
  Briefcase,
  MapPin,
  Newspaper,
  Users,
  Info,
  BarChart3,
  Shield,
  Workflow,
  Building,
  GraduationCap,
  Car,
  Factory,
  ShoppingBag,
  HeartPulse,
  FlaskConical,
  Wifi,
  Bolt,
  Building2,
  MonitorSmartphone,
  Landmark,
} from "lucide-react";
import { title } from "node:process";
import { useState } from "react";
import { Portal } from "vaul";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    title: "CRM Driven Experiences ",
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

const portfolioItems = {
  servicenow: [
    {
      title: "IT Service Management (ITSM)",
      href: "/portfolio/servicenow/itsm",
      description: "Incident, Problem, Change, and Service Request Management",
    },
    {
      title: "IT Operations Management (ITOM)",
      href: "/portfolio/servicenow/itom",
      description: "Discovery, Event Management, and Orchestration",
    },
    {
      title: "Security Operations (SecOps)",
      href: "/portfolio/servicenow/secops",
      description: "Vulnerability Response and Security Incident Response",
    },
    {
      title: "HR Service Delivery (HRSD)",
      href: "/portfolio/servicenow/hrsd",
      description: "Employee Service Center and HR Case Management",
    },
    {
      title: "Workflow Data Fabric (WDF)",
      href: "/portfolio/servicenow/wdf",
      description: "Workflow Automation and Orchestration",
    },
    {
      title: "Workplace Service Delivery (WSD)",
      href: "/portfolio/servicenow/workplace",
      description: "Workplace Services and Employee Experience",
    },
    {
      title: "Customer Service Management (CSM)",
      href: "/portfolio/servicenow/csm",
      description: "Customer Service Operations and Field Service Management",
    },    
    {
      title: "Field Service Management (FSM)",
      href: "/portfolio/servicenow/fsm",
      description: "Field Service Operations and Scheduling",
    },
    {
      title: "Strategic Portfolio Management (SPM)",
      href: "/portfolio/servicenow/spm",
      description: "Strategic Planning and Portfolio Management",
    },
    {
      title: "IT Asset Management (SAM / HAM)",
      href: "/portfolio/servicenow/itam",
      description: "Asset Lifecycle Management and Software Asset Management",
    },
    {
      title: "Enterprise Asset Management (EAM)",
      href: "/portfolio/servicenow/eam",
      description: "Enterprise Asset Management and Optimization",
    },
    {
      title: "Sourcing and Procurement Operations (SPO)",
      href: "/portfolio/servicenow/sourcing",
      description: "Sourcing and Procurement Management",
    },
    {
      title: "Service Portal",
      href: "/portfolio/servicenow/service-portal",
      description: "Service Portal for User Self-Service",
    },
    {
      title: "Integration Hub",
      href: "/portfolio/servicenow/integration",
      description: "Integration Solutions for ServiceNow",
    },
    {
      title: "Sales and Order Management (SOM)",
      href: "/portfolio/servicenow/som",
      description: "Sales and Order Management Solutions",
    },
    {
      title: "App Engine & Development (AED)",
      href: "/portfolio/servicenow/app-engine",
      description: "Custom Application Development and Platform Automation",
    },
    
     {
      title: "Integrated Risk Management (IRM)",
      href: "/portfolio/servicenow/irm",
      description: "Policy and Compliance Management",
    },    
    {
      title: "Telecommunication Service Management (TSM)",
      href: "/portfolio/servicenow/tsm",
      description: "Telecom Service Operations and Management",
    },
  ]
};

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
    icon: Landmark, // Updated to use Landmark icon
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

const companyItems = [
  {
    title: "Careers",
    href: "/company/careers",
    description: "Join our team and shape the future of technology consulting",
    icon: Users,
  },
  {
    title: "Location",
    href: "/company/location",
    description: "Find our offices and remote work opportunities",
    icon: MapPin,
  },
  {
    title: "Newsroom",
    href: "/company/newsroom",
    description: "Latest news and updates from our company",
    icon: Newspaper,
  },
  {
    title: "About Us",
    href: "/company/about",
    description: "Learn more about our company and values",
    icon: Info,
  },
];

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

const solutionsItems = [
  { title: "CRM", href: "/solutions/crm", icon: Briefcase },
  { title: "Risk and Security", href: "/solutions/risk-security", icon: Shield },
  { title: "Employee", href: "/solutions/employee", icon: Users },
  { title: "Customer", href: "/solutions/customer", icon: BarChart3 },
  { title: "Technology", href: "/solutions/technology", icon: Settings },
  { title: "Human Resources", href: "/solutions/hr", icon: GraduationCap },
  { title: "Finance and Supply Chain", href: "/solutions/finance-supply", icon: Database },
  { title: "IT and Digital Operations", href: "/solutions/it-digital", icon: Workflow },
  { title: "App Development", href: "/solutions/app-development", icon: Building },
  { title: "Core Business Transformation", href: "/solutions/core-business", icon: Globe },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    children: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent group",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />}
            {/* Gradient text for menu item title */}
            <div
              className="text-sm font-medium leading-none moondust-text-gradient"
              style={{
                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug" style={{ color: "#1a2e61" }}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const SolutionListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    href: string;
  }
>(({ className, title, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-x-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent group font-large",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />}
            {/* Gradient text for menu item title */}
            <span
              className="text-sm font-medium leading-none moondust-text-gradient"
              style={{
                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </span>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
SolutionListItem.displayName = "SolutionListItem";

export function Header() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en");
  const [portfolioTab, setPortfolioTab] = useState<"servicenow" | "sap">("servicenow");

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ backgroundColor: "#fff", color: "#1a2e61" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded moondust-gradient flex items-center justify-center moondust-glow" style={{ background: "#1a2e61" }}>
              <span className="text-white font-bold text-sm">IB</span>
            </div>
            <span className="font-semibold text-xl moondust-text-gradient" style={{ color: "#1a2e61" }}>ifBash</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-white">
                    {serviceItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                        className="bg-white hover:bg-accent transition-colors font-large text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Portfolio */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[850px] gap-3 p-4 md:grid-cols-3 bg-white">
                    {portfolioItems.servicenow.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        className="bg-white hover:bg-accent transition-colors font-large text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-2 p-4 md:grid-cols-2 bg-white">
                    {solutionsItems.map((item) => (
                      <SolutionListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                        className="bg-white hover:bg-accent transition-colors font-large text-[#1a2e61]"
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-white">
                    {industryItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                        className="bg-white hover:bg-accent transition-colors text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-semibold text-[1.05rem] px-5 py-2 transition-colors moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-white">
                    {companyItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                        className="bg-white hover:bg-accent transition-colors text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Learning Center & Contact Us (desktop only) */}
          <Link
            href="/learning-center"
            className="ml-4 text-base font-semibold moondust-text-gradient hover:text-primary hidden lg:inline-block"
            style={{
              background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Learning Center
          </Link>
          <Link
            href="/contact-us"
            className="ml-2 text-base font-semibold moondust-text-gradient hover:text-primary hidden lg:inline-block"
            style={{
              background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div style={{ position: "relative", left: "0px" }}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base font-semibold moondust-text-gradient"
                  style={{
                    background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <Globe className="h-5 w-5 mr-1" />
                  {languages.find(lang => lang.code === currentLanguage)?.code}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 bg-white mt-2 z-50">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="flex items-center space-x-2 text-base"
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-2 mt-6">
                  <Accordion type="multiple" className="w-full">
                    {/* Services */}
                    <AccordionItem value="services">
                      <AccordionTrigger className="text-lg font-semibold moondust-text-gradient hover:text-primary">
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 space-y-2">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-base moondust-text-gradient hover:text-foreground"
                              style={{
                                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Portfolio */}
                    <AccordionItem value="portfolio">
                      <AccordionTrigger className="text-lg font-semibold moondust-text-gradient hover:text-primary">
                        Portfolio
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 space-y-2">
                          {portfolioItems.servicenow.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-base moondust-text-gradient hover:text-foreground"
                              style={{
                                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Solutions */}
                    <AccordionItem value="solutions">
                      <AccordionTrigger className="text-lg font-semibold moondust-text-gradient hover:text-primary">
                        Solutions
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 space-y-2">
                          {solutionsItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-base moondust-text-gradient hover:text-foreground"
                              style={{
                                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Industries */}
                    <AccordionItem value="industries">
                      <AccordionTrigger className="text-lg font-semibold moondust-text-gradient hover:text-primary">
                        Industries
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 space-y-2">
                          {industryItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-base moondust-text-gradient hover:text-foreground"
                              style={{
                                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Company */}
                    <AccordionItem value="company">
                      <AccordionTrigger className="text-lg font-semibold moondust-text-gradient hover:text-primary">
                        Company
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-2 space-y-2">
                          {companyItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-base moondust-text-gradient hover:text-foreground"
                              style={{
                                background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {/* Learning Center & Contact Us as links in mobile menu */}
                  <Link
                    href="/learning-center"
                    className="mt-4 text-lg font-semibold moondust-text-gradient hover:text-primary"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Learning Center
                  </Link>
                  <Link
                    href="/contact-us"
                    className="text-lg font-semibold moondust-text-gradient hover:text-primary"
                    style={{
                      background: "linear-gradient(90deg, #6c28d9 0%, #26a3d9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Contact Us
                  </Link>
                  {/* Language Selector for mobile */}
                  <div className="mt-4">
                    <div className="text-base font-semibold mb-2">Language</div>
                    <div className="flex flex-col space-y-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => setCurrentLanguage(language.code)}
                          className="flex items-center space-x-2 text-base bg-transparent border-none cursor-pointer"
                        >
                          <span>{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}