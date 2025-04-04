import React, { useState } from 'react';
import './ProjectTile.css';
import TagContainer from './TagContainer';

const ProjectTile = ({ index, heading, description, tags, link, updateShowcase }) => {
    const [fade, setFade] = useState(false);

    return (
        <div>
            <div className={`tile card ${fade ? 'fade-out' : 'fade-in'}`}>
                <h3 className="tile-heading">{heading}</h3>
                <button className="btn" onClick={() =>
                    {
                        setFade(true);
                        updateShowcase(index);
                        const timeout = setTimeout(() => {
                          setFade(false);
                        }, 500);
                    }
                }>Show Details</button>
                <TagContainer tags={tags} />
            </div>
        </div>
    );
};

export default ProjectTile;