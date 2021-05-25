import React, { Component } from 'react';
import "./Contact.css";


class Contact extends Component {
  render() {
      
    return (
      <div className="contact-card">
        
        <div className="contacts">
          <div>
          <img className="location-image" src={process.env.PUBLIC_URL + '/img/location.png'} alt="location logo" />
          </div>
          <div>
          <p>  New York, New York</p>
          </div>
          <div>
          <img className="email-image" src={process.env.PUBLIC_URL + '/img/email.png'} alt="Email logo" />
          </div>
          <div>
          <p>  <a href = "mailto: ikeekedede@gmail.com">ikeekedede@gmail.com</a></p>
          </div>
          <div>
          <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/resume.png'} alt="resume download" />
          </div>
          <div>
          <p>  <a href = "https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit?usp=sharing">Download Resume</a></p>
          </div>
          <div>
          <img className="download-resume-image" src={process.env.PUBLIC_URL + '/img/contact.png'} alt="resume download" />
          </div>
          <div>
          <p>  <a href = "mailto: ikeekedede@gmail.com">Download Resume</a></p>
          </div>
        
        </div>
        </div>
      
    );

    } 
  
 };
 
 export default Contact;
