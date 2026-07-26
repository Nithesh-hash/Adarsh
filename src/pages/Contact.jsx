import React from 'react';

function Contact() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'left' }}>
        
        {/* Title */}
        <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', margin: '20px 0' }}>
          CONTACT INFO
        </h2>

        {/* Map iframe */}
        <div style={{ margin: '20px 0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.530917762664!2d78.61066731435116!3d12.67873222466837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bada9a3441484db%3A0xa1889cf901228fa0!2sADARSH+MATRIC.+HR.+SEC.+SCHOOL!5e0!3m2!1sen!2sin!4v1552141970692" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen 
            title="Google Map Location of ADARSH School"
          />
        </div>

        {/* Contact Address & Details */}
        <div style={{ margin: '30px 0', fontSize: '18px', color: '#990099', fontFamily: 'Calibri', lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#990066', margin: '0 0 5px 0' }}>
            ADARSH Matric. Higher Secondary School
          </h3>
          <div style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>
            (Recognised by the Govt. of Tamilnadu)
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div><strong>Address:</strong> 41/1, Patel Yakoob Street, Fort, Vaniyambadi - 635751, Tirupattur District (formerly Vellore District).</div>
            <div><strong>Phone:</strong> 04174 - 228785</div>
            <div><strong>Mobile:</strong> 9042161915</div>
            <div><strong>Email:</strong> <a href="mailto:adarshschool134@gmail.com" style={{ color: '#CC3399', textDecoration: 'none', fontWeight: 'bold' }}>adarshschool134@gmail.com</a></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
