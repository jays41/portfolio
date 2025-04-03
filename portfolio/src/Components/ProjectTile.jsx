import React, { useState } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';

const ProjectTile = ({ index, heading, description, tags, link, updateShowcase }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="tile card">
                <h3 className="tile-heading">{heading}</h3>
                <button className="btn" onClick={()=>updateShowcase(index)}>Show Details</button>
                <TagContainer tags={tags} />
            </div>
        </div>
    );
};

export default ProjectTile;