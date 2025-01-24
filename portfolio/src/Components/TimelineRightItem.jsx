import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ position, name, title, location, date, points, startDate }) => {
    const data = {
        color: 'blue',
        tag: 'tag',
        date: '01-01-05',
        text: 'text',
        link: {
            url: 'https://github.com/',
            text: 'link text'
        }
    }

  return (
    <>
        <div className="timeline-item right">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.color }}>
                {data.tag}
            </span>
            <time>{startDate}</time>
            <h4>{title}</h4>
            <h4>{name}</h4>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
        </div>
    </>
  )
}

export default TimelineItem