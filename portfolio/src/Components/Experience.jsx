import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import info from '../Info.json';
import ashbury from '../assets/images/experience/ashbury.webp';
import valtech from '../assets/images/experience/valtech.png';
import armalytix from '../assets/images/experience/armalytix.png';
import kumon from '../assets/images/experience/kumon.png';

const MotionSection = ({ content, delay }) => (
    <motion.div
      className="md:w-1/3 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <p className="mt-5">{content}</p>
    </motion.div>
  );

const Experience = () => {

const images = {
    'Ashbury Global': ashbury,
    'Valtech': valtech,
    'Armalytix': armalytix,
    'Kumon': kumon
};

const experiences = info.experience.map((e) => (
    <div className="side-by-side">
        <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
        >
            <img
                alt={e.name}
                src={images[e.name]}
                width="250px"
                />
        </motion.div>

        </div>

        <div className="md:flex md:justify-between mt-16 gap-32">
        <MotionSection content={e.name} delay={0.5} />
        <MotionSection content={e.title} delay={0.75} />
        <MotionSection content={`${e.location}, ${e.date}`} delay={1} />
        {e.points.map((point, d)=>(
            <MotionSection
            content={point}
            delay={1.25 + d * 0.25}
        />
        ))}
        </div>
    </div>
))

return (
    <section className="section pt-10 pb-24" id="Experience">
        <h2>EXPERIENCE</h2>
        {experiences}
  </section>
);
};

export default Experience