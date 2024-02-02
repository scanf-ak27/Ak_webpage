import "./Footer.css"
import {FaFacebook, FaGit, FaHome,FaInstagram,FaLinkedin,FaPhone, FaTwitter, FaWhatsapp} from "react-icons/fa"
import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Footer = () => {

    const[linktext]=useState("WhatsApp");
    const[linktext1]=useState("GitHub");
    const[linktext2]=useState("LinkedInn");
    const[linktext3]=useState("Hello");
    const[linkurl]=useState("https://wa.me/8521187429");
    const[linkurl1]=useState("https://github.com/scanf-ak27");
    const[linkurl2]=useState("https://www.linkedin.com/in/aayush-kumar-43b175136/");
    const[linkurl3]=useState("https://www.google.com/maps/@12.9598953000619, 77.71246902240262,21z?entry=ttu");
    
    const[fblink]=useState("https://www.facebook.com/flash.ak.27/");
    const[twlink]=useState("https://twitter.com/kraayush27");
    const[inslink]=useState("https://www.instagram.com/aayush__27/");


    return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff"
                    ,marginRight:"2rem"}}/>
                    <Link to={linkurl3}>{linktext3}</Link>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color:"#fff"
                    ,marginRight:"2rem"}}/>
                    8521187429
                </div>
                <div className="whatsapp">
                <FaWhatsapp size={20} style={{color:"#fff"
                    ,marginRight:"2rem"}}/>
                    <Link to={linkurl}>{linktext}</Link>
                </div>
                <div className="github">
                <FaGit size={20} style={{color:"#fff"
                    ,marginRight:"2rem"}}/>
                    <Link to={linkurl1}>{linktext1}</Link>
                </div>
                <div className="linkedinn">
                <FaLinkedin size={20} style={{color:"#fff"
                    ,marginRight:"2rem"}}/>
                    <Link to={linkurl2}>{linktext2}</Link>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Connect to me on any 
                    of these platform.
                </p>
                <div className="social">
                    
                    <Link to={fblink}><FaFacebook 
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/></Link>
                    
                    <Link to={inslink}><FaInstagram 
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/></Link>
                    
                    <Link to={twlink}><FaTwitter 
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer