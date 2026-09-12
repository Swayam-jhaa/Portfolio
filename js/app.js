/* ==========================================================================
   APP ENGINE — Dynamic Renderers & UI Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderSystems();
  renderStack();
  initMobileMenu();
});

/* Render Featured Systems Grid with UI Preview Screenshots */
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container || !PORTFOLIO_DATA.systems) return;

  container.innerHTML = PORTFOLIO_DATA.systems.map((sys) => {
    let badgeClass = 'showcase-card__badge';
    if (sys.badgeType === 'flagship') badgeClass += ' showcase-card__badge--flagship';
    if (sys.badgeType === 'gold') badgeClass += ' showcase-card__badge--gold';

    const techChipsHtml = sys.stack.map(t => 
      `<span class="tech-chip">${t}</span>`
    ).join('');

    const liveLinkHtml = sys.live ? 
      `<a href="${sys.live}" target="_blank" rel="noopener noreferrer" class="showcase-card__link-text" title="Live Deployment">
        LIVE DEMO ↗
      </a>` : '';

    return `
      <article class="showcase-card" data-reveal>
        <div class="showcase-card__img-container">
          <img 
            src="${sys.image}" 
            alt="${sys.name} System UI Preview" 
            class="showcase-card__img" 
            loading="lazy"
          />
          <span class="${badgeClass}">${sys.badge}</span>
        </div>

        <div class="showcase-card__meta-bar">
          <div class="showcase-card__index">${sys.num}</div>
          <div class="showcase-card__title-group">
            <h3 class="showcase-card__name">${sys.name}</h3>
            <p class="showcase-card__category">${sys.category}</p>
          </div>
          <div class="showcase-card__actions">
            ${liveLinkHtml}
            <a href="${sys.github}" target="_blank" rel="noopener noreferrer" class="showcase-card__arrow-btn" aria-label="View ${sys.name} on GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <p class="showcase-card__desc">${sys.description}</p>

        <div class="showcase-card__chips">
          ${techChipsHtml}
        </div>
      </article>
    `;
  }).join('');
}

/* Render Technical Arsenal */
function renderStack() {
  const container = document.getElementById('stack-container');
  if (!container || !PORTFOLIO_DATA.stackCategories) return;

  container.innerHTML = PORTFOLIO_DATA.stackCategories.map((cat) => {
    const itemsHtml = cat.items.map(item => `
      <div class="stack-item">
        <span class="stack-item__name">${item.name}</span>
        <span class="stack-item__desc">${item.desc}</span>
      </div>
    `).join('');

    return `
      <div class="stack-card" data-reveal>
        <div class="stack-card__header">
          <span class="navbar__pulse-dot"></span>
          <h3 class="stack-card__title">${cat.title}</h3>
        </div>
        <div class="stack-card__items">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/* Mobile Menu Handler with Full Accessibility (ARIA & Escape Dismiss) */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('mobile-menu--open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const closeMenu = () => {
    menu.classList.remove('mobile-menu--open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle.focus();
  };

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  // Dismiss on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('mobile-menu--open')) {
      closeMenu();
    }
  });

  // Dismiss on backdrop click
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      closeMenu();
    }
  });
}
