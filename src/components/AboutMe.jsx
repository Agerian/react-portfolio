import React from 'react';
import self1 from '../assets/images/self2.webp';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <img src={self1} alt="Agerian" className="self"/>
      <h2>About Me</h2>
      <p>
        I am a full stack web developer with a passion for creating and learning. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React. I am a quick learner and I am always looking for new challenges. I am currently working on a project that uses the MERN stack and I am excited to see where it takes me.
      </p>
    </div>
  );
}

export default AboutMe;