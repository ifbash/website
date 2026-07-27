'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname() || '/';

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
