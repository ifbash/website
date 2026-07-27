"""Build the ifBash brand asset suite: logo variants, icon sizes, palette sheet."""
from PIL import Image, ImageDraw, ImageFont
import os

ROOT = "brand"
for d in ("logo", "icons", "color", "social", "fonts"):
    os.makedirs(f"{ROOT}/{d}", exist_ok=True)

logo = Image.open("public/images/logo.png").convert("RGBA")
W, H = logo.size
px = logo.load()

def is_content(r, g, b, a):
    if a < 16: return False
    return not (r > 240 and g > 240 and b > 240)

def bbox(x0, x1):
    minx, miny, maxx, maxy = x1, H, x0, 0
    for y in range(H):
        for x in range(x0, x1):
            if is_content(*px[x, y]):
                minx = min(minx, x); maxx = max(maxx, x)
                miny = min(miny, y); maxy = max(maxy, y)
    return (minx, miny, maxx + 1, maxy + 1)

# column-gap analysis from favicon work: mark = 56..157, wordmark = 175..372
MARK = logo.crop(bbox(0, 158))
WORD = logo.crop(bbox(158, 453))
FULL = logo.crop(bbox(0, 453))

def silhouette(img, rgb):
    """Recolor artwork to a single color, deriving alpha from darkness so
    gradients become a natural-looking solid with soft edges."""
    src = img.convert("RGBA")
    sp = src.load()
    out = Image.new("RGBA", src.size)
    op = out.load()
    for y in range(src.height):
        for x in range(src.width):
            r, g, b, a = sp[x, y]
            if a == 0: continue
            lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255.0
            alpha = int((1 - lum) * 255 * (a / 255.0))
            if alpha > 6:
                op[x, y] = (*rgb, min(255, alpha))
    return out

WHITE = (255, 255, 255)
INK = (14, 17, 32)
INDIGO = (67, 56, 202)

# ── logo suite ─────────────────────────────────────────────────────────
FULL.save(f"{ROOT}/logo/logo-primary.png")                    # color, light bg use
silhouette(FULL, WHITE).save(f"{ROOT}/logo/logo-reversed.png")  # white, dark bg use
silhouette(FULL, INK).save(f"{ROOT}/logo/logo-mono.png")      # mono ink, print/legal
MARK.save(f"{ROOT}/logo/mark-color.png")                      # icon form, color
silhouette(MARK, WHITE).save(f"{ROOT}/logo/mark-white.png")
silhouette(MARK, INK).save(f"{ROOT}/logo/mark-ink.png")
silhouette(MARK, INDIGO).save(f"{ROOT}/logo/mark-indigo.png")

# stacked lockup: mark centered above wordmark
pad = 30
gap = 26
wm_scale = (MARK.width * 1.35) / WORD.width
word_r = WORD.resize((int(WORD.width * wm_scale), int(WORD.height * wm_scale)), Image.LANCZOS)
sw = max(MARK.width, word_r.width) + pad * 2
sh = MARK.height + gap + word_r.height + pad * 2
stacked = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
stacked.paste(MARK, ((sw - MARK.width) // 2, pad), MARK)
stacked.paste(word_r, ((sw - word_r.width) // 2, pad + MARK.height + gap), word_r)
stacked.save(f"{ROOT}/logo/logo-stacked.png")
silhouette(stacked, WHITE).save(f"{ROOT}/logo/logo-stacked-reversed.png")

# ── icon sizes ─────────────────────────────────────────────────────────
def padded(img, size, fill=0.66):
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    scale = (size * fill) / max(img.size)
    r = img.resize((max(1, int(img.width * scale)), max(1, int(img.height * scale))), Image.LANCZOS)
    canvas.paste(r, ((size - r.width) // 2, (size - r.height) // 2), r)
    return canvas

for s in (16, 32, 48, 64, 96, 180, 192, 256, 512):
    padded(MARK, s).save(f"{ROOT}/icons/icon-{s}.png")
padded(MARK, 180).save(f"{ROOT}/icons/apple-touch-icon.png")

# ── palette sheet ──────────────────────────────────────────────────────
def font(size, bold=False):
    f = "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf"
    return ImageFont.truetype(f, size) if os.path.exists(f) else ImageFont.load_default()

RAMPS = [
    ("Sea - indigo (ServiceNow practice)", [
        ("sea-deep", "#312E81"), ("sea", "#4338CA"), ("sea-mid", "#4F46E5"),
        ("sea-bright", "#818CF8"), ("sea-soft", "#A5B4FC"), ("sea-strong", "#C7D2FE"), ("sea-tint", "#E0E7FF"),
    ]),
    ("Sky - azure (AI layer)", [
        ("sky-deep", "#1E3A8A"), ("sky", "#2563EB"), ("sky-mid", "#3B82F6"),
        ("sky-bright", "#60A5FA"), ("sky-soft", "#93C5FD"), ("sky-strong", "#BFDBFE"), ("sky-tint", "#DBEAFE"),
    ]),
    ("Neutrals", [
        ("ink", "#0E1120"), ("ink-body", "#333A4E"), ("slate", "#565C72"), ("slate-faint", "#82879C"),
        ("hairline", "#D8DBEC"), ("wash", "#E8EAF6"), ("paper", "#F4F5FA"),
    ]),
    ("Marker (hand-drawn strokes only)", [("marker", "#D97706")]),
]
F_T, F_L, F_H = font(30, True), font(19, True), font(15)
pad, sw_w, sw_h, gap = 36, 170, 108, 14
sheet_w = pad * 2 + 7 * (sw_w + gap)
rows_h = sum(56 + sw_h for _ in RAMPS)
sheet = Image.new("RGB", (sheet_w, 96 + rows_h + pad), "#FFFFFF")
d = ImageDraw.Draw(sheet)
d.text((pad, 30), "ifBash Executive Indigo - brand color system", fill="#0E1120", font=F_T)
y = 96
for title, sws in RAMPS:
    d.text((pad, y), title, fill="#333A4E", font=F_L)
    y += 34
    x = pad
    for name, hexv in sws:
        d.rounded_rectangle([x, y, x + sw_w, y + sw_h], 10, fill=hexv, outline="#C9CCDE", width=1)
        dark = hexv in ("#312E81", "#4338CA", "#4F46E5", "#1E3A8A", "#2563EB", "#0E1120", "#333A4E", "#565C72", "#D97706")
        t = "#FFFFFF" if dark else "#0E1120"
        d.text((x + 12, y + 14), name, fill=t, font=F_L)
        d.text((x + 12, y + 44), hexv, fill=t, font=F_H)
        x += sw_w + gap
    y += sw_h + 22
sheet.save(f"{ROOT}/color/palette.png")
print("suite + icons + palette done")
