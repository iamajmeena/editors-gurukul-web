import os
import shutil

dist_dir = "/Applications/Documents/editors-gurukul/dist"
public_dir = "/Applications/Documents/editors-gurukul/public"

sitemap_0 = os.path.join(dist_dir, "sitemap-0.xml")
sitemap_dest_dist = os.path.join(dist_dir, "sitemap.xml")
sitemap_dest_public = os.path.join(public_dir, "sitemap.xml")

if os.path.exists(sitemap_0):
    shutil.copyfile(sitemap_0, sitemap_dest_dist)
    shutil.copyfile(sitemap_0, sitemap_dest_public)
    print("Successfully copied sitemap-0.xml to sitemap.xml in dist & public!")
else:
    print("sitemap-0.xml not found yet in dist")
