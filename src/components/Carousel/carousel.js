import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cross from '../../assets/slider/cross.webp'
import kettel from '../../assets/slider/kettel.webp'
import deadlift from '../../assets/slider/deadlift.webp'
import './carousel.css';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isHovered]);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-wrapper">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        
        <button onClick={prevSlide} className="carousel-button prev">
          <ChevronLeft className="carousel-icon" aria-label='Image précédente' />
        </button>
        
        <button onClick={nextSlide} className="carousel-button next">
          <ChevronRight className="carousel-icon" aria-label='Image suivante' />
        </button>
      </div>
      
      <div className="carousel-dots" aria-label="Aller à l'image suivante">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const images = [deadlift, cross, kettel];
  
  return <ImageCarousel images={images} interval={5000} />;
};

export default Carousel;