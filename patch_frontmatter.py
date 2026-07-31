import os
import glob
import re

pages_dir = "src/pages"
astro_files = glob.glob(os.path.join(pages_dir, "*.astro"))

for file_path in astro_files:
    if "index.astro" in file_path:
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Extract Title from Layout tag
    title_match = re.search(r'<Layout title="([^"]*)"', content)
    title = title_match.group(1) if title_match else "Untitled"
    
    # Infer Category
    filename = os.path.basename(file_path).lower()
    if "davinci-resolve" in filename:
        category = "davinci-resolve"
    elif "camera" in filename or "codec" in filename or "log" in filename or "hdr" in filename:
        category = "camera"
    elif "gear" in filename or "light" in filename:
        category = "gear"
    elif "free" in filename or "download" in filename:
        category = "free-resources"
    else:
        category = "editing-fundamentals"
        
    # Add exports to frontmatter
    # Look for the first --- block
    parts = content.split("---")
    if len(parts) >= 3:
        frontmatter = parts[1]
        
        # Don't add if already added
        if "export const title" not in frontmatter:
            new_frontmatter = frontmatter + f'\nexport const title = "{title}";\nexport const category = "{category}";\n'
            new_content = f"---{new_frontmatter}---" + "---".join(parts[2:])
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)

print(f"Patched frontmatter in {len(astro_files)} files.")
