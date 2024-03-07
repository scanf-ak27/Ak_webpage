import React from 'react'
import Navbar from '../components/navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
// import ScrollButton from './components/scbtn'

const home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Footer/>
      {/* <ScrollButton/> */}
    </div>
  )
}

export default home