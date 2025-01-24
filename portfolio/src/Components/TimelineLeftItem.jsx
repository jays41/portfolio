import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ name, duration, points, startDate }) => {
    const data = {
        color: 'purple',
        tag: 'tag',
        date: '01-01-02',
        text: 'text',
        link: {
            url: 'https://github.com/',
            text: 'link text'
        }
    }

    const allPoints = (
        <ul>
            {points.map((e) => <li>{e}</li>)}
        </ul>
    );

  return (
    <>
        <div className="timeline-item">
        <div className="timeline-item-content">
            <time className="hidden">{startDate}</time>
            <h4>{name}</h4>
            <h4>{duration}</h4>
            {allPoints}
            <span className="circle" />
        </div>
        </div>
    </>
  )
}

export default TimelineItem