import React from 'react'
import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectTile from './ProjectTile';
import Carousel from './Carousel';
import info from '../Info.json';
import finbert_paper from '../finbert_paper.pdf';

const Projects = () => {

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

return (
    <section className="section" id="Projects">
        <motion.div drag={x} style={{ x, opacity }}>
        <h2>PROJECTS</h2>
        <h3>Personal Projects</h3>
        <Carousel content={info.projects.personal} />
        <h3>King's Capital (King's Business Club) Projects</h3>
        <Carousel content={info.projects.kcap} />
        <h3>University Projects</h3>
        <Carousel content={info.projects.university} />
        </motion.div>
    </section>
)
}

export default Projects