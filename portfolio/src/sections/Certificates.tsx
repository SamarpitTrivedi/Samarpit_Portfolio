"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import SectionWrapper from "@/components/SectionWrapper";

export default function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SectionWrapper id="certificates">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              onClick={() => setSelected(i)}
              className="rounded-xl overflow-hidden bg-white border border-gray-100 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 text-sm font-medium leading-snug mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-xs">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                >
                  ✕
                </button>
                <div className="relative aspect-[3/2]">
                  <Image
                    src={certificates[selected].image}
                    alt={certificates[selected].title}
                    fill
                    className="object-contain p-4 bg-gray-50"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 font-semibold mb-1">{certificates[selected].title}</h3>
                  <p className="text-gray-500 text-sm">{certificates[selected].issuer} · {certificates[selected].date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
