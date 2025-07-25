// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion, Variants, Transition } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

// 1. Define a properly typed spring Transition
const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// 2. Annotate your variants as Variants
const fieldVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

const sidebarVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: spring,
  },
};

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="loading"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      alert("Message sent!");
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contact — Tirivashe Tinarwo</title>
        <meta name="description" content="Get in touch with Tirivashe Tinarwo – phone, email, or WhatsApp." />
      </Head>

      <main className="bg-slate-900 text-white min-h-screen px-6 py-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>

        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
          >
            {["name", "email", "message"].map((field) => (
              <motion.div key={field} variants={fieldVariant} className="flex flex-col">
                <label htmlFor={field} className="mb-1 font-medium">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== "message" ? (
                  <motion.input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    value={form[field as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                    aria-invalid={!!errors[field]}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                ) : (
                  <motion.textarea
                    id={field}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none resize-none"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                )}
                {errors[field] && (
                  <motion.p
                    id={`${field}-error`}
                    className="mt-1 text-sm text-red-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors[field]}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              disabled={submitting}
            >
              {submitting ? <Spinner /> : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info Sidebar */}
          <motion.aside
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={sidebarVariant}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-blue-400">0784 558 583</p>
              <p className="text-blue-400">0713 151 841</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <a href="mailto:tirivasheot@gmail.com" className="text-blue-400 hover:underline">
                tirivasheot@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
              <a
                href="https://wa.me/message/XZHPH7HJDZPVE1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:underline"
              >
                <FaWhatsapp className="mr-2" /> Message ONWARD TECHNOLOGIES
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Follow Me</h2>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub size={24} />, href: "https://github.com/tirivashe78", label: "GitHub" },
                  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/tirivashe-tinarwo-482aba30a/", label: "LinkedIn" },
                  { icon: <FaTwitter size={24} />, href: "https://twitter.com/your-username", label: "Twitter" },
                ].map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.2 }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>
      </main>
    </>
  );
}
