function ContactSection() {
  return (
    <section
      className="contact relative overflow-hidden px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="contact"
    >
      <div className="absolute inset-x-6 top-10 h-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-gold/10 bg-[#111111]/80 px-5 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-8 lg:px-12">
        <p className="mb-4 text-[0.8rem] uppercase tracking-[0.3em] text-gold">Let's build something remarkable</p>
        <h2 className="font-display text-5xl leading-[0.9] text-stone-100 sm:text-6xl lg:text-[5.25rem]">
          Ready to
          <br />
          <em className="not-italic text-goldLight">Connect?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
          Whether you're a founder, a clinician, a fellow builder, or someone who just
          resonates with this work - my door is open. Let's talk, collaborate, or simply
          share ideas.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@timilehin.com"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-stone-100 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
          >
            📧 Email Me
          </a>
          <a
            href="https://linkedin.com"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-stone-100 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-stone-100 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
          >
            🐦 X / Twitter
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-goldLight transition hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/15"
          >
            📄 Download CV
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-left">
            <div className="mb-2 text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">Location</div>
            <div className="text-stone-100">Ibadan, Oyo State · Nigeria</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-left">
            <div className="mb-2 text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">Availability</div>
            <div className="text-teal">Open to Projects & Collaboration</div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-left">
            <div className="mb-2 text-[0.68rem] uppercase tracking-[0.22em] text-stone-500">Response Time</div>
            <div className="text-stone-100">Within 24 Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
