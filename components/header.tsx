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
  Users,
  BarChart3,
  Shield,
  Workflow,
  Building,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { title } from "node:process";
import { useState } from "react";

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
      title: "Governance, Risk, and Compliance (GRC)",
      href: "/portfolio/servicenow/grc",
      description: "Policy and Compliance Management",
    },
    {
      title: "Security Operations (SecOps)",
      href: "/portfolio/servicenow/secops",
      description: "Vulnerability Response and Security Incident Response",
    },
    {
      title: "HR Service Delivery",
      href: "/portfolio/servicenow/hrsd",
      description: "Employee Service Center and HR Case Management",
    },
    {
      title: "Customer Service Management",
      href: "/portfolio/servicenow/csm",
      description: "Customer Service Operations and Field Service Management",
    },    
    {
      title: "Field Service Management",
      href: "/portfolio/servicenow/field-service",
      description: "Field Service Operations and Scheduling",
    },
    {
      title: "IT Asset Management (SAM / HAM)",
      href: "/portfolio/servicenow/itam",
      description: "Asset Lifecycle Management and Software Asset Management",
    },
    
    {
      title: "IT Business Management (ITBM)",
      href: "/portfolio/servicenow/itbm",
      description: "Project Portfolio Management and Financial Management",
    },
    {
      title: "App Engine & Development",
      href: "/portfolio/servicenow/app-engine",
      description: "Custom Application Development and Platform Automation",
    },
  ]
};

const industryItems = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    description: "Automotive manufacturing and supply chain solutions",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Discrete and process manufacturing solutions",
  },
  {
    title: "Consumer Goods",
    href: "/industries/consumer-goods",
    description: "Consumer products and retail solutions",
  },
  {
    title: "Technology Providers",
    href: "/industries/technology-provider",
    description: "Software and technology companies",
  },
  {
    title: "Public Sector",
    href: "/industries/public-sector",
    description: "Government and public service organizations",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Healthcare providers and life sciences solutions",
  },
  {
    title: "Life Sciences",
    href: "/industries/life-sciences",
    description: "Pharmaceuticals and biotechnology solutions",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    description: "Retail operations and consumer goods",
  },
  {
    title: "Telecoms",
    href: "/industries/telecoms",
    description: "Telecom service providers and network solutions",
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy-utilities",
    description: "Energy production and utility management solutions",
  },
  
];

const companyItems = [
  {
    title: "Careers",
    href: "/company/careers",
    description: "Join our team and shape the future of technology consulting",
  },
  {
    title: "Location",
    href: "/company/location",
    description: "Find our offices and remote work opportunities",
  },
  {
    title: "Newsroom",
    href: "/company/newsroom",
    description: "Latest news and updates from our company",
  },
  {
    title: "About Us",
    href: "/company/about",
    description: "Learn more about our company and values",
  },
];

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
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
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 transition-colors moondust-text-gradient"
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
                <NavigationMenuTrigger className="bg-transparent border-none shadow-none font-medium px-4 py-2 transition-colors moondust-text-gradient"
                >
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[550px] p-4 bg-white">
                    <div className="flex space-x-6 border-b border-border mb-4">
                      <button
                        className={`px-4 py-2 font-semibold border-b-2 transition-colors bg-transparent text-[#1a2e61] ${
                          portfolioTab === "servicenow"
                            ? "border-primary text-primary"
                            : "border-transparent hover:text-primary"
                        }`}
                        style={{ background: "transparent", boxShadow: "none" }}
                        onMouseEnter={() => setPortfolioTab("servicenow")}
                        onFocus={() => setPortfolioTab("servicenow")}
                      >
                        ServiceNow
                      </button>
                    </div>
                    <div>
                      {portfolioTab === "servicenow" && (
                        <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
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

              {/* Industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 transition-colors moondust-text-gradient"
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
                        icon={Building} className="bg-white hover:bg-accent transition-colors text-[#1a2e61]"
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
                  className="bg-transparent border-none shadow-none font-medium px-4 py-2 transition-colors moondust-text-gradient"
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
                        icon={Building} className="bg-white hover:bg-accent transition-colors text-[#1a2e61]"
                      >
                        <span className="desc">{item.description}</span>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contactus" className="bg-transparent border-none shadow-none font-medium px-4 py-2 transition-colors moondust-text-gradient">
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Learning Center */}
          <Link href="/learning-center" legacyBehavior passHref>
            <Button variant="outline" size="sm" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-md moondust-gradient hover:opacity-90 text-white px-8 py-3 moondust-glow">
              Learning Center
            </Button>
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                style={{ backgroundColor: "#1a2e61" }}
              >
                <Globe className="h-4 w-4 mr-1" />
                {languages.find(lang => lang.code === currentLanguage)?.name}
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-10 bg-white">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setCurrentLanguage(language.code)}
                  className="flex items-center space-x-2"
                >
                  <span>{language.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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