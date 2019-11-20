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
          <a href="#" className="Nav-text_link">Navigation</a>
        </div>
        <div>
          <a href="#" className="Nav-text_link">Navigation</a>
        </div>
        <div>
          <a href="#" className="Nav-text_link">Navigation</a>
        </div>
        <div>
          <a href="#" className="Nav-text_link">Navigation</a>
        </div>
      </div>
    </div>
  );
}

export default Nav; 