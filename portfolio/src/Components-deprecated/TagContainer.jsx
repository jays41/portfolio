import React from 'react'
import Tag from './Tag'
import './Tag.css'

const TagContainer = ({ tags }) => {
  return (
    <div className="tags-container">
        {tags.map((tag) => <Tag key={tag} content={tag} />)}
    </div>
  )
}

export default TagContainer