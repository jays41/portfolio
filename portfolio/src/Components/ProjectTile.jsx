import React from 'react'
import './ProjectTile.css'

const ProjectTile = ({ heading, description }) => {
    return (
    <div className="tile">
        <h3 className="tile-heading">{heading}</h3>
        <p className="tile-description">{description}</p>
    </div>
    )
}

export default ProjectTile