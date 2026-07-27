"""Recolor the ifBash logo into professional variants + build a palette sheet."""
from PIL import Image, ImageDraw, ImageFont
import os

SRC = "public/images/logo.png"
OUT = "brand-proposal"
os.makedirs(OUT, exist_ok=True)

logo = Image.open(SRC).convert("RGBA")
W, H = logo.size

def hue_rotate(img, deg, sat_mul=1.0):
    r, g, b, a = img.split()
    rgb = Image.merge("RGB", (r, g, b)).convert("HSV")
    h, s, v = rgb.split()
    dh = int(round(255 * deg / 360.0))
    h = h.point(lambda i: (i + dh) % 256)
    if sat_mul != 1.0:
        s = s.point(lambda i: min(255, int(i * sat_mul)))
    rgb2 = Image.merge("HSV", (h, s, v)).convert("RGB")
    r2, g2, b2 = rgb2.split()
    return Image.merge("RGBA", (r2, g2, b2, a))

variants = {
    "A": ("Executive Indigo", hue_rotate(logo, -60), "magenta-violet -> deep indigo & violet"),
    "B": ("Deep Sapphire", hue_rotate(logo, -100), "magenta-violet -> sapphire & azure"),
    "C": ("Muted Violet", hue_rotate(logo, -60, sat_mul=0.55), "same angle, 55% saturation"),
}
for key, (name, img, _) in variants.items():
    img.save(f"{OUT}/logo-option-{key.lower()}.png")

# ── comparison sheet ───────────────────────────────────────────────────
def font(size):
    for f in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()

F_TITLE, F_LABEL, F_SMALL = font(34), font(24), font(17)
pad, row_h = 40, 190
card_w, chip_w = 560, 560
sheet_w = pad * 2 + card_w + 24 + chip_w
sheet_h = 90 + len(variants) * row_h + pad
sheet = Image.new("RGB", (sheet_w, sheet_h), "#FFFFFF")
d = ImageDraw.Draw(sheet)
d.text((pad, 28), "ifBash logo - recolor options (same mark, new color only)", fill="#0E1120", font=F_TITLE)

y = 90
for key, (name, img, note) in variants.items():
    # white card
    d.rounded_rectangle([pad, y, pad + card_w, y + row_h - 16], 14, fill="#FFFFFF", outline="#D8DBEC", width=2)
    lx = pad + (card_w - W) // 2
    ly = y + (row_h - 16 - H) // 2
    sheet.paste(img, (lx, ly), img)
    # dark chip
    x2 = pad + card_w + 24
    d.rounded_rectangle([x2, y, x2 + chip_w, y + row_h - 16], 14, fill="#0E1120")
    sheet.paste(img, (x2 + (chip_w - W) // 2, ly), img)
    # label
    d.text((pad + 16, y + 12), f"{key} - {name}", fill="#0E1120", font=F_LABEL)
    d.text((pad + 16, y + row_h - 48), note, fill="#5A6072", font=F_SMALL)
    y += row_h
sheet.save(f"{OUT}/logo-options.png")

# ── palette proposal sheet (recommended: Executive Indigo) ────────────
tokens = [
    ("Paper (page bg)",   "#F4F5FA"),
    ("Surface (cards)",   "#FFFFFF"),
    ("Wash (alt bands)",  "#E8EAF6"),
    ("Hairline (borders)","#D8DBEC"),
    ("Ink (headings)",    "#0E1120"),
    ("Body text",         "#333A4E"),
    ("Accent (links/CTA)","#4338CA"),
    ("Accent bright(dark)","#818CF8"),
]
sw, shh, gap = 300, 120, 24
cols = 2
pal_w = pad * 2 + cols * sw + (cols - 1) * gap
pal_h = 100 + ((len(tokens) + 1) // cols) * (shh + gap) + pad
pal = Image.new("RGB", (pal_w, pal_h), "#FFFFFF")
d = ImageDraw.Draw(pal)
d.text((pad, 30), "Recommended site palette - Executive Indigo", fill="#0E1120", font=F_TITLE)
for i, (name, hexv) in enumerate(tokens):
    cx = pad + (i % cols) * (sw + gap)
    cy = 100 + (i // cols) * (shh + gap)
    d.rounded_rectangle([cx, cy, cx + sw, cy + shh], 12, fill=hexv, outline="#C9CCDE", width=1)
    txt = "#FFFFFF" if hexv in ("#0E1120", "#333A4E", "#4338CA") else "#0E1120"
    d.text((cx + 16, cy + 18), name, fill=txt, font=F_SMALL)
    d.text((cx + 16, cy + 46), hexv, fill=txt, font=F_LABEL)
pal.save(f"{OUT}/palette-proposal.png")
print("done:", os.listdir(OUT))
