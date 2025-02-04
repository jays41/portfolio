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

const TimelineMobileItem = ({ type, name, title, location, date, duration, points, startDate }) => {

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
    <div>
        <div>
            <img alt={name} src={imagesMap[name]} width="200px" />
        </div>

      <div>
        <div>
            <div>
                <time className="hidden">{startDate}</time>
                {type === "education" ?
                    <span>
                        <h4>{name}</h4>
                        <h4>{duration}</h4>
                    </span>
                :
                <span>
                    <h4>{title}</h4>
                    <h4>{name}</h4>
                    <h4>{date}, {location}</h4>
                </span>
                }
                
                {allPoints}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineMobileItem;


// type={"education"} name duration points
// type={"work"} name title location date points
