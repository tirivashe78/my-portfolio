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

const projects: Project[] = [
    {
    title: "Double Red Rose",
    description:
      "A personal project I embarked on as a member of Affluence Global, a company that sells the Double Red Rose product. The project was both a learning journey and a way to boost my sales while referring as many people to the product as possible. Built with React and Next.js for a modern, responsive experience.",
    tech: ["React", "Next.js"],
    imageUrl: "/AG.png",
    liveUrl: "https://doubleredrose.netlify.app",
    repoUrl: "https://github.com/tirivashe78/double-red-rose",
  },
  {
  title: "Leave Management System",
  description:
    "A full-stack application built to manage employee leave requests efficiently. Features include role-based access for admins and employees, automated leave approval workflow, and notifications. Built with Spring Boot, MySQL, and React for a seamless experience.",
  tech: ["Spring Boot", "MySQL", "React", "Spring Security"],
  imageUrl: "/leave-management-software.webp",
  // liveUrl: "https://your-live-leave-app-url.com", // replace with actual live URL if available
  repoUrl: "https://github.com/tirivashe78/leave-manager",
},

{
  title: "Portfolio Website",
  description:
    "My personal portfolio showcasing my projects, skills, and experience. Built with React and Next.js to provide a modern, responsive, and visually appealing interface for potential clients and employers.",
  tech: ["React", "Next.js", "Tailwind CSS"],
  imageUrl: "/Screenshot 2025-10-08 132731.png",
  liveUrl: "https://tirivashet.vercel.app",
  repoUrl: "https://github.com/tirivashe78/my-portfolio",
},

  {
    title: "PSC Project",
    description:
      "A team-based project developed during my internship at Afrosoft Holdings. I contributed primarily to the backend, working with Java, Spring Boot, Oracle Database, and Jasper Reports. This experience strengthened my skills in enterprise-level development and collaborative software engineering.",
    tech: ["Java", "Spring Boot", "Oracle DB", "Jasper Reports"],
    imageUrl: "/projects/psclogo.jpeg",
    repoUrl: "https://github.com/your-username/psc-project",
  },
  {
    title: "Biometric Fingerprint Based Voting System with AI Anomaly Detection and Fraud Prevention",
    description:
      "My final-year project focused on building a secure voting platform that integrates biometric fingerprint authentication with AI-driven anomaly detection to prevent electoral fraud. The system leverages machine learning techniques such as Isolation Forest to detect suspicious voting behavior. This project earned me a 2.1 grade and strengthened my expertise in combining software engineering with applied AI for real-world security challenges.",
    tech: ["Next.js", "Python", "Scikit-Learn", "Isolation Forest", "Spring Boot"],
    imageUrl: "/projects/logo2.png",
    // liveUrl: "https://your-voting-demo.vercel.app",
    repoUrl: "https://github.com/tirivashe78/my-biometric-voting-system",
  },
  {
    title: "WorkTrack",
    description:
      "An internship-year project developed as a task management application for employees. The system was designed to help organizations track employee tasks and monitor work progress in real time. I contributed to building the backend with Java, Spring Boot, and MySQL, while the frontend was powered by AngularJS. This project enhanced my skills in enterprise application development and workplace productivity tools.",
    tech: ["Spring Boot", "Java", "MySQL", "AngularJS"],
    imageUrl: "/projects/worktrack.jpg",
    // liveUrl: "https://your-worktrack-demo.vercel.app",
    repoUrl: "https://github.com/tirivashe78/work-track-backend",
  },
  {
    title: "Fitness Application",
    description:
      "A full-stack fitness tracking application that allows users to manage workouts, track progress, and monitor health metrics. Built with React, Next.js, Spring Boot, and MySQL for a seamless and responsive experience.",
    tech: ["Spring Boot", "Java", "MySQL", "React", "Next.js"],
    imageUrl: "/projects/Fitness.png",
    // liveUrl: "https://your-fitness-app.vercel.app",
    repoUrl: "https://github.com/tirivashe78/fitness-tracker",
  },

];

// --- Transitions & Variants ---
const spring: Transition = { type: "spring" as const, stiffness: 80, damping: 20 };
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: spring },
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

      <main className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen px-6 py-12">
 <motion.h1
  className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  My Projects
</motion.h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-transparent hover:border-blue-400 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="relative h-52 w-full">
                <Image src={proj.imageUrl} alt={proj.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-6 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-700">
                <h2 className="text-2xl font-semibold mb-3">{proj.title}</h2>
                <p className="text-sm leading-relaxed mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transform transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 rounded-full text-sm font-medium hover:bg-green-600 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium hover:bg-blue-600 transition"
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
