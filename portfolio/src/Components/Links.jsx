import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import linkedin from '../assets/images/links/linkedin.png';
import github from '../assets/images/links/github.png';
import info from '../Info.json';

const MotionSection = ({ content }) => (
  <motion.div
    className="md:w-1/3 mt-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
  >

    <p className="mt-3">{content}</p>
  </motion.div>
);

const Links = () => {

  const [showingLinkedIn, setShowingLinkedIn] = useState(false);
  const [showingGitHub, setShowingGitHub] = useState(false);

  return (
    <section className="section" id="Links">
        <h2>My Links</h2>
        <br />
        <div className="images">
          <div className="images">
            <a href={info.links.linkedin_url} target="_blank" rel="noopener noreferrer" onMouseEnter={()=>{setShowingLinkedIn(true)}} onMouseLeave={()=>{setShowingLinkedIn(false)}}>
                <img src={linkedin} alt="LinkedIn" />
                {showingLinkedIn ? <MotionSection content="LinkedIn" /> : null}
            </a>
          </div>
          <div className="images">
            <a href={info.links.github_url} target="_blank" rel="noopener noreferrer" onMouseEnter={()=>{setShowingGitHub(true)}} onMouseLeave={()=>{setShowingGitHub(false)}}>
                <img src={github} alt="GitHub" />
                {showingGitHub ? <MotionSection content="GitHub" /> : null}
            </a>
          </div>
        </div>
    </section>
  )
}

export default Links