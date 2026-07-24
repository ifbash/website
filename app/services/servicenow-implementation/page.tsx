import { ServicePage } from '@/components/site';
import { getServiceEntry } from '@/lib/service-data';

export default function Page() {
  const entry = getServiceEntry('servicenow-implementation')!;
  return (
    <ServicePage
      entry={entry}
      headline="ServiceNow, live and adopted"
      accent="not just configured."
      tags={["Implementation","Integration","Adoption"]}
    />
  );
}
