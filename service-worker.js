const CACHE_NAME='kayn-v17-core-engine-foundation';
const ASSETS=['/','/index.html','/vista-3d.html','/editor-modulos.html','/manifest.json','/logo.png','/icon-192.png','/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('/index.html','/vista-3d.html','/editor-modulos.html'))))});
