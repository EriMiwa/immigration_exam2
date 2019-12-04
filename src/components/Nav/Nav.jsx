import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-title">
        <a href="/">Dr. Lana Turban</a>
      </div>
      <div className="Nav-menu">
        <a href="#home" className="Nav-text_link">Home</a>
        <a href="#about" className="Nav-text_link">About</a>
        <a href="#contact" className="Nav-text_link">Contact</a>
      </div>
    </div>
  );
}

export default Nav; 