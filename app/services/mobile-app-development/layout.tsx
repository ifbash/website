import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development — iOS & Android, AI Inside',
  description:
    'iOS and Android apps built from one codebase: native feel, offline-capable, store-ready, and shipped with AI assistants and agents inside from day one.',
  keywords: [
    'mobile app development', 'iOS app development', 'Android app development',
    'cross-platform apps', 'React Native development', 'app store deployment',
    'AI mobile app', 'enterprise mobile apps',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'Mobile App Development — iOS & Android | ifBash',
    description:
      'One codebase, both platforms, AI inside from day one. Designed, built, and shipped to the stores.',
    url: 'https://ifbash.com/services/mobile-app-development',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — Mobile App Development' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/mobile-app-development' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
