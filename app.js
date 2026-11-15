/**
 * Raff Modern Linktree Engine
 * Zero AI-Slop, High-Performance, GitHub Pages Ready
 */

(function () {
  'use strict';

  const config = window.PROFILE_CONFIG || {};

  const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2-.43-.4-.44-.59-.45h-.51c-.17 0-.46.07-.7.33-.24.27-.92.9-.92 2.2s.94 2.56 1.07 2.73c.13.18 1.83 2.8 4.43 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.52-.32-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.15-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.15.18-.26.27-.43.09-.18.05-.34-.02-.47-.07-.13-.59-1.46-.83-1.99z"/></svg>',
    bot: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5M12 17c-1.33 0-2.42.75-2.83 1.8h5.66c-.41-1.05-1.5-1.8-2.83-1.8z"/></svg>',
    channel: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2.05 22l5.18-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/><path fill="currentColor" d="M12 4a8 8 0 0 0-8 8c0 1.57.46 3.03 1.24 4.28l-.66 2.41 2.5-.64A7.95 7.95 0 0 0 12 20a8 8 0 1 0 0-16zm-1 5h2v4h-2V9zm0 6h2v2h-2v-2z" opacity="0.35"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.45 6.27 6.27 0 0 0 1.95-4.44V8.75a8.28 8.28 0 0 0 4.78 1.47V6.76a4.83 4.83 0 0 1-1-.07z"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
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
    document.getElementById('user-role').textContent = config.role || "Developer";
    document.getElementById('user-bio').textContent = config.bio || "";

    if (config.status && config.status.text) {
      document.getElementById('status-label').textContent = config.status.text;
    }

    // Tags
    const tagsContainer = document.getElementById('user-tags');
    if (config.tags && config.tags.length > 0) {
      tagsContainer.innerHTML = config.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('');
    } else {
      tagsContainer.style.display = 'none';
    }
  }

  function renderButtons() {
    const container = document.getElementById('links-stack');
    const linksCountEl = document.getElementById('links-count');
    const links = config.links || [];

    if (linksCountEl) {
      linksCountEl.textContent = `${links.length} Terverifikasi`;
    }

    container.innerHTML = links.map((link, index) => {
      const iconSvg = ICONS[link.icon] || ICONS.whatsapp;
      return `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-card" data-accent="${link.accent || link.id}">
          <div class="link-card-left">
            <span class="brand-icon-box">${iconSvg}</span>
            <div class="link-text-wrap">
              <span class="link-main-title">${link.title}</span>
              <span class="link-sub-desc">${link.subtitle || ''}</span>
            </div>
          </div>
          <span class="link-action-pill">
            <span>${link.badge || 'Buka'}</span>
            ${ICONS.arrowUpRight}
          </span>
        </a>
      `;
    }).join('');
  }

  // Toast Notification
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

  // Copy Clipboard
  function copyText(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || 'Tersalin ke papan klip');
      }).catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || 'Tersalin ke papan klip');
    } catch (e) {
      showToast('Gagal menyalin');
    }
    document.body.removeChild(ta);
  }

  // Direct Contact Card Click-to-Copy
  function initContact() {
    const card = document.getElementById('contact-card');
    const badgeText = document.getElementById('copy-badge-text');
    const iconWrap = document.getElementById('contact-icon');
    const labelEl = document.getElementById('contact-label');
    const valEl = document.getElementById('contact-val');

    if (config.quickContact) {
      labelEl.textContent = config.quickContact.label || "Email Bisnis";
      valEl.textContent = config.quickContact.value || "mraflisetiawan075@gmail.com";
    }

    card.addEventListener('click', () => {
      const email = config.quickContact ? config.quickContact.value : "mraflisetiawan075@gmail.com";
      copyText(email, 'Email tersalin ke papan klip!');

      badgeText.textContent = "Tersalin!";
      iconWrap.innerHTML = ICONS.check;

      setTimeout(() => {
        badgeText.textContent = "Salin";
        iconWrap.innerHTML = ICONS.copy;
      }, 1800);
    });
  }

  // Theme Management
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

  // Web Share API
  function initShare() {
    const btn = document.getElementById('btn-share');
    btn.addEventListener('click', () => {
      const url = window.location.href;
      const title = document.title;

      if (navigator.share) {
        navigator.share({ title, url }).catch(() => {});
      } else {
        copyText(url, 'Tautan halaman berhasil disalin!');
      }
    });
  }

  document.getElementById('current-year').textContent = new Date().getFullYear();
  if (config.name) {
    const authorEl = document.getElementById('footer-author');
    if (authorEl) authorEl.textContent = config.name;
  }
  if (config.footerText) {
    const footerTextEl = document.getElementById('footer-text');
    if (footerTextEl) footerTextEl.textContent = config.footerText;
  }

  // Avatar Expand / Collapse Interaction
  function initAvatarToggle() {
    const wrap = document.getElementById('avatar-wrap');
    if (!wrap) return;

    wrap.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = wrap.classList.toggle('expanded');
      wrap.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    wrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isExpanded = wrap.classList.toggle('expanded');
        wrap.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      }
    });

    // Ketika tidak diklik (klik di luar), kembalikan ke semula bulat dan kecil
    document.addEventListener('click', (e) => {
      if (wrap.classList.contains('expanded') && !wrap.contains(e.target)) {
        wrap.classList.remove('expanded');
        wrap.setAttribute('aria-expanded', 'false');
      }
    });
  }

  initProfile();
  initAvatarToggle();
  renderButtons();
  initContact();
  initTheme();
  initShare();

})();
