"""ifBash — Brick & Charcoal remap.

Replaces the indigo/cool-neutral token values with the brick/charcoal values
across components/, app/, lib/.  SKY azure family and MARKER amber untouched.
"""
import subprocess, pathlib

HEX = {
    "#4338CA": "#B23A2B", "#312E81": "#7C2418", "#4F46E5": "#C8482F",
    "#818CF8": "#F0836F", "#A5B4FC": "#F2A38F", "#E0E7FF": "#FBE9E2",
    "#C7D2FE": "#F6CDBF",
    "#0E1120": "#181312", "#333A4E": "#3A2A26", "#454B5E": "#5A463F",
    "#565C72": "#6E5B52", "#60667C": "#7A675D", "#82879C": "#9C8A80",
    "#F4F5FA": "#F8F5F1", "#E8EAF6": "#F1E9E1",
    "#D8DBEC": "#E5DCD2", "#E4E6F2": "#EDE5DA",
    "#ECEEF8": "#F7EEEA", "#A2A8C0": "#C0A79C", "#7E8399": "#99816F",
    "#23273D": "#33251F", "#181C2E": "#241A15",
}
RGBA = {
    "67, 56, 202": "178, 58, 43", "67,56,202": "178,58,43",
    "49, 46, 129": "124, 36, 24", "49,46,129": "124,36,24",
    "79, 70, 229": "200, 72, 47", "79,70,229": "200,72,47",
    "129, 140, 248": "240, 131, 111", "129,140,248": "240,131,111",
    "165, 180, 252": "242, 163, 143", "165,180,252": "242,163,143",
    "14, 17, 32": "24, 19, 18", "14,17,32": "24,19,18",
}

def targets():
    files = set()
    for pat in list(HEX.keys()) + list(RGBA.keys()):
        out = subprocess.run(
            ["grep", "-rl", "--include=*.tsx", "--include=*.ts", "--include=*.css",
             "--include=*.md", "--include=*.json", "-F", pat, "components", "app", "lib"],
            capture_output=True, text=True, cwd=r"D:\website")
        files.update(x for x in out.stdout.splitlines() if x.strip())
    return sorted(files)

def main():
    changed = {}
    for f in targets():
        p = pathlib.Path(r"D:\website") / f.replace("/", "\\")
        t = p.read_text(encoding="utf-8")
        o = t
        for a, b in HEX.items():
            t = t.replace(a, b).replace(a.lower(), b)
        for a, b in RGBA.items():
            t = t.replace(a, b)
        if t != o:
            p.write_text(t, encoding="utf-8")
            changed[f] = sum(o.count(a) for a in HEX) + sum(o.count(a) for a in RGBA)
    print(f"updated {len(changed)} files")
    for f, n in sorted(changed.items()):
        print(f"  {n:4d}  {f}")

if __name__ == "__main__":
    main()
