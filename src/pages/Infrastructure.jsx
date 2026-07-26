import React from 'react';

function Infrastructure() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'left' }}>
        
        {/* Title */}
        <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', margin: '20px 0' }}>
          INFRASTRUCTURE
        </h2>

        {/* Text descriptions */}
        <div style={{ fontSize: '17px', color: '#990099', lineHeight: '1.6', marginBottom: '25px' }}>
          <p style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#990066' }}>CAMPUS : </strong>
            The five blocks of three storeyed school building with all modern amenities is situated right at the heart of the town provides safety, comfort and ease of transportation.
          </p>
          <p>
            <strong style={{ color: '#990066' }}>CLASSROOMS : </strong>
            Spacious classrooms are equipped with "SMART CLASS" a digital revolution which enables the students to acquire greater understanding of the concepts and improves effective learning.
          </p>
        </div>

        {/* Main Images & Captions (Vertical layout) */}
        <div style={{ margin: '30px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img 
              src="/images/adarshvaniyambadi-infra%2001.jpg" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
              alt="Campus View 1" 
            />
            <p style={{ fontSize: '15px', color: '#555', marginTop: '10px', fontStyle: 'italic' }}>
              Five blocks of three storeyed school buildings with all modern amenities is situated right at the heart of the town provides safety, comfort and ease of transportation
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img 
              src="/images/adarshvaniyambadi-infra%2002.jpg" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
              alt="Campus View 2" 
            />
            <p style={{ fontSize: '15px', color: '#555', marginTop: '10px', fontStyle: 'italic' }}>
              Prayer instills humility and discipline in the students. A view of the morning assembly.
            </p>
          </div>
        </div>

        {/* 2x2 Grid for Infrastructure Blocks */}
        <div style={{ margin: '40px 0' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            width: '100%'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/infra1.png" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
                alt="Infrastructure Block 1" 
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/infra2.png" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
                alt="Infrastructure Block 2" 
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/infra3.png" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
                alt="Infrastructure Block 3" 
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/infra4.png" 
                style={{ width: '100%', maxWidth: '450px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
                alt="Infrastructure Block 4" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Infrastructure;
