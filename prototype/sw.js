const CACHE_NAME="quiet-puzzle-alpha-v1";
const REQUIRED=["./index.html","./engines.mjs"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(REQUIRED)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(n=>n.startsWith("quiet-puzzle-alpha-")&&n!==CACHE_NAME).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",event=>{
 const req=event.request;if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(resp=>{if(resp.ok&&new URL(req.url).pathname.startsWith(new URL(self.registration.scope).pathname)){const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(req,copy))}return resp})));
});
