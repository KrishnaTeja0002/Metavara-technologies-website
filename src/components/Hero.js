import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section hero-white-bg">
      <div className="hero-image-overlay">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
          alt="Unique Tech Illustration"
          className="hero-big-image"
        />
        <div className="hero-overlay-text">
          <h1>Welcome to Metavara Technologies</h1>
          <p>
            Metavara Technologies Private Limited is a next-generation IT services and solutions
            company helping enterprises accelerate digital transformation through secure, scalable,
            and AI-driven technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
