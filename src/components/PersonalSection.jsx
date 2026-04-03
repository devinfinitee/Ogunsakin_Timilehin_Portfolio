function PersonalSection() {
  return (
    <section
      className="personal px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="personal"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">06</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Personal
          <br />
          <em className="not-italic text-goldLight">Life & Passions</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ['📚', 'Avid Reader', "Philosophy, African literature, biographies of builders. Currently reading: Chinua Achebe's collected essays and a biography of Elon Musk."],
          ['🏃', 'Fitness & Movement', "Early morning runs, calisthenics, and functional fitness. Movement is meditation. Goal: complete my first half-marathon by year's end."],
          ['🎵', 'Music & Culture', 'Afrobeats, Juju, Jazz, and Gospel. Music is how Yoruba people think out loud. I listen to understand eras, not just songs.'],
          ['🙏', 'Faith & Spirituality', 'Deeply rooted in faith. Prayer, gratitude, and service are daily practices that ground and direct everything I do professionally and personally.'],
          ['✍️', 'Writing & Thought Leadership', 'Essays on tech policy, health equity, and the African professional experience. Writing is how I process the world and give back to it.'],
          ['🌿', 'Nature & Mindfulness', "Ibadan's hills, the Osun river basin, the red earth of the southwest. Spending time in nature restores the clarity no screen can offer."],
          ['🍛', 'Food & Nutrition', 'Passionate about Nigerian cuisine as medicine. Ewedu, eba, and bitterleaf soup are not just cultural heritage - they are functional nutrition.'],
          ['👨‍👩‍👧', 'Family & Community', 'Family is my anchor, community is my fuel. I invest in relationships as deliberately as I invest in ideas. People are the ultimate infrastructure.']
        ].map(([icon, title, text]) => (
          <article
            key={title}
            className="personal-card rounded-[1.55rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-gold/20"
          >
            <div className="mb-4 text-3xl">{icon}</div>
            <h3 className="font-display text-2xl text-stone-100">{title}</h3>
            <p className="mt-3 text-sm leading-8 text-stone-400">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonalSection;
