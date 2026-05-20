"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionWrapper from "@/components/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-100 rounded-full hover:border-blue-200 hover:text-blue-600 transition-all duration-200 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
