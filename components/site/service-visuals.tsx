import {
  Ticket, Bot, GitBranch, CheckCircle2, FileText, ArrowRight, ArrowDown,
  Globe, UserPlus, LifeBuoy, RefreshCw, Smartphone, Workflow, Database, Plug,
  Hand, MonitorCheck, Zap, Sparkles, Activity, Clock, TrendingUp,
} from 'lucide-react';
import * as React from 'react';

/**
 * Signature visuals — one distinct diagram per ServiceNow service page.
 * The six ServiceNow pages share the ServicePage template; this map is what
 * stops them looking identical. Each visual is a real explanatory diagram of
 * THAT service's shape, drawn with the brand tokens — not stock imagery.
 *
 * Frame style matches the site's demo panels (mono eyebrow, hairline border,
 * white surface). Diagrams are static by design: they explain, they don't
 * decorate.
 */

const LABEL = 'font-mono text-[10px] uppercase tracking-[0.14em] text-slate-light';

function Frame({ label, note, children }: { label: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8 shadow-[0_2px_24px_rgba(24,19,18,0.05)]">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <span className={LABEL}>{label}</span>
        {note && <span className="text-[12px] text-slate-faint hidden sm:block">{note}</span>}
      </div>
      {children}
    </div>
  );
}

/* ── 1. Implementation — the delivery track ─────────────────────────── */
function ImplementationVisual() {
  const stops = [
    { name: 'Scope', detail: 'Written plan, named people', done: true },
    { name: 'Configure', detail: 'Working config weekly', done: true },
    { name: 'Integrate', detail: 'SSO, email, your systems', done: true },
    { name: 'Migrate', detail: 'Rehearsed, then real', done: false },
    { name: 'Go-live', detail: 'Hypercare, then handover', done: false },
  ];
  return (
    <Frame label="How an implementation runs" note="Working configuration from the first phase — not slideware">
      <div className="grid sm:grid-cols-5 gap-3">
        {stops.map((s, i) => (
          <div key={s.name} className="relative">
            {i > 0 && (
              <div className={`hidden sm:block absolute top-5 -left-3 w-3 border-t-2 ${s.done || stops[i - 1].done ? 'border-sea-soft' : 'border-hairline'}`} />
            )}
            <div className={`rounded-xl border p-4 h-full ${s.done ? 'border-sea-strong bg-sea-tint/40' : 'border-hairline bg-paper'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-3 ${s.done ? 'bg-sea text-paper' : 'border-2 border-hairline text-slate-faint'}`}>
                {s.done ? <CheckCircle2 className="h-3.5 w-3.5" /> : <span className="text-[10px] font-mono">{i + 1}</span>}
              </div>
              <div className="text-sm font-semibold text-ink-body">{s.name}</div>
              <div className="text-[12px] text-slate-light mt-1 leading-snug">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ── 2. AI Automation — the agent loop ──────────────────────────────── */
function AutomationVisual() {
  const steps = [
    { icon: Ticket, name: 'Trigger', detail: 'Ticket created, email lands, record changes' },
    { icon: Bot, name: 'Agent reads', detail: 'Understands intent, impact, history' },
    { icon: GitBranch, name: 'Decides', detail: 'Route, approve, escalate — by your rules' },
    { icon: Zap, name: 'Acts', detail: 'Updates the platform, drafts the reply' },
    { icon: FileText, name: 'Logs', detail: 'Every decision auditable, every time' },
  ];
  return (
    <Frame label="What an automation actually is" note="A governed loop inside your platform — not a chatbot on the side">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {steps.map((s, i) => (
          <React.Fragment key={s.name}>
            {i > 0 && (
              <>
                <ArrowRight className="hidden lg:block h-4 w-4 text-sea self-center shrink-0" />
                <ArrowDown className="lg:hidden h-4 w-4 text-sea self-center shrink-0" />
              </>
            )}
            <div className="flex-1 rounded-xl border border-hairline bg-paper p-4">
              <s.icon className="h-5 w-5 text-sea mb-2.5" />
              <div className="text-sm font-semibold text-ink-body">{s.name}</div>
              <div className="text-[12px] text-slate-light mt-1 leading-snug">{s.detail}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Frame>
  );
}

/* ── 3. CRM & Customer Experience — the journey we wire up ──────────── */
function CrmVisual() {
  const stages = [
    { icon: Globe, name: 'Visit', desc: 'Anonymous → known' },
    { icon: UserPlus, name: 'Onboard', desc: 'First value fast' },
    { icon: LifeBuoy, name: 'Support', desc: 'Every channel, one record' },
    { icon: RefreshCw, name: 'Renew', desc: 'Health scored early' },
  ];
  return (
    <Frame label="One customer record, end to end" note="The build: every stage reads and writes the same record">
      <div className="relative">
        <div className="absolute top-6 left-6 right-6 border-t-2 border-dashed border-sea-strong hidden sm:block" />
        <div className="grid sm:grid-cols-4 gap-6 sm:gap-3 relative">
          {stages.map((s, i) => (
            <div key={s.name} className="flex sm:flex-col items-start sm:items-center gap-3 sm:text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 ${i === 2 ? 'bg-sea text-paper shadow-[0_4px_16px_rgba(178,58,43,0.3)]' : 'bg-sea-tint text-sea'}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-body">{s.name}</div>
                <div className="text-[12px] text-slate-light mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-wash px-4 py-3 text-[13px] text-slate leading-relaxed">
          <span className="font-semibold text-ink-body">Where most estates break:</span> support —
          the moment a customer talks to five systems that don&apos;t know each other.
          That is the first thing we wire to the platform.
        </div>
      </div>
    </Frame>
  );
}

/* ── 4. Custom Apps — the stack we build on ─────────────────────────── */
function CustomAppsVisual() {
  const layers = [
    { icon: Smartphone, name: 'Experience', detail: 'Web & mobile interfaces your people actually use', tone: 'bg-sea-tint/50 border-sea-strong' },
    { icon: Workflow, name: 'Workflow', detail: 'Approvals, SLAs, notifications — platform-native', tone: 'bg-paper border-hairline' },
    { icon: Plug, name: 'Integrations', detail: 'REST to the systems that stay', tone: 'bg-paper border-hairline' },
    { icon: Database, name: 'Data', detail: 'One table model, governed, reportable', tone: 'bg-paper border-hairline' },
  ];
  return (
    <Frame label="An app on the platform, not beside it" note="Custom UI where it earns its keep — platform plumbing underneath">
      <div className="space-y-2.5 max-w-2xl mx-auto">
        {layers.map((l, i) => (
          <div key={l.name} className={`flex items-center gap-4 rounded-xl border p-4 ${l.tone}`} style={{ marginLeft: `${i * 2}%`, marginRight: `${(layers.length - 1 - i) * 2}%` }}>
            <l.icon className={`h-5 w-5 shrink-0 ${i === 0 ? 'text-sea' : 'text-slate-light'}`} />
            <div className="min-w-0">
              <span className="text-sm font-semibold text-ink-body">{l.name}</span>
              <span className="text-[12px] text-slate-light ml-2 hidden sm:inline">{l.detail}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[12px] text-slate-faint mt-4">The custom layer is the top one. Everything below is ServiceNow doing what it already does well.</p>
    </Frame>
  );
}

/* ── 5. Digital Transformation — the staircase ──────────────────────── */
function TransformationVisual() {
  const steps = [
    { icon: Hand, name: 'Manual', desc: 'Email, spreadsheets, memory' },
    { icon: MonitorCheck, name: 'Digitized', desc: 'Forms and lists replace paper' },
    { icon: Zap, name: 'Automated', desc: 'The platform does the chasing' },
    { icon: Sparkles, name: 'Agentic', desc: 'Agents read, decide, draft' },
  ];
  return (
    <Frame label="Transformation is a staircase, not a leap" note="Each step pays for the next — we sequence it that way">
      <div className="flex items-end gap-3 h-56">
        {steps.map((s, i) => (
          <div key={s.name} className="flex-1 flex flex-col justify-end h-full">
            <div
              className={`rounded-t-xl border p-4 ${i === steps.length - 1 ? 'bg-sea text-paper border-sea' : 'bg-paper border-hairline'}`}
              style={{ height: `${34 + i * 22}%` }}
            >
              <s.icon className={`h-5 w-5 mb-2 ${i === steps.length - 1 ? 'text-sea-soft' : 'text-sea'}`} />
              <div className={`text-sm font-semibold ${i === steps.length - 1 ? 'text-paper' : 'text-ink-body'}`}>{s.name}</div>
              <div className={`text-[11px] mt-1 leading-snug hidden md:block ${i === steps.length - 1 ? 'text-sea-soft' : 'text-slate-light'}`}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-faint">
        <TrendingUp className="h-3.5 w-3.5 text-sea" />
        Most clients arrive at step one or two. Nobody needs to reach step four everywhere — only where it pays.
      </div>
    </Frame>
  );
}

/* ── 6. Managed Services — the ops picture ──────────────────────────── */
function ManagedServicesVisual() {
  const bars = [42, 38, 45, 30, 26, 22, 18]; // tickets closed per day, descending trend
  const stats = [
    { icon: Activity, k: 'Platform health', v: 'Watched daily' },
    { icon: Clock, k: 'Response', v: 'Same business day' },
    { icon: TrendingUp, k: 'Backlog trend', v: 'Down, week on week' },
  ];
  return (
    <Frame label="What 'managed' looks like on a Tuesday" note="Illustrative shape — your instance gets its real numbers">
      <div className="grid lg:grid-cols-5 gap-6 items-end">
        <div className="lg:col-span-3">
          <div className="flex items-end gap-2 h-36">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-sea-tint border border-sea-strong relative" style={{ height: `${h * 2.2}%` }}>
                <div className="absolute inset-x-0 bottom-0 rounded-t-md bg-sea/75" style={{ height: '55%' }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[11px] text-slate-faint font-mono">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
          <div className="mt-3 text-[12px] text-slate-light">Open tickets (light) vs resolved (solid) — the gap closing is the job.</div>
        </div>
        <div className="lg:col-span-2 space-y-3">
          {stats.map((s) => (
            <div key={s.k} className="flex items-center gap-3 rounded-xl border border-hairline bg-paper p-3.5">
              <s.icon className="h-4.5 w-4.5 h-5 w-5 text-sea shrink-0" />
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-slate-faint">{s.k}</div>
                <div className="text-sm font-semibold text-ink-body">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const VISUALS: Record<string, () => React.ReactElement> = {
  'servicenow-implementation': ImplementationVisual,
  'ai-automation': AutomationVisual,
  'crm-customer-experience': CrmVisual,
  'custom-apps': CustomAppsVisual,
  'digital-transformation': TransformationVisual,
  'managed-services-support': ManagedServicesVisual,
};

export function ServiceVisual({ slug }: { slug: string }) {
  const V = VISUALS[slug];
  return V ? <V /> : null;
}
