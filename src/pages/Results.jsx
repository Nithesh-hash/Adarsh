import React from 'react';

function Results() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'left' }}>
        
        {/* Results Images Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center', margin: '20px 0' }}>
          <img 
            src="/images/adarshschoolvaniyambadi-resultachivements-01.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Results Banner 1" 
          />
          <img 
            src="/images/adarshschoolvaniyambadi%20resultachivements.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Results Banner 2" 
          />
          <img 
            src="/images/results2019march.png" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Results March 2019" 
          />
          <img 
            src="/images/result2015-2016new.png" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Results 2015-2016" 
          />
        </div>

        <hr style={{ border: '0', borderTop: '2px dashed rgba(153, 0, 102, 0.2)', margin: '40px 0' }} />

        {/* Faculty Section */}
        <div style={{ margin: '30px 0' }}>
          <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', marginBottom: '15px' }}>
            FACULTY
          </h2>
          <p style={{ fontSize: '18px', color: '#990099', fontFamily: 'Calibri', lineHeight: '1.6', marginBottom: '25px' }}>
            A team of talented, dedicated and qualified teachers deliver their best with commitment and competence.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/images/adarshvaniyambadi-faculity.jpg" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
              alt="Adarsh Faculty Team" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Results;
