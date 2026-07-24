import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.services.title,
  description: ar.services.description,
  alternates: alternatesForAr('/ar/services'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.services.eyebrow}
        headline={ar.services.headline}
        accent={ar.services.accent}
        sub={ar.services.sub}
    />
  );
}
