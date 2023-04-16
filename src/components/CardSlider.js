import React, { useState } from 'react';
import './Slider.css';

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 350}px)` }}>
        <div className="slide">
          <h2 className="slide-heading">Visa Card</h2>
          <p className="card-number">1234 5678 9012 3456</p>
          <p className="card-balance">$1000.00</p>
        </div>
        <div className="slide">
          <h2 className="slide-heading">MasterCard</h2>
          <p className="card-number">5678 9012 3456 1234</p>
          <p className="card-balance">$500.00</p>
        </div>
        <div className="slide">
          <h2 className="slide-heading">American Express</h2>
          <p className="card-number">9012 3456 1234 5678</p>
          <p className="card-balance">$2000.00</p>
        </div>
      </div>
      <button className="slider-navigation-button" onClick={handlePreviousSlide} disabled={currentSlide === 0}>
        Previous
      </button>
      <button
        className="slider-navigation-button"
        onClick={handleNextSlide}
        disabled={currentSlide === 2}
      >
        Next
      </button>
    </div>
  );
};

export default CardSlider;
