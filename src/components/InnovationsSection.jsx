function InnovationsSection() {
  return (
    <section
      className="innovations px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="innovations"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">04</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Innovations
          <br />
          <em className="not-italic text-goldLight">& Projects</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <p
        className="typewriter-loop mb-8 text-[0.72rem] uppercase tracking-[0.3em] text-teal"
        style={{ '--typing-duration': '3.6s', '--typing-steps': 42, '--typing-delay': '1.2s' }}
      >
        live build log :: shipping health-tech + ai systems for africa
      </p>

      <div className="grid gap-4">
        {[
          ['01', 'HealthBridge Nigeria', 'An offline-first telemedicine platform connecting rural communities to qualified healthcare providers via USSD and lightweight mobile apps. Serving 3 states and growing.', 'Live', 'teal'],
          ['02', 'CareerMap Africa', 'An AI-powered career intelligence platform designed for African professionals - providing personalised career pathways, skills gap analysis, and curated opportunities tailored to local market realities.', 'Building', 'gold'],
          ['03', 'MediScan AI', 'A computer vision diagnostic aid tool that helps frontline health workers in low-resource settings interpret medical imagery with greater accuracy, reducing misdiagnosis rates.', 'Building', 'gold'],
          ['04', 'OgunsakinLab - Open Innovation Space', 'A physical and virtual lab in Ibadan where tech-curious youth learn, build, and launch. Blending mentorship, maker culture, and real project exposure for the next generation of builders.', 'Vision', 'stone'],
          ['05', 'YorubaNLP Corpus', "Developing an open-source natural language processing dataset and model for Yoruba language - ensuring Africa's richest oral traditions are preserved and usable in AI applications.", 'Active Research', 'teal'],
          ['06', 'The Seyi Dispatch - Weekly Newsletter', 'A curated weekly newsletter on tech innovation, health policy, and career insights for ambitious African professionals. 2,000+ subscribers and growing every week.', 'Live', 'teal']
        ].map(([number, title, desc, status, tone]) => (
          <article
            key={title}
            className="innovation-item grid gap-4 rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-gold/20 lg:grid-cols-[80px_minmax(0,1fr)_auto] lg:items-start"
          >
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">{number}</div>
            <div>
              <h3 className="font-display text-2xl text-stone-100">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-stone-400">{desc}</p>
            </div>
            <div
              className={`inline-flex w-fit items-center rounded-full border px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] ${tone === 'teal' ? 'border-teal/25 bg-teal/10 text-teal' : tone === 'gold' ? 'border-gold/25 bg-gold/10 text-goldLight' : 'border-white/10 bg-white/[0.06] text-stone-200'}`}
            >
              {status}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InnovationsSection;
