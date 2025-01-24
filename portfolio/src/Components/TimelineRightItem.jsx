import React from 'react';
import { motion } from 'framer-motion';
import './TimelineItem.css';

const TimelineRightItem = ({ name, title, location, date, points, startDate }) => {

    const colourMap = {
        "Ashbury Global": "linear-gradient(to bottom, orange, yellow, green)",
        "Valtech": "black",
        "Armalytix": "#93002C",
        "Kumon": "#33B5E5",
        "Private Tutoring": "grey"
    };

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

    const delay = 0.5;

  return (
    <>
    <div className="timeline-item right">
    <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay, duration: 0.5 }}
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