const CACHE_NAME = 'namyang-pwa-v2';

const urlsToCache = [
  './',
  './index.html',
  './notice.html',
  './manifest.json',
  './nam-192.png',
  './nam-512.png'
];
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister().then(() => {
    return self.clients.matchAll().then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
  }));
});
