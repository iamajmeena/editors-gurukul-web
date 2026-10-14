// Cloudflare Pages Function: link-in-bio data for /links, edited from /links-admin.
// Needs in Cloudflare Pages > Settings > Bindings / Variables:
//   LINKS_KV        (KV namespace binding)
//   ADMIN_PASSWORD  (secret)

const JSON_HEADERS = { "content-type": "application/json", "cache-control": "no-store" };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

function clean(input) {
  const str = (v, max) => String(v ?? "").trim().slice(0, max);
  const links = Array.isArray(input && input.links) ? input.links.slice(0, 15) : [];
  const out = {
    name: str(input && input.name, 60),
    tagline: str(input && input.tagline, 160),
    links: [],
  };
  for (const l of links) {
    const url = str(l && l.url, 600);
    if (!/^(https?:\/\/|mailto:)/i.test(url)) continue;
    out.links.push({
      id: str(l.id, 40) || crypto.randomUUID(),
      title: str(l.title, 80),
      desc: str(l.desc, 120),
      url,
      visible: l.visible !== false,
    });
  }
  return out;
}

async function sameSecret(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(a)),
    crypto.subtle.digest("SHA-256", enc.encode(b)),
  ]);
  const x = new Uint8Array(ha);
  const y = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export async function onRequestGet({ env }) {
  if (!env.LINKS_KV) return json({ configured: false, data: null });
  const raw = await env.LINKS_KV.get("links");
  return json({ configured: true, data: raw ? JSON.parse(raw) : null });
}

// Password check only (used by the login screen), no write.
export async function onRequestPost({ request, env }) {
  if (!env.LINKS_KV || !env.ADMIN_PASSWORD) return json({ ok: false, error: "not_configured" }, 503);
  const pw = request.headers.get("x-admin-password") || "";
  if (!(await sameSecret(pw, env.ADMIN_PASSWORD))) return json({ ok: false, error: "wrong_password" }, 401);
  return json({ ok: true });
}

export async function onRequestPut({ request, env }) {
  if (!env.LINKS_KV || !env.ADMIN_PASSWORD) return json({ ok: false, error: "not_configured" }, 503);
  const pw = request.headers.get("x-admin-password") || "";
  if (!(await sameSecret(pw, env.ADMIN_PASSWORD))) return json({ ok: false, error: "wrong_password" }, 401);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "bad_json" }, 400);
  }
  const data = clean(body);
  await env.LINKS_KV.put("links", JSON.stringify(data));
  return json({ ok: true, data });
}
