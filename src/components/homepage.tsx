"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import type { IOptions, RecursivePartial } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter, FaJava, FaWhatsapp } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const spring: Transition = { type: "spring", stiffness: 50, damping: 20 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
};

export default function Homepage() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = {
    background: { color: { value: "#0a1128" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#3b82f6" },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 150,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: { default: "bounce" },
      },
      number: { value: 50, density: { enable: true, area: 800 } },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.8 },
    },
    detectRetina: true,
  };

  // Typewriter Effect
  const fullText = "Hi, I’m Tirivashe Tinarwo";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 120);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 30000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a1128] pt-20">

      {/* 👆 pt-20 ensures image doesn’t go under header */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/40 shadow-[0_0_40px_10px_rgba(59,130,246,0.2)] transform transition hover:scale-105">
            <Image
              src="/me.png"
              alt="Tirivashe Tinarwo"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 767px) 160px, 224px"
              priority
            />
          </div>
        </motion.div>

        {/* Typewriter Text */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 mt-6 whitespace-nowrap"
        >
          <span className="text-blue-400">{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl leading-relaxed">
          I’m a <span className="text-blue-400 font-semibold">Software Engineer</span> {" "}
          {/* <span className="text-blue-300 font-semibold">recent graduate</span> */}
           passionate about building
          <br className="hidden sm:block" />
          modern, interactive and reliable web applications.
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 mt-4 mb-8 max-w-xl leading-relaxed">
          I enjoy solving real-world problems through code and{" "}
          <span className="text-blue-400 font-semibold">continuously learning</span> emerging technologies
          that make the web more human and intelligent.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 text-4xl text-blue-400 mb-8"
        >
          {[FaReact, SiNextdotjs, FaJava, SiJavascript, SiHtml5, SiCss3, SiSpringboot].map((Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-blue-300"
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="/Tiri CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
          >
            Download CV
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-500 rounded-full font-medium text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            View My Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-8 text-3xl text-gray-400"
        >
          {[
            { icon: FaGithub, href: "https://github.com/tirivashe78" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/tirivashe-tinarwo-482aba30a/" },
            { icon: FaWhatsapp, href: "https://wa.me/263713151841" },
          ].map(({ icon: Icon, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -5 }}
              className="hover:text-blue-400 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Blob */}
      <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-28 md:top-20 z-0 opacity-60">
        <svg width="320" height="320" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#g2)"
            d="M43.8,-55.8C56.1,-48.8,63.8,-34.3,63.9,-21.9C64.1,-9.5,56.6,1.8,49.3,12.6C42,23.3,34.9,33.6,24.3,40.8C13.6,48,0.3,52.1,-12.6,56.2C-25.5,60.3,-50.9,64.5,-64.3,56.9C-77.6,49.3,-79,29.9,-78.4,11.7C-77.8,-6.4,-75.2,-23.6,-64.3,-33.1C-53.4,-42.6,-34.2,-44.5,-17.1,-50.3C0,-56,17.9,-65.9,43.8,-55.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}


// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { motion, Variants, Transition } from "framer-motion";
// import type { IOptions, RecursivePartial } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// // Dynamically import particles to prevent SSR mismatch
// const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

// // --- Animation Config ---
// const spring: Transition = { type: "spring", stiffness: 50, damping: 20 };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.3 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: spring },
// };

// export default function Homepage() {
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine);
//   }, []);

//   // --- Particles Configuration ---
// const particlesOptions: RecursivePartial<IOptions> = {
//   background: {
//     color: { value: "#0a1128" }, // Dark blue background
//   },
//   fpsLimit: 60,
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: {
//         enable: true,
//         delay: 0, // Required by IResizeEvent
//       },
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#3b82f6",
//     },
//     links: {
//       enable: true,
//       color: "#3b82f6",
//       distance: 150,
//       opacity: 0.3,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 1.5,
//       direction: "none",
//       random: false,
//       straight: false,
//       outModes: { default: "bounce" },
//     },
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         area: 800,
//       },
//     },
//     size: {
//       value: { min: 1, max: 3 },
//       animation: {
//         enable: false,
//       },
//     },
//     opacity: {
//       value: 0.8,
//       random: false,
//       animation: {
//         enable: false,
//       },
//     },
//   },
//   detectRetina: true,
// };


//   // --- Typewriter Effect ---
//   const fullText = "Hi, I’m Tirivashe Tinarwo";
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;

//     if (!isDeleting && displayText.length < fullText.length) {
//       timeout = setTimeout(() => {
//         setDisplayText(fullText.slice(0, displayText.length + 1));
//       }, 120);
//     } else if (!isDeleting && displayText.length === fullText.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 30000);
//     } else if (isDeleting && displayText.length > 0) {
//       timeout = setTimeout(() => {
//         setDisplayText(fullText.slice(0, displayText.length - 1));
//       }, 80);
//     } else if (isDeleting && displayText.length === 0) {
//       setIsDeleting(false);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-[#0a1128]">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesOptions}
//         className="absolute inset-0 z-0"
//       />

//       {/* Hero Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
//       >
//         {/* Profile Image */}
//         <motion.div variants={itemVariants} className="flex items-center justify-center">
//           <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/40 shadow-2xl transform transition hover:scale-105 -mt-20 md:-mt-28">
//             <Image
//               src="/me.png"
//               alt="Tirivashe Tinarwo"
//               fill
//               style={{ objectFit: "cover" }}
//               sizes="(max-width: 767px) 160px, 224px"
//               priority
//             />
//           </div>
//         </motion.div>

//         {/* Typewriter Text */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 mt-6 md:mt-2 whitespace-nowrap"
//         >
//           <span className="text-blue-400">{displayText}</span>
//           <span className="animate-pulse">|</span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg md:text-2xl max-w-2xl mb-6 text-gray-300 leading-relaxed"
//         >
//           I’m a <span className="font-semibold text-blue-400">Software Engineer</span> and{" "}
//           <span className="font-semibold text-blue-300">recent graduate</span> passionate about
//           creating smooth, interactive, and reliable web applications. I love solving real-world
//           problems through code and continuously learning modern technologies.
//         </motion.p>

//         {/* Second Line */}
//         <motion.p
//           variants={itemVariants}
//           className="text-base md:text-lg text-gray-400 mb-8 max-w-lg"
//         >
//           You can explore my journey, view my{" "}
//           <span className="text-blue-400 font-semibold">CV</span> or check out{" "}
//           <span className="text-blue-400 font-semibold">projects I’ve built</span>.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div variants={itemVariants} className="flex space-x-4">
//           <a
//             href="/Tiri CV.pdf"
//             download
//             className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
//           >
//             Download CV
//           </a>
//           <a
//             href="/projects"
//             className="px-6 py-3 border border-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
//           >
//             View Projects
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Decorative Blob */}
//       <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-28 md:top-20 z-0 opacity-60">
//         <svg width="320" height="320" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//           <defs>
//             <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
//               <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
//               <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#g2)"
//             d="M43.8,-55.8C56.1,-48.8,63.8,-34.3,63.9,-21.9C64.1,-9.5,56.6,1.8,49.3,12.6C42,23.3,34.9,33.6,24.3,40.8C13.6,48,0.3,52.1,-12.6,56.2C-25.5,60.3,-50.9,64.5,-64.3,56.9C-77.6,49.3,-79,29.9,-78.4,11.7C-77.8,-6.4,-75.2,-23.6,-64.3,-33.1C-53.4,-42.6,-34.2,-44.5,-17.1,-50.3C0,-56,17.9,-65.9,43.8,-55.8Z"
//             transform="translate(100 100)"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
