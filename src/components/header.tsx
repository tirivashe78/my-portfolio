// src/components/header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";

// Define a properly typed spring Transition
const spring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

// Annotate your header animation variants as Variants
const headerVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: spring,
  },
};

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 w-full z-20 bg-slate-900/70 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Tinarwo
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
