const CACHE_NAME = 'koketria-game-v4';
const RUNTIME_CACHE = 'koketria-runtime-v4';
const CORE_ASSETS = ['/manifest.webmanifest', '/pwa-icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key)),
      )),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  const isNavigation = request.mode === 'navigate'
    || request.destination === 'document'
    || url.pathname === '/'
    || url.pathname === '/index.html';
  const isAssetFile = url.pathname.startsWith('/assets/');

  if (isNavigation) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh && fresh.status === 200 && fresh.type === 'basic') {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put('/index.html', fresh.clone());
        }
        return fresh;
      } catch {
        const fallback = await caches.match('/index.html');
        if (fallback) {
          return fallback;
        }
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }

  if (isAssetFile) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh && fresh.status === 200 && fresh.type === 'basic') {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(request, fresh.clone());
        }
        return fresh;
      } catch {
        const cached = await caches.match(request);
        if (cached) {
          return cached;
        }
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      const fresh = await fetch(request);
      if (fresh && fresh.status === 200 && fresh.type === 'basic') {
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(request, fresh.clone());
      }
      return fresh;
    } catch {
      const fallback = await caches.match(request);
      if (fallback) {
        return fallback;
      }
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
