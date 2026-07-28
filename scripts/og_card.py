"""ifBash OG share card 1200x630 — Brick & Charcoal."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
INK = (24, 19, 18)

card = Image.new("RGB", (W, H), INK)

# soft brick/azure glows on a separate layer, blurred
glow = Image.new("RGB", (W, H), INK)
g = ImageDraw.Draw(glow)
g.ellipse([W - 560, -260, W + 260, 420], fill=(124, 36, 24))     # sea-deep top-right
g.ellipse([-320, H - 320, 380, H + 300], fill=(30, 58, 138))     # sky-deep bottom-left
glow = glow.filter(ImageFilter.GaussianBlur(180))
card = Image.blend(card, Image.blend(card, glow, 0.85), 0.5)

d = ImageDraw.Draw(card)

FD = "brand/fonts"
def plex(size, weight="Bold"):
    return ImageFont.truetype(f"{FD}/IBMPlexSans-{weight}.ttf", size)

def mono(size):
    return ImageFont.truetype(f"{FD}/IBMPlexMono-Regular.ttf", size)

M = 72  # margin

# reversed white logo
logo = Image.open("brand/logo/logo-reversed.png").convert("RGBA")
lw = 300
lh = int(logo.height * lw / logo.width)
logo_r = logo.resize((lw, lh), Image.LANCZOS)
card.paste(logo_r, (M, M), logo_r)

# headline (auto-fit to content width)
line1 = "We build ServiceNow."
line2 = "Then we build the AI layer on top."
size = 66
while True:
    f = plex(size)
    if d.textlength(line2, font=f) <= W - 2 * M or size <= 40:
        break
    size -= 2
f_h = plex(size, "Bold")
y = 268
d.text((M, y), line1, fill=(247, 238, 234), font=f_h)
y += size + 18
d.text((M, y), line2, fill=(242, 163, 143), font=f_h)  # sea-soft

# hand-drawn amber underline beneath "AI layer" — the brand's marker accent
prefix = "Then we build the "
x0 = M + d.textlength(prefix, font=f_h) - 6
x1 = M + d.textlength(line2, font=f_h) + 6
uy = y + size + 16
pts = []
for i in range(33):
    t = i / 32
    pts.append((x0 + t * (x1 - x0), uy + 4 * (1 if (i % 6) < 3 else -1)))
d.line(pts, fill=(217, 151, 6), width=7, joint="curve")

# footer row
d.text((M, H - 96), "ServiceNow  ·  AI Agents  ·  Web & Mobile", fill=(192, 167, 156), font=plex(24, "Regular"))
d.text((M, H - 62), "ifbash.com", fill=(240, 131, 111), font=mono(24))

card.save("public/images/og-card.png")
card.save("brand/social/og-card.png")
print("og card done", card.size)
