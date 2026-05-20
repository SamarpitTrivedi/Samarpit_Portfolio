"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const floatingLinks = [
  { label: "Home", href: "#home", icon: "⌂" },
  { label: "About", href: "#about", icon: "◉" },
  { label: "Experience", href: "#experience", icon: "⧫" },
  { label: "Skills", href: "#skills", icon: "◆" },
  { label: "Projects", href: "#projects", icon: "▣" },
  { label: "Contact", href: "#contact", icon: "✉" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-4 py-2 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full shadow-lg shadow-gray-200/50"
        >
          {floatingLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="group relative px-3 py-1.5 text-sm text-gray-400 hover:text-blue-600 transition-colors"
              title={link.label}
            >
              <span>{link.icon}</span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
