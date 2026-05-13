// AI·Press likes API (Cloudflare Worker + KV)
//
// Endpoints:
//   GET  /stats?slugs=a,b,c   → { a: { likes: 5 }, b: { likes: 0 }, ... }
//   POST /like  { slug, action: "add" | "remove" }   → { slug, likes: N }
//
// CORS: allows besl.github.io and localhost (configure ORIGINS below).
// Storage: KV namespace bound as `STATS`. Keys: `like:<slug>` → integer string.

const ORIGINS = [
  "https://besl.github.io",
  "http://localhost:4321",
  "http://localhost:3000",
];

function corsHeaders(origin) {
  const ok = ORIGINS.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(data, init = {}, origin = "") {
  return new Response(JSON.stringify(data), {
    status: init.status ?? 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...corsHeaders(origin),
      ...(init.headers ?? {}),
    },
  });
}

function isValidSlug(s) {
  return typeof s === "string" && /^[a-z0-9-]{1,80}$/.test(s);
}

async function getCount(env, slug) {
  const v = await env.STATS.get(`like:${slug}`);
  const n = v == null ? 0 : parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

async function setCount(env, slug, n) {
  const safe = Math.max(0, Math.floor(n));
  await env.STATS.put(`like:${slug}`, String(safe));
  return safe;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // GET /stats?slugs=a,b,c
    if (request.method === "GET" && url.pathname === "/stats") {
      const raw = url.searchParams.get("slugs") || "";
      const slugs = raw.split(",").map(s => s.trim()).filter(isValidSlug).slice(0, 60);
      const out = {};
      await Promise.all(slugs.map(async (s) => { out[s] = { likes: await getCount(env, s) }; }));
      return json(out, {}, origin);
    }

    // POST /like  { slug, action }
    if (request.method === "POST" && url.pathname === "/like") {
      let body;
      try { body = await request.json(); }
      catch { return json({ error: "invalid_json" }, { status: 400 }, origin); }

      const slug = body?.slug;
      const action = body?.action;
      if (!isValidSlug(slug)) return json({ error: "bad_slug" }, { status: 400 }, origin);
      if (action !== "add" && action !== "remove") {
        return json({ error: "bad_action" }, { status: 400 }, origin);
      }

      const current = await getCount(env, slug);
      const next = action === "add" ? current + 1 : current - 1;
      const saved = await setCount(env, slug, next);
      return json({ slug, likes: saved }, {}, origin);
    }

    return json({ error: "not_found" }, { status: 404 }, origin);
  },
};
