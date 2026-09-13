import { useEffect } from 'react';

export default function useScrollMotion() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    const applyStyle = (el, opacity, y, x, delay, duration = 0.9) => {
      if (!el || el.dataset.motionInit) return;
      el.dataset.motionInit = 'true';
      el.style.transition = 'none';
      el.style.opacity = opacity;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      el.style.willChange = 'opacity, transform';
      void el.offsetHeight;
      el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
    };

    const trigger = (el) => {
      if (!el) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0,0,0)';
        });
      });
    };

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
        setTimeout(init, 50);
        return;
      }

      try {
        // Remove CSS pre-hide style tag once JS takes over
        const initStyle = document.getElementById('premium-motion-init');
        if (initStyle) initStyle.remove();

        // 1. HERO REVEAL
        if (hero) {
          const heroTextUnit = hero.querySelector('.z-10') || hero.firstElementChild;
          const heroImgUnit = hero.querySelector('.hero-img-col') || hero.lastElementChild;

          applyStyle(heroTextUnit, '0', 36, 0, 100, 1.2);
          applyStyle(heroImgUnit, '0', 44, 0, 250, 1.3);

          setTimeout(() => {
            trigger(heroTextUnit);
            trigger(heroImgUnit);
          }, 50);
        }

        // 2. HEADER NAV LINKS SLIDE IN
        const navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach((link, idx) => {
          applyStyle(link, '0', 0, 25, idx * 60 + 100, 0.8);
        });
        setTimeout(() => {
          navLinks.forEach((link) => trigger(link));
        }, 50);

        // 3. INTERSECTION OBSERVER SCROLL REVEAL
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

    const timer = setTimeout(init, 50);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
}
