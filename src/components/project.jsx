import React from 'react';
import '../assets/css/portfolio.css'

const Project = ({ title, image, deployedLink, githubLink }) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`, // Set background image
  };

  return (
    <div className="project-container press-start" style={backgroundStyle}>
      <div className="content-overlay">
        <div className="title-container">
          <h3>{title}</h3>
        </div>
        <div className="links-container">
          <div className="left-link">
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed App
            </a>
          </div>
          <div className="right-link">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;