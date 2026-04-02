function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">
          The Person
          <br />
          <em className="inline-em-gold">Behind the Work</em>
        </h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            <span className="highlight">My name is Timilehin Seyi Adeleke Ogunsakin</span>,
            and I am a product of the Nigerian spirit - resilient, resourceful, and
            relentlessly forward-looking. Born and based in{' '}
            <span className="highlight">Ibadan, Oyo State</span>, I sit at the crossroads of
            technology, health, and human capital development.
          </p>
          <p>
            My journey is not a straight line. It is a mosaic of{' '}
            <span className="highlight">bold experiments, hard-won lessons</span>, and a
            passionate belief that the African continent is not behind - it is simply on
            its own trajectory. I work every day to be part of that trajectory's
            acceleration.
          </p>
          <p>
            I believe deeply in{' '}
            <span className="highlight">building things that outlast their builders</span> -
            solutions that don't just solve today's problems, but design better tomorrows.
            Whether in a boardroom, a clinic, or a codebase, I carry the same conviction:
            precision matters, people matter more.
          </p>

          <div className="skills-section" id="skillsSection">
            <div className="skill-bar">
              <div className="skill-label">
                <span>Technology</span>
                <span>92%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="92%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-label">
                <span>Health Innovation</span>
                <span>85%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="85%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-label">
                <span>Product Strategy</span>
                <span>88%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="88%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-label">
                <span>Leadership</span>
                <span>90%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="90%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-label">
                <span>Research & Analysis</span>
                <span>82%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="82%"></div>
              </div>
            </div>
            <div className="skill-bar">
              <div className="skill-label">
                <span>Communication</span>
                <span>95%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" data-width="95%"></div>
              </div>
            </div>
          </div>

          <div className="about-pillars about-pillars-tight">
            <div className="pillar">
              <div className="pillar-icon">🔬</div>
              <div className="pillar-name">Research-Driven</div>
              <div className="pillar-desc">
                Every decision is grounded in evidence, data, and deep contextual
                understanding.
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🌍</div>
              <div className="pillar-name">Pan-African Vision</div>
              <div className="pillar-desc">
                Building for Africa, but thinking for the world. Local problems, global
                solutions.
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">⚙️</div>
              <div className="pillar-name">Systems Thinker</div>
              <div className="pillar-desc">
                I don't fix symptoms. I redesign the systems that create them.
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-icon">🤝</div>
              <div className="pillar-name">Community First</div>
              <div className="pillar-desc">
                Success shared is success multiplied. I invest in people as fiercely as
                ideas.
              </div>
            </div>
          </div>
        </div>

        <div className="values-list">
          <div className="value-item">
            <span className="value-num">01</span>
            <span className="value-text">Radical Authenticity</span>
            <span className="value-sub">Being fully myself, everywhere</span>
          </div>
          <div className="value-item">
            <span className="value-num">02</span>
            <span className="value-text">Purposeful Innovation</span>
            <span className="value-sub">Tech that serves humanity</span>
          </div>
          <div className="value-item">
            <span className="value-num">03</span>
            <span className="value-text">Health as Wealth</span>
            <span className="value-sub">Whole-person wellbeing</span>
          </div>
          <div className="value-item">
            <span className="value-num">04</span>
            <span className="value-text">Continuous Growth</span>
            <span className="value-sub">Learning never stops</span>
          </div>
          <div className="value-item">
            <span className="value-num">05</span>
            <span className="value-text">Integrity Without Compromise</span>
            <span className="value-sub">Character is non-negotiable</span>
          </div>
          <div className="value-item">
            <span className="value-num">06</span>
            <span className="value-text">Legacy Over Virality</span>
            <span className="value-sub">Built to last, not to trend</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
