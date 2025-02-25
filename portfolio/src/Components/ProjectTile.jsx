import React, { useState } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';
import finbert_paper from '../finbert_paper.pdf'

const ProjectTile = ({ heading, description, tags, link }) => {
    const [expanded, setExpanded] = useState(false);

    const closeModal = () => setExpanded(false);

    const linksMap = {
        "finbert_paper": finbert_paper
    }

    return (
        <div>
            <div className="tile card">
                <h3 className="tile-heading">{heading}</h3>
                <button className="btn" onClick={() => setExpanded(true)}>Show Details</button>
                <TagContainer tags={tags} />
            </div>

            {expanded && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    >
                        <h3 style={{color: "purple"}}>{heading}</h3>
                        <p style={{color: "black"}}>{description} {link ? <a href={linksMap[link]} target='_blank' rel='noreferrer'> here</a> : null}</p>
                        <TagContainer tags={tags} />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectTile;
