import React from "react"; 
import {useEffect, useState} from "react"; 
import { motion, useScroll, AnimatePresence } from "framer-motion"; 

import img1 from "../assets/img1.PNG";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img1.png";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";



const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  
    // Checks if the screen width is <= 639px (mobile breakpoint)


  );

   React.useEffect(() => {
  if (typeof window === "undefined") return;

  const mql = window.matchMedia(query);

  const handler = (e) => setIsMobile(e.matches);

  if (mql.addEventListener) {
    mql.addEventListener("change", handler);
  } else {
    mql.addListener(handler); // older browsers
  }

  setIsMobile(mql.matches);

  return () => {
    if (mql.removeEventListener) {
      mql.removeEventListener("change", handler);
    } else {
      mql.removeListener(handler);
    }
  };
}, [query]);
 return isMobile;
};


export default function Projects(){
  const isMobile = useIsMobile();
  // Detect if the user is on a mobile screen

  const sceneRef = React.useRef(null);


   // 🔹 List of project objects (dynamic images based on screen size)
   const projects = React.useMemo(
    () =>[
      {
        title: "Mutual-Fund-Platform",
        link: "https://github.com/jasmine-1612/Mutual-Fund-Platform-backend",
        bgColor: "#0d4d3d",
        image:isMobile ? photo1: img1,

      },

      {
        title: "Asteroid Alerting & Notification System",
        link: "https://github.com/jasmine-1612/Asteroid-Alert",
        bgColor: "#0d4d3d",
        image:isMobile ? photo2: img2,

      },

      {
        title: "Email Reply Generator",
        link: "https://github.com/jasmine-1612/email-reply-generator",
        bgColor: "#0d4d3d",
        image:isMobile ? photo3: img3,

      },

      {
        title: "Free Online Bookstore",
        link: "https://github.com/jasmine-1612/bookstore",
        bgColor: "#0d4d3d",
        image:isMobile ? photo4: img4,

      },


 ], [isMobile]
   );


   const {scrollYProgress} = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
   });

   const thresholds = projects.map((_, i)=>(i+1)/projects.length);
   // Array of thresholds to switch between projects as user scrolls
   const [activeIndex, setActiveIndex]= React.useState(0);
     // Keeps track of which project is currently active


     React.useEffect(()=>{
      const unsubscribe = scrollYProgress.onChange((v)=>
      {
        const idx= thresholds.findIndex((t)=> v <=t);
          // Find the first threshold that is greater than or equal to scroll progress
          setActiveIndex(idx === -1 ? thresholds.length -1 : idx);
           // If not found, show the last project
      });
      return () => unsubscribe();
       // Cleanup scroll listener
     },
    [scrollYProgress, thresholds]);


return(
  <section id="projects" className="relative text-white"></section>
)
}
