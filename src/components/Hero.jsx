import React from 'react';
import BG from '../assets/BG2.jpg';

const Hero = () => {
  return (
    <section
      className="hero"
      id="hero-section"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Explore Our Industrial Visit Across Manila and Baguio</h1>
        <p className="hero-subtitle">
          Discover cultural heritage, technology, and natural beauty from April 7-13, 2025
        </p>
        <button
          className="hero-button"
          onClick={() => document.querySelector('#day-events-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;