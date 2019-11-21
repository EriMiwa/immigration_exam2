import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <a href="#">Dr. Lana Turban</a>
      </div>
      <div className="Nav-menu">
        <div className="contactWrapper" id="home">
          <a href="#home" className="Nav-text_link">Home</a>
        </div>
        <div className="contactWrapper" id="about">
          <a href="#about" className="Nav-text_link">About</a>
        </div>
        <div className="contactWrapper" id="contact">
          <a href="#contact" className="Nav-text_link">Contact</a>
        </div>
        {/* <div>
          <a href="#" className="Nav-text_link">Navigation</a>
        </div> */}
      </div>
    </div>
  );
}

export default Nav; 