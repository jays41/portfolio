import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ name, title, location, date, points, startDate }) => {

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

  return (
    <>
        <div className="timeline-item right">
        <div className="stripe" style={{ background: colourMap[name], width: '5px' }}></div>
        <div className="timeline-item-content">
            <time className="hidden">{startDate}</time>
            <h4>{title}</h4>
            <h4>{name}</h4>
            <h4>{date}, {location}</h4>
            {allPoints}
        </div>
        </div>
    </>
  )
}

export default TimelineItem