# Glyph Motions automatic currency display

Hosting confirmed from the creator and repository documents: GitHub Pages, repository iamajmeena/editors-gurukul-web, main branch. .github/workflows/deploy.yml builds Astro using withastro/action@v3 then deploys the Pages artifact. CNAME and astro.config.mjs both name editorsgurukul.com. The custom domain is Cloudflare-proxied (same-origin /cdn-cgi/trace returns country), but this is not a Cloudflare Pages app: do not depend on functions/api endpoints for this feature. The currency enhancement is static HTML/JS/JSON and works in the GitHub Pages artifact.

Implemented 24 October 2026. Latest remote main was synchronized before publishing. Plans remain Free INR0, Lite INR299, Pro INR599 and comparison INR1999. All37visible price occurrences on /glyph-motions are marked with data-price-inr and update together. SEO/Product schema stays in actual checkout currency INR.

- Country: same-origin Cloudflare /cdn-cgi/trace loc field only. If unavailable (e.g.local preview), explicit browser locale region is used, then INR. No IP/location permission or external geolocation service. Country/IP is not persisted.
- Country/currency mapping: Unicode CLDR49, effective2026-10-24,255territories; provenance embedded in country-currencies.json. Refresh when countries change currency. Unsupported local currency falls back to USD if available.
- Rates: https://open.er-api.com/v6/latest/INR. Once-daily browser cache, response validation,5s timeout, actual update date shown. Source attribution required by provider and displayed with converted prices.166currencies currently available; selector adds Auto.
- Manual selection persists in localStorage. Storage blocking does not prevent conversion. Approximate converted numbers use ISO currency code,Intl.NumberFormat and native currency fraction digits; never round up to a marketing price.
- If rates cannot be obtained/validated, retain exactINRprice. WithoutJS originalINRmarkup/buy links work.
- Graphy checkout is separate at ajaykmeena.com; existing per-plan buy URLs and amounts are preserved. Visible note identifies INR checkout pricing and possible card-provider conversion difference. All purchase URLs unchanged.

The same conversion and preference also apply to all13Glyph plan prices on the homepage, authored in src/pages/index.astro. The INR earnings-calculator sliders retain their existing units and logic.

Source:public/glyph-motions.html andpublic/assets/glyph-currency.js,country-currencies.json. Root HTML/assets mirror these for the existing static deployment layout. Astro build copies public assets into dist unchanged.

Validation: npx astro build passed (244pages). Python/Playwright scripts/check_glyph_currency.py covers IN,US,DE,JP,GB,BH,all37product price nodes,amount math,manual preference/reload,API failure,mobile controls,noJS. Run a static server against public and set GLYPH_PREVIEW_URL to the page if using another port. Live provider request in Chromium succeeded with167selector options and no page errors. Screenshots inspected at390px and1440px.

User explicitly authorized production deployment. This change is being committed to main for GitHub Pages deployment.
