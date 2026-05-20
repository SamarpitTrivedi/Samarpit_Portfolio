"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/personal";
import ParticleBackground from "@/components/ParticleBackground";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]">
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-blue-600 text-sm tracking-widest uppercase mb-5">Hello, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
              {personal.name}
            </h1>
            <p className="text-lg text-gray-500 font-medium mb-4">{personal.title}</p>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-10">{personal.tagline}</p>

            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
              >
                Hire Me
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="px-6 py-3 border border-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 blur-lg" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image src={personal.profileImage} alt={personal.name} fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
