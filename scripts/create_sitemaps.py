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

# Sync homepage index.html
dist_homepage = os.path.join(dist_dir, "index.html")
root_homepage = os.path.join(root_dir, "index.html")
public_homepage = os.path.join(public_dir, "index.html")

if os.path.exists(dist_homepage):
    shutil.copyfile(dist_homepage, root_homepage)
    shutil.copyfile(dist_homepage, public_homepage)
    print("Successfully synced homepage index.html to root & public!")

# Sync instagram-follower-counter
ig_dist_html = os.path.join(dist_dir, "instagram-follower-counter", "index.html")
ig_root_html = os.path.join(root_dir, "instagram-follower-counter.html")
ig_root_dir = os.path.join(root_dir, "instagram-follower-counter")
ig_root_dir_html = os.path.join(ig_root_dir, "index.html")

if os.path.exists(ig_dist_html):
    shutil.copyfile(ig_dist_html, ig_root_html)
    os.makedirs(ig_root_dir, exist_ok=True)
    shutil.copyfile(ig_dist_html, ig_root_dir_html)
    print("Successfully synced instagram-follower-counter static files!")

dist_astro_dir = os.path.join(dist_dir, "_astro")
root_astro_dir = os.path.join(root_dir, "_astro")
public_astro_dir = os.path.join(public_dir, "_astro")

if os.path.exists(dist_astro_dir):
    if os.path.exists(root_astro_dir):
        shutil.rmtree(root_astro_dir)
    shutil.copytree(dist_astro_dir, root_astro_dir)

    if os.path.exists(public_astro_dir):
        shutil.rmtree(public_astro_dir)
    shutil.copytree(dist_astro_dir, public_astro_dir)
    print("Successfully synced _astro assets folder to root & public!")
