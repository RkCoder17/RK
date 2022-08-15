import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {HiCheckCircle} from 'react-icons/hi';
import './project.css'
import {FiExternalLink} from 'react-icons/fi'
const project = () => {
  return (
   <section id="project">
   <h5>My Recent Work</h5>
   <h2>Projects</h2>

   <div className='container portfolio__container'>
     <article className='portfolio__item'>
       <br></br>
       <h2 style={{color:"#4db5ff"}}>&nbsp;vInnovate Technologies Website &nbsp;
        <a href="https://vinnovatetechnologies.com/"> <FiExternalLink /> </a> </h2><br></br>
       <p><HiCheckCircle/>&nbsp; Improved the User Interface of the Whole Website.</p>
       <p><HiCheckCircle/>&nbsp; Technology Used :- Html, Css, Bootstrap</p> 
       <br></br>
     </article>
     <br></br>
     
     <article className='portfolio__item'>
       <br></br>
       <h2 style={{color:"#4db5ff"}}>&nbsp;vChat - Chat Application &nbsp;
        <a href="https://vchat--application.herokuapp.com/login"> <FiExternalLink /> </a> </h2><br></br>
        <p><HiCheckCircle/>&nbsp;Build a web application with the purpose of making communication easy with people in an Organisation by sending &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and receiving messages in real time. </p>
        <p><HiCheckCircle/> Using API Different Avatars are used for User Profile Pictures.</p>
       <p><HiCheckCircle/>&nbsp; Tools and Technology Used :- MongoDB, Express Js, React Js, Node Js, Material UI, Socket.io</p> 
       <br></br>
     </article>
   </div>
 </section>
  )
}

export default project
