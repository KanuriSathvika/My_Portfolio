import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div className='edu'>
      <h1>Education</h1>
      <div className='timeline'>
        <div className='edu-container left-container'>
            <div className='timeline-dot'></div>
            <div className='edu-textbox'>
                <h2>Jain University</h2>
                <small>2021-present</small>
                <p>B.Tech CSE- (Data Science)</p>
                <p><span>CGPA :</span>9.08</p>
                <span className='left-container-arrow'></span>
            </div>
        </div> 
        <div className='edu-container  right-container'>
        <div className='timeline-dot'></div>
            <div  className='edu-textbox'>
                <h2>Sri Chaitanya Junior college</h2>
                <small>2019-2021</small>
                <p><span>Intermediate:</span>MPC</p>
                <p><span>Marks :</span>984/1000</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>   
        
        <div className='edu-container left-container'>
            <div className='timeline-dot'></div>
            <div className='edu-textbox'>
                <h2>SPR school of Excellence</h2>
                <small>2005-2019</small>
                <p>School</p>
                <p><span>Marks :</span>984/1000</p>
                <span className='left-container-arrow'></span>
            </div> 
        </div>
              
        
      </div>
      
    </div>
  )
}

export default Education
