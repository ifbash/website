import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Talent Development — Skills Intelligence | ifBash',
  description: 'Gain insights into workforce skills. Empower people to own their growth with AI and skills intelligence.',
  keywords: [
    'ServiceNow talent development',
    'skills intelligence',
    'career hub',
    'manager hub',
    'opportunity marketplace',
    'workforce planning'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Talent Development — Skills Intelligence | ifBash',
    description: 'Gain insights into workforce skills. Empower people to own their growth with AI and skills intelligence.',
    url: 'https://ifbash.com/portfolio/talent-development',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/talent-development' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
