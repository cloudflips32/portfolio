import React from 'react';

const AboutMe = () => {
  return (
    <>
      <div className="section" id="about-me"> 
        <h2 id="about">About me</h2>
        <div className="group">
          <div className="item">
            <p><span>Hello! My name is</span> Adam Standish. I live in Cape Coral, FL, and I am currently seeking a position in your company!  
            </p>
            <p><span>Below, you will find</span> my work experience and certifications earned in my spare time.
            </p>
          </div>
          <div className="item">
          <img src="images/me.jpg" alt="Adam Standish" />
          </div>
        </div>
      </div>
    </>     
  )
}

export default AboutMe;