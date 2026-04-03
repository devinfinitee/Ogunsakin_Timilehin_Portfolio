function HealthSection() {
  return (
    <section
      className="health px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="health"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">03</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Health
          <br />
          <em className="not-italic text-teal">Philosophy & Advocacy</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(260px,36%)_minmax(0,64%)] lg:items-start lg:gap-10 xl:gap-12">
        <div className="w-full min-w-0 rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] sm:p-8 lg:sticky lg:top-24 lg:self-start lg:max-w-[460px] xl:max-w-[520px]">
          <div className="font-display text-[clamp(1.45rem,6.8vw,2.8rem)] leading-[1.15] text-goldLight break-words">
            "A sick person cannot build a great nation. Health is not a privilege - it is
            the foundation of every other ambition."
          </div>
          <div className="mt-4 text-[0.75rem] uppercase tracking-[0.2em] text-stone-500">
            - Timilehin Seyi Ogunsakin
          </div>
          <div className="mt-6 space-y-6 text-base leading-8 text-stone-300">
            <p>
              My work in health is deeply personal. Having witnessed the gaps in Nigeria's
              healthcare system - the overcrowded clinics, the unaffordable drugs, the
              preventable deaths - I made a commitment to use every tool available, especially
              technology, to change this story.
            </p>
            <p>
              But I also believe health begins at home, in habits, in mindset. Personally, I
              practise what I preach: intentional movement, nutrition literacy, mental
              wellness, and regular health monitoring. My personal health journey informs my
              professional advocacy.
            </p>
          </div>
        </div>

        <div className="min-w-0 grid gap-4 lg:pr-1">
          {[
            ['01', 'Preventive Over Curative', 'The most powerful healthcare intervention is the one that happens before the crisis. I advocate for and build systems centred on prevention - community health education, early screening tools, and lifestyle medicine platforms.'],
            ['02', 'Access for All, Not Just the Privileged', 'Quality healthcare must not be a function of your postal code or income bracket. I design digital health solutions specifically for the underserved - offline-capable, multi-language, and free at point of use where possible.'],
            ['03', 'Mental Health is Real Health', 'In a society that often stigmatises mental health struggles, I choose to normalise the conversation. I openly discuss burnout, anxiety, and the mental load of ambition - and I champion resources that make support accessible.'],
            ['04', 'Data-Driven Public Health', "Africa's health challenges need African data. I work to build and leverage local health datasets, epidemiological research tools, and surveillance systems that tell our own stories accurately."],
            ['05', 'Personal Wellness as Professional Fuel', 'I schedule rest as deliberately as meetings. Sleep, movement, nutrition, and spiritual grounding are not luxuries - they are the operating system beneath everything I build and everything I am.']
          ].map(([number, title, text]) => (
            <article
              key={title}
              className="principle rounded-[1.4rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-gold/20"
            >
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">{number}</div>
              <h3 className="mt-3 font-display text-2xl text-stone-100">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-stone-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HealthSection;
