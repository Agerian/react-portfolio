import React from 'react';
import '../styles/Project.css';

function Project ({ title, imageUrl, stack, githubUrl, liveUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <ul>
        {stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
    </div>
  );
};

export default Project;