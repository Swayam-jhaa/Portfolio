/* ============================================
   APP — Core Application Logic
   Navigation, Scroll, Cursor, Mobile Menu
   ============================================ */

(function() {
  'use strict';

  // ── State ──
  const state = {
    scrollY: 0,
    isMenuOpen: false,
    activeSection: 'hero',
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };

  // ── DOM Refs ──
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.navbar__link');
  const cursorGlow = document.getElementById('cursor-glow');
  const sections = document.querySelectorAll('section[id]');

  // ═══════════════════════════════════════
  //  NAVBAR SCROLL EFFECT
  // ═══════════════════════════════════════
  function handleScroll() {
    state.scrollY = window.scrollY;

    // Glass navbar on scroll
    if (state.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveSection();
  }

  function updateActiveSection() {
    let current = 'hero';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY - 200;
      if (state.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    if (current !== state.activeSection) {
      state.activeSection = current;
      navItems.forEach(item => {
        item.classList.toggle('navbar__link--active', item.dataset.nav === current);
      });
    }
  }

  // ═══════════════════════════════════════
  //  MOBILE MENU
  // ═══════════════════════════════════════
  function toggleMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    navToggle.classList.toggle('navbar__toggle--open', state.isMenuOpen);
    navLinks.classList.toggle('navbar__links--open', state.isMenuOpen);
    navToggle.setAttribute('aria-expanded', state.isMenuOpen);
    document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
  }

  function closeMenu() {
    if (state.isMenuOpen) {
      state.isMenuOpen = false;
      navToggle.classList.remove('navbar__toggle--open');
      navLinks.classList.remove('navbar__links--open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // ═══════════════════════════════════════
  //  SMOOTH SCROLL
  // ═══════════════════════════════════════
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          closeMenu();
          const offset = navbar.offsetHeight + 20;
          const top = target.offsetTop - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ═══════════════════════════════════════
  //  CURSOR GLOW (Desktop Only)
  // ═══════════════════════════════════════
  function setupCursorGlow() {
    if (state.prefersReducedMotion || window.innerWidth < 769) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.classList.add('cursor-glow--visible');
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.classList.remove('cursor-glow--visible');
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // ═══════════════════════════════════════
  //  INTERSECTION OBSERVER
  // ═══════════════════════════════════════
  function setupIntersectionObserver() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || '0', 10);

          setTimeout(() => {
            el.classList.add('is-visible');
            // Dispatch custom event for animations.js
            el.dispatchEvent(new CustomEvent('animate-in'));
          }, delay);

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    });

    animatedElements.forEach(el => observer.observe(el));
  }

  // ═══════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════
  function init() {
    // Scroll listener (throttled)
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Mobile menu
    navToggle.addEventListener('click', toggleMenu);
    navItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    // Smooth scroll
    setupSmoothScroll();

    // Cursor glow
    setupCursorGlow();

    // Intersection observer for scroll animations
    setupIntersectionObserver();

    // Initial scroll check
    handleScroll();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
