/**
 * Shared types and logic for the live ServiceNow triage demo.
 *
 * The demo shows what an agent does to an inbound ticket: read it, classify it,
 * set impact and urgency, route it, and draft a first response. It runs on the
 * visitor's own text, which is the whole point — a canned video proves nothing.
 *
 * Two deliberate design decisions:
 *
 * 1. **Priority is computed here, not by the model.** ServiceNow derives
 *    priority from an impact x urgency matrix. Asking an LLM to guess "P2"
 *    would be a worse demo AND wrong more often — anyone who administers the
 *    platform knows the matrix. The model judges impact and urgency; the code
 *    applies the matrix, exactly as the platform does.
 *
 * 2. **It degrades to a labelled simulation.** Without ANTHROPIC_API_KEY the
 *    route returns `simulated: true` and the heuristic below runs instead. The
 *    UI must say so plainly — the site's truth policy requires simulated demos
 *    to be labelled, and an unlabelled fake here would be exactly the kind of
 *    unverifiable proof this site removed everywhere else.
 */

export const CATEGORIES = [
  'Hardware',
  'Software',
  'Network',
  'Access',
  'Facilities',
  'Other',
] as const;

export type Category = (typeof CATEGORIES)[number];

/** 1 = High, 2 = Medium, 3 = Low — the ServiceNow convention. */
export type Level = 1 | 2 | 3;

export interface TriageResult {
  category: Category;
  subcategory: string;
  impact: Level;
  urgency: Level;
  assignmentGroup: string;
  isMajorIncident: boolean;
  sentiment: 'calm' | 'frustrated' | 'urgent';
  summary: string;
  draftReply: string;
  reasoning: string;
}

export interface TriageResponse {
  ok: boolean;
  simulated: boolean;
  result?: TriageResult;
  error?: string;
}

/**
 * The standard ServiceNow priority matrix. Impact down, urgency across.
 * This is platform behaviour, not a judgement call — which is why it lives in
 * code where it is auditable rather than in a prompt where it is not.
 */
const MATRIX: Record<Level, Record<Level, string>> = {
  1: { 1: 'P1', 2: 'P2', 3: 'P3' },
  2: { 1: 'P2', 2: 'P3', 3: 'P4' },
  3: { 1: 'P3', 2: 'P4', 3: 'P5' },
};

/**
 * Illustrative SLA targets for the demo only. These are a plausible default
 * policy, NOT a commitment ifBash makes — a visitor must not read "Respond
 * 15 min" as our response time. The UI labels the field "example policy".
 * Real targets come from the client's own service catalogue.
 */
const PRIORITY_META: Record<string, { label: string; sla: string }> = {
  P1: { label: 'Critical', sla: 'Respond 15 min · Resolve 4 h' },
  P2: { label: 'High', sla: 'Respond 30 min · Resolve 8 h' },
  P3: { label: 'Moderate', sla: 'Respond 4 h · Resolve 2 business days' },
  P4: { label: 'Low', sla: 'Respond 1 business day · Resolve 5 business days' },
  P5: { label: 'Planning', sla: 'Scheduled — no fixed resolution target' },
};

export function priorityFor(impact: Level, urgency: Level) {
  const code = MATRIX[impact][urgency];
  return { code, ...PRIORITY_META[code] };
}

export const LEVEL_LABEL: Record<Level, string> = { 1: 'High', 2: 'Medium', 3: 'Low' };

/** Sample tickets, so a visitor can see it work before writing anything. */
export const SAMPLE_TICKETS: { label: string; body: string }[] = [
  {
    label: 'Floor-wide outage',
    body: "Nobody on the 3rd floor can print. Started around 9am. We're trying to get month-end invoices out today and finance is escalating to me every ten minutes. I've restarted the printer twice.",
  },
  {
    label: 'New starter access',
    body: 'Hi, we have a new analyst starting Monday in the risk team. She needs the standard finance package, VPN, and read access to the reporting dashboards. No rush, just want it sorted before she arrives.',
  },
  {
    label: 'Ambiguous and angry',
    body: "This is the third time I'm raising this. The system is slow. Nobody has come back to me. It's affecting my whole team and honestly at this point I'm considering going to the CIO about it.",
  },
];

/**
 * Deterministic keyword classifier used when the live model is not configured.
 * Intentionally simple and intentionally labelled in the UI — it exists so the
 * demo is not dead on arrival, not to pass as the real thing.
 */
export function simulateTriage(text: string): TriageResult {
  const t = text.toLowerCase();
  const has = (...words: string[]) => words.some((w) => t.includes(w));

  // Access is tested BEFORE Network on purpose. An onboarding request often
  // mentions VPN in passing ("she needs the finance package, VPN, and reporting
  // access") and first-match ordering would file it with Network Operations
  // instead of IAM — which is the wrong queue and a bad look in the demo.
  const category: Category = has('print', 'laptop', 'monitor', 'device', 'hardware', 'screen')
    ? 'Hardware'
    : has('access', 'login', 'password', 'permission', 'account', 'starter', 'starting', 'onboard', 'joiner', 'leaver')
      ? 'Access'
      : has('vpn', 'network', 'wifi', 'connection', 'internet', 'slow')
        ? 'Network'
        : has('building', 'desk', 'office', 'aircon', 'facilities')
          ? 'Facilities'
          : 'Software';

  // Blast radius = an explicit scope word, OR a negation paired with a scope
  // noun somewhere in the ticket.
  //
  // Both halves are needed. Bare 'nobody' wrongly matched "nobody has come back
  // to me" (a complaint about response time, not scope). But requiring the
  // literal 'nobody can' then MISSED "Nobody on the 3rd floor can print" — the
  // headline sample ticket — and quietly downgraded it from P1 to P3. Neither
  // rule works alone; the pair does.
  const scopeNoun = /floor|team|department|office|building|everyone|site|branch/.test(t);
  const negatedMany = /\bnobody\b|\bno one\b|\bnone of us\b/.test(t) && scopeNoun;
  const manyAffected =
    has('everyone', 'whole team', 'whole floor', 'all of us', 'department', 'site-wide', 'company-wide') ||
    negatedMany;
  const timePressure = has('month-end', 'deadline', 'today', 'urgent', 'asap', 'escalat');
  const angry = has('third time', 'unacceptable', 'nobody has', 'still waiting', 'cio', 'complain');

  const impact: Level = manyAffected ? 1 : has('my team', 'we ') ? 2 : 3;
  const urgency: Level = timePressure ? 1 : angry ? 2 : 3;

  const groups: Record<Category, string> = {
    Hardware: 'Desktop Support',
    Software: 'Application Support',
    Network: 'Network Operations',
    Access: 'Identity & Access Management',
    Facilities: 'Workplace Services',
    Other: 'Service Desk',
  };

  const subcategories: Record<Category, string> = {
    Hardware: 'Peripherals',
    Access: has('starter', 'starting', 'onboard', 'joiner') ? 'Joiner provisioning' : 'Account & permissions',
    Network: 'Connectivity',
    Software: 'Application fault',
    Facilities: 'Workplace request',
    Other: 'Unclassified',
  };

  return {
    category,
    subcategory: subcategories[category],
    impact,
    urgency,
    assignmentGroup: groups[category],
    isMajorIncident: impact === 1 && urgency === 1,
    sentiment: angry ? 'frustrated' : timePressure ? 'urgent' : 'calm',
    summary: text.trim().split(/\s+/).slice(0, 12).join(' ') + '…',
    draftReply:
      'Thanks for raising this — I can see the impact and I have routed it to the right team. ' +
      'You will get an update from them shortly, and I have attached everything you told us so ' +
      'you will not need to repeat it.',
    reasoning:
      'Keyword rules only: matched on scope words for impact and time-pressure words for urgency.',
  };
}
