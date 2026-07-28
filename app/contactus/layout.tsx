import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — A Written Reply Within One Business Day',
  description:
    'Talk to ifBash about ServiceNow delivery, AI agents, or a web & mobile build. Tell us where you are today — you get a specific, written reply within one business day.',
  keywords: [
    'contact ifBash', 'ServiceNow consulting contact', 'AI agent consultation',
    'web development inquiry', 'ServiceNow partner contact',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'Contact Us — A Written Reply Within One Business Day | ifBash',
    description:
      'Tell us where you are today. You get a specific, written reply within one business day.',
    url: 'https://ifbash.com/contactus',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'ifBash — ServiceNow, AI Agents, Web & Mobile' }],
  },
  alternates: { canonical: 'https://ifbash.com/contactus' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
