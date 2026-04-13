import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#career' },
  { label: 'Contact', href: '#contact' }
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.45, rootMargin: '-18% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      id="nav"
      className="fixed left-1/2 top-4 z-[100] w-[min(1100px,calc(100%-1rem))] -translate-x-1/2 rounded-[1.75rem] border border-gold/15 bg-ink/70 px-4 py-3 shadow-[0_12px_42px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 md:px-6 [&.scrolled]:border-gold/20 [&.scrolled]:bg-ink/85 [&.scrolled]:shadow-[0_12px_42px_rgba(0,0,0,0.42)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a href="#top" className="font-display text-lg font-semibold tracking-[0.14em] text-stone-100">
          O<span className="text-gold">.</span>Victor
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:border-gold/40 hover:bg-white/10 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>

        <ul className="nav-links hidden items-center gap-2 md:flex md:gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative inline-flex items-center px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-500 transition duration-200 hover:-translate-y-0.5 hover:text-stone-100 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all [&.active]:text-goldLight [&.active]:after:w-full ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`md:hidden ${menuOpen ? 'mt-4 grid grid-cols-2 gap-2' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'}`}>
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.slice(1);

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-stone-300 transition hover:border-gold/40 hover:text-stone-100 [&.active]:border-gold/40 [&.active]:text-goldLight ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBar;
