function AboutSection() {
  return (
    <section
      className="about px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="about"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">01</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          The Person
          <br />
          <em className="not-italic text-goldLight">Behind the Work</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] sm:p-8">
          <div className="space-y-6 text-base leading-8 text-stone-300">
            <p>
              <span className="text-goldLight">My name is Timilehin Seyi Adeleke Ogunsakin</span>,
              and I am a product of the Nigerian spirit - resilient, resourceful, and
              relentlessly forward-looking. Born and based in{' '}
              <span className="text-goldLight">Ibadan, Oyo State</span>, I sit at the crossroads of
              technology, health, and human capital development.
            </p>
            <p>
              My journey is not a straight line. It is a mosaic of{' '}
              <span className="text-goldLight">bold experiments, hard-won lessons</span>, and a
              passionate belief that the African continent is not behind - it is simply on
              its own trajectory. I work every day to be part of that trajectory's
              acceleration.
            </p>
            <p>
              I believe deeply in{' '}
              <span className="text-goldLight">building things that outlast their builders</span> -
              solutions that don't just solve today's problems, but design better tomorrows.
              Whether in a boardroom, a clinic, or a codebase, I carry the same conviction:
              precision matters, people matter more.
            </p>
          </div>

          <div className="mt-8 grid gap-4" id="skillsSection">
            {[
              ['Technology', '92%'],
              ['Health Innovation', '85%'],
              ['Product Strategy', '88%'],
              ['Leadership', '90%'],
              ['Research & Analysis', '82%'],
              ['Communication', '95%']
            ].map(([label, value]) => (
              <div key={label} className="space-y-2">
                <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.2em] text-stone-500">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="skill-fill h-full w-0 rounded-full bg-gradient-to-r from-gold to-teal shadow-[0_0_16px_rgba(201,168,76,0.35)] transition-[width] duration-1000 ease-out"
                    data-width={value}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['🔬', 'Research-Driven', 'Every decision is grounded in evidence, data, and deep contextual understanding.'],
              ['🌍', 'Pan-African Vision', 'Building for Africa, but thinking for the world. Local problems, global solutions.'],
              ['⚙️', 'Systems Thinker', "I don't fix symptoms. I redesign the systems that create them."],
              ['🤝', 'Community First', 'Success shared is success multiplied. I invest in people as fiercely as ideas.']
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-[1.45rem] border border-white/[0.08] bg-white/[0.04] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:border-gold/20"
              >
                <div className="mb-3 text-2xl">{icon}</div>
                <div className="font-display text-xl text-stone-100">{title}</div>
                <div className="mt-2 text-sm leading-7 text-stone-400">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ['01', 'Radical Authenticity', 'Being fully myself, everywhere'],
            ['02', 'Purposeful Innovation', 'Tech that serves humanity'],
            ['03', 'Health as Wealth', 'Whole-person wellbeing'],
            ['04', 'Continuous Growth', 'Learning never stops'],
            ['05', 'Integrity Without Compromise', 'Character is non-negotiable'],
            ['06', 'Legacy Over Virality', 'Built to last, not to trend']
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="grid gap-3 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.24)] sm:grid-cols-[76px_minmax(0,1fr)_auto] sm:items-center"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">{number}</span>
              <div className="text-stone-100">{title}</div>
              <div className="text-sm text-stone-400">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
