// src/components/header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// spring transition for animations
const spring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

// variants for the mobile menu overlay
const menuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: spring,
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-slate-900/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Tirivashe Tinarwo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.nav
          className="fixed top-0 right-0 h-full w-2/3 bg-slate-800 shadow-lg md:hidden"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={menuVariants}
        >
          <ul className="flex flex-col mt-20 space-y-6 px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white text-lg hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
);
}
