"""Render brand/brand-guidelines.pdf — the visual brand book (A4 landscape)."""
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
import os

W, H = landscape(A4)  # 842 x 595
FD = "brand/fonts"
pdfmetrics.registerFont(TTFont("Plex", f"{FD}/IBMPlexSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Plex-SB", f"{FD}/IBMPlexSans-SemiBold.ttf"))
pdfmetrics.registerFont(TTFont("Plex-B", f"{FD}/IBMPlexSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("PlexMono", f"{FD}/IBMPlexMono-Regular.ttf"))

INK = HexColor("#181312"); PAPER = HexColor("#F8F5F1"); SLATE = HexColor("#6E5B52")
SEA = HexColor("#B23A2B"); SKY = HexColor("#2563EB"); MARKER = HexColor("#D97706")
ONINK_MUTED = HexColor("#C0A79C"); HAIR = HexColor("#E5DCD2")

c = canvas.Canvas("brand/brand-guidelines.pdf", pagesize=(W, H))
M = 54

def img(path, x, y, w):
    im = ImageReader(path)
    iw, ih = im.getSize()
    h = w * ih / iw
    c.drawImage(im, x, y - h, w, h, mask="auto")
    return h

def footer(n):
    c.setFont("PlexMono", 8); c.setFillColor(SLATE)
    c.drawString(M, 24, "ifBash Brand Guidelines - Brick & Charcoal - 2026-07-27")
    c.drawRightString(W - M, 24, f"{n}")

# ── 1 COVER ────────────────────────────────────────────────────────────
c.setFillColor(INK); c.rect(0, 0, W, H, stroke=0, fill=1)
img("brand/logo/logo-reversed.png", M, H - 100, 210)
c.setFillColor(HexColor("#F7EEEA")); c.setFont("Plex-B", 44)
c.drawString(M, H - 280, "Brand Guidelines")
c.setFillColor(HexColor("#F2A38F")); c.setFont("Plex", 20)
c.drawString(M, H - 316, "Brick & Charcoal - logo, color, type, icons, voice")
c.setFillColor(MARKER); c.setFont("Plex-SB", 13)
c.drawString(M, 70, "Edition 2026-07-27")
footer(1); c.showPage()

# ── 2 LOGO SUITE ───────────────────────────────────────────────────────
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(INK); c.setFont("Plex-B", 28); c.drawString(M, H - 70, "Logo suite")
c.setFont("Plex", 11); c.setFillColor(SLATE)
c.drawString(M, H - 92, "The wordmark is custom hand-drawn lettering - never retype it, never substitute a script font.")

cards = [
    ("Primary - on light", "brand/logo/logo-primary.png", "#FFFFFF", False),
    ("Reversed - on ink", "brand/logo/logo-reversed.png", "#181312", False),
    ("Mono ink - print/legal", "brand/logo/logo-mono.png", "#FFFFFF", False),
    ("Stacked - avatars", "brand/logo/logo-stacked.png", "#FFFFFF", True),
    ("Stacked reversed", "brand/logo/logo-stacked-reversed.png", "#181312", True),
    ("Mark - icons", "brand/logo/mark-color.png", "#F8F5F1", True),
]
cw, ch, gx, gy = 232, 190, 16, 20
x0, y0 = M, H - 130
for i, (label, path, bg, sq) in enumerate(cards):
    x = x0 + (i % 3) * (cw + gx)
    y = y0 - (i // 3) * (ch + gy)
    c.setFillColor(HexColor(bg)); c.roundRect(x, y - ch, cw, ch, 10, stroke=0, fill=1)
    c.setStrokeColor(HAIR); c.roundRect(x, y - ch, cw, ch, 10, stroke=1, fill=0)
    lw = 130 if not sq else 110
    img(path, x + (cw - lw) / 2, y - 34, lw)
    c.setFillColor(INK if bg != "#181312" else HexColor("#F7EEEA"))
    c.setFont("Plex-SB", 10)
    c.drawString(x + 12, y - ch + 12, label)
c.setFillColor(SLATE); c.setFont("Plex", 10)
c.drawString(M, 60, "Clear space: at least the height of the triangle on all sides. Minimum lockup width 110 px digital / 30 mm print.")
c.drawString(M, 46, "Do not rotate, stretch, recolor, add effects, or place the gradient lockup on colored or busy backgrounds.")
footer(2); c.showPage()

# ── 3 COLOR ────────────────────────────────────────────────────────────
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(INK); c.setFont("Plex-B", 28); c.drawString(M, H - 70, "Color system")
img("brand/color/palette.png", M, H - 100, W - 2 * M)
c.setFillColor(SLATE); c.setFont("Plex", 10)
c.drawString(M, 96, "sea (brick) = the ServiceNow platform practice. sky (azure) = the AI layer. Never use sky as a generic second color.")
c.drawString(M, 82, "bright values (#F0836F, #60A5FA) are the shine: glows, fills, and text on dark bands only - never copy on paper.")
c.setFillColor(MARKER); c.setFont("Plex-SB", 10)
c.drawString(M, 64, "marker #D97706 - highlighter amber, hand-drawn strokes only. Never body text, never fills.")
footer(3); c.showPage()

# ── 4 TYPE ─────────────────────────────────────────────────────────────
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(INK); c.setFont("Plex-B", 28); c.drawString(M, H - 70, "Typography - IBM Plex everywhere")
c.setFont("Plex-B", 44); c.drawString(M, H - 150, "We build ServiceNow.")
c.setFont("Plex-B", 30); c.setFillColor(SEA); c.drawString(M, H - 195, "Then we build the AI layer on top.")
c.setFillColor(INK); c.setFont("Plex-SB", 16); c.drawString(M, H - 250, "Semibold 16 - buttons, nav, labels, card titles")
c.setFont("Plex", 14); c.drawString(M, H - 276, "Regular 14 - body copy. Hierarchy is carried by weight and size, never a second family.")
c.setFont("PlexMono", 13); c.setFillColor(SLATE); c.drawString(M, H - 302, "Plex Mono 13 - code, URLs, data, ifbash.com")
c.setFillColor(SLATE); c.setFont("Plex", 10)
c.drawString(M, 96, "Display scale (fluid): xl 4.25rem / lg 3.4rem / md 2.75rem / sm 1.95rem, tracking -0.02em to -0.03em.")
c.drawString(M, 82, "Arabic surfaces use IBM Plex Sans Arabic. No italics inside display headings - use the brick-ember accent gradient.")
c.drawString(M, 68, "Fonts folder: static TTFs (Regular/SemiBold/Bold/Italic, Mono, Arabic) plus variable masters for design tools. SIL Open Font License.")
footer(4); c.showPage()

# ── 5 ICONS + SOCIAL + VOICE ───────────────────────────────────────────
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(INK); c.setFont("Plex-B", 28); c.drawString(M, H - 70, "Icons, social & voice")
c.setFont("Plex-SB", 12); c.drawString(M, H - 110, "Brand icon sizes")
x = M
for s in (16, 32, 48, 64, 96, 180):
    img(f"brand/icons/icon-{s}.png", x, H - 130, s)
    x += s + 18
c.setFont("Plex-SB", 12); c.setFillColor(INK)
c.drawString(M, H - 260, "Social share card (1200x630, wired to OpenGraph + Twitter)")
img("brand/social/og-card.png", M, H - 278, 420)
c.setFillColor(SLATE); c.setFont("Plex", 10)
c.drawString(M, 88, "UI icons: Lucide, 1.5-2 px strokes, sea or slate. Hand-drawn strokes (Scribble / CircleMark / SquiggleArrow) are brand language -")
c.drawString(M, 74, "marker amber, max two per viewport, always annotating real meaning.")
c.setFillColor(INK); c.setFont("Plex-SB", 11)
c.drawString(M, 50, "Voice: direct, honest, engineered. Never claim outcomes we cannot show.")
footer(5); c.showPage()

c.save()
print("pdf done")
