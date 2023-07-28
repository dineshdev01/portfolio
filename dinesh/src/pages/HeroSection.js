import React from 'react';
import "../styles/HeroSection.css";


const HeroSection = () => {
  return (
    <header>
      <div className="hero-content">
        <h1>Dinesh M</h1>
        <p>Software Developer</p>
        <ul className="skills-list">
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SpringBoot</li>
          <li>Java</li>
          <li>Hibernate</li>
          <li>MySQL</li>
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;
