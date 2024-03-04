import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/heroimg2'
import Aboutcontent from '../components/aboutcontent'
// import { Link } from 'react-router-dom'
// import "rsuite/dist/rsuite.min.css"; 
const about = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading="ABOUT ME" text="Know More About Me"/>
       <Aboutcontent/>
       <Footer/>
  </div>
  )
}


export default about

