function CareerSection() {
  return (
    <section className="career" id="career">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">
          Career
          <br />
          <em className="inline-em-teal">Journey & Milestones</em>
        </h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2024 - Present</div>
          <div className="timeline-role">Lead Technology & Health Innovation Strategist</div>
          <div className="timeline-org">Independent / Consulting</div>
          <div className="timeline-desc">
            Advising health organisations, startups, and government agencies on digital
            transformation strategy. Designing technology roadmaps, conducting feasibility
            studies, and building go-to-market strategies for health-tech products across
            West Africa.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2022 - 2024</div>
          <div className="timeline-role">Senior Product & Innovation Lead</div>
          <div className="timeline-org">Digital Health Initiative - Ibadan, Nigeria</div>
          <div className="timeline-desc">
            Led cross-functional teams in building and deploying digital health products.
            Oversaw full product lifecycle from research to release. Reduced patient
            onboarding time by 60% through UX redesign. Implemented data analytics
            framework serving 15 clinics.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2020 - 2022</div>
          <div className="timeline-role">Technology Program Officer</div>
          <div className="timeline-org">Health NGO - West Africa Region</div>
          <div className="timeline-desc">
            Coordinated tech-for-health programmes across Nigeria, Ghana, and Senegal.
            Managed vendor relationships, built internal capacity for digital tools
            adoption, and authored policy briefs on digital health standards.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2018 - 2020</div>
          <div className="timeline-role">Software Engineer / Data Analyst</div>
          <div className="timeline-org">Fintech Startup - Lagos, Nigeria</div>
          <div className="timeline-desc">
            Built backend systems and data pipelines for a financial inclusion platform.
            Gained deep technical experience in scalable system design, API integration,
            and mobile money infrastructure.
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2014 - 2018</div>
          <div className="timeline-role">BSc. Computer Science</div>
          <div className="timeline-org">University of Ibadan - Ibadan, Nigeria</div>
          <div className="timeline-desc">
            Graduated with First Class Honours. Final year project: "A Machine Learning
            Approach to Malaria Detection in Rural Nigerian Communities." President of the
            Computer Science Students' Association.
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
