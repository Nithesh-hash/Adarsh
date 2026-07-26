import React from 'react';

function AboutUs() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ padding: '10px 0' }}>
        
        {/* Intro Banner */}
        <div style={{ fontSize: '18px', color: '#990099', padding: '15px 0', lineHeight: '1.6', fontWeight: 'bold' }}>
          The school is managed by “PONNUSAMY EDUCATIONAL TRUST” which is duly registered. The trust is governed by eminent Educational and Professionalists.
        </div>

        {/* Board of Trustees Section */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', display: 'block', marginBottom: '30px' }}>
            BOARD OF TRUSTEES
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            width: '100%',
            margin: '0 auto'
          }}>
            {/* Trustee 1 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/a.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="M. Senthil Kumar" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                M.SENTHIL KUMAR
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>Correspondent / Managing Trustee</div>
              </div>
            </div>

            {/* Trustee 2 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/b.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="Mr. M. Udhaya Chander" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                Mr.M.UDHAYA CHANDER
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>(Joint Secretary)</div>
              </div>
            </div>

            {/* Trustee 3 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/c.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="Mr. M. Vijay Anand" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                Mr.M.VIJAY ANAND
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 4 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/d.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="Mr. T. Bayas Ali" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                Mr.T.BAYAS ALI
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 5 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/e.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="Mrs. S. Vani Senthil Kumar" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                Mrs.S.VANI SENTHIL KUMAR
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 6 */}
            <div style={{ flex: '1 1 200px', maxWidth: '220px', textAlign: 'center', padding: '10px' }}>
              <img 
                src="/images/trustee/f.png" 
                style={{ width: '195px', height: '255px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                alt="Mrs. U. Dhanalakshmi" 
              />
              <div style={{ marginTop: '12px', fontSize: '15px', color: '#990099', fontWeight: 'bold', lineHeight: '1.4' }}>
                Mrs.U.DHANALAKSHMI
                <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#666', marginTop: '4px' }}>(Trustee)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
