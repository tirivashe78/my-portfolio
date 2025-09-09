// src/app/about/page.tsx
"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

// reusable spring transition
const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const personalInfo = [
  { label: "Nationality", value: "Zimbabwean" },
  { label: "Birthday", value: "21 September 2001" },
  { label: "Marital Status", value: "Single" },
  { label: "Religion", value: "Christianity" },
  { label: "Languages", value: "Shona, English" },
];

const techCategories = [
  {
    title: "Programming Languages",
    items: ["Java", "SQL", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "JDBC", "Angular", "Next.js"],
  },
  {
    title: "Database Management",
    items: ["Oracle", "MySQL"],
  },
  {
    title: "API Development",
    items: ["RESTful APIs"],
  },
  {
    title: "Tools",
    items: ["Postman", "Maven"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
];

// Timeline with images + optional certificate downloads.
// Put matching files in /public/timeline/* and /public/certs/*
const timelineItems = [
  {
    date: "2020",
    title: "St Faith’s High School",
    description: "Completed Advanced-level: Maths, Physics & Computers – 15 points",
    image: "/Fisco.jpg",
    // certificate: "/certs/olevel.pdf", // keep undefined if no cert
  },
  {
    date: "2021",
    title: "University of Zimbabwe",
    description: "B.Sc. Software Engineering — Level 1 and onward.",
    image: "/uz.jpg",
    certificate: undefined,
  },
  {
    date: "Aug 2023 – Aug 2024",
    title: "Afrosoft Holdings",
    description: "Software Developer Intern  — hands-on experience building real features.",
    image: "/afro.jpg",
    // certificate: "/certs/internship_certificate.pdf",
  },
  {
    date: "2025",
    title: "Graduation",
    description: "B.Sc. Software Engineering — Graduation & degree awarded.",
    image: "/grad.jpg",
    certificate: "/degree.jpg",
  },
];

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
        {/* Profile + Personal Info */}
        <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Profile Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/profile.jpg"
              alt="Tirivashe Tinarwo"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
          </motion.div>

          {/* Bio & Personal Info */}
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
              I’m a Software Engineer specializing in modern web applications with a passion for clean
              code, robust architecture, and delightful user experiences.
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

        {/* Technical Skills (left unchanged) */}
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
                    <span
                      key={tech}
                      className="px-3 py-1 border border-blue-500 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Journey — Redesigned */}
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

          {/* Grid layout that adapts to vertical cards on desktop and horizontal scroll on small screens */}
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
                whileHover={{ scale: 1.02, y: -6 }}
                className="relative bg-slate-800 p-4 rounded-2xl shadow-xl overflow-hidden"
              >
                {/* image header - changed to square */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 2}
                  />
                  {/* subtle overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* date badge */}
                  <div className="absolute left-4 top-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                {/* actions (download certificate if exists) */}
                <div className="flex items-center gap-3">
                  {item.certificate ? (
                    <a
                      href={item.certificate}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition shadow"
                    >
                      {/* simple svg icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 14a1 1 0 001 1h12a1 1 0 001-1v-5h-2v4H5v-4H3v5z" />
                        <path d="M7 6a1 1 0 011-1h4a1 1 0 011 1v5h2V6a3 3 0 00-3-3H10a3 3 0 00-3 3v5h2V6z" />
                      </svg>
                       Certificate
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400"></span>
                  )}

                  {/* optional view gallery / details button */}
                  <button
                    type="button"
                    className="ml-auto text-sm px-3 py-1 border border-blue-500 rounded-full text-blue-200 hover:bg-blue-500 hover:text-white transition"
                    onClick={() => {
                      // small UX hook — can be replaced with modal/lightbox later
                      // eslint-disable-next-line no-alert
                      alert(`${item.title}\n\n${item.description}`);
                    }}
                  >
                    Details
                  </button>
                </div>

                {/* bottom accent bar */}
                <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              </motion.article>
            ))}
          </motion.div>

          {/* Horizontal timeline alternative for small screens (nice touch) */}
          <div className="mt-8 md:hidden">
            <p className="text-sm text-gray-400 mb-3">Swipe to view timeline</p>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {timelineItems.map((item) => (
                <div key={item.title} className="w-72 flex-shrink-0">
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 relative">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}



// // src/app/about/page.tsx
// "use client";

// import React from "react";
// import Head from "next/head";
// import { motion } from "framer-motion";
// // at the top of src/app/about/page.tsx
// import type { Variants, Transition } from "framer-motion";

// // define a reusable spring transition
// const spring: Transition = {
//   type: "spring",
//   stiffness: 100,
//   damping: 20,
// };

// // now annotate as Variants
// const fadeIn: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: spring,        // uses our correctly typed Transition
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,    // valid Variants transition field
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
//     items: ["Spring Boot", "JDBC", "Angular","Next.js"],
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
//     description: "Maths, Physics & Computers – 15 points",
//   },
//   {
//     date: "2021",
//     title: "University of Zimbabwe",
//     description: "B.Sc. Software Engineering, Level 1",
//   },
//   {
//     date: "Aug 2023 – Aug 2024",
//     title: "Afrosoft Holdings",
//     description: "Software Developer Intern (WorkTrack, PSC Project)",
//   },
//   {
//     date: "2025",
//     title: "Graduation",
//     description: "B.Sc. Software Engineering",
//   },
// ];

// // const fadeIn = {
// //   hidden: { opacity: 0, y: 20 },
// //   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
// // };

// // const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };

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
//           {/* Profile Photo */}
//           <motion.div
//             className="flex justify-center"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <img
//               src="/profile.jpg"
//               alt="Tirivashe Tinarwo"
//               className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
//             />
//           </motion.div>

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
//               I’m a Software Engineer specializing in modern web applications with a passion for clean
//               code, robust architecture, and delightful user experiences.
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

//         {/* Tech Skills */}
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

//         {/* Journey Timeline */}
//         <section className="max-w-4xl mx-auto">
//           <motion.h2
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-3xl font-semibold mb-6"
//           >
//             Journey
//           </motion.h2>
//           <div className="overflow-x-auto">
//             <motion.ul
//               variants={stagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="flex space-x-6 pb-4"
//             >
//               {timelineItems.map((item) => (
//                 <motion.li
//                   key={item.date + item.title}
//                   variants={fadeIn}
//                   className="min-w-[220px] bg-slate-800 p-6 rounded-lg shadow-lg flex-shrink-0"
//                 >
//                   <p className="text-sm text-blue-400 mb-2">{item.date}</p>
//                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-base leading-snug">{item.description}</p>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
