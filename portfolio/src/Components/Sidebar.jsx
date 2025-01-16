import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Sidebar.css';
import Checkbox from './Checkbox';

const Sidebar = () => {

  const [isShowing, show] = useState(true);

  const toggleSidebar = () => {
    show(prev => !prev);
  };

  return (
    <>
    
    <div className={`sidebar ${isShowing ? 'expanded' : 'collapsed shrunk in-corner'}`}>
      <div>
        <Checkbox isChecked={isShowing} onChange={toggleSidebar} />
      </div>
    <AnimatePresence>
    {isShowing && (
          <motion.div
            className="links"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.75 }}
            
          >
      <AnchorLink smooth="true" href="#About">About</AnchorLink>
      <AnchorLink smooth="true" href="#Skills">Skills</AnchorLink>
      <AnchorLink smooth="true" href="#Experience">Experience</AnchorLink>
      <AnchorLink smooth="true" href="#Education">Education</AnchorLink>
      <AnchorLink smooth="true" href="#Projects">Projects</AnchorLink>
      <AnchorLink smooth="true" href="#CV">CV</AnchorLink>
      <AnchorLink smooth="true" href="#ContactForm">Contact</AnchorLink>
      <AnchorLink smooth="true" href="#Links">Links</AnchorLink>
      </motion.div>
    )}
    </AnimatePresence>
    </div>
    </>
  );
}

export default Sidebar;
