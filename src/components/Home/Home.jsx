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
              <h1>Dr. Turban Lana</h1>
              <h3>— Ph.D. Clinical Psychotherapist</h3>
              <p>Our clinic can help you with all the exams needed for immigration purpose. You can have your x-ray and blood tests done in one place, saving you a lot of time.</p>
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