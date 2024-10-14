import React from 'react'
import './Contact.css'

const Contact = ({scroll3}) => {
  return (
    <div ref={scroll3}
     className='contact'>
      <h1>Contact Me</h1>
      <form action="#">
        <div className='input-box'>
            <input type="text" placeholder='Full Name' />
            <input type="Email" placeholder='Email' />
            <input type="number" placeholder='Phone Number' />
            <input type="text" placeholder='Subject'/>
            <textarea name="" id="" cols='5' rows='10'
        placeholder='Your Message'></textarea>
        </div>
       
        <input type="submit" value='Send Message' className='btn' />
      </form>
    </div>
  )
}

export default Contact
