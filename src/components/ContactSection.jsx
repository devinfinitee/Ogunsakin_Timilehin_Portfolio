function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow"></div>
      <p className="contact-sub">Let's build something remarkable</p>
      <h2 className="contact-heading">
        Ready to
        <br />
        <em>Connect?</em>
      </h2>
      <p className="contact-desc">
        Whether you're a founder, a clinician, a fellow builder, or someone who just
        resonates with this work - my door is open. Let's talk, collaborate, or simply
        share ideas.
      </p>
      <div className="contact-links">
        <a href="mailto:hello@timilehin.com" className="contact-link">
          📧 Email Me
        </a>
        <a href="https://linkedin.com" className="contact-link">
          💼 LinkedIn
        </a>
        <a href="https://twitter.com" className="contact-link">
          🐦 X / Twitter
        </a>
        <a href="#" className="contact-link">
          📄 Download CV
        </a>
      </div>
      <br />
      <br />
      <div className="contact-meta-grid">
        <div className="contact-meta-item">
          <div className="contact-meta-label">Location</div>
          <div className="contact-meta-value">Ibadan, Oyo State · Nigeria</div>
        </div>
        <div className="contact-meta-item">
          <div className="contact-meta-label">Availability</div>
          <div className="contact-meta-value contact-meta-value-teal">
            Open to Projects & Collaboration
          </div>
        </div>
        <div className="contact-meta-item">
          <div className="contact-meta-label">Response Time</div>
          <div className="contact-meta-value">Within 24 Hours</div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
