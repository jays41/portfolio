import React from 'react';
import './Sidebar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <AnchorLink smooth href="#About">About</AnchorLink>
      <AnchorLink smooth href="#Skills">Skills</AnchorLink>
      <AnchorLink smooth href="#Education">Education</AnchorLink>
      <AnchorLink smooth href="#Experience">Experience</AnchorLink>
      <AnchorLink smooth href="#Projects">Projects</AnchorLink>
      <AnchorLink smooth href="#CV">CV</AnchorLink>
      <AnchorLink smooth href="#ContactForm">Contact</AnchorLink>
      <AnchorLink smooth href="#Links">Links</AnchorLink>
    </div>
  );
}

export default Sidebar;
