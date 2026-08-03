import os
import shutil

root_dir = "/Applications/Documents/editors-gurukul"
dist_dir = os.path.join(root_dir, "dist")
public_dir = os.path.join(root_dir, "public")

sitemap_0 = os.path.join(dist_dir, "sitemap-0.xml")
sitemap_dest_dist = os.path.join(dist_dir, "sitemap.xml")
sitemap_dest_public = os.path.join(public_dir, "sitemap.xml")

if os.path.exists(sitemap_0):
    shutil.copyfile(sitemap_0, sitemap_dest_dist)
    shutil.copyfile(sitemap_0, sitemap_dest_public)
    print("Successfully copied sitemap-0.xml to sitemap.xml in dist & public!")

# Remove legacy sw.js if present
for legacy_sw in [os.path.join(root_dir, "sw.js"), os.path.join(public_dir, "sw.js")]:
    if os.path.exists(legacy_sw):
        os.remove(legacy_sw)
        print(f"Removed legacy sw.js from {legacy_sw}")

# Recursively sync all built directories and html files from dist to root
for item in os.listdir(dist_dir):
    dist_item_path = os.path.join(dist_dir, item)
    root_item_path = os.path.join(root_dir, item)
    public_item_path = os.path.join(public_dir, item)

    if os.path.isdir(dist_item_path):
        if os.path.exists(root_item_path):
            shutil.rmtree(root_item_path)
        shutil.copytree(dist_item_path, root_item_path)
        
        if item == "_astro":
            if os.path.exists(public_item_path):
                shutil.rmtree(public_item_path)
            shutil.copytree(dist_item_path, public_item_path)
    elif item.endswith(".html") or item.endswith(".xml") or item.endswith(".txt"):
        shutil.copyfile(dist_item_path, root_item_path)

print("Successfully synced all dist output static files and folders to root repository!")
