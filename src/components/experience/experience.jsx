import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
      <section id='experience'>
      <h5>What Experiences I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>vInnovate Technologies LLP | Web Developer Intern</h3>
          <div className="experience__content">
            <article className="experience_details">
            <ul>
            <h4><BsFillPatchCheckFill />&nbsp;&nbsp;Worked on vInnovate Technologies Website.</h4>
            <h4><BsFillPatchCheckFill />&nbsp;&nbsp;Worked on Several other Web Applications.</h4>
            <h4><BsFillPatchCheckFill />&nbsp;&nbsp;Managed Hosting Platform.</h4>
            </ul>
            <div>
            </div>
            </article>
          </div>
        </div>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Drop Shipping | MyShipCart </h3>
          <div className="experience__content">
            <article className="experience_details">
            <ul>
            <h4><BsFillPatchCheckFill />&nbsp;&nbsp;Successfully Delivered 100+ Products.</h4>
            <h4><BsFillPatchCheckFill />&nbsp;&nbsp;Used Delivery Partner as Shiprocket<br></br><BsFillPatchCheckFill />&nbsp; Used Product Supplier - Deodap <br></br><BsFillPatchCheckFill />&nbsp; Used Payment Gateway - Razorpay</h4>
            </ul>
            <div>
            </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default experience
