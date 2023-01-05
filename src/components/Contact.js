import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <h5 className='h5'>Get In Touch</h5>
      <h2 className='h2'>Contact Me</h2>
      <div className="conf">
        <h3 className='h3'>Write Me Up</h3>
        <form action="https://getform.io/f/8f3ddfe8-a52b-4ceb-9b7e-af7fc625d5da" method="POST" className='formc'>
          <div className="formd">
            <label htmlFor="" className='labelf'>Name</label>
            <input type="text" name="name" id="" className='forminput' placeholder='Enter Your Name' />
          </div>
          <div className="formd">
            <label htmlFor="" className='labelf'>Email</label>
            <input type="email" name="email" id="email" className='forminput' placeholder='Enter Your Email' required />
          </div>
          <div className="formd">
            <label htmlFor="" className='labelf'>Message</label>
            <textarea name="message" className='forminput innp' id="" cols="30" rows="10" placeholder='Enter Message' required></textarea>
          </div>
          <button type="submit" className='buti'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
