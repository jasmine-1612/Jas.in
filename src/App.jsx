import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Sklills from "./sections/Sklills";
import Testimonials from "./sections/Testimonials";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";

export default function App(){
const [introDone , setIntroDone]= React.useState(false);

  
  return(
    <>
    {!introDone &&  <IntroAnimation onFinish={() => setIntroDone(true)}/>
    }
    {introDone && (

  <div className="relative gradient text-white">
   {/* <ParticlesBackground/> */}
    <CustomCursor/>
    <Navbar/>
    <Home/>
    <About/>
    <Sklills/>
    <Projects/>
    <Experience/>
    <Testimonials/>
    <Contact/>
    <Footer/>



  </div>
  )}
  </>
  )
}