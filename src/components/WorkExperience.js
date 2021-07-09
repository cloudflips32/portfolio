import React from 'react';

const WorkExperience = () => {
  return (
    <>
      <div className='section' id="work-experience">
        <h2 id="work">Tech Experience</h2>
        <div className="group bg-insert">
          <div className="item">
            <p><span>At this point,</span> aside from projects I have worked on, I don't have technical work experience. I am confident that the work i have to present will demonstrate my current skillset.</p>
          </div>
          <h3>Current/Past Employment</h3>

          <div className="item">
            <div className="card">
              <img src="https://th.bing.com/th/id/OIP.4b8nuUsDoo5yNLKgt2l2cAEsCo?pid=ImgDet&rs=1" alt="ebay-pic" />
              <div className="container">
                <h3>Ebay</h3>
                <span>Position:</span><p> Seller, eCommerce</p>
                <span>How Long:</span><p> 05/21-06/21</p>
                <span>Salary:</span><p> $15/hour</p>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png" alt="lyft-pic" />
              <div className="container">
                <h3>Lyft</h3>
                <span>Position:</span><p> Driver</p>
                <span>How Long:</span><p> 01/18-Current</p>
                <span>Salary:</span><p> Varied Per Ride</p>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="card">
              <img src="https://th.bing.com/th/id/OIP.Ft3xQruPVRgJ2PKpmUA3MAHaE7?pid=ImgDet&rs=1" alt="uber-pic" />
              <div className="container">
                <h3>Uber</h3>
                <span>Position:</span><p> Driver</p>
                <span>How Long:</span><p> 01/17-Current</p>
                <span>Salary:</span><p> Varied Per Ride</p>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </>
  )
}

export default WorkExperience;
