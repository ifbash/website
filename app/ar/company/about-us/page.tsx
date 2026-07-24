import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.about.title,
  description: ar.about.description,
  alternates: alternatesForAr('/ar/company/about-us'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.about.eyebrow}
        headline={ar.about.headline}
        accent={ar.about.accent}
        sub={ar.about.sub}
        items={ar.about.principles}
        itemsEyebrow={ar.about.principlesEyebrow}
        note={ar.about.disclosure}
    />
  );
}
