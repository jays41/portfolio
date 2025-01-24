import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ name, duration, points }) => {
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

  return (
    <>
        <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.color }}>
                {data.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
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