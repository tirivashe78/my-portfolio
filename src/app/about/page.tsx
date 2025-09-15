// src/app/about/page.tsx
"use client";

import React from "react";
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

// --- Skill Pill Component ---
const SkillPill = ({ name }: { name: string }) => (
  <span className="px-3 py-1 border border-blue-500 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition">
    {name}
  </span>
);

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Tirivashe Tinarwo</title>
        <meta
          name="description"
          content="Learn more about Tirivashe Tinarwo, his background, skills, and journey."
        />
      </Head>

      <main className="bg-slate-900 text-white min-h-screen px-6 py-12">
        {/* --- Profile + Personal Info --- */}
        <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="flex justify-center"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotate: 3, scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src="/profile.jpg"
              alt="Tirivashe Tinarwo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h1 variants={fadeIn} className="text-4xl font-bold">
              Hi, I’m Tirivashe Tinarwo
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg leading-relaxed">
              I’m a Software Engineer specializing in modern web applications with a passion
              for clean code, robust architecture, and delightful user experiences.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => (
                <div key={info.label} className="space-y-1">
                  <p className="font-semibold">{info.label}</p>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* --- Technical Skills --- */}
        <section className="max-w-4xl mx-auto mb-16">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {techCategories.map((cat) => (
              <motion.div key={cat.title} variants={fadeIn}>
                <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((tech) => (
                    <SkillPill key={tech} name={tech} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Journey / Timeline --- */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Journey
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {timelineItems.map((item, idx) => (
              <motion.article
                key={item.date + item.title}
                variants={fadeIn}
                whileHover={{ scale: 1.03, y: -6 }}
                className="relative bg-slate-800 p-4 rounded-2xl shadow-xl overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, rotate: -1, transition: { duration: 0.3 } }}
                  className="relative w-full aspect-square rounded-xl overflow-hidden mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                    {item.date}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center gap-3">
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition shadow"
                    >
                      Certificate
                    </a>
                  )}

                  <button
                    type="button"
                    className="ml-auto text-sm px-3 py-1 border border-blue-500 rounded-full text-blue-200 hover:bg-blue-500 hover:text-white transition"
                    onClick={() => alert(`${item.title}\n\n${item.description}`)}
                  >
                    Details
                  </button>
                </div>

                <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
}


// // src/app/about/page.tsx
// "use client";

// import React from "react";
// import Head from "next/head";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import type { Variants, Transition } from "framer-motion";

// // reusable spring transition
// const spring: Transition = {
//   type: "spring",
//   stiffness: 100,
//   damping: 20,
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: spring },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const personalInfo = [
//   { label: "Nationality", value: "Zimbabwean" },
//   { label: "Birthday", value: "21 September 2001" },
//   { label: "Marital Status", value: "Single" },
//   { label: "Religion", value: "Christianity" },
//   { label: "Languages", value: "Shona, English" },
// ];

// const techCategories = [
//   {
//     title: "Programming Languages",
//     items: ["Java", "SQL", "Python"],
//   },
//   {
//     title: "Frameworks & Libraries",
//     items: ["Spring Boot", "JDBC", "Angular", "Next.js"],
//   },
//   {
//     title: "Database Management",
//     items: ["Oracle", "MySQL"],
//   },
//   {
//     title: "API Development",
//     items: ["RESTful APIs"],
//   },
//   {
//     title: "Tools",
//     items: ["Postman", "Maven"],
//   },
//   {
//     title: "Web Development",
//     items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
//   },
// ];

// const timelineItems = [
//   {
//     date: "2020",
//     title: "St Faith’s High School",
//     description:
//       "Completed Advanced-level: Maths, Physics & Computers – 15 points",
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
//     description:
//       "Software Developer Intern  — hands-on experience building real features.",
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
//         {/* Profile + Personal Info */}
//         <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//   {/* Profile Photo with floating + hover effect */}
// <motion.div
//   className="flex justify-center"
//   animate={{
//     y: [0, -12, 0], // gentle float up/down
//   }}
//   transition={{
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   }}
//   whileHover={{
//     rotate: 3, // small tilt
//     scale: 1.03, // subtle lift
//     transition: { duration: 0.3 },
//   }}
// >
//   <img
//     src="/profile.jpg"
//     alt="Tirivashe Tinarwo"
//     className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
//   />
// </motion.div>

//           {/* Bio & Personal Info */}
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
//               I’m a Software Engineer specializing in modern web applications
//               with a passion for clean code, robust architecture, and delightful
//               user experiences.
//             </motion.p>
//             <motion.div
//               variants={fadeIn}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//             >
//               {personalInfo.map((info) => (
//                 <div key={info.label} className="space-y-1">
//                   <p className="font-semibold">{info.label}</p>
//                   <p className="text-gray-300">{info.value}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Technical Skills */}
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
//                     <span
//                       key={tech}
//                       className="px-3 py-1 border border-blue-500 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Journey */}
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
//                 {/* image header with animation */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: idx * 0.2 }}
//                   whileHover={{
//                     scale: 1.05,
//                     rotate: -1,
//                     transition: { duration: 0.3 },
//                   }}
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
//                 <p className="text-gray-300 mb-4 leading-relaxed">
//                   {item.description}
//                 </p>

//                 <div className="flex items-center gap-3">
//                   {item.certificate ? (
//                     <a
//                       href={item.certificate}
//                       download
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition shadow"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M3 14a1 1 0 001 1h12a1 1 0 001-1v-5h-2v4H5v-4H3v5z" />
//                         <path d="M7 6a1 1 0 011-1h4a1 1 0 011 1v5h2V6a3 3 0 00-3-3H10a3 3 0 00-3 3v5h2V6z" />
//                       </svg>
//                       Certificate
//                     </a>
//                   ) : (
//                     <span className="text-sm text-gray-400"></span>
//                   )}

//                   <button
//                     type="button"
//                     className="ml-auto text-sm px-3 py-1 border border-blue-500 rounded-full text-blue-200 hover:bg-blue-500 hover:text-white transition"
//                     onClick={() => {
//                       alert(`${item.title}\n\n${item.description}`);
//                     }}
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



