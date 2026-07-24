import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('crm-customer-experience')!;
  return (
    <ServicePage
      entry={entry}
      headline="One thread per customer,"
      accent="across every channel."
      tags={["CSM","Sales","Field Service"]}
    />
  );
}
