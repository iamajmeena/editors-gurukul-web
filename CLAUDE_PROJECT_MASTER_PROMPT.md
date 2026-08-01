# Editors Gurukul — Claude Project Master Prompt

Use this as the project-level system prompt / instructions for the Claude Project built around the
editorsgurukul.com codebase.

---

## What this project is

editorsgurukul.com is an Astro static site owned by **Ajay K Meena** — a working Cinematographer, DOP,
and Colorist (Wedream Production), based in Jaipur, India. The site teaches DaVinci Resolve, camera
technique, lighting, lenses, filmmaking process, and storytelling craft to Indian creators and editors.
Ajay also runs YouTube (@ajaykmeenaa) and Instagram (@iamajmeena), and sells a flagship course,
"Decoding DaVinci Resolve 2.0."

The long-term goal: grow this into the best-ranking, most comprehensive filmmaking/color-grading
education site in its niche, monetize with Google AdSense, and use its articles as a source pool for
video/Reel scripts.

## Tech stack

- **Astro** (static site generator), Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript.
- Dev server: `astro dev --background`, managed via `astro dev stop/status/logs`.
- Build: `astro build` → outputs to `dist/`.
- Every page lives at `src/pages/<slug>.astro` and maps directly to `/<slug>` on the live site.
- Deployed to `editorsgurukul.com` (CNAME file present), sitemap.xml + robots.txt already configured.

## Site structure & conventions (read before touching anything)

### Frontmatter pattern (every content page uses this exact shape)
```astro
---
import Layout from '../layouts/Layout.astro';
import FAQBlock from '../components/FAQBlock.astro';
import RelatedArticles from '../components/RelatedArticles.astro';
import CourseCTA from '../components/CourseCTA.astro';

export const title = "Post Title (2026)";
export const category = "camera"; // camera | lens | lighting | filmmaking | storytelling | davinci-resolve | career
export const description = "150-160 char meta description with primary keyword.";
---
<Layout title={title} description={description}>
  <header>
    <h1>Headline</h1>
    <p class="hero-subtitle">Direct-answer hook paragraph — answer the core query immediately (AEO/AI Overview requirement).</p>
  </header>
  <!-- H2 sections, tables, .callout divs, lists -->
  <FAQBlock items={[{q: "...", a: "..."}]} />
  <RelatedArticles links={[{href: "/other-slug", title: "Other Post"}]} />
  <CourseCTA text="Custom CTA line" />
</Layout>
```

### Category system (auto-discovery, no manual wiring needed)
- `src/pages/index.astro`, `guides.astro`, and each `<category>-guides.astro` hub page use
  `Object.values(import.meta.glob('./*.astro', { eager: true }))` to auto-discover every page and its
  exported `title`/`category`/`description`. **Dropping a new `.astro` file into `src/pages/` with the
  right `category` export is enough** — it automatically appears on the homepage grid, the relevant
  pillar hub page (`/camera-guides`, `/lens-guides`, `/lighting-guides`, `/filmmaking-guides`,
  `/storytelling-guides`, `/career-guides`), and `/guides`.
- Pillar hub pages use the shared `src/lib/pages.ts` helper `getPagesByCategory()` + `src/components/PillarGrid.astro`.
- Existing categories already in use: `camera`, `lens`, `lighting`, `filmmaking`, `storytelling`,
  `career`, `davinci-resolve` (implicit via filename `davinci-` matching in guides.astro), plus legacy
  `gear`/`editing-fundamentals`/`nle-comparison` from older posts.

### Shared components (always reuse, never duplicate this logic inline)
- `src/components/Layout.astro`-equivalent → actually `src/layouts/Layout.astro`: wraps every page,
  injects Header/Footer, Google Analytics, Schema.org WebSite JSON-LD, canonical URL, OG tags.
- `src/components/FAQBlock.astro` — takes `items=[{q,a}]`, renders FAQ + auto-generates FAQPage schema.
- `src/components/RelatedArticles.astro` — takes `links=[{href,title}]`, renders a card grid.
- `src/components/CourseCTA.astro` — takes optional `text`, links to the Decoding DaVinci Resolve 2.0 course.
- `src/components/AuthorBox.astro` — Ajay's E-E-A-T author bio block, included via `Footer.astro`.
- `src/components/Header.astro` — nav with "All Guides" dropdown listing every category hub page.
- `src/components/PillarGrid.astro` + `src/lib/pages.ts` — shared grid renderer for hub pages.

### CSS system (`src/styles/global.css`, Tailwind v4 + custom classes)
Key CSS variables: `--bg`, `--bg-alt`, `--ink`, `--ink-soft`, `--line`, `--teal`, `--teal-deep`,
`--orange`, `--orange-soft`. Key reusable classes already defined globally — **do not reinvent, reuse
these exact class names**:
- `.hero-section`, `.hero-title` (h1), `.hero-subtitle`/`.dek` — hero/header block
- `h2` — auto-styled with orange left-border accent, no extra class needed
- `.callout` / `blockquote` — orange-accented callout box (⚠️ must be a `<div class="callout">...</div>`,
  **never close with `</p>` unless a `<p>` is actually opened inside it** — this exact bug has broken
  the Astro build multiple times across content batches; always double-check every `.callout` div's
  closing tag before finishing a file)
- `table` / `th` / `td` — auto-styled comparison tables
- `.cam-card`, `.spec-strip`/`.spec-chip`, `.pc-grid` (`.pc-box.pro` / `.pc-box.con`), `.buy-row`/`.buy-btn`
  — the buying-guide product-card pattern (see `1-best-camera-under-50000.astro` as reference)
- `.eg-glass-card`, `.asset-card`, `.cat-card`, `.item` — homepage/grid card styles
- `.grid` — auto-styled responsive grid (used by PillarGrid)

### Two acceptable content voices (site currently has both)
1. **Hinglish gear-review voice** (e.g. `1-best-camera-under-50000.astro`) — conversational Roman-script
   Hindi/English mix, used for buying-guide-style posts.
2. **Full English colorist/DOP voice** (e.g. `davinci-resolve-white-balance-method-2026.astro`) —
   professional, technical, first-person authority voice. This is the voice used for the large 2026
   content-expansion batches (camera/lens/lighting/filmmaking/storytelling pillars) per explicit
   instruction from Ajay — **pure English only, no Hindi/Hinglish**, for that content set.
   **Always check with Ajay which voice a new batch should use before writing** — don't assume.

## SEO / AEO requirements for every new post (non-negotiable)
- One H1, logical H2→H3 nesting, primary keyword in H1 + first 100 words + 2-3x naturally in body.
- **Direct-answer paragraph immediately after H1** — answer the core search query in 1-2 sentences
  before anything else (critical for Google AI Overview / featured snippet citation in 2026).
- Meta description 150-160 characters with primary keyword.
- FAQ section (3-5 real questions) via `FAQBlock` — auto-generates FAQPage schema.
- 3-5 related-article internal links via `RelatedArticles`, PLUS 1-2 contextual inline links within
  the body text to genuinely relevant existing posts (cross-pillar links are good — e.g. a camera post
  linking to a relevant DaVinci Resolve grading post).
- 1000+ words of substantive body content per post.
- No invented/fake image paths — build diagrams as inline SVG, HTML/CSS, or tables. Never reference an
  image asset that doesn't actually exist in `public/assets/`.
- Don't fabricate specific product prices/model numbers you're not confident about — use realistic
  ranges or well-known real products; never invent fake SKUs or hard prices.
- "2026" freshness marker in buying-guide/gear titles where natural.
- Update cornerstone/pillar posts roughly every 90 days (prices, screenshots, new gear/software versions).

## Known site improvements still worth doing (from earlier audit)
1. Add `ads.txt` at the site root once Google AdSense approves the site.
2. Some early pillar posts (`2-what-is-codec`, `3-what-is-log`, `4-what-is-hdr`) may still be thin —
   check word count and expand toward 1000+ if needed.
3. Audit for duplicate/legacy root-level `.html` files vs the `src/pages/*.astro` equivalents (there
   were old static HTML exports alongside the Astro source at various points — confirm which are
   actually deployed/live vs stale leftovers before deleting anything).
4. Person schema (not just WebSite schema) for Ajay K Meena for stronger E-E-A-T — `Layout.astro`
   currently only emits `@type: WebSite` with an `author` sub-object; a dedicated `Person` schema node
   would be a stronger signal.
5. Breadcrumb schema across pillar → post hierarchy as the content library grows.

## Build & verification workflow (important — sandbox quirk)
- `node_modules` on this project may be installed for a different OS/arch than the sandbox running
  Claude's tools. If `astro build` fails with a "Cannot find native binding" error, install the missing
  `@astrojs/compiler-binding-<platform>` package for the sandbox's actual platform/arch
  (check with `node -e "console.log(process.platform, process.arch)"`).
- If the live mounted project folder has permission restrictions that block `vite`'s dependency cache
  writes (`EPERM` errors on `node_modules/.vite/...`), **rsync the whole project (excluding
  `node_modules`, `dist`, `.git`) into a scratch directory with a writable `node_modules` copy**, and
  run `astro build` there instead. This has reliably worked to get a clean build signal.
- Always run a real `astro build` after adding new pages — do not rely solely on manual tag-balance
  inspection. Multiple content-writing passes have shipped a subtle bug (a `.callout` div closed with
  `</p>` instead of `</div>`) that only a real compiler catch reliably. Fix any build errors immediately
  before considering a batch of posts "done."
- After confirming a clean build, spot-check that no Hindi/Devanagari characters leaked into an
  English-only batch: `grep -lP '[\x{0900}-\x{097F}]' <file>`.

## Content roadmap status (as of this writing)
A 95-post content expansion across 7 new topic pillars is in progress, planned in batches to keep
quality high (one batch = one pillar category, written via parallel sub-agents, one post per agent,
each cross-linking to sibling posts in the same batch plus existing site content):

- ✅ Camera pillar — 20 posts, done, build-verified
- ✅ Lens pillar — 16 posts, done, build-verified
- ✅ Lighting pillar — 16 posts, done, build-verified (one `.callout`/`</p>` bug found & fixed)
- ✅ Filmmaking process & gear pillar — 14 posts, done, build-verified
- 🔶 Storytelling & craft pillar — 12 posts planned, 5 confirmed written
  (`what-makes-a-story-cinematic`, `three-act-structure-youtube-short-films`,
  `visual-storytelling-show-dont-tell`, `how-to-write-a-hook-first-5-seconds`,
  `color-psychology-storytelling-emotion`) — **7 remaining**:
  `composition-rules-rule-of-thirds-framing`, `pacing-rhythm-editing-emotional-pace`,
  `character-vs-plot-driven-storytelling`, `planning-visual-language-before-you-shoot`,
  `sound-design-music-storytelling-role`, `analyzing-a-scene-shot-breakdown`,
  `developing-your-own-visual-style-signature`
- ⬜ DaVinci Resolve gap-fill pillar — 12 posts planned, not started (see full topic list below)
- ⬜ Career/business pillar — 5 posts planned, not started (see full topic list below)
- ⬜ Header nav / homepage grid / sitemap final wiring pass (mostly automatic via glob discovery, but
  verify categories render correctly in nav dropdown and filter pills)
- ⬜ Apply the "known site improvements" list above
- ⬜ Final full-site build + QA pass across all ~95+ new pages

### Remaining DaVinci Resolve gap-fill topics (12)
Pillar hub page linking all existing + new Resolve posts; primary vs secondary color correction;
Power Windows + tracking workflow; building your own LUTs in Resolve; skin tone correction via
vectorscope; match-grading multi-camera footage; noise reduction/grain management; Fusion page basics
for editors; Fairlight audio basics for editors; keyboard + Speed Editor workflow; common LOG footage
mistakes and in-grade fixes; building a personal color grading style/preset pack.

### Remaining Career/Business topics (5)
Freelance video editor rates in India by niche (wedding/corporate/YouTube — expand existing
editor-rates-india-2026 post into a series); building a client-getting portfolio reel; freelance vs
in-house job pros/cons; pitching yourself as a colorist to production houses; building a personal
brand as a video editor/DOP on Instagram/YouTube.

## How to work in this project (behavioral instructions for Claude)
1. Before writing new batches of content, re-read this file plus the actual current state of
   `src/pages/` (file list + a couple of representative files) — do not assume prior batch state is
   still accurate; verify.
2. When writing a new batch of posts, confirm with Ajay: (a) which pillar/category, (b) which voice
   (Hinglish vs pure English), (c) whether to parallelize via multiple sub-agents or write sequentially
   in one pass — for 10+ posts, parallel one-agent-per-post has worked well and is the default unless
   told otherwise.
3. Give every sub-agent the exact frontmatter pattern, the `.callout`/`</p>` bug warning, the shared
   component import requirements, and 3-5 sibling slugs for `RelatedArticles` cross-linking.
4. After any batch finishes, ALWAYS do a real `astro build` verification pass (see Build & Verification
   Workflow above) before marking the batch complete. Fix any errors found immediately.
5. Keep a running task list (this project uses a task-tracking tool) so progress across long, multi-batch
   sessions survives interruptions/session limits — checkpoint status clearly if a session is cut short.
6. Never touch/delete files in the live workspace folder without being asked; only add new files or
   edit existing ones with a clear, explained reason.
