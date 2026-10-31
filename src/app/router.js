import { NAV_ITEMS } from './navigation.js';
import { DEFAULT_ROUTE } from '../shared/constants.js';
import { loadingState } from '../components/loading.js';
import { errorState } from '../components/errorState.js';
import { emptyState } from '../components/emptyState.js';

// Router sederhana berbasis hash (#/dashboard). Tidak perlu pengaturan server.
export function startRouter({ contentEl, onNavigate }) {
  let current = 0;

  async function handle() {
    const path = window.location.hash.replace(/^#/, '') || DEFAULT_ROUTE;
    const item = NAV_ITEMS.find((i) => i.path === path);
    const token = ++current;

    if (!item) {
      onNavigate(null);
      contentEl.replaceChildren(emptyState({
        title: 'Halaman tidak ditemukan',
        description: 'Alamat yang Anda buka tidak ada di aplikasi ini.',
        action: { href: `#${DEFAULT_ROUTE}`, label: 'Kembali ke Dashboard' },
      }));
      return;
    }

    onNavigate(item);
    contentEl.replaceChildren(loadingState());
    try {
      const mod = await item.load();
      if (token !== current) return;
      contentEl.replaceChildren(mod.render());
    } catch (err) {
      console.error(err);
      if (token !== current) return;
      contentEl.replaceChildren(errorState({
        title: `Halaman ${item.label} gagal dimuat`,
        description: 'Periksa koneksi internet, lalu coba lagi.',
        onRetry: handle,
      }));
    }
  }

  window.addEventListener('hashchange', handle);
  handle();
}
