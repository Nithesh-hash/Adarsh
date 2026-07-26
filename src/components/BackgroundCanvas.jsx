import React, { useEffect, useRef } from 'react';

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 85; // Rich density for beautiful margins

    const mouse = { x: null, y: null, radius: 180 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles with 3D depth (z-factor)
    for (let i = 0; i < particleCount; i++) {
      const z = Math.random() * 2.0 + 0.5; // Depth factor: 0.5 (far) to 2.5 (close)
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: z,
        radius: (Math.random() * 3 + 1) * z, // Larger if closer
        baseSpeedX: (Math.random() - 0.5) * 0.25 * z, // Faster if closer
        baseSpeedY: (Math.random() - 0.5) * 0.25 * z,
        vx: 0,
        vy: 0,
        alpha: (Math.random() * 0.35 + 0.15) * (z / 2.5) // Brighter if closer
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p) => {
        // Apply base speed
        p.vx = p.baseSpeedX;
        p.vy = p.baseSpeedY;

        // Mouse attraction/magnetic force
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            // Gentle attraction pull depending on distance and depth
            const force = (1 - dist / mouse.radius) * 0.08 * p.z;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Apply updated velocities
        p.x += p.vx;
        p.y += p.vy;

        // Screen boundary loops
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(153, 0, 102, ${p.alpha})`; // Rose-burgundy particle color
        ctx.shadowBlur = p.z * 4; // Glow matches depth
        ctx.shadowColor = 'rgba(153, 0, 102, 0.4)';
        ctx.fill();
      });

      // Draw thin lines connecting nearby nodes
      ctx.shadowBlur = 0; // Disable shadow for line drawing performance
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Connection range matches average depth
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140 * ((p1.z + p2.z) / 2); // Deeper particles connect at shorter distances

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Fade opacity with distance
            const alphaFactor = 0.07 * (1 - dist / maxDist) * ((p1.z + p2.z) / 5);
            ctx.strokeStyle = `rgba(88, 64, 111, ${alphaFactor})`;
            ctx.lineWidth = 0.5 * ((p1.z + p2.z) / 2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Positions it behind main card columns
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}

export default BackgroundCanvas;
