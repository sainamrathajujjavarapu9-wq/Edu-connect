const CACHE_NAME = "eduaccess-cache-v1";
const urlsToCache = [
  "index.html",
  "style.css",
  "app.js",
  "script.js",
  "lessons.html",
  "quiz.html",
  "audio.html",
  "dashboard.html",
  "download.html",
  "assets/videos/math-basics.mp4",
  "assets/audio/math-basics.mp3" 
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
