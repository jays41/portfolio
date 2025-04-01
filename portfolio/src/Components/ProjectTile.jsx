import React, { useState } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';
import finbert_paper from '../finbert_paper.pdf'

const PopUpModal = ({ expanded, setExpanded, heading, description, tags=[], link='' }) => {

    const linksMap = {
        "finbert_paper": finbert_paper
    }

    return (
        <div className="modal-overlay" onClick={()=>setExpanded(false)}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <h3 style={{color: "purple", marginBottom: '15px'}}>{heading}</h3>
                <p style={{color: "black"}}>{description} {link ? <a href={linksMap[link]} target='_blank' rel='noreferrer'> here</a> : null}</p>
                <TagContainer tags={tags} />
                <button onClick={()=>setExpanded(false)} style={{ marginTop: '25px', backgroundColor: 'purple' }}>Close</button>
            </div>
        </div>
)};

const ProjectTile = ({ heading, description, tags, link }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="tile card">
                <h3 className="tile-heading">{heading}</h3>
                <button className="btn" onClick={() => setExpanded(true)}>Show Details</button>
                <TagContainer tags={tags} />
            </div>

            {expanded &&
            <PopUpModal {...{ expanded, setExpanded, heading, description, tags, link }} />
            }
        </div>
    );
};

export default ProjectTile;
export { PopUpModal };