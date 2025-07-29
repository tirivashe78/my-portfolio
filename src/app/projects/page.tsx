// src/app/projects/page.tsx
"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

// Move this out of the page exports so it doesn't conflict with Next.js Page API
const projects: Project[] = [
  {
    title: "PSC Project",
    description: "Internship at Afrosoft developing client solutions.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/psclogo.jpeg",
    repoUrl: "https://github.com/your-username/psc-project",
  },
  {
    title: "Biometric Fingerprint Based Voting System with AI Anomaly Detection and Fraud Prevention",
    description: "Final‑year project: secure voting with ML‑driven fraud alerts.",
    tech: ["Next.js", "Python", "Scikit‑Learn", "Isolation Forest","Springboot"],
    imageUrl: "/projects/logo2.png",
    liveUrl: "https://your-voting-demo.vercel.app",
    repoUrl: "https://github.com/tirivashe78/my-biometric-voting-system",
  },
  {
    title: "WorkTrack",
    description: "Internship project: task management app for employees.",
    tech: ["Springboot", "Java", "MySQL", "angularjs"],
    imageUrl: "/projects/worktrack.jpg",
    liveUrl: "https://your-worktrack-demo.vercel.app",
    repoUrl: "https://github.com/tirivashe78/work-track-backend",
  },
  {
  title: "Fitness Application",
  description:
    "A full-stack fitness tracking application that allows users to manage workouts, track progress, and monitor health metrics. Built with React, Next.js, Spring Boot, and MySQL for a seamless and responsive experience.",
  tech: ["Spring Boot", "Java", "MySQL", "React", "Next.js"],
  imageUrl: "/projects/fitness.png",
  liveUrl: "https://your-fitness-app.vercel.app", // Replace with actual live URL when deployed
  repoUrl: "https://github.com/tirivashe78/fitness-tracker",
},
];

// Define a properly typed spring transition
const spring: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
};

// Annotate variants as Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects — Tirivashe Tinarwo</title>
        <meta
          name="description"
          content="A showcase of projects by Tirivashe Tinarwo, including internship and final‑year work."
        />
      </Head>

      <main className="bg-slate-800 text-white min-h-screen px-6 py-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              className="bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
                <p className="text-sm leading-relaxed mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-blue-500 rounded-full hover:bg-blue-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
