import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';
import TimelineLeftItem from './TimelineLeftItem';
import TimelineRightItem from './TimelineRightItem';
import TimelineMobileItem from './TimelineMobileItem';
import info from '../data/Info.json';

const Timeline = () => {

    const useIsMobile = () => {

        const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const checkIsMobile = () => {
                const mediaQuery = window.matchMedia('(max-width: 768px)');
                setIsMobile(mediaQuery.matches);
            };
    
            checkIsMobile();
            window.addEventListener('resize', checkIsMobile);
            return () => window.removeEventListener('resize', checkIsMobile);
    
        }, []);
        return isMobile;
    };

    const isMobile = useIsMobile();

    const allItems = [
        ...info.education.map((e) => ({...e, type: "education"})),
        ...info.experience.map((e) => ({...e, type: "experience"}))
    ];

    allItems.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    const elements = (
        <>
            {allItems.map((data) =>
                data.type === "education" ?
                    (<TimelineLeftItem name={data.name} duration={data.duration} points={data.points} startDate={data.startDate} />)
                    :
                    (<TimelineRightItem name={data.name} title={data.title} location={data.location} date={data.date} points={data.points} startDate={data.startDate} />)
            )}
        </>
    );

    const mobile_elements = (
        <>
            {allItems.map((data) =>
                data.type === "education" ?
                (<TimelineMobileItem type={"education"} name={data.name} duration={data.duration} points={data.points} startDate={data.startDate} />)
                :
                (<TimelineMobileItem type={"work"} name={data.name} title={data.title} location={data.location} date={data.date} points={data.points} startDate={data.startDate} />)
           )}
        </>
    );

    
  return (
    <section className="section" id="Timeline">
        <h2>My Timeline</h2>
        {
        isMobile ?
            <>
                {mobile_elements}
            </>
        :
            <div className="timeline-container">
                {elements}
            </div>
        }
        
    </section>
  )
}

export default Timeline