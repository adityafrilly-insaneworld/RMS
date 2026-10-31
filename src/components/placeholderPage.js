import { el } from '../shared/dom.js';

// Halaman penampung untuk menu yang belum dibangun. Tidak ada fungsi bisnis di sini.
export function placeholderPage({ description, stage }) {
  return el('section', { class: 'placeholder' },
    el('p', { class: 'badge' }, 'Belum dibangun'),
    el('p', {}, description),
    el('p', { class: 'muted' }, `Rencana pengerjaan: ${stage}.`));
}
