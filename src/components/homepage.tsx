"use client";

import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";

// dynamically import tsParticles so it never SSRs
const Particles = dynamic(
  () => import("react-tsparticles").then((mod) => mod.Particles),
  { ssr: false }
);

export default function Homepage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#0f172a" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    },
    particles: {
      color: { value: "#3b82f6" },
      links: { enable: true, color: "#3b82f6", distance: 150, opacity: 0.3 },
      move: { enable: true, speed: 1.5 },
      number: { value: 50, density: { enable: true, area: 800 } },
      size: { value: { min: 1, max: 3 } },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Hi, I’m <span className="text-blue-500">Tirivashe Tinarwo</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl max-w-xl mb-8"
        >
          I’m a <span className="font-semibold">Software Engineer</span> building modern web experiences.
        </motion.p>

        <motion.div variants={item} className="flex space-x-4">
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
    </div>
  );
}
