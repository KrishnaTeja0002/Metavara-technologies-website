import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section hero-white-bg">
      <div className="hero-image-overlay">
        <img
          src="/images/Homepage.png"
          alt="Metavara Homepage"
          className="hero-big-image"
        />
      </div>
    </div>
  );
};

export default Hero;
