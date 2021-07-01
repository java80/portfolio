import React from 'react'
import { useState } from 'react'
import handShake from '../assets/shake.svg'
import "./Contact.scss"
const Contact = () => {
 const [message,setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    console.log("form submitted");
}
  return (
    <div className ="contact-container" id = "contact-container">
      <div className = "left-image-container">
       <img src={handShake} alt="" />
      </div>
      <div className="form-container">
        <h2>Contact</h2>
        <form onSubmit = {handleSubmit} >
          <input type="text" placeholder="Email" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button type="submit"> Send</button>
          {
            message && <span>Thanks I will get back to you ASAP</span>
          }


        </form>
      </div>
    </div>
  )
}

export default Contact
