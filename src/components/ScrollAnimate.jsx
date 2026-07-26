import React, { useEffect, useRef, useState } from 'react';

function ScrollAnimate({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.01 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`animate-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimate;
