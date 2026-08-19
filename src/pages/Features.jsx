import React from 'react';

function Features() {
  return (
    <div className="page_container" style={{ padding: '0 15px' }}>
      <div style={{ textAlign: 'left' }}>
        
        {/* Title */}
        <h2 className="title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#990066', margin: '20px 0' }}>
          ACADEMICS
        </h2>

        {/* Feature Block 1 */}
        <div style={{ textAlign: 'center', margin: '25px 0' }}>
          <img 
            src="/images/adarshschoolvaniyambadi features 02.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Academics Features 2" 
          />
        </div>

        {/* Flex layout for Description & Image 1 */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '20px',
          margin: '30px 0'
        }}>
          <div style={{ flex: '1 1 300px', fontSize: '17px', color: '#990099', lineHeight: '1.6' }}>
            The school follows XSEED system of teaching which provides a comprehensive solution to improve classroom learning and teaching including training, textbooks, workbooks and assessments to maximize the students’ academic performance.
            <br /><br />
            We offer carefully crafted Next Education curriculum. Our teaching methodology develops skills like analytical reasoning and complex problem solving.
            <br /><br />
            ADARSH joins hands with Triumphant Institute of Management Education Pvt. Ltd. to conduct NEET / IIT JEE Entrance coaching classes which has indeed proven to be a great advantage for our students.
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img 
              src="/images/adarshvanyambadi-features 01.png" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
              alt="Features Graphic 1" 
            />
          </div>
        </div>

        {/* Separator */}
        <hr style={{ border: '0', borderTop: '2px dashed rgba(153, 0, 102, 0.2)', margin: '40px 0' }} />

        {/* Feature Block 2 Title Graphic */}
        <div style={{ textAlign: 'center', margin: '25px 0' }}>
          <img 
            src="/images/adarshvanyambadi-features 02png.png" 
            style={{ maxWidth: '100%', height: 'auto' }} 
            alt="Features Graphic 2" 
          />
        </div>

        {/* Feature Block 2 Image */}
        <div style={{ textAlign: 'center', margin: '25px 0' }}>
          <img 
            src="/images/adarshschoolvaniyambadi features 03.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Academics Features 3" 
          />
        </div>

        {/* Flex layout for Description & Image 2 (Reversed arrangement on desktop) */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap-reverse',
          alignItems: 'center',
          gap: '20px',
          margin: '30px 0'
        }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img 
              src="/images/adarshschoolvaniyambadi features 04.jpg" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
              alt="Academics Features 4" 
            />
          </div>
          <div style={{ flex: '1 1 300px', fontSize: '17px', color: '#990099', lineHeight: '1.6' }}>
            Spacious classrooms are equipped with "Smart Class" a digital revolution which enables the students to acquire greater understanding of the concepts and improves effective learning, which further enhances their academic performance.
            <br /><br />
            Positive learning environment and excellent ambience creates a great impact on the tender minds. At Adarsh, we take great care in providing the same.
          </div>
        </div>

        {/* Separator */}
        <hr style={{ border: '0', borderTop: '2px dashed rgba(153, 0, 102, 0.2)', margin: '40px 0' }} />

        {/* Science Title Graphic */}
        <div style={{ textAlign: 'center', margin: '25px 0' }}>
          <img 
            src="/images/adarshvanyambadi-features 03.png" 
            style={{ maxWidth: '100%', height: 'auto' }} 
            alt="Features Graphic 3" 
          />
        </div>

        {/* Science Description */}
        <div style={{ fontSize: '17px', color: '#990099', lineHeight: '1.6', margin: '20px 0' }}>
          State-of-the-art laboratories for different branches of science are available for students to perform individual experiments under the guidance of qualified teachers.
        </div>

        {/* Lab Image */}
        <div style={{ textAlign: 'center', margin: '25px 0' }}>
          <img 
            src="/images/adarshschoolvaniyambadi features 05.jpg" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
            alt="Academics Features 5" 
          />
        </div>

      </div>
    </div>
  );
}

export default Features;
