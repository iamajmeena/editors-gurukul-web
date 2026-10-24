// Display-only currency estimates. Graphy owns the INR checkout and final total.
const RATE_URL = 'https://open.er-api.com/v6/latest/INR';
const RATE_KEY = 'eg:inr-rates:v1';
const CHOICE_KEY = 'eg:price-currency:v1';
const DAY = 86400000;
const PREFERRED = ['INR', 'USD', 'EUR', 'GBP', 'CAD', 'AUD', 'AED', 'SGD'];

function read(key) {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}
function write(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Private mode keeps conversion usable. */ }
}
async function request(url, json = true) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(url, { signal: controller.signal, credentials: 'omit' });
    if (!response.ok) throw new Error('Currency data unavailable');
    return json ? await response.json() : await response.text();
  } finally { clearTimeout(timer); }
}
function usableRates(data) {
  return data?.result === 'success' && data.base_code === 'INR' && data.rates?.INR === 1 &&
    Number.isFinite(data.time_last_update_unix) && data.time_last_update_unix * 1000 <= Date.now() + DAY &&
    data.time_last_update_unix * 1000 > Date.now() - 7 * DAY &&
    Object.values(data.rates).every(rate => Number.isFinite(rate) && rate > 0);
}
async function loadRates() {
  const cached = read(RATE_KEY);
  if (cached && cached.savedAt <= Date.now() && Date.now() - cached.savedAt < DAY && usableRates(cached.data)) {
    return cached.data;
  }
  const data = await request(RATE_URL);
  if (!usableRates(data)) throw new Error('Invalid currency rates');
  write(RATE_KEY, { savedAt: Date.now(), data });
  return data;
}
async function detectCountry() {
  try {
    // Read only the country field. Do not persist or send the trace/IP to a third party.
    const trace = await request('/cdn-cgi/trace', false);
    const country = trace.match(/^loc=([A-Z]{2})\s*$/m)?.[1];
    if (country && country !== 'XX') return { country, method: 'country' };
  } catch { /* Local/static previews may not expose Cloudflare's trace. */ }
  for (const language of navigator.languages || [navigator.language]) {
    try {
      const region = new Intl.Locale(language).region;
      if (/^[A-Z]{2}$/.test(region || '')) return { country: region, method: 'browser region' };
    } catch { /* Ignore malformed locale hints. */ }
  }
  return { country: '', method: 'default' };
}
function format(amount, currency, rate) {
  const formatter = new Intl.NumberFormat(navigator.language || 'en', {
    style: 'currency', currency, currencyDisplay: 'code',
    ...(currency === 'INR' ? { maximumFractionDigits: 0, minimumFractionDigits: 0 } : {}),
  });
  return formatter.format(amount * rate);
}

async function init() {
  const select = document.getElementById('price-currency');
  const status = document.getElementById('currency-status');
  const source = document.getElementById('currency-rate-source');
  const prices = [...document.querySelectorAll('[data-price-inr]')];
  if (!select || !status || !prices.length) return;
  const outcomes = await Promise.allSettled([
    loadRates(), detectCountry(), request('/assets/country-currencies.json'),
  ]);
  const data = outcomes[0].status === 'fulfilled' ? outcomes[0].value : null;
  const detected = outcomes[1].status === 'fulfilled' ? outcomes[1].value : { country: '', method: 'default' };
  const countries = outcomes[2].status === 'fulfilled' ? outcomes[2].value.countries || {} : {};
  const rates = data?.rates || { INR: 1 };
  const codes = Object.keys(rates).filter(code => /^[A-Z]{3}$/.test(code));
  const automatic = countries[detected.country] || 'INR';
  const autoCurrency = rates[automatic] ? automatic : rates.USD ? 'USD' : 'INR';
  const options = [...new Set([...PREFERRED.filter(code => codes.includes(code)), ...codes.sort()])];
  select.replaceChildren(new Option(`Auto (${autoCurrency})`, 'AUTO'), ...options.map(code => new Option(code, code)));
  const saved = read(CHOICE_KEY);
  select.value = typeof saved === 'string' && codes.includes(saved) ? saved : 'AUTO';
  select.disabled = false;

  function apply() {
    const currency = select.value === 'AUTO' ? autoCurrency : select.value;
    const rate = rates[currency] || 1;
    for (const node of prices) {
      const amount = Number(node.dataset.priceInr);
      if (!Number.isFinite(amount) || amount < 0) continue;
      node.textContent = amount === 0 ? 'FREE' : currency === 'INR' ? `₹${amount.toLocaleString('en-IN')}` : `≈ ${format(amount, currency, rate)}`;
      node.dataset.displayCurrency = currency;
      node.title = currency === 'INR' ? '' : `Approximate conversion of ₹${amount.toLocaleString('en-IN')}. Checkout is priced in INR.`;
    }
    if (!data) {
      status.textContent = 'Currency rates are temporarily unavailable. Prices are shown in INR. Lite and Pro checkout prices are listed in INR.';
      source.hidden = true;
    } else if (currency === 'INR') {
      status.textContent = 'One-time prices: Lite ₹299 · Pro ₹599. Checkout is priced in INR.';
      source.hidden = true;
    } else {
      const date = new Date(data.time_last_update_unix * 1000).toLocaleDateString(navigator.language || 'en');
      status.textContent = `Approximate conversion · rates updated ${date}. Checkout prices are listed in INR; your payment provider may use a different exchange rate.`;
      source.hidden = false;
    }
    document.documentElement.dataset.priceCurrency = currency;
  }
  select.addEventListener('change', () => { write(CHOICE_KEY, select.value); apply(); });
  apply();
}
init().catch(() => {
  // The original INR markup and buy links remain functional if any enhancement fails.
  const status = document.getElementById('currency-status');
  if (status) status.textContent = 'Prices are shown in INR. Lite and Pro checkout prices are listed in INR.';
});
