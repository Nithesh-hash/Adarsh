import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// Generate portfolio images list
const IMAGES = [];
for (let i = 1; i <= 68; i++) {
  if (i === 64) continue;
  
  let cat = "category01";
  if (i % 3 === 2) cat = "category02";
  if (i % 3 === 0) cat = "category03";
  
  const ext = 'jpg';
  IMAGES.push({
    id: i,
    url: `/images/portfolio/${i}.${ext}`,
    category: cat
  });
}

function Gallery() {
  const [filter, setFilter] = useState("*");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredImages = filter === "*" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <div className="page_container">
      {/* Gallery Header Top Images */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p><img src="/images/portfolio/adarsh-school-vaniyambadi-03.jpg" alt="Gallery Top 3" style={{ maxWidth: '100%' }} /></p>
        <p><img src="/images/portfolio/adarsh-school-vaniyambadi-04.jpg" alt="Gallery Top 4" style={{ maxWidth: '100%' }} /></p>
        <p><img src="/images/portfolio/adarsh-school-vaniyambadi-05.jpg" alt="Gallery Top 5" style={{ maxWidth: '100%' }} /></p>
        <p><img src="/images/portfolio/adarsh-school-vaniyambadi-06.jpg" alt="Gallery Top 6" style={{ maxWidth: '100%' }} /></p>
      </div>

      {/* Portfolio Block Grid */}
      <div className="container">
        <div className="row">
          <div className="projects gallery-grid">
            {filteredImages.map(img => (
              <div 
                key={img.id} 
                className="gallery-item" 
                style={{ margin: 0, cursor: 'pointer', width: '100%' }}
                onClick={() => setLightboxImg(img.url)}
              >
                <div className="hover_img" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', width: '100%' }}>
                  <img src={img.url} alt={`Gallery Item ${img.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left', display: 'block' }} />
                  <span className="portfolio_zoom" style={{ pointerEvents: 'none' }}>
                    <span rel="prettyPhoto[portfolio1]"></span>
                  </span>
                </div>
              </div>
            ))}
            <div className="clear"></div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal Popup */}
      {lightboxImg && typeof document !== 'undefined' && createPortal(
        <div 
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            cursor: 'zoom-out',
            padding: '20px'
          }}
        >
          <img 
            src={lightboxImg} 
            alt="Enlarged gallery view" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              borderRadius: '4px',
              objectFit: 'contain'
            }} 
          />
        </div>,
        document.body
      )}
    </div>
  );
}

export default Gallery;
