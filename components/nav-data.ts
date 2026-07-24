// Single source of truth for header + footer navigation.
// Structured around the three practices, ServiceNow listed first as the
// proven one. Do not duplicate these lists in components.
import type { LucideIcon } from 'lucide-react';
import {
  Settings, Users, BarChart3, Shield, Workflow, Building, GraduationCap, HeartPulse,
  MonitorSmartphone, Briefcase, Layers, Target, FileText, CloudLightning, Car, Factory,
  ShoppingBag, Bolt, Landmark, MapPin, Wrench, BookOpen, CalendarCheck, Database, Star,
  Info, Mic, BrainCircuit, Zap, Bot, Smartphone, Globe, Sparkles, Handshake,
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  /** Optional one-liner shown in mega-menus. */
  note?: string;
}

export const slug = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ── The three practices ─────────────────────────────────────────────
// Drives the strip above the header and the top-level nav.
export interface Practice {
  label: string;
  href: string;
  blurb: string;
}

export const practices: Practice[] = [
  { label: 'ServiceNow', href: '/services', blurb: 'Implement, extend, and run the platform.' },
  { label: 'AI & Agents', href: '/services/ai-agents', blurb: 'Agents that do the work, built on Claude.' },
  { label: 'Web & Mobile', href: '/services/web-mobile-development', blurb: 'Products shipped end to end.' },
];

// ── ServiceNow practice ─────────────────────────────────────────────
export const servicenowServices: NavItem[] = [
  { title: 'ServiceNow Implementation', href: '/services/servicenow-implementation', icon: Settings },
  { title: 'Agentic AI & Automation', href: '/services/ai-automation', icon: Zap },
  { title: 'CRM & Customer Experience', href: '/services/crm-customer-experience', icon: HeartPulse },
  { title: 'Managed Services', href: '/services/managed-services-support', icon: Shield },
  { title: 'Custom App Development', href: '/services/custom-apps', icon: Layers },
  { title: 'Digital Transformation', href: '/services/digital-transformation', icon: Workflow },
];

// ── AI & Agents practice ────────────────────────────────────────────
export const aiAgentsItems: NavItem[] = [
  { title: 'AI Agents', href: '/services/ai-agents', icon: Bot, note: 'Chat & workflow agents' },
  { title: 'Voice Agents', href: '/services/voice-agents', icon: Mic, note: 'Inbound & outbound calls' },
  { title: 'AI Engineering on Claude', href: '/services/claude-ai-engineering', icon: BrainCircuit, note: 'Knowledge systems & evals' },
  { title: 'ServiceNow AI Automation', href: '/services/ai-automation', icon: Zap, note: 'Now Assist & virtual agent' },
  { title: 'Try the live agent', href: '/agent', icon: Sparkles, note: 'Talk to one right now' },
];

// ── Web & Mobile practice ───────────────────────────────────────────
export const webMobileItems: NavItem[] = [
  { title: 'Website Development', href: '/services/website-development', icon: Globe, note: 'Next.js sites & web apps' },
  { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: Smartphone, note: 'iOS & Android' },
  { title: 'Web & Mobile Overview', href: '/services/web-mobile-development', icon: MonitorSmartphone, note: 'How the practice works' },
];

// ── Cross-practice ──────────────────────────────────────────────────
export const workItems: NavItem[] = [
  { title: 'Our Work & Demos', href: '/work', icon: Star, note: 'What we have actually built' },
  { title: 'How We Engage', href: '/engage', icon: Handshake, note: 'Sprints, builds, retainers' },
];

export interface PortfolioCategory {
  label: string;
  items: { title: string; icon: LucideIcon }[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    label: 'IT & Digital Operations',
    items: [
      { title: 'IT Service Management', icon: Settings },
      { title: 'IT Operations Management', icon: BarChart3 },
      { title: 'IT Asset Management', icon: Database },
      { title: 'Enterprise Architecture', icon: Building },
      { title: 'Service Operations Workspace', icon: MonitorSmartphone },
      { title: 'Strategic Portfolio Management', icon: Target },
      { title: 'Digital End-User Experience', icon: MonitorSmartphone },
      { title: 'Cloud Governance Suite', icon: CloudLightning },
      { title: 'ServiceNow Cloud Observability', icon: CloudLightning },
      { title: 'Operational Technology Management', icon: Wrench },
    ],
  },
  {
    label: 'AI & Automation',
    items: [
      { title: 'Integration Hub', icon: Layers },
      { title: 'App Engine', icon: Layers },
    ],
  },
  {
    label: 'CRM & Customer',
    items: [
      { title: 'Customer Service Management', icon: HeartPulse },
      { title: 'Field Service Management', icon: MapPin },
      { title: 'Sales and Order Management', icon: BarChart3 },
      { title: 'Sales and Order Management for Technology Providers', icon: BarChart3 },
      { title: 'Sales and Order Management for Telecommunications', icon: BarChart3 },
      { title: 'Configure, Price, Quote', icon: Briefcase },
      { title: 'Technology Provider Service Management', icon: MonitorSmartphone },
      { title: 'Telecommunications Service Management', icon: MonitorSmartphone },
      { title: 'Financial Services Operations', icon: Briefcase },
      { title: 'Healthcare and Life Sciences Service Management', icon: HeartPulse },
      { title: 'Public Sector Digital Services', icon: Landmark },
    ],
  },
  {
    label: 'Risk & Security',
    items: [
      { title: 'Security Operations', icon: Shield },
      { title: 'Security Incident Response', icon: Shield },
      { title: 'Vulnerability Response', icon: Shield },
      { title: 'Threat Intelligence Security Center', icon: Shield },
      { title: 'Integrated Risk Management', icon: Shield },
      { title: 'Third-Party Risk Management', icon: Shield },
      { title: 'Security Posture Control', icon: Shield },
      { title: 'Privacy Management', icon: FileText },
    ],
  },
  {
    label: 'HR & Workforce',
    items: [
      { title: 'HR Service Delivery', icon: Users },
      { title: 'Talent Development', icon: GraduationCap },
      { title: 'Legal Service Delivery', icon: FileText },
      { title: 'Workplace Service Delivery', icon: Building },
    ],
  },
  {
    label: 'Finance & Supply Chain',
    items: [
      { title: 'Accounts Payable Operations', icon: BarChart3 },
      { title: 'Sourcing and Procurement Operations', icon: Briefcase },
      { title: 'Supplier Lifecycle Operations', icon: Layers },
    ],
  },
];

// ── Industries ──────────────────────────────────────────────────────
export const industryItems: NavItem[] = [
  { title: 'Automotive', href: '/industries/automotive-manufacturing', icon: Car },
  { title: 'Manufacturing', href: '/industries/manufacturing-solutions', icon: Factory },
  { title: 'Consumer Goods', href: '/industries/consumer-goods-retail', icon: ShoppingBag },
  { title: 'Technology', href: '/industries/technology-software-companies', icon: MonitorSmartphone },
  { title: 'Public Sector', href: '/industries/public-sector-government', icon: Landmark },
  { title: 'Healthcare', href: '/industries/healthcare-providers', icon: HeartPulse },
  { title: 'Life Sciences', href: '/industries/life-sciences-pharma', icon: HeartPulse },
  { title: 'Retail', href: '/industries/retail-ecommerce', icon: ShoppingBag },
  { title: 'Telecom', href: '/industries/telecommunications', icon: MonitorSmartphone },
  { title: 'Energy & Utilities', href: '/industries/energy-utilities', icon: Bolt },
];

// ── Company ─────────────────────────────────────────────────────────
export const companyItems: NavItem[] = [
  { title: 'About Us', href: '/company/about-us', icon: Info },
  { title: 'Our Work', href: '/work', icon: Star },
  { title: 'How We Engage', href: '/engage', icon: Handshake },
  { title: 'Careers', href: '/company/careers-servicenow-jobs', icon: Users },
  { title: 'News & Events', href: '/company/news-events-servicenow', icon: CalendarCheck },
  { title: 'Learning Center', href: '/learning-center-servicenow', icon: BookOpen },
];
