import React from 'react'
import './ProjectTile.css'
import TagContainer from './TagContainer'

const ProjectTile = ({ heading, description, tags }) => {
    return (
    <div className="tile">
        <h3 className="tile-heading">{heading}</h3>
        <p className="tile-description">{description}</p>
        <TagContainer tags={tags} />
    </div>
    )
}

export default ProjectTile