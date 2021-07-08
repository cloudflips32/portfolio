import React from 'react';

const Certification = () => {
  return (
    <>
      <div className='section' id='certification'>
        <h2 id="cert">Certifications</h2>

          <div className="group">
            <div className="certificate">
              <img src="images/html-cert.jpg" className="certificate" alt="html-cert" />
            </div>
            <div className="certificate">
              <img src="images/css-cert.jpg" className="certificate" alt="css-cert" />
            </div>
          </div>
              
          <div className="group">
            <div className="certificate">
              <img src="images/js-cert.jpg" className="certificate" alt="js-cert" />
            </div>
            <div className="certificate">
              <img src="images/jq-cert.jpg" className="certificate" alt="jq-cert" />
            </div>
          </div>

          <div className="group">
            <div className="certificate">
              <img src="images/cpp-cert.jpg" className="certificate" alt="cpp-cert" />
            </div>
            <div className="certificate">
              <img src="images/sql-cert.jpg" className="img-fluid" alt="sql-cert" />
            </div>
          </div>
      </div>
    </>
  )
}

export default Certification;
