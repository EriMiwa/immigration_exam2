import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <a href="#">Dr. Lana Turban</a>
      </div>
      <div className="Nav-menu">
        <div>
          <a href="#hero" className="Nav-text_link">Home</a>
        </div>
        <div>
          <a href="#about" className="Nav-text_link">About</a>
        </div>
        <div>
          <a href="#contact-sctn" className="Nav-text_link">Contacts</a>
        </div>
      </div>
    </div>
  );
}

export default Nav; 