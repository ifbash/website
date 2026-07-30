import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Engage — Discovery Sprints, Fixed-Scope Builds, Retainers',
  description:
    'The three ways we work with clients: a paid discovery sprint, a fixed-scope build, and an ongoing retainer. How we scope, how we price, what you own, and how engagements end.',
  keywords: [
    'consulting engagement model', 'discovery sprint', 'fixed scope development',
    'development retainer', 'software project pricing', 'how we work',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'How We Engage | ifBash',
    description:
      'Discovery sprint, fixed-scope build, retainer. How we scope, how we price, and what you own.',
    url: 'https://ifbash.com/engage',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — How We Engage' }],
  },
  alternates: { canonical: 'https://ifbash.com/engage' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
