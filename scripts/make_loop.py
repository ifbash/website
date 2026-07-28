"""Assemble triage frames into an animated WebP clip (real product recording)."""
from PIL import Image
import glob, os

SRC = "public/images/screenshots/frames-triage"
OUT = "public/images/screenshots/demo-triage-loop.webp"

frames = sorted(glob.glob(f"{SRC}/f*.png"))
imgs = [Image.open(f).convert("RGB") for f in frames]

# normalize: top-align onto a uniform canvas (paper tint), same size for all
W = max(i.width for i in imgs)
H = max(i.height for i in imgs)
BG = (248, 245, 241)  # brand paper

def norm(im):
    c = Image.new("RGB", (W, H), BG)
    c.paste(im, (0, 0))
    return c

imgs = [norm(i) for i in imgs]

# dwell map: linger on empty state and on the final result
seq = []
for idx, im in enumerate(imgs):
    if idx == 0:
        seq += [im] * 4          # hold the empty state
    elif idx == len(imgs) - 1:
        seq += [im] * 8          # hold the result
    else:
        seq += [im] * 2

seq[0].save(
    OUT,
    save_all=True,
    append_images=seq[1:],
    duration=420,
    loop=0,
    quality=78,
    method=6,
)
print("webp frames:", len(seq), "size:", os.path.getsize(OUT))
