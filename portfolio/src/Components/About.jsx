import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import download from "downloadjs";
import linkedin from '../assets/images/links/linkedin.png';
import github from '../assets/images/links/github.png';
import Jay_Shah_CV from '../Jay_Shah_CV.pdf';
import './About.css'
import './CV.css';
import './Base.css';
import './Links.css';
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

const About = () => {
  const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            setIsMobile(mediaQuery.matches);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);

    }, []);
    return isMobile;
  };

const isMobile = useIsMobile();

    const handleDownload = () => {
        const url = 'src/Jay_Shah_CV.pdf';
        const fileName = 'Jay_Shah_CV';
        fetch(url)
        .then((response) => response.blob())
        .then((blob) => download(blob, fileName))
        .catch((err) => console.error('Download failed', err));
    }

    const [showingLinkedIn, setShowingLinkedIn] = useState(false);
    const [showingGitHub, setShowingGitHub] = useState(false);

    return (
        <section className="section" id="About">
            <header>
                <h1>{info.name}</h1>
            </header>

            <div className="description">
                <p>{info.description}</p>
            </div>
        <div className={ isMobile ? 'on-top' : 'about-container side-by-side'}>
        <div className={`about-card centre ${ isMobile ? null : 'about-leftItem'}`}>My CV
            <span className="cv-button" type="button" onClick={handleDownload}>
            <span className="cv-button__text">Download</span>
            <span className="cv-button__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="svg">
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
            </span>
            </span>
            <p>Alternatively, open in the browser
            <a href={Jay_Shah_CV} target="_blank" rel="noreferrer"> here</a>
            </p>
        </div>

        <div className={`about-card side-by-side ${ isMobile ? null : 'about-rightItem'}`}>
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
        </div>
        </section>
    );
}

export default About;
