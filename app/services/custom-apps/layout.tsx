import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ServiceNow Custom App Development',
  description: 'Build powerful custom applications on the ServiceNow platform. ifBash develops bespoke AI-powered workflows, integrations, and apps using App Engine, Flow Designer, and Now Assist.',
  keywords: [
    'ServiceNow custom app development', 'ServiceNow App Engine', 'ServiceNow custom applications',
    'ServiceNow low-code development', 'ServiceNow workflow development',
    'ServiceNow integration development', 'ServiceNow custom solutions',
    'ServiceNow AI app development',
  ],
  openGraph: {
    title: 'ServiceNow Custom App Development | ifBash',
    description: 'Build bespoke AI-powered apps on ServiceNow. App Engine, Flow Designer, and Now Assist development from certified consultants.',
    url: 'https://ifbash.com/services/custom-apps',
  },
  alternates: { canonical: 'https://ifbash.com/services/custom-apps' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
