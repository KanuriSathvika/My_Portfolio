import React from 'react'
import './Hero.css'
import hero_pic from '../../assets/my_AI_pic2.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Hero = ({her}) => {
  return (
    <div  ref={her}
    className='hero '>
      <div className='hero-container'>
        <div className='hero-left'>
            <h3>I'm <span>Kanuri Sathvika</span></h3>
            <p>I'm passionate on html, css, javascript, and Reactjs framework which eables to do dynamic and repsonsive websites.And I have interst to solve do problem-solving through java.</p>
            <div className='hero-socials' >
                <a href="https://github.com/KanuriSathvika"> <FaGithub  className='social'/></a>
                <a href="https://www.linkedin.com/in/sathvika-kanuri-978697227/"><FaLinkedin className='social'/></a>
                <a href="#"><FaInstagram className='social'/></a>
                
                
                
            </div>
            <div className='hero-btn'>
                <Link >Resume</Link>
                
            </div>
        </div>
        <div></div>
        <div className='hero-right'>
            <img src={hero_pic} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
