import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopUpModal from './PopUpModal';
import './TimelineItem.css';
import kcl from '../assets/images/education/kcl.png';
import rps from '../assets/images/education/rps.png';
import info from '../../public/data/Info.json';

const TimelineLeftItem = ({ name, duration, points, startDate }) => {

    const [expanded, setExpanded] = useState(false);
    
    const colourMap = {
        "King's College London": "red",
        "Roundwood Park School": "repeating-linear-gradient(135deg, red, red 10px, black 10px, black 30px)"
    };

    const allPoints = (
        points.map((e) => <li>{e}</li>)
    );

    const imagesMap = {
        "King's College London": kcl,
        "Roundwood Park School": rps
    };

    console.log(info.education[0].modules)

    const modulesInfo = (
        <ul>
            {info.education[0].modules.map(e => <li>{e}</li>)}
        </ul>
    );

  return (
    <div className="container">
        {expanded &&
            <PopUpModal {...{ expanded, setExpanded }} heading={"Modules Taken"} description={modulesInfo} />
        }
        <div className="timeline-item side-by-side leftItem">
        <motion.div
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
                <ul>
                    {allPoints}
                    {name === "King's College London" ? <a onClick={()=>setExpanded(true)}>See list of modules here</a> : null}
                </ul>
            </div>
        </motion.div>
        <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        </div>
            <motion.div
                className="rightItem"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: -150 },
                }}
            >
                <img alt={name} src={imagesMap[name]}></img>
            </motion.div>
    
    </div>
  )
}

export default TimelineLeftItem