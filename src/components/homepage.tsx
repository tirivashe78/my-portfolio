"use client";

import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import type { IOptions, RecursivePartial } from "tsparticles-engine";
import { loadFull } from "tsparticles";

// Dynamically load the canvas so there’s no SSR/client mismatch
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

// Spring transition for your text
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
  // ← engine typed as any to bypass the two‐package mismatch
  const particlesInit = useCallback(async (engine: any) => {
    // cast to any so loadFull doesn’t complain
    await loadFull(engine);
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = {
    background: { color: { value: "#0f172a" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true, delay: 0 },
      },
    },
    particles: {
      color: { value: "#3b82f6" },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 150,
        opacity: 0.3,
      },
      move: { enable: true, speed: 1.5 },
      number: { value: 50, density: { enable: true, area: 800 } },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

      {/* Main hero content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        {/* PROFILE IMAGE - placed ABOVE the headline so it appears on mobile and desktop */}
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl transform transition hover:scale-105 -mt-20 md:-mt-28">
            {/*
              Place your processed (transparent) image at /public/me.png
              Recommended: square source (1024x1024), webp/png with alpha
            */}
            <Image src="/me.png" alt="Tirivashe Tinarwo" fill style={{ objectFit: "cover" }} sizes="(max-width: 767px) 160px, 224px" priority />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold mb-2 mt-6 md:mt-2">
          Hi, I’m <span className="text-blue-500">Tirivashe Tinarwo</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base md:text-2xl max-w-xl mb-6">
          I’m a <span className="font-semibold">Software Engineer</span> building modern web experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex space-x-4">
          <a
            href="/Tiri CV.pdf"
            download
            className="px-6 py-3 bg-blue-500 rounded-full font-medium hover:bg-blue-600 transition"
          >
            Download CV
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      {/* OPTIONAL: decorative blob behind the image for extra pop (absolute so it doesn't push layout)
          It's positioned with negative translate to sit behind the circular photo even on mobile.
      */}
      <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-28 md:top-20 z-0">
        <svg width="320" height="320" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path fill="url(#g2)" d="M43.8,-55.8C56.1,-48.8,63.8,-34.3,63.9,-21.9C64.1,-9.5,56.6,1.8,49.3,12.6C42,23.3,34.9,33.6,24.3,40.8C13.6,48,0.3,52.1,-12.6,56.2C-25.5,60.3,-50.9,64.5,-64.3,56.9C-77.6,49.3,-79,29.9,-78.4,11.7C-77.8,-6.4,-75.2,-23.6,-64.3,-33.1C-53.4,-42.6,-34.2,-44.5,-17.1,-50.3C0,-56,17.9,-65.9,43.8,-55.8Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
}


// // src/components/homepage.tsx
// "use client";

// import React, { useCallback } from "react";
// import dynamic from "next/dynamic";
// import { motion, Variants, Transition } from "framer-motion";
// import type { IOptions, RecursivePartial } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// // Dynamically load the canvas so there’s no SSR/client mismatch
// const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

// // Spring transition for your text
// const spring: Transition = { type: "spring", stiffness: 50, damping: 20 };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show:   { opacity: 1, transition: { staggerChildren: 0.3 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show:   { opacity: 1, y: 0, transition: spring },
// };

// export default function Homepage() {
//   // ← engine typed as any to bypass the two‐package mismatch
//   const particlesInit = useCallback(async (engine: any) => {
//     // cast to any so loadFull doesn’t complain
//     await loadFull(engine);
//   }, []);

//   const particlesOptions: RecursivePartial<IOptions> = {
//     background: { color: { value: "#0f172a" } },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: { enable: true, mode: "repulse" },
//         // include delay to satisfy IResizeEvent
//         resize:   { enable: true, delay: 0 },
//       },
//     },
//     particles: {
//       color: { value: "#3b82f6" },
//       links: {
//         enable:  true,
//         color:   "#3b82f6",
//         distance: 150,
//         opacity: 0.3,
//       },
//       move:   { enable: true, speed: 1.5 },
//       number: { value: 50, density: { enable: true, area: 800 } },
//       size:   { value: { min: 1, max: 3 } },
//     },
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesOptions}
//         className="absolute inset-0 z-0"
//       />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
//       >
//         <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-4">
//           Hi, I’m <span className="text-blue-500">Tirivashe Tinarwo</span>
//         </motion.h1>

//         <motion.p variants={itemVariants} className="text-lg md:text-2xl max-w-xl mb-8">
//           I’m a <span className="font-semibold">Software Engineer</span> building modern web experiences.
//         </motion.p>

//         <motion.div variants={itemVariants} className="flex space-x-4">
//           <a
//             href="/Tiri CV.pdf"
//             download
//             className="px-6 py-3 bg-blue-500 rounded-full font-medium hover:bg-blue-600 transition"
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
//     </div>
//   );
// }
