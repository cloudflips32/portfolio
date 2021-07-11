import React from 'react';

const Interests = () => {
  return (
    <>
      <div className="section" id="interests">
        <h2>My Interests</h2>
        <div className="interests-group">
          <div className="item">
            <h3><span>Healthy</span> Eating</h3>
            <img src="images/sushi.jpg" alt="sushi plate" />
          </div>
          <div className="item">
            <h3><span>Working</span> Out</h3>
            <img src="images/deadlift.jpg" alt="olympic bar 130lb" />
          </div>
        </div>

        <div className="interests-group">
          <div className="item">
            <h3><span>Jeopardy</span></h3>
            <img src="images/jeopardy.jpg" alt="Jeopardy Board" />
          </div>
          <div className="item">
            <h3><span>E-Sports</span></h3>
            <img src="images/esports.jpg" alt="E-Sports stadium crowd" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests;