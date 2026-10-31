// KERANGKA IndexedDB saja. Fitur transaksi offline BELUM berfungsi.
// Antrean offline yang sebenarnya (ID lokal, idempotency key, sinkronisasi, konflik)
// dikerjakan di Tahap 7 sesuai Technical Specification.
export const OFFLINE_TRANSACTIONS_ENABLED = false;

const DB_NAME = 'retail-grosir-offline';
const DB_VERSION = 1;
const QUEUE_STORE = 'sync_queue'; // placeholder; bentuk datanya belum ditetapkan.

export function isIndexedDbSupported() {
  return typeof indexedDB !== 'undefined';
}

export function openOfflineDb() {
  return new Promise((resolve, reject) => {
    if (!isIndexedDbSupported()) {
      reject(new Error('Browser ini tidak mendukung IndexedDB.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(QUEUE_STORE)) {
        db.createObjectStore(QUEUE_STORE, { keyPath: 'localId' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
