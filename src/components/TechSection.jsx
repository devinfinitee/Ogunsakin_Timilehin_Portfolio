function TechSection() {
  return (
    <section
      className="tech relative px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="tech"
    >
      <div className="pointer-events-none absolute right-0 top-4 text-[clamp(5rem,15vw,12rem)] font-display font-bold tracking-[0.14em] text-white/5">
        CODE
      </div>
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">02</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Tech
          <br />
          <em className="not-italic text-teal">Stack</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ['Frontend Frameworks', ['React', 'Svelte', 'Vue', 'TypeScript']],
          ['Styling & Animation', ['Tailwind CSS', 'GSAP']],
          ['Backend', ['Node.js', 'Express', 'Python']],
          ['Databases', ['MongoDB']],
          ['DevOps/Infrastructure', ['Docker', 'AWS', 'GitHub']],
          ['APIs & Services', ['Paystack', 'NewsAPI', 'GeminiAPI', 'Firebase']]
        ].map(([title, tags]) => (
          <article
            key={title}
            className="tech-card group rounded-[1.55rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-gold/20"
          >
            <h3 className="font-display text-2xl text-stone-100">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechSection;
