import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectTile from './ProjectTile';
import ProjectsShelf from './ProjectsShelf';
import info from '../data/Info.json';
import ShowcaseProject from './ShowcaseProject';
import ProjectsListMobile from './ProjectsListMobile';
import useIsMobile from '../hooks/useIsMobile';

const Projects = () => {
    const isMobile = useIsMobile();

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
        <h2>PROJECTS</h2>
        {!isMobile ?
        <>
        <ProjectsShelf content={allProjects} showcase={showcase} updateShowcase={updateShowcase} />
        <div className={`showcase-container ${fade ? 'fade-out' : 'fade-in'}`}>
            <ShowcaseProject idx={showcase} project={info.projects[showcase]} />
        </div>
        </>
        :
        <ProjectsListMobile content={allProjects} />
        }
    </section>
)
}

export default Projects