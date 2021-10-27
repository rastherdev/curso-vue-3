const CACHE_NAME = "v1_cache_gradient_generator_vue";
const urlsToCache = [
  "./",
  "./?umt_source=web_app_manifest",
  "./img/favicon.png",
  "./img/icon32.png",
  "./pages/fallback.html",
  "./img/icon64.png",
  "./img/icon128.png",
  "./img/icon256.png",
  "./img/icon512.png",
  "./img/icon1024.png",
  "./img/maskable.png",
  "./js/main.js",
  "https://unpkg.com/vue@next",
  "./js/mountApp.js",
  "./css/style.css",
  "./manifest.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache
        .addAll(urlsToCache)
        .then(() => self.skipWaiting())
        .catch((err) => console.log(err))
    )
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    }).catch(
      () => caches.match("./pages/fallback.html")
      )
  );
});
