const CACHE_NAME = 'orcamentos-bodoquena-v2';
const URLS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'service-worker.js',
  'logo_bodoquena.png',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
