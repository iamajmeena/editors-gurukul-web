# Editors Gurukul — Website Improvement + Content Master List (2026)

---

## PART 1: Website Improvements

### Already done (confirmed on site)
- Schema.org JSON-LD, canonical URLs, sitemap.xml, robots.txt, Google Analytics, Privacy/Terms/About pages, mobile-responsive layout.

### Previously flagged
1. **ads.txt missing** — add to root after AdSense approval.
2. **Internal linking weak** — add "Related Articles" block at the end of every post.
3. **Thin pillar posts** — `2-what-is-codec`, `3-what-is-log`, `4-what-is-hdr` need expansion to 1000+ words.
4. **Duplicate/legacy files** — old root-level `.html` files (e.g. `1-best-camera-under-50000.html`) alongside `src/pages/` Astro versions risk duplicate content. Needs cleanup/audit.

### New points from deep research

5. **Topic clusters, not random posts.** Google in 2026 rewards structured content ecosystems over isolated articles. Build a **pillar page** for each core topic (e.g. "DaVinci Resolve Color Grading — Complete Guide") that links out to every sub-article (nodes, white balance, LUTs, etc.), and every sub-article links back to the pillar. You already have the DaVinci cluster half-built — formalize it with a visible hub page and consistent internal links both ways.

6. **Answer-first structure (AEO).** ~25% of Google searches now trigger an AI Overview, and AI Overviews cut click-through by over half even for the #1 result. To get cited: answer the core question in the first 2-3 lines of the post, in plain language, before going into steps/detail. Add a short **direct-answer paragraph** right under the H1 on every post.

7. **FAQ sections + FAQ schema.** Add a 3-5 question FAQ block near the bottom of each article (things people also ask), marked up with FAQPage schema. Cheap way to win extra SERP real estate and AI citations.

8. **E-E-A-T: strengthen author identity.** You already have an AuthorBox — go further: add Person schema (not just WebSite schema) for Ajay K Meena, link it to sameAs profiles (YouTube, Instagram, website), and where possible show original screenshots/footage as proof of hands-on "Experience" (Google explicitly weighs firsthand experience now, not just expertise).

9. **Content freshness cadence.** Update cornerstone posts (camera guides, DaVinci tips, gear "best of" lists) every 90 days — refresh prices, add new gear, update screenshots for new Resolve versions. Stale "2026" posts will look outdated fast once 2027 models/versions launch.

10. **Page speed / Core Web Vitals.** Run a Lighthouse/PageSpeed check on mobile — image-heavy gear-review posts (screenshots, product photos) are the most likely culprit. Convert all images to WebP (some already are) and lazy-load below-the-fold images.

11. **Comparison & "vs" content.** You have one (Final Cut vs Premiere vs Resolve) — this format converts extremely well for buying-intent traffic. Expand this pattern (see topic lists below).

12. **Original data/screenshots > generic content.** "10x better than what ranks" is the 2026 bar. Since you shoot and grade yourself, every gear/technique post should include your own before/after frames, your own scope readings, your own footage — not stock images. This is your biggest structural advantage over competitor blogs that don't create original content.

13. **Breadcrumb navigation + schema.** Helps both users and Google understand site hierarchy as the content library grows past 30-40+ posts.

14. **Comment section or Q&A widget.** Real user engagement/questions under posts is itself an E-E-A-T + freshness signal, and mines future blog topics for free.

---

## PART 2: Blog Topic Master List

*(Cross-checked against your existing 38 pages — duplicates removed. "★" = high buying-intent/high-CPC, good for AdSense + affiliate.)*

### A. Camera Topics
1. Best mirrorless camera under ₹1,00,000 for filmmaking ★
2. Best mirrorless camera under ₹2,00,000 for filmmaking ★
3. Best budget cinema camera for beginners (BMPCC 4K/6K vs mirrorless) ★
4. DSLR vs Mirrorless vs Cinema Camera — which one should you buy in 2026
5. Full-frame vs APS-C vs Micro Four Thirds — sensor size explained with real footage comparison
6. Rolling shutter explained — why your pans look wobbly
7. Global shutter cameras explained — is it worth the upgrade
8. Best camera for YouTube vlogging in India ★
9. Best camera for wedding cinematography under ₹1,50,000 ★
10. Sony vs Canon vs Panasonic vs Fujifilm for video — 2026 comparison
11. What is dynamic range and why it matters for color grading
12. Understanding ISO, native ISO, and dual native ISO
13. Best second-hand/used cameras to buy for filmmaking (budget hack)
14. Camera menu settings for cinematic footage (frame rate, shutter angle, picture profile)
15. Best camera settings for DaVinci Resolve color grading (shoot flat/LOG right)
16. How to choose your first camera as a beginner filmmaker
17. Best camera for low-light filmmaking ★
18. Internal recording vs external recorder (Ninja V) — do you need one
19. Camera sensor cleaning and maintenance guide
20. Best camera bags and protection gear for outdoor shoots ★

### B. Lens Topics
21. Best beginner lens kit for cinematic video (35mm/50mm prime combo) ★
22. Prime vs zoom lenses for filmmaking — pros, cons, when to use each
23. Understanding focal length — how 24mm vs 50mm vs 85mm changes your story
24. What is a cine lens and do you actually need one
25. Best budget cine-mod lenses under ₹20,000 ★
26. Anamorphic lenses explained — that cinematic widescreen look
27. Understanding aperture and T-stop vs F-stop
28. Depth of field explained — how to get that creamy bokeh
29. Best 50mm lens options across brands (nifty fifty comparison) ★
30. Lens breathing — what it is and why cinema lenses avoid it
31. Vintage/manual lenses for filmmaking — worth the hassle?
32. Best lens for interviews and talking-head videos ★
33. Macro lenses for product/detail shots — beginner guide
34. Lens filters explained — ND, polarizer, diffusion (Black Pro-Mist etc.)
35. How focal length affects perspective and facial distortion in portraits
36. Building a lens kit on a budget — priority order for beginners ★

### C. Lighting Topics
37. Three-point lighting explained with real setup photos
38. Best lighting kit for beginners under ₹15,000 ★
39. COB lights vs LED panels vs tube lights — which to buy first
40. Understanding color temperature (Kelvin) and mixing light sources
41. CRI and TLCI explained — why cheap lights ruin your skin tones
42. Best RGB lights for creative/music video lighting ★
43. Natural light filmmaking — shooting cinematic video with zero gear
44. How to light a YouTube talking-head setup (budget + pro versions) ★
45. Softboxes, diffusion, and modifiers explained
46. Motivated lighting — making artificial light look natural
47. Practical lights in frame — using lamps/neon as story elements
48. Low-key vs high-key lighting — mood and genre matching
49. Best lighting setup for wedding/event cinematography ★
50. Gels and color grading on set — fixing color in-camera vs in post
51. One-light setups — dramatic results with minimal gear
52. Lighting for green screen/chroma key without spill

### D. Filmmaking Process & Gear (production)
53. Complete pre-production checklist for solo filmmakers
54. Gimbal vs tripod vs handheld — when to use each movement style
55. Best gimbal under ₹20,000 for beginners ★
56. Audio gear that matters more than your camera (mic shootout) ★
57. Best wireless mic systems compared (already have one — expand into full shootout series)
58. Shot list and storyboarding templates for YouTube creators
59. Solo filmmaking workflow — how to shoot, direct, and act alone
60. Building a home studio/setup for content creation on a budget ★
61. Field monitor buying guide — do you actually need one
62. Building your first camera bag / run-and-gun kit list ★
63. Client/wedding shoot day workflow — gear checklist and timing
64. How to backup and organize footage on set (data management)
65. B-roll shooting techniques that make any video look expensive
66. Frame rates explained — 24fps vs 30fps vs 60fps vs 120fps, when to use which

### E. Storytelling & Craft
67. What makes a story "cinematic" — beyond just gear
68. Three-act structure for YouTube videos and short films
69. Visual storytelling — show don't tell, with real frame examples
70. How to write a hook for the first 5 seconds of a video
71. Color psychology in storytelling — how grading choices affect emotion
72. Composition rules: rule of thirds, leading lines, framing (with examples from your own footage)
73. Pacing and rhythm in editing — how cuts control emotional pace
74. Character-driven vs plot-driven storytelling for short films
75. How to plan a video's visual language before you shoot (mood boards, references)
76. Sound design and music's role in storytelling (not just visuals)
77. Analyzing a scene from a popular film/show — breakdown of shots, lighting, color (educational breakdown series — high engagement format)
78. How to develop your own visual style/signature as an editor or DOP

### F. DaVinci Resolve / Post-Production (fill remaining gaps in your strongest cluster)
79. DaVinci Resolve color grading — complete beginner-to-advanced pillar guide (hub page linking all your existing Resolve posts)
80. Primary vs secondary color correction explained
81. Power Windows and tracking — full workflow guide
82. Building your own LUTs in Resolve
83. Skin tone correction — vectorscope technique
84. Match grading multi-camera footage
85. Noise reduction and grain management in Resolve
86. Fusion page basics for editors (intro to compositing in Resolve)
87. Fairlight audio basics for editors who only know the Edit/Color pages
88. Resolve keyboard + Speed Editor workflow for faster editing
89. Common LOG footage mistakes and how to fix them in-grade
90. Building a personal color grading style/preset pack

### G. Career / Business (monetization-adjacent, good for retention + your course funnel)
91. How much should you charge as a freelance video editor in India (expand existing editor-rates post into a series by niche: wedding, corporate, YouTube)
92. How to build a client-getting portfolio reel
93. Freelance editor vs in-house job — pros/cons
94. How to pitch yourself as a colorist to production houses
95. Building a personal brand as a video editor/DOP on Instagram/YouTube

---

## Suggested Content Cadence
Pick 2-3 pillar topics (DaVinci Resolve, Camera Buying Guides, Lighting) and build out clusters around each — 8-10 spoke articles per pillar, all interlinked, before starting a new pillar. This is what the 2026 topical-authority research strongly recommends over scattering posts across unrelated topics.
