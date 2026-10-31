import '../styles/base.css';
import '../styles/layout.css';
import '../styles/components.css';
import { createLayout } from './layout.js';
import { startRouter } from './router.js';
import { getFirebaseApp } from '../services/firebase/init.js';
import { isFirebaseConfigured } from '../services/firebase/config.js';

// Titik awal aplikasi.
const layout = createLayout(document.getElementById('app'));

if (isFirebaseConfigured()) {
  getFirebaseApp(); // hanya inisialisasi dasar; login belum dibuat
} else {
  console.info('Firebase belum dikonfigurasi. Salin .env.example menjadi .env lalu isi nilainya.');
}

startRouter({ contentEl: layout.contentEl, onNavigate: layout.setActive });
