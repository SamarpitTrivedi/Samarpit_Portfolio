import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex items-center gap-6">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors text-sm">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors text-sm">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="text-gray-400 hover:text-gray-900 transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
}
