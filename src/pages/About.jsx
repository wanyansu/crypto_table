import React from 'react';
import selfie from '../images/selfie.JPG'

const About = () => {
  
  return (
      <div className="mainTable">
        <div className="about">
          <span className="aboutTitle" >About Me</span>
          <img className="aboutIMG" src={selfie} alt="selfie" />
          <p className="aboutText">My name is Roy Wang. I work in Finance industry and I am also a self-taught programmer.</p>
        </div>
      </div>
  )
};

export default About;
