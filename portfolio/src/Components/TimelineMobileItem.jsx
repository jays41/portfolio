import React from 'react';
import { motion } from 'framer-motion';
import './TimelineItem.css';
import ashbury from '../assets/images/experience/ashbury.webp';
import valtech from '../assets/images/experience/valtech.png';
import armalytix from '../assets/images/experience/armalytix.png';
import kumon from '../assets/images/experience/kumon.png';
import tutoring from '../assets/images/experience/tutoring.png';
import kcl from '../assets/images/education/kcl.png';
import rps from '../assets/images/education/rps.png';

const TimelineMobileItem = ({ name, title, location, date, duration, points, startDate }) => {

    const imagesMap = {
        'Ashbury Global': ashbury,
        'Valtech': valtech,
        'Armalytix': armalytix,
        'Kumon': kumon,
        'Private Tutoring': tutoring,
        "King’s College London": kcl,
        "Roundwood Park School": rps
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
            <img alt={name} src={imagesMap[name]} width="250px" />
        </motion.div>
      </div>

      <div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div>
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

export default TimelineMobileItem;
