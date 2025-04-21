import React, { useState, useEffect } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';
import finbert_paper from '../finbert_paper.pdf';
import vite from '../assets/react.svg';
import finbert from '../assets/images/projects/finbert_paper.png';
import makcorp from '../assets/images/projects/makcorp_website.png';
import sentiment_analysis from '../assets/images/projects/sentiment_analysis_website.png';
import qepm_presentation from '../assets/images/projects/qepm_presentation.png';
import qepm_book from '../assets/images/projects/qepm_book.png';

const ShowcaseProject = ({ idx, project }) => {

    const [leftImage, setLeftImage] = useState(null);
    const [rightImage, setRightImage] = useState(null);

    const linksMap = {
        "finbert_paper": finbert_paper,
        "makcorp": "https://teampuzzled.vercel.app/"
    };

    const imagesMap = {
        "finbert_paper": [finbert, sentiment_analysis],
        "makcorp": [makcorp],
        "qepm": [qepm_book, qepm_presentation]
    };

    useEffect(() => {
        const images = imagesMap[project.link] || [vite];
        if (images.length === 2) {
            setLeftImage(images[0]);
            setRightImage(images[1]);
        } else {
            setLeftImage(images[0]);
            setRightImage(null);
        }
    }, [project]);

    const updateDescription = (description, link) => {
        if (!!!link) {
            return <p style={{color: "white"}}>{description}</p>
        }
        const start = description.indexOf("#");
        const end = description.indexOf("#", start + 1);
        const content = description.substring(start+1, end);
        const previousContent = description.substring(0, start);
        const nextContent = description.substring(end + 1, description.length);
        return (
            <div>
                <p style={{color: "white"}}>{previousContent}
                <a href={linksMap[link]} target='_blank' rel='noreferrer'>{content}</a>
                {nextContent}</p>
            </div>
        );
    };

  return (
    <span className={`showcase ${rightImage ? 'three' : 'two'}-items`}>
        <div className={"showcase-image-left"}>
            <img src={project.link ? leftImage : vite} />
        </div>
        <div className="showcase-content">
            <h3 style={{color: "#00bfae", marginBottom: '15px'}}>{project.heading}</h3>
            {updateDescription(project.description, project.link)}
            <TagContainer tags={project.tags} />
        </div>
        {rightImage ?
            <div className={"showcase-image-right"}>
                <img src={project.link ? rightImage : vite} />
            </div>
        : null}
    </span>
  )
}

export default ShowcaseProject