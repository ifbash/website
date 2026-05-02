import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow for Telecommunications',
  description: 'Optimise telco operations with ServiceNow and AI. BSS/OSS integration, network service management, AI-powered fault resolution, and customer experience automation for telecoms providers.',
  keywords: [
    'ServiceNow telecommunications', 'ServiceNow for telecoms', 'telecom ServiceNow implementation',
    'ServiceNow BSS OSS', 'telecom AI automation', 'ServiceNow network management',
    'telecom customer experience ServiceNow', 'telco ServiceNow consulting',
  ],
  openGraph: {
    title: 'ServiceNow for Telecommunications | ifBash',
    description: 'Optimise telco operations with ServiceNow AI. BSS/OSS integration, network management, and AI-powered customer experience.',
    url: 'https://ifbash.com/industries/telecommunications',
  },
  alternates: { canonical: 'https://ifbash.com/industries/telecommunications' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
