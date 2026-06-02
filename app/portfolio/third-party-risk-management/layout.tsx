import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow TPRM — Third-Party Risk Management | ifBash',
  description: 'Take control of the third-party risk lifecycle from onboarding to retirement.',
  keywords: [
    'ServiceNow TPRM',
    'third-party risk management',
    'vendor risk',
    'supplier risk',
    'concentration risk',
    'risk intelligence',
    'VRM'
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow TPRM — Third-Party Risk Management | ifBash',
    description: 'Take control of the third-party risk lifecycle from onboarding to retirement.',
    url: 'https://ifbash.com/portfolio/third-party-risk-management',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/portfolio/third-party-risk-management' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
