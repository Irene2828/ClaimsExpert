import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let hasAnimatedHero = false;

export default function useScrollMotion() {
  const location = useLocation();

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    const applyStyle = (
      el,
      opacity,
      y,
      x,
      delay,
      duration = 0.9,
      easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
      scale = 1
    ) => {
      if (!el || el.dataset.motionInit) return;
      el.dataset.motionInit = 'true';
      el.style.transition = 'none';
      el.style.opacity = opacity;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      el.style.willChange = 'opacity, transform';
      void el.offsetHeight;
      el.style.transition = `opacity ${duration}s ${easing} ${delay}ms, transform ${duration}s ${easing} ${delay}ms`;
    };

    const trigger = (el) => {
      if (!el) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0,0,0) scale(1)';
        });
      });
    };

    if (location.pathname === '/about') {
      let attempts = 0;
      const initAbout = () => {
        attempts++;
        const aboutHero = document.getElementById('about-hero');
        if (!aboutHero && attempts < 50) {
          setTimeout(initAbout, 16);
          return;
        }

        if (aboutHero) {
          const leftCol = aboutHero.querySelector('.about-left-col');
          const rightCol = aboutHero.querySelector('.about-right-col');
          const navLinks = document.querySelectorAll('header nav a');

          // Left col from left (x = -40, y = 0)
          applyStyle(leftCol, '0', 0, -40, 150, 1.2);
          // Right col from bottom (x = 0, y = 40)
          applyStyle(rightCol, '0', 44, 0, 320, 1.4);
          
          navLinks.forEach((link, idx) => {
            applyStyle(link, '0', 0, 25, idx * 70 + 150, 1.0);
          });

          const initStyle = document.getElementById('premium-motion-init');
          if (initStyle) initStyle.remove();

          requestAnimationFrame(() => {
            trigger(leftCol);
            trigger(rightCol);
            navLinks.forEach((link) => trigger(link));
          });
        } else {
          const initStyle = document.getElementById('premium-motion-init');
          if (initStyle) initStyle.remove();
        }
      };
      initAbout();
      return;
    }

    // If on sub-page (not Home and not About), do not run any reveal motion:
    if (location.pathname !== '/') {
      const initStyle = document.getElementById('premium-motion-init');
      if (initStyle) initStyle.remove();
      const navLinks = document.querySelectorAll('header nav a');
      navLinks.forEach((link) => {
        link.style.opacity = '1';
        link.style.transform = 'none';
        link.style.transition = 'none';
      });
      return;
    }



    let attempts = 0;
    const init = () => {
      attempts++;
      const hero = document.getElementById('hero');
      const approach = document.getElementById('approach');
      const expertise = document.getElementById('expertise');
      const processSec = document.getElementById('process');
      const testimonials = document.getElementById('testimonials');
      const contact = document.getElementById('contact');

      if (!hero && !approach && !expertise && attempts < 50) {
        setTimeout(init, 16);
        return;
      }

      try {
        // 1. HERO & HEADER REVEAL (Only on initial load of homepage)
        if (hasAnimatedHero === false && hero) {
          const heroTextUnit = hero.querySelector('.z-10') || hero.firstElementChild;
          const heroImgUnit = hero.querySelector('.hero-img-col') || hero.lastElementChild;
          const navLinks = document.querySelectorAll('header nav a');

          // Apply inline styles to hold opacity: 0 BEFORE removing style tag
          applyStyle(heroTextUnit, '0', 36, 0, 150, 1.6);
          // Simple slow fade-in without scaling to avoid motion sickness
          applyStyle(heroImgUnit, '0', 0, 0, 320, 2.2, 'cubic-bezier(0.22, 1, 0.36, 1)', 1);
          
          navLinks.forEach((link, idx) => {
            applyStyle(link, '0', 0, 25, idx * 70 + 150, 1.0);
          });

          const initStyle = document.getElementById('premium-motion-init');
          if (initStyle) initStyle.remove();

          requestAnimationFrame(() => {
            trigger(heroTextUnit);
            trigger(heroImgUnit);
            navLinks.forEach((link) => trigger(link));
          });

          hasAnimatedHero = true;
        } else {
          // If already animated, remove pre-hide tag
          const initStyle = document.getElementById('premium-motion-init');
          if (initStyle) initStyle.remove();
        }

        // 2. INTERSECTION OBSERVER SCROLL REVEAL (Homepage sections below the fold)
        const scrollTargets = [];
        const addTarget = (el, delay = 0, y = 36) => {
          if (!el) return;
          applyStyle(el, '0', y, 0, delay, 0.9);
          scrollTargets.push(el);
        };

        // Approach Section
        if (approach) {
          const headerUnit = approach.querySelector('h2')
            ? approach.querySelector('h2').parentElement
            : approach.firstElementChild;
          addTarget(headerUnit, 0);
          const cardsUnit =
            approach.querySelector('.grid') ||
            approach.querySelector('.relative') ||
            approach.lastElementChild;
          if (cardsUnit && cardsUnit !== headerUnit) addTarget(cardsUnit, 150);
        }

        // Expertise Section
        if (expertise) {
          const headerUnit =
            expertise.querySelector('.text-center') ||
            expertise.querySelector('h2')?.parentElement;
          addTarget(headerUnit, 0);
          const cards = expertise.querySelectorAll('.grid > div, [class*="grid"] > div');
          cards.forEach((card, idx) => addTarget(card, (idx % 4) * 120));
        }

        // Process Section
        if (processSec) {
          const headerUnit =
            processSec.querySelector('.text-center') ||
            processSec.querySelector('h2')?.parentElement;
          addTarget(headerUnit, 0);
          const steps = processSec.querySelectorAll('.grid > div, [class*="grid"] > div');
          steps.forEach((step, idx) => addTarget(step, (idx % 4) * 120));
        }

        // Testimonials Section
        if (testimonials) {
          const headerUnit =
            testimonials.querySelector('.text-center') ||
            testimonials.querySelector('h2')?.parentElement;
          addTarget(headerUnit, 0);
          const tCards = testimonials.querySelectorAll(
            '.flex.gap-6 > div, .grid > div, [class*="gap-6"] > div'
          );
          tCards.forEach((card, idx) => addTarget(card, (idx % 3) * 140));
        }

        // Contact Section
        if (contact) {
          const leftCol =
            contact.querySelector('.flex-col.items-start') ||
            contact.querySelector('h2')?.parentElement ||
            contact.firstElementChild;
          addTarget(leftCol, 0);
          const formEl = contact.querySelector('form');
          const formCard = formEl ? formEl.parentElement : contact.lastElementChild;
          if (formCard && formCard !== leftCol) addTarget(formCard, 150);
        }

        // Fallback if IntersectionObserver not available
        if (!('IntersectionObserver' in window)) {
          scrollTargets.forEach((el) => trigger(el));
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                trigger(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px',
          }
        );

        scrollTargets.forEach((el) => observer.observe(el));
      } catch (e) {
        console.error('Scroll motion error:', e);
      }
    };

    init();

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [location.pathname]);
}
