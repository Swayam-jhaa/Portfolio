/* ==========================================================================
   APP ENGINE — Dynamic Renderers & UI Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderSystems();
  renderStack();
  initMobileMenu();
});

/* Render Featured Systems Grid */
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container || !PORTFOLIO_DATA.systems) return;

  container.innerHTML = PORTFOLIO_DATA.systems.map((sys) => {
    const isFeatured = sys.featured;
    const cardClass = isFeatured ? 'system-card--featured' : 'system-card--standard';
    
    let badgeClass = 'system-card__badge';
    if (sys.badgeType === 'flagship') badgeClass += ' system-card__badge--flagship';
    if (sys.badgeType === 'gold') badgeClass += ' system-card__badge--gold';

    const highlightsHtml = sys.highlights.map(h => 
      `<li class="system-card__highlight-item">${h}</li>`
    ).join('');

    const techChipsHtml = sys.stack.map(t => 
      `<span class="tech-chip">${t}</span>`
    ).join('');

    const liveBtnHtml = sys.live ? 
      `<a href="${sys.live}" target="_blank" rel="noopener noreferrer" class="system-card__link system-card__link--accent">
        Live Deployment ↗
      </a>` : '';

    return `
      <article class="system-card ${cardClass}" data-reveal>
        <div>
          <div class="system-card__header">
            <div>
              <h3 class="system-card__title">${sys.name}</h3>
              <p class="system-card__tagline">${sys.tagline}</p>
            </div>
            <span class="${badgeClass}">${sys.badge}</span>
          </div>

          <p class="system-card__desc">${sys.description}</p>

          <ul class="system-card__highlights">
            ${highlightsHtml}
          </ul>
        </div>

        <div>
          <div class="system-card__tech">
            ${techChipsHtml}
          </div>

          <div class="system-card__footer">
            <a href="${sys.github}" target="_blank" rel="noopener noreferrer" class="system-card__link">
              View Repository →
            </a>
            ${liveBtnHtml}
          </div>
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

/* Mobile Menu */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('mobile-menu--open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('mobile-menu--open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
}
