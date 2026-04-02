function TechSection() {
  return (
    <section className="tech" id="tech">
      <div className="tech-bg-text">CODE</div>
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">
          Technology
          <br />
          <em className="inline-em-teal">Stack & Expertise</em>
        </h2>
        <div className="section-line"></div>
      </div>
      <div className="tech-grid">
        <div className="tech-card">
          <span className="tech-card-icon">💻</span>
          <div className="tech-card-title">Software Development</div>
          <div className="tech-card-desc">
            From concept to deployment, I architect and build robust digital products. My
            approach blends engineering rigour with user-centred design for lasting impact.
          </div>
          <div className="tech-tags">
            <span className="tag">Python</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">SQL</span>
          </div>
        </div>
        <div className="tech-card">
          <span className="tech-card-icon">🤖</span>
          <div className="tech-card-title">AI & Machine Learning</div>
          <div className="tech-card-desc">
            Leveraging artificial intelligence to solve real African challenges - from crop
            disease detection to medical diagnostics and natural language tools for
            indigenous languages.
          </div>
          <div className="tech-tags">
            <span className="tag">ML Models</span>
            <span className="tag">NLP</span>
            <span className="tag teal">Computer Vision</span>
            <span className="tag teal">LLMs</span>
          </div>
        </div>
        <div className="tech-card">
          <span className="tech-card-icon">🏥</span>
          <div className="tech-card-title">Digital Health Tech</div>
          <div className="tech-card-desc">
            Bridging the gap between healthcare delivery and technology in resource-
            constrained settings. Building tools that work on low-bandwidth, offline-first
            environments.
          </div>
          <div className="tech-tags">
            <span className="tag">EHR Systems</span>
            <span className="tag">Telemedicine</span>
            <span className="tag teal">mHealth</span>
            <span className="tag teal">FHIR</span>
          </div>
        </div>
        <div className="tech-card">
          <span className="tech-card-icon">📊</span>
          <div className="tech-card-title">Data & Analytics</div>
          <div className="tech-card-desc">
            Turning raw data into strategic intelligence. I design dashboards, pipelines,
            and reporting frameworks that empower organisations to make smarter decisions
            faster.
          </div>
          <div className="tech-tags">
            <span className="tag">Data Viz</span>
            <span className="tag">BI Tools</span>
            <span className="tag teal">ETL Pipelines</span>
            <span className="tag">Research Methods</span>
          </div>
        </div>
        <div className="tech-card">
          <span className="tech-card-icon">☁️</span>
          <div className="tech-card-title">Cloud & Infrastructure</div>
          <div className="tech-card-desc">
            Designing scalable, resilient infrastructure tailored for African internet
            realities - optimised for cost, performance, and reliability across network
            conditions.
          </div>
          <div className="tech-tags">
            <span className="tag">AWS</span>
            <span className="tag">GCP</span>
            <span className="tag teal">Docker</span>
            <span className="tag">DevOps</span>
          </div>
        </div>
        <div className="tech-card">
          <span className="tech-card-icon">📱</span>
          <div className="tech-card-title">Product Management</div>
          <div className="tech-card-desc">
            Owning the full product lifecycle - discovery, roadmapping, sprint planning,
            and GTM strategy. I speak fluently to engineers, designers, clinicians, and
            executives.
          </div>
          <div className="tech-tags">
            <span className="tag">Agile / Scrum</span>
            <span className="tag">User Research</span>
            <span className="tag teal">GTM Strategy</span>
            <span className="tag">OKRs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
