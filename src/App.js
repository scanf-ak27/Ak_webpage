import React from "react";
import "./index.css"
import Home from "./routes/home"
import Project from "./routes/project"
import About from "./routes/about"
import Contact from "./routes/contact"
import Comingsoon from "./routes/comingsoon"
import { useState } from "react";
import { useEffect } from "react";
import ScrollButton from './components/scbtn'; 


import {Route,Routes} from "react-router-dom"




function App() {

  //SCROLLING TO TOP BUTTON
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) { // Show button after 50px scroll
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior:"smooth" });
  };
// ____________________________________

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/comingsoon" element={<Comingsoon/>} />
      <Route path="/scbtn" element={<ScrollButton/>}/>
    </Routes>
    {showButton && <ScrollButton onClick={scrollToTop} />}
    </>
  );
}

export default App;
