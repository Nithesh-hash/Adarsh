import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollAnimate from './components/ScrollAnimate';
import CustomCursor from './components/CustomCursor';

// Pages / Sections
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admission from './pages/Admission';
import Infrastructure from './pages/Infrastructure';
import Features from './pages/Features';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';
import BackgroundCanvas from './components/BackgroundCanvas';

import './App.css';

function App() {
  return (
    <>
      {/* Background Live Particle Animation on both sides */}
      <BackgroundCanvas />

      <div className="container box_shadow">
        {/* Custom interactive cursor */}
        <CustomCursor />

        <Header />
      
      <main style={{ flex: 1 }}>
        <ScrollAnimate>
          <div id="home">
            <Home />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="about" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <AboutUs />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="admission" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Admission />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="infrastructure" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Infrastructure />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="features" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Features />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="results" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Results />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="gallery" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Gallery />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="contact" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Contact />
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate>
          <div id="brochure" style={{ borderTop: '2px solid #58406f', marginTop: '40px', paddingTop: '20px' }}>
            <Brochure />
          </div>
        </ScrollAnimate>
      </main>

      <ScrollAnimate>
        <Footer />
      </ScrollAnimate>
    </div>
    </>
  );
}

export default App;
