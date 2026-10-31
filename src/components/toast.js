import { el } from '../shared/dom.js';

const LABELS = { success: 'Berhasil', error: 'Gagal', info: 'Info' };

// Notifikasi sederhana. Status ditulis dengan teks, bukan hanya warna.
export function showToast(message, type = 'info', durationMs = 4000) {
  const region = document.getElementById('toast-region');
  if (!region) return;
  const toast = el('div', { class: `toast toast-${type}`, role: type === 'error' ? 'alert' : 'status' },
    el('strong', {}, `${LABELS[type] || LABELS.info}: `), message);
  region.append(toast);
  setTimeout(() => toast.remove(), durationMs);
}
