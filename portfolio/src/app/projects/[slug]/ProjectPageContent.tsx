"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectPageContent({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="text-gray-400 hover:text-gray-900 transition-colors text-sm">
            ← Back
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-600 text-xs uppercase tracking-widest">{project.category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">{project.title}</h1>
          <p className="text-gray-400 text-lg">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 text-xs text-gray-500 bg-white rounded-full border border-gray-100 shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="relative aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-sm mb-16"
        >
          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" priority />
        </motion.div>

        <div className="space-y-12 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-500">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Problem Statement</h2>
            <p className="text-gray-500">{project.problemStatement}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Approach</h2>
            <p className="text-gray-500">{project.approach}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Techniques</h2>
            <ul className="space-y-1.5">
              {project.techniques.map((t, i) => (
                <li key={i} className="text-gray-500 pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-blue-400/50">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {project.images.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Screenshots</h2>
              <div className="space-y-6">
                {project.images.map((img, i) => (
                  <div key={i}>
                    <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                      <Image src={img.src} alt={img.caption} width={900} height={500} className="w-full h-auto" />
                    </div>
                    <p className="text-gray-400 text-xs mt-2 text-center">{img.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.keyInsights.map((insight, i) => (
                <div key={i} className="p-4 rounded-lg bg-white border border-gray-100 text-gray-500 text-sm shadow-sm">
                  {insight}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-3 mt-14 pt-8 border-t border-gray-100">
          {project.presentationUrl && (
            <a href={project.presentationUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm rounded-lg transition-colors">
              View Presentation
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors">
              View on GitHub
            </a>
          )}
          <Link href="/#projects" className="px-5 py-2.5 border border-gray-200 text-gray-500 text-sm rounded-lg hover:text-gray-900 transition-colors">
            ← All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
