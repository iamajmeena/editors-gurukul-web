import os
import glob
import re

source_dir = "/Applications/Documents/editors-gurukul"
target_dir = "/Applications/Documents/editors-astro-temp/src/pages"
os.makedirs(target_dir, exist_ok=True)

html_files = glob.glob(os.path.join(source_dir, "*.html"))

for file_path in html_files:
    filename = os.path.basename(file_path)
    if filename == "index.html":
        target_file = os.path.join(target_dir, "index.astro")
    else:
        name_without_ext = os.path.splitext(filename)[0]
        target_file = os.path.join(target_dir, f"{name_without_ext}.astro")
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Extract Title
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    title = title_match.group(1) if title_match else ""
    title = title.replace('"', '&quot;')
    
    # Extract Description
    desc_match = re.search(r'<meta\s+name="description"\s+content="(.*?)"', content, re.IGNORECASE)
    desc = desc_match.group(1) if desc_match else ""
    desc = desc.replace('"', '&quot;')
    
    # Extract Body Content
    body_content = content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.IGNORECASE | re.DOTALL)
    if body_match:
        body_content = body_match.group(1)
        
    # Remove existing header and footer injections if present
    body_content = re.sub(r'<div id="eg-header"></div>', '', body_content)
    body_content = re.sub(r'<div id="eg-footer"></div>', '', body_content)
    body_content = re.sub(r'<script src="/assets/site-manifest.js"></script>', '', body_content)
    body_content = re.sub(r'<script src="/assets/site-chrome.js"></script>', '', body_content)
    
    # Escape { and } outside of HTML tags so Astro doesn't parse them as JS
    # A simple regex to replace {} in text nodes is complex, but let's replace bare { } 
    # except those inside inline <script> tags.
    # To keep it safe and avoid breaking valid inline JS, we'll use Astro's <script is:inline>
    body_content = re.sub(r'<script>', '<script is:inline>', body_content)
    body_content = re.sub(r'<script(.*?)>', lambda m: m.group(0) if 'src=' in m.group(0) else f'<script is:inline{m.group(1)}>', body_content)
    
    # For Astro, inline styles with multiple {} might cause issues, but generally it's fine.
    
    astro_content = f"""---
import Layout from '../layouts/Layout.astro';
---
<Layout title="{title}" description="{desc}">
{body_content}
</Layout>
"""
    
    with open(target_file, "w", encoding="utf-8") as out_f:
        out_f.write(astro_content)
        
print(f"Migrated {len(html_files)} files to Astro pages.")
