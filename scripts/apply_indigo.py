"""Executive Indigo rebrand: exact hex remap across token sources + components."""
import re, pathlib

MAP = {
    # ink family
    "#0B1417": "#0E1120", "#22333A": "#333A4E", "#3D5259": "#454B5E",
    # slate (cool grey)
    "#52696F": "#565C72", "#5C7278": "#60667C", "#7A9098": "#82879C",
    # sea (primary accent -> indigo)
    "#00707C": "#4338CA", "#005059": "#312E81", "#00939F": "#4F46E5",
    "#1FD3E3": "#818CF8", "#79D8E2": "#A5B4FC", "#C8E9EE": "#E0E7FF", "#A6DCE5": "#C7D2FE",
    # sky (secondary -> azure blue)
    "#0A6FB0": "#2563EB", "#075287": "#1E3A8A", "#1090D8": "#3B82F6",
    "#3FC6FF": "#60A5FA", "#86CDF2": "#93C5FD", "#CCE6F8": "#DBEAFE", "#AFD9F5": "#BFDBFE",
    # surfaces + hairlines
    "#EAF4F8": "#F4F5FA", "#D9EAF2": "#E8EAF6",
    "#CBE1E9": "#D8DBEC", "#DCEBF1": "#E4E6F2",
    # on-ink family
    "#E8F4F6": "#ECEEF8", "#9FB6BC": "#A2A8C0", "#7E969D": "#7E8399",
    "#1E2C31": "#23273D", "#15242A": "#181C2E",
    # stray warm accent in hero orb
    "#7FB3A5": "#A5B4FC",
}

FILES = [
    "tailwind.config.ts", "lib/design.ts", "app/globals.css",
    "components/calendar-booking.tsx", "components/footer.tsx", "components/header.tsx",
    "components/hero-background.tsx", "components/hero-showcase.tsx",
    "components/process-steps.tsx", "components/scroll-progress.tsx",
    "components/site/page-hero.tsx", "components/voice-hero.tsx",
    "app/agent/page.tsx", "app/contactus/page.tsx", "app/get-started/page.tsx",
]

total = 0
for rel in FILES:
    p = pathlib.Path(rel)
    text = p.read_text(encoding="utf-8")
    n = 0
    for old, new in MAP.items():
        text, k = re.subn(re.escape(old), new, text, flags=re.IGNORECASE)
        n += k
    p.write_text(text, encoding="utf-8")
    total += n
    print(f"{rel}: {n} replacements")
print("TOTAL:", total)
