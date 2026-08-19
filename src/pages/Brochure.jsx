import React from 'react';

function Brochure() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'center' }}>
        
        {/* Title */}
        <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', margin: '20px 0', textAlign: 'left' }}>
          SCHOOL BROCHURE
        </h2>

        {/* Brochure pages list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', margin: '20px 0' }}>
          <img 
            src="/images/broucher/adarsh-vaniyambadi-school-broucher-33.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Adarsh Brochure Page 1" 
          />
          <img 
            src="/images/broucher/adarsh-vaniyambadi-school-broucher-34.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Adarsh Brochure Page 2" 
          />
          <img 
            src="/images/broucher/adarsh-vaniyambadi-school-broucher-35.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Adarsh Brochure Page 3" 
          />
          <img 
            src="/images/broucher/adarsh-vaniyambadi-school-broucher-36.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Adarsh Brochure Page 4" 
          />
        </div>

      </div>
    </div>
  );
}

export default Brochure;
