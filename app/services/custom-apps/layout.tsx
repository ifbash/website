import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Custom App Development — Built for Your Business, Not the Other Way Around',
  description: 'When off-the-shelf does not fit, we build exactly what you need — purpose-built on ServiceNow App Engine with native performance and full upgrade safety. Documented as built, and handed over in full.',
  keywords: [
    'ServiceNow custom app development', 'ServiceNow App Engine', 'ServiceNow custom applications',
    'ServiceNow low-code development', 'ServiceNow workflow development',
    'ServiceNow integration development', 'ServiceNow custom solutions',
    'ServiceNow AI app development',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'ServiceNow Custom App Development — Built for Your Business | ifBash',
    description: 'Purpose-built ServiceNow apps with native performance and full upgrade safety. Documented as built.',
    url: 'https://ifbash.com/services/custom-apps',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — ServiceNow & AI Consulting' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/custom-apps' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
