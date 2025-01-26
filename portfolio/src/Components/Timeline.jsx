import React from 'react';
import './Timeline.css';
import TimelineLeftItem from './TimelineLeftItem';
import TimelineRightItem from './TimelineRightItem';
import info from '../Info.json';

const Timeline = () => {

    const allItems = [
        ...info.education.map((e) => ({...e, type: "education"})),
        ...info.experience.map((e) => ({...e, type: "experience"}))
    ];

    allItems.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    const elements = (
        <>
            {allItems.map((data) =>
                data.type === "education" ?
                    (<TimelineLeftItem name={data.name} duration={data.duration} points={data.points} startDate={data.startDate} />)
                    :
                    (<TimelineRightItem name={data.name} title={data.title} location={data.location} date={data.date} points={data.points} startDate={data.startDate} />)
            )}
        </>
    );


  return (
    <section className="section" id="Timeline">
        <div className="timeline-container">
            {elements}
        </div>
    </section>
  )
}

export default Timeline