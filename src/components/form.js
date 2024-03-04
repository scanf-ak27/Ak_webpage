import "./form.css"

import React from 'react'

const form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="----enter name here----"></input>
            <label>Your E-mail</label>
            <input type="email" placeholder="----enter email here----"></input>
            <label>Subject</label>
            <input type="text" placeholder="----enter the subject here----"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here."/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default form