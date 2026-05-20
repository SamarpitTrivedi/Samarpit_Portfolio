import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Certificates from "@/sections/Certificates";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
