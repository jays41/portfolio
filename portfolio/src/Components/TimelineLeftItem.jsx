import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ name, duration, points, startDate }) => {
    
    const colourMap = {
        "King’s College London": "red",
        "Roundwood Park School": "repeating-linear-gradient(135deg, red, red 10px, black 10px, black 30px)"
    }

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

  return (
    <>
        <div className="timeline-item side-by-side">
        <div className="timeline-item-content">
            <time className="hidden">{startDate}</time>
            <h4>{name}</h4>
            <h4>{duration}</h4>
            {allPoints}
            <span className="circle" />
        </div>
        <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        </div>

    </>
  )
}

export default TimelineItem