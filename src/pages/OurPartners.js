import React from 'react';
import '../styles/Pages.css';

const OurPartners = () => {
  return (
    <div className="content-section">
      <h1>Our Partners</h1>
      <p className="clients-intro">
        At Metavara Technologies, we believe that true innovation is born from collaboration.
        We have established deep, strategic alliances with industry leaders to create a robust ecosystem
        where technology, talent, and security converge. Our partners are more than just service providers;
        they are an extension of our vision, working with us to build a strong foundation for digital excellence.
      </p>

      <div className="clients-grid">
        {/* Partner 1: RSCSYS */}
        <div className="client-card">
          <div className="client-header">
            <h3 className="client-name">RSCSYS</h3>
            <a href="https://rscsys.com/" target="_blank" rel="noopener noreferrer" className="client-link">
              Visit Website →
            </a>
          </div>
          <p className="client-description">
            A leader in Enterprise Solutions, Cloud Management, and Product Engineering across Banking, Retail, and Manufacturing domains.
          </p>
          <div className="partnership-story">
            <h4>Strategic Alignment</h4>
            <p>
              Our partnership with RSCSYS creates a powerhouse for large-scale enterprise transformation.
              By combining Metavara's agile innovation with RSCSYS's deep domain expertise and robust software development capabilities,
              we deliver scalable, mission-critical systems that drive operational efficiency.
            </p>
          </div>
        </div>

        {/* Partner 2: HireKarma */}
        <div className="client-card">
          <div className="client-header">
            <h3 className="client-name">HireKarma</h3>
            <a href="https://www.hirekarma.in/" target="_blank" rel="noopener noreferrer" className="client-link">
              Visit Website →
            </a>
          </div>
          <p className="client-description">
            Revolutionizing the talent ecosystem with AI, Automation, and Analytics to bridge the gap between education and employability.
          </p>
          <div className="partnership-story">
            <h4>Shared Vision</h4>
            <p>
              Talent is the engine of technology. Aligning with HireKarma allows us to integrate next-gen recruitment solutions
              directly into our resource planning. Together, we are building a future-ready workforce pipeline, ensuring that
              our clients always have access to the top 1% of tech talent, curated through AI-driven assessment.
            </p>
          </div>
        </div>

        {/* Partner 3: Bytes Encrypt */}
        <div className="client-card">
          <div className="client-header">
            <h3 className="client-name">Bytes Encrypt</h3>
            <a href="https://bytesencrypt.com/" target="_blank" rel="noopener noreferrer" className="client-link">
              Visit Website →
            </a>
          </div>
          <p className="client-description">
            Premier providers of Cyber Defense, VAPT, and Security Training, building the shield for the digital future.
          </p>
          <div className="partnership-story">
            <h4>Security First Foundation</h4>
            <p>
              In an era of escalating cyber threats, our alliance with Bytes Encrypt is foundational to our "Secure by Design" philosophy.
              We act as a unified front, embedding Bytes Encrypt's advanced threat detection and offensive security testing
              into every stage of our software development lifecycle, ensuring our clients' assets remain bulletproof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
