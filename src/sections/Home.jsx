import { useState, useMemo, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png"

const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jasmine-kaur-4149233a3/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/jasmine-1612",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
  "drop-shadow(0 0 8px rgba(124, 58, 237, 0.9)) drop-shadow(0 0 18px rgba(147, 51, 234, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

export default function Home() {
  const roles = useMemo(
    () => ["Software Developer", "Oracle Integration Cloud Consultant"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Cleaner typing effect
  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((prev) => prev + 1);
      } else if (!deleting && subIndex === current.length) {
  setTimeout(() => setDeleting(true), 1000);

      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="h-screen w-full relative overflow-hidden bg-black"
    >
      <ParticlesBackground />

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4C1D95] via-[#9333EA] to-[#7C3AED] opacity-20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 -right-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4C1D95] opacity-30 blur-[140px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Typing Role */}
          <motion.div
            className="mb-4 text-2xl md:text-3xl font-semibold text-white min-h-[1.6em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle h-[1em]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold 
text-transparent bg-clip-text 
bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4C1D95] 
drop-shadow-lg "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hello I&apos;m
            <br />
            <span className="text-white block mt-2">
              Jasmine Kaur
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I specialize in Spring Boot development and bring hands-on
            experience in Oracle Integration Cloud implementations —
            contributing to both backend engineering and enterprise integration projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-lg font-medium text-white 
bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4C1D95] 
hover:scale-105 transition">
              View My Work
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition"
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-10 flex gap-6 text-3xl justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE GLOW */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div
            className="absolute top-1/2 -translate-y-1/2 right-10 w-[350px] h-[600px] rounded-full pointer-events-none"
            style={{
              filter: "blur(40px)",
              opacity: 0.35,
              background:
              
  "conic-gradient(from 0deg, #7C3AED, #9333EA, #4C1D95, #7C3AED)",
            }}
          />
          <motion.img src={avator}
          alt= "Jasmine Kaur avatar"
          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{ right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh"}}
          initial={{ opacity:0 , y:40, scale: 0.95}}
          animate={{opacity:1, y:0, scale:1}}
          transition={{delay:1, duration:1}} />
        </motion.div>
      </div>
    </section>
  );
}