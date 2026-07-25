import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand,
} from '@/components/site';
import { portfolioCategories, slug } from '@/components/nav-data';
import { portfolioSlugs } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'ServiceNow Product Portfolio — Everything We Implement & Run',
  description:
    'The ServiceNow products ifBash implements and operates: ITSM, ITOM, ITAM, CSM, HRSD, SecOps, GRC, App Engine, Integration Hub, and the finance and supply chain suite.',
  keywords: [
    'ServiceNow products', 'ServiceNow portfolio', 'ITSM', 'ITOM', 'CSM', 'HRSD',
    'SecOps', 'GRC', 'App Engine', 'Integration Hub', 'ServiceNow implementation',
  ],
  alternates: { canonical: 'https://ifbash.com/portfolio' },
};

export default function PortfolioIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="ServiceNow products"
        headline="The whole platform,"
        accent="not just the popular half."
        sub={`${portfolioSlugs.length} ServiceNow products we implement, integrate, and operate — grouped the way buyers actually think about them.`}
        primary={{ label: 'Scope an implementation', href: '/get-started' }}
        secondary={{ label: 'See our services', href: '/services' }}
      />

      {portfolioCategories.map((cat, i) => (
        <Section
          key={cat.label}
          tone={i % 2 === 0 ? 'surface' : 'paper'}
          divide
          pad="tight"
        >
          <div className="mb-8">
            <Eyebrow rule className="mb-3">{cat.label}</Eyebrow>
            <p className="text-sm text-slate">
              {cat.items.length} product{cat.items.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map(({ title, icon: Icon }) => (
              <Link
                key={title}
                href={`/portfolio/${slug(title)}`}
                className="group flex items-center gap-3.5 rounded-2xl border border-hairline bg-paper p-5 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(11,20,23,0.06)] hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-sea-tint group-hover:bg-sea-strong flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="h-5 w-5 text-sea" />
                </div>
                <span className="text-sm font-medium text-ink-body group-hover:text-sea leading-snug">
                  {title}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-faint group-hover:text-sea ml-auto shrink-0 transition-all group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="ink" pad="tight">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Not sure which you need', 'Most engagements start with one product and grow. We will tell you which one earns its keep first.'],
            ['Already mid-implementation', 'We pick up other people’s builds regularly. The first step is an honest audit of what is there.'],
            ['Inherited an instance', 'Undocumented configuration is normal, not a crisis. We map it before we change anything.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-xl mb-2 text-onink">{t}</div>
              <p className="text-sm leading-relaxed text-onink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        headline="Which one"
        accent="do you actually need?"
        sub="Tell us the problem rather than the product. You'll get a recommendation, and the reasoning behind it, within two working days."
        primary={{ label: 'Scope a project', href: '/get-started' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />
    </>
  );
}
