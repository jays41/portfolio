import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectTile from './ProjectTile';
import Carousel from './Carousel';
import info from '../Info.json';
import finbert_paper from '../finbert_paper.pdf';
import ShowcaseProject from './ShowcaseProject';

const Projects = () => {

    const [showcase, setShowcase] = useState(0);
    const [shelf, setShelf] = useState(() => Array.from({ length: info.projects.length }, (_, i) => i).filter((idx) => idx !== showcase));

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

    const allProjects = [...info.projects];

    const updateShowcase = (new_idx) => {
        setShelf((prevShelf) => {
            return [...prevShelf.filter((idx) => idx !== new_idx), showcase];
        });
        setShowcase(new_idx);
    };

return (
    <section className="section" id="Projects">
        <motion.div drag={x} style={{ x, opacity }}>
        <h2>PROJECTS</h2>
        <Carousel content={allProjects} showcase={showcase} updateShowcase={updateShowcase} />
        <p>{shelf}</p>
        <ShowcaseProject idx={showcase} project={info.projects[showcase]} />
        </motion.div>
    </section>
)
}

export default Projects