import React from 'react';
import HeroSlider from '../components/HeroSlider';

function Home() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      
      {/* Row 1: Slider */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <HeroSlider />
      </div>

      {/* Row 2: Welcome Text Paragraphs */}
      <div style={{ textAlign: 'justify', margin: '20px 0' }}>
        <p className="style2" style={{ lineHeight: '1.6', fontSize: '15px', color: '#444' }}>
          Founded in the year 2000 with a vision to enlighten the students in Vaniyambadi through high quality education, ADARSH is fostering excellence in every aspect of schooling. The school is managed by “ PONNUSAMY EDUCATIONAL TRUST”.
        </p>
        <p className="style2" style={{ lineHeight: '1.6', fontSize: '15px', color: '#444', marginTop: '15px' }}>
          By integrating the best of traditional and progressive methods in learning. ADARSH aims to develop children into a balanced, responsible, confident and emotionally healthy individuals with leadership qualities.
        </p>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          <a 
            href="#brochure" 
            onClick={(e) => { e.preventDefault(); scrollTo('brochure'); }}
            style={{
              display: 'inline-block',
              backgroundColor: '#000066',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: '25px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '13px',
              transition: 'background-color 0.25s ease, transform 0.2s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
            className="top-nav-link"
          >
            School Brochure
          </a>
        </p>
      </div>

      {/* Row 3: School Photos Grid */}
      <div style={{ margin: '40px 0' }}>
        <h2 className="title" style={{ textAlign: 'center', marginBottom: '25px' }}>SCHOOL PHOTO</h2>
        <div className="photo-grid" style={{ width: '100%' }}>
          <div className="post_prev" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', aspectRatio: '4/3' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', height: '100%' }}>
              <img 
                src="/images/blog/post_prev1.jpg" 
                alt="School Activity 1" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </a>
          </div>
          <div className="post_prev" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', aspectRatio: '4/3' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', height: '100%' }}>
              <img 
                src="/images/blog/post_prev2.jpg" 
                alt="School Activity 2" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </a>
          </div>
          <div className="post_prev" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', aspectRatio: '4/3' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', height: '100%' }}>
              <img 
                src="/images/blog/post_prev3.jpg" 
                alt="School Activity 3" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </a>
          </div>
          <div className="post_prev" style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', aspectRatio: '4/3' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', height: '100%' }}>
              <img 
                src="/images/blog/post_prev4.jpg" 
                alt="School Activity 4" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Row 4: Our Partners */}
      <div style={{ margin: '40px 0 20px 0', width: '100%' }}>
        <h2 className="title" style={{ textAlign: 'center', marginBottom: '25px' }}>OUR PARTNERS</h2>
        
        {/* Partner Logos */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '25px', 
          width: '100%', 
          margin: '20px 0' 
        }}>
          <div style={{ flex: '1 1 200px', textAlign: 'center', maxWidth: '240px' }}>
            <img 
              src="/images/New%20folder/Next%20Education.jpg" 
              style={{ maxWidth: '100%', height: 'auto', display: 'inline-block', borderRadius: '4px' }}
              alt="Next Education Partner" 
            />
          </div>
          <div style={{ flex: '1 1 80px', textAlign: 'center', maxWidth: '240px' }}>
            <img 
              src="/images/New%20folder/Xseed.jpg" 
              style={{ maxWidth: '100%', height: 'auto', display: 'inline-block', borderRadius: '4px' }}
              alt="Xseed Partner" 
            />
          </div>
          <div style={{ flex: '1 1 80px', textAlign: 'center', maxWidth: '240px' }}>
            <img 
              src="/images/New%20folder/Neverskip.jpg" 
              style={{ maxWidth: '100%', height: 'auto', display: 'inline-block', borderRadius: '4px' }}
              alt="Neverskip Partner" 
            />
          </div>
        </div>
        
        {/* Brochure Link Image */}
        <div style={{ textAlign: 'center', margin: '35px 0 10px 0', width: '100%' }}>
          <a 
            href="#brochure" 
            onClick={(e) => { e.preventDefault(); scrollTo('brochure'); }} 
            style={{ display: 'inline-block', maxWidth: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
          >
            <img 
              src="/images/adarshvanyambadi-broucher.png" 
              style={{ maxWidth: '100%', height: 'auto', border: 'none', display: 'block', margin: '0 auto' }} 
              alt="Adarsh Brochure Banner" 
            />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;
