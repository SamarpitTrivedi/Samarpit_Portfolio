"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import SectionWrapper from "@/components/SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-16"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <a
              href={`mailto:${personal.email}`}
              className="block p-4 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all"
            >
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
              <p className="text-gray-900 text-sm">{personal.email}</p>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all"
            >
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">LinkedIn</p>
              <p className="text-gray-900 text-sm">/in/SamarpitTrivedi</p>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-white border border-gray-100 hover:shadow-sm transition-all"
            >
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">GitHub</p>
              <p className="text-gray-900 text-sm">/SamarpitTrivedi</p>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-200 transition-colors"
              placeholder="Name"
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-200 transition-colors"
              placeholder="Email"
            />
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-100 rounded-lg text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-200 transition-colors resize-none"
              placeholder="Message"
            />
            <button
              type="submit"
              className="w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              {submitted ? "Sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
