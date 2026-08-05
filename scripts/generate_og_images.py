import json
import os
import re
from PIL import Image, ImageDraw, ImageFont

root_dir = "c:/Users/User/Documents/GitHub/pnjabele"

def draw_og_image(state_name, c_name, district, ac_no, reserved, winner, party, margin, turnout, output_path):
    # Dimensions: 1200 x 630 (standard OpenGraph landscape ratio)
    width = 1200
    height = 630
    
    # Background color: Slate 950 (#090d16)
    img = Image.new("RGB", (width, height), color="#090d16")
    draw = ImageDraw.Draw(img)
    
    # Attempt to load fonts
    try:
        title_font = ImageFont.truetype("arial.ttf", 64)
        subtitle_font = ImageFont.truetype("arial.ttf", 32)
        stat_label_font = ImageFont.truetype("arial.ttf", 24)
        stat_val_font = ImageFont.truetype("arial.ttf", 48)
    except IOError:
        # Fallback to default
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        stat_label_font = ImageFont.load_default()
        stat_val_font = ImageFont.load_default()
        
    # Draw accent borders / gradients
    draw.rectangle([0, 0, width, 16], fill="#e2e8f0") # Top light border
    
    # 1. State/Election Header
    draw.text((80, 80), f"{state_name.upper()} LEGISLATIVE ASSEMBLY ELECTION RESULTS", font=subtitle_font, fill="#94a3b8")
    
    # 2. Constituency Title
    draw.text((80, 130), c_name, font=title_font, fill="#ffffff")
    
    # 3. AC Info
    draw.text((80, 215), f"AC No. {ac_no} | {reserved} | {district} District", font=subtitle_font, fill="#64748b")
    
    # Draw separator line
    draw.line([80, 270, width - 80, 270], fill="#334155", width=2)
    
    # 4. Result Stats Blocks
    # Winner Info
    draw.text((80, 310), "2022 WINNING CANDIDATE", font=stat_label_font, fill="#94a3b8")
    draw.text((80, 350), f"{winner} ({party})", font=stat_val_font, fill="#22c55e" if party else "#e2e8f0")
    
    # Margin Info
    draw.text((80, 440), "MARGIN OF VICTORY", font=stat_label_font, fill="#94a3b8")
    draw.text((80, 480), f"{margin} Votes", font=stat_val_font, fill="#ffffff")
    
    # Turnout Info
    draw.text((650, 440), "VOTER TURNOUT", font=stat_label_font, fill="#94a3b8")
    draw.text((650, 480), f"{turnout}%", font=stat_val_font, fill="#ffffff")
    
    # Save Image
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")

def generate_state_og_images(state_name, json_path, output_dir):
    with open(json_path, "r", encoding="utf-8") as f:
        constituencies = json.load(f)
        
    print(f"Generating OG images for {state_name} ({len(constituencies)} pages)...")
    for c in constituencies:
        slug = re.sub(r'[^a-z0-9]+', '-', c["name"].lower())
        r22 = c.get("r22", {})
        
        draw_og_image(
            state_name=state_name,
            c_name=c["name"],
            district=c.get("district", state_name),
            ac_no=c.get("acNo", "—"),
            reserved="SC Reserved" if c.get("reserved") == "SC" else "General",
            winner=r22.get("winner", "—"),
            party=r22.get("party", ""),
            margin=f"{r22.get('margin', 0):,}",
            turnout=str(r22.get("turnout", "—")),
            output_path=os.path.join(output_dir, f"{slug}.png")
        )
    print(f"Finished generating OG images for {state_name}!")

# Run Punjab
generate_state_og_images(
    state_name="Punjab",
    json_path=os.path.join(root_dir, "punjab/data/constituencies.json"),
    output_dir=os.path.join(root_dir, "punjab/images/og")
)

# Run UP
generate_state_og_images(
    state_name="Uttar Pradesh",
    json_path=os.path.join(root_dir, "uttar-pradesh/data/constituencies.json"),
    output_dir=os.path.join(root_dir, "uttar-pradesh/images/og")
)
