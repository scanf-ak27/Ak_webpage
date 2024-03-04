import './work.css'
 import React from 'react'
 import p1 from "../Assets/p1.jpg"
import { NavLink } from 'react-router-dom'
 export const Work = () => {
   return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          <div className="project-card">
           <img src={p1} alt="image1"/>
              <h2 className='project-title'>Pro title</h2>
            <div className='pro-detail'>
                <p>This is description</p>
              <div className='pro-btns'>
                <NavLink to="github.com" className="btn">View</NavLink>
                <NavLink to="github.com" className="btn">Source</NavLink>
              </div>
            </div>
          </div>
        </div>
     </div>
 };
 export default Work;