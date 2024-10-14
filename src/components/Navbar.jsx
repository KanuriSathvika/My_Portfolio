import React,{useRef, useState} from 'react'
import './Navbar.css'
import { Outlet, Link,NavLink } from "react-router-dom";
import About from './About/About.jsx';
import Hero from './Hero/Hero.jsx'
import Education from './Education/Education.jsx';
import Skills from './Skills/Skills.jsx';
import Projects from './Projects/Projects.jsx';
// import Contact from './Contact/Contact.jsx';
import Contact from './Contact/Contact.jsx'

const Navbar = () => {
    const sec1=useRef();
    const sec2=useRef();
    const sec3=useRef();
    const sec4=useRef();
    const her=useRef();

    const scrollHandler=(elmRef)=>{
      console.log(elmRef);
      window.scrollTo({top:elmRef.current.offsetTop, behavior:"smooth"})
    }


    const [menuOpen,setMenuOpen]=useState(false);

  return (
    <div>
        <div className='navbar nav'>
      <div className='nav-container'>
        <div className='nav-left'>
            {/* <h1>Sathvika Kanuri</h1> */}
            <Link to='/'>Sathvika Kanuri</Link>
        </div>
        <div className='menu'  onClick={()=>{setMenuOpen(!menuOpen);}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={`${menuOpen? "open":""} nav-right`}
        >
            <li onClick={()=>scrollHandler(her)}>
                Home
            </li>
            <li onClick={()=>scrollHandler(sec1)}>
                About
            </li>
            <li  onClick={()=>scrollHandler(sec2)}>Skills</li>
            <li  onClick={()=>scrollHandler(sec3)}>Projects</li>
            <li  onClick={()=>scrollHandler(sec4)}>Contact</li>
        </div>
      </div>
    </div>
      <Hero her={her}/>
      <About data={sec1} />
      <Education/>
      <Skills scroll1={sec2}/>
      <Projects scroll2={sec3}/>
      <Contact scroll3={sec4}/>
    </div>
    
  )
}

export default Navbar
