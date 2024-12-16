import React, { useRef } from 'react';
import './Carousel.css';
import ProjectTile from './ProjectTile';

const Carousel = ({ content }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel-wrapper" style={{ position: 'relative' }}>
      <div className="carousel-container" ref={carouselRef}>
      {content.map(({ heading, description, tags }) => (<ProjectTile key={heading} heading={heading} description={description} tags={tags} />))}
      </div>


      <div className="carousel-nav carousel-nav-left" onClick={scrollLeft}>
        &#10094;
      </div>
      <div className="carousel-nav carousel-nav-right" onClick={scrollRight}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
