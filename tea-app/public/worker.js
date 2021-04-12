// console.log("Hi, Service worker here just checking in. 🤓");

// const APP_PREFIX = "Steep - ";
// const VERSION = "version_01";
// const CACHE_NAME = APP_PREFIX + VERSION;
// //const DATA_CACHE_NAME = "Data-cache-v1"
// const urlsToCache = [
//     "/",
//     "/index.html",
//     "/manifest.webmanifest",        
//     "/images/icons/icon-96x96.png",
//     "/images/icons/icon-72x72.png",
//     "/images/icons/icon-128x128.png",
//     "/images/icons/icon-144x144.png",
//     "/images/icons/icon-152x152.png",
//     "/images/icons/icon-192x192.png",
//     "/images/icons/icon-384x384.png",
//     "/images/icons/icon-512x512.png",    
    

// ];

// // Install a service worker
// self.addEventListener('install', event => {
//     // Perform install steps
//     event.waitUntil(
//       caches.open(CACHE_NAME)
//         .then(function(cache) {
//           console.log('Opened cache');
//           return cache.addAll(urlsToCache);
//         })
//     );
// });
  
// // Cache and return requests
// self.addEventListener('fetch', event => {
// event.respondWith(
//     caches.match(event.request)
//     .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//         return response;
//         }
//         return fetch(event.request);
//     }
//     )
// );
// });
  
// // Update a service worker
// self.addEventListener('activate', event => {
// let cacheWhitelist = ['Steep'];
// event.waitUntil(
//     caches.keys().then(cacheNames => {
//     return Promise.all(
//         cacheNames.map(cacheName => {
//         if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//         }
//         })
//     );
//     })
// );
// });