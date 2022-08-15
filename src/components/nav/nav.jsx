import React from 'react'
import './nav.css'
import {MdWork} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import {MdLibraryBooks} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
import {GiAchievement} from 'react-icons/gi'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    <a href="# " className ={ activeNav === '#' ? 'active' : ' ' }><AiOutlineHome/></a>
    <a href="#about " onClick={() =>  setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineUser/> </a>
    <a href="#skills " onClick={() =>  setActiveNav('#')} className={activeNav === '#skills' ? 'active' : ' '}><GiAchievement/></a>
    <a href="#experience " onClick={() =>  setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}><MdWork/></a>
    <a href="#project " onClick={() =>  setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ' '}><MdLibraryBooks/></a>
    <a href="#contact" onClick={() =>  setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}><IoMdCall/></a>
    </nav>
  )
}

export default Nav
