"use client"
import React from 'react';

const Slider = () => {
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
