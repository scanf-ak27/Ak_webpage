import "./aboutcontent.css"

import { Link } from "react-router-dom"
import React from 'react'

import r1 from "../Assets/r1.jpg"
import r2 from "../Assets/r2.png"


const aboutcontent = () => {
  return <div className="about">
    <div className="left">
       <h1>Who Am I?</h1>
        <p>I'm a FullStack Developer.I
        create responsive webPages for my clients</p>
        <Link to="/contact">
            <button className="btn">Any Query? Connect to me</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={r1}
                    className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={r2}
                    className="img" alt="true"/>
            </div>
        </div>
    </div>
  </div>
}

export default aboutcontent