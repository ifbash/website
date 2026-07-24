import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ifBash | The Story Behind Our ServiceNow Transformations',
  description: 'Three ServiceNow architects started ifBash in 2016 to deliver faster, more honest consulting. Senior-led delivery across enterprise environments worldwide.',
  keywords: [
    'about ifBash', 'ifBash story', 'ServiceNow consulting',
    'ServiceNow consulting Hyderabad', 'ServiceNow implementation company India',
    'ServiceNow platform specialists', 'agentic AI consulting', 'ifBash team',
  ],
  openGraph: {
    title: 'About ifBash | ServiceNow Transformations Since 2016',
    description: 'Founded by three architects who wanted to do consulting differently. Senior-led go-lives, global team.',
    url: 'https://ifbash.com/company/about-us',
  },
  alternates: { canonical: 'https://ifbash.com/company/about-us' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
