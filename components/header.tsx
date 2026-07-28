"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronRight, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
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
  border: "1px solid #E5DCD2",
  boxShadow: "0 24px 64px rgba(24,19,18,0.10), 0 8px 16px rgba(24,19,18,0.04)",
};

const TRIGGER_CLS =
  "!bg-transparent border-none shadow-none text-sm font-medium text-ink-soft hover:text-sea hover:!bg-wash px-3 h-8 rounded-lg transition-colors duration-0 data-[state=open]:text-sea data-[state=open]:!bg-wash inline-flex items-center focus:!bg-transparent focus:text-ink-soft focus-visible:outline-none focus-visible:ring-0";

const DropdownLink = ({ href, title, icon: Icon, note }: NavItem) => (
  <Link
    href={href}
    className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-sea-strong hover:bg-wash transition-all duration-200"
  >
    <div className="w-8 h-8 rounded-lg bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-sea" />
    </div>
    <span className="min-w-0">
      <span className="block text-sm font-medium text-ink-body group-hover:text-sea transition-colors leading-snug">
        {title}
      </span>
      {note && <span className="block text-[11px] text-slate-light mt-0.5 leading-snug">{note}</span>}
    </span>
  </Link>
);

const ColumnLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-2 px-1">
    <span className="inline-block w-5 h-px bg-sea" />
    <span className="text-[11px] font-semibold uppercase tracking-widest text-sea">{children}</span>
  </div>
);

const MenuFooter = ({ note, links }: { note: string; links: { label: string; href: string }[] }) => (
  <div className="mt-4 pt-4 border-t border-hairline-soft flex flex-wrap items-center justify-between gap-3 px-1">
    <span className="text-xs text-slate-light">{note}</span>
    <span className="flex items-center gap-4">
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className="text-[13px] font-semibold text-sea hover:text-sea-deep transition-colors">
          {label} →
        </Link>
      ))}
    </span>
  </div>
);

// ─── Mobile nav link (kept for reuse) ───────────────────────────────
const MobileLink = ({ href, title, icon: Icon, onClick }: NavItem & { onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-wash transition-all group">
    <div className="w-8 h-8 rounded-lg bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
      <Icon className="h-4 w-4 text-sea" />
    </div>
    <span className="text-sm font-medium text-ink-body group-hover:text-sea">{title}</span>
    <ChevronRight className="h-4 w-4 text-slate-faint group-hover:text-sea ml-auto shrink-0" />
  </Link>
);

/**
 * Arabic navigation.
 */
const arNav: { label: string; href: string }[] = [
  { label: ar.nav.services, href: '/ar/services' },
  { label: ar.nav.ourWork, href: '/ar/work' },
  { label: ar.nav.howWeEngage, href: '/ar/engage' },
  { label: ar.nav.aboutUs, href: '/ar/company/about-us' },
  { label: ar.nav.contact, href: '/ar/contactus' },
];

// ─── Simplified mobile nav destinations ─────────────────────────────
const mobileTopLinks = [
  { label: 'Services', href: '/services', note: 'ServiceNow, AI & Agents, Web & Mobile' },
  { label: 'Our Work', href: '/work', note: 'Live demos & what we\'ve built' },
  { label: 'How We Engage', href: '/engage', note: 'Discovery, builds, retainers' },
  { label: 'About Us', href: '/company/about-us', note: 'Who we are & how we work' },
  { label: 'Trust & Security', href: '/trust', note: 'Compliance, data handling, subprocessors' },
];

const mobileExploreLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/company/careers-servicenow-jobs' },
  { label: 'Contact', href: '/contactus' },
  { label: 'Privacy', href: '/privacy' },
];

// ─── Component ──────────────────────────────────────────────────────
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeProductCat, setActiveProductCat] = useState(0);

  const pathname = usePathname() || '/';
  const isAr = localeOf(pathname) === 'ar';
  const t = {
    servicenow: isAr ? ar.nav.servicenow : 'ServiceNow',
    aiAgents: isAr ? ar.nav.aiAgents : 'AI & Agents',
    webMobile: isAr ? ar.nav.webMobile : 'Web & Mobile',
    industries: isAr ? ar.nav.industries : 'Industries',
    company: isAr ? ar.nav.company : 'Company',
    startProject: isAr ? ar.nav.startProject : 'Start a project',
    strip: isAr ? ar.meta.ctaStrip : 'ServiceNow, and the AI layer on top.',
    home: isAr ? '/ar' : '/',
    getStarted: isAr ? '/ar/get-started' : '/get-started',
  };

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
            ? "bg-paper/95 backdrop-blur-md shadow-[0_4px_24px_rgba(24,19,18,0.05)] border-b border-hairline"
            : "bg-paper border-b border-hairline/60",
        )}
        role="banner"
      >
        {/* ── Practice strip ── */}
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
                  {i > 0 && <span className="text-slate-faint text-xs px-1.5">·</span>}
                  <Link
                    href={href}
                    className="text-xs font-medium tracking-wide text-slate hover:text-sea transition-colors"
                  >
                    {label}
                  </Link>
                </React.Fragment>
              ))}
              <span className="ms-auto text-xs text-slate-light hidden lg:block">
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
              <Image src="/images/logo.png" alt="ifBash" width={160} height={34} className="object-contain transition-opacity group-hover:opacity-90 drop-shadow-[0_1px_10px_rgba(178,58,43,0.28)]" priority style={{ width: '160px', height: '34px' }} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center">
              {isAr ? (
                <ul className="flex items-center gap-1">
                  {arNav.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-flex items-center rounded-lg px-3 h-8 text-sm font-medium text-ink-soft hover:text-sea hover:bg-wash transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
              <NavigationMenu className="flex items-center">
                <NavigationMenuList className="flex items-center gap-2">

                  {/* ServiceNow */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={TRIGGER_CLS}>{t.servicenow}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="fixed left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="w-full rounded-2xl overflow-hidden" style={DROP}>
                          <div className="flex" style={{ minHeight: '400px' }}>
                            <div className="w-64 border-r border-hairline-soft p-4 shrink-0 flex flex-col bg-paper/60">
                              <ColumnLabel>Services</ColumnLabel>
                              <div className="space-y-0.5">
                                {servicenowServices.map(item => <DropdownLink key={item.title} {...item} />)}
                              </div>
                              <Link href="/services" className="mt-auto pt-3 px-1 text-[13px] font-semibold text-sea hover:text-sea-deep transition-colors">
                                All services →
                              </Link>
                            </div>
                            <div className="flex-1 flex min-w-0">
                              <div className="w-52 border-r border-hairline-soft p-3 space-y-0.5 shrink-0 flex flex-col">
                                <div className="px-3 pt-1 mb-3">
                                  <div className="text-[11px] font-semibold text-sea uppercase tracking-widest mb-0.5">Products</div>
                                  <div className="text-[11px] text-slate-light leading-snug">ServiceNow products we implement &amp; run</div>
                                </div>
                                {portfolioCategories.map((cat, idx) => (
                                  <button key={cat.label} onMouseEnter={() => setActiveProductCat(idx)}
                                    className={cn("w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150",
                                      activeProductCat === idx ? "bg-wash text-sea-deep font-semibold" : "text-slate hover:text-ink hover:bg-wash/60")}>
                                    {cat.label}
                                  </button>
                                ))}
                                <div className="mt-auto pt-3 border-t border-hairline-soft">
                                  <Link href="/portfolio" className="block px-3 py-2 text-xs font-semibold text-sea hover:text-sea-deep rounded-lg hover:bg-wash transition-colors">
                                    View all products →
                                  </Link>
                                </div>
                              </div>
                              <div className="flex-1 p-5 flex items-start min-w-0">
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-1.5 w-full">
                                  {portfolioCategories[activeProductCat]?.items.map(item => (
                                    <Link key={item.title} href={`/portfolio/${slug(item.title)}`}
                                      className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-sea-strong hover:bg-wash transition-all duration-150">
                                      <div className="w-8 h-8 rounded-lg bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                                        <item.icon className="h-4 w-4 text-sea" />
                                      </div>
                                      <span className="text-sm font-medium text-ink-body group-hover:text-sea leading-tight">{item.title}</span>
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
                              <Link key={item.title} href={item.href} className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:border-sea-strong hover:bg-wash transition-all duration-200">
                                <div className="w-8 h-8 rounded-lg bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                                  <item.icon className="h-4 w-4 text-sea" />
                                </div>
                                <span className="text-sm font-medium text-ink-body group-hover:text-sea">{item.title}</span>
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
              )}
            </nav>

            {/* Right — language flip + single CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <LanguageToggle className="hidden md:inline-flex" />

              <Link href={t.getStarted}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap bg-sea text-white shadow-[0_4px_18px_rgba(178,58,43,0.30)] hover:bg-sea-deep hover:shadow-[0_8px_24px_rgba(178,58,43,0.42)] hover:-translate-y-0.5 transition-all duration-200">
                {t.startProject}
              </Link>

              <button onClick={() => setIsMobileOpen(true)} className="lg:hidden h-9 w-9 rounded-xl hover:bg-wash flex items-center justify-center transition-colors text-ink-soft" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay (SIMPLIFIED) ── */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMobile} />

          <div className="absolute right-0 top-0 bottom-0 w-[320px] sm:w-[380px] shadow-2xl overflow-y-auto animate-slide-in bg-paper">
            <div className="flex items-center justify-between px-5 py-3 border-b border-hairline-soft">
              <Image src="/images/logo.png" alt="ifBash" width={120} height={26} className="object-contain" />
              <button onClick={closeMobile} className="h-9 w-9 rounded-xl hover:bg-wash flex items-center justify-center transition-colors" aria-label="Close menu">
                <X className="h-5 w-5 text-slate" />
              </button>
            </div>

            <nav className="p-4">
              {isAr ? (
                <div className="space-y-0.5">
                  {arNav.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMobile}
                      className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-wash transition-colors"
                    >
                      <span className="text-sm font-medium text-ink-body">{label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-faint rtl:rotate-180" />
                    </Link>
                  ))}
                </div>
              ) : (
                <>
                  {/* Top destinations */}
                  <div className="space-y-1 mb-6">
                    {mobileTopLinks.map(({ label, href, note }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobile}
                        className="flex items-center justify-between px-3 py-3.5 rounded-xl hover:bg-wash transition-colors group"
                      >
                        <div className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-body group-hover:text-sea transition-colors">{label}</span>
                          <span className="block text-[11px] text-slate-light mt-0.5">{note}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-faint group-hover:text-sea shrink-0" />
                      </Link>
                    ))}
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <Link
                      href="/agent"
                      onClick={closeMobile}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-hairline bg-surface text-sm font-semibold text-ink-body hover:border-sea-soft hover:text-sea transition-all"
                    >
                      Talk to our agent
                    </Link>
                    <Link
                      href="/get-started"
                      onClick={closeMobile}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sea text-white text-sm font-semibold shadow-[0_4px_16px_rgba(178,58,43,0.30)] hover:bg-sea-deep hover:-translate-y-0.5 transition-all"
                    >
                      Start a project <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* Explore links */}
                  <div className="border-t border-hairline-soft pt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-light mb-2 px-1">Explore</div>
                    <div className="grid grid-cols-2 gap-1">
                      {mobileExploreLinks.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMobile}
                          className="px-3 py-2 rounded-lg text-sm text-slate hover:text-sea hover:bg-wash transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-hairline-soft space-y-3">
                <Link href={t.getStarted} onClick={closeMobile}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm bg-sea text-white shadow-[0_4px_18px_rgba(178,58,43,0.30)] hover:bg-sea-deep hover:-translate-y-0.5 transition-all">
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
