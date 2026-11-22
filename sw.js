// Offline support. Network first, so visitors always get the latest
// deploy when online; the cached copy is only used when offline.
// Bump CACHE (and the ?v= on styles.css / script.js in index.html)
// whenever site files change.
const CACHE = "yy-v2";
const CORE = [
  "./",
  "index.html",
  "styles.css?v=20261122",
  "script.js?v=20261122",
  "manifest.webmanifest",
  "assets/favicon.svg",
  "assets/icon-192.png",
  "assets/Yelyn_Yoo_Resume.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then((cached) => cached || caches.match("index.html"))
      )
  );
});
