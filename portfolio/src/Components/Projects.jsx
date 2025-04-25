import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectTile from './ProjectTile';
import ProjectsShelf from './ProjectsShelf';
import info from '../../public/data/Info.json';
import finbert_paper from '../../public/docs/finbert_paper.pdf';
import ShowcaseProject from './ShowcaseProject';

const Projects = () => {

    const [showcase, setShowcase] = useState(0);
    const [shelf, setShelf] = useState(() => Array.from({ length: info.projects.length }, (_, i) => i).filter((idx) => idx !== showcase));
    const [fade, setFade] = useState(false);

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

    const allProjects = [...info.projects];

    const updateShowcase = (new_idx) => {
        setFade(true);
        const timeout = setTimeout(() => {
            setShelf((prevShelf) => {
                return [...prevShelf.filter((idx) => idx !== new_idx), showcase];
            });
            setShowcase(new_idx);
            setFade(false);
        }, 300);
    };

return (
    <section className="section" id="Projects">
        <motion.div drag={x} style={{ x, opacity }}>
        <h2>PROJECTS</h2>
        <ProjectsShelf content={allProjects} showcase={showcase} updateShowcase={updateShowcase} />
        <div className={`showcase-container ${fade ? 'fade-out' : 'fade-in'}`}>
            <ShowcaseProject idx={showcase} project={info.projects[showcase]} />
        </div>
        </motion.div>
    </section>
)
}

export default Projects