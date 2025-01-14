import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Sidebar = () => {

  const [isShowing, show] = useState(true);

  return (
    <>
    {!isShowing ? <></> :
      <div className='sidebar'>
        <button onClick={()=>{show(false)}}>Hide Sidebar</button>
        <AnchorLink smooth="true" href="#About">About</AnchorLink>
        <AnchorLink smooth="true" href="#Skills">Skills</AnchorLink>
        <AnchorLink smooth="true" href="#Experience">Experience</AnchorLink>
        <AnchorLink smooth="true" href="#Education">Education</AnchorLink>
        <AnchorLink smooth="true" href="#Projects">Projects</AnchorLink>
        <AnchorLink smooth="true" href="#CV">CV</AnchorLink>
        <AnchorLink smooth="true" href="#ContactForm">Contact</AnchorLink>
        <AnchorLink smooth="true" href="#Links">Links</AnchorLink>
      </div>
    }
    </>
  );
}

export default Sidebar;
