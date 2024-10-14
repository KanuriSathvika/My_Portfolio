import React from 'react'
import './Projects.css'
import project1 from '../../assets/project-1.png'
import project2 from '../../assets/project-2.png'
import project3 from '../../assets/project-3.png'
import project4 from '../../assets/project-4.png'
import project5 from '../../assets/project-5.png'
import project6 from '../../assets/project-6.png'
import project7 from '../../assets/project-7.png'

const Projects = ({scroll2}) => {
  return (
    <div ref={scroll2}
     className='project'>
      <h1>My Projects</h1>
      <div className='pro-container'>
        <div className='pro-box'>
          <img src={project1} alt="" />
          <h2>Food Delivery Website</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/Food-Delivery-Ecommerce-Website">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/Food-Delivery-Ecommerce-Website/">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project2} alt="" />
          <h2>Tic Tac Toe Game</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/Tic-Tac-Toe-Game">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/Tic-Tac-Toe-Game/">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project3} alt="" />
          <h2>BMI Calculator</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/BMI_Calculator">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/BMI_Calculator/">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project4} alt="" />
          <h2>Login Page</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/Frontend_Projects/tree/main/Login_Page">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/Frontend_Projects/Login_Page/index.html">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project5} alt="" />
          <h2>Temperature Converter</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/Frontend_Projects/tree/main/Temperature_Converter">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/Frontend_Projects/Temperature_Converter/index.html">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project6} alt="" />
          <h2>Weather API App</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/FSJS2.0/tree/main/Mini%20Projects/Weather%20Web%20App">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/FSJS2.0/Mini%20Projects/Weather%20Web%20App/index.html">Live preivew</a>
          </div>
        </div>

        <div className='pro-box'>
          <img src={project7} alt="" />
          <h2>VS Code Clone</h2>
          <div className='pro-btns'>
            <a className='pro-btn-left' href="https://github.com/KanuriSathvika/FSJS2.0/tree/main/Tailwind/VS_code_clone">Source code</a>
            <a className='pro-btn-right' href="https://kanurisathvika.github.io/FSJS2.0/Tailwind/VS_code_clone/index.html">Live preivew</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
