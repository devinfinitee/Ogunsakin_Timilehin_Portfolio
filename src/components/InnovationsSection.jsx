function InnovationsSection() {
  return (
    <section className="innovations" id="innovations">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">
          Innovations
          <br />
          <em className="inline-em-gold">& Projects</em>
        </h2>
        <div className="section-line"></div>
      </div>
      <p
        className="innovations-ambient typewriter-loop"
        style={{ '--typing-duration': '3.6s', '--typing-steps': 42, '--typing-delay': '1.2s' }}
      >
        live build log :: shipping health-tech + ai systems for africa
      </p>
      <div className="innovation-items">
        <div className="innovation-item">
          <div className="inno-num">01</div>
          <div className="inno-content">
            <div className="inno-title">HealthBridge Nigeria</div>
            <div className="inno-desc">
              An offline-first telemedicine platform connecting rural communities to
              qualified healthcare providers via USSD and lightweight mobile apps. Serving
              3 states and growing.
            </div>
          </div>
          <div className="inno-status status-active">Live</div>
        </div>
        <div className="innovation-item">
          <div className="inno-num">02</div>
          <div className="inno-content">
            <div className="inno-title">CareerMap Africa</div>
            <div className="inno-desc">
              An AI-powered career intelligence platform designed for African professionals
              - providing personalised career pathways, skills gap analysis, and curated
              opportunities tailored to local market realities.
            </div>
          </div>
          <div className="inno-status status-building">Building</div>
        </div>
        <div className="innovation-item">
          <div className="inno-num">03</div>
          <div className="inno-content">
            <div className="inno-title">MediScan AI</div>
            <div className="inno-desc">
              A computer vision diagnostic aid tool that helps frontline health workers in
              low-resource settings interpret medical imagery with greater accuracy,
              reducing misdiagnosis rates.
            </div>
          </div>
          <div className="inno-status status-building">Building</div>
        </div>
        <div className="innovation-item">
          <div className="inno-num">04</div>
          <div className="inno-content">
            <div className="inno-title">OgunsakinLab - Open Innovation Space</div>
            <div className="inno-desc">
              A physical and virtual lab in Ibadan where tech-curious youth learn, build,
              and launch. Blending mentorship, maker culture, and real project exposure for
              the next generation of builders.
            </div>
          </div>
          <div className="inno-status status-vision">Vision</div>
        </div>
        <div className="innovation-item">
          <div className="inno-num">05</div>
          <div className="inno-content">
            <div className="inno-title">YorubaNLP Corpus</div>
            <div className="inno-desc">
              Developing an open-source natural language processing dataset and model for
              Yoruba language - ensuring Africa's richest oral traditions are preserved and
              usable in AI applications.
            </div>
          </div>
          <div className="inno-status status-active">Active Research</div>
        </div>
        <div className="innovation-item">
          <div className="inno-num">06</div>
          <div className="inno-content">
            <div className="inno-title">The Seyi Dispatch - Weekly Newsletter</div>
            <div className="inno-desc">
              A curated weekly newsletter on tech innovation, health policy, and career
              insights for ambitious African professionals. 2,000+ subscribers and growing
              every week.
            </div>
          </div>
          <div className="inno-status status-active">Live</div>
        </div>
      </div>
    </section>
  );
}

export default InnovationsSection;
