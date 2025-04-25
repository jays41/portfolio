import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectsListMobile = ({ content }) => {
  return (
    <div className="" style={{ margin: 'auto' }}>
      <div className="">
        {content.map((project) => (
            <ProjectTile {...project} key={project.index} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsListMobile