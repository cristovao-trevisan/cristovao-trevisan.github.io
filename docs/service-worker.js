!function(){"use strict";const e=["client/chunk.c5b8d25a.js","client/chunk.af0496b1.js","client/index.6f2f9548.js","client/client.40dcd046.js","client/index.20be48d2.js","client/about.0f14e89f.js","client/NavDesktop.1c8e4a9f.js","client/_layout.d4882c68.js","client/chunk.04354f7d.js"].concat(["service-worker-index.html",".nojekyll","favicon.png","fonts/street-slab/STRSL___.eot","fonts/street-slab/STRSL___.svg","fonts/street-slab/STRSL___.ttf","fonts/street-slab/STRSL___.woff","global.css","great-success.png","img/full/familia-nada-danca.jpg","img/full/o-pensador-com-duvida.png","img/main-links/artist.jpg","img/main-links/engineer.jpg","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1559614501848").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1559614501848"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1559614501848").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
