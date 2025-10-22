"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import { loadFull } from "tsparticles";
import type { IOptions, RecursivePartial } from "tsparticles-engine";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

// --- Motion Variants ---
const spring: Transition = { type: "spring", stiffness: 60, damping: 18 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: spring },
};

// --- Component ---
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
      color: { value: "#60a5fa" },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 150,
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
      number: { value: 55, density: { enable: true, area: 800 } },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.7 },
    },
    detectRetina: true,
  };

  // --- Typewriter Effect ---
  const fullText = "Hi, I’m Tirivashe Tinarwo";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (displayText.length < fullText.length) {
      timeout = setTimeout(
        () => setDisplayText(fullText.slice(0, displayText.length + 1)),
        100
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText]);

  return (
    <main className="relative w-full min-h-screen bg-[#0a1128] text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-[0_0_40px_10px_rgba(59,130,246,0.25)] hover:scale-105 transition"
        >
          <Image
            src="/me.png"
            alt="Portrait of Tirivashe Tinarwo, Software Engineer"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>

        {/* Typewriter Text */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
        >
          {displayText}
          <span className="animate-pulse text-blue-400">|</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          I’m a{" "}
          <span className="text-blue-400 font-semibold">Software Engineer</span>{" "}
          passionate about crafting interactive, scalable and elegant web
          applications.
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-gray-400 max-w-xl text-base md:text-lg"
        >
          I love solving real-world problems through clean code and{" "}
          <span className="text-blue-400 font-semibold">continuous learning</span>{" "}
          in emerging technologies.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mt-10 text-4xl text-blue-400"
        >
          {[
            FaReact,
            SiNextdotjs,
            SiTypescript,
            FaJava,
            SiSpringboot,
            SiTailwindcss,
            SiJavascript,
            SiHtml5,
            SiCss3,
          ].map((Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-blue-300"
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="/Tiri CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold hover:opacity-90 transition shadow-lg shadow-blue-600/20"
          >
            Download CV
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-blue-400 rounded-full font-semibold text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-10 text-3xl text-gray-400"
        >
          {[
            { icon: FaGithub, href: "https://github.com/tirivashe78" },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/tirivashe-tinarwo-482aba30a/",
            },
            { icon: FaWhatsapp, href: "https://wa.me/263713151841" },
          ].map(({ icon: Icon, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="hover:text-blue-400 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="relative z-10 bg-[#0a1128] py-20 px-6 text-center border-t border-blue-900/30">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          I specialize in building secure and performant web applications using
          modern stacks like{" "}
          <span className="text-blue-400 font-semibold">
            React, Next.js, Spring Boot
          </span>{" "}
          and cloud-ready APIs. I love blending design with functionality to
          craft meaningful user experiences that deliver impact.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 text-center py-16 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-900/40 backdrop-blur-md border-t border-blue-800/40">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Let’s Build Something Together
        </h3>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}

// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { motion, Variants, Transition } from "framer-motion";
// import type { IOptions, RecursivePartial } from "tsparticles-engine";
// import { loadFull } from "tsparticles";
// import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter, FaJava, FaWhatsapp } from "react-icons/fa";
// import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";

// const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

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

//   const particlesOptions: RecursivePartial<IOptions> = {
//     background: { color: { value: "#0a1128" } },
//     fpsLimit: 60,
//     interactivity: {
//       events: { onHover: { enable: true, mode: "repulse" }, resize: true },
//       modes: { repulse: { distance: 100, duration: 0.4 } },
//     },
//     particles: {
//       color: { value: "#3b82f6" },
//       links: {
//         enable: true,
//         color: "#3b82f6",
//         distance: 150,
//         opacity: 0.3,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 1.5,
//         outModes: { default: "bounce" },
//       },
//       number: { value: 50, density: { enable: true, area: 800 } },
//       size: { value: { min: 1, max: 3 } },
//       opacity: { value: 0.8 },
//     },
//     detectRetina: true,
//   };

//   // Typewriter Effect
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
//     <div className="relative w-full min-h-screen overflow-hidden bg-[#0a1128] pt-20">

//       {/* 👆 pt-20 ensures image doesn’t go under header */}
//       <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
//       >
//         {/* Profile Image */}
//         <motion.div variants={itemVariants} className="flex items-center justify-center">
//           <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/40 shadow-[0_0_40px_10px_rgba(59,130,246,0.2)] transform transition hover:scale-105">
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
//           className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 mt-6 whitespace-nowrap"
//         >
//           <span className="text-blue-400">{displayText}</span>
//           <span className="animate-pulse">|</span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl leading-relaxed">
//           I’m a <span className="text-blue-400 font-semibold">Software Engineer</span> {" "}
//           {/* <span className="text-blue-300 font-semibold">recent graduate</span> */}
//            passionate about building
//           <br className="hidden sm:block" />
//           modern, interactive and reliable web applications.
//         </motion.p>

//         {/* Description */}
//         <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 mt-4 mb-8 max-w-xl leading-relaxed">
//           I enjoy solving real-world problems through code and{" "}
//           <span className="text-blue-400 font-semibold">continuously learning</span> emerging technologies
//           that make the web more human and intelligent.
//         </motion.p>

//         {/* Tech Stack Icons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center gap-6 text-4xl text-blue-400 mb-8"
//         >
//           {[FaReact, SiNextdotjs, FaJava, SiJavascript, SiHtml5, SiCss3, SiSpringboot].map((Icon, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.3, rotate: 10 }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="cursor-pointer hover:text-blue-300"
//             >
//               <Icon />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Buttons */}
//         <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
//           <a
//             href="/Tiri CV.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
//           >
//             Download CV
//           </a>
//           <a
//             href="/projects"
//             className="px-6 py-3 border border-blue-500 rounded-full font-medium text-blue-400 hover:bg-blue-500 hover:text-white transition"
//           >
//             View My Projects
//           </a>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center gap-6 mt-8 text-3xl text-gray-400"
//         >
//           {[
//             { icon: FaGithub, href: "https://github.com/tirivashe78" },
//             { icon: FaLinkedin, href: "https://www.linkedin.com/in/tirivashe-tinarwo-482aba30a/" },
//             { icon: FaWhatsapp, href: "https://wa.me/263713151841" },
//           ].map(({ icon: Icon, href }, idx) => (
//             <motion.a
//               key={idx}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.3, y: -5 }}
//               className="hover:text-blue-400 transition"
//             >
//               <Icon />
//             </motion.a>
//           ))}
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
