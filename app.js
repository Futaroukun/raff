/**
 * Raff Simple Linktree Engine
 * Zero AI-Slop, High-Performance, Minimalist Link Hub
 */

(function () {
  'use strict';

  const config = window.PROFILE_CONFIG || {};

  const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2-.43-.4-.44-.59-.45h-.51c-.17 0-.46.07-.7.33-.24.27-.92.9-.92 2.2s.94 2.56 1.07 2.73c.13.18 1.83 2.8 4.43 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.52-.32-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.15-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.47-.07-.13-.59-1.46-.83-1.99z"/></svg>',
    channel: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2.05 22l5.18-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/><path fill="currentColor" d="M12 4a8 8 0 0 0-8 8c0 1.57.46 3.03 1.24 4.28l-.66 2.41 2.5-.64A7.95 7.95 0 0 0 12 20a8 8 0 1 0 0-16zm-1 5h2v4h-2V9zm0 6h2v2h-2v-2z" opacity="0.3"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.45 6.27 6.27 0 0 0 1.95-4.44V8.75a8.28 8.28 0 0 0 4.78 1.47V6.76a4.83 4.83 0 0 1-1-.07z"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>'
  };

  function getInitials(name) {
    if (!name) return "R";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function initProfile() {
    const avatarEl = document.getElementById('user-avatar');
    if (config.avatar) {
      avatarEl.innerHTML = `<img src="${config.avatar}" alt="${config.name}">`;
    } else {
      avatarEl.innerHTML = `<span>${getInitials(config.name)}</span>`;
    }

    document.getElementById('user-name').textContent = config.name || "Raff";
    document.getElementById('user-handle').textContent = config.handle || "@raff";
    document.getElementById('user-bio').textContent = config.bio || "";

    if (config.statusText) {
      document.getElementById('status-label').textContent = config.statusText;
    }
  }

  function renderButtons() {
    const container = document.getElementById('links-stack');
    const links = config.links || [];

    container.innerHTML = links.map(link => {
      const iconSvg = ICONS[link.icon] || ICONS.whatsapp;
      return `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-btn" id="btn-${link.id}">
          <div class="link-btn-left">
            <span class="link-icon-box">${iconSvg}</span>
            <span class="link-title">${link.title}</span>
          </div>
          <span class="link-arrow">${ICONS.arrowUpRight}</span>
        </a>
      `;
    }).join('');
  }

  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  function initTheme() {
    const btn = document.getElementById('btn-theme');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      html.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
    }

    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  function initShare() {
    const btn = document.getElementById('btn-share');
    btn.addEventListener('click', () => {
      const url = window.location.href;
      const title = document.title;

      if (navigator.share) {
        navigator.share({ title, url }).catch(() => {});
      } else {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast('Tautan berhasil disalin');
          });
        }
      }
    });
  }

  document.getElementById('current-year').textContent = new Date().getFullYear();

  initProfile();
  renderButtons();
  initTheme();
  initShare();

})();
