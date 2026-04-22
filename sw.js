const CACHE = "salesops-v3";
const ASSETS = [
  "/",
  "/index.html",
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

// Activate — clear old caches
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first for app shell, network first for API calls
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Google Sheets API — always network, fall back to cache
  if (url.hostname.includes("googleapis.com") || url.hostname.includes("sheets.google")) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // App shell — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (r.status === 200) {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return r;
      });
    })
  );
});

// Background sync — flush queued tracker data when online
self.addEventListener("sync", e => {
  if (e.tag === "sync-tracker") {
    e.waitUntil(flushQueue());
  }
});

async function flushQueue() {
  // Clients handle queue flush on "online" event
  const clients = await self.clients.matchAll();
  clients.forEach(c => c.postMessage({type: "flush-queue"}));
}
