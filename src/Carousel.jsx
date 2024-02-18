import React, { useState } from 'react';
import Welocome1 from './welcome_page_1/Welocome1';
import Welocome2 from './welcome_page_2/Welcome2';
import Welocome3 from './welcome_page_3/Welcome3';
import Welocome4 from './welcome_page_4/Welcome4';
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleCarouselClick = () => {
    nextSlide();
  };

  return (
    <div className="carousel" onClick={handleCarouselClick}>
      {activeIndex === 0 && <Welocome1 />}
      {activeIndex === 1 && <Welocome2 />}
      {activeIndex === 2 && <Welocome3 />}
      {activeIndex === 3 && <Welocome4 />}
      <div className="indicators">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
