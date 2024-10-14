import React from 'react'
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot-container'>
        <div className='foot-socials'>
              <a href=""><FaLinkedin className='social' /></a>
              <a href=""><FaGithub className='social'  /></a>
              <a href=""><FaInstagram className='social' /></a>
        </div>
        <div className='foot-lists'>
            <li>About</li>
            <li>FAQ</li>
            <li>Privacy</li>
            <li>Contact</li>
        </div>
      </div>
    </div>
  )
}

export default Footer
