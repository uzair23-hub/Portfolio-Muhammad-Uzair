import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500 font-mono">
        <div className="container mx-auto px-6">
          <p>Designed & Built by <span className="text-blue-400">Muhammad Uzair Arshad</span> · Karachi, Pakistan</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
