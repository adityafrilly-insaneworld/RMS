// Daftar menu (mengikuti UI/UX Blueprint bagian 3.1). Semua masih placeholder.
// Menu per role/permission baru dibuat di Tahap 1; validasi izin tetap di backend.
export const NAV_ITEMS = [
  { id: 'dashboard', path: '/dashboard', label: "Dashboard", load: () => import('../modules/dashboard/index.js') },
  { id: 'pos', path: '/pos', label: "POS / Kasir", load: () => import('../modules/pos/index.js') },
  { id: 'products', path: '/products', label: "Produk", load: () => import('../modules/products/index.js') },
  { id: 'inventory', path: '/inventory', label: "Inventori", load: () => import('../modules/inventory/index.js') },
  { id: 'procurement', path: '/procurement', label: "Pembelian & Supplier", load: () => import('../modules/procurement/index.js') },
  { id: 'customers', path: '/customers', label: "Pelanggan", load: () => import('../modules/customers/index.js') },
  { id: 'payments', path: '/payments', label: "Keuangan", load: () => import('../modules/payments/index.js') },
  { id: 'expenses', path: '/expenses', label: "Pengeluaran", load: () => import('../modules/expenses/index.js') },
  { id: 'shifts', path: '/shifts', label: "Shift & Kas", load: () => import('../modules/shifts/index.js') },
  { id: 'reports', path: '/reports', label: "Laporan", load: () => import('../modules/reports/index.js') },
  { id: 'notifications', path: '/notifications', label: "Notifikasi", load: () => import('../modules/notifications/index.js') },
  { id: 'settings', path: '/settings', label: "Pengaturan", load: () => import('../modules/settings/index.js') },
];
