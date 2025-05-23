import React, { useState, useEffect } from 'react';
import './Skills.css'
import { motion } from "framer-motion";
import info from '../data/Info.json'
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

const SkillsMobile = () => {
  const images = [
    {src: python, title: 'Python'},
    {src: javascript, title: 'JavaScript'},
    {src: java, title: 'Java'},
    {src: cpp, title: 'C++'},
    {src: scala, title: 'Scala'},
    {src: react, title: 'React'},
    {src: node, title: 'Node'},
    {src: django, title: 'Django'},
    {src: htmlcss, title: 'HTML/CSS'},
    {src: tf, title: 'TensorFlow'}
  ];

  const [skill, setSkill] = useState(null);
  const [flipped, flipOver] = useState(false);
  const [fade, setFade] = useState(false);

  const languages = images.map((image, index) => (
    <img key={index} src={image.src} alt={image.title}
    title={image.title}
    onClick={()=>{
      setFade(true);
      const timeout = setTimeout(() => {
        setSkill(image.title);
        setFade(false);
      }, 250);
      flipOver(true);}} />
  ));

  return (
    <section className="section" id="Skills">
      <h2>TECHNICAL SKILLS</h2>
      <div onMouseLeave={()=>{setSkill(null);flipOver(false);}}>

      <div className="skill-detail-container mobile">
      <div className={`skill-detail-card mobile ${skill ? 'add-border' : ''} ${flipped ? 'flipped' : ''}`}>
        <div className={`skill-detail-card-front ${fade ? 'fade-out' : 'fade-in'}`}>
          <p>Click on an icon to view details</p>
          <div>
        <div className="images">
          {languages}
        </div>
      </div>
        </div>
      <motion.div
        className={`skill-detail-card-back mobile ${fade ? 'fade-out' : 'fade-in'}`}
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "opacity 0.25s ease-in-out, transform 0.75s ease-in-out",
          opacity: fade ? 0 : 1,
        }}
      >
        {skill && (
          <>
            <h1 style={{ marginBottom: '25px' }}>{skill}</h1>
            <ul>
              {info.skills[skill]?.map((e, index) => (
                <p key={index} style={{ marginBottom: "15px" }}>{e}</p>
              ))}
            </ul>
            <button onClick={()=>{setSkill(null);flipOver(false);}} style={{ marginTop: '25px' }}>Close</button>
          </>
        )}
      </motion.div>

      </div>
      </div>
      </div>
    </section>
  )
}

export default SkillsMobile