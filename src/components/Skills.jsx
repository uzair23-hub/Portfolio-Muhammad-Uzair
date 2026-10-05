import React from 'react';
import { skillsData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title">
          <span className="font-mono text-xl text-blue-500 font-normal">02.</span>
          Technical Toolkit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <div key={idx} className="glass-card p-8 rounded-2xl group hover:border-blue-500/50">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-lg bg-[#0B0E14] text-slate-300 text-sm border border-white/5 hover:border-blue-400/50 hover:text-blue-300 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
