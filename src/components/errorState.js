import { el } from '../shared/dom.js';

export function errorState({ title, description, onRetry } = {}) {
  return el('div', { class: 'state state-error', role: 'alert' },
    el('h2', {}, title || 'Terjadi masalah'),
    el('p', {}, description || 'Halaman tidak dapat dimuat. Coba lagi.'),
    onRetry ? el('button', { class: 'btn', type: 'button', onclick: onRetry }, 'Coba lagi') : null);
}
