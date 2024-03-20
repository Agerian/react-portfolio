import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>Here is a brief overview of my front-end and back-end experience. Please download my resume for more detailed information.</p>

      <h3>Front-end Proficiencies</h3>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>

      
      <a href="../../public/Resume Template.md" target="_blank" rel="noopener noreferrer" className="download-resume">Download Resume</a>
    </div>
    
  )
}

export default Resume