import React from 'react';

const Footer = () => {
  return (
    <footer id='contact'>
      <nav>
        <ul>
          <li>
            <a href="tel:2392348483"><i className="fas fa-phone fa-2x"></i>
            <p>(239) 234-8483</p>
            </a>
          </li>
          <li>
            <a href="mailto: cloudflips321@icloud.com"><i className="fas fa-envelope fa-2x"></i>
            <p>cloudflips321@icloud.com</p>
            </a>
          </li>
          <li>
          <h3><i className="fa fa-copyright" aria-hidden="true"></i>Adam Standish</h3>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;