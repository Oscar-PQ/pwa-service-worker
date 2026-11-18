const CACHE = 'cache-pwa-v1';
const BASE = self.location.hostname.endsWith('github.io')
    ? self.location.pathname.replace(/\/sw\.js$/, '')
    : '';

const STATIC_FILES = [
    `${BASE}/`,
    `${BASE}/index.html`,
    `${BASE}/css/style.css`,
    `${BASE}/img/main.jpg`,
    `${BASE}/img/main2.jpg`,
    `${BASE}/js/app.js`,
    `${BASE}/manifest.json`,
    `${BASE}/pages/pagina2.html`,
    `${BASE}/pages/offline.html`
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(STATIC_FILES))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE).map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;

            return fetch(event.request)
                .catch(() => {
                    if (event.request.headers.get('accept').includes('text/html')) {
                        return caches.match(`${BASE}/pages/offline.html`);
                    }
                });
        })
    );
});
