function HeroSection() {
  return (
    <section
      className="hero relative min-h-screen overflow-hidden px-4 py-28 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-16 lg:py-32 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="top"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute -right-40 -top-36 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-40 bottom-[-12rem] h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-4xl lg:mx-0">
        <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-gold animate-[fadeUp_0.8s_ease_0.2s_forwards]">
          <span className="h-px w-8 bg-gold" />
          Nigerian Technologist & Innovator
        </div>

        <h1 className="font-display text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-stone-100 sm:text-6xl lg:text-[7.5rem]">
          Timilehin
          <span className="block pl-4 text-gold sm:pl-10">Seyi</span>
          <span className="block font-bold">Ogunsakin</span>
        </h1>

        <p
          className="typewriter mt-5 w-full max-w-full text-[11px] uppercase tracking-[0.14em] leading-6 text-goldLight sm:max-w-2xl sm:text-[0.95rem] sm:tracking-[0.32em]"
          style={{ '--typing-duration': '1.45s', '--typing-steps': 45, '--typing-delay': '0.55s' }}
        >
          Tech Innovator · Health Advocate · Career Builder
        </p>

        <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
          An African mind shaping global futures - at the intersection of technology, health
          systems, and human potential. Building solutions that matter, stories that
          resonate, and a legacy that endures.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#innovations"
            className="btn-primary inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-gold to-[#b9942f] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-ink transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(201,168,76,0.24)]"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="btn-ghost inline-flex min-h-12 items-center justify-center rounded-full border border-gold/30 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-stone-100 transition duration-200 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.08]"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex justify-center lg:mt-0 lg:justify-end">
        <div className="relative w-full max-w-xl aspect-[0.95]">
          <div className="absolute inset-[8%] rounded-[28%_72%_65%_35%_/_46%_37%_63%_54%] border border-gold/15 bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.16),rgba(255,255,255,0.02)_60%),radial-gradient(circle_at_80%_10%,rgba(47,191,179,0.14),transparent_32%),rgba(255,255,255,0.02)] shadow-[0_28px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl rotate-[-10deg]" />

          <div className="absolute inset-[15%] flex flex-col items-center justify-center gap-5 rounded-[24%_76%_60%_40%_/_52%_42%_58%_48%] border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="font-display text-[clamp(4rem,10vw,7rem)] leading-none tracking-[0.12em] text-goldLight">
              TSA
            </div>
            <div className="text-center">
              <div className="text-lg uppercase tracking-[0.14em] text-stone-100 sm:text-xl">
                Timilehin S. A. Ogunsakin
              </div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-[0.25em] text-stone-500">
                Innovator · Ibadan, Nigeria
              </div>
            </div>
          </div>

          <div className="absolute right-3 top-10 rounded-full border border-gold/15 bg-ink/70 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-goldLight shadow-[0_10px_24px_rgba(0,0,0,0.25)] animate-[float_7s_ease-in-out_infinite]">
            Open to Collaborate
          </div>

          <div className="absolute bottom-8 left-3 right-3 grid grid-cols-3 gap-3">
            {[
              ['5+', 'Years'],
              ['12+', 'Projects'],
              ['3', 'Domains']
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.15rem] border border-white/[0.08] bg-ink/75 px-4 py-4 text-center shadow-[0_16px_45px_rgba(0,0,0,0.24)]"
              >
                <span className="block font-display text-3xl leading-none text-stone-100">{value}</span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-stone-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-4 z-10 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-stone-500 sm:flex lg:left-16">
        <span className="h-px w-8 bg-gold" />
        Scroll to explore
      </div>
    </section>
  );
}

export default HeroSection;
