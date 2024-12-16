import React from 'react'
import './Sidebar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Education">Education</a>
        <a href="#Experience">Experience</a>
        <a href="#Projects">Projects</a>
        <a href="#CV">CV</a>
        <a href="#ContactForm">Contact</a>
        <a href="#Links">Links</a>
    </nav>
  )
}

export default Sidebar