function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="grid-overlay"></div>
      <div className="hero-left">
        <div className="hero-tag">
          Nigerian Technologist & Innovator
        </div>
        <h1 className="hero-name">
          Timilehin
          <span className="accent">Seyi</span>
          <span className="bold">Ogunsakin</span>
        </h1>
        <p
          className="hero-title typewriter"
          style={{ '--typing-duration': '1.45s', '--typing-steps': 45, '--typing-delay': '0.55s' }}
        >
          Tech Innovator · Health Advocate · Career Builder
        </p>
        <p className="hero-bio">
          An African mind shaping global futures - at the intersection of technology, health
          systems, and human potential. Building solutions that matter, stories that
          resonate, and a legacy that endures.
        </p>
        <div className="hero-ctas">
          <a href="#innovations" className="btn-primary">
            Explore My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Let's Connect
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-avatar-bg"></div>
          <div className="hero-avatar-inner">
            <div className="initials-display">TSA</div>
            <div className="hero-card-info">
              <div className="hero-card-name">Timilehin S. A. Ogunsakin</div>
              <div className="hero-card-role">Innovator · Ibadan, Nigeria</div>
            </div>
          </div>
          <div className="hero-floating-badge">Open to Collaborate</div>
          <div className="hero-stat-strip">
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-lbl">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">12+</span>
              <span className="stat-lbl">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-lbl">Domains</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  );
}

export default HeroSection;
