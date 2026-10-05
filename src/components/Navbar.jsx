import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Experience', to: '#experience', num: '01.' },
    { name: 'Skills', to: '#skills', num: '02.' },
    { name: 'Projects', to: '#projects', num: '03.' },
    { name: 'Certifications', to: '#certifications', num: '04.' },
    { name: 'Contact', to: '#contact', num: '05.' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="font-mono text-xl font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors">
          uzair.dev<span className="text-blue-500 animate-pulse">_</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.to} className="group flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
              <span className="text-blue-500 font-mono mr-2 text-xs group-hover:text-blue-400 transition-colors">{link.num}</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-outline ml-4">Hire Me</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav flex flex-col items-center py-8 gap-6 shadow-2xl border-b border-white/10">
          {links.map((link) => (
            <a key={link.name} href={link.to} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white flex items-center">
              <span className="text-blue-500 font-mono mr-3 text-sm">{link.num}</span>
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-4 w-[80%] text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
