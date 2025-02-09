import React from 'react'
import { useState } from 'react'
import './Skills.css'
import { motion } from "framer-motion";
import info from '../Info.json'
import python from '../assets/images/skills/python.png';
import javascript from '../assets/images/skills/javascript.png';
import java from '../assets/images/skills/java.png';
import cpp from '../assets/images/skills/cpp.png';
import htmlcss from '../assets/images/skills/html-css.png';
import react from '../assets/images/skills/react.png';
import node from '../assets/images/skills/node.png';
import django from '../assets/images/skills/django.png';
import tf from '../assets/images/skills/tf.png';
import scala from '../assets/images/skills/scala.png'

const Skills = () => {
  const languages_images = [
    {src: python, title: 'Python'},
    {src: javascript, title: 'JavaScript'},
    {src: java, title: 'Java'},
    {src: cpp, title: 'C++'},
    {src: scala, title: 'Scala'}
  ];
  const framework_images = [
    {src: react, title: 'React'},
    {src: node, title: 'Node'},
    {src: django, title: 'Django'},
    {src: htmlcss, title: 'HTML/CSS'},
    {src: tf, title: 'TensorFlow'}
  ];

  const [language, showLanguage] = useState(null);
  const [framework, showFramework] = useState(null);
  const [flipped, flipOver] = useState(false);

  const languages = languages_images.map((image, index) => (
    <img key={index} src={image.src} alt={image.title} title={image.title} className={language===image.title ? 'selected' : ''} style={{ filter: language===image.title || language===null && framework===null ? '' : 'blur(3px)' }} onMouseEnter={()=>{showLanguage(image.title); showFramework(null)}} />
  ));
  const frameworks = framework_images.map((image, index) => (
    <img key={index} src={image.src} alt={image.title} title={image.title} className={framework===image.title ? 'selected' : ''} style={{ filter: framework===image.title || language===null && framework===null ? '' : 'blur(3px)' }} onMouseEnter={()=>{showFramework(image.title); showLanguage(null)}} />
  ));


  return (
    <section className="section" id="Skills">
      <h2>TECHNICAL SKILLS</h2>
      <button onClick={()=>(flipOver(!flipped))}>test button, currently: {flipped ? "back" : "front"}</button>
      <div>
        <div className="images">
          {languages}
        </div>

        <div className="images">
          {frameworks}
        </div>
      </div>

      <div className="skill-detail-container">
      <div className={`skill-detail-card ${flipped ? 'flipped' : ''}`}>
      <motion.div
        layout
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: language ? 'auto' : 0,
          opacity: language ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: language ? 0.2 : 0,
        }}
        style={{
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: language ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
          padding: language ? '16px' : '0',
          background: '#f2f2f2',
          color: '#2a3a59',
        }}
      >
        {language && (
          <>
            <h1>{language}</h1>
            <ul>
              {info.skills[language]?.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </>
        )}
        <button onClick={()=>{showLanguage(null)}}>Close</button>
      </motion.div>
      <motion.div
          layout
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: framework ? 'auto' : 0,
            opacity: framework ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: framework ? 0.2 : 0,
          }}
          style={{
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: framework ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
            padding: framework ? '16px' : '0',
            background: '#f2f2f2',
            color: '#2a3a59',
          }}
        >
          {framework && (
            <>
              <h1>{framework}</h1>
              <ul>
                {info.skills[framework]?.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </>
          )}
        <button onClick={()=>{showFramework(null)}}>Close</button>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Skills