import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Create 1280x720 canvas
width, height = 1280, 720
img = Image.new("RGB", (width, height), "#0b132b")
draw = ImageDraw.Draw(img)

# Create rich gradient background (Dark Navy Slate to Deep Teal)
for y in range(height):
    r = int(11 + (15 - 11) * (y / height))
    g = int(19 + (60 - 19) * (y / height))
    b = int(43 + (70 - 43) * (y / height))
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Add subtle glowing accent circles in background
glow = Image.new("RGBA", (width, height), (0,0,0,0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([650, -100, 1300, 500], fill=(224, 105, 42, 50)) # Orange glow
glow_draw.ellipse([-100, 300, 500, 900], fill=(10, 95, 97, 70)) # Teal glow
glow = glow.filter(ImageFilter.GaussianBlur(90))
img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
draw = ImageDraw.Draw(img)

# Load preview screenshot (movie-app-preview-2.png)
preview_path = "public/assets/movie-app-preview-2.png"
if os.path.exists(preview_path):
    preview_img = Image.open(preview_path).convert("RGBA")
    
    # Calculate mock phone dimensions (Aspect ratio matching iPhone 15 Pro)
    phone_w = 320
    phone_h = 640
    
    # Resize preview image to fit phone
    preview_resized = preview_img.resize((phone_w, phone_h), Image.Resampling.LANCZOS)
    
    # Create phone container with rounded corners
    phone_mask = Image.new("L", (phone_w, phone_h), 0)
    mask_draw = ImageDraw.Draw(phone_mask)
    mask_draw.rounded_rectangle([0, 0, phone_w, phone_h], radius=32, fill=255)
    
    # Create phone border/frame
    phone_frame = Image.new("RGBA", (phone_w + 16, phone_h + 16), (21, 24, 28, 255))
    frame_draw = ImageDraw.Draw(phone_frame)
    frame_draw.rounded_rectangle([0, 0, phone_w + 16, phone_h + 16], radius=40, outline=(231, 228, 220, 220), width=4)
    
    # Dynamic Island notch on phone frame
    notch_w, notch_h = 80, 20
    notch_x = (phone_w + 16 - notch_w) // 2
    frame_draw.rounded_rectangle([notch_x, 12, notch_x + notch_w, 12 + notch_h], radius=10, fill=(0, 0, 0, 255))
    
    # Paste resized screenshot into phone frame
    phone_frame.paste(preview_resized, (8, 8), mask=phone_mask)
    
    # Paste phone mockup onto right side of canvas (x=860, y=40)
    img_rgba = img.convert("RGBA")
    img_rgba.paste(phone_frame, (880, 40), phone_frame)
    img = img_rgba.convert("RGB")
    draw = ImageDraw.Draw(img)

# Load System Fonts or default font
try:
    font_badge = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
    font_title_bold = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 44)
    font_title_orange = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 42)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    font_tag = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 15)
    font_offer = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
except Exception:
    font_badge = font_title_bold = font_title_orange = font_sub = font_tag = font_offer = ImageFont.load_default()

# 1. Top Category Badge
badge_text = "⚡ 100% WORKING iPHONE APP"
bbox_b = draw.textbbox((0, 0), badge_text, font=font_badge)
bw = bbox_b[2] - bbox_b[0] + 28
draw.rounded_rectangle([60, 55, 60 + bw, 95], radius=18, fill=(10, 95, 97))
draw.text((74, 66), badge_text, font=font_badge, fill=(255, 255, 255))

# 2. Main Title (NO "GUIDE" WORD!)
draw.text((60, 125), "FREE MOVIE & MUSIC", font=font_title_bold, fill=(255, 255, 255))
draw.text((60, 185), "STREAMING APP FOR iPHONE", font=font_title_orange, fill=(224, 105, 42))

# 3. Subtitle
draw.text((60, 265), "Watch 4K HD Movies, Web Series & Stream Music Free", font=font_sub, fill=(210, 220, 235))
draw.text((60, 298), "Direct 1-Click App Store Setup · 100% Working Guaranteed", font=font_sub, fill=(160, 175, 195))

# 4. Feature Badges (3 Badges)
pills = [
  ("✓ 100% WORKING APP", (34, 197, 94)),
  ("✓ NO JAILBREAK", (59, 130, 246)),
  ("✓ 4K HD NO ADS", (224, 105, 42))
]

x_offset = 60
y_offset = 380
for pill_text, pill_color in pills:
    bbox = draw.textbbox((0, 0), pill_text, font=font_tag)
    pw = bbox[2] - bbox[0] + 24
    ph = 38
    draw.rounded_rectangle([x_offset, y_offset, x_offset + pw, y_offset + ph], radius=12, fill=(15, 23, 42), outline=pill_color, width=2)
    draw.text((x_offset + 12, y_offset + 10), pill_text, font=font_tag, fill=(255, 255, 255))
    x_offset += pw + 14

# 5. Pricing Offer Badge at Bottom Left
offer_text = "SPECIAL OFFER: ₹29 ONLY (94% OFF)"
bbox_o = draw.textbbox((0, 0), offer_text, font=font_offer)
ow = bbox_o[2] - bbox_o[0] + 40
draw.rounded_rectangle([60, 520, 60 + ow, 580], radius=18, fill=(224, 105, 42))
draw.text((80, 536), offer_text, font=font_offer, fill=(255, 255, 255))

# Save image
output_path = "public/assets/movie_app_iphone_cover.jpg"
img.save(output_path, "JPEG", quality=95)
print(f"Successfully regenerated pristine cover image at {output_path}")
