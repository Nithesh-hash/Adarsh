import React, { useState, useEffect } from 'react';

const SLIDES = [
  "/images/slider/slide1.jpg",
  "/images/slider/slide2.jpg",
  "/images/slider/slide3.jpg",
  "/images/slider/slide4.jpg",
  "/images/slider/slide5.jpg",
  "/images/slider/slide6.jpg"
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="main_slider" style={{ position: 'relative', overflow: 'hidden', height: 'auto', marginBottom: '20px' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <img 
          src={SLIDES[current]} 
          alt={`School slide ${current + 1}`} 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block', 
            transition: 'opacity 0.4s ease-in-out' 
          }} 
        />
      </div>
      {/* Simple navigation indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
        {SLIDES.map((_, index) => (
          <span 
            key={index} 
            onClick={() => setCurrent(index)}
            style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: current === index ? '#CC3399' : '#ccc', 
              display: 'inline-block',
              cursor: 'pointer'
            }} 
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
