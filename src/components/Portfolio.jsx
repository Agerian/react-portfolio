import React from 'react';
import Project from './Project';
import workDayScheduler from '../assets/images/workDayScheduler.webp';
import weatherApi from '../assets/images/weatherApi.webp';
import employeeTracker from '../assets/images/employeeTracker.webp';
import ecommerceBackend from '../assets/images/eCommerceBackend.webp';
import justAnotherTextEditor from '../assets/images/justAnotherTextEditor.webp';
import socialNetworkApi from '../assets/images/socialNetworkApi.webp';
import '../styles/Portfolio.css';

function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "Work Day Scheduler",
      imageUrl: workDayScheduler,
      stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Local Storage'],
      githubUrl: "https://github.com/Agerian/challenge-scheduler"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      imageUrl: weatherApi,
      stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API', 'Fetch API', 'Local Storage'],
      githubUrl: "https://github.com/Agerian/challenge-weather"
    },
    {
      id: 3,
      title: "Employee Tracker",
      imageUrl: employeeTracker,
      stack: ['Node.js', 'Inquirer', 'MySQL'],
      githubUrl: "https://github.com/Agerian/employee-tracker"
    },
    {
      id: 4,
      title: "E-commerce Backend",
      imageUrl: ecommerceBackend,
      stack: ['Node.js', 'Express.js', 'Sequelize', 'MySQL'],
      githubUrl: "https://github.com/Agerian/e-commerce"
    },
    {
      id: 5,
      title: "Just Another Text Editor",
      imageUrl: justAnotherTextEditor,
      stack: ['JavaScript', 'IndexedDB', 'Service Worker (Workbox)', 'Web Manifest', 'Babel'],
      githubUrl: "https://github.com/Agerian/pwa-jate"
    },
    {
      id: 6,
      title: "Social Network API",
      imageUrl: socialNetworkApi,
      stack: ['MongoDB', 'Mongoose', 'Express.js'],
      githubUrl: "https://github.com/Agerian/social-network-api"
    }
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;