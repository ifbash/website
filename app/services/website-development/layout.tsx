import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website & Web App Development — Next.js, Fast and SEO-Ready',
  description:
    'Websites and web applications built on Next.js and React: fast, accessible, SEO-ready, and AI-native from day one. The site you are reading is our own build.',
  keywords: [
    'website development', 'web app development', 'Next.js development agency',
    'React development', 'Core Web Vitals', 'technical SEO', 'headless CMS',
    'AI-native website',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'Website & Web App Development | ifBash',
    description:
      'Fast, SEO-ready sites and web apps on Next.js — with AI assistants built in, not bolted on.',
    url: 'https://ifbash.com/services/website-development',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — Website Development' }],
  },
  alternates: { canonical: 'https://ifbash.com/services/website-development' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
