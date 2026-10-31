// Inisialisasi Firebase yang aman: hanya berjalan jika .env sudah diisi.
// Task 01 hanya menyiapkan koneksi dasar. Belum ada login, Firestore, atau koleksi data.
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig, isFirebaseConfigured } from './config.js';

let app = null;

export function getFirebaseApp() {
  if (!isFirebaseConfigured()) return null;
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return app;
}

export function getFirebaseAuth() {
  const firebaseApp = getFirebaseApp();
  return firebaseApp ? getAuth(firebaseApp) : null;
}
