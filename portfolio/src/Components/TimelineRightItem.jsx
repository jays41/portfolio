import React from 'react';
import { motion } from 'framer-motion';
import './TimelineItem.css';
import ashbury from '../assets/images/experience/ashbury.webp';
import valtech from '../assets/images/experience/valtech.png';
import armalytix from '../assets/images/experience/armalytix.png';
import hubspot from '../assets/images/experience/hubspot.png';

const TimelineRightItem = ({ name, title, location, date, points, startDate }) => {

    const colourMap = {
        "Ashbury Global": "linear-gradient(to bottom, orange, yellow, green)",
        "Valtech": "black",
        "Armalytix": "#93002C",
        "HubSpot": "#FF7A57",
    };

    const imagesMap = {
        'Ashbury Global': ashbury,
        'Valtech': valtech,
        'Armalytix': armalytix,
        'HubSpot': hubspot,
    };

    const allPoints = (
        <ul>
            {points.map((e) => <li key={e}>{e}</li>)}
        </ul>
    );

  return (
    <div className="container">
      <div className="leftItem">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 150 },
            }}
        >
            <img alt={name} src={imagesMap[name]} />
        </motion.div>
      </div>

      <div className="timeline-item rightItem">
        <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
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
    </div>
  )
}

export default TimelineRightItem;
