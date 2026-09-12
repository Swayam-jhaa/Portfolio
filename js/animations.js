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

/* 2. Hero 3D Perspective & Mouse Parallax */
function initHeroParallax() {
  const heroStage = document.getElementById('hero-stage');
  const portrait = document.getElementById('hero-portrait');
  const behindText = document.getElementById('hero-behind-text');
  const ambientLight = document.getElementById('hero-ambient-light');

  if (!heroStage || !portrait || !behindText) return;

  // Reduced motion check
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isHovering = false;

  const onMouseMove = (e) => {
    const rect = heroStage.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    targetX = Math.max(-1, Math.min(1, x));
    targetY = Math.max(-1, Math.min(1, y));
  };

  heroStage.addEventListener('mouseenter', () => { isHovering = true; });
  heroStage.addEventListener('mousemove', onMouseMove);
  heroStage.addEventListener('mouseleave', () => {
    isHovering = false;
    targetX = 0;
    targetY = 0;
  });

  // RAF loop for buttery smooth dampening
  const render = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    // Portrait 3D tilt
    portrait.style.transform = `perspective(1000px) rotateY(${currentX * 6}deg) rotateX(${-currentY * 6}deg) translateZ(25px)`;

    // Counter-shift behind text for depth
    behindText.style.transform = `translate(${currentX * -18}px, ${currentY * -18}px)`;

    // Shift ambient halo
    if (ambientLight) {
      ambientLight.style.transform = `translate(calc(-50% + ${currentX * 25}px), calc(-50% + ${currentY * 25}px))`;
    }

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
