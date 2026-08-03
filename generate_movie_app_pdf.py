import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor('#0a5f61'),
        alignment=1, # Center
        spaceAfter=15
    )
    
    sub_style = ParagraphStyle(
        'SubStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=colors.HexColor('#e0692a'),
        alignment=1,
        spaceAfter=25
    )
    
    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=13,
        leading=20,
        textColor=colors.HexColor('#15181c'),
        alignment=1,
        spaceAfter=15
    )

    link_style = ParagraphStyle(
        'LinkStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=22,
        textColor=colors.HexColor('#0066cc'),
        alignment=1,
        spaceAfter=25
    )

    box_style = ParagraphStyle(
        'BoxStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=18,
        textColor=colors.HexColor('#991b1b'),
        alignment=1,
        spaceAfter=15
    )
    
    story = []
    
    # Title
    story.append(Paragraph("🎬 iPhone Free Movie App Download", title_style))
    story.append(Paragraph("Official Direct App Store Link", sub_style))
    story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor('#e7e4dc'), spaceAfter=25))
    
    # Instruction
    story.append(Paragraph("Download the app directly from the official App Store link below:", body_style))
    story.append(Spacer(1, 10))
    
    # Clickable App Store Link
    app_url = "https://apps.apple.com/in/app/pedal-pit/id6774929829"
    link_html = f'<a href="{app_url}"><font color="#0066cc"><u><b>👉 Click Here To Download Pedal Pit App on App Store</b></u></font></a>'
    story.append(Paragraph(link_html, link_style))
    
    story.append(Paragraph(f'<font size="11" color="#4b5058">Direct Link: {app_url}</font>', body_style))
    story.append(Spacer(1, 20))
    
    # Important Note Box
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#fca5a5'), spaceAfter=15))
    note_text = "<b>⚠️ IMPORTANT APP SETUP INSTRUCTION:</b><br/>If you are opening/downloading this app for the first time, after downloading the app, type <b>ASK</b> in the search bar to unlock full movies."
    story.append(Paragraph(note_text, box_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#fca5a5'), spaceBefore=15))
    
    doc.build(story)
    print(f"Generated {filename}")

target_paths = [
    "public/downloads/iPhone_Free_Movie_Guide_2026.pdf",
    "public/assets/best-free-movie-apps-for-iphone-2026.pdf",
    "assets/best-free-movie-apps-for-iphone-2026.pdf",
    "downloads/iPhone_Free_Movie_Guide_2026.pdf"
]

for path in target_paths:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    create_pdf(path)

print("All movie app PDFs updated successfully!")
