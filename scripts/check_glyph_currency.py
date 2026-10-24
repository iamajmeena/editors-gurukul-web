from pathlib import Path
import json,time
from playwright.sync_api import sync_playwright
import os, tempfile
OUT=Path(tempfile.gettempdir())/'glyph-currency-qa';OUT.mkdir(exist_ok=True)
URL=os.environ.get('GLYPH_PREVIEW_URL', 'http://127.0.0.1:8767/glyph-motions.html')
fixture={'result':'success','base_code':'INR','time_last_update_unix':int(time.time())-300,'rates':{'INR':1,'USD':.012,'EUR':.011,'GBP':.009,'JPY':1.8,'AED':.044,'AUD':.018,'BHD':.0045}}
results=[]
with sync_playwright() as p:
 b=p.chromium.launch();
 for country,expected,locale in [('IN','INR','en-IN'),('US','USD','en-US'),('DE','EUR','de-DE'),('JP','JPY','ja-JP'),('GB','GBP','en-GB'),('BH','BHD','en-GB')]:
  ctx=b.new_context(locale=locale,viewport={'width':1440,'height':1000});pg=ctx.new_page();errors=[];pg.on('pageerror',lambda e:errors.append(str(e)))
  pg.route('**/cdn-cgi/trace',lambda route:route.fulfill(body=f'loc={country}\n',content_type='text/plain'))
  pg.route('https://open.er-api.com/**',lambda route:route.fulfill(json=fixture))
  pg.goto(URL);pg.wait_for_function('!document.querySelector("#price-currency").disabled')
  assert pg.locator('html').get_attribute('data-price-currency')==expected,(country,pg.locator('#currency-status').inner_text())
  amounts=pg.locator('[data-price-inr]').evaluate_all('(nodes)=>nodes.map(n=>({base:Number(n.dataset.priceInr),text:n.textContent,currency:n.dataset.displayCurrency}))')
  assert len(amounts)==37 and all(x['currency']==expected for x in amounts)
  links=pg.locator('a[href*="ajaykmeena.com/products/"]').evaluate_all('(a)=>a.map(x=>x.href)');assert links and all('Glyph-Motions' in l for l in links)
  if country=='US':
   assert any('3.59' in x['text'] for x in amounts if x['base']==299),amounts
   assert any('23.99' in x['text'] for x in amounts if x['base']==1999),amounts
   pg.locator('#price-currency').select_option('EUR');assert pg.locator('html').get_attribute('data-price-currency')=='EUR'
   pg.reload();pg.wait_for_function('!document.querySelector("#price-currency").disabled');assert pg.locator('html').get_attribute('data-price-currency')=='EUR'
   pg.locator('#price-currency').scroll_into_view_if_needed();pg.screenshot(path=str(OUT/'desktop-eur.png'))
  assert not errors,errors;results.append({'country':country,'currency':expected,'prices':len(amounts),'errors':errors});ctx.close()
 # Network outages must retain original price, never a guessed exchange rate.
 ctx=b.new_context();pg=ctx.new_page();pg.route('**/cdn-cgi/trace',lambda r:r.fulfill(body='loc=US\n'));pg.route('https://open.er-api.com/**',lambda r:r.abort());pg.goto(URL);pg.wait_for_function('!document.querySelector("#price-currency").disabled');assert pg.locator('html').get_attribute('data-price-currency')=='INR';assert 'unavailable' in pg.locator('#currency-status').inner_text();results.append({'network_failure':'INR fallback passed'});ctx.close()
 # Mobile overflow and fallback price rendering.
 ctx=b.new_context(viewport={'width':390,'height':844},locale='en-US');pg=ctx.new_page();pg.route('**/cdn-cgi/trace',lambda r:r.fulfill(body='loc=US\n'));pg.route('https://open.er-api.com/**',lambda r:r.fulfill(json=fixture));pg.goto(URL);pg.wait_for_function('!document.querySelector("#price-currency").disabled');pg.locator('#price-currency').scroll_into_view_if_needed();pg.screenshot(path=str(OUT/'mobile-usd.png'));assert pg.locator('.currency-controls').evaluate('(e)=>e.getBoundingClientRect().right <= innerWidth');results.append({'mobile_controls':'inside viewport'});ctx.close()
 # No-JavaScript readers and bots still see the actual INR price.
 ctx=b.new_context(java_script_enabled=False);pg=ctx.new_page();pg.goto(URL);assert '299' in pg.locator('[data-price-inr="299"]').first.inner_text();results.append({'no_js':'original INR retained'});ctx.close();b.close()
(OUT/'results.json').write_text(json.dumps(results,indent=2));print(json.dumps(results,indent=2))
