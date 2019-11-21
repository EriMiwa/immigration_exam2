import React from "react";
import Iframe from "react-iframe";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactWrapper" id="contact">
      <div className="contactContents">
        <div className="contactTitle mainBGColor">
          <h1>Contact</h1>
        </div>
        <div className="contactInfo">
          <div className="contactInfoContents">
            <p>
              <b>Clinic Address:</b>
            </p>
            <br />
            <p>
              4303 West 10th Avenue, <br />
              Vancouver, BC <br />
              V6R 2H6 <br />
            </p>
            <br />
            <p>
              Our clinic has a free rear parking and is easily accessible by
              public transport.
            </p>
            <br />
            <p>Phone: 604-356-3617</p>
            <p>Email: info@immigrationexam.ca</p>
          </div>
        </div>
      </div>
      <div className="contactMap">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6870.971264981563!2d-123.20724138989097!3d49.264810122762164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672e4c1c9a0b5%3A0x4dd42985b081ae0c!2s4303%20W%2010th%20Ave%2C%20Vancouver%2C%20BC%20V6R%204K3!5e0!3m2!1sen!2sca!4v1573684089594!5m2!1sen!2sca"
          className="mapDemo"
        />
      </div>
    </div>
  );
};

export default Contact;