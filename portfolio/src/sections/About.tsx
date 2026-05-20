"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/personal";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-16"
        >
          About
        </motion.h2>

        <div className="grid lg:grid-cols-[200px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative w-44 h-52 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Image src={personal.profileImage} alt={personal.name} fill className="object-cover" />
            </div>
          </motion.div>

          <div className="space-y-4">
            {personal.about.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-500 text-[15px] leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {personal.focusAreas.map((area, i) => (
            <motion.span
              key={area.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 text-sm text-gray-600 bg-white border border-gray-100 rounded-full shadow-sm"
            >
              {area.title}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
