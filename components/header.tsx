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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  ArrowRight,
  Cloud,
  Wrench,
  BookOpen,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const serviceItems = [
  { title: "Digital Transformation", href: "/services/digital-transformation", icon: Workflow },
  { title: "Consulting & Implementation", href: "/services/servicenow-implementation", icon: Settings },
  { title: "Generative AI & Agentic AI", href: "/services/ai-automation", icon: GraduationCap },
  { title: "CRM Driven Experiences", href: "/services/crm-customer-experience", icon: Briefcase },
  { title: "Managed Services & Support", href: "/services/managed-services-support", icon: Users },
  { title: "ServiceNow Custom Apps", href: "/services/custom-apps", icon: BarChart3 },
];

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

const industryItems = [
  { title: "Automotive Industry", href: "/industries/automotive-manufacturing", icon: Car },
  { title: "Manufacturing & Industrial", href: "/industries/manufacturing-solutions", icon: Factory },
  { title: "Consumer Goods & Retail", href: "/industries/consumer-goods-retail", icon: ShoppingBag },
  { title: "Technology & Software", href: "/industries/technology-software-companies", icon: MonitorSmartphone },
  { title: "Public Sector & Government", href: "/industries/public-sector-government", icon: Landmark },
  { title: "Healthcare & Life Sciences", href: "/industries/healthcare-providers", icon: HeartPulse },
  { title: "Pharmaceuticals & Biotech", href: "/industries/life-sciences-pharma", icon: FlaskConical },
  { title: "Retail & E-commerce", href: "/industries/retail-ecommerce", icon: ShoppingBag },
  { title: "Telecommunications", href: "/industries/telecommunications", icon: Wifi },
  { title: "Energy & Utilities", href: "/industries/energy-utilities", icon: Bolt },
];

const companyItems = [
  { title: "About ifBash", href: "/company/about-us", icon: Info },
  { title: "Careers & Jobs", href: "/company/careers-servicenow-jobs", icon: GraduationCap },
  { title: "Client Success Stories", href: "/company/case-studies-client-success", icon: FileText },
  { title: "News & Industry Events", href: "/company/news-events-servicenow", icon: Newspaper },
  { title: "Learning Center", href: "/learning-center-servicenow", icon: BookOpen },
];

const DROPDOWN_BG = { background: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" };

const NavItem = ({ href, title, icon: Icon }: { href: string; title: string; icon: React.ComponentType<{className?: string}> }) => (
  <Link
    href={href}
    className="group flex items-center gap-3 p-3.5 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/60 transition-all duration-200"
  >
    <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-indigo-600" />
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors leading-tight">{title}</span>
  </Link>
);

const MobilePortfolioMenu = ({ closeMobileMenu }: { closeMobileMenu: () => void }) => {
  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);
  return (
    <div className="space-y-1.5">
      {portfolioItems.map((category, idx) => (
        <div key={category.category}>
          <button
            onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-700">{category.category}</span>
            <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform duration-200", activeCategory === idx && "rotate-180")} />
          </button>
          {activeCategory === idx && (
            <div className="pl-3 mt-1 space-y-1">
              {category.items.map((item) => (
                <Link
                  key={item.title}
                  href={`/portfolio/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <item.icon className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-sm text-gray-600 hover:text-indigo-700">{item.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePortfolioCategory, setActivePortfolioCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ifBash",
            "url": "https://ifbash.com",
            "logo": "https://ifbash.com/images/logo.png",
            "description": "ServiceNow and agentic AI consulting partner — IT, Employee & Customer workflows, AI automation, and CRM.",
            "sameAs": ["https://linkedin.com/company/ifbash", "https://x.com/ifbashx", "https://youtube.com/@c-ifbash"]
          })
        }}
      />

      {/* Credential strip */}
      <div className="w-full overflow-hidden" style={{ background: "#07071a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
          <div className="flex items-center gap-0 flex-wrap justify-center">
            {[
              "AI-First ServiceNow Enabler",
              "1,500+ Implementations",
              "73-Day Average Go-Live",
              "180% Average ROI",
              "50+ Certified Experts",
            ].map((item, i) => (
              <React.Fragment key={item}>
                <span className="text-xs text-slate-400 font-medium px-3 whitespace-nowrap">{item}</span>
                {i < 4 && <span className="text-slate-700 text-xs select-none">✦</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 w-full bg-white transition-all duration-300"
        style={{
          borderBottom: isScrolled ? "1px solid #e5e7eb" : "1px solid #f0f0f5",
          boxShadow: isScrolled ? "0 4px 24px rgba(79,70,229,0.08), 0 1px 0 #e5e7eb" : "none",
        }}
        role="banner"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="ifBash — Go to Homepage">
              <div className="w-[180px] h-[40px] relative flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="ifBash Logo"
                  width={180}
                  height={40}
                  className="object-contain"
                  priority
                  style={{ width: '180px', height: '40px' }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">

                  {/* Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 px-4 py-2 h-9 transition-colors data-[state=open]:text-indigo-700">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-xl p-5" style={DROPDOWN_BG}>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {serviceItems.map((item) => <NavItem key={item.title} {...item} />)}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Portfolio */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 px-4 py-2 h-9 transition-colors data-[state=open]:text-indigo-700">
                      Portfolio
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-xl overflow-hidden" style={DROPDOWN_BG}>
                          <div className="flex">
                            {/* Categories sidebar */}
                            <div className="w-52 border-r border-gray-100 p-3 space-y-0.5 shrink-0 bg-gray-50/50">
                              {portfolioItems.map((cat, idx) => (
                                <button
                                  key={cat.category}
                                  onMouseEnter={() => setActivePortfolioCategory(idx)}
                                  className={cn(
                                    "w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150",
                                    activePortfolioCategory === idx
                                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                  )}
                                >
                                  {cat.category}
                                </button>
                              ))}
                            </div>
                            {/* Items grid */}
                            <div className="flex-1 p-4">
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                {portfolioItems[activePortfolioCategory]?.items.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={`/portfolio/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                    className="group flex items-center gap-3 p-3.5 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/60 transition-all duration-150"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
                                      <item.icon className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 leading-tight">{item.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 px-4 py-2 h-9 transition-colors data-[state=open]:text-indigo-700">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-xl p-5" style={DROPDOWN_BG}>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                            {industryItems.map((item) => <NavItem key={item.title} {...item} />)}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Company */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 px-4 py-2 h-9 transition-colors data-[state=open]:text-indigo-700">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-xl p-5" style={DROPDOWN_BG}>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {companyItems.map((item) => <NavItem key={item.title} {...item} />)}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/get-started"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 4px 20px rgba(79,70,229,0.3)" }}
              >
                <CalendarCheck className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden lg:inline">Free Strategy Call</span>
                <span className="lg:hidden">Book a Call</span>
              </Link>

              {/* Mobile menu */}
              <div className="lg:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-9 w-9 rounded-xl hover:bg-gray-100 text-gray-600">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] sm:w-[360px] overflow-y-auto p-0 border-l border-white/10"
                    style={{ background: "#ffffff" }}
                  >
                    {/* Mobile header */}
                    <div className="flex items-center px-5 py-4 border-b border-gray-100">
                      <Image src="/images/logo.png" alt="ifBash" width={140} height={32} className="object-contain" />
                    </div>

                    <nav className="p-4">
                      <Accordion type="multiple" className="w-full">
                        {[
                          { value: "services", label: "Services", items: serviceItems },
                          { value: "industries", label: "Industries", items: industryItems },
                          { value: "company", label: "Company", items: companyItems },
                        ].map(({ value, label, items }) => (
                          <AccordionItem key={value} value={value} className="border-gray-100">
                            <AccordionTrigger className="text-base font-semibold text-gray-800 hover:text-indigo-700 hover:no-underline py-3.5">
                              {label}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-0.5 pb-2">
                                {items.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors"
                                  >
                                    <item.icon className="h-4 w-4 text-indigo-600 shrink-0" />
                                    <span className="text-sm text-gray-600 hover:text-indigo-700">{item.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}

                        <AccordionItem value="portfolio" className="border-gray-100">
                          <AccordionTrigger className="text-base font-semibold text-gray-800 hover:text-indigo-700 hover:no-underline py-3.5">
                            Portfolio
                          </AccordionTrigger>
                          <AccordionContent>
                            <MobilePortfolioMenu closeMobileMenu={closeMobileMenu} />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="mt-5 pt-5 border-t border-gray-100">
                        <Link
                          href="/get-started"
                          onClick={closeMobileMenu}
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm"
                          style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 4px 20px rgba(79,70,229,0.3)" }}
                        >
                          <CalendarCheck className="h-4 w-4" />
                          Free Strategy Call
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
    </>
  );
}
