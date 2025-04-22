
const CACHE_NAME = 'venom-request-live-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/venom_request_live_app_icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
