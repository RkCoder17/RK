import React from 'react';
import './about.css';
import ME from '../../assets/rohan.png';

const About = () => {
  return (
  <section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>
  <div className ="container about__container"> 
  <div className ="about__me"> 
  <div className= " about__me-image">
    <img src={ME} alt="About" />
  </div>

  </div>
  <div className="about__content">
  <div className="about__cards">
  </div>
  <br></br>
  <h3> Hello, I am a Web Developer. Worked on different technologies for developing various solutions on the web to bring the best digital experiences to the user.
     <br></br><br></br>I enjoy working on projects in a team full of excited people who wants to learn and grow like me and In order to keep learning new things, I am always looking for projects and opportunities that will help me learn and upskill better. 
  </h3>

  </div>
  </div>
    </section>
    )
}

export default About
