import React from 'react'
import linkedin from '../assets/images/links/linkedin.png'
import github from '../assets/images/links/github.png'
import info from '../Info.json'

const Links = () => {

  return (
    <footer id="Links">
        <h4>My Links:</h4>
        <br />
        <div className="images">
          <a href={info.links.linkedin_url} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href={info.links.github_url} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
          </a>
        </div>
    </footer>
  )
}

export default Links