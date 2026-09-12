/* ==========================================================================
   ANIMATIONS & INTERACTIONS — Executive Portfolio
   Refined for 60fps Scroll Dynamics & Micro-Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initNavbarScroll();
  initScrollSpy();
  initHeroParallax();
  initWordCycler();
  initCursorGlow();
  initScrollReveals();
  initSvgArchitectureFlow();
});

/* 1. Real-Time Viewport Scroll Progress Bar */
function initScrollProgressBar() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  let ticking = false;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

/* 2. Navbar Scroll Glass Elevation */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  handleScroll();
}

/* 3. Active Section Scroll-Spy for Navigation Links */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.navbar__link[data-nav]');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  const linkMap = {};
  navLinks.forEach(link => {
    linkMap[link.getAttribute('data-nav')] = link;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => link.classList.remove('navbar__link--active'));
        if (linkMap[id]) {
          linkMap[id].classList.add('navbar__link--active');
        }
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/* 4. Hero Ambient Movement (Static Portrait & Anchored Text) */
function initHeroParallax() {
  // Portrait and behind-text remain strictly static as instructed
  // (no 3D tilt or perspective shift that breaks 2D cutouts)
  const ambientLight = document.getElementById('hero-ambient-light');
  if (!ambientLight) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isRunning = false;

  const render = () => {
    const dx = targetX - currentX;
    const dy = targetY - currentY;

    currentX += dx * 0.06;
    currentY += dy * 0.06;

    // Only subtly drift the ambient crimson background halo
    ambientLight.style.transform = `translate(calc(-50% + ${currentX * 18}px), calc(-50% + ${currentY * 18}px))`;

    if (Math.abs(dx) > 0.005 || Math.abs(dy) > 0.005) {
      requestAnimationFrame(render);
    } else {
      isRunning = false;
    }
  };

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    targetX = Math.max(-1, Math.min(1, x));
    targetY = Math.max(-1, Math.min(1, y));

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  }, { passive: true });
}

/* 5. Behind-Text Word Cycler */
function initWordCycler() {
  const behindWord = document.getElementById('hero-behind-word');
  if (!behindWord) return;

  const words = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.heroWords) 
    ? PORTFOLIO_DATA.heroWords 
    : ['PORTFOLIO', 'SWAYAM', 'SYSTEMS', 'BACKEND', 'AI PIPELINES'];
  let index = 0;

  behindWord.parentElement.addEventListener('click', () => {
    index = (index + 1) % words.length;
    behindWord.style.opacity = '0';
    behindWord.style.transform = 'scale(0.96)';
    
    setTimeout(() => {
      behindWord.textContent = words[index];
      behindWord.style.opacity = '0.92';
      behindWord.style.transform = 'scale(1)';
    }, 150);
  });
}

/* 6. Ambient Cursor Glow (GPU-Accelerated with Idle Sleep) */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  if (window.matchMedia('(pointer: coarse)').matches || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    glow.style.display = 'none';
    return;
  }

  let mouseX = -1000;
  let mouseY = -1000;
  let glowX = -1000;
  let glowY = -1000;
  let isRunning = false;

  const updateGlow = () => {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;

    glowX += dx * 0.12;
    glowY += dy * 0.12;

    glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

    if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
      requestAnimationFrame(updateGlow);
    } else {
      isRunning = false;
    }
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (glow.style.opacity === '0') glow.style.opacity = '1';

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(updateGlow);
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
  });
}

/* 7. Staggered Scroll Reveals with IntersectionObserver */
function initScrollReveals() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  // Set stagger delays for grid children
  const showcaseGrid = document.getElementById('systems-container');
  if (showcaseGrid) {
    const cards = showcaseGrid.children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transitionDelay = `${(i % 3) * 0.1}s`;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el) => observer.observe(el));
}

/* 8. Interactive SVG Architecture Flow Animation & Node Highlighting */
function initSvgArchitectureFlow() {
  const archSection = document.getElementById('architecture');
  const flowPaths = document.querySelectorAll('.svg-flow-path');
  const pulseParticles = document.querySelectorAll('.svg-pulse-particle');
  const nodeGroups = document.querySelectorAll('.arch-node-group');

  if (!archSection) return;

  // Viewport observer to pause SVG animations off-screen (CPU Saver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const playState = entry.isIntersecting ? 'running' : 'paused';
      flowPaths.forEach(p => p.style.animationPlayState = playState);
      pulseParticles.forEach(p => p.style.animationPlayState = playState);
    });
  }, { threshold: 0.15 });

  observer.observe(archSection);

  // Micro-interaction: Node hover effects
  nodeGroups.forEach((node) => {
    node.addEventListener('mouseenter', () => {
      node.style.transform = 'translateY(-3px)';
    });
    node.addEventListener('mouseleave', () => {
      node.style.transform = 'translateY(0)';
    });
  });
}
