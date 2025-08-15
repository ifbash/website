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
      href: "/portfolio/servicenow/workflow",
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
      href: "/portfolio/servicenow/field-service",
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
      title: "Integration",
      href: "/portfolio/servicenow/integration",
      description: "Integration Solutions for ServiceNow",
    },
    {
      title: "Sales and Order Management (SOM)",
      href: "/portfolio/servicenow/sales-order",
      description: "Sales and Order Management Solutions",
    },
    {
      title: "IT Business Management (ITBM)",
      href: "/portfolio/servicenow/itbm",
      description: "Project Portfolio Management and Financial Management",
    },
    {
      title: "App Engine & Development (AED)",
      href: "/portfolio/servicenow/app-engine",
      description: "Custom Application Development and Platform Automation",
    },
    
     {
      title: "Governance, Risk, and Compliance (GRC)",
      href: "/portfolio/servicenow/grc",
      description: "Policy and Compliance Management",
    },    
    {
      title: "Telecommunication Service Management (TSM)",
      href: "/portfolio/servicenow/telecom",
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
    title: "Telecoms",
    href: "/industries/telecoms",
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />}
            <div className="text-sm font-medium leading-none">{title}</div>
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
            "block select-none space-x-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group font-large text-[#1a2e61]",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />}
            <span className="text-sm font-medium leading-none">{title}</span>
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
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded moondust-gradient flex items-center justify-center moondust-glow" style={{ background: "#1a2e61" }}>
              <span className="text-white font-bold text-base">IB</span>
            </div>
            <span className="font-semibold text-xl moondust-text-gradient" style={{ color: "#1a2e61" }}>ifBash</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 text-base transition-colors moondust-text-gradient"
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
                        icon={item.icon} className="bg-white hover:bg-accent transition-colors font-large text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Portfolio */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-medium px-4 py-2 text-base transition-colors moondust-text-gradient"
                >
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[875px] p-4 bg-white">
                    <div>
                      {portfolioTab === "servicenow" && (
                        <ul className="grid w-[825px] gap-2 p-4 md:grid-cols-3">
                          {portfolioItems.servicenow.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block p-2 rounded-md hover:bg-accent transition-colors text-[#1a2e61]"
                              >
                                <div className="text-sm font-medium">{item.title}</div>
                                <div className="text-xs mt-1" style={{ color: "#1a2e61" }}>
                                  <span className="desc">{item.description}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 text-base transition-colors moondust-text-gradient"
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-white">
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
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 text-base transition-colors moondust-text-gradient"
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
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 text-base transition-colors moondust-text-gradient"
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
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Learning Center */}
          <Link href="/learning-center">
            <Button
              variant="outline"
              size="sm"
              className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 rounded-full moondust-gradient hover:opacity-90 text-white px-5 py-2 moondust-glow h-8"
            >
              Learning Center
            </Button>
          </Link>

          <Link href="/learning-center">
            <Button
              variant="outline"
              size="sm"
              className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 rounded-full moondust-gradient hover:opacity-90 text-white px-5 py-2 moondust-glow h-8"
            >
              Contact Us
            </Button>
          </Link>

          {/* Language Selector */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white text-base font-semibold px-4 py-2 h-8"
                  style={{ color: "#1a2e61" }}
                >
                  <Globe className="h-5 w-5 mr-2" />
                  {languages.find(lang => lang.code === currentLanguage)?.code}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32 bg-white">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="flex items-center space-x-2 text-base"
                  >
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
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/services" className="text-lg font-medium text-foreground hover:text-primary">
                    Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/portfolio" className="text-lg font-medium text-foreground hover:text-primary">
                    Portfolio
                  </Link>
                  <div className="pl-4 space-y-3">
                    <div>
                      <div className="text-sm font-medium text-foreground mb-2">ServiceNow</div>
                      <div className="space-y-1">
                        {portfolioItems.servicenow.slice(0, 3).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-xs text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/industries" className="text-lg font-medium text-foreground hover:text-primary">
                    Industries
                  </Link>
                  <Link href="/careers" className="text-lg font-medium text-foreground hover:text-primary">
                    Careers
                  </Link>
                  <Link href="/learning-center" className="text-lg font-medium text-foreground hover:text-primary">
                    Learning Center
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}