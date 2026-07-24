import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web & Mobile App Development — AI-Native Digital Products',
  description:
    'ifBash designs and builds websites, web apps, and iOS/Android mobile apps — AI-native from day one, with assistants and automation built on Claude where they add value.',
  alternates: { canonical: 'https://ifbash.com/services/web-mobile-development' },
  keywords: [
    'web development agency', 'mobile app development', 'Next.js development', 'AI-native apps',
    'website development India', 'iOS Android app development', 'product design and development',
  ],
};

export default function WebMobileDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
