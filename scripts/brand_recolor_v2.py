"""Recolor logo v2: remap the gradient's hue RANGE (not rotate) so no green/teal leaks in."""
from PIL import Image, ImageDraw, ImageFont
import os, colorsys

SRC = "public/images/logo.png"
OUT = "brand-proposal"
os.makedirs(OUT, exist_ok=True)

logo = Image.open(SRC).convert("RGBA")
W, H = logo.size
px = logo.load()

# original gradient hue span (degrees, 0-255 PIL scale ~ magenta 225 -> blue 155 in PIL units)
def remap(src_lo, src_hi, dst_lo, dst_hi, sat_mul=1.0, val_mul=1.0):
    img = Image.new("RGBA", (W, H))
    out = img.load()
    for y in range(H):
        for x in range(W):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            hh, ss, vv = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            h255 = hh * 255
            if ss < 0.08:  # near-white/grey -> keep
                out[x, y] = (r, g, b, a)
                continue
            t = (h255 - src_lo) / (src_hi - src_lo)
            t = min(1.0, max(0.0, t))
            nh = (dst_lo + t * (dst_hi - dst_lo)) / 255.0
            ns = min(1.0, ss * sat_mul)
            nv = min(1.0, vv * val_mul)
            nr, ng, nb = colorsys.hsv_to_rgb(nh % 1.0, ns, nv)
            out[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
    return img

# PIL hue units: violet-indigo ~185, azure ~150, royal blue ~165, sky ~140
SRC_LO, SRC_HI = 145, 235  # capture the original blue->magenta span
variants = {
    "A": ("Executive Indigo", remap(SRC_LO, SRC_HI, 185, 148), "violet-indigo -> azure"),
    "B": ("Deep Sapphire", remap(SRC_LO, SRC_HI, 170, 140), "royal blue -> sky"),
    "C": ("Graphite Violet", remap(SRC_LO, SRC_HI, 185, 148, sat_mul=0.5, val_mul=0.92), "indigo range, 50% saturation"),
}
for key, (name, img, _) in variants.items():
    img.save(f"{OUT}/logo-option-{key.lower()}.png")

def font(size):
    for f in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()

F_TITLE, F_LABEL, F_SMALL = font(32), font(24), font(17)
pad, row_h, card_w, chip_w = 40, 190, 560, 560
sheet_w = pad * 2 + card_w + 24 + chip_w
sheet_h = 90 + len(variants) * row_h + pad
sheet = Image.new("RGB", (sheet_w, sheet_h), "#FFFFFF")
d = ImageDraw.Draw(sheet)
d.text((pad, 28), "ifBash logo - recolor options (same mark, new color only)", fill="#0E1120", font=F_TITLE)
y = 90
for key, (name, img, note) in variants.items():
    d.rounded_rectangle([pad, y, pad + card_w, y + row_h - 16], 14, fill="#FFFFFF", outline="#D8DBEC", width=2)
    sheet.paste(img, (pad + (card_w - W) // 2, y + (row_h - 16 - H) // 2), img)
    x2 = pad + card_w + 24
    d.rounded_rectangle([x2, y, x2 + chip_w, y + row_h - 16], 14, fill="#0E1120")
    sheet.paste(img, (x2 + (chip_w - W) // 2, y + (row_h - 16 - H) // 2), img)
    d.text((pad + 16, y + 12), f"{key} - {name}", fill="#0E1120", font=F_LABEL)
    d.text((pad + 16, y + row_h - 48), note, fill="#5A6072", font=F_SMALL)
    y += row_h
sheet.save(f"{OUT}/logo-options.png")
print("v2 done")
