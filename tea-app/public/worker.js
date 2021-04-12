console.log("Hi, Service worker here just checking in. 🤓");

const APP_PREFIX = "Steep - ";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;
const DATA_CACHE_NAME = "Data-cache-v1"
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.webmanifest",        
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",    
    

];