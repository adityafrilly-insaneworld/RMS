import { el } from '../shared/dom.js';

export function emptyState({ title, description, action } = {}) {
  return el('div', { class: 'state state-empty' },
    el('h2', {}, title || 'Belum ada data'),
    description ? el('p', {}, description) : null,
    action ? el('a', { class: 'btn', href: action.href }, action.label) : null);
}
