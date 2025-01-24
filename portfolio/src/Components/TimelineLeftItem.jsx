import React from 'react';
import { motion } from 'framer-motion';
import './TimelineItem.css';
import kcl from '../assets/images/education/kcl.png';
import rps from '../assets/images/education/rps.png';

const TimelineLeftItem = ({ name, duration, points, startDate }) => {
    
    const colourMap = {
        "King’s College London": "red",
        "Roundwood Park School": "repeating-linear-gradient(135deg, red, red 10px, black 10px, black 30px)"
    };

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

    const imagesMap = {
        "King’s College London": kcl,
        "Roundwood Park School": rps
    };

  return (
    <>
        <div className="timeline-item side-by-side">
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: -10 },
            }}
        >
            <div className="timeline-item-content">
                <time className="hidden">{startDate}</time>
                <h4>{name}</h4>
                <h4>{duration}</h4>
                {allPoints}
            </div>
        </motion.div>
        <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        </div>
            <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 200 },
                }}
            >
                <img alt={name} src={imagesMap[name]} width="250px"></img>
            </motion.div>

    
    </>
  )
}

export default TimelineLeftItem