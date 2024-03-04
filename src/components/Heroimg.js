import "./Heroimg.css"
import React from 'react'
import { Link } from "react-router-dom";
import IntroImg from "../Assets/img.jpg"

const Heroimg = () => {
  return  (
            <div className="hero">
                <div className="mask">
                <img className="into-img" src=
                {IntroImg} alt="IntroImg"/>
              </div>
              <div className="content">
                <p>Hi, i'm Aayush</p>
                <h1>Front-end Developer</h1>
                <div>
                    <Link to="/project"
                    className="btn">Project
                    </Link>
                    <Link to="/contact"
                    className="btn btn-light">Contact
                    </Link>
                </div>
              </div>
            </div>
            );
};

export default Heroimg