module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,css,js}"],
  swDest: "build/service-worker.js",
  clientsClaim: true,
  skipWaiting: true,
  // This ensures all routes work with the service worker
  navigateFallback: "/index.html",
  navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
};
