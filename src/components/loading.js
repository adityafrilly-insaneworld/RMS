import { el } from '../shared/dom.js';

export function loadingState(message = 'Memuat...') {
  return el('div', { class: 'state state-loading', role: 'status' },
    el('div', { class: 'spinner', 'aria-hidden': 'true' }),
    el('p', {}, message));
}
