var cacheName = 'FitBuddy'; // Corrigido o nome do cache

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/index.html',

        '/src/components/menuHome.js',
        '/src/components/menuTreino.js',
        '/src/components/menuDescobrir.js',
        '/src/components/menuPerfil.js',
    
        '/src/css/styles.css',
        
        '/src/pages/treino/treino.html',
        '/src/pages/descobrir/descobrir.html',
        '/src/pages/perfil/perfil.html',
      ]))
  );
});

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});