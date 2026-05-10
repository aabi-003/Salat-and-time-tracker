/**
 * SalatTracker — Service Worker
 * Handles: caching (offline support), push notifications
 */

const CACHE_NAME = 'salattracker-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600;700&display=swap',
];

/* ── INSTALL ───────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS.map(url => new Request(url, { mode: 'no-cors' }))).catch(() => {
        // Cache what we can
        return cache.addAll(['/index.html', '/css/style.css', '/js/app.js', '/manifest.json']);
      });
    })
  );
  self.skipWaiting();
});

/* ── ACTIVATE ──────────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── FETCH (offline-first for app shell) ─ */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Network-first for API calls
  if (url.hostname === 'api.aladhan.com') {
    event.respondWith(
      fetch(event.request).catch(() => new Response('{"code":500}', { headers: { 'Content-Type': 'application/json' }}))
    );
    return;
  }

  // Cache-first for app shell
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
      return res;
    })).catch(() => caches.match('/index.html'))
  );
});

/* ── PUSH NOTIFICATIONS ────────────────── */
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title = data.title || '🕌 SalatTracker';
  const options = {
    body: data.body || "It's time for prayer!",
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: data.tag || 'prayer',
    requireInteraction: true,
    actions: [
      { action: 'open', title: '✅ Open App' },
      { action: 'dismiss', title: '🔕 Dismiss' },
    ]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

/* ── NOTIFICATION CLICK ─────────────────── */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      const app = list.find(c => c.url.includes(self.location.origin));
      if (app) { app.focus(); return; }
      return clients.openWindow('/');
    })
  );
});
