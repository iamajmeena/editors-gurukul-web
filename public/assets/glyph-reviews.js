(() => {
  const section = document.getElementById('reviews'); if (!section) return;
  const form = section.querySelector('form'), message = section.querySelector('.gr-message');
  const submit = section.querySelector('.gr-submit'), list = section.querySelector('.gr-list');
  const summary = section.querySelector('.gr-summary'), empty = section.querySelector('.gr-empty');
  const more = section.querySelector('.gr-more'), ratingLabel = section.querySelector('.gr-rating-label');
  let nextOffset = null, savedToken, hasSubmitted = false, revision = 0;
  try { savedToken = localStorage.getItem('glyph-review-token'); hasSubmitted = localStorage.getItem('glyph-review-submitted') === 'yes'; } catch {}
  const token = /^[a-f0-9-]{36}$/i.test(savedToken || '') ? savedToken : crypto.randomUUID();
  try { localStorage.setItem('glyph-review-token', token); } catch {}
  if (hasSubmitted) submit.textContent = 'Update your rating';
  const labels = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
  form.addEventListener('change', () => {
    const value = Number(new FormData(form).get('rating'));
    section.querySelectorAll('.gr-star').forEach((star, i) => star.classList.toggle('gr-lit', i < value));
    ratingLabel.textContent = value ? `${value} out of 5 - ${labels[value - 1]}` : 'Choose your rating';
  });
  const el = (tag, className, text) => { const e = document.createElement(tag); e.className = className; e.textContent = text; return e; };
  function render(data, append = false) {
    summary.textContent = data.count ? `${data.average.toFixed(1)} / 5 · ${data.count} ${data.count === 1 ? 'rating' : 'ratings'}` : 'No ratings yet. Be the first.';
    if (!append) list.replaceChildren();
    const existing = new Set([...list.children].map(e => e.dataset.id));
    for (const r of data.reviews) {
      if (existing.has(r.id)) continue;
      const card = el('article', 'gr-review', ''); card.dataset.id = r.id;
      card.append(el('div', 'gr-person', r.name), el('div', 'gr-profession', r.profession));
      const stars = el('div', 'gr-review-stars', '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)); stars.setAttribute('aria-label', `${r.rating} out of 5 stars`);card.append(stars);
      if (r.comment) card.append(el('p', 'gr-comment', r.comment));
      card.append(el('div', 'gr-date', new Date(r.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })));
      list.append(card);
    }
    empty.hidden = data.count > 0;
    empty.textContent = 'Tried the pack? Be the first to share your experience.';
    nextOffset = data.nextOffset; more.hidden = nextOffset === null;
  }
  async function request(options, offset = 0) {
    const r = await fetch(`/api/glyph-reviews${offset ? `?offset=${offset}` : ''}`, { ...options, signal: AbortSignal.timeout(15000) });
    let data; try { data = await r.json(); } catch { throw new Error('Ratings could not be reached. Please try again shortly.'); }
    if (!r.ok) throw new Error(data.error || 'Please try again shortly.'); return data;
  }
  async function load(append = false) {
    const startedAt = revision;
    more.disabled = true;
    try { const data = await request({}, append ? nextOffset : 0); if (revision === startedAt) render(data, append); }
    catch { if (!append) { summary.textContent = 'Community ratings'; empty.textContent = 'Could not load ratings. Refresh to try again.'; } else { message.textContent = 'Could not load more ratings. Please try again.'; } }
    finally { more.disabled = false; }
  }
  more.addEventListener('click', () => load(true));
  form.addEventListener('submit', async event => {
    event.preventDefault(); if (!form.reportValidity()) return;
    submit.disabled = true; message.dataset.error = 'false'; message.textContent = 'Saving your rating…';
    const fd = new FormData(form);
    try {
      const data = await request({ method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({
        token, name: fd.get('name'), profession: fd.get('profession'), rating: Number(fd.get('rating')),
        comment: fd.get('comment'), consent: fd.get('consent') === 'on', website: fd.get('website'),
      }) });
      revision++; render(data); hasSubmitted = true;
      try { localStorage.setItem('glyph-review-submitted', 'yes'); } catch {}
      message.textContent = 'Thank you! Your rating is saved. You can update it from this browser.';
      submit.textContent = 'Update your rating';
    } catch (error) { message.dataset.error = 'true'; message.textContent = error.message === 'The operation was aborted due to timeout' ? 'Connection timed out. Please try again.' : error.message; }
    finally { submit.disabled = false; }
  });
  // The section is below the main product content; defer its network request until nearby.
  if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => { if(entries.some(e=>e.isIntersecting)) { observer.disconnect(); load(); } }, { rootMargin: '400px' }); observer.observe(section); }
  else load();
})();
