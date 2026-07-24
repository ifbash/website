import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('managed-services-support')!;
  return (
    <ServicePage
      entry={entry}
      headline="Someone who knows your instance,"
      accent="on the end of the line."
      tags={["24/7","Optimisation","Hypercare"]}
    />
  );
}
