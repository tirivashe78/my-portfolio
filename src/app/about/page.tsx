"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import { ArrowUp } from "lucide-react"; // ✅ added for scroll-to-top button

// --- Transition ---
const spring: Transition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

// --- Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

// --- Professional Info (cleaned up) ---
const personalInfo = [
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Harare, Zimbabwe" },
  { label: "Nationality", value: "Zimbabwean" },
  { label: "Languages", value: "English, Shona" },
  {
    label: "Focus Areas",
    value: "Software Development, Web Development, IT Support",
  },
];

// --- Tech Skills ---
const techCategories = [
  { title: "Programming Languages", items: ["Java", "Python", "SQL"] },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "Next.js", "React", "Angular (Basic)"],
  },
  { title: "Database Management", items: ["MySQL", "Oracle"] },
  { title: "API Development", items: ["RESTful APIs", "Postman"] },
  {
    title: "Cloud & Tools",
    items: ["Oracle Cloud", "Maven", "Git", "Docker (Basic)"],
  },
  {
    title: "Frontend Craft",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "UI/UX Design"],
  },
];

// --- Timeline / Journey ---
const timelineItems = [
  {
    date: "2020",
    title: "St Faith’s High School",
    description:
      "Completed Advanced-level: Maths, Physics & Computers – 15 points",
    image: "/Fisco.jpg",
  },
  {
    date: "2021",
    title: "University of Zimbabwe",
    description: "B.Sc. Software Engineering — Level 1 and onward.",
    image: "/uz.jpg",
  },
  {
    date: "Aug 2023 – Aug 2024",
    title: "Afrosoft Holdings",
    description:
      "Junior Software Developer -hands-on experience building real features.",
    image: "/afro.jpg",
  },
  {
    date: "2025",
    title: "Graduation",
    description: "B.Sc. Software Engineering — Degree awarded.",
    image: "/grad.jpg",
    certificate: "/degree.jpg",
  },
];

// --- Certifications ---
const certifications = [
  {
    id: "oci-ai-2025",
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    dateRange: "2025",
    type: "Professional Certification",
    file: "/certs/eCertificate_1.jpg",
    notes: "Demonstrates foundational AI and cloud knowledge.",
  },
  {
    id: "data-eng",
    title: "Introduction to Data Engineering and Big Data",
    issuer: "GUVI Geek Networks",
    dateRange: "01/2024 - 12/2024",
    type: "Certificate of Completion",
    file: "/certs/data eng.jpg",
    notes: "Completed coursework and assessments.",
  },
  {
    id: "sql-analytics",
    title: "SQL for Data Analysis",
    issuer: "SkillEcted",
    dateRange: "09/12/2024",
    type: "Certificate of Participation",
    file: "/certs/sql.jpg",
    notes: "Hands-on SQL analytics training.",
  },
  {
    id: "devops",
    title: "DevOps 101",
    issuer: "PW (Physics Wallah)",
    dateRange: "22/11/2024",
    type: "Certificate of Participation",
    file: "/certs/devops.jpg",
    notes: "Participation + quiz pass.",
  },
  {
    id: "ict-hexco",
    title: "Information and Communication Technology",
    issuer: "HEXCO",
    dateRange: "2017",
    type: "Passed with Distinction",
    file: "/certs/hexco ictf.jpg",
    notes: "Distinction in fundamentals.",
  },
  {
    id: "comp-op",
    title: "Computer Operations and Packages",
    issuer: "HEXCO",
    dateRange: "2018",
    type: "Passed with Distinction",
    file: "/certs/hexco cop.jpg",
    notes: "Practical and theoretical assessments.",
  },
];

// --- Skill Pill Component ---
const SkillPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm hover:scale-105 transition">
    {name}
  </span>
);

export default function AboutPage() {
  const [viewCert, setViewCert] = useState<string | null>(null);

  const openInNewTab = (href: string) => {
    if (typeof window !== "undefined")
      window.open(href, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <title>About — Tirivashe Tinarwo</title>
        <meta
          name="description"
          content="Software Engineer passionate about building modern, reliable web solutions and AI-driven systems."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* HERO SECTION */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              className="col-span-1 flex justify-center md:justify-start"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Tirivashe Tinarwo"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              className="col-span-2 space-y-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Hi, I’m Tirivashe Tinarwo
              </motion.h1>

              {/* ✅ Added short professional summary */}
              <motion.p
                variants={fadeIn}
                className="text-lg max-w-2xl text-slate-200"
              >
                I’m a Software Engineer passionate about building intuitive,
                scalable web applications with a strong foundation in backend
                architecture and AI-powered solutions.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl"
              >
                {personalInfo.map((info) => (
                  <div key={info.label}>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="font-medium text-slate-100">{info.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* ✅ Added Core Values section */}
          <section className="mb-12 bg-gradient-to-br from-white/5 to-transparent p-6 rounded-3xl ring-1 ring-white/10 shadow-xl">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              Core Values & Work Philosophy
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-slate-300 leading-relaxed max-w-3xl"
            >
              I believe in crafting software that solves real problems through
              simplicity, performance and accessibility. I value collaboration,
              continuous learning and code that is both elegant and
              maintainable.
            </motion.p>
          </section>

          {/* SKILLS */}
          <section className="mb-12 bg-gradient-to-br from-white/3 to-white/2 p-6 rounded-3xl ring-1 ring-white/6 shadow-xl">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              Technical Skills
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {techCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  variants={fadeIn}
                  className="p-4 rounded-2xl bg-gradient-to-r from-white/2 to-transparent ring-1 ring-white/4"
                >
                  <h3 className="text-lg font-semibold mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map((tech) => (
                      <SkillPill key={tech} name={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="mb-12">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              Certifications & Training
            </motion.h2>

            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c) => (
                <motion.article
                  key={c.id}
                  variants={pop}
                  whileHover={{ y: -6 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 ring-1 ring-white/6 shadow-lg"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-md font-semibold">{c.title}</h3>
                    <p className="text-sm text-slate-300">{c.issuer}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {c.dateRange} • {c.type}
                    </p>
                    <p className="text-sm text-slate-300">{c.notes}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => setViewCert(c.file)}
                        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white text-sm font-medium shadow hover:scale-105 transition"
                      >
                        View
                      </button>
                      <a
                        href={c.file}
                        download
                        className="px-3 py-1.5 rounded-full border border-white/10 text-sm text-slate-100 hover:bg-white/4 transition"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {viewCert && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <div
                  className="absolute inset-0 bg-black/60"
                  onClick={() => setViewCert(null)}
                />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-2xl ring-1 ring-white/6 overflow-hidden"
                >
                  <div className="flex items-center justify-between p-3 bg-slate-800/60">
                    <div className="text-sm text-slate-200">
                      Viewing certificate
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openInNewTab(viewCert)}
                        className="text-sm px-3 py-1 rounded-md border border-white/6"
                      >
                        Open in new tab
                      </button>
                      <button
                        onClick={() => setViewCert(null)}
                        className="text-sm px-3 py-1 rounded-md bg-white/6"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <iframe
                    src={viewCert}
                    title="certificate viewer"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            )}
          </section>

          {/* JOURNEY */}
          <section className="mb-24">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              Journey
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {timelineItems.map((item, idx) => (
                <motion.article
                  key={item.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-700/50 p-0 ring-1 ring-white/6 shadow-2xl"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 bg-gradient-to-r from-blue-500/90 to-purple-500/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                      {item.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-300 mb-4">{item.description}</p>
                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/80 to-blue-500/70 text-white rounded-full text-sm font-medium shadow"
                      >
                        Certificate
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* ✅ Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600/80 hover:bg-blue-600 text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </main>
    </>
  );
}
