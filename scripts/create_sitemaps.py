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

ig_dist_html = os.path.join(dist_dir, "instagram-follower-counter", "index.html")
ig_root_html = os.path.join(root_dir, "instagram-follower-counter.html")
ig_root_dir = os.path.join(root_dir, "instagram-follower-counter")
ig_root_dir_html = os.path.join(ig_root_dir, "index.html")

if os.path.exists(ig_dist_html):
    shutil.copyfile(ig_dist_html, ig_root_html)
    os.makedirs(ig_root_dir, exist_ok=True)
    shutil.copyfile(ig_dist_html, ig_root_dir_html)
    print("Successfully synced instagram-follower-counter static files!")
