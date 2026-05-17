/* ============================================
   ANIMATIONS — Anime.js Motion System
   Premium, disciplined, Awwwards-tier
   ============================================ */

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Shared Easing ──
  const EASING = {
    reveal: 'easeOutExpo',
    smooth: 'easeInOutQuad',
    bounce: 'easeOutBack',
    sharp: 'easeOutCubic',
  };

  const DURATION = {
    fast: 300,
    base: 500,
    reveal: 800,
    slow: 1200,
    hero: 1000,
  };

  // ═══════════════════════════════════════
  //  HERO ENTRANCE SEQUENCE
  // ═══════════════════════════════════════
  function animateHero() {
    if (prefersReducedMotion) {
      // Just show everything immediately
      document.querySelectorAll('.hero__name-char').forEach(c => {
        c.style.opacity = '1';
        c.style.transform = 'translateY(0)';
      });
      document.getElementById('hero-role').style.opacity = '1';
      document.getElementById('hero-tagline').style.opacity = '1';
      document.getElementById('hero-ctas').style.opacity = '1';
      document.getElementById('hero-stats').style.opacity = '1';
      animateCounters();
      return;
    }

    const timeline = anime.timeline({
      easing: EASING.reveal,
    });

    // 1. Name character stagger
    timeline.add({
      targets: '.hero__name-char',
      translateY: [60, 0],
      opacity: [0, 1],
      duration: DURATION.hero,
      delay: anime.stagger(60, { start: 300 }),
    });

    // 2. Role line
    timeline.add({
      targets: '#hero-role',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: DURATION.reveal,
    }, '-=400');

    // 3. Tagline
    timeline.add({
      targets: '#hero-tagline',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: DURATION.reveal,
    }, '-=500');

    // 4. CTAs
    timeline.add({
      targets: '#hero-ctas',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: DURATION.base,
    }, '-=400');

    // 5. Stats
    timeline.add({
      targets: '#hero-stats',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: DURATION.base,
      complete: function() {
        animateCounters();
      }
    }, '-=300');

    // 6. Hero label
    timeline.add({
      targets: '.hero__label',
      translateX: [-20, 0],
      opacity: [0, 1],
      duration: DURATION.base,
    }, 200);
  }

  // ═══════════════════════════════════════
  //  STAT COUNTER ANIMATION
  // ═══════════════════════════════════════
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count, 10);
      if (isNaN(target)) return;

      if (prefersReducedMotion) {
        counter.textContent = target + '+';
        return;
      }

      anime({
        targets: { value: 0 },
        value: target,
        duration: DURATION.slow,
        easing: EASING.sharp,
        round: 1,
        update: function(anim) {
          counter.textContent = Math.round(anim.animations[0].currentValue);
        },
        complete: function() {
          counter.textContent = target + '+';
        }
      });
    });
  }

  // ═══════════════════════════════════════
  //  SCROLL-TRIGGERED REVEALS
  // ═══════════════════════════════════════
  function setupScrollReveals() {
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.addEventListener('animate-in', function() {
        const type = el.dataset.animate || 'fade-up';

        switch(type) {
          case 'fade-up':
            anime({
              targets: el,
              translateY: [30, 0],
              opacity: [0, 1],
              duration: DURATION.reveal,
              easing: EASING.reveal,
            });
            break;

          case 'fade-left':
            anime({
              targets: el,
              translateX: [-30, 0],
              opacity: [0, 1],
              duration: DURATION.reveal,
              easing: EASING.reveal,
            });
            break;

          case 'scale-up':
            anime({
              targets: el,
              scale: [0.95, 1],
              opacity: [0, 1],
              duration: DURATION.reveal,
              easing: EASING.reveal,
            });
            break;
        }

        // Stagger children if they exist (for skill chips, cards, etc.)
        const chips = el.querySelectorAll('.skills__chip');
        if (chips.length > 0) {
          anime({
            targets: chips,
            translateY: [12, 0],
            opacity: [0, 1],
            duration: DURATION.base,
            delay: anime.stagger(40),
            easing: EASING.sharp,
          });
        }

        const focusItems = el.querySelectorAll('.about__focus-item');
        if (focusItems.length > 0) {
          anime({
            targets: focusItems,
            translateX: [-16, 0],
            opacity: [0, 1],
            duration: DURATION.base,
            delay: anime.stagger(80),
            easing: EASING.sharp,
          });
        }
      });
    });
  }

  // ═══════════════════════════════════════
  //  CARD HOVER INTERACTIONS
  // ═══════════════════════════════════════
  function setupCardInteractions() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card,
          translateY: -4,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });

      card.addEventListener('mouseleave', () => {
        anime({
          targets: card,
          translateY: 0,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });
    });
  }

  // ═══════════════════════════════════════
  //  BUTTON HOVER GLOW
  // ═══════════════════════════════════════
  function setupButtonInteractions() {
    if (prefersReducedMotion) return;

    const primaryBtns = document.querySelectorAll('.btn--primary');

    primaryBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        anime({
          targets: btn,
          scale: 1.03,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });

      btn.addEventListener('mouseleave', () => {
        anime({
          targets: btn,
          scale: 1,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });
    });
  }

  // ═══════════════════════════════════════
  //  SECTION LABEL LINE SWEEP
  // ═══════════════════════════════════════
  function setupLabelAnimations() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.section__label').forEach(label => {
      label.addEventListener('animate-in', () => {
        const line = label.querySelector('.section__label-line');
        const text = label.querySelector('.section__label-text');

        if (line) {
          anime({
            targets: line,
            width: [0, 40],
            opacity: [0, 1],
            duration: DURATION.base,
            easing: EASING.sharp,
          });
        }

        if (text) {
          anime({
            targets: text,
            translateX: [-10, 0],
            opacity: [0, 1],
            duration: DURATION.base,
            delay: 150,
            easing: EASING.sharp,
          });
        }
      });
    });
  }

  // ═══════════════════════════════════════
  //  SOCIAL ICONS STAGGER
  // ═══════════════════════════════════════
  function setupSocialAnimations() {
    if (prefersReducedMotion) return;

    const socials = document.querySelector('.connect__socials');
    if (!socials) return;

    socials.addEventListener('animate-in', () => {
      anime({
        targets: socials.querySelectorAll('.connect__social-link'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: DURATION.base,
        delay: anime.stagger(80),
        easing: EASING.bounce,
      });
    });
  }

  // ═══════════════════════════════════════
  //  NAVBAR ACTIVE DOT TRANSITION
  // ═══════════════════════════════════════
  function setupNavDotAnimation() {
    if (prefersReducedMotion) return;

    // The active dot is CSS pseudo-element, so we animate opacity via class transitions
    // This is handled by CSS transitions already
  }

  // ═══════════════════════════════════════
  //  VANTA.JS GLOBE BACKGROUND
  // ═══════════════════════════════════════
  function setupVantaGlobe() {
    if (prefersReducedMotion) return;
    if (typeof VANTA === 'undefined' || !VANTA.GLOBE) return;

    try {
      VANTA.GLOBE({
        el: '#vanta-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x556B2F,      // Olive drab — matches brand
        color2: 0x1a2b0a,     // Deep green for secondary lines
        backgroundColor: 0x050505, // Match canvas
        size: 1.2,
        points: 8.00,
        maxDistance: 22.00,
        spacing: 18.00,
      });
    } catch(e) {
      // Vanta failed to load — no action needed, hero still works
      console.warn('Vanta.js Globe could not initialize:', e.message);
    }
  }

  // ═══════════════════════════════════════
  //  SKILLS GROUP HOVER
  // ═══════════════════════════════════════
  function setupSkillGroupInteractions() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.skills__group').forEach(group => {
      group.addEventListener('mouseenter', () => {
        anime({
          targets: group,
          scale: 1.01,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });

      group.addEventListener('mouseleave', () => {
        anime({
          targets: group,
          scale: 1,
          duration: DURATION.fast,
          easing: EASING.smooth,
        });
      });
    });
  }

  // ═══════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════
  function init() {
    // Start hero animation after a brief delay for fonts to load
    setTimeout(animateHero, 200);

    // Set up scroll-triggered animations
    setupScrollReveals();

    // Interactive states
    setupCardInteractions();
    setupButtonInteractions();
    setupLabelAnimations();
    setupSocialAnimations();
    setupNavDotAnimation();
    setupVantaGlobe();
    setupSkillGroupInteractions();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
