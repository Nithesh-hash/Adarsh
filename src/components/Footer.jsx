import React from 'react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }} {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="footer" style={{ padding: '40px 0 0 0' }}>
      <div className="wrap">
        <div>
          {/* Centered Gallery block column (Popular Searches removed) */}
          <div className="row" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="span4" style={{ textAlign: 'center', float: 'none', margin: '0 auto' }}>
              <h2 className="title" style={{ textAlign: 'center', fontSize: '20px', textTransform: 'uppercase', color: '#fff', marginBottom: '15px' }}>
                Gallery
              </h2>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }} style={{ display: 'inline-block' }}>
                <img 
                  src="/images/gate.png" 
                  width="250" 
                  height="167" 
                  style={{ width: '250px', height: '167px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)', border: '2px solid rgba(255,255,255,0.1)' }}
                  alt="School Gallery Gate Preview" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bottom bar with social links and LinkedIn developed-by credits */}
      <div className="footer_bottom" style={{ marginTop: '40px', padding: '20px 0' }}>
        <div className="wrap">
          <div className="container">
            <div className="fleft copyright" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              
              {/* Instagram and YouTube link indicators */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <a 
                  href="https://www.instagram.com/adarsh_mhss_vaniyambadi/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9c9c9c', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }}
                  className="footer-social-link"
                >
                  <InstagramIcon /> instagram
                </a>
                <span style={{ color: '#555' }}>|</span>
                <a 
                  href="https://www.youtube.com/@adarshmatric.hr.sec.school9300/videos" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#9c9c9c', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s ease' }}
                  className="footer-social-link"
                >
                  <YoutubeIcon /> Youtube
                </a>
              </div>

              {/* Developer LinkedIn connection signature */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9c9c9c', fontSize: '13px' }}>
                Developed by:{' '}
                <a 
                  href="https://www.linkedin.com/in/nithesh-kumar-t-b4028130a/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fff', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  className="footer-social-link-white"
                >
                  <LinkedinIcon /> Nithesh Kumar T (Alumni)
                </a>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
