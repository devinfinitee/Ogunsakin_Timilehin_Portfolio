function InnovationsSection() {
  const featured = {
    name: 'SmashUTME',
    status: 'Actively Developing',
    live: '#',
    github: 'https://github.com/devinfinitee',
    metrics: [
      ['320+', 'Students'],
      ['7,800+', 'Practice Questions Served'],
      ['1,150+', 'Test Sessions'],
      ['+28/week', 'User Growth']
    ]
  };

  const projects = [
    {
      number: '01',
      title: 'Finguard',
      desc: 'A comprehensive fintech application for personal finance management, featuring expense tracking, budget planning, investment monitoring, and financial insights.',
      stack: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB'],
      rating: '5/5',
      live: 'https://finguard-three.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '02',
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.',
      stack: ['React', 'Tailwind CSS', 'GSAP', 'Paystack'],
      rating: '5/5',
      live: 'https://ecocartai.netlify.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '03',
      title: 'AirCambridge',
      desc: 'A premium private jet booking platform built for a client, featuring real-time flight tracking, luxury aircraft selection, and seamless booking experience.',
      stack: ['React', 'Tailwind CSS'],
      rating: '4/5',
      live: 'https://aircambridge.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '04',
      title: 'NewsStream Website',
      desc: 'A modern news aggregation platform with real-time updates, category filtering, and responsive design.',
      stack: ['React', 'NewsAPI', 'Tailwind CSS', 'GSAP'],
      rating: '4/5',
      live: 'https://news-stream-zeta.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '05',
      title: 'Your Health Pal',
      desc: 'An innovative AI-powered healthcare platform developed for a hackathon exhibition, featuring symptom analysis, health recommendations, and telemedicine integration.',
      stack: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'GeminiAPI'],
      rating: '5/5',
      live: 'https://yourhealthpal.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '06',
      title: 'PrimeNest',
      desc: 'A polished real-estate showcase platform where owners can display property listings with rich visuals and clear calls-to-action.',
      stack: ['React', 'Tailwind CSS', 'Firebase'],
      rating: '5/5',
      live: 'https://primenest-beige.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '07',
      title: 'VCO Attendance System',
      desc: 'Built to solve tracking of church attendees with quick check-ins, attendance history, and service insights.',
      stack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
      rating: '5/5',
      live: 'https://vcoattendance.vercel.app',
      github: 'https://github.com/devinfinitee'
    },
    {
      number: '08',
      title: 'Victorious Agency',
      desc: 'In-progress course marketplace where sellers can upload, price, and market their digital courses.',
      stack: ['React', 'Tailwind CSS', 'Express', 'MongoDB'],
      rating: '5/5',
      live: 'https://vcoattendance.vercel.app',
      github: 'https://github.com/devinfinitee'
    }
  ];

  return (
    <section
      className="innovations px-4 py-20 opacity-0 translate-y-6 transition-all duration-700 sm:px-6 lg:px-16 [&.revealed]:opacity-100 [&.revealed]:translate-y-0"
      id="projects"
    >
      <div className="mb-10 flex items-end gap-4">
        <span className="text-[0.72rem] uppercase tracking-[0.3em] text-gold">04</span>
        <h2 className="font-display text-4xl leading-[0.92] text-stone-100 sm:text-5xl lg:text-[4.5rem]">
          Projects
          <br />
          <em className="not-italic text-goldLight">Showcase</em>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent lg:block" />
      </div>

      <p
        className="typewriter-loop mb-8 text-[0.72rem] uppercase tracking-[0.3em] text-teal"
        style={{ '--typing-duration': '3.6s', '--typing-steps': 42, '--typing-delay': '1.2s' }}
      >
        flagship in focus :: smashutme + production-ready supporting systems
      </p>

      <article className="mb-10 rounded-[1.6rem] border border-gold/25 bg-gradient-to-b from-gold/[0.08] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">Featured Product</span>
          <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-teal">
            {featured.status}
          </span>
        </div>

        <h3 className="mt-3 font-display text-3xl text-stone-100 sm:text-4xl">
          SmashUTME - Scalable Exam Prep Platform for Nigerian Students
        </h3>

        <p className="mt-4 max-w-4xl text-sm leading-8 text-stone-300 sm:text-base">
          SmashUTME is a production-focused web platform designed to help Nigerian students
          prepare effectively for UTME and Post-UTME exams through structured learning,
          real-time assessments, and performance tracking.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.metrics.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
              <div className="font-display text-2xl text-stone-100">{value}</div>
              <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-stone-400">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Problem</div>
            <p className="mt-2 text-sm leading-8 text-stone-300">
              Students lack structured, feedback-driven exam preparation tools tailored to
              local exam patterns and device constraints.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Solution</div>
            <p className="mt-2 text-sm leading-8 text-stone-300">
              Built a full-stack platform with real-time testing, scoring, analytics, and
              study continuity features that support consistent exam preparation.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Architecture</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Frontend: React + Svelte modules', 'Backend: Node.js + Express', 'Database: MongoDB', 'Offline Support: IndexedDB', 'Notifications: Push API'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-stone-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Core Engineering Features</div>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-stone-300">
              <li>Real-time test engine with timed sessions and auto-submission.</li>
              <li>Performance analytics tracking accuracy and weak topics.</li>
              <li>Scalable question delivery optimized for fast loading.</li>
              <li>Offline-first study support for unstable connectivity.</li>
              <li>Push reminders for study consistency.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Engineering Challenges Solved</div>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-stone-300">
              <li>Managing timed exams without losing state during interruptions.</li>
              <li>Reducing cheating opportunities through stricter test session controls.</li>
              <li>Designing efficient MongoDB retrieval for mixed question banks.</li>
              <li>Handling concurrent active test sessions with reliable result writes.</li>
              <li>Optimizing performance for low-end Android devices and limited data plans.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Key Engineering Decisions</div>
          <p className="mt-2 text-sm leading-8 text-stone-300">
            Stack choices prioritize delivery speed, maintainability, and low-latency user
            experience. State is managed to preserve exam continuity, while question/result
            models are structured for analytics and reliable history tracking.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-goldLight">Roadmap</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['AI recommendations', 'Adaptive testing', 'Leaderboards and gamification', 'Mobile app version', 'Scaled backend infrastructure'].map((item) => (
              <span key={item} className="rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-teal">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-8 text-stone-300">
            Focused on improving access to quality exam preparation tools for Nigerian students
            preparing for UTME.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-[0.62rem] uppercase tracking-[0.18em]">
          <a href={featured.live} className="rounded-full border border-teal/25 bg-teal/10 px-3 py-2 text-teal hover:bg-teal/15">Live Status</a>
          <a href={featured.github} target="_blank" rel="noreferrer" className="rounded-full border border-gold/25 bg-gold/10 px-3 py-2 text-goldLight hover:bg-gold/15">GitHub</a>
        </div>
      </article>

      <h3 className="mb-4 text-[0.72rem] uppercase tracking-[0.3em] text-stone-400">Other Engineered Systems</h3>

      <div className="grid gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="innovation-item grid gap-4 rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-white/[0.015] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-1 hover:border-gold/20 lg:grid-cols-[80px_minmax(0,1fr)_auto] lg:items-start"
          >
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-goldLight">{project.number}</div>
            <div>
              <h3 className="font-display text-2xl text-stone-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-8 text-stone-400">{project.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-[0.62rem] uppercase tracking-[0.18em]">
                <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-teal/25 bg-teal/10 px-3 py-2 text-teal hover:bg-teal/15">Live Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-gold/25 bg-gold/10 px-3 py-2 text-goldLight hover:bg-gold/15">GitHub</a>
              </div>
            </div>
            <div className="inline-flex h-fit w-fit items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone-200">
              Rating {project.rating}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InnovationsSection;
