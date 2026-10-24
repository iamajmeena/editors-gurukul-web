# Glyph Motions community ratings - 24 October 2026

Website: https://editorsgurukul.com/glyph-motions.html#reviews

The product page now includes a name, profession, required 1-5 star selection and optional 600-character feedback. The visitor explicitly agrees to publish these fields. No stars are preselected and low ratings are accepted. Cards show all community feedback without claiming verified purchases. The average and count come only from persisted records; the initial state is genuinely empty.

The frontend is in public/glyph-motions.html and public/assets/glyph-reviews.{css,js}, mirrored to root for the existing static layout. A hero link points directly to #reviews. Responsive CSS stacks the form and reviews below 720px; radio inputs have keyboard support and accessible names. User text is rendered with textContent, never injected as HTML. Submission failures retain the form values.

## Storage and routing

GitHub Pages continues serving the existing website. Cloudflare Worker glyph-motions-reviews handles only editorsgurukul.com/api/glyph-reviews* and www.editorsgurukul.com/api/glyph-reviews*. No other page routes change. Its own D1 database is glyph-motions-reviews, binding DB. Config and schema are in workers/glyph-reviews/.

GET returns a real average/count and 12 public records at a time (offset pagination). POST validates input and uses bound SQL parameters. A random browser token is stored locally; only its SHA-256 hash is in the database and it is never returned publicly. Submitting again from the same browser updates that record rather than increasing the count. This is browser-based deduplication, not identity verification: clearing storage or using another browser can create another rating. An IP-based Cloudflare limiter allows 10 submissions/minute; IPs are not stored in the ratings table. Same-origin JSON, an 8KiB streamed body limit and a honeypot provide basic abuse controls. There is no account sign-in or purchase verification.

## Operations

- Run `node scripts/check-glyph-reviews.mjs` (Node 24 built-in SQLite) for worker integration tests.
- Run `npx astro build` for the static site.
- Backend deploy: `wrangler deploy --config workers/glyph-reviews/wrangler.jsonc`.
- Fresh database only: `wrangler d1 execute glyph-motions-reviews --remote --config workers/glyph-reviews/wrangler.jsonc --file workers/glyph-reviews/schema.sql`.
- To remove abusive content, use an authenticated D1 query for the exact review ID. No public delete endpoint exists. Do not publish database credentials in the client.
- Static page deploy remains the repository's GitHub Pages workflow on main.

Validation: worker checks passed for invalid inputs, accepting every 1-5 star value, consent, same-origin, body bound, limiter, Hindi text, SQL injection safety, public field filtering, duplicate updates, aggregate, pagination and database error handling. Remote create/update/read passed with a clearly labelled temporary QA record, removed immediately afterwards. No invented reviews retained. Astro build passed. Desktop browser visual check performed; mobile uses the responsive single-column rules.
