import React from 'react';
import "../styles/style.css";

const HeroSection = () => {
  return (
    <header>
      <div className='container'>
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
      </div>
    </header>
  );
};

export default HeroSection;
