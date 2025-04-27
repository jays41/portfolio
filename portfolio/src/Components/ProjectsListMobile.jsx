import React, { useState } from 'react';
import ProjectTile from './ProjectTile';
import ShowcaseProject from './ShowcaseProject';
import info from '../data/Info.json';

const ProjectsListMobile = ({ content }) => {
    const [showcase, setShowcase] = useState(-1);

  return (
    <div className="" style={{ margin: 'auto' }}>
      {showcase < 0 ?
      <div className="">
        {content.map((project) => (
            <div style={{ marginLeft: '15px', marginRight: '15px', marginBottom: "2vh" }}>
                <ProjectTile {...project} key={project.index} updateShowcase={setShowcase} isMobile={true} />
            </div>
        ))}
      </div>
      :
      <ShowcaseProject idx={showcase} project={info.projects[showcase]} setShowcase={setShowcase} isMobile={true} />}
    </div>
  )
}

export default ProjectsListMobile