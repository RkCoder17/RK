import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'
import './header.css'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
     <a href= "https://www.linkedin.com/in/rohan-rk/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href= "https://www.github.com/RkCoder17"  target="_blank" rel="noreferrer"><FiGithub/></a> 
    </div>

    
  )
}

export default HeaderSocials
