// console.log("Hi, I'm also a service worker... 🤓");

// const APP_PREFIX = "Steep - ";
// const VERSION = "version_01";
// const CACHE_NAME = APP_PREFIX + VERSION;
// //const DATA_CACHE_NAME = "Data-cache-v1"
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/manifest.webmanifest",
//   "/images/logo16.png",
//   "/images/logo24.png",
//   "/images/logo32.png",
//   "/images/logo48.png",
//   "/images/logo72.png",
//   "/images/logo96.png",
//   "/images/logo144.png",
//   "/images/logo192.png",
//   "/images/logo512.png"
  
// ];

// // Install a service worker
// self.addEventListener("install", (event) => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Cache and return requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// // Update a service worker
// self.addEventListener("activate", (event) => {
//   let cacheWhitelist = ["Steep"];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
