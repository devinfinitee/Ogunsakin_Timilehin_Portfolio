import { useEffect } from 'react';

export default function usePortfolioEffects() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');

    if (!cursor || !ring) {
      return undefined;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMouseMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    let rafId = 0;
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animateRing);
    };

    const onHoverStart = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      ring.style.width = '60px';
      ring.style.height = '60px';
    };

    const onHoverEnd = () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '40px';
      ring.style.height = '40px';
    };

    const interactiveElements = document.querySelectorAll(
      'a, button, .tech-card, .innovation-item, .value-item, .pillar, .principle, .personal-card'
    );

    document.addEventListener('mousemove', onMouseMove);
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onHoverStart);
      element.addEventListener('mouseleave', onHoverEnd);
    });

    animateRing();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onHoverStart);
        element.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []);

  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) {
      return undefined;
    }

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Scroll Progress Indicator
  useEffect(() => {
    const scrollProgress = document.getElementById('scrollProgress');
    if (!scrollProgress) {
      return undefined;
    }

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const skillsSection = document.getElementById('skillsSection');
    if (!skillsSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
              bar.style.width = bar.getAttribute('data-width');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(skillsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));

    if (!sectionElements.length || !navLinks.length) {
      return undefined;
    }

    const linkById = new Map(
      navLinks.map((link) => [link.getAttribute('href')?.replace('#', ''), link])
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => link.classList.remove('active'));
          const targetLink = linkById.get(entry.target.id);
          if (targetLink) {
            targetLink.classList.add('active');
          }
        });
      },
      { threshold: 0.5, rootMargin: '-22% 0px -40% 0px' }
    );

    sectionElements.forEach((section, index) => {
      section.style.setProperty('--reveal-delay', `${Math.min(index * 70, 420)}ms`);
      revealObserver.observe(section);
      navObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) {
      return undefined;
    }

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      document.documentElement.style.setProperty('--parallax-x', `${x}px`);
      document.documentElement.style.setProperty('--parallax-y', `${y}px`);
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Magnetic Button Effect: Buttons slightly follow cursor on hover
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-ghost');
    if (buttons.length === 0) {
      return undefined;
    }

    const onMouseMove = (event) => {
      buttons.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const dx = event.clientX - btnCenterX;
        const dy = event.clientY - btnCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Magnetic attraction range: 150px
        if (distance < 150) {
          const pull = 0.35;
          const magneticX = (dx * pull) / (distance || 1);
          const magneticY = (dy * pull) / (distance || 1);

          btn.style.setProperty('--magnetic-x', `${magneticX}px`);
          btn.style.setProperty('--magnetic-y', `${magneticY}px`);
        } else {
          btn.style.setProperty('--magnetic-x', '0px');
          btn.style.setProperty('--magnetic-y', '0px');
        }
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Card Tilt Effect: Cards tilt based on mouse position during hover
  useEffect(() => {
    const cards = document.querySelectorAll(
      '.tech-card, .innovation-item, .personal-card, .pillar, .principle'
    );

    if (cards.length === 0) {
      return undefined;
    }

    const onMouseMove = (event) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const angleX = ((event.clientY - cardCenterY) / rect.height) * 8;
        const angleY = -((event.clientX - cardCenterX) / rect.width) * 8;

        card.style.setProperty('--tilt-x', `${angleX}deg`);
        card.style.setProperty('--tilt-y', `${angleY}deg`);
      });
    };

    const onMouseLeave = () => {
      cards.forEach((card) => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    cards.forEach((card) => {
      card.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cards.forEach((card) => {
        card.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);
}
