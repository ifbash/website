'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Code, Rocket, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery',
    desc: 'A 30-minute call to understand your platform, pain points, and what success looks like.',
    color: '#4338CA',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Plan',
    desc: 'Written approach, sequence, team composition, and estimate — back within two working days.',
    color: '#4F46E5',
  },
  {
    icon: Code,
    step: '03',
    title: 'Build',
    desc: 'Weekly demos, async updates, and direct access to the engineers writing the code.',
    color: '#818CF8',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Ship',
    desc: 'Production launch with runbooks, training, and a managed-service handoff if you need it.',
    color: '#4338CA',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {STEPS.map(({ icon: Icon, step, title, desc, color }, i) => (
        <motion.div
          key={step}
          {...fadeUp(i * 0.12)}
          className="group relative rounded-2xl border border-hairline bg-surface p-6 transition-all duration-300 hover:border-sea-soft hover:shadow-[0_8px_30px_rgba(14,17,32,0.06)]"
        >
          {/* Step number */}
          <span
            className="absolute top-4 right-4 text-[2.5rem] font-bold leading-none opacity-[0.06] group-hover:opacity-[0.10] transition-opacity"
            style={{ color }}
          >
            {step}
          </span>

          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${color}15` }}
          >
            <Icon className="h-5 w-5" style={{ color }} />
          </div>

          <h3 className="font-display text-lg mb-2 text-ink">{title}</h3>
          <p className="text-[14px] leading-relaxed text-slate">{desc}</p>

          {/* Connector arrow (hidden on last item / mobile) */}
          {i < STEPS.length - 1 && (
            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-4 w-4 text-hairline" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
