// Install offline cache for Bloom. IndexedDB records are never included in the cache.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Bloom offline setup failed:', err));
  });
}
