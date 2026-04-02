function DomainSection() {
  return (
    <section className="domain" id="domain">
      <div className="section-header">
        <span className="section-num">07</span>
        <h2 className="section-title">
          Domain Name
          <br />
          <em className="inline-em-gold">Recommendations</em>
        </h2>
        <div className="section-line"></div>
      </div>
      <p className="domain-intro">
        Your domain is your first impression online. Here are my top recommendations -
        balancing memorability, professionalism, and personal brand clarity:
      </p>
      <div className="domain-grid">
        <div className="domain-card recommended">
          <div className="domain-ext">.com · Premium Pick</div>
          <div className="domain-name">timilehin.com</div>
          <div className="domain-why">
            Clean, memorable, and powerfully personal. Your first name alone is distinctive
            enough - few people are named Timilehin, making this instantly recognisable and
            globally unique. This is your flagship identity.
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-ext">.com · Professional Brand</div>
          <div className="domain-name">seyiogunsakin.com</div>
          <div className="domain-why">
            Uses your middle and surname combination. Professional and easy to say aloud in
            any English-speaking context. Excellent for business cards, LinkedIn, and
            professional correspondence.
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-ext">.io · Tech Identity</div>
          <div className="domain-name">ogunsakin.io</div>
          <div className="domain-why">
            The .io extension signals technical credibility in the global tech community.
            Short, sharp, and strong. Perfect if your primary audience is tech builders,
            developers, or investors.
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-ext">.africa · Cultural Statement</div>
          <div className="domain-name">timilehin.africa</div>
          <div className="domain-why">
            A bold declaration of your identity and mission. Makes a powerful statement
            about your pan-African vision. Increasingly respected in international tech and
            development circles.
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-ext">.ng · Local Authority</div>
          <div className="domain-name">timilehin.com.ng</div>
          <div className="domain-why">
            Establishes your Nigerian roots and authority within the local ecosystem.
            Excellent for audiences within Nigeria and West Africa. Pairs well with a .com
            as a secondary local domain.
          </div>
        </div>
        <div className="domain-card">
          <div className="domain-ext">.co · Modern Alternative</div>
          <div className="domain-name">seyiogunsakin.co</div>
          <div className="domain-why">
            Clean modern alternative to .com with strong startup credibility. Highly
            readable, internationally recognised, and very few characters. Works well if
            .com is unavailable.
          </div>
        </div>
      </div>
      <p className="domain-strategy">
        💡 Top Strategy: Register <strong>timilehin.com</strong> as your primary domain and
        point all others to it as redirects.
      </p>
    </section>
  );
}

export default DomainSection;
