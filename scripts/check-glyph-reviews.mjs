import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import worker from '../workers/glyph-reviews/index.js';
const sql = new DatabaseSync(':memory:');
sql.exec(readFileSync(new URL('../workers/glyph-reviews/schema.sql', import.meta.url), 'utf8'));
const DB = {
  prepare(query) {
    const make = (args = []) => ({
      bind(...values) { return make(values); },
      async first() { return sql.prepare(query).get(...args); },
      async all() { return { results: sql.prepare(query).all(...args) }; },
    });
    return make();
  },
  batch(statements) { return Promise.all(statements.map(s => s.all())); },
};
const good = { name: 'Test Editor', profession: 'Filmmaker', rating: 5, comment: 'Good motion.', consent: true, token: crypto.randomUUID() };
async function call(body, origin = 'https://editorsgurukul.com', env = { DB }) {
  const req = new Request('https://editorsgurukul.com/api/glyph-reviews', {
    method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(body),
  });
  return worker.fetch(req, env);
}
assert.equal((await call(good, 'https://other.example')).status, 403);
assert.equal((await call({ ...good, consent: false })).status, 400);
for (const rating of [0, 6, 1.5, '5', null]) assert.equal((await call({ ...good, rating })).status, 400);
assert.equal((await call({ ...good, name: 'A' })).status, 400);
assert.equal((await call({ ...good, profession: '' })).status, 400);
assert.equal((await call({ ...good, comment: 'a'.repeat(601) })).status, 400);
assert.equal((await call({ ...good, website: 'spam.example' })).status, 400);
assert.equal((await call({ ...good, token: 'bad' })).status, 400);
assert.equal((await call({ ...good, extra: 'x'.repeat(9000) })).status, 413);
assert.equal((await call(good, undefined, { DB, SUBMISSIONS: { limit: async () => ({ success: false }) } })).status, 429);
let r = await call(good); assert.equal(r.status, 200); let data = await r.json();
assert.equal(data.count, 1); assert.equal(data.average, 5);
assert.equal(data.reviews[0].name, 'Test Editor'); assert.ok(!('reviewer_hash' in data.reviews[0]));
// The same browser updates its rating, rather than inflating the count.
data = await (await call({ ...good, rating: 1, name: 'अजय', comment: "<img src=x onerror=alert(1)> '; DROP TABLE reviews; --" })).json();
assert.equal(data.count, 1); assert.equal(data.average, 1); assert.equal(data.review.name, 'अजय');
for (let i = 0; i < 13; i++) assert.equal((await call({ ...good, token: crypto.randomUUID() })).status, 200);
data = await (await worker.fetch(new Request('https://editorsgurukul.com/api/glyph-reviews'), { DB })).json();
assert.equal(data.count, 14); assert.equal(data.reviews.length, 12); assert.equal(data.nextOffset, 12);
data = await (await worker.fetch(new Request('https://editorsgurukul.com/api/glyph-reviews?offset=12'), { DB })).json();
assert.equal(data.reviews.length, 2); assert.equal(data.nextOffset, null);
assert.equal((await worker.fetch(new Request('https://editorsgurukul.com/api/glyph-reviews?offset=-1'), { DB })).status, 400);
assert.equal((await worker.fetch(new Request('https://editorsgurukul.com/api/glyph-reviews'), {})).status, 503);
console.log('PASS: origin, validation, 1-5 stars, consent, payload bounds, rate limiting, Unicode, SQL injection safety, anonymous public data, duplicate updates, aggregation, pagination and storage failure.');
