import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ifBash | The Story Behind 1,500+ ServiceNow Transformations',
  description: 'Three ServiceNow architects started ifBash in 2016 to deliver faster, more honest consulting. 9 years later: 1,500+ implementations, 50+ consultants, 25+ countries, zero failed launches.',
  keywords: [
    'about ifBash', 'ifBash story', 'ServiceNow consulting partner',
    'ServiceNow partner Hyderabad', 'ServiceNow implementation company India',
    'ServiceNow Elite Partner', 'agentic AI consulting', 'ifBash team',
  ],
  openGraph: {
    title: 'About ifBash | 1,500+ ServiceNow Transformations Since 2016',
    description: 'Founded by three architects who wanted to do consulting differently. 1,500+ go-lives, 98% retention, global team.',
    url: 'https://ifbash.com/company/about-us',
  },
  alternates: { canonical: 'https://ifbash.com/company/about-us' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
