# Drafts

Generated drafts land here. Nothing in this directory is served by the site —
lib/insights.ts only reads content/insights/*.md and additionally requires
`published: true`.

The extension matters: the loader filters on `.md` (lib/insights.ts, the
`endsWith('.md')` in the readdir chain). A file saved as `.mdx` is skipped
silently — no error, no warning, it simply never appears on the site. This
README said `.mdx` until 2026-07-26, so anything drafted against the old
wording is in the wrong format.

To publish: review and edit, move the file up to content/insights/, then set
`published: true` in its frontmatter.
