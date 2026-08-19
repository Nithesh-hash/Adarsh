import React, { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 1024 : true);

  useEffect(() => {
    const checkDevice = () => {
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  // Update outer trail cursor smoothly using interpolation
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  // Hook hover states on active link/button hover
  useEffect(() => {
    if (isMobile) return;
    const updateHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      
      const onMouseEnter = () => setIsHovering(true);
      const onMouseLeave = () => setIsHovering(false);

      clickables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        clickables.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    };

    // Run setup initially
    const cleanup = updateHoverEvents();

    // Since it's a SPA single page, re-hook on scroll or dynamic changes
    const interval = setInterval(updateHoverEvents, 2000);

    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, [isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Dynamic Cursor Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '10px',
          height: '10px',
          backgroundColor: '#800020',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999999
        }}
      />
      {/* Dynamic Cursor Outer Glow Ring */}
      <div
        style={{
          position: 'fixed',
          top: trail.y,
          left: trail.x,
          width: isHovering ? '48px' : '26px',
          height: isHovering ? '48px' : '26px',
          border: '1.5px solid rgba(128, 0, 32, 0.45)',
          backgroundColor: isHovering ? 'rgba(128, 0, 32, 0.08)' : 'transparent',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999998,
          transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease'
        }}
      />
    </>
  );
}

export default CustomCursor;
