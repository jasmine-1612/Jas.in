import m1 from "../assets/m1.PNG";
import m2 from "../assets/m2.PNG";
import w1 from "../assets/w1.PNG";
import w2 from "../assets/w2.PNG";

import { motion } from "framer-motion";

const MH2 = motion.h2;
const MiDv = motion.div;

const testimonials =[
  {
    name:"Yash Pandya",
    role:"Software Engineer at Oracle",
    review:"Jasmine is a visionary developer. Her attention to detail and creativity blew us away. Our project was a massive success because of her.",
    img:m1,
  
  },
  {
    name:"Sagnik",
    role:"Software Engineer at Oracle",
    review:"Jasmine worked on integration services using Oracle Service Bus and built reliable API flows between multiple enterprise systems. Her understanding of middleware and service orchestration made the integrations very stable.",
    img:m2,
  },
  {
    name:"Shreya Sinha",
    role:"Software Engineer at Oracle",
    review:"From concept to execution, Jasmine handled everything flawlessly. Her work ethic and innovation are unmatched.",
    img:w1,
  },
  {
    name:"Pooja",
    role:"Software Engineer at Oracle",
    review:"Jasmine helped streamline our service architecture by improving API integrations and middleware workflows. Her work with OSB and backend services significantly improved system reliability.",
    img:w2,
  },


]





function Testimonials(){
  return(
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">

      <MH2 initial={{opacity:0, y:-50}}
       whileInView={{opacity:1, y:0}}   
      viewport={{once:true}}
      transition={{duration:0.6}}
      className="text-4xl font-bold mb-16"
      
      >
          What People Say

      </MH2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((testi,idx) =>(
          <MiDv 
          key={testi.name+idx}
          initial={{opacity:0 , y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:idx * 0.2}}
          viewport={{once:true}}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1">
            <img 
            src={testi.img}
            alt={testi.name}
            className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
            loading="lazy"/>

            <p className="text-gray-200 italic mb-4">
            {testi.review}
            </p>
            <h3 className="text-lg font-semibold">
              {testi.name}
            </h3>

            <p className="text-sm text-gray-400">
              {testi.role}
            </p>

          </MiDv>
        ))}
      </div>

    </section>
  );
}


export default Testimonials;