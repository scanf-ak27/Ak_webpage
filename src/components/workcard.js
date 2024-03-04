import './work.css'
 import React from 'react'
 import p1 from "../Assets/p1.jpg"
import { NavLink } from 'react-router-dom'
 export const workcard = (props) => {
   return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image1"/>
       <h2 className='project-title'>{props.title}</h2>
     <div className='pro-detail'>
         <p>{props.text}</p>
       <div className='pro-btns'>
         <NavLink to={props.view} className="btn">View</NavLink>
         <NavLink to="/home" className="btn">Source</NavLink>
       </div>
     </div>
   </div>
   );
 };
 export default workcard;