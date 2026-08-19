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

          <div className="trustee-grid" style={{ width: '100%', margin: '0 auto' }}>
            {/* Trustee 1 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/a.png" alt="M. Senthil Kumar" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                M.SENTHIL KUMAR
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>Correspondent / Managing Trustee</div>
              </div>
            </div>

            {/* Trustee 2 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/b.png" alt="Mr. M. Udhaya Chander" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                Mr.M.UDHAYA CHANDER
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>(Joint Secretary)</div>
              </div>
            </div>

            {/* Trustee 3 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/c.png" alt="Mr. M. Vijay Anand" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                Mr.M.VIJAY ANAND
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 4 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/d.png" alt="Mr. T. Bayas Ali" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                Mr.T.BAYAS ALI
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 5 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/e.png" alt="Mrs. S. Vani Senthil Kumar" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                Mrs.S.VANI SENTHIL KUMAR
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>(Trustee)</div>
              </div>
            </div>

            {/* Trustee 6 */}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div className="trustee-image-wrapper">
                <img src="/images/trustee/f.png" alt="Mrs. U. Dhanalakshmi" />
              </div>
              <div className="trustee-name" style={{ marginTop: '12px', color: '#990099' }}>
                Mrs.U.DHANALAKSHMI
                <div className="trustee-role" style={{ marginTop: '4px', color: '#666' }}>(Trustee)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
