// Konfigurasi web Firebase dibaca dari .env. Ini BUKAN rahasia, tetapi tetap tidak ditulis di kode.
// Service account / private key tidak pernah boleh ada di frontend.
const env = import.meta.env;

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const REQUIRED = ['apiKey', 'authDomain', 'projectId', 'appId'];

export function isFirebaseConfigured() {
  return REQUIRED.every((key) => Boolean(firebaseConfig[key]));
}
