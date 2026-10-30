import { defineConfig } from 'vite';

// Konfigurasi Vite minimal. Variabel .env yang diawali VITE_ otomatis tersedia di frontend.
export default defineConfig({
  server: { port: 5173 },
  build: { outDir: 'dist', sourcemap: false },
});
