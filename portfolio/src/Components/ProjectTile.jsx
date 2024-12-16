import React, { useState } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';

const ProjectTile = ({ heading, description, tags }) => {
    const [expanded, setExpanded] = useState(false);

    const closeModal = () => setExpanded(false);

    return (
        <>
            <div className="tile">
                <h3 className="tile-heading">{heading}</h3>
                <button onClick={() => setExpanded(true)}>Show Details</button>
                <TagContainer tags={tags} />
            </div>

            {/* Render the modal at the top level */}
            {expanded && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    >
                        <h3>{heading}</h3>
                        <p>{description}</p>
                        <TagContainer tags={tags} />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectTile;
