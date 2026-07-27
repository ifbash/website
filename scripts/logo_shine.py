"""Give the Executive Indigo logo brilliance: saturation + value-contrast passes."""
from PIL import Image, ImageDraw, ImageFont
import os, colorsys

SRC = "brand-proposal/logo-option-a.png"
OUT = "brand-proposal"
logo = Image.open(SRC).convert("RGBA")
W, H = logo.size
px = logo.load()

def shine(sat_mul, v_gamma, v_contrast, v_gain=1.0):
    img = Image.new("RGBA", (W, H))
    out = img.load()
    for y in range(H):
        for x in range(W):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            hh, ss, vv = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            if ss < 0.08:
                out[x, y] = (r, g, b, a)
                continue
            ns = min(1.0, ss * sat_mul)
            v = vv ** v_gamma
            v = (v - 0.5) * v_contrast + 0.5
            nv = min(1.0, max(0.0, v * v_gain))
            nr, ng, nb = colorsys.hsv_to_rgb(hh, ns, nv)
            out[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
    return img

levels = {
    "1 - Polish":   shine(1.15, 0.95, 1.15),
    "2 - Brilliance": shine(1.32, 0.88, 1.28),
    "3 - Radiant":  shine(1.45, 0.82, 1.40),
}
for name, img in levels.items():
    img.save(f"{OUT}/logo-shine-{name[0]}.png")

def font(size):
    for f in ("C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"):
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()

F_TITLE, F_LABEL = font(30), font(20)
pad, row_h = 40, 150
sheet_w = pad * 2 + 620 + 24 + 300
sheet = Image.new("RGB", (sheet_w, 90 + 4 * row_h + pad), "#FFFFFF")
d = ImageDraw.Draw(sheet)
d.text((pad, 28), "Logo shine levels - judged at real header size (160x34) on page paper", fill="#0E1120", font=F_TITLE)
rows = [("0 - Current", logo)] + list(levels.items())
y = 90
for name, img in rows:
    d.rounded_rectangle([pad, y, pad + 620, y + row_h - 16], 12, fill="#F4F5FA", outline="#D8DBEC", width=1)
    sheet.paste(img, (pad + 20, y + (row_h - 16 - H) // 2), img)
    small = img.resize((160, 34), Image.LANCZOS)
    x2 = pad + 620 + 24
    d.rounded_rectangle([x2, y, x2 + 300, y + row_h - 16], 12, fill="#F4F5FA", outline="#D8DBEC", width=1)
    sheet.paste(small, (x2 + (300 - 160) // 2, y + (row_h - 16 - 34) // 2), small)
    d.text((pad + 24, y + 10), name, fill="#0E1120", font=F_LABEL)
    y += row_h
sheet.save(f"{OUT}/logo-shine-options.png")
print("shine sheet done")
