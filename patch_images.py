import os
import glob

# Images that were converted to webp
images = [
    "ajay-k-meena-headshot",
    "davinci-resolve-nodes-graph-annotated",
    "davinci-resolve-wb-colorpage-1-annotated",
    "davinci-resolve-wb-colorpage-1",
    "davinci-resolve-wb-colorpage-2-annotated",
    "davinci-resolve-wb-colorpage-2",
    "davinci-resolve-wb-portrait-after",
    "davinci-resolve-wb-portrait-before",
    "davinci-resolve-wb-scopes-off-annotated",
    "davinci-resolve-wb-scopes-off",
    "davinci-resolve-wb-split-before-after"
]

files = glob.glob("src/pages/**/*.astro", recursive=True)
files += glob.glob("src/components/**/*.astro", recursive=True)
files += glob.glob("src/**/*.js", recursive=True)

modified_count = 0

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content
    for img in images:
        new_content = new_content.replace(f"{img}.jpg", f"{img}.webp")
        new_content = new_content.replace(f"{img}.png", f"{img}.webp")
        
    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        modified_count += 1

print(f"Patched {modified_count} files for webp optimization.")
