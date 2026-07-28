"""Preview 4 post-indigo palette directions: recolored logo + tokens, one sheet."""
from PIL import Image, ImageDraw, ImageFont
import os, colorsys

SRC = "brand-proposal/logo-option-a.png"   # current indigo gradient logo
OUT = "brand-proposal"
logo = Image.open(SRC).convert("RGBA")
W, H = logo.size
px = logo.load()

def remap(dst_lo, dst_hi, sat_mul=1.0, val_mul=1.0):
    img = Image.new("RGBA", (W, H)); out = img.load()
    for y in range(H):
        for x in range(W):
            r, g, b, a = px[x, y]
            if a == 0: continue
            hh, ss, vv = colorsys.rgb_to_hsv(r/255, g/255, b/255)
            if ss < 0.08:
                out[x, y] = (r, g, b, a); continue
            t = min(1.0, max(0.0, ((hh*255) - 140) / (195 - 140)))
            nh = (dst_lo + t * (dst_hi - dst_lo)) / 255.0
            nr, ng, nb = colorsys.hsv_to_rgb(nh % 1.0, min(1.0, ss*sat_mul), min(1.0, vv*val_mul))
            out[x, y] = (int(nr*255), int(ng*255), int(nb*255), a)
    return img

# PIL hue units = deg*255/360
DIRECTIONS = [
    ("A", "Forest & warm paper", "deep emerald, organic enterprise - zero AI vibe",
     remap(113, 90), [("paper", "#F7F6F1"), ("ink", "#101613"), ("accent", "#0E6B4E"), ("accent-deep", "#083D2C"), ("bright", "#34D399")]),
    ("B", "Brick & charcoal", "editorial consultancy - law-firm gravity, studio craft",
     remap(9, 20), [("paper", "#F8F5F1"), ("ink", "#181312"), ("accent", "#B23A2B"), ("accent-deep", "#7C2418"), ("bright", "#F0836F")]),
    ("C", "Oxford navy & steel", "classic corporate trust, flat and serious",
     remap(155, 170, val_mul=0.88), [("paper", "#F5F6F8"), ("ink", "#0D1420"), ("accent", "#1D4E89"), ("accent-deep", "#0F2C52"), ("bright", "#6FA8DC")]),
    ("D", "Indigo, de-AI'd", "same hue you picked - flat, no gradients, warm neutrals",
     logo, [("paper", "#F7F5F2"), ("ink", "#12101C"), ("accent", "#4338CA"), ("accent-deep", "#312E81"), ("bright", "#818CF8")]),
]

def font(size, bold=False):
    f = "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf"
    return ImageFont.truetype(f, size) if os.path.exists(f) else ImageFont.load_default()

F_T, F_L, F_S, F_H = font(32, True), font(21, True), font(15), font(15)
pad, row_h, card_w, chip_w = 40, 210, 560, 500
sw_w, sw_h = 92, 66
sheet_w = pad * 2 + card_w + 24 + chip_w
sheet_h = 90 + len(DIRECTIONS) * row_h + pad
sheet = Image.new("RGB", (sheet_w, sheet_h), "#FFFFFF")
d = ImageDraw.Draw(sheet)
d.text((pad, 28), "Beyond the AI-gradient - four palette directions", fill="#0E1120", font=F_T)

y = 90
for key, name, note, lg, tokens in DIRECTIONS:
    d.rounded_rectangle([pad, y, pad + card_w, y + row_h - 18], 14, fill=tokens[0][1], outline="#DDD9D2", width=1)
    sheet.paste(lg, (pad + (card_w - W) // 2, y + 46 + (110 - H) // 2), lg)
    inkc = tokens[1][1]
    d.rounded_rectangle([pad + card_w + 24, y, pad + card_w + 24 + chip_w, y + row_h - 18], 14, fill=inkc)
    sheet.paste(lg, (pad + card_w + 24 + (chip_w - W) // 2, y + 46 + (110 - H) // 2), lg)
    d.text((pad + 16, y + 12), f"{key} - {name}", fill="#181312", font=F_L)
    d.text((pad + 16, y + row_h - 44), note, fill="#5A6072", font=F_S)
    x = pad + card_w + 40
    for tname, hexv in tokens[2:]:
        pass
    # swatches row along bottom of dark chip
    sx = pad + card_w + 40
    for tname, hexv in [tokens[0]] + tokens[2:]:
        d.rounded_rectangle([sx, y + row_h - 64, sx + sw_w, y + row_h - 64 + sw_h - 18], 8, fill=hexv, outline="#FFFFFF", width=1)
        sx += sw_w + 8
    y += row_h
sheet.save(f"{OUT}/palette-directions.png")
print("directions sheet done")
