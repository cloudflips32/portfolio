import React from 'react';

const Interests = () => {
  return (
    <>
      <div className="section" id="interests">
        <h2>My Interests</h2>
        <div className="interests-group">
          <h3><span>Healthy</span> Eating</h3>
          <div className="item">
            <img src="images/sushi.jpg" alt="sushi plate" />
          </div>
          <h3><span>Working</span> Out</h3>
          <div className="item">
            <img src="images/deadlift.jpg" alt="olympic bar 130lb" />
          </div>
        </div>

        <div className="interests-group">
          <h3><span>Jeopardy</span>- RIP Alex!</h3>
          <div className="item">
            <img src="images/jeopardy.jpg" alt="Jeopardy Board" />
          </div>
          <h3><span>E-Sports</span></h3>
          <div className="item">
            <img src="images/esports.jpg" alt="E-Sports stadium crowd" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests;