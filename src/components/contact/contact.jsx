import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26hdenw', 'template_b9kw7v8', form.current, '-veW8fUyT8VjdVDOl')
    .then((result) => {
      Swal.fire(
        'Message Sent!',
        'Will get back to you',
        'success'
      );
  }, (error) => {
    Swal.fire(
      'Message Not Sent!',
      '',
      'error'
    );
  });
}; 

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          {/* <h6>Rohankhandelwal2001@gmail.com</h6> */}
          <a href="mailto:rohankhandelwal2001@gmail.com" target="_blank">Send a Message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <a href="https://wa.me/+919462842148" target="_blank">Send a Message</a>
        </article> 
        </div>

        <form ref={form} onSubmit={sendEmail} method="post">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary"  value="Send">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact
