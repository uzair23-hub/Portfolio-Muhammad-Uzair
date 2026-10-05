import React from 'react';
import { experienceData } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title">
          <span className="font-mono text-xl text-blue-500 font-normal">01.</span>
          Work Experience
        </h2>

        <div className="max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>

          <div className="space-y-12">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-16 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-10 h-10 bg-[#0B0E14] border border-blue-500/50 rounded-full flex items-center justify-center z-10 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Briefcase size={16} className="text-blue-400" />
                </div>

                <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-blue-400 font-medium text-lg font-mono">@ {exp.company}</p>
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-mono whitespace-nowrap self-start">
                      {exp.date}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-300 leading-relaxed items-start">
                        <span className="text-blue-500 mt-1 font-bold">▹</span>
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-mono border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
