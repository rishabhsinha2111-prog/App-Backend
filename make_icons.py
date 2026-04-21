from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("icons", exist_ok=True)

def make_icon(size, path):
    img = Image.new("RGB", (size, size), "#0F3460")
    draw = ImageDraw.Draw(img)
    # Draw circle background
    margin = size // 8
    draw.ellipse([margin, margin, size-margin, size-margin], fill="#16213E")
    # Draw "SO" text
    font_size = size // 3
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    text = "SO"
    bbox = draw.textbbox((0,0), text, font=font)
    tw = bbox[2]-bbox[0]
    th = bbox[3]-bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2
    draw.text((x, y), text, fill="#E94560", font=font)
    img.save(path, "PNG")
    print(f"Created {path}")

make_icon(192, "icons/icon-192.png")
make_icon(512, "icons/icon-512.png")
print("Icons created.")
