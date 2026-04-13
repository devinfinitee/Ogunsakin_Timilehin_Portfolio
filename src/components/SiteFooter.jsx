function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-16">
      <div className="grid gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500 lg:grid-cols-3 lg:items-start">
        <div>
          <div className="font-display text-base tracking-[0.12em] text-stone-100">O.Victor</div>
          <div className="mt-2">Let's Work Together</div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#top" className="hover:text-goldLight">Home</a>
          <a href="#about" className="hover:text-goldLight">About</a>
          <a href="#tech" className="hover:text-goldLight">Tech Stack</a>
          <a href="#projects" className="hover:text-goldLight">Projects</a>
          <a href="#career" className="hover:text-goldLight">Experience</a>
          <a href="#contact" className="hover:text-goldLight">Contact</a>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a href="https://github.com/devinfinitee" target="_blank" rel="noreferrer" className="hover:text-goldLight">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-goldLight">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-goldLight">Twitter</a>
        </div>
      </div>
      <div className="mt-5 text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">© 2026 Ogunlade Victor - All Rights Reserved</div>
    </footer>
  );
}

export default SiteFooter;
