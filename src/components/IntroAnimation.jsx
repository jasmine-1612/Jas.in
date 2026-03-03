import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";


export default function IntroAnimation ({onFinish}){
const greetings =[
  "Hello", "नमस्ते", "Hola", "Bonjour",
    "Ciao", "Olá", "Здравствуйте",
    "Merhaba", "Γειά", "Hej", "Hallo", "Salam"
];

const [index, setIndex] = useState(0);
const overlayRef = useRef(null);
const greetingRef = useRef(null);


 useEffect(() => {
  let greetingTimer;

  if(index < greetings.length - 1){
     gsap.fromTo(
      greetingRef.current,
      {opacity: 0 , y: 20},
      {opacity: 1, y:0}
     );

      greetingTimer = setTimeout(() => setIndex(i => i+1), 180)

  }else{
     gsap.fromTo(
       greetingRef.current,
       {opacity : 0 , y: 20},
       {opacity : 1, y: 0, duration: 0.12}
     );

     greetingTimer = setTimeout(() => {
  const tl = gsap.timeline({
    onComplete: () => onFinish && onFinish(),
  });

  tl.to(greetingRef.current, {
    duration: 0.8,
    y: "-100vh",
    ease: "power4.inOut",
  })
  .to(
    overlayRef.current.querySelector("path"),
    {
      duration: 1.2,
      attr: {
        d: "M0,0 L0,300 Q720,900 1440,300 L1440,0 Z"
      },
      ease: "power4.inOut",
    },
    "<"
  );
}, 300);
  }
  return () => clearTimeout(greetingTimer);

},[index, onFinish]
 );

 return(
  <div ref={overlayRef}
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden">
    <h1 ref={greetingRef} className="text-5xl md:text-7xl lg:text-8xl font-bold absolute z-20">
      {greetings[index]}
    </h1>

    <svg className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    preserveAspectRatio="none">
      <path fill="black" d="M0, 0 L0, 900 L1440, 900 L1440, 0 Z"/>

      

    </svg>
    </div>
 );
}