import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Section, Eyebrow, DisplayHeading, Accented, PageHero, CtaBand,
} from '@/components/site';
import { industryEntries } from '@/lib/industry-data';
import { industryItems } from '@/components/nav-data';

export const metadata: Metadata = {
  title: 'Industries We Serve — ServiceNow, AI & Product Delivery by Sector',
  description:
    'ServiceNow delivery, AI agents, and product engineering for manufacturing, healthcare, life sciences, retail, telecom, energy, technology, public sector, automotive, and consumer goods.',
  keywords: [
    'ServiceNow by industry', 'healthcare ServiceNow', 'manufacturing ServiceNow',
    'public sector ServiceNow', 'telecom ServiceNow', 'AI agents by industry',
  ],
  alternates: { canonical: 'https://ifbash.com/industries' },
};

export default function IndustriesIndexPage() {
  // Pair the nav item (short name + icon) with the page's own description.
  const cards = industryItems.map((item) => {
    const slug = item.href.replace('/industries/', '');
    const entry = industryEntries.find((e) => e.slug === slug);
    return { ...item, desc: entry?.metaDescription ?? '', slug };
  });

  return (
    <>
      <PageHero
        eyebrow="Industries"
        headline="We work where the"
        accent="workflow is the business."
        sub="Ten sectors where platform work, agents, and product engineering all land on the same problem — getting work to move without someone chasing it."
        primary={{ label: 'Scope a project', href: '/get-started' }}
        secondary={{ label: 'See our services', href: '/services' }}
      />

      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">By sector</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Pick yours. <Accented>We&apos;ll be specific.</Accented>
          </DisplayHeading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ title, href, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-hairline bg-paper p-6 transition-all duration-300 hover:border-navy-soft hover:shadow-[0_8px_30px_rgba(20,18,16,0.06)] hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-navy-tint group-hover:bg-navy-strong flex items-center justify-center mb-4 transition-colors">
                <Icon className="h-5 w-5 text-navy" />
              </div>
              <h2 className="font-display text-xl text-ink mb-2.5">{title}</h2>
              <p className="text-sm text-stone leading-relaxed flex-1">{desc}</p>
              <span className="mt-4 flex items-center gap-1.5 text-navy text-sm font-semibold">
                Explore
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="ink" pad="tight">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['Not on the list?', 'Sector experience matters less than whether we understand your workflow. Ask — we will tell you honestly if it is outside what we know.'],
            ['Regulated environment?', 'Several of these sectors carry hard compliance constraints. We design to yours rather than shipping a generic configuration.'],
            ['Already have a platform?', 'Most of our work starts on an instance somebody else built. That is normal, and the first step is an honest audit.'],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-display text-xl mb-2 text-onink">{t}</div>
              <p className="text-sm leading-relaxed text-onink-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        headline="Tell us about"
        accent="your sector."
        sub="Describe the process that keeps breaking. We'll come back within 48 hours with an approach and the reasoning behind it."
        primary={{ label: 'Start a project', href: '/get-started' }}
        secondary={{ label: 'Ask our agent', href: '/agent' }}
      />
    </>
  );
}
