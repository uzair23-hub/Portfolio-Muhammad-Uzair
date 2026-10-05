import React from 'react';
import { projectsData } from '../data';
import { ExternalLink } from 'lucide-react';

const GithubSVG = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title">
          <span className="font-mono text-xl text-blue-500 font-normal">03.</span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="glass-card flex flex-col rounded-2xl overflow-hidden group">
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div className="flex gap-4">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                          <GithubSVG size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-slate-300 text-sm items-start">
                        <span className="text-blue-500 text-lg leading-none">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="font-mono text-xs text-blue-400/80 bg-blue-500/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
