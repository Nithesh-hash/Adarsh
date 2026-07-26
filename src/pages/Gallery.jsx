import React, { useState } from 'react';

// Generate portfolio images list
const IMAGES = [];
for (let i = 1; i <= 68; i++) {
  if (i === 64) continue;
  
  let cat = "category01";
  if (i % 3 === 2) cat = "category02";
  if (i % 3 === 0) cat = "category03";
  
  const ext = i === 23 ? 'png' : 'jpg';
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
          <div className="projects" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredImages.map(img => (
              <div 
                key={img.id} 
                className="span6 element height_2column" 
                style={{ margin: 0, cursor: 'pointer' }}
                onClick={() => setLightboxImg(img.url)}
              >
                <div className="hover_img" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={img.url} alt={`Gallery Item ${img.id}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
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
              borderRadius: '4px' 
            }} 
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
