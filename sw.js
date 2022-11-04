const staticDevPokemon = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/pokemon1.jpg",
  "/images/pokemon2.jpg",
  "/images/pokemon3.jpg",
  "/images/pokemon4.jpg",
  "/images/pokemon5.jpg",
  "/images/pokemon6.jpg",
  "/images/pokemon7.jpg",
  "/images/pokemon8.jpg",
  "/images/pokemon9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPokemon).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});