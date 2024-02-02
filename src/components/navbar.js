import { Link } from "react-router-dom";
import "./navbar.css";

import React,{ useState } from "react";

import {FaBars,FaTimes} from "react-icons/fa";


 

const Navbar = () => {

  const[click,setClick]=useState(false);
  const handClick = () => setClick(!click);

  const[color,setColor]=useState(false);
  const changecolor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changecolor);


  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>
                Webpage
            </h1>
        </Link>
    <ul className={click ? "nav-menu active" :
  "nav-menu"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
    <div className="hamburger" onClick={handClick}>
      {click ? (<FaTimes size={20} style={{color: "#fff" }}/>) :
       (<FaBars size={20} style={{color: "#fff" }
      }/>)}
    
    </div>
    </div>

  )
}

export default Navbar