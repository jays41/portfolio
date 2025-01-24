import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ name, title, location, date, points, startDate }) => {

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

  return (
    <>
        <div className="timeline-item right">
        <div className="timeline-item-content">
            <time>{startDate}</time>
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