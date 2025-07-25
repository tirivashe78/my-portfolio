// src/app/about/page.tsx
"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
// at the top of src/app/about/page.tsx
import type { Variants, Transition } from "framer-motion";

// define a reusable spring transition
const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// now annotate as Variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,        // uses our correctly typed Transition
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,    // valid Variants transition field
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
    items: ["Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "JDBC", "Angular"],
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

const timelineItems = [
  {
    date: "2020",
    title: "St Faith’s High School",
    description: "Maths, Physics & Computers – 15 points",
  },
  {
    date: "2021",
    title: "University of Zimbabwe",
    description: "B.Sc. Software Engineering, Level 1",
  },
  {
    date: "Aug 2023 – Aug 2024",
    title: "Afrosoft Holdings",
    description: "Software Developer Intern (WorkTrack, PSC Project)",
  },
  {
    date: "2025",
    title: "Graduation",
    description: "B.Sc. Software Engineering",
  },
];

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
// };

// const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };

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

        {/* Tech Skills */}
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

        {/* Journey Timeline */}
        <section className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Journey
          </motion.h2>
          <div className="overflow-x-auto">
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex space-x-6 pb-4"
            >
              {timelineItems.map((item) => (
                <motion.li
                  key={item.date + item.title}
                  variants={fadeIn}
                  className="min-w-[220px] bg-slate-800 p-6 rounded-lg shadow-lg flex-shrink-0"
                >
                  <p className="text-sm text-blue-400 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base leading-snug">{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
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

// export const skills = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Node.js",
//   "Tailwind CSS",
//   "Framer Motion",
// ];

// export const timelineItems = [
//   {
//     date: "2021",
//     title: "B.Sc. Computer Science",
//     description: "Graduated from University of Zimbabwe with honors.",
//   },
//   {
//     date: "2022",
//     title: "Front‑End Developer",
//     description: "Built SPA dashboards at Acme Corp using React.",
//   },
//   {
//     date: "2023",
//     title: "Software Engineer",
//     description: "Joined Onward Technologies to deliver full‑stack solutions.",
//   },
//   {
//     date: "2024",
//     title: "Major Projects",
//     description: "Led development of AI‑driven voting system prototype.",
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.2 } },
// };

// export default function AboutPage() {
//   return (
//     <>
//       <Head>
//         <title>About — Tirivashe Tinarwo</title>
//         <meta
//           name="description"
//           content="Learn more about Tirivashe Tinarwo, his skills, background, and journey as a Software Engineer."
//         />
//       </Head>

//       <main className="bg-slate-900 text-white min-h-screen px-6 py-12">
//         {/* Profile Section */}
//         <section className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Photo */}
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

//           {/* Bio */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Hi, I’m Tirivashe Tinarwo</h1>
//             <p className="text-lg leading-relaxed">
//               I’m a Software Engineer specializing in building modern, performant web applications.
//               With a passion for clean code and intuitive design, I create solutions that scale and delight users.
//             </p>
//           </motion.div>
//         </section>

//         {/* Skills Section */}
//         <section className="max-w-4xl mx-auto mb-16">
//           <motion.h2
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-3xl font-semibold mb-6"
//           >
//             Tech Stack
//           </motion.h2>

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-wrap gap-4"
//           >
//             {skills.map((skill) => (
//               <motion.span
//                 key={skill}
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.1 }}
//                 className="px-4 py-2 border border-blue-500 rounded-full text-blue-300 hover:text-white hover:bg-blue-500 transition"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </motion.div>
//         </section>

//         {/* Timeline Section */}
//         <section className="max-w-4xl mx-auto">
//           <motion.h2
//             variants={fadeInUp}
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
//                   variants={fadeInUp}
//                   className="min-w-[200px] bg-slate-800 p-6 rounded-lg shadow-lg flex-shrink-0"
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
