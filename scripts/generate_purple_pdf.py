import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
from reportlab.pdfgen import canvas

pdf_path = "/Applications/.gemini/antigravity/brain/bd383121-b8ea-45fe-b194-cb467c307a72/20_zero_install_web_tools_blueprint.pdf"

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        # Top Header Bar Background
        self.setFillColor(colors.HexColor("#160b2b"))
        self.rect(0, 750, 612, 42, fill=True, stroke=False)
        
        # Header Text
        self.setFillColor(colors.HexColor("#c084fc"))
        self.setFont("Helvetica-Bold", 9)
        self.drawString(36, 765, "EDITORS GURUKUL · MASTER BLUEPRINT: 20 ZERO-INSTALL WEB APPS")
        
        # Header Line Accent
        self.setStrokeColor(colors.HexColor("#8b5cf6"))
        self.setLineWidth(1)
        self.line(36, 750, 576, 750)

        # Footer Bar Background
        self.setFillColor(colors.HexColor("#0d0714"))
        self.rect(0, 0, 612, 36, fill=True, stroke=False)
        
        # Footer Text
        self.setFillColor(colors.HexColor("#a78bfa"))
        self.setFont("Helvetica", 8)
        self.drawString(36, 14, "Confidential Business & Technical Plan · Prepared for Ajay K Meena")
        
        page_num_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(576, 14, page_num_str)
        self.restoreState()

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=54,
    bottomMargin=54
)

styles = getSampleStyleSheet()

# Custom Cyber Purple Palette Styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor("#ffffff"),
    spaceAfter=8
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=16,
    textColor=colors.HexColor("#c084fc"),
    spaceAfter=15
)

h1_style = ParagraphStyle(
    'H1',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=14,
    leading=18,
    textColor=colors.HexColor("#f3e8ff"),
    spaceBefore=14,
    spaceAfter=8
)

h2_style = ParagraphStyle(
    'H2',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#c084fc"),
    spaceBefore=10,
    spaceAfter=4
)

body_style = ParagraphStyle(
    'Body',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor("#e9d5ff"),
    spaceAfter=6
)

bullet_style = ParagraphStyle(
    'Bullet',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    textColor=colors.HexColor("#f3e8ff"),
    leftIndent=12,
    spaceAfter=3
)

story = []

# Title Box Table
title_p = Paragraph("🚀 MASTER BLUEPRINT: 20 ZERO-INSTALL BROWSER WEB APPS & SAAS SUITE", title_style)
subtitle_p = Paragraph("Transforming Complex GitHub Repos into 1-Click Browser Tools for Creators & Editors", subtitle_style)

title_box_data = [[title_p], [subtitle_p]]
title_table = Table(title_box_data, colWidths=[540])
title_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#1f113a")),
    ('BORDER', (0,0), (-1,-1), 1.5, colors.HexColor("#8b5cf6")),
    ('PADDING', (0,0), (-1,-1), 14),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))

story.append(title_table)
story.append(Spacer(1, 14))

# Executive Summary
story.append(Paragraph("💜 Executive Summary & Technical Vision", h1_style))
story.append(Paragraph(
    "Most high-priced SaaS tools (Whisper Flow $15/mo, Descript, Remove.bg, Clideo) are simply wrapping open-source algorithms into basic web interfaces. By using <b>WebAssembly (WASM)</b>, <b>WebGPU</b>, and <b>ONNX Runtime</b> inside the browser, we can host <b>90% of these tools 100% locally on the user's computer with ZERO server costs and ZERO installation</b>.",
    body_style
))

exec_highlights = [
    "<b>⚡ Zero Server Costs (₹0 Hosting Bills)</b>: Processing happens on the user's machine via WASM.",
    "<b>🔒 100% Data Privacy</b>: Files never leave the user's computer.",
    "<b>🚀 SEO Keyword Magnet</b>: Captures high-volume queries like 'free online background remover'.",
    "<b>💰 Monetization Funnel</b>: Upsells our ₹49 Digital Store packs, desktop builds, and DaVinci courses."
]
for h in exec_highlights:
    story.append(Paragraph(f"• {h}", bullet_style))

story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#4c247d"), spaceBefore=5, spaceAfter=10))

# 20 Tools Section
story.append(Paragraph("🛠️ Deep Research: The 20 High-Demand Zero-Install Web Apps", h1_style))

tools_data = [
    ("1. 🗣️ Browser-Whisper Voice-to-Text", "Whisper Flow / Descript", "Whisper.cpp WASM", "Transcribes audio & generates .SRT/.VTT subtitles 100% offline in browser."),
    ("2. 🎶 Vocal & BGM Stem Splitter", "Lalal.ai / Moises", "Demucs Web / Spleeter ONNX", "Separates vocal track & instrumental background music into 2 WAV files."),
    ("3. 🎙️ Audio Noise Suppressor", "Adobe Podcast Enhance", "DeepFilterNet WASM", "Removes room echo, fan noise, and background hums from mic recordings."),
    ("4. 🎤 Voice Pitch Modulator", "Voicemod Pro", "Web Audio API SoundTouch", "Modulates pitch and formant for movie trailer voice, robot tone, or chipmunk."),
    ("5. ✂️ Lossless Video Trimmer", "LosslessCut / Clideo", "FFmpeg.wasm", "Trims MP4/MOV videos in 0.5s with zero quality loss and zero re-rendering."),
    ("6. 📦 Fast Video Compressor", "HandBrake / FreeConvert", "FFmpeg.wasm Worker", "Compresses 500MB videos down to 50MB for Discord, WhatsApp & Email."),
    ("7. 🎬 Social Aspect Ratio Resizer", "Adobe Express / Kapwing", "Canvas API + Face Detect", "Auto-crops 16:9 horizontal YouTube clips to vertical 9:16 Reels with auto-center."),
    ("8. 🎞️ Video-to-GIF Converter", "Ezgif / Giphy", "gifshot / FFmpeg.wasm", "Converts short clips to 60fps GIFs/WebP with custom text overlays and looping."),
    ("9. 🏎️ Video Speed Ramper", "Premiere Time Remap", "WebCodecs API", "Creates smooth speed ramps (slow-mo 20% -> fast 200%) with Bezier curves."),
    ("10. ✂️ AI Image Background Eraser", "Remove.bg / Canva BG", "imgly ONNX (RMBG-1.4)", "Erases image backgrounds in 1s -> exports transparent PNG with fine hair detection."),
    ("11. 📸 4K Image AI Upscaler", "Topaz Gigapixel AI", "Real-ESRGAN WebGL", "Upscales blurry photos, thumbnails, and logos 4x to 4K resolution via WebGL."),
    ("12. 🧹 Watermark & Object Eraser", "Cleanup.pictures", "LaMa Inpainting WebGL", "Brush over unwanted text, logos, or watermarks to erase them automatically."),
    ("13. 🎨 LUT Live Previewer", "Colorist Suite", "WebGL 3D LUT Shader", "Drag & drop .cube color grading LUTs onto photos/videos for live Rec.709 preview."),
    ("14. ✍️ Auto-Caption Generator", "CapCut / Submagic", "Whisper.wasm + Canvas", "Generates animated kinetic subtitles (yellow word highlights) on video clips."),
    ("15. 📝 Subtitle Converter & Sync", "Subly / HappyScribe", "Custom Subtitle Engine", "Converts between SRT, VTT, ASS, TTML and shifts timestamp offsets."),
    ("16. 🖼️ YouTube Thumbnail Tester", "ThumbsUp.tv / TubeBuddy", "Canvas Preview Simulator", "Previews thumbnail look across Mobile Dark Mode, Desktop Feed & Recommended."),
    ("17. 📊 Video Bitrate Calculator", "DaVinci / Premiere Export", "Custom Math Engine", "Calculates exact file size and target bitrate for 4K/1080p H.264/H.265."),
    ("18. 📐 Shutter Angle Calculator", "RED / Arri Tools", "Cinematic Math Engine", "Calculates 180° shutter speeds (1/48s for 24fps) and ND filter density needed."),
    ("19. 🔎 Crop Factor & FOV Simulator", "DOF Simulator", "Lens Geometry Engine", "Simulates 24mm, 50mm, 85mm look across Full Frame vs APS-C vs MFT sensors."),
    ("20. 🛡️ EXIF Metadata Inspector", "ExifTool / Metadata2Go", "exif-js / MediaInfo WASM", "Inspects camera ISO, aperture, lens model & strips private GPS location data.")
]

for name, inspired, core, desc in tools_data:
    tool_content = [
        Paragraph(f"<b>{name}</b> <font color='#a78bfa' size='7.5'>(Replaces: {inspired})</font>", h2_style),
        Paragraph(f"<b>Tech Stack:</b> <font color='#c084fc'>{core}</font> | <b>Workflow:</b> {desc}", body_style)
    ]
    story.append(KeepTogether(tool_content))

story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#4c247d"), spaceBefore=5, spaceAfter=10))

# Business & Architecture Plan Table
story.append(Paragraph("🏗️ Architecture & Monetization Master Plan", h1_style))

plan_table_data = [
    [Paragraph("<b>Strategy Phase</b>", h2_style), Paragraph("<b>Execution Blueprint</b>", h2_style)],
    [Paragraph("<b>1. Web Framework</b>", body_style), Paragraph("Astro 4.0 + Cyber Purple Design System (Zero dependencies, ultra-fast load).", body_style)],
    [Paragraph("<b>2. Client-Side WASM</b>", body_style), Paragraph("90% processing runs inside browser memory via WebAssembly (Zero server cost).", body_style)],
    [Paragraph("<b>3. Traffic Capture</b>", body_style), Paragraph("Captures high-volume Google searches ('free online background remover', etc.).", body_style)],
    [Paragraph("<b>4. ₹49 Store Funnel</b>", body_style), Paragraph("Upsells 1-click desktop installers, 500+ LUT packs & DaVinci masterclasses.", body_style)]
]

plan_table = Table(plan_table_data, colWidths=[140, 400])
plan_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#2a134a")),
    ('BACKGROUND', (0,1), (-1,-1), colors.HexColor("#180d30")),
    ('GRID', (0,0), (-1,-1), 1, colors.HexColor("#4c247d")),
    ('PADDING', (0,0), (-1,-1), 8),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))

story.append(plan_table)
story.append(Spacer(1, 14))
story.append(Paragraph("<b>Conclusion:</b> This blueprint creates an unbeatable traffic and revenue engine for Editors Gurukul.", body_style))

doc.build(story, canvasmaker=NumberedCanvas)
print(f"PDF generated successfully at: {pdf_path}")
