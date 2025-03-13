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

  const [skill, setSkill] = useState(null);
  const [skillType, setSkillType] = useState(null);
  const [flipped, flipOver] = useState(false);

  const languages = languages_images.map((image, index) => (
    <img key={index} src={image.src} alt={image.title} title={image.title} className={skill===image.title ? 'selected' : ''} style={{ filter: skill===image.title || skill===null ? '' : 'blur(3px)' }} onMouseEnter={()=>{setSkill(image.title); setSkillType('language'); flipOver(true);}} />
  ));
  const frameworks = framework_images.map((image, index) => (
    <img key={index} src={image.src} alt={image.title} title={image.title} className={skill===image.title ? 'selected' : ''} style={{ filter: skill===image.title || skill===null ? '' : 'blur(3px)' }} onMouseEnter={()=>{setSkill(image.title); setSkillType('framework'); flipOver(true);}} />
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
      <div className={`skill-detail-card ${skill ? 'add-border' : ''} ${flipped ? 'flipped' : ''}`}>
        <p className="skill-detail-card-front">Hover over an icon to view details</p>
      <motion.div
        className={`skill-detail-card-back`}
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.75s ease-in-out",
        }}
      >
        {skill && (
          <>
            <h1>{skill}</h1>
            <ul>
              {info.skills[skill]?.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
            <button onClick={()=>{setSkill(null);flipOver(false);}}>Close</button>
          </>
        )}
      </motion.div>

      </div>
      </div>
    </section>
  )
}

export default Skills