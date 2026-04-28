// ── Auto-versioned cache using deploy timestamp ───────────────
// DEPLOY_TIME is injected by Vercel build — changes on every deploy
// So the cache name is always unique per deployment — no manual bumping needed

const DEPLOY_TIME = typeof __DEPLOY_TIME__ !== "undefined" ? __DEPLOY_TIME__ : Date.now();
const CACHE = `salesops-${DEPLOY_TIME}`;
const ASSETS = [
  "/",
  "/index.html",
  "/data.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install — cache all assets
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clear ALL old caches immediately
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log("Deleting old cache:", k);
        return caches.delete(k);
      }))
    )
  );
  self.clients.claim();
});

// Fetch strategy:
// - sw.js itself: always network (never cache the service worker)
// - data.js: network first, cache fallback (so target updates show immediately)
// - index.html: network first, cache fallback
// - icons/manifest: cache first (rarely change)
// - Google APIs: network only
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Never cache the service worker itself
  if(url.pathname === "/sw.js") {
    e.respondWith(fetch(e.request));
    return;
  }

  // Google APIs — network only, no caching
  if(url.hostname.includes("googleapis.com") ||
     url.hostname.includes("docs.google.com") ||
     url.hostname.includes("accounts.google.com")) {
    e.respondWith(fetch(e.request).catch(()=>new Response("",{status:503})));
    return;
  }

  // data.js and index.html — network first so updates appear immediately
  if(url.pathname === "/data.js" || url.pathname === "/" || url.pathname === "/index.html") {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          if(r.status === 200) {
            const clone = r.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Everything else — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(r => {
        if(r.status === 200) {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return r;
      });
    })
  );
});

// Tell all open clients to reload when new SW activates
self.addEventListener("message", e => {
  if(e.data === "skipWaiting") self.skipWaiting();
});
