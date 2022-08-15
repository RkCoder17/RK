import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#c" className="footer__logo"></a>

      <ul className='permalinks'>
        <li><a href="#s"></a></li>
        <li><a href="#contact"></a></li>
        <li><a href="#contact"></a></li>
          <li><a href="#s"></a></li>
        <li><a href="#s"></a></li>
        <li><a href="#s"></a></li>
      </ul>

      
      <div className="footer__copyrights">
        <small> Designed By Rohan Khandelwal</small>
      </div>

    </footer>
  )
}

export default footer
