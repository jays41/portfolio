import React from 'react';
import './ScrollButtons.css';

const ScrollButtons = () => {
    const scrollToNext = () => {
        const mainContainer = document.querySelector('main.scroll-container');
        if (!mainContainer) return;
        const sections = Array.from(mainContainer.children);
        const currentScroll = mainContainer.scrollTop;

        const nextSection = sections.find(section => section.offsetTop > currentScroll + 10);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToPrev = () => {
        const mainContainer = document.querySelector('main.scroll-container');
        if (!mainContainer) return;
        const sections = Array.from(mainContainer.children);
        const currentScroll = mainContainer.scrollTop;

        const reversedSections = sections.slice().reverse();
        const prevSection = reversedSections.find(section => section.offsetTop < currentScroll - 10);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
            <button className="scrollButton up" onClick={scrollToPrev}>^</button>
            <button className="scrollButton down" onClick={scrollToNext}>v</button>
        </div>
    );
};

export default ScrollButtons;