function CareerSection() {
  return (
    <section
      className="career px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="career"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">05</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Career
          <br />
          <em className="not-italic text-teal">Journey & Milestones</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <div className="space-y-4">
        {[
          ['2024 - Present', 'Lead Technology & Health Innovation Strategist', 'Independent / Consulting', 'Advising health organisations, startups, and government agencies on digital transformation strategy. Designing technology roadmaps, conducting feasibility studies, and building go-to-market strategies for health-tech products across West Africa.'],
          ['2022 - 2024', 'Senior Product & Innovation Lead', 'Digital Health Initiative - Ibadan, Nigeria', 'Led cross-functional teams in building and deploying digital health products. Oversaw full product lifecycle from research to release. Reduced patient onboarding time by 60% through UX redesign. Implemented data analytics framework serving 15 clinics.'],
          ['2020 - 2022', 'Technology Program Officer', 'Health NGO - West Africa Region', 'Coordinated tech-for-health programmes across Nigeria, Ghana, and Senegal. Managed vendor relationships, built internal capacity for digital tools adoption, and authored policy briefs on digital health standards.'],
          ['2018 - 2020', 'Software Engineer / Data Analyst', 'Fintech Startup - Lagos, Nigeria', 'Built backend systems and data pipelines for a financial inclusion platform. Gained deep technical experience in scalable system design, API integration, and mobile money infrastructure.'],
          ['2014 - 2018', 'BSc. Computer Science', 'University of Ibadan - Ibadan, Nigeria', 'Graduated with First Class Honours. Final year project: "A Machine Learning Approach to Malaria Detection in Rural Nigerian Communities." President of the Computer Science Students\' Association.']
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
