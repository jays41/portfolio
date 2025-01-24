import React from 'react';
import { motion } from 'framer-motion';
import './TimelineItem.css';
import ashbury from '../assets/images/experience/ashbury.webp';
import valtech from '../assets/images/experience/valtech.png';
import armalytix from '../assets/images/experience/armalytix.png';
import kumon from '../assets/images/experience/kumon.png';
import tutoring from '../assets/images/experience/tutoring.png';

const TimelineRightItem = ({ name, title, location, date, points, startDate }) => {

    const colourMap = {
        "Ashbury Global": "linear-gradient(to bottom, orange, yellow, green)",
        "Valtech": "black",
        "Armalytix": "#93002C",
        "Kumon": "#33B5E5",
        "Private Tutoring": "grey"
    };

    const imagesMap = {
        'Ashbury Global': ashbury,
        'Valtech': valtech,
        'Armalytix': armalytix,
        'Kumon': kumon,
        'Private Tutoring': tutoring
    };

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

  return (
    <>
    <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: -200 },
        }}
    >
        <img alt={name} src={imagesMap[name]} width="250px"></img>
    </motion.div>
    <div className="timeline-item right">
    <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 10 },
            }}
        >
            <div className="timeline-item-content">
                <time className="hidden">{startDate}</time>
                <h4>{title}</h4>
                <h4>{name}</h4>
                <h4>{date}, {location}</h4>
                {allPoints}
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default TimelineRightItem