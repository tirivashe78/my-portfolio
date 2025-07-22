"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const icons = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/your-username",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/your-username",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/your-username",
      label: "Twitter",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, staggerChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-slate-800 text-gray-400 py-6 mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tirivashe Tinarwo</p>

        <motion.div variants={item} className="flex space-x-6 mt-4 md:mt-0">
          {icons.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              variants={item}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-white transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
