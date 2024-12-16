import React from 'react'
import { useState } from 'react'
import './ProjectTile.css'
import TagContainer from './TagContainer'

const ProjectTile = ({ heading, description, tags }) => {

    const [expanded, expand] = useState(false);

    return (
    <div className="tile">
        <h3 className="tile-heading">{heading}</h3>
        { expanded ?
        <div>
            <p className="tile-description">{description}</p>
            <button onClick={() => (expand(false))}>Hide Details</button>
        </div>
        :
        <button onClick={() => (expand(true))}>Show Details</button>
        }
        <TagContainer tags={tags} />
    </div>
    )
}

export default ProjectTile