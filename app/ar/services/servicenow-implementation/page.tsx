import type { Metadata } from 'next';
import { ArPage } from '@/components/site/ar-page';
import { ar } from '@/lib/i18n/ar';
import { alternatesForAr } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: ar.servicenow.title,
  description: ar.servicenow.description,
  alternates: alternatesForAr('/ar/services/servicenow-implementation'),
};

export default function Page() {
  return (
    <ArPage
        eyebrow={ar.servicenow.eyebrow}
        headline={ar.servicenow.headline}
        accent={ar.servicenow.accent}
        sub={ar.servicenow.sub}
    />
  );
}
