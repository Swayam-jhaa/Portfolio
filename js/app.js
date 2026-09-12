/* ==========================================================================
   APP ENGINE — Dynamic Renderers & UI Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderSystems();
  renderStack();
  initMobileMenu();
});

/* Render Featured Systems as Unboxed Continuous Dossiers */
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container || !PORTFOLIO_DATA.systems) return;

  container.innerHTML = PORTFOLIO_DATA.systems.map((sys, index) => {
    let badgeModifier = '';
    if (sys.badgeType === 'flagship') badgeModifier = 'system-dossier__badge--flagship';
    if (sys.badgeType === 'gold') badgeModifier = 'system-dossier__badge--gold';

    const techChipsHtml = sys.stack.map(t => 
      `<span class="tech-chip">${t}</span>`
    ).join('');

    const highlightsHtml = (sys.highlights && sys.highlights.length) ? `
      <ul class="system-dossier__highlights">
        ${sys.highlights.map(h => `<li><span class="dossier-bullet">✦</span> ${h}</li>`).join('')}
      </ul>
    ` : '';

    const liveBtnHtml = sys.live ? `
      <a href="${sys.live}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm" title="Explore live production deployment">
        <span>Explore Live System</span>
        <span class="btn__arrow">↗</span>
      </a>
    ` : '';

    const githubBtnHtml = sys.github ? `
      <a href="${sys.github}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm" aria-label="View ${sys.name} repository on GitHub">
        <span>View Repository</span>
        <span class="btn__arrow">→</span>
      </a>
    ` : '';

    const isReversed = (index % 2 === 1) ? 'system-dossier--reversed' : '';

    return `
      <article class="system-dossier ${isReversed}" data-system="${sys.id}">
        <!-- Visual Column -->
        <div class="system-dossier__visual">
          <div class="system-dossier__frame">
            <img 
              src="${sys.image}" 
              alt="${sys.name} System UI & Architecture Preview" 
              class="system-dossier__img" 
              loading="lazy"
            />
            <div class="system-dossier__overlay-glow" aria-hidden="true"></div>
            <span class="system-dossier__badge ${badgeModifier}">${sys.badge}</span>
          </div>
        </div>

        <!-- Content & Dossier Column -->
        <div class="system-dossier__content">
          <div class="system-dossier__header">
            <div class="system-dossier__index">${sys.num}</div>
            <div class="system-dossier__meta">
              <span class="system-dossier__category">${sys.category}</span>
              <h3 class="system-dossier__title">${sys.name}</h3>
            </div>
          </div>

          <p class="system-dossier__tagline">${sys.tagline}</p>
          <p class="system-dossier__desc">${sys.description}</p>

          ${highlightsHtml}

          <div class="system-dossier__chips">
            ${techChipsHtml}
          </div>

          <div class="system-dossier__actions">
            ${liveBtnHtml}
            ${githubBtnHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* Render Technical Arsenal Stream */
function renderStack() {
  const container = document.getElementById('stack-container');
  if (!container || !PORTFOLIO_DATA.stackCategories) return;

  container.innerHTML = PORTFOLIO_DATA.stackCategories.map((cat) => {
    const itemsHtml = cat.items.map(item => `
      <div class="stack-stream__item">
        <div class="stack-stream__item-top">
          <span class="stack-stream__item-name">${item.name}</span>
        </div>
        <p class="stack-stream__item-desc">${item.desc}</p>
      </div>
    `).join('');

    return `
      <div class="stack-stream__col">
        <div class="stack-stream__header">
          <span class="navbar__pulse-dot"></span>
          <h3 class="stack-stream__title">${cat.title}</h3>
        </div>
        <div class="stack-stream__list">
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
