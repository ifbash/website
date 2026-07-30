import React from 'react';

/**
 * JSON-LD schema builders.
 *
 * Server components on purpose. This file used to be `'use client'` for a
 * `usePathname()` call in BreadcrumbSchema whose result was never read — dead
 * code that shipped these components to the browser for no reason. Structured
 * data only needs to exist in the HTML, so none of it belongs in the client
 * bundle.
 */

/**
 * One canonical node for the company, referenced by every Service as its
 * provider. Without a shared @id Google sees a separate anonymous organisation
 * per page instead of one entity with many services.
 */
export const SITE_URL = 'https://ifbash.com';
export const ORG_ID = `${SITE_URL}/#organization`;

/**
 * BreadcrumbList JSON-LD schema for SEO.
 *
 * Use on inner pages to help Google show rich breadcrumb snippets.
 * Supply items as an array of { label, href } from root to current page.
 *
 * Example:
 *   <BreadcrumbSchema items={[
 *     { label: 'Services', href: '/services' },
 *     { label: 'AI Agents', href: '/services/ai-agents' },
 *   ]} />
 */

export function BreadcrumbSchema({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ifbash.com',
      },
      ...items.map(({ label, href }, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: label,
        item: `https://ifbash.com${href}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service JSON-LD for a commercial offering page.
 *
 * WHY: the ServiceNow service pages and portfolio product pages carried only
 * FAQPage schema. The homepage listed them inside an OfferCatalog, but no page
 * declared *itself* as a service — so a query like "ServiceNow implementation
 * services" had no structured entity to match. These are the highest
 * commercial-intent pages on the site, which makes it the gap worth closing
 * first.
 *
 * TRUTH POLICY: this emits only facts already on the page — name, description,
 * URL, and the provider identity. No aggregateRating (we have no reviews to
 * cite), no offers with prices, no award or partner properties. Adding a
 * rating Google could not verify is both a policy violation and a manual-action
 * risk.
 */
export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  category,
}: {
  name: string;
  description: string;
  /** Absolute URL of this page. */
  url: string;
  /** What kind of service this is, e.g. 'ServiceNow Implementation'. */
  serviceType: string;
  /** Optional grouping, e.g. 'IT Service & Operations'. */
  category?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    ...(category ? { category } : {}),
    // Points at the single Organization node declared on the homepage.
    provider: { '@id': ORG_ID },
    // Matches `serviceArea: 'Global'` on that Organization. Delivery is remote
    // with on-site travel where an engagement needs it — see /engage.
    areaServed: 'Worldwide',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * HowTo JSON-LD schema for process pages.
 * Use on /engage, /services/servicenow-implementation, etc.
 */
export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
