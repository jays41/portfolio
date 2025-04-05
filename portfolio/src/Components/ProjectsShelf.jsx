import React from 'react';
import './ProjectsShelf.css';
import ProjectTile from './ProjectTile';

const ProjectsShelf = ({ content, showcase, updateShowcase }) => {

  return (
    <div className="carousel-wrapper" style={{ margin: 'auto' }}>
      <div className="carousel-container">
        {content.map((project) => (
          project.index !== showcase ? (
            <ProjectTile {...project} key={project.index} updateShowcase={updateShowcase} />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default ProjectsShelf;
