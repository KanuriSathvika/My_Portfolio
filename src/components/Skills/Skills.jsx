import React from 'react'
import './Skills.css'
import { FaHtml5 ,FaReact,FaJava,FaPython } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbHexagonLetterCFilled } from "react-icons/tb";

const Skills = ({scroll1}) => {
  return (
    <div ref={scroll1}
     className='skills '>
      <h1>My Skills</h1>
      <div className='skills-container'>
        <div className='skill-left'>
          <div className='skill-info'>
              <div className='skill-text skill-text-html'>
                <div>
                  <FaHtml5 />
                  <p>HTML</p>
                </div>
                <p className='skill-per-html'>90%</p>
              </div>
              <div className='skill-bar'>
                <div className='bar-html'></div>
              </div>
          </div>

          <div className='skill-info'>
              <div className='skill-text skill-text-css'>
                <div>
                  <SiCss3 />
                  <p>CSS</p>
                </div>
                <p className='skill-per-css'>90%</p>
              </div>
              <div className='skill-bar'>
                <div  className='bar-css'></div>
              </div>
          </div>

          <div className='skill-info'>
              <div className='skill-text skill-text-js'>
                <div>
                  <IoLogoJavascript />
                  <p>JavaScript</p>
                </div>
                <p className='skill-per-js'>65%</p>
              </div>
              <div className='skill-bar'>
                <div  className='bar-js'></div>
              </div>
          </div>

          <div className='skill-info'>
              <div className='skill-text skill-text-tailcss'>
                <div>
                  <RiTailwindCssFill />
                  <p>Tailwind CSS</p>
                </div>
                <p className='skill-per-tailcss'>80%</p>
              </div>
              <div className='skill-bar'>
                <div  className='bar-tailcss'></div>
              </div>
          </div>

          <div className='skill-info'>
              <div className='skill-text skill-text-react'>
                <div>
                  <FaReact />
                  <p>ReactJs</p>
                </div>
                <p className='skill-per-react'>75%</p>
              </div>
              <div className='skill-bar'>
                <div  className='bar-react'></div>
              </div>
          </div>
        </div>


        <div className='skill-right'>
          <div className='skill-info'>
                <div className='skill-text skill-text-c'>
                  <div>
                    <TbHexagonLetterCFilled />
                    <p>C</p>
                  </div>
                  <p className='skill-per-c'>79%</p>
                </div>
                <div className='skill-bar'>
                  <div  className='bar-c'></div>
                </div>
          </div>

          <div className='skill-info'>
                <div className='skill-text skill-text-java'>
                  <div>
                    <FaJava />
                    <p>Java</p>
                  </div>
                  <p className='skill-per-java'>95%</p>
                </div>
                <div className='skill-bar'>
                  <div  className='bar-java'></div>
                </div>
          </div>

          <div className='skill-info'>
                <div className='skill-text skill-text-py'>
                  <div>
                    <FaPython />
                    <p>Python</p>
                  </div>
                  <p className='skill-per'>82%</p>
                </div>
                <div className='skill-bar'>
                  <div  className='bar-py'></div>
                </div>
          </div>

          <div className='skill-info'>
                <div className='skill-text skill-text-sql'>
                  <div>
                    <SiMysql />
                    <p>SQL</p>
                  </div>
                  <p className='skill-per'>75%</p>
                </div>
                <div className='skill-bar'>
                  <div  className='bar-sql'></div>
                </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
