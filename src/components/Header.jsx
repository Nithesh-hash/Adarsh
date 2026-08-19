import React, { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: 'calc(100% + 40px)',
      margin: '0 -20px 10px -20px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.12)'
    }}>
      {/* Row 1: Header Name Board Banner (Height 110px with bg1.jpg logo) */}
      <div 
        className="header" 
        style={{ 
          width: '100%', 
          padding: 0,
          margin: 0,
          backgroundImage: 'url(/images/bg1.jpg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'visible',
          float: 'none',
          clear: 'both'
        }}
      >
        {/* Transparent link overlay so clicking the name board scrolls to home */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }} 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 5,
            cursor: 'pointer'
          }}
          aria-label="Scroll to Home"
        />

        {/* 3D Circular Hamburger Menu Toggle Button (Floating) */}
        <div className="hamburger-container" style={{ position: 'fixed', top: '20px', right: '25px', zIndex: 10000 }}>
          <button 
            className="hamburger-3d"
            onClick={toggleMenu}
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#000066',
              border: '2px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.35)',
              color: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* 3D Dropdown Menu */}
          {isOpen && (
            <div 
              className="dropdown-3d"
              style={{
                position: 'absolute',
                top: '45px',
                right: '0px',
                width: '260px',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                padding: '15px 0',
                transformOrigin: 'top right',
                animation: 'dropdownEntrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                zIndex: 9999
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Us' },
                  { id: 'admission', label: 'Admission' },
                  { id: 'infrastructure', label: 'Infrastructure' },
                  { id: 'features', label: 'Academics' },
                  { id: 'results', label: 'Results & Achievements' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'contact', label: 'Contact' },
                  { id: 'brochure', label: 'Brochure' }
                ].map((item) => {
                  const isActive = false;
                  return (
                    <li key={item.id} style={{ padding: '8px 20px' }}>
                      <a 
                        href={`#${item.id}`} 
                        onClick={(e) => { e.preventDefault(); scrollTo(item.id); }} 
                        className="dropdown-link"
                        style={{
                          backgroundColor: isActive ? 'rgba(204, 51, 153, 0.1)' : 'transparent',
                          color: isActive ? '#CC3399' : '#58406f',
                          fontWeight: isActive ? 'bold' : 'normal',
                          borderRadius: '6px',
                          display: 'block',
                          padding: '6px 12px'
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Row 2: Centered Horizontal Navigation Bar (directly in between Name Board and Slideshow, in one line) */}
      <div className="desktop-nav" style={{ 
        width: '100%', 
        backgroundColor: '#000066', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 0,
        padding: '5px 0',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <ul style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'nowrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          listStyle: 'none', 
          margin: 0, 
          padding: 0, 
          width: '100%',
          maxWidth: '980px',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About Us' },
            { id: 'admission', label: 'Admission' },
            { id: 'infrastructure', label: 'Infrastructure' },
            { id: 'features', label: 'Academics' },
            { id: 'results', label: 'Results' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'contact', label: 'Contact' },
            { id: 'brochure', label: 'Brochure' }
          ].map((item) => {
            const isActive = false;
            return (
              <li key={item.id} style={{ margin: 0, display: 'inline-block' }}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }} 
                  className="top-nav-link"
                  style={{
                    backgroundColor: isActive ? '#CC3399' : 'transparent',
                    boxShadow: isActive ? 'inset 0 -3px 0 rgba(255,255,255,0.6)' : 'none',
                    transition: 'all 0.3s ease',
                    borderRadius: isActive ? '4px' : '0'
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
