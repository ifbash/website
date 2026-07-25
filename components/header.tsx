"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronRight, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { LanguageToggle } from "@/components/language-toggle";
import { usePathname } from "next/navigation";
import { localeOf } from "@/lib/i18n/config";
import { ar } from "@/lib/i18n/ar";
import {
  practices, aiAgentsItems, webMobileItems, workItems, servicenowServices,
  portfolioCategories, industryItems, companyItems, slug, type NavItem,
} from "@/components/nav-data";

// ─── Shared styling ─────────────────────────────────────────────────
const DROP = {
  background: "rgba(255,255,255,0.99)",
  backdropFilter: "blur(20px)",
  border: "1px solid #E7E2D9",
  boxShadow: "0 24px 64px rgba(20,18,16,0.10), 0 8px 16px rgba(20,18,16,0.04)",
};

const TRIGGER_CLS =
  "!bg-transparent border-none shadow-none text-sm font-medium text-ink-soft hover:text-navy hover:!bg-wash px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-navy data-[state=open]:!bg-wash inline-flex items-center focus:!bg-transparent focus:text-ink-soft focus-visible:outline-none focus-visible:ring-0";

const DropdownLink = ({ href, title, icon: Icon, note }: NavItem) => (
  <Link
    href={href}
    className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-navy-strong hover:bg-wash transition-all duration-200"
  >
    <div className="w-8 h-8 rounded-lg bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-navy" />
    </div>
    <span className="min-w-0">
      <span className="block text-sm font-medium text-ink-body group-hover:text-navy transition-colors leading-snug">
        {title}
      </span>
      {note && <span className="block text-[11px] text-stone-light mt-0.5 leading-snug">{note}</span>}
    </span>
  </Link>
);

const ColumnLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-2 px-1">
    <span className="inline-block w-5 h-px bg-navy" />
    <span className="text-[11px] font-semibold uppercase tracking-widest text-navy">{children}</span>
  </div>
);

const MenuFooter = ({ note, links }: { note: string; links: { label: string; href: string }[] }) => (
  <div className="mt-4 pt-4 border-t border-hairline-soft flex flex-wrap items-center justify-between gap-3 px-1">
    <span className="text-xs text-stone-light">{note}</span>
    <span className="flex items-center gap-4">
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className="text-[13px] font-semibold text-navy hover:text-navy-deep transition-colors">
          {label} →
        </Link>
      ))}
    </span>
  </div>
);

// ─── Mobile nav link ────────────────────────────────────────────────
const MobileLink = ({ href, title, icon: Icon, onClick }: NavItem & { onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-wash transition-all group">
    <div className="w-8 h-8 rounded-lg bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-navy" />
    </div>
    <span className="text-sm font-medium text-ink-body group-hover:text-navy">{title}</span>
    <ChevronRight className="h-4 w-4 text-stone-faint group-hover:text-navy ml-auto shrink-0" />
  </Link>
);

// ─── Component ──────────────────────────────────────────────────────
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeProductCat, setActiveProductCat] = useState(0);

  // Top-level chrome follows the route's language. The mega-menu contents stay
  // English for now — the Arabic surface is the 12 core pages, and pointing
  // Arabic labels at untranslated destinations would be worse than leaving them.
  const pathname = usePathname() || '/';
  const isAr = localeOf(pathname) === 'ar';
  const t = {
    servicenow: isAr ? ar.nav.servicenow : 'ServiceNow',
    aiAgents: isAr ? ar.nav.aiAgents : 'AI & Agents',
    webMobile: isAr ? ar.nav.webMobile : 'Web & Mobile',
    industries: isAr ? ar.nav.industries : 'Industries',
    company: isAr ? ar.nav.company : 'Company',
    startProject: isAr ? ar.nav.startProject : 'Start a project',
    // Permanent chrome carries no promises or numbers. The 48-hour commitment
    // and the no-handoffs point live at the moment of decision (the page CTA,
    // /engage, /get-started) — repeating them in furniture on all 100 pages
    // made both invisible and made the site read as machine-written.
    strip: isAr ? ar.meta.ctaStrip : 'ServiceNow, and the AI layer on top.',
    home: isAr ? '/ar' : '/',
    getStarted: isAr ? '/ar/get-started' : '/get-started',
  };

  // The strip above the header. Arabic points at the translated service pages.
  const practiceStrip = isAr
    ? [
        { label: ar.nav.servicenow, href: '/ar/services' },
        { label: ar.nav.aiAgents, href: '/ar/services/ai-agents' },
        { label: ar.nav.webMobile, href: '/ar/services/website-development' },
      ]
    : practices.map(({ label, href }) => ({ label, href }));

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-paper/95 backdrop-blur-md shadow-[0_4px_24px_rgba(20,18,16,0.05)] border-b border-hairline"
            : "bg-paper border-b border-hairline/60",
        )}
        role="banner"
      >
        {/* ── Practice strip — the whole offer, before any menu is opened ── */}
        <div
          className={cn(
            "hidden sm:block overflow-hidden border-b border-hairline-soft transition-all duration-300",
            isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-9 gap-1">
              {practiceStrip.map(({ label, href }, i) => (
                <React.Fragment key={href}>
                  {i > 0 && <span className="text-stone-faint text-xs px-1.5">·</span>}
                  <Link
                    href={href}
                    className="text-xs font-medium tracking-wide text-stone hover:text-navy transition-colors"
                  >
                    {label}
                  </Link>
                </React.Fragment>
              ))}
              <span className="ms-auto text-xs text-stone-light hidden lg:block">
                {t.strip}
              </span>
            </div>
          </div>
        </div>

        {/* ── Main row ── */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href={t.home} className="flex items-center shrink-0 group" aria-label="ifBash — Home">
              <Image src="/images/logo.png" alt="ifBash" width={160} height={34} className="object-contain transition-opacity group-hover:opacity-90" priority style={{ width: '160px', height: '34px' }} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <NavigationMenu className="flex items-center">
                <NavigationMenuList className="flex items-center gap-2">

                  {/* ServiceNow — services + the product portfolio */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.servicenow}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl overflow-hidden" style={DROP}>
                          <div className="flex" style={{ minHeight: '400px' }}>
                            {/* Services rail */}
                            <div className="w-64 border-r border-hairline-soft p-4 shrink-0 flex flex-col bg-paper/60">
                              <ColumnLabel>Services</ColumnLabel>
                              <div className="space-y-0.5">
                                {servicenowServices.map(item => <DropdownLink key={item.title} {...item} />)}
                              </div>
                              <Link href="/services" className="mt-auto pt-3 px-1 text-[13px] font-semibold text-navy hover:text-navy-deep transition-colors">
                                All services →
                              </Link>
                            </div>

                            {/* Products */}
                            <div className="flex-1 flex min-w-0">
                              <div className="w-52 border-r border-hairline-soft p-3 space-y-0.5 shrink-0 flex flex-col">
                                <div className="px-3 pt-1 mb-3">
                                  <div className="text-[11px] font-semibold text-navy uppercase tracking-widest mb-0.5">Products</div>
                                  <div className="text-[11px] text-stone-light leading-snug">ServiceNow products we implement &amp; run</div>
                                </div>
                                {portfolioCategories.map((cat, idx) => (
                                  <button key={cat.label} onMouseEnter={() => setActiveProductCat(idx)}
                                    className={cn("w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150",
                                      activeProductCat === idx ? "bg-wash text-navy-deep font-semibold" : "text-stone hover:text-ink hover:bg-wash/60")}>
                                    {cat.label}
                                  </button>
                                ))}
                                <div className="mt-auto pt-3 border-t border-hairline-soft">
                                  <Link href="/portfolio" className="block px-3 py-2 text-xs font-semibold text-navy hover:text-navy-deep rounded-lg hover:bg-wash transition-colors">
                                    View all products →
                                  </Link>
                                </div>
                              </div>
                              <div className="flex-1 p-5 flex items-start min-w-0">
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-1.5 w-full">
                                  {portfolioCategories[activeProductCat]?.items.map(item => (
                                    <Link key={item.title} href={`/portfolio/${slug(item.title)}`}
                                      className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-navy-strong hover:bg-wash transition-all duration-150">
                                      <div className="w-8 h-8 rounded-lg bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center shrink-0 transition-colors">
                                        <item.icon className="h-4 w-4 text-navy" />
                                      </div>
                                      <span className="text-sm font-medium text-ink-body group-hover:text-navy leading-tight">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* AI & Agents */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.aiAgents}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <ColumnLabel>AI &amp; Agents</ColumnLabel>
                          <div className="grid grid-cols-2 gap-1.5">
                            {aiAgentsItems.map(item => <DropdownLink key={item.title} {...item} />)}
                          </div>
                          <MenuFooter
                            note="Built on Claude. The agent on this site is one of ours."
                            links={[{ label: 'See our work', href: '/work' }]}
                          />
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Web & Mobile */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.webMobile}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <ColumnLabel>Build</ColumnLabel>
                              <div className="space-y-0.5">
                                {webMobileItems.map(item => <DropdownLink key={item.title} {...item} />)}
                              </div>
                            </div>
                            <div>
                              <ColumnLabel>Proof</ColumnLabel>
                              <div className="space-y-0.5">
                                {workItems.map(item => <DropdownLink key={item.title} {...item} />)}
                              </div>
                            </div>
                          </div>
                          <MenuFooter
                            note="AI-native from day one — assistants and agents inside the product."
                            links={[{ label: 'Scope your build', href: '/get-started' }]}
                          />
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.industries}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1.5">
                            {industryItems.map(item => (
                              <Link key={item.title} href={item.href} className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-navy-strong hover:bg-wash transition-all duration-200">
                                <div className="w-8 h-8 rounded-lg bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center shrink-0 transition-colors">
                                  <item.icon className="h-4 w-4 text-navy" />
                                </div>
                                <span className="text-sm font-medium text-ink-body group-hover:text-navy">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Company */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.company}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl p-6" style={DROP}>
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

            {/* Right — language flip + single CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <LanguageToggle className="hidden md:inline-flex" />

              <Link href={t.getStarted}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap bg-ink text-paper shadow-[0_4px_20px_rgba(20,18,16,0.15)] hover:bg-navy hover:-translate-y-0.5 transition-all duration-200">
                {t.startProject}
              </Link>

              <button onClick={() => setIsMobileOpen(true)} className="lg:hidden h-9 w-9 rounded-xl hover:bg-wash flex items-center justify-center transition-colors text-ink-soft" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMobile} />

          <div className="absolute right-0 top-0 bottom-0 w-[320px] sm:w-[380px] shadow-2xl overflow-y-auto animate-slide-in bg-paper">
            <div className="flex items-center justify-between px-5 py-3 border-b border-hairline-soft">
              <Image src="/images/logo.png" alt="ifBash" width={120} height={26} className="object-contain" />
              <button onClick={closeMobile} className="h-9 w-9 rounded-xl hover:bg-wash flex items-center justify-center transition-colors" aria-label="Close menu">
                <X className="h-5 w-5 text-stone" />
              </button>
            </div>

            <nav className="p-4">
              {/* ServiceNow */}
              <div className="mb-6">
                <ColumnLabel>ServiceNow</ColumnLabel>
                <div className="space-y-0.5">
                  {servicenowServices.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              {/* AI & Agents */}
              <div className="mb-6">
                <ColumnLabel>AI &amp; Agents</ColumnLabel>
                <div className="space-y-0.5">
                  {aiAgentsItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              {/* Web & Mobile */}
              <div className="mb-6">
                <ColumnLabel>Web &amp; Mobile</ColumnLabel>
                <div className="space-y-0.5">
                  {webMobileItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                  {workItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              {/* Products */}
              <div className="mb-6">
                <ColumnLabel>ServiceNow Products</ColumnLabel>
                <Accordion type="single" collapsible className="w-full">
                  {portfolioCategories.map((cat, ci) => (
                    <AccordionItem key={cat.label} value={`p-${ci}`} className="border-hairline-soft">
                      <AccordionTrigger className="text-sm font-medium text-stone hover:text-navy py-2.5 px-2 hover:no-underline">
                        {cat.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-0.5 pl-2 pb-1">
                          {cat.items.map(item => (
                            <Link key={item.title} href={`/portfolio/${slug(item.title)}`} onClick={closeMobile}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-wash transition-colors">
                              <item.icon className="h-3.5 w-3.5 text-navy shrink-0" />
                              <span className="text-sm text-stone">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Industries */}
              <div className="mb-6">
                <ColumnLabel>Industries</ColumnLabel>
                <div className="grid grid-cols-2 gap-0.5">
                  {industryItems.map(item => (
                    <Link key={item.title} href={item.href} onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-wash transition-all">
                      <item.icon className="h-4 w-4 text-navy shrink-0" />
                      <span className="text-sm text-stone">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <ColumnLabel>Company</ColumnLabel>
                <div className="space-y-0.5">
                  {companyItems.map(item => <MobileLink key={item.title} {...item} onClick={closeMobile} />)}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-hairline-soft space-y-3">
                <Link href={t.getStarted} onClick={closeMobile}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm bg-ink text-paper shadow-[0_4px_20px_rgba(20,18,16,0.2)] hover:bg-navy hover:-translate-y-0.5 transition-all">
                  {t.startProject} <ArrowRight className="h-4 w-4" />
                </Link>
                <LanguageToggle className="w-full justify-center h-11" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
