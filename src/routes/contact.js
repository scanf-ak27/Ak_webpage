import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/heroimg2'


// import {Link} from "react-router-dom"
const contact = () => {
  return (
  <div>
    <Navbar/>
    <Heroimg2 heading="CONTACT ME" text="Let's have a chat"/>
    <Footer/>
  </div>
    
  )
}

export default contact