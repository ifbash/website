import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow App Engine — Low-Code Application Development | ifBash',
  description: 'Reimagine every process as a digital workflow. Low-code, high velocity. AI-powered development that scales.',
  keywords: [
    'ServiceNow App Engine',
    'low-code development',
    'custom apps',
    'Creator Studio',
    'Now Assist',
    'workflow automation',
    'citizen development'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow App Engine — Low-Code Application Development | ifBash',
    description: 'Reimagine every process as a digital workflow. Low-code, high velocity. AI-powered development that scales.',
    url: 'https://ifbash.com/portfolio/app-engine',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/app-engine' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
