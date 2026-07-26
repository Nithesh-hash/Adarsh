import React from 'react';

function Admission() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'left' }}>
        
        {/* Title */}
        <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', margin: '20px 0' }}>
          ADMISSION
        </h2>

        {/* Intro */}
        <div style={{ fontSize: '18px', color: '#990099', lineHeight: '1.6', marginBottom: '25px' }}>
          Admissions are open for Pre-KG, LKG &amp; XI only. For all other classes vacancies caused by transfers are filled up on the basis of merit.
        </div>

        {/* Groups Offered */}
        <div style={{ margin: '25px 0' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#990066', marginBottom: '15px' }}>
            THE GROUPS OFFERED IN XI &amp; XII ARE AS FOLLOWS:
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '17px', color: '#990099', lineHeight: '2' }}>
            <li style={{ marginBottom: '8px' }}>🚀 <strong>Group I :</strong> Physics, Chemistry, Biology and Mathematics</li>
            <li style={{ marginBottom: '8px' }}>💻 <strong>Group II :</strong> Physics, Chemistry, Mathematics and Computer Science</li>
            <li style={{ marginBottom: '8px' }}>🌿 <strong>Group III :</strong> Physics, Chemistry, Botany and Zoology</li>
            <li style={{ marginBottom: '8px' }}>🧪 <strong>Group IV :</strong> Physics, Chemistry, Biology and Computer Science</li>
            <li style={{ marginBottom: '8px' }}>📊 <strong>Group V :</strong> Commerce, Economics, Accountancy and Computer Science</li>
          </ul>
        </div>

        {/* Documents Required */}
        <div style={{ margin: '35px 0' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#990066', marginBottom: '15px' }}>
            DOCUMENTS REQUIRED AT THE TIME OF ADMISSION
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '17px', color: '#990099', lineHeight: '2' }}>
            <li style={{ marginBottom: '6px' }}>📝 Filled up Application Form</li>
            <li style={{ marginBottom: '6px' }}>🖼️ Two copies of the child’s latest colour passport size photograph</li>
            <li style={{ marginBottom: '6px' }}>🏫 Transfer certificate from the previous school (Original)</li>
            <li style={{ marginBottom: '6px' }}>👶 Birth Certificate (Xerox copy)</li>
            <li style={{ marginBottom: '6px' }}>🪪 Aadhaar (Xerox copy)</li>
            <li style={{ marginBottom: '6px' }}>🏘️ Community Certificate (Xerox copy)</li>
          </ul>
        </div>

        {/* Banner Graphic */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <img 
            src="/images/adarshvanyambadi-admission.png" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }} 
            alt="Admission Grid Banner" 
          />
        </div>

      </div>
    </div>
  );
}

export default Admission;
