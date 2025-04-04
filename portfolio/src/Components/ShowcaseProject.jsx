import React from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';
import finbert_paper from '../finbert_paper.pdf';
import vite from '../assets/react.svg';

const ShowcaseProject = ({ idx, project }) => {

    const linksMap = {
        "finbert_paper": finbert_paper
    }

    const updateDescription = (description, link) => {
        const start = description.indexOf("#");
        const end = description.indexOf("#", start + 1);
        const content = description.substring(start+1, end);
        const previousContent = description.substring(0, start);
        const nextContent = description.substring(end + 1, description.length);
        return (
            <div>
                <p style={{color: "black"}}>{previousContent}
                <a href={linksMap[link]} target='_blank' rel='noreferrer'>{content}</a>
                {nextContent}</p>
            </div>
        );
    };

  return (
    <>
        <div className="showcase-image">
            <img src={vite} />
        </div>
        <div className="showcase-content">
            <h3 style={{color: "purple", marginBottom: '15px'}}>{project.heading}</h3>
            {updateDescription(project.description, project.link)}
            <TagContainer tags={project.tags} />
        </div>
    </>
  )
}

export default ShowcaseProject