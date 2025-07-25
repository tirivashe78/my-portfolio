// src/components/footer.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, Variants, Transition } from "framer-motion";

// Define a properly typed spring Transition
const spring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

// Annotate your footer animation variants as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

export default function Footer() {
  const icons = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/tirivashe78",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/tirivashe-tinarwo-482aba30a/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/your-username",
      label: "Twitter",
    },
  ];

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full bg-slate-800 text-gray-400 py-6 mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.p variants={itemVariants} className="text-sm">
          &copy; {new Date().getFullYear()} Tirivashe Tinarwo
        </motion.p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          {icons.map((iconObj) => (
            <motion.a
              key={iconObj.href}
              href={iconObj.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={iconObj.label}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={spring}
              className="hover:text-white transition-colors"
            >
              {iconObj.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
