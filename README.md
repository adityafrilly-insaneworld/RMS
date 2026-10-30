# Toko Retail & Grosir - Fondasi Proyek (Task 01)

Kerangka aplikasi: Vite + HTML/CSS/JavaScript ES Modules. Belum ada fitur bisnis, login, atau data.

## Kebutuhan
- Node.js 20 atau lebih baru disarankan (cek: `node -v`)

## Instalasi
```
npm install
```

## Konfigurasi
1. Salin `.env.example` menjadi `.env`.
2. Isi nilai Firebase dari Firebase Console > Project settings > Your apps > Web app.
3. Untuk production, buat `.env.production` dengan project Firebase production (terpisah dari development).

Tanpa `.env`, aplikasi tetap jalan dan menampilkan "Firebase: belum dikonfigurasi".
Jangan pernah menaruh private key / service account di folder ini.

## Menjalankan
```
npm run dev
```
Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Build
```
npm run build      # hasil ada di folder dist/
npm run preview    # mencoba hasil build secara lokal
```

## Struktur
- `src/app/` - titik awal, router, layout, daftar menu
- `src/components/` - komponen bersama (loading, kosong, error, notifikasi)
- `src/modules/` - satu folder per menu (masih placeholder)
- `src/services/firebase/` - inisialisasi Firebase
- `src/services/offline/` - kerangka IndexedDB (transaksi offline BELUM berfungsi)
- `src/shared/` - konstanta, env, pembantu DOM
- `functions/` - kerangka backend (kosong)
- `docs/`, `tests/` - dokumentasi dan tes (tes belum ada)

## Catatan keamanan dependency
- `package.json` memakai `overrides` untuk `@grpc/grpc-js` 1.14.5. Firebase (sampai 13.1.0) masih mengunci versi lama 1.9.x yang memiliki advisory.
  Paket ini hanya untuk Node (bukan bundel browser) dan Firestore belum dipakai. Tinjau kembali override ini saat Firebase memperbarui pin-nya.
- Jalankan `npm audit` berkala, terutama sebelum production. Jangan pakai `npm audit fix --force`.
