import { el } from '../shared/dom.js';
import { NAV_ITEMS } from './navigation.js';
import { APP_NAME } from '../shared/constants.js';
import { APP_ENV } from '../shared/env.js';
import { isFirebaseConfigured } from '../services/firebase/config.js';

// Kerangka halaman: sidebar (desktop) / drawer (layar kecil), header, area konten, area notifikasi.
export function createLayout(root) {
  const links = NAV_ITEMS.map((item) =>
    el('a', { class: 'nav-link', href: `#${item.path}`, 'data-path': item.path }, item.label));

  const sidebar = el('aside', { class: 'sidebar', id: 'sidebar' },
    el('div', { class: 'brand' }, APP_NAME),
    el('nav', { 'aria-label': 'Menu utama' }, links));

  const title = el('h1', { class: 'page-title' }, '');
  const menuButton = el('button', {
    class: 'menu-btn', type: 'button', 'aria-label': 'Buka menu', 'aria-controls': 'sidebar', 'aria-expanded': 'false',
    onclick: () => toggle(),
  }, 'Menu');

  const firebaseText = isFirebaseConfigured()
    ? 'Firebase: terkonfigurasi (login belum dibuat)'
    : 'Firebase: belum dikonfigurasi';

  const header = el('header', { class: 'topbar' }, menuButton, title,
    el('div', { class: 'chips' },
      el('span', { class: 'chip' }, `Lingkungan: ${APP_ENV}`),
      el('span', { class: 'chip' }, firebaseText)));

  const notice = el('p', { class: 'notice', role: 'note' },
    'Fondasi proyek (Task 01). Belum ada login, data, atau fitur bisnis.');

  const content = el('main', { class: 'content', id: 'content', tabindex: '-1' });
  const toastRegion = el('div', { id: 'toast-region', class: 'toast-region', 'aria-live': 'polite' });
  const backdrop = el('div', { class: 'backdrop', onclick: () => toggle(false) });

  function toggle(force) {
    const open = force ?? !document.body.classList.contains('drawer-open');
    document.body.classList.toggle('drawer-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  }

  root.replaceChildren(
    el('div', { class: 'shell' }, sidebar, el('div', { class: 'main-col' }, header, notice, content)),
    backdrop, toastRegion);

  return {
    contentEl: content,
    setActive(item) {
      title.textContent = item ? item.label : 'Tidak ditemukan';
      document.title = item ? `${item.label} - ${APP_NAME}` : APP_NAME;
      links.forEach((a) => {
        const active = item && a.dataset.path === item.path;
        a.classList.toggle('active', Boolean(active));
        if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      toggle(false);
      content.focus({ preventScroll: true });
    },
  };
}
