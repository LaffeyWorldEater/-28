const VERSION = "v2";                       // ← поднимите версию!
const SCOPE = self.registration.scope;
const CACHE_PREFIX = `-28:${SCOPE}:`;
const CACHE_NAME = CACHE_PREFIX + VERSION;

const FILES = [
  "./manifest.json",
  "./s1_cat.js",
  "./s1_catalog.js",
  "./s2_catalog.js",
  "./script.js",
  "./conditions.js",
  "./index.html",
  "./s2.html",
  "./s3.html",
  "./s_css.css",
  "./images/1.png",
  "./images/2.png",
  "./images/3.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        FILES.map((path) =>
          cache.add(new Request(new URL(path, SCOPE), { cache: "reload" }))
            .catch(err => console.warn("Не закэшировано:", path, err))
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      const oldVersions = names.filter(
        (name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME
      );
      return Promise.all(oldVersions.map((name) => caches.delete(name)));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || !request.url.startsWith(SCOPE)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const saved = await cache.match(request);
      if (saved) return saved;
      try {
        return await fetch(request);
      } catch (err) {
        if (request.mode === "navigate") {
          return cache.match(new URL("./index.html", SCOPE));
        }
        throw err;
      }
    })
  );
});
