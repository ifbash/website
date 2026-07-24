#!/usr/bin/env node
/**
 * Draft generator for /insights.
 *
 * Writes to content/insights/_drafts/ ONLY. It never writes to the published
 * directory and never sets `published: true`. Publishing stays a deliberate
 * human act: review the draft, edit it, move it up a directory, flip the flag.
 *
 * That separation is the point. Google's scaled-content-abuse policy targets
 * mass-published AI text; AI-assisted drafting that a human actually reviews
 * is a different thing entirely. Keep it that way.
 *
 *   node scripts/draft-insight.mjs "why CMDB quality decides your agent rollout"
 *   node scripts/draft-insight.mjs "topic" --tags "ServiceNow,AI Agents"
 *
 * Requires ANTHROPIC_API_KEY.
 */

import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';

const DRAFTS = path.join(process.cwd(), 'content', 'insights', '_drafts');
const MODEL = process.env.CHAT_MODEL || 'claude-opus-4-8';

const args = process.argv.slice(2);
const topic = args.filter((a) => !a.startsWith('--'))[0];
const tagArg = args.indexOf('--tags');
const tags = tagArg > -1 && args[tagArg + 1] ? args[tagArg + 1].split(',').map((t) => t.trim()) : [];

if (!topic) {
  console.error('Usage: node scripts/draft-insight.mjs "<topic>" [--tags "A,B"]');
  process.exit(1);
}
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set. See .env.example.');
  process.exit(1);
}

const slug = topic
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .slice(0, 80);

// The house style. This is most of what keeps drafts from reading like SEO filler.
const SYSTEM = `You write for ifBash, a technology consultancy with three practices:
ServiceNow delivery, AI agents engineered on Claude, and web/mobile product development.

Voice and standards — these are hard rules:
- Concrete and mechanical. Explain how something works, not that it is "powerful" or "transformative".
- NEVER invent statistics, percentages, dollar figures, client names, case studies,
  timelines, or quotes. ifBash's site policy forbids unverifiable claims outright.
  If a number would help, describe the mechanism instead.
- ifBash is NOT an official ServiceNow partner and NOT an official Anthropic partner.
  Never imply otherwise.
- State real trade-offs and failure modes. An article that admits when the answer is
  "do less" is more credible than one that sells.
- No hype vocabulary: avoid "revolutionary", "game-changing", "unlock", "leverage",
  "seamless", "cutting-edge", "in today's fast-paced world".
- British-leaning spelling is fine. Write in plain sentences. Short paragraphs.
- Assume a technical reader who has seen vendor marketing and distrusts it.

Structure:
- Open with the actual problem in 2-3 sentences. No throat-clearing preamble.
- Use ## for sections, ### sparingly. 900-1400 words.
- Use lists where they genuinely help; prose otherwise.
- Close with an honest constraint or a decision framework, not a sales pitch.

Return ONLY the article body in Markdown, starting at the first paragraph.
Do NOT include frontmatter, and do NOT repeat the title as an H1.`;

const client = new Anthropic();

console.log(`Drafting: "${topic}"`);
console.log(`Model:    ${MODEL}`);

const msg = await client.messages.create({
  model: MODEL,
  max_tokens: 4000,
  system: SYSTEM,
  messages: [
    {
      role: 'user',
      content: `Write an ifBash Insights article on: ${topic}

Also give me, on the very first line and nothing else on that line, a one-sentence
meta description under 155 characters prefixed exactly with "DESCRIPTION: ".
Then a blank line, then the article body.`,
    },
  ],
});

const raw = msg.content.find((b) => b.type === 'text')?.text ?? '';
const descMatch = raw.match(/^DESCRIPTION:\s*(.+)$/m);
const description = descMatch ? descMatch[1].trim() : '';
const body = raw.replace(/^DESCRIPTION:.*$/m, '').trim();

const today = new Date().toISOString().slice(0, 10);
const title = topic.charAt(0).toUpperCase() + topic.slice(1);

const frontmatter = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
date: '${today}'
updated: '${today}'
author: ifBash
tags:
${(tags.length ? tags : ['Uncategorised']).map((t) => `  - ${t}`).join('\n')}
published: false
---

`;

fs.mkdirSync(DRAFTS, { recursive: true });
const out = path.join(DRAFTS, `${slug}.mdx`);
fs.writeFileSync(out, frontmatter + body + '\n', 'utf8');

console.log(`\nDraft written: ${path.relative(process.cwd(), out)}`);
console.log(`Words: ~${body.split(/\s+/).length}`);
console.log(`\nThis is NOT published. To publish:`);
console.log(`  1. Read it. Fix what is wrong. Check every factual claim.`);
console.log(`  2. Move it to content/insights/`);
console.log(`  3. Set published: true`);
