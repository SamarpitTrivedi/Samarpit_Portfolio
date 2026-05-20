"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import SectionWrapper from "@/components/SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm mb-8"
        >
          View my qualifications and experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center"
        >
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Resume
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
