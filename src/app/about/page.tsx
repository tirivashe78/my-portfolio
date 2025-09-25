"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

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

// --- Personal Info ---
const personalInfo = [
  { label: "Nationality", value: "Zimbabwean" },
  { label: "Birthday", value: "21 September 2001" },
  { label: "Marital Status", value: "Single" },
  { label: "Religion", value: "Christianity" },
  { label: "Languages", value: "Shona, English" },
];

// --- Tech Skills ---
const techCategories = [
  { title: "Programming Languages", items: ["Java", "SQL", "Python"] },
  { title: "Frameworks & Libraries", items: ["Spring Boot", "JDBC", "Angular", "Next.js"] },
  { title: "Database Management", items: ["Oracle", "MySQL"] },
  { title: "API Development", items: ["RESTful APIs"] },
  { title: "Tools", items: ["Postman", "Maven"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
];

// --- Timeline / Journey ---
const timelineItems = [
  {
    date: "2020",
    title: "St Faith’s High School",
    description: "Completed Advanced-level: Maths, Physics & Computers – 15 points",
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
    description: "Software Developer Intern — hands-on experience building real features.",
    image: "/afro.jpg",
  },
  {
    date: "2025",
    title: "Graduation",
    description: "B.Sc. Software Engineering — Graduation & degree awarded.",
    image: "/grad.jpg",
    certificate: "/degree.jpg",
  },
];

// --- Certifications (no thumbnails) ---
const certifications = [
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
    id: "ict-hexco",
    title: "Information and Communication Technology",
    issuer: "HEXCO",
    dateRange: "01/2017 - 10/2017",
    type: "Passed with Distinction",
    file: "/certs/hexco ictf.jpg",
    notes: "Distinction in fundamentals.",
  },
  {
    id: "comp-op",
    title: "Computer Operations and Packages",
    issuer: "HEXCO",
    dateRange: "01/2017 - 10/2018",
    type: "Passed with Distinction",
    file: "/certs/hexco cop.jpg",
    notes: "Practical and theoretical assessments.",
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
    id: "sql-analytics",
    title: "SQL for Data Analysis",
    issuer: "SkillEcted",
    dateRange: "09/12/2024",
    type: "Certificate of Participation",
    file: "/certs/sql.jpg",
    notes: "Participation + quiz pass.",
  },
];

// --- Skill Pill Component ---
const SkillPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/6 backdrop-blur-sm hover:transform hover:-translate-y-0.5 transition">
    {name}
  </span>
);

export default function AboutPage() {
  const [viewCert, setViewCert] = useState<string | null>(null);

  const openInNewTab = (href: string) => {
    if (typeof window !== "undefined") window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Head>
        <title>About — Tirivashe Tinarwo</title>
        <meta
          name="description"
          content="Learn more about Tirivashe Tinarwo, his background, skills, and journey."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* HERO */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              className="col-span-1 flex justify-center md:justify-start"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ring-white/6 shadow-2xl">
                <Image src="/profile.jpg" alt="Tirivashe Tinarwo" fill style={{ objectFit: "cover" }} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              className="col-span-2 space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold">
                Hi, I’m Tirivashe Tinarwo
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg max-w-2xl text-slate-200">
                I’m a Software Engineer focused on building modern web apps — clean code, good
                architecture and UI that delights. I enjoy backend systems and frontend polish
                in equal measure.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
                {personalInfo.map((info) => (
                  <div key={info.label} className="space-y-1">
                    <p className="text-xs text-slate-300 uppercase tracking-wide">{info.label}</p>
                    <p className="font-medium text-slate-100">{info.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* SKILLS */}
          <section className="mb-12 bg-gradient-to-br from-white/3 to-white/2 p-6 rounded-3xl ring-1 ring-white/6 shadow-xl">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" className="text-2xl md:text-3xl font-semibold mb-6">
              Technical Skills
            </motion.h2>

            <motion.div variants={stagger} initial="hidden" whileInView="show" className="grid gap-6 md:grid-cols-2">
              {techCategories.map((cat) => (
                <motion.div key={cat.title} variants={fadeIn} className="p-4 rounded-2xl bg-gradient-to-r from-white/2 to-transparent ring-1 ring-white/4">
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

          {/* CERTIFICATIONS (no thumbnails) */}
          <section className="mb-12">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" className="text-2xl md:text-3xl font-semibold mb-6">
              Certifications & Training
            </motion.h2>

            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c) => (
                <motion.article key={c.id} variants={pop} whileHover={{ y: -6 }} className="p-4 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 ring-1 ring-white/6 shadow-lg">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-md font-semibold">{c.title}</h3>
                        <p className="text-sm text-slate-300">{c.issuer}</p>
                        <p className="text-xs text-slate-400 mt-1">{c.dateRange} • {c.type}</p>
                      </div>

                      <div className="ml-4 text-xs text-slate-400">ID: {c.id}</div>
                    </div>

                    <p className="text-sm text-slate-300">{c.notes}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <button onClick={() => setViewCert(c.file)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white text-sm font-medium shadow hover:scale-105 transition">
                        View
                      </button>

                      <a href={c.file} download className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 text-sm text-slate-100 hover:bg-white/4 transition">
                        Download
                      </a>

                      {/* <div className="ml-auto text-xs text-slate-400">Participation: {c.type.includes('Participation') ? 'Yes' : 'No'}</div> */}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Certificate viewer modal */}
            {viewCert && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-black/60" onClick={() => setViewCert(null)} />
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.25 }} className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-2xl ring-1 ring-white/6 overflow-hidden">
                  <div className="flex items-center justify-between p-3 bg-slate-800/60">
                    <div className="text-sm text-slate-200">Viewing certificate</div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => openInNewTab(viewCert)} className="text-sm px-3 py-1 rounded-md border border-white/6">Open in new tab</button>
                      <button onClick={() => setViewCert(null)} className="text-sm px-3 py-1 rounded-md bg-white/6">Close</button>
                    </div>
                  </div>

                  <div className="w-full h-full">
                    {/* iframe will render PDFs or images if available */}
                    <iframe src={viewCert} title="certificate viewer" className="w-full h-full" />
                  </div>
                </motion.div>
              </div>
            )}
          </section>

          {/* JOURNEY / TIMELINE (square images with subtle animation) */}
          <section className="mb-24">
            <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" className="text-2xl md:text-3xl font-semibold mb-6">
              Journey
            </motion.h2>

            <motion.div variants={stagger} initial="hidden" whileInView="show" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {timelineItems.map((item, idx) => (
                <motion.article key={item.date + item.title} variants={fadeIn} whileHover={{ scale: 1.03, y: -6 }} className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-700/50 p-0 ring-1 ring-white/6 shadow-2xl">
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.12 }} whileHover={{ scale: 1.03 }} className="relative w-full aspect-square">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 bg-gradient-to-r from-blue-500/90 to-purple-500/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                      {item.date}
                    </div>
                  </motion.div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-300 mb-4">{item.description}</p>

                    <div className="flex items-center gap-3">
                      {item.certificate && (
                        <a href={item.certificate} download className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/80 to-blue-500/70 text-white rounded-full text-sm font-medium shadow">
                          Certificate
                        </a>
                      )}

                      <button type="button" className="ml-auto text-sm px-3 py-1 border border-white/8 rounded-full text-slate-100 hover:bg-white/4 transition" onClick={() => alert(`"${item.title}"

${item.description}`)}>
                        Details
                      </button>
                    </div>
                  </div>

                  <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                </motion.article>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}



// // src/app/about/page.tsx
// "use client";

// import React from "react";
// import Head from "next/head";
// import Image from "next/image";
// import { motion, Variants, Transition } from "framer-motion";

// // --- Transition ---
// const spring: Transition = {
//   type: "spring" as const,
//   stiffness: 100,
//   damping: 20,
// };

// // --- Variants ---
// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: spring },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// // --- Personal Info ---
// const personalInfo = [
//   { label: "Nationality", value: "Zimbabwean" },
//   { label: "Birthday", value: "21 September 2001" },
//   { label: "Marital Status", value: "Single" },
//   { label: "Religion", value: "Christianity" },
//   { label: "Languages", value: "Shona, English" },
// ];

// // --- Tech Skills ---
// const techCategories = [
//   { title: "Programming Languages", items: ["Java", "SQL", "Python"] },
//   { title: "Frameworks & Libraries", items: ["Spring Boot", "JDBC", "Angular", "Next.js"] },
//   { title: "Database Management", items: ["Oracle", "MySQL"] },
//   { title: "API Development", items: ["RESTful APIs"] },
//   { title: "Tools", items: ["Postman", "Maven"] },
//   { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
// ];

// // --- Timeline / Journey ---
// const timelineItems = [
//   {
//     date: "2020",
//     title: "St Faith’s High School",
//     description: "Completed Advanced-level: Maths, Physics & Computers – 15 points",
//     image: "/Fisco.jpg",
//   },
//   {
//     date: "2021",
//     title: "University of Zimbabwe",
//     description: "B.Sc. Software Engineering — Level 1 and onward.",
//     image: "/uz.jpg",
//   },
//   {
//     date: "Aug 2023 – Aug 2024",
//     title: "Afrosoft Holdings",
//     description: "Software Developer Intern — hands-on experience building real features.",
//     image: "/afro.jpg",
//   },
//   {
//     date: "2025",
//     title: "Graduation",
//     description: "B.Sc. Software Engineering — Graduation & degree awarded.",
//     image: "/grad.jpg",
//     certificate: "/degree.jpg",
//   },
// ];

// // --- Skill Pill Component ---
// const SkillPill = ({ name }: { name: string }) => (
//   <span className="px-3 py-1 border border-blue-500 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition">
//     {name}
//   </span>
// );

// export default function AboutPage() {
//   return (
//     <>
//       <Head>
//         <title>About — Tirivashe Tinarwo</title>
//         <meta
//           name="description"
//           content="Learn more about Tirivashe Tinarwo, his background, skills, and journey."
//         />
//       </Head>

//       <main className="bg-slate-900 text-white min-h-screen px-6 py-12">
//         {/* --- Profile + Personal Info --- */}
//         <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           <motion.div
//             className="flex justify-center"
//             animate={{
//               y: [0, -12, 0],
//             }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             whileHover={{ rotate: 3, scale: 1.03, transition: { duration: 0.3 } }}
//           >
//             <img
//               src="/profile.jpg"
//               alt="Tirivashe Tinarwo"
//               className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
//             />
//           </motion.div>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <motion.h1 variants={fadeIn} className="text-4xl font-bold">
//               Hi, I’m Tirivashe Tinarwo
//             </motion.h1>
//             <motion.p variants={fadeIn} className="text-lg leading-relaxed">
//               I’m a Software Engineer specializing in modern web applications with a passion
//               for clean code, robust architecture, and delightful user experiences.
//             </motion.p>

//             <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {personalInfo.map((info) => (
//                 <div key={info.label} className="space-y-1">
//                   <p className="font-semibold">{info.label}</p>
//                   <p className="text-gray-300">{info.value}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* --- Technical Skills --- */}
//         <section className="max-w-4xl mx-auto mb-16">
//           <motion.h2
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-3xl font-semibold mb-6"
//           >
//             Technical Skills
//           </motion.h2>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {techCategories.map((cat) => (
//               <motion.div key={cat.title} variants={fadeIn}>
//                 <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {cat.items.map((tech) => (
//                     <SkillPill key={tech} name={tech} />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* --- Journey / Timeline --- */}
//         <section className="max-w-5xl mx-auto">
//           <motion.h2
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-3xl font-semibold mb-6"
//           >
//             Journey
//           </motion.h2>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//           >
//             {timelineItems.map((item, idx) => (
//               <motion.article
//                 key={item.date + item.title}
//                 variants={fadeIn}
//                 whileHover={{ scale: 1.03, y: -6 }}
//                 className="relative bg-slate-800 p-4 rounded-2xl shadow-xl overflow-hidden"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: idx * 0.2 }}
//                   whileHover={{ scale: 1.05, rotate: -1, transition: { duration: 0.3 } }}
//                   className="relative w-full aspect-square rounded-xl overflow-hidden mb-4"
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     style={{ objectFit: "cover" }}
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     priority={idx < 2}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                   <div className="absolute left-4 top-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
//                     {item.date}
//                   </div>
//                 </motion.div>

//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

//                 <div className="flex items-center gap-3">
//                   {item.certificate && (
//                     <a
//                       href={item.certificate}
//                       download
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition shadow"
//                     >
//                       Certificate
//                     </a>
//                   )}

//                   <button
//                     type="button"
//                     className="ml-auto text-sm px-3 py-1 border border-blue-500 rounded-full text-blue-200 hover:bg-blue-500 hover:text-white transition"
//                     onClick={() => alert(`${item.title}\n\n${item.description}`)}
//                   >
//                     Details
//                   </button>
//                 </div>

//                 <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
//               </motion.article>
//             ))}
//           </motion.div>
//         </section>
//       </main>
//     </>
//   );
// }

