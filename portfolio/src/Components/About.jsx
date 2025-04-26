import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import download from "downloadjs";
import linkedin from '../assets/images/links/linkedin.png';
import github from '../assets/images/links/github.png';
import './About.css'
import './CV.css';
import './Links.css';
import info from '../data/Info.json';
import useIsMobile from '../hooks/useIsMobile';

const About = () => {
    const isMobile = useIsMobile();

    const cv_url = '/docs/Jay_Shah_CV.pdf';

    const handleDownload = () => {
        const fileName = 'Jay_Shah_CV';
        fetch(cv_url)
        .then((response) => response.blob())
        .then((blob) => download(blob, fileName))
        .catch((err) => console.error('Download failed', err));
    }

    return (
        <section className="section" id="About">
            <header style={{ 'margin-top': '30px' }}>
                <h1>{info.name}</h1>
            </header>

            <div className="description" style={{ margin: '15px' }}>
                <p>{info.description}</p>
            </div>
        <div className={ isMobile ? 'on-top' : 'about-container side-by-side'}>
        <div className={`centre ${ isMobile ? 'about-card-mobile' : 'about-card about-leftItem'}`}>
            <h2>My CV</h2>
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
            <a href={cv_url} target="_blank" rel="noreferrer"> here</a>
            </p>
        </div>

        <div className={`side-by-side ${ isMobile ? 'about-card-mobile' : 'about-card about-rightItem'}`}>
          <div className="images">
            <a href={info.links.linkedin_url} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <div className="images">
            <a href={info.links.github_url} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
        </div>
        </section>
    );
}

export default About;
