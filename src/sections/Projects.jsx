import React from "react";
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
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
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
        bgColor: "#0c1e30",
        image: isMobile ? photo1 : img1,
        objectPosition: "center center",
      },
      {
        title: "Asteroid Alerting & Notification System",
        link: "https://github.com/jasmine-1612/Asteroid-Alert",
        bgColor: "#12082a",
        image: isMobile ? photo2 : img2,
        objectPosition: "center center",
      },
      {
        title: "Email Reply Generator",
        link: "https://github.com/jasmine-1612/email-reply-generator",
        bgColor: "#d4775a",
        image: isMobile ? photo3 : img3,
        objectPosition: "center center",
      },
      {
        title: "Bookstore",
        link: "https://github.com/jasmine-1612/bookstore",
        bgColor: "#c8e6ee",
        image: isMobile ? photo4 : img4,
        objectPosition: isMobile ? "center center" : "center top",
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
      <div className="sticky top-0 h-screen flex flex-col items-center justify-between py-8 px-4 overflow-hidden">

        {/* TOP: Section title + animated project name, stacked, no overlap */}
        <div className="w-full flex flex-col items-center gap-1 z-10" style={{ maxWidth: "1200px" }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            My Work
          </h2>
          <div className="h-10 sm:h-14 flex items-center justify-center sm:justify-start w-full">
            <AnimatePresence mode="wait">
              <MH3
                key={activeProject.title}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-[clamp(1rem,3.2vw,2.8rem)] font-bangers italic font-semibold text-white/95 text-center sm:text-left w-full"
              >
                {activeProject.title}
              </MH3>
            </AnimatePresence>
          </div>
        </div>

        {/* MIDDLE: Image crossfade */}
        <div
          className="relative w-full overflow-hidden rounded-xl shadow-2xl md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
          style={{
            maxWidth: "1200px",
            height: isMobile ? "55vh" : "60vh",
            flexShrink: 0,
          }}
        >
          {projects.map((project, idx) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: project.objectPosition,
                opacity: activeIndex === idx ? 1 : 0,
                transition: "opacity 500ms ease",
              }}
              loading="lazy"
            />
          ))}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 1,
              background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%)",
            }}
          />
        </div>

        {/* BOTTOM: Button always visible */}
        <div className="z-10 shrink-0">
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
