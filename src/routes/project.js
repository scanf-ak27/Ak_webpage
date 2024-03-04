import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/heroimg2'
import Work from '../components/work'
// import { Link } from 'react-router-dom'
const project = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS" text="Some Of My most Recent works"/>
    <Work/>
    <Footer/>
  </div>
  )
}

export default project