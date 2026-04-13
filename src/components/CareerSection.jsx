function CareerSection() {
  return (
    <section
      className="career px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="career"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">05</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Development
          <br />
          <em className="not-italic text-teal">Milestones</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <p className="mb-8 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
        My professional journey and growth across frontend foundations, backend expansion,
        and production-ready full stack delivery.
      </p>

      <div className="space-y-4">
        {[
          ['2021', 'Frontend Development Foundation', 'Osun State, Nigeria', 'Mastered the core web technologies (HTML5, CSS3, JavaScript) and went ahead to learn several frameworks like Bootstrap, TailwindCSS, jQuery, React, Svelte, Vue. Developed several responsive interfaces focused on accessibility and clean design.'],
          ['2022', 'Backend and Full Stack Transition', 'Osun State, Nigeria', 'Acquired proficiency in Node.js/Python and utilized Express and Node.js with other frameworks to design and implement robust, secure RESTful APIs and focused on database integration using MongoDB and data modelling.'],
          ['2024 - Present', 'Capstone Projects and Portfolio Building', 'Ogbomosho, Oyo State', 'Building live production-ready web applications, leveraging a full MERN/MEVN stack and demonstrating the ability to architect and deploy scalable solutions from the initial concept to final deployment.']
        ].map(([date, role, org, desc]) => (
          <article
            key={role}
            className="timeline-item relative rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] p-5 pl-10 shadow-[0_16px_45px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:border-gold/20"
          >
            <span className="absolute left-4 top-6 h-3 w-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,168,76,0.12)]" />
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">{date}</div>
            <h3 className="mt-3 font-display text-2xl text-stone-100">{role}</h3>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-stone-500">{org}</div>
            <p className="mt-4 text-sm leading-8 text-stone-400">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CareerSection;
