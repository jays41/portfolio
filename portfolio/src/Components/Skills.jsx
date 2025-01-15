import React from 'react'
import { useState } from 'react'
import './Skills.css'
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
  const languages = languages_images.map((image, index) => (
    <img key={index} src={image.src} alt={`Skill ${index}`} title={image.title} onMouseEnter={()=>{show(image.title)}} onMouseLeave={()=>{show(null)}} />
  ));
  const frameworks = framework_images.map((image, index) => (
    <img key={index} src={image.src} alt={`Skill ${index}`} title={image.title} onMouseEnter={()=>{show(image.title)}} onMouseLeave={()=>{show(null)}} />
  ));

  const [language, show] = useState(null)

  const getSkills = async () => {
    return ;
  }

  return (
    <section className="section" id="Skills">
        <h2>TECHNICAL SKILLS</h2>
        <div className="images">
          {languages}
        </div>
        <div className="images">
          {frameworks}
        </div>
        <div>
          {
            language ?
            <>
              <h1>{language}</h1>
              <ul>
                {
                  info.skills[language] ? 
                  info.skills[language].map((e) => (<li>{e}</li>))
                  : <></>
                }
              </ul>
            </>
            : <></>
          }
        </div>
    </section>
  )
}

export default Skills