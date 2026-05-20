"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <SectionWrapper id="experience">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              layout
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="p-6 rounded-xl bg-white border border-gray-100 cursor-pointer hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-gray-900 font-medium">{exp.role}</h3>
                <span className="text-gray-400 text-xs">{exp.duration}</span>
              </div>
              <p className="text-blue-600/70 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-400 text-xs">{exp.location}</p>

              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden space-y-2 mt-4 pt-4 border-t border-gray-50"
                  >
                    {exp.responsibilities.map((resp, j) => (
                      <li
                        key={j}
                        className="text-gray-500 text-sm leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-blue-400/50"
                      >
                        {resp}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
