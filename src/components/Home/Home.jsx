import React from 'react';
import './Home.css';
import imgTitle from '../../resources/image-title.png';

function Home() {
  return (
    <>
      <div className="Home">
        <div className="container-left">
          <img src={imgTitle} alt="Doctor photo" />
          </div>
          <div className="container-right">
            <div className="title-area">
              <h1>Dr. Turban Firstname</h1>
              <h3>— Ph.D. Clinical Psychotherapist</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="btn-area">
              <button className="btn-red btn-long" >Schedule Appointment</button>
            </div>
          </div>
      </div>
    </>
  );
}
export default Home;