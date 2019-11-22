import React from 'react';
import './SideNav.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  return (
    <div className="SideNav">
      <Link activeClass="sideNavActive" className="SideNav-link" to="#home" spy={true} offset={-100}><FontAwesomeIcon icon={faCircle} /></Link>
      <Link activeClass="sideNavActive" className="SideNav-link" to="#about" spy={true}><FontAwesomeIcon icon={faCircle} /></Link>
      <Link activeClass="sideNavActive" className="SideNav-link" to="#contact" spy={true}><FontAwesomeIcon icon={faCircle} /></Link>
    </div>
  );
}

export default SideNav; 