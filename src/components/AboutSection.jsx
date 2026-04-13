function AboutSection() {
  return (
    <section
      className="about px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="about"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">01</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          About
          <br />
          <em className="not-italic text-goldLight">Me</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <p className="mb-8 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
        My professional journey and growth has been shaped by hands-on product delivery,
        continuous learning, and cross-functional full stack execution.
      </p>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['F', 'Front-End Development', 'Crafting intuitive, high-performing user interfaces and experiences.', 'Modern React, Svelte, Vue frameworks with responsive design'],
          ['B', 'Back-end Architecture', 'Designing robust and scalable, efficient server-side solutions.', 'Node.js/Python, Express, RESTful APIs, database integration'],
          ['T', 'Technical Stack', 'Leveraging modern technologies to deliver clean, innovative web solutions.', 'MERN, MEVN, Docker, AWS, GitHub']
        ].map(([icon, title, writeup, expertise]) => (
          <article
            key={title}
            className="rounded-[1.6rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-xl text-goldLight">
              {icon}
            </div>
            <h3 className="mt-4 font-display text-2xl text-stone-100">{title}</h3>
            <p className="mt-3 text-sm leading-8 text-stone-400">{writeup}</p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.16em] text-teal">{expertise}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
