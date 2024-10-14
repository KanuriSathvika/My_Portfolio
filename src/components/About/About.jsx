import React from 'react'
import about_pic from '../../assets/my_AI_pic.jpg'
import './About.css'
// import {sec1} from '../Navbar/Navbar.jsx'

const About = (props) => {
  return (
    <div ref={props.data}
     className='about' >
      <h1>About Me</h1>
      <div className='about-container'>
        <div className='about-left'>
          <div>
            <img src={about_pic} alt="" />
          </div>
         
        </div>

        <div className='about-right'>
          <p><span>Name : </span>Kanuri Sathvika</p>
          <p><span>DOB : </span>15-10-2004</p>
          <p><span>Native place :</span>Mirylaguda mandal, Telangana</p>
          <p><span>Phone No :</span>+91 7842278048</p>
          <p><span>Email :</span>kanurisathvika310@gmail.com</p>
          
        </div>
      </div>
    </div>
  )
}

export default About
