import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.websiteDev.title,
  description: ar.websiteDev.description,
  alternates: alternatesForAr('/ar/services/website-development'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.websiteDev.eyebrow}
        headline={ar.websiteDev.headline}
        accent={ar.websiteDev.accent}
        sub={ar.websiteDev.sub}
    />
  );
}
