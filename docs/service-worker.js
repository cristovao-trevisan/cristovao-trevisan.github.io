!function(){"use strict";const i=["client/chunk.cc446f83.js","client/index.3c024fc0.js","client/chunk.cd1becdf.js","client/client.779744bb.js","client/index.bea1e1fe.js","client/chunk.f20b8db9.js","client/chunk.cbc16309.js","client/chunk.1689dfdb.js","client/index.8df40487.js","client/curriculum.54d9ca25.js","client/chunk.4a35cc55.js","client/chunk.70cfc114.js","client/index.ffacd0c2.js","client/index.74590d09.js","client/[album].a5eb0835.js","client/NavDesktop.febe62da.js","client/_layout.757911f4.js"].concat(["service-worker-index.html",".nojekyll","cristovao-trevisan-curriculo-artistico.pdf","favicon.png","fonts/street-slab/STRSL___.eot","fonts/street-slab/STRSL___.svg","fonts/street-slab/STRSL___.ttf","fonts/street-slab/STRSL___.woff","global.css","google613a6aecdebcab95.html","img/invisivel-cordao/2048px/CI5A9409_Moment18.jpg","img/invisivel-cordao/2048px/CI5A9409_Moment2.jpg","img/invisivel-cordao/2048px/CI5A9409_Moment24.jpg","img/invisivel-cordao/2048px/IMG_5395.jpg","img/invisivel-cordao/2048px/MVI_0637_Moment.jpg","img/invisivel-cordao/400px/CI5A9409_Moment18.jpg","img/invisivel-cordao/400px/CI5A9409_Moment2.jpg","img/invisivel-cordao/400px/CI5A9409_Moment24.jpg","img/invisivel-cordao/400px/IMG_5395.jpg","img/invisivel-cordao/400px/MVI_0637_Moment.jpg","img/invisivel-cordao/blur/CI5A9409_Moment18.jpg","img/invisivel-cordao/blur/CI5A9409_Moment2.jpg","img/invisivel-cordao/blur/CI5A9409_Moment24.jpg","img/invisivel-cordao/blur/IMG_5395.jpg","img/invisivel-cordao/blur/MVI_0637_Moment.jpg","img/invisivel-cordao/high-resolution/CI5A9409_Moment18.jpg","img/invisivel-cordao/high-resolution/CI5A9409_Moment2.jpg","img/invisivel-cordao/high-resolution/CI5A9409_Moment24.jpg","img/invisivel-cordao/high-resolution/IMG_5395.jpg","img/invisivel-cordao/high-resolution/MVI_0637_Moment.jpg","img/main-links/artist.jpg","img/main-links/engineer.jpg","img/main-links/high-resolution/artist.jpg","img/main-links/high-resolution/engineer.png","img/pictures-2019-06-04/2048px/_ANA1829.jpg","img/pictures-2019-06-04/2048px/_ANA1837.jpg","img/pictures-2019-06-04/2048px/_ANA1869.jpg","img/pictures-2019-06-04/2048px/_ANA1874.jpg","img/pictures-2019-06-04/2048px/_ANA1880.jpg","img/pictures-2019-06-04/2048px/_ANA1882.jpg","img/pictures-2019-06-04/2048px/_ANA1886.jpg","img/pictures-2019-06-04/2048px/_ANA1900.jpg","img/pictures-2019-06-04/2048px/_ANA1915.jpg","img/pictures-2019-06-04/2048px/_ANA1916-2.jpg","img/pictures-2019-06-04/2048px/_ANA1916.jpg","img/pictures-2019-06-04/2048px/_ANA1925.jpg","img/pictures-2019-06-04/2048px/_ANA1926.jpg","img/pictures-2019-06-04/2048px/_ANA1931-2.jpg","img/pictures-2019-06-04/2048px/_ANA1931.jpg","img/pictures-2019-06-04/400px/_ANA1829.jpg","img/pictures-2019-06-04/400px/_ANA1837.jpg","img/pictures-2019-06-04/400px/_ANA1869.jpg","img/pictures-2019-06-04/400px/_ANA1874.jpg","img/pictures-2019-06-04/400px/_ANA1880.jpg","img/pictures-2019-06-04/400px/_ANA1882.jpg","img/pictures-2019-06-04/400px/_ANA1886.jpg","img/pictures-2019-06-04/400px/_ANA1900.jpg","img/pictures-2019-06-04/400px/_ANA1915.jpg","img/pictures-2019-06-04/400px/_ANA1916-2.jpg","img/pictures-2019-06-04/400px/_ANA1916.jpg","img/pictures-2019-06-04/400px/_ANA1925.jpg","img/pictures-2019-06-04/400px/_ANA1926.jpg","img/pictures-2019-06-04/400px/_ANA1931-2.jpg","img/pictures-2019-06-04/400px/_ANA1931.jpg","img/pictures-2019-06-04/blur/_ANA1829.jpg","img/pictures-2019-06-04/blur/_ANA1837.jpg","img/pictures-2019-06-04/blur/_ANA1869.jpg","img/pictures-2019-06-04/blur/_ANA1874.jpg","img/pictures-2019-06-04/blur/_ANA1880.jpg","img/pictures-2019-06-04/blur/_ANA1882.jpg","img/pictures-2019-06-04/blur/_ANA1886.jpg","img/pictures-2019-06-04/blur/_ANA1900.jpg","img/pictures-2019-06-04/blur/_ANA1915.jpg","img/pictures-2019-06-04/blur/_ANA1916-2.jpg","img/pictures-2019-06-04/blur/_ANA1916.jpg","img/pictures-2019-06-04/blur/_ANA1925.jpg","img/pictures-2019-06-04/blur/_ANA1926.jpg","img/pictures-2019-06-04/blur/_ANA1931-2.jpg","img/pictures-2019-06-04/blur/_ANA1931.jpg","img/pictures-2019-06-04/high-resolution/_ANA1829.jpg","img/pictures-2019-06-04/high-resolution/_ANA1837.jpg","img/pictures-2019-06-04/high-resolution/_ANA1869.jpg","img/pictures-2019-06-04/high-resolution/_ANA1874.jpg","img/pictures-2019-06-04/high-resolution/_ANA1880.jpg","img/pictures-2019-06-04/high-resolution/_ANA1882.jpg","img/pictures-2019-06-04/high-resolution/_ANA1886.jpg","img/pictures-2019-06-04/high-resolution/_ANA1900.jpg","img/pictures-2019-06-04/high-resolution/_ANA1915.jpg","img/pictures-2019-06-04/high-resolution/_ANA1916-2.jpg","img/pictures-2019-06-04/high-resolution/_ANA1916.jpg","img/pictures-2019-06-04/high-resolution/_ANA1925.jpg","img/pictures-2019-06-04/high-resolution/_ANA1926.jpg","img/pictures-2019-06-04/high-resolution/_ANA1931-2.jpg","img/pictures-2019-06-04/high-resolution/_ANA1931.jpg","logo-192.png","logo-512.png","manifest.json","robots.txt"]),e=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1560831833185").then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",i=>{i.waitUntil(caches.keys().then(async i=>{for(const e of i)"cache1560831833185"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const t=new URL(i.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&e.has(t.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline1560831833185").then(async e=>{try{const t=await fetch(i.request);return e.put(i.request,t.clone()),t}catch(t){const g=await e.match(i.request);if(g)return g;throw t}}))))})}();
