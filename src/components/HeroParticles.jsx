import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function HeroParticles() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 900px)').matches : false
  );
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 900px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onMobileChange = (event) => setIsMobile(event.matches);
    const onMotionChange = (event) => setReducedMotion(event.matches);

    mobileQuery.addEventListener('change', onMobileChange);
    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      mobileQuery.removeEventListener('change', onMobileChange);
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  const options = useMemo(() => {
    const particleCount = reducedMotion ? (isMobile ? 14 : 20) : isMobile ? 34 : 68;

    return {
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            width: 1200,
            height: 800
          }
        },
        color: {
          value: ['rgba(47,191,179,0.65)', 'rgba(240,237,232,0.5)']
        },
        opacity: {
          value: { min: 0.24, max: 0.65 }
        },
        size: {
          value: { min: 1.1, max: 2.8 }
        },
        links: {
          enable: !reducedMotion,
          distance: isMobile ? 100 : 130,
          color: 'rgba(47,191,179,0.35)',
          opacity: isMobile ? 0.1 : 0.14,
          width: 0.9
        },
        move: {
          enable: !reducedMotion,
          speed: isMobile ? 0.68 : 0.9,
          direction: 'none',
          random: true,
          straight: false,
          outModes: {
            default: 'out'
          }
        },
        shape: {
          type: 'circle'
        }
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: !reducedMotion,
            mode: 'grab'
          },
          resize: {
            enable: true
          }
        },
        modes: {
          grab: {
            distance: isMobile ? 85 : 120,
            links: {
              opacity: 0.14
            }
          }
        }
      }
    };
  }, [isMobile, reducedMotion]);

  const loaded = useCallback(() => {
    // No-op callback to keep component composable for future hooks.
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div className="site-particles-layer" aria-hidden="true">
      <Particles id="heroParticles" options={options} particlesLoaded={loaded} />
    </div>
  );
}

export default HeroParticles;
