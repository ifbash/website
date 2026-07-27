import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield, Lock, FileCheck, Server, Eye, Users, Globe,
  ClipboardCheck, AlertTriangle, Clock, RefreshCw, Mail,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import {
  Section, PageHero, DisplayHeading, Eyebrow, Accented,
  CtaBand, FeatureGrid, FaqSection, PillLink
} from '@/components/site';
import type { Feature, Faq } from '@/components/site';

export const metadata: Metadata = {
  title: 'Trust, Security & Compliance — ifBash',
  description:
    'How ifBash protects client data: encryption, access controls, NDAs, background checks, compliance roadmap, and full transparency on subprocessors.',
  alternates: { canonical: 'https://ifbash.com/trust' },
};

const securityPillars: Feature[] = [
  {
    icon: Lock,
    title: 'Encryption everywhere',
    desc: 'AES-256 encryption at rest for all stored data. TLS 1.3 for data in transit. Client credentials and API keys are stored in encrypted vaults, never in source code.',
  },
  {
    icon: Eye,
    title: 'No data training',
    desc: 'Client data, conversations, and documents are never used to train AI models. Our Claude integration uses the API with zero-retention settings where available.',
  },
  {
    icon: Users,
    title: 'Background-checked team',
    desc: 'Every consultant who may access client systems or data undergoes background verification. Access is granted on a least-privilege basis and reviewed quarterly.',
  },
  {
    icon: FileCheck,
    title: 'NDA-first engagements',
    desc: 'We sign mutual NDAs before any scoping call that could reveal sensitive information. Your IP stays yours — repositories, prompts, and eval suites are handed over cleanly.',
  },
  {
    icon: Server,
    title: 'Isolated environments',
    desc: 'Client instances and data are logically separated. Development, staging, and production environments use distinct credentials and network segmentation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit trail by default',
    desc: 'Every action an agent takes is logged. Every configuration change is documented. You get full access to logs, runbooks, and change history from day one.',
  },
];

const subprocessors = [
  { name: 'Anthropic', purpose: 'Claude API — AI reasoning and agent responses', data: 'Conversation transcripts, no client PII unless explicitly shared', location: 'US (with zero-retention where available)' },
  { name: 'Vercel', purpose: 'Static site hosting and edge functions', data: 'Website content, form submissions, analytics', location: 'Global edge' },
  { name: 'ServiceNow', purpose: 'Platform implementation and managed services', data: 'Platform configuration, workflow data, incident records', location: 'Client instance — client-controlled' },
];

const complianceRoadmap = [
  { label: 'SOC 2 Type II', status: 'In progress', eta: 'Q1 2027', note: 'Audit scheduled with independent assessor' },
  { label: 'ISO 27001', status: 'Planned', eta: 'Q3 2027', note: 'Framework mapping complete; implementation underway' },
  { label: 'GDPR compliance', status: 'Active', eta: 'Live', note: 'Data processing agreements available on request' },
  { label: 'Background checks', status: 'Active', eta: 'Live', note: 'All client-facing staff verified annually' },
];

const faqs: Faq[] = [
  {
    q: 'Where is client data stored?',
    a: 'For ServiceNow work, data lives in your ServiceNow instance — we do not host it. For AI agents we build, conversation data is processed via the Claude API (US-based, with zero-retention settings) and stored only where you explicitly configure retention. Web form data is stored in Vercel edge infrastructure.',
  },
  {
    q: 'Do you train AI models on client data?',
    a: 'Never. We use Anthropic\'s API with zero-retention settings enabled where available. Your conversations, documents, and proprietary information are not used to improve any model, ours or Anthropic\'s.',
  },
  {
    q: 'What happens if there is a security incident?',
    a: 'We maintain an incident response plan with defined escalation paths. Client notification happens within 24 hours of confirmed breach. We conduct root cause analysis and share findings within 72 hours.',
  },
  {
    q: 'Can we audit your security practices?',
    a: 'Yes — we share our security questionnaire, subprocessors list, and incident response plan under NDA. For enterprise engagements, we accommodate third-party security assessments.',
  },
  {
    q: 'Who has access to our systems?',
    a: 'Only named engineers on your project, on a least-privilege basis. Access is provisioned individually, never shared. When an engagement ends, all access is revoked and documented.',
  },
  {
    q: 'How do you handle data deletion?',
    a: 'At engagement end, we delete or return all client data per your instruction. Destruction is confirmed in writing. Backups are purged according to agreed retention schedules.',
  },
];

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & Security"
        headline="We treat your data"
        accent="like it was ours."
        sub="Enterprise-grade security practices, transparent subprocessors, and a compliance roadmap you can verify. No vague assurances — specific commitments, in writing."
        primary={{ label: 'Request our security questionnaire', href: '/get-started' }}
        secondary={{ label: 'Email security@ifbash.com', href: 'mailto:security@ifbash.com' }}
      />

      {/* SECURITY PILLARS */}
      <Section tone="surface" divide>
        <div className="mb-12 max-w-2xl">
          <Eyebrow rule className="mb-4">Security by design</Eyebrow>
          <DisplayHeading as="h2" size="md">
            Six commitments we <Accented>actually enforce.</Accented>
          </DisplayHeading>
        </div>
        <FeatureGrid features={securityPillars} />
      </Section>

      {/* COMPLIANCE ROADMAP */}
      <Section tone="ink" pad="tight">
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule onInk className="mb-4">Compliance roadmap</Eyebrow>
          <DisplayHeading as="h2" size="sm" onInk>
            Where we are, and where we are headed.
          </DisplayHeading>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {complianceRoadmap.map(({ label, status, eta, note }) => (
            <div
              key={label}
              className="rounded-2xl border border-onink-line p-6"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className={`h-4 w-4 ${status === 'Active' ? 'text-green-400' : status === 'In progress' ? 'text-amber-400' : 'text-onink-faint'}`} />
                <span className={`text-xs font-semibold uppercase tracking-wide ${status === 'Active' ? 'text-green-400' : status === 'In progress' ? 'text-amber-400' : 'text-onink-faint'}`}>
                  {status}
                </span>
              </div>
              <h3 className="font-semibold text-onink mb-1">{label}</h3>
              <p className="text-xs text-onink-faint mb-3">Target: {eta}</p>
              <p className="text-sm text-onink-muted leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SUBPROCESSORS */}
      <Section tone="paper" divide>
        <div className="mb-10 max-w-2xl">
          <Eyebrow rule className="mb-4">Subprocessors</Eyebrow>
          <DisplayHeading as="h2" size="sm" className="mb-4">
            Who else touches your data, and why.
          </DisplayHeading>
          <p className="text-base text-slate leading-relaxed">
            We keep this list short and current. If we add a subprocessor that could access client data, we notify affected clients 30 days in advance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-hairline">
                <th className="py-3 pr-4 text-xs font-semibold uppercase tracking-wide text-slate">Vendor</th>
                <th className="py-3 pr-4 text-xs font-semibold uppercase tracking-wide text-slate">Purpose</th>
                <th className="py-3 pr-4 text-xs font-semibold uppercase tracking-wide text-slate">Data involved</th>
                <th className="py-3 text-xs font-semibold uppercase tracking-wide text-slate">Location</th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map(({ name, purpose, data, location }) => (
                <tr key={name} className="border-b border-hairline-soft">
                  <td className="py-3.5 pr-4 text-sm font-semibold text-ink-body">{name}</td>
                  <td className="py-3.5 pr-4 text-sm text-slate">{purpose}</td>
                  <td className="py-3.5 pr-4 text-sm text-slate">{data}</td>
                  <td className="py-3.5 text-sm text-slate">{location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* INCIDENT RESPONSE */}
      <Section tone="surface">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow rule className="mb-4">Incident response</Eyebrow>
            <DisplayHeading as="h2" size="sm" className="mb-5">
              What happens if something goes wrong.
            </DisplayHeading>
            <div className="space-y-4 text-base text-slate leading-relaxed">
              <p>
                We maintain a written incident response plan reviewed quarterly. Every consultant knows the escalation path.
              </p>
              <div className="space-y-3 mt-6">
                {[
                  { icon: AlertTriangle, title: 'Detection', desc: 'Automated monitoring + client reporting channels. PagerDuty for critical alerts.' },
                  { icon: Clock, title: 'Notification', desc: 'Client notified within 24 hours of confirmed incident. Initial assessment within 4 hours for P1.' },
                  { icon: RefreshCw, title: 'Resolution & RCA', desc: 'Fix deployed, then root cause analysis shared within 72 hours with preventive measures.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sea-tint flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-sea" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink-body text-sm">{title}</div>
                      <p className="text-sm text-slate leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-sea mb-5">
              Security contacts
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-ink-body">security@ifbash.com</div>
                  <p className="text-sm text-slate">For security questionnaires, audit requests, and incident reports.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-ink-body">Responsible disclosure</div>
                  <p className="text-sm text-slate">Found a vulnerability? Email security@ifbash.com with details. We respond within 48 hours and credit researchers who report responsibly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-sea shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-ink-body">Data residency</div>
                  <p className="text-sm text-slate">Client data stays in the region you specify where technically feasible. ServiceNow instances are region-bound by default.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-hairline">
              <PillLink href="mailto:security@ifbash.com" variant="outline" size="sm">
                Request full security pack <ArrowRight className="h-3.5 w-3.5" />
              </PillLink>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection
        faqs={faqs}
        heading="Security questions we hear a lot."
        askLabel="Ask our security team"
        askHref="mailto:security@ifbash.com"
      />

      <CtaBand
        headline="Need our"
        accent="security questionnaire?"
        sub="We share our full security pack — questionnaire, subprocessors list, incident response plan, and compliance roadmap — under NDA within one business day."
        primary={{ label: 'Request security pack', href: '/get-started' }}
        secondary={{ label: 'Email security@ifbash.com', href: 'mailto:security@ifbash.com' }}
      />
    </>
  );
}
