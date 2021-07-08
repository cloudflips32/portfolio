import React from 'react';

const Header = () => {
  return (
    <header>
      <h3>Adam Standish</h3>
      <nav>
        <ol>
          <li>
            <a href="#about">About Me <i className="fas fa-male fa-1x"></i></a>
          </li>
          <li>
            <a href="#work">Technical Experience <i className="fas fa-briefcase fa-1x"></i></a>
          </li>
          <li>
            <a href="#cert">Certifications Earned <i className="fas fa-graduation-cap fa-1x"></i></a>
          </li>
          <li>
            <a href="#contact">Contact Me <i className="far fa-address-card fa-1x"></i></a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;