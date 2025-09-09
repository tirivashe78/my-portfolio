// src/components/header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // lock body scroll when menu open
  useEffect(() => {
    const original = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = original;
    };
  }, [menuOpen]);

  // focus first interactive element in the panel when opened
  useEffect(() => {
    if (menuOpen && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>("a,button,input,textarea");
      first?.focus();
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-slate-900/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Tirivashe Tinarwo
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu + dim backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop that covers entire page (dim everything) */}
            <motion.div
              className="fixed inset-0 z-50 bg-black"
              onClick={() => setMenuOpen(false)}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={backdropVariants}
            />

            {/* Sliding translucent (frosted) panel */}
            <motion.aside
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-60 w-2/3 max-w-xs bg-slate-800/60 backdrop-blur-lg border border-white/10 text-white shadow-2xl"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={panelVariants}
            >
              <div className="h-full px-6 pt-6 pb-12 flex flex-col">
                {/* header row inside panel */}
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-2xl font-bold text-white" onClick={() => setMenuOpen(false)}>
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

                {/* nav items */}
                <ul className="mt-10 flex flex-col gap-6 text-lg">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-white hover:text-blue-400 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA at bottom */}
                {/* <div className="mt-auto">
                  <a
                    href="/Tiri CV.pdf"
                    download
                    className="inline-block px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition shadow"
                    onClick={() => setMenuOpen(false)}
                  >
                    Download CV
                  </a>
                </div> */}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
