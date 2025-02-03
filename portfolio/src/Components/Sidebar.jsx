import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.75 }}
            
          >
      <a href="#About">About</a>
      <a href="#Skills">Skills</a>
      <a href="#Timeline">Timeline</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      </motion.div>
    )}
    </AnimatePresence>
    </div>
    </>
  );
}

export default Sidebar;
