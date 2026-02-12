import React from 'react';
import '../styles/Pages.css';

const About = () => {
  return (
    <div className="content-section">
      <h1>About Metavara</h1>

      <h2>Who We Are</h2>
      <p>
        Metavara Technologies Private Limited is a forward-thinking IT services and solutions provider headquartered in Bangalore, India.
        Born from a passion for innovation and a commitment to excellence, we are dedicated to helping enterprises traverse the
        complex landscape of digital transformation. Our mission is simple yet ambitious: to be the catalyst that accelerates your business growth
        through secure, scalable, and intelligent technology solutions.
      </p>

      <h2>Our Vision</h2>
      <p>
        We envision a future where technology is a seamless enabler of human potential. A future where businesses operate with
        unprecedented efficiency, where data empowers every decision, and where security is an inherent attribute of every digital interaction.
        At Metavara, we are building that future today.
      </p>

      <h2>The Metavara Difference: Human-Centric Innovation</h2>
      <p>
        In an age often dominated by automation, we believe the human element remains paramount. Our approach frames technology not as a
        replacement for human ingenuity, but as a powerful amplifier of it. This philosophy drives our "Metavara AI" initiatives—creating
        systems that are ethical, transparent, and designed to augment human decision-making rather than obscure it.
      </p>
      <p>
        We pride ourselves on offering "Freedom in Tech"—the freedom to choose the best solutions without vendor lock-in, the freedom to
        innovate without legacy constraints, and the freedom to scale without limits. Our solutions are vendor-agnostic and built on open standards,
        ensuring you remain in control of your digital destiny.
      </p>

      <h2>Our Core Values</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '15px' }}>
          <strong>Integrity First:</strong> We build trust through transparency. We are honest in our assessments, clear in our communications, and unwavering in our ethical standards.
        </li>
        <li style={{ marginBottom: '15px' }}>
          <strong>Relentless Innovation:</strong> "Good enough" is never enough. We constantly explore emerging technologies—from Generative AI to Quantum Computing—to keep our clients ahead of the curve.
        </li>
        <li style={{ marginBottom: '15px' }}>
          <strong>Client-Centricity:</strong> Your success is our success. We adhere to a "Client First" philosophy, tailoring every solution to your unique business context and goals.
        </li>
        <li>
          <strong>Collaboration:</strong> We believe in the power of partnership. We work as an extension of your team, fostering a culture of shared knowledge and mutual growth.
        </li>
      </ul>

      <h2>Global Reach, Local Expertise</h2>
      <p>
        While we operate with a global perspective, serving clients across continents, we maintain the agility and personalized attention of a boutique firm.
        Our diverse team brings together global best practices and local market insights, ensuring solutions that are compliant, culturally relevant, and legally sound.
      </p>
    </div>
  );
};

export default About;
