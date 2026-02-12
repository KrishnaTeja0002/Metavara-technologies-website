import React from 'react';
import '../styles/Pages.css';

const Leadership = () => {
  return (
    <div className="content-section">
      <h1>Leadership at Metavara</h1>

      <p>
        Great technology is built by great people, but it is sustained by visionary leadership.
        At Metavara Technologies, our leadership team comprises industry veterans, strategists, and technologists
        who bring decades of combined experience from global Fortune 500 companies. They are the architects of our culture
        and the custodians of our clients' trust.
      </p>

      <h2>Our Management Philosophy</h2>
      <p>
        We believe in "Servant Leadership"—the idea that the primary role of a leader is to serve their team and their clients.
        This philosophy permeates every layer of our management structure. By removing obstacles, providing resources, and
        fostering an environment of psychological safety, our leaders empower our engineers and consultants to do their best work.
      </p>
      <p>
        <strong>Transparency & Openness:</strong> We operate with a flat hierarchy where ideas can flow freely. A junior developer's innovative idea
        is valued just as much as a senior executive's strategy. This openness fuels our agility and keeps us grounded in reality.
      </p>

      <h2>Strategic Direction</h2>
      <p>
        Our leadership is focused on three strategic pillars:
      </p>
      <ul>
        <li><strong>Sustainable Growth:</strong> Building long-term value over short-term gains. We invest deeply in our relationships and our capabilities.</li>
        <li><strong>Technological Sovereignty:</strong> Ensuring we master the core technologies that drive the future, reducing dependency on external platforms.</li>
        <li><strong>Talent Cultivation:</strong> Mentoring the next generation of tech leaders through our rigorous internal training and leadership development programs.</li>
      </ul>

      <h2>How We Manage</h2>
      <div className="management-approach">
        <h3>Agile Governance</h3>
        <p>
          We apply Agile principles not just to software development, but to organizational management. We iterate on our business processes,
          adapt quickly to market changes, and maintain a constant feedback loop with our stakeholders.
        </p>

        <h3>Data-Driven Decision Making</h3>
        <p>
          Gut instinct translates to vision, but data drives execution. Our management decisions—from resource allocation to market expansion—are
          backed by rigorous data analysis, ensuring we minimize risk and maximize impact.
        </p>

        <h3>Empathy in Action</h3>
        <p>
          We understand that behind every line of code and every business requirement is a human need. Our leaders prioritize empathy, ensuring that our
          solutions actually improve the lives of the people who use them and that our employees maintain a healthy work-life balance.
        </p>
      </div>
    </div>
  );
};

export default Leadership;
