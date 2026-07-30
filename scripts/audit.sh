#!/usr/bin/env bash
#
# Content and design audit. Exits non-zero if any check fires.
#
# Two classes of regression this catches:
#   1. Truth policy — claims we cannot evidence (metrics, money, partner tiers,
#      invented client names, delivery durations) creeping back into copy.
#   2. Design drift — colours and token names from a retired palette surviving a
#      recolour, including the rgba() decimal forms that hex greps miss.
# Plus a redirect-chain check, because a redirect pointing at another redirect
# leaks link equity on every hop.
#
# Run it before shipping a content change; CI runs it on every push and PR.
#
# NOTE ON `grep -o`: these checks deliberately do NOT use -o. The exclusion
# lists below match words like `width:` and `gradient(` that sit on the line
# *outside* the quoted string, so -o would strip away the very context they
# test and every CSS value would report as a prose claim.

set -uo pipefail

cd "$(dirname "$0")/.." || exit 1

SCAN_DIRS=(app components lib)
CODE=(--include=*.tsx --include=*.ts)
STYLED=(--include=*.tsx --include=*.ts --include=*.css)

FAILURES=0

if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then
  RED=$'\033[31m'; GREEN=$'\033[32m'; DIM=$'\033[2m'; OFF=$'\033[0m'
else
  RED=''; GREEN=''; DIM=''; OFF=''
fi

# Drop whole-line comments. A retired hex quoted in a JSDoc block that explains
# why it was retired is documentation, not shipped CSS — lib/design.ts and
# components/site/page-hero.tsx both do exactly this. Anchored at the start of
# the line's content, so `color: '#4f46e5' // old` is still caught.
strip_comments() {
  grep -vE ':[0-9]+:[[:space:]]*(\*|//|/\*)'
}

# report <label> <hits>
report() {
  local label="$1" hits="$2"
  if [ -n "$hits" ]; then
    printf '%sFAIL%s  %s\n' "$RED" "$OFF" "$label"
    printf '%s\n' "$hits" | sed 's/^/        /'
    FAILURES=$((FAILURES + 1))
  else
    printf '%s ok %s  %s\n' "$GREEN" "$OFF" "$label"
  fi
}

printf '%sTruth policy%s\n' "$DIM" "$OFF"

# Percentages and metrics in prose. Excludes CSS: gradient stops, transparency,
# dimension and transform values, and Tailwind arbitrary widths like w-[95%].
report "no unevidenced percentages in copy" "$(
  grep -rnE "'[^']*[0-9]{1,3}[[:space:]]*%[^']*'" "${SCAN_DIRS[@]}" "${CODE[@]}" \
    | strip_comments \
    | grep -viE "gradient|transparent|rgba|hsl|width|height|scale|translate|w-\[|calc|vw|vh"
)"

# Money and scale claims: "$40M saved", "5,000+ clients".
MONEY=$'\'[^\']*(\\$[0-9][0-9.,]*[[:space:]]*(M|K|million|billion)|[0-9,]{3,}\\+ (clients|customers|users|branches|go-lives))[^\']*\''
report "no money or headcount claims" "$(
  grep -rnE "$MONEY" "${SCAN_DIRS[@]}" "${CODE[@]}" | strip_comments
)"

# Partner tiers and awards we do not hold. Excludes denials ("we are not an
# official ServiceNow partner") and FAQ questions — neither is a claim. Those
# denials are the policy working: app/company/about-us/page.tsx, app/llms.txt,
# and the claude-ai-engineering and servicenow-implementation FAQs all rely on
# them. The gap between `not` and the article allows markdown emphasis, since
# llms.txt writes it as `**not** an official ServiceNow partner`.
report "no partner-tier or award claims" "$(
  grep -rniE "elite partner|partner of the year|official (servicenow|anthropic) partner|certified partner" \
    "${SCAN_DIRS[@]}" "${CODE[@]}" \
    | strip_comments \
    | grep -viE "\bnot\b[^[:alnum:]]{0,4}(an?|the)\b|\baren't\b|\bq:[[:space:]]*'|\?'"
)"

# Client names invented for earlier drafts of the portfolio.
report "no invented client names" "$(
  grep -rnE "Global (Technology|Financial|Life Sciences|Healthcare)|Fortune 500|Leading Healthcare|North American|regional bank with" \
    "${SCAN_DIRS[@]}" | strip_comments
)"

# Delivery windows we cannot evidence, e.g. '6–8 weeks'.
# The dashes are an alternation, NOT a bracket class. En- and em-dash are
# multibyte UTF-8, and with LANG unset (the default in Git Bash and on CI
# runners) a bracket class degrades to matching their individual bytes, so
# `[–—-]` never matches a real en-dash. Alternation compares byte sequences and
# works in any locale.
DURATION=$'\'[^\']*[0-9]+[[:space:]]*(–|—|-)[[:space:]]*[0-9]+[[:space:]]*(weeks|months)[^\']*\''
report "no unevidenced delivery durations" "$(
  grep -rnE "$DURATION" "${SCAN_DIRS[@]}" "${CODE[@]}" | strip_comments
)"

printf '\n%sDesign drift%s\n' "$DIM" "$OFF"

report "no indigo or violet (retired 2026-07)" "$(
  grep -rniE "#07071a|#4f46e5|#7c3aed|(indigo|violet)-[0-9]" "${SCAN_DIRS[@]}" "${STYLED[@]}" \
    | strip_comments
)"

report "no terracotta or pine (superseded)" "$(
  grep -rniE "C4553B|E8A183|FAF7F2|#17150F|E8E3D8|14584C" "${SCAN_DIRS[@]}" "${STYLED[@]}" \
    | strip_comments
)"

# Navy + mulberry + the warm neutrals, retired 2026-07-25 for sea/sky.
RETIRED_HEX="1B3A5C|12293F|3D6A94|7C9AB8|E9EFF5|D6E2EE|7D2E55|5E2140|C98BA8|F7EAF1"
RETIRED_HEX="$RETIRED_HEX|EFD8E4|FAF8F4|F4F1EA|141210|2A2721|4A463C|6B6659|757064|918D81"
RETIRED_HEX="$RETIRED_HEX|E7E2D9|EDE8DE|F3F0E9|A39C8B|8C8472|2E2921|221E17|818cf8|0d0d20"
report "no navy, mulberry or warm neutrals" "$(
  grep -rniE "$RETIRED_HEX" "${SCAN_DIRS[@]}" "${STYLED[@]}" | strip_comments
)"

# Token names renamed navy->sea, mulberry->sky, stone->slate.
#
# BLIND SPOT, deliberate: this matches Tailwind CLASSES only. The retired names
# also survive as component PROP VALUES — `<Accented accent="mulberry">` in three
# pages and `<Track tone="navy">` in components/workflow-compare.tsx, with the
# prop types declaring 'navy' | 'mulberry' in display-heading.tsx and
# workflow-compare.tsx.
#
# Those are NOT drift and must not be "fixed" by a sweep: both components map
# 'navy' -> bg-sea/text-sea and 'mulberry' -> bg-sky/text-sky, so the rendered
# colour is correct. Keeping the prop API stable through the 2026-07-25 recolour
# was a deliberate call to avoid touching every call site — see the comment at
# the top of components/site/display-heading.tsx.
#
# The risk this note exists to prevent: reading `accent="mulberry"` and
# concluding mulberry is still a live colour. If the props are ever renamed to
# sea/sky, delete this paragraph and widen the pattern below to cover
# (accent|tone)="(navy|mulberry|stone)" so real drift is caught again.
report "no retired token names" "$(
  grep -rnE "\b(text|bg|border|from|to|ring|shadow|fill|stroke)-(navy|mulberry|stone)\b" \
    "${SCAN_DIRS[@]}" "${CODE[@]}" | strip_comments
)"

# The blind spot that mattered: two dead colours survived every hex sweep as
# rgba() decimals and were only found by reading files. Checking the decimal
# form caught 20 more files during the 2026-07-25 recolour.
DEAD_RGBA="rgba?\([[:space:]]*79,[[:space:]]*70,[[:space:]]*229"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*124,[[:space:]]*58,[[:space:]]*237"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*20,[[:space:]]*88,[[:space:]]*76"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*196,[[:space:]]*85,[[:space:]]*59"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*7,[[:space:]]*7,[[:space:]]*26"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*27,[[:space:]]*58,[[:space:]]*92"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*125,[[:space:]]*46,[[:space:]]*85"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*20,[[:space:]]*18,[[:space:]]*16"
DEAD_RGBA="$DEAD_RGBA|rgba?\([[:space:]]*124,[[:space:]]*154,[[:space:]]*184"
report "no retired palettes as rgb/rgba decimals" "$(
  grep -rnE "$DEAD_RGBA" "${SCAN_DIRS[@]}" "${STYLED[@]}" | strip_comments
)"

printf '\n%sRouting%s\n' "$DIM" "$OFF"

# A redirect whose destination is itself a redirect source is a two-hop chain.
report "no redirect chains" "$(
  node -e "
    const c = require('./next.config.js');
    Promise.resolve(c.redirects()).then((r) => {
      const sources = new Set(r.map((x) => x.source));
      r.filter((x) => sources.has(x.destination))
       .forEach((x) => console.log(\`CHAIN: \${x.source} -> \${x.destination}\`));
    });
  "
)"

printf '\n'
if [ "$FAILURES" -gt 0 ]; then
  printf '%s%d check(s) failed.%s See the excluded-by-design notes in this script\n' \
    "$RED" "$FAILURES" "$OFF"
  printf 'before adding an exclusion — a real violation and a false positive look alike.\n'
  exit 1
fi

printf '%sAll checks passed.%s\n' "$GREEN" "$OFF"
