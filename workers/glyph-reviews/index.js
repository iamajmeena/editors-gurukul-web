const ORIGINS = new Set(['https://editorsgurukul.com', 'https://www.editorsgurukul.com']);
const response = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), {
  status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store',
    'x-content-type-options': 'nosniff', ...headers },
});
const fields = 'id, name, profession, rating, comment, created_at, updated_at';
export async function summary(db, offset = 0) {
  const [stats, list] = await db.batch([
    db.prepare('SELECT COUNT(*) AS count, ROUND(AVG(rating), 1) AS average FROM reviews'),
    db.prepare(`SELECT ${fields} FROM reviews ORDER BY created_at DESC, id DESC LIMIT 12 OFFSET ?1`).bind(offset),
  ]);
  const count = stats.results[0].count;
  return { count, average: stats.results[0].average, reviews: list.results,
    nextOffset: offset + list.results.length < count ? offset + list.results.length : null };
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/glyph-reviews') return response({ error: 'Not found.' }, 404);
    try {
      if (request.method === 'GET') {
        const raw = url.searchParams.get('offset') ?? '0';
        if (!/^\d{1,6}$/.test(raw)) return response({ error: 'Invalid page.' }, 400);
        return response(await summary(env.DB, Number(raw)));
      }
      if (request.method !== 'POST') return response({ error: 'Method not allowed.' }, 405, { allow: 'GET, POST' });
      // Same-origin JSON submissions; the token never appears in public review data.
      if (!ORIGINS.has(request.headers.get('origin'))) return response({ error: 'Please submit from the Glyph Motions website.' }, 403);
      if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return response({ error: 'JSON required.' }, 415);
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      if (env.SUBMISSIONS && !(await env.SUBMISSIONS.limit({ key: ip })).success) {
        return response({ error: 'Too many submissions. Please wait a minute and try again.' }, 429, { 'retry-after': '60' });
      }
      // Bound the actual request stream, including chunked requests.
      const reader = request.body?.getReader();
      if (!reader) return response({ error: 'Please complete the form.' }, 400);
      const chunks = []; let size = 0;
      while (true) {
        const { value, done } = await reader.read(); if (done) break;
        size += value.byteLength;
        if (size > 8192) { await reader.cancel(); return response({ error: 'Submission too large.' }, 413); }
        chunks.push(value);
      }
      const bytes = new Uint8Array(size); let position = 0;
      for (const chunk of chunks) { bytes.set(chunk, position); position += chunk.length; }
      let body;
      try { body = JSON.parse(new TextDecoder().decode(bytes)); } catch { return response({ error: 'Invalid submission.' }, 400); }
      if (!body || typeof body !== 'object') return response({ error: 'Invalid submission.' }, 400);
      if (body.website) return response({ error: 'Unable to accept this submission.' }, 400);
      const clean = (v) => typeof v === 'string' ? v.normalize('NFC').trim().replace(/[\u0000-\u001f\u007f]/g, ' ') : '';
      const name = clean(body.name), profession = clean(body.profession), comment = clean(body.comment);
      if (name.length < 2 || name.length > 60) return response({ error: 'Enter your name (2-60 characters).' }, 400);
      if (profession.length < 2 || profession.length > 80) return response({ error: 'Enter your profession (2-80 characters).' }, 400);
      if (!Number.isInteger(body.rating) || body.rating < 1 || body.rating > 5) return response({ error: 'Choose a rating from 1 to 5 stars.' }, 400);
      if (comment.length > 600) return response({ error: 'Keep your feedback within 600 characters.' }, 400);
      if (body.consent !== true) return response({ error: 'Confirm that your rating may be shown publicly.' }, 400);
      if (typeof body.token !== 'string' || !/^[a-f0-9-]{36}$/i.test(body.token)) return response({ error: 'Please reload the page and try again.' }, 400);
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(body.token));
      const reviewer = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, '0')).join('');
      const now = new Date().toISOString();
      const result = await env.DB.prepare(`INSERT INTO reviews (id, reviewer_hash, name, profession, rating, comment, created_at, updated_at)
        VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?7)
        ON CONFLICT(reviewer_hash) DO UPDATE SET name=excluded.name, profession=excluded.profession,
        rating=excluded.rating, comment=excluded.comment, updated_at=excluded.updated_at
        RETURNING ${fields}`).bind(crypto.randomUUID(), reviewer, name, profession, body.rating, comment, now).first();
      return response({ ok: true, review: result, ...await summary(env.DB) });
    } catch {
      return response({ error: 'Ratings are temporarily unavailable. Please try again shortly.' }, 503);
    }
  },
};
