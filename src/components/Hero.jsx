import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.15]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41711-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/80 via-[#0B0E14]/60 to-[#0B0E14]"></div>
      </div>

      {/* Animated Background decorations */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[20%] w-4 h-4 bg-purple-500 rounded-full blur-[2px] z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[15%] w-3 h-3 bg-blue-500 rounded-full blur-[1px] z-10"
      />
      <motion.div 
        animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-[40%] w-6 h-6 border border-green-500/30 rounded-sm z-10"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={itemVariants} className="font-mono text-blue-400 mb-5 text-lg flex items-center gap-2">
            <span className="text-slate-500">{'>'}</span> Hi, I am
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight leading-tight">
            Muhammad Uzair <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Arshad</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400 mb-8 font-mono">
            {'// '} Full Stack Web Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed border-l-2 border-blue-500/30 pl-4 backdrop-blur-sm bg-white/5 py-2 pr-4 rounded-r-lg">
            Specializing in modern web experiences with React, Node.js, and .NET. 
            Transforming ideas into <span className="text-white font-medium">high-performance</span>, visually stunning digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary group flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow">
              Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn-outline flex items-center gap-2 hover:bg-white/5 transition-colors">
              <Briefcase size={18} /> View Work
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-white/10 flex gap-8 md:gap-16 flex-wrap">
            <motion.div whileHover={{ y: -5 }} className="transition-transform">
              <p className="text-4xl font-black text-white font-mono mb-1">7<span className="text-blue-500">+</span></p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Real-world Projects</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="transition-transform">
              <p className="text-4xl font-black text-white font-mono mb-1">2<span className="text-purple-500">+</span></p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="transition-transform">
              <p className="text-4xl font-black text-white font-mono mb-1">15<span className="text-green-500">+</span></p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">Tech Skills</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
