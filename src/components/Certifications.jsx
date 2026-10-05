import React from 'react';
import { certsData, educationData } from '../data';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title">
          <span className="font-mono text-xl text-blue-500 font-normal">04.</span>
          Certifications & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-slate-200">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certsData.map((cert, i) => (
                <div key={i} className="glass-card p-5 rounded-xl flex items-center gap-4 hover:border-blue-500/30 transition-all group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${cert.color}15`, color: cert.color }}>
                    <Award size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-100 font-bold text-[15px] group-hover:text-blue-300 transition-colors">{cert.name}</h4>
                    <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <div className="font-mono text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-slate-200">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: edu.border }}></div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-400">{edu.school}</p>
                    <span className="font-mono text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-md">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
