import React from "react";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from "framer-motion";

import img1 from "../assets/img1.PNG";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img4.png";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const MH3 = motion.h3;

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      mql.addListener(handler);
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

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = React.useRef(null);

  const projects = React.useMemo(
    () => [
      {
        title: "Mutual Fund Platform",
        link: "https://github.com/jasmine-1612/Mutual-Fund-Platform-backend",
        // EverGrow dark navy — matches both desktop (img1) and mobile (photo1)
        bgColor: "#0c1e30",
        image: isMobile ? photo1 : img1,
        // Mobile photo1 has letterbox — zoom into center
        objectPosition: isMobile ? "center center" : "center center",
      },
      {
        title: "Asteroid Alerting & Notification System",
        link: "https://github.com/jasmine-1612/Asteroid-Alert",
        // Deep space purple — matches img2 / photo2
        bgColor: "#12082a",
        image: isMobile ? photo2 : img2,
        objectPosition: isMobile ? "center center" : "center center",
      },
      {
        title: "Email Reply Generator",
        link: "https://github.com/jasmine-1612/email-reply-generator",
        // Warm peach/salmon — matches img3 / photo3 background
        bgColor: "#d4775a",
        image: isMobile ? photo3 : img3,
        objectPosition: isMobile ? "center center" : "center center",
      },
      {
        title: "Online Bookstore",
        link: "https://github.com/jasmine-1612/bookstore",
        // Sky-to-deep blue — matches the img4 gradient top
        bgColor: "#c8e6ee",
        image: isMobile ? photo4 : img4,
        objectPosition: isMobile ? "center center" : "center center",
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = React.useState(0);

   useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 500ms ease",
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Section Title */}
        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            isMobile ? "mt-3" : "mt-5"
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <MH3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-[clamp(1.5rem,4vw,3.5rem)] text-white/95 sm:absolute sm:-top-21 sm:left-[55%] lg:left-[5%] sm:mb-0 font-bangers italic font-semibold ${
                      isMobile ? "-mt-25" : ""
                    }`}
                    style={{
                      zIndex: 5,
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {project.title}
                  </MH3>
                )}
              </AnimatePresence>

              {/* Image box */}
              <div
                className={`relative w-full overflow-hidden shadow-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                  isMobile
                    ? "mb-6 rounded-lg"
                    : "mb-10 sm:mb-12 rounded-xl"
                } h-[61vh] sm:h-[65vh]`}
                style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: project.objectPosition,
                    zIndex: 10,
                  }}
                  loading="lazy"
                />

                {/* Subtle vignette overlay */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    zIndex: 11,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View Project button */}
        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="_blank"
              rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={`View ${activeProject?.title}`}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
