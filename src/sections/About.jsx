import { motion } from "framer-motion";
import p from "../assets/boy.png";


export default function About (){
  
  const glows=[
    "top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] opacity-10 blur-[100px]"
  ]

  return(
    <section id="about"
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
     aria-label="About me">

      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c,i)=>{
          return(
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4C1D95] animate-pulse ${c}`}/>
          );
        })}
        
      </div>



       {/* Layered neon background accents */}

       {/* Content container */}
       <div className=" relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">

         {/* Profile header */}
         <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
         initial={{opacity:0, y:24}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.6}}
         viewport={{once: true ,amount:0.4}}>
          
           {/* Avatar / Card */}
           <motion.div className ="relative w-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 border border-[#1Cd8D2]/25"
           whileHover ={{scale: 1.02}}
           transition={{type: "spring" , stiffness:200 , damping: 18}}
           aria-hidden="true">
           <div className="absolute inset-0"/>
           <img src={p} alt="test" className="w-full h-full object-contain"/>
         </motion.div>

           {/* Name + Role + Bio + CTAs */}

           <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4C1D95]">
              Jasmine Kaur
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
            Backend Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Experienced Software Developer and Oracle Integration Cloud Consultant with hands-on expertise in Spring Boot,
               Java, REST APIs, Microservices, JPA/Hibernate, and SQL for backend application development. Skilled in designing
                and implementing enterprise integrations using Oracle Integration Cloud (OIC), SOAP/REST services and cloud-based workflows.
            </p>
           

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {[
                {label: "Experience", value:"2+ years"},
                {label: "Speciality", value:"Backend Developer"},
                {label: "Focus", value:"Cloud and SpringBoot"}


              ].map((item,i)=>(
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.4, delay:0.05 * i}}
                viewport={{once: true, amount:0.3}}
                
              >

                <div className="text-sm text-gray-400" >{item.label}</div>
                  <div className="text-base font-semibold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
               aria-label="View my projects">
                View Projects

                </a>

              <a href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              aria-label="Get in touch">
                Get in touch
              
              

              </a>
              </div>
              </div>

</motion.div>

  {/* Body copy only — removed skills chip grid */}

  <div className="grid md:grid-cols-1">
    <motion.div className="text-center md:text-left"
    initial={{opacity:0, x:-30}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.6}}
    viewport={{once:true, amount:0.4}}>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        About Me
      </h3>
      <p className="text-purple-500 leading-relaxed text-base sm:text-lg">
        Backend Developer focused on high-performance Java applications.
Hands-on experience with Oracle integration tools.
Turning complex tech into simple content for developers.

      </p>

      <p className="mt-4 text-gray-400 text-base sm:text-lg">
        
  I love transforming ideas into scalable backend systems and intuitive web experiences that deliver real-world impact.
      </p>
    </motion.div>
  </div>
       </div>

     </section>
  );
}

