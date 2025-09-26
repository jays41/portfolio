import React from 'react';
import './ProjectsShelf.css';
import ProjectTile from './ProjectTile';

const ProjectsShelf = ({ content, showcase, updateShowcase }) => {

  return (
    <div className="shelf-wrapper" style={{ margin: 'auto' }}>
      <div className="shelf-container">
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
