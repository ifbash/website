import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — Live Demos You Can Test Right Now',
  description:
    'Rather than case studies you cannot verify, here is working software you can use: the voice agent, the chat agent, the callback agent, and this website itself. Simulated demos are labelled as such.',
  keywords: [
    'AI agency portfolio', 'AI agent demo', 'voice agent demo', 'Next.js portfolio',
    'ifBash work', 'live AI demo',
  ],
  openGraph: {
    type: 'website',
    siteName: 'ifBash',
    title: 'Our Work — Live Demos You Can Test Right Now | ifBash',
    description:
      'Working software you can use, not case studies you cannot verify.',
    url: 'https://ifbash.com/work',
    images: [{ url: '/images/logo.png', width: 400, height: 100, alt: 'ifBash — Our Work' }],
  },
  alternates: { canonical: 'https://ifbash.com/work' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
