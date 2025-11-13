"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { FaBars, FaTimes, FaHome, FaUser, FaFolderOpen, FaEnvelope, FaAward } from "react-icons/fa";

const spring: Transition = { type: "spring", stiffness: 200, damping: 20 };

const panelVariants: Variants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: spring },
  exit: { x: "100%", transition: { ...spring, duration: 0.35 } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.16 } },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home", href: "/", Icon: FaHome },
    { label: "About", href: "/about", Icon: FaUser },
    { label: "Projects", href: "/projects", Icon: FaFolderOpen },
    // { label: "Certifications", href: "/certifications", Icon: FaAward },
    { label: "Contact", href: "/contact", Icon: FaEnvelope },
  ];

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    const original = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = original;
    };
  }, [menuOpen]);

  // Focus first interactive element in the panel when opened
  useEffect(() => {
    if (menuOpen && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>("a,button,input,textarea");
      first?.focus();
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span>Tirivashe Tinarwo</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors"
            >
              <Icon className="text-white" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile slide-out menu */}
{/* Mobile slide-out menu */}
{/* Mobile slide-out menu */}
<AnimatePresence>
  {menuOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={backdropVariants}
      />

      {/* Full-screen slide panel */}
      <motion.aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-60 w-full h-full border-blue-900/30 bg-[#0a1128] 
                   text-white shadow-2xl flex flex-col rounded-none"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={panelVariants}
      >
        <div className="h-full px-6 pt-6 pb-12 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Tirivashe Tinarwo
            </Link>
            <button
              aria-label="Close menu"
              className="text-white text-2xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="mt-10 flex flex-col gap-6 text-lg bg-[#0a1128]">
            {navItems.map(({ label, href, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 text-white/90 hover:text-yellow-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Optional Footer (e.g., social icons or button) */}
          <div className="mt-auto text-center text-white/70 text-sm">
            © {new Date().getFullYear()} Tirivashe Tinarwo
          </div>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>


    </header>
  );
}
