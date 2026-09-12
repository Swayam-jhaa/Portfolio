/* ==========================================================================
   ANIMATIONS & INTERACTIONS — Executive Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initHeroParallax();
  initWordCycler();
  initCursorGlow();
  initScrollReveals();
  initSvgArchitectureFlow();
});

/* 1. Navbar Scroll Effect */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. Hero Ambient Movement (Static Portrait & Anchored Text) */
function initHeroParallax() {
  // Portrait and behind-text remain strictly static as instructed
  // (no 3D tilt or perspective shift that breaks 2D cutouts)
  const ambientLight = document.getElementById('hero-ambient-light');
  if (!ambientLight) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    targetX = Math.max(-1, Math.min(1, x));
    targetY = Math.max(-1, Math.min(1, y));
  }, { passive: true });

  const render = () => {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    // Only subtly drift the ambient crimson background halo
    ambientLight.style.transform = `translate(calc(-50% + ${currentX * 18}px), calc(-50% + ${currentY * 18}px))`;

    requestAnimationFrame(render);
  };

  render();
}

/* 3. Behind-Text Word Cycler */
function initWordCycler() {
  const behindWord = document.getElementById('hero-behind-word');
  if (!behindWord) return;

  const words = PORTFOLIO_DATA.heroWords || ['SWAYAM', 'SYSTEMS', 'BACKEND', 'AI PIPELINES'];
  let index = 0;

  behindWord.parentElement.addEventListener('click', () => {
    index = (index + 1) % words.length;
    behindWord.style.opacity = '0';
    behindWord.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      behindWord.textContent = words[index];
      behindWord.style.opacity = '0.95';
      behindWord.style.transform = 'scale(1)';
    }, 150);
  });
}

/* 4. Ambient Cursor Glow */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  if (window.matchMedia('(pointer: coarse)').matches) {
    glow.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const updateGlow = () => {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(updateGlow);
  };

  updateGlow();
}

/* 5. Scroll Reveals with IntersectionObserver */
function initScrollReveals() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

/* 6. Interactive SVG Architecture Flow Animation */
function initSvgArchitectureFlow() {
  const archSection = document.getElementById('architecture');
  const flowPaths = document.querySelectorAll('.svg-flow-path');
  const pulseParticles = document.querySelectorAll('.svg-pulse-particle');

  if (!archSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        flowPaths.forEach(p => p.style.animationPlayState = 'running');
        pulseParticles.forEach(p => p.style.animationPlayState = 'running');
      } else {
        flowPaths.forEach(p => p.style.animationPlayState = 'paused');
        pulseParticles.forEach(p => p.style.animationPlayState = 'paused');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(archSection);
}
