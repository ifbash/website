"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu, ChevronDown, ChevronRight, X, Settings, Users, Info, BarChart3, Shield, Workflow, Building,
  GraduationCap, HeartPulse, MonitorSmartphone, Briefcase, Layers, Target, FileText, CloudLightning,
  Car, Factory, ShoppingBag, Bolt, Landmark, MapPin, ArrowRight, Wrench, BookOpen, MessageCircle, CalendarCheck, Database,
  Zap, Star, Globe, Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

// ─── Navigation data ────────────────────────────────────────────────
const serviceItems = [
  { title: "ServiceNow Implementation", href: "/services/servicenow-implementation", icon: Settings },
  { title: "Agentic AI & Automation", href: "/services/ai-automation", icon: Zap },
  { title: "CRM & Customer Experience", href: "/services/crm-customer-experience", icon: HeartPulse },
  { title: "Managed Services", href: "/services/managed-services-support", icon: Shield },
  { title: "Custom App Development", href: "/services/custom-apps", icon: Layers },
  { title: "Digital Transformation", href: "/services/digital-transformation", icon: Workflow },
];

const industryItems = [
  { title: "Automotive", href: "/industries/automotive-manufacturing", icon: Car },
  { title: "Manufacturing", href: "/industries/manufacturing-solutions", icon: Factory },
  { title: "Consumer Goods", href: "/industries/consumer-goods-retail", icon: ShoppingBag },
  { title: "Technology", href: "/industries/technology-software-companies", icon: MonitorSmartphone },
  { title: "Public Sector", href: "/industries/public-sector-government", icon: Landmark },
  { title: "Healthcare", href: "/industries/healthcare-providers", icon: HeartPulse },
  { title: "Life Sciences", href: "/industries/life-sciences-pharma", icon: HeartPulse },
  { title: "Retail", href: "/industries/retail-ecommerce", icon: ShoppingBag },
  { title: "Telecom", href: "/industries/telecommunications", icon: MonitorSmartphone },
  { title: "Energy & Utilities", href: "/industries/energy-utilities", icon: Bolt },
];

const companyItems = [
  { title: "About Us", href: "/company/about-us", icon: Info },
  { title: "Client Success Stories", href: "/company/case-studies-client-success", icon: Star },
  { title: "Careers", href: "/company/careers-servicenow-jobs", icon: Users },
  { title: "News & Events", href: "/company/news-events-servicenow", icon: CalendarCheck },
  { title: "Learning Center", href: "/learning-center-servicenow", icon: BookOpen },
];

// ─── Portfolio categories ───────────────────────────────────────────
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const portfolioCategories = [
  {
    label: "IT & Digital Operations",
    items: [
      { title: "IT Service Management", icon: Settings },
      { title: "IT Operations Management", icon: BarChart3 },
      { title: "IT Asset Management", icon: Database },
      { title: "Enterprise Architecture", icon: Building },
      { title: "Service Operations Workspace", icon: MonitorSmartphone },
      { title: "Strategic Portfolio Management", icon: Target },
      { title: "Digital End-User Experience", icon: MonitorSmartphone },
      { title: "Cloud Governance Suite", icon: CloudLightning },
      { title: "ServiceNow Cloud Observability", icon: CloudLightning },
      { title: "Operational Technology Management", icon: Wrench },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      { title: "Integration Hub", icon: Layers },
      { title: "App Engine", icon: Layers },
    ],
  },
  {
    label: "CRM & Customer",
    items: [
      { title: "Customer Service Management", icon: HeartPulse },
      { title: "Field Service Management", icon: MapPin },
      { title: "Sales and Order Management", icon: BarChart3 },
      { title: "Configure, Price, Quote", icon: Briefcase },
      { title: "Technology Provider Service Management", icon: MonitorSmartphone },
      { title: "Telecommunications Service Management", icon: MonitorSmartphone },
      { title: "Financial Services Operations", icon: Briefcase },
      { title: "Healthcare and Life Sciences Service Management", icon: HeartPulse },
      { title: "Public Sector Digital Services", icon: Landmark },
    ],
  },
  {
    label: "Risk & Security",
    items: [
      { title: "Security Operations", icon: Shield },
      { title: "Security Incident Response", icon: Shield },
      { title: "Vulnerability Response", icon: Shield },
      { title: "Threat Intelligence Security Center", icon: Shield },
      { title: "Integrated Risk Management", icon: Shield },
      { title: "Third-Party Risk Management", icon: Shield },
      { title: "Security Posture Control", icon: Shield },
      { title: "Privacy Management", icon: FileText },
    ],
  },
  {
    label: "HR & Workforce",
    items: [
      { title: "HR Service Delivery", icon: Users },
      { title: "Talent Development", icon: GraduationCap },
      { title: "Legal Service Delivery", icon: FileText },
      { title: "Workplace Service Delivery", icon: Building },
    ],
  },
  {
    label: "Finance & Supply Chain",
    items: [
      { title: "Accounts Payable Operations", icon: BarChart3 },
      { title: "Sourcing and Procurement Operations", icon: Briefcase },
      { title: "Supplier Lifecycle Operations", icon: Layers },
    ],
  },
];

// ─── Shared dropdown styling ────────────────────────────────────────
const DROP = { background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 24px 64px rgba(0,0,0,0.10), 0 8px 16px rgba(0,0,0,0.04)" };

const DropdownLink = ({ href, title, icon: Icon }: { href: string; title: string; icon: React.ComponentType<{ className?: string }> }) => (
  <Link href={href} className="group flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/60 transition-all duration-200">
    <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-indigo-600" />
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">{title}</span>
  </Link>
);

// ─── Mobile nav link ────────────────────────────────────────────────
const MobileLink = ({ href, title, icon: Icon, onClick }: { href: string; title: string; icon: React.ComponentType<{ className?: string }>; onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-indigo-50/70 transition-all group">
    <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-indigo-600" />
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">{title}</span>
    <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-indigo-400 ml-auto shrink-0" />
  </Link>
);

// ─── Component ──────────────────────────────────────────────────────
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activePortfolioCat, setActivePortfolioCat] = useState(0);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      {/* ── Credential strip ── */}
      <div className="w-full relative overflow-hidden" style={{ background: "linear-gradient(135deg, #07071a 0%, #0c0c2a 100%)", borderBottom: "1px solid rgba(99,102,241,0.12)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-center">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { icon: Zap, text: "AI-First ServiceNow Enabler" },
              { icon: Star, text: "100's of Implementations" },
              { icon: Globe, text: "Serving 25+ Countries" },
            ].map(({ icon: Icon, text }, i) => (
              <React.Fragment key={text}>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <Icon className="h-3 w-3 text-indigo-400" />
                  {text}
                </span>
                {i < 2 && <span className="w-1 h-1 rounded-full bg-indigo-500/40 hidden sm:block" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: isScrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 1px 0 rgba(0,0,0,0.04), 0 4px 24px rgba(79,70,229,0.06)" : "none",
        }}
        role="banner"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="ifBash — Home">
              <Image src="/images/logo.png" alt="ifBash" width={160} height={34} className="object-contain transition-opacity group-hover:opacity-90" priority style={{ width: '160px', height: '34px' }} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <NavigationMenu className="flex items-center">
                <NavigationMenuList className="flex items-center gap-3">

                  {/* Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 hover:!bg-indigo-50/60 px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-indigo-700 data-[state=open]:!bg-indigo-50/60 inline-flex items-center focus:!bg-transparent focus:text-gray-700 focus-visible:outline-none focus-visible:ring-0">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <div className="flex items-center gap-3 mb-4 px-1">
                            <span className="inline-block w-6 h-px bg-indigo-400" />
                            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">What we do</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5">
                            {serviceItems.map(item => <DropdownLink key={item.title} {...item} />)}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 hover:!bg-indigo-50/60 px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-indigo-700 data-[state=open]:!bg-indigo-50/60 inline-flex items-center focus:!bg-transparent focus:text-gray-700 focus-visible:outline-none focus-visible:ring-0">
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <div className="flex items-center gap-3 mb-4 px-1">
                            <span className="inline-block w-6 h-px bg-indigo-400" />
                            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Who we serve</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5">
                            {industryItems.map(item => (
                              <Link key={item.title} href={item.href} className="group flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/60 transition-all duration-200">
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center shrink-0 transition-colors">
                                  <item.icon className="h-4 w-4 text-indigo-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-700">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Portfolio */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 hover:!bg-indigo-50/60 px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-indigo-700 data-[state=open]:!bg-indigo-50/60 inline-flex items-center focus:!bg-transparent focus:text-gray-700 focus-visible:outline-none focus-visible:ring-0">
                      Portfolio
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl overflow-hidden" style={DROP}>
                          <div className="flex" style={{ minHeight: '420px' }}>
                            {/* Category sidebar */}
                            <div className="w-52 border-r border-gray-100 p-3 space-y-0.5 shrink-0 flex flex-col" style={{ background: "rgba(249,250,251,0.6)" }}>
                              <div className="flex items-center gap-2 mb-3 px-3 pt-1">
                                <span className="inline-block w-5 h-px bg-indigo-400" />
                                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Solutions</span>
                              </div>
                              {portfolioCategories.map((cat, idx) => (
                                <button key={cat.label} onMouseEnter={() => setActivePortfolioCat(idx)}
                                  className={cn("w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150",
                                    activePortfolioCat === idx ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50")}>
                                  {cat.label}
                                </button>
                              ))}
                            </div>
                            {/* Items grid */}
                            <div className="flex-1 p-5 flex items-start">
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 w-full">
                                {portfolioCategories[activePortfolioCat]?.items.map(item => (
                                  <Link key={item.title} href={`/portfolio/${slug(item.title)}`}
                                    className="group flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/60 transition-all duration-150">
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

                  {/* Company */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="!bg-transparent border-none shadow-none text-sm font-medium text-gray-700 hover:text-indigo-700 hover:!bg-indigo-50/60 px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-indigo-700 data-[state=open]:!bg-indigo-50/60 inline-flex items-center focus:!bg-transparent focus:text-gray-700 focus-visible:outline-none focus-visible:ring-0">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <div className="flex items-center gap-3 mb-4 px-1">
                            <span className="inline-block w-6 h-px bg-indigo-400" />
                            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Company & Resources</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
                            {companyItems.map(item => <DropdownLink key={item.title} {...item} />)}
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
              <Link href="/get-started"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 4px 20px rgba(79,70,229,0.25)" }}>
                <CalendarCheck className="h-4 w-4 shrink-0" />
                <span className="hidden lg:inline">Free Strategy Call</span>
                <span className="lg:hidden">Book a Call</span>
              </Link>

              {/* Mobile menu button */}
              <button onClick={() => setIsMobileOpen(true)} className="lg:hidden h-9 w-9 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-600" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMobile} />

          {/* Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[320px] sm:w-[380px] bg-white shadow-2xl overflow-y-auto animate-slide-in">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <Image src="/images/logo.png" alt="ifBash" width={120} height={26} className="object-contain" />
              <button onClick={closeMobile} className="h-9 w-9 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <nav className="p-4">
              {/* Services */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="inline-block w-5 h-px bg-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Services</span>
                </div>
                <div className="space-y-0.5">
                  {serviceItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              {/* Industries */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="inline-block w-5 h-px bg-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Industries</span>
                </div>
                <div className="grid grid-cols-2 gap-0.5">
                  {industryItems.map(item => (
                    <Link key={item.title} href={item.href} onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-indigo-50/70 transition-all">
                      <item.icon className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span className="text-sm text-gray-600">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="inline-block w-5 h-px bg-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Portfolio</span>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {portfolioCategories.map((cat, ci) => (
                    <AccordionItem key={cat.label} value={`p-${ci}`} className="border-gray-100">
                      <AccordionTrigger className="text-sm font-medium text-gray-600 hover:text-indigo-700 py-2.5 px-2 hover:no-underline">
                        {cat.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-0.5 pl-2 pb-1">
                          {cat.items.map(item => (
                            <Link key={item.title} href={`/portfolio/${slug(item.title)}`} onClick={closeMobile}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                              <item.icon className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                              <span className="text-sm text-gray-500">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Company */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <span className="inline-block w-5 h-px bg-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">Company</span>
                </div>
                <div className="space-y-0.5">
                  {companyItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/get-started" onClick={closeMobile}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 4px 20px rgba(79,70,229,0.3)" }}>
                  <CalendarCheck className="h-4 w-4" />
                  Free Strategy Call
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
