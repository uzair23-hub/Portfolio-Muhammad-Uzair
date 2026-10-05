import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

const GithubSVG = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinSVG = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server error. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-mono text-blue-500 mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg">
            Interested in working together or have a project in mind? Feel free to reach out — I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-mono">Email</p>
                <a href="mailto:uzair005874@gmail.com" className="text-slate-200 font-medium hover:text-blue-400 transition-colors">uzair005874@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-mono">Phone</p>
                <a href="tel:+923463742417" className="text-slate-200 font-medium hover:text-purple-400 transition-colors">+92 346 3742417</a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/uzair-arshad-b53b862a0" target="_blank" rel="noreferrer" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all">
                <LinkedinSVG size={22} />
              </a>
              <a href="https://github.com/uzair23-hub" target="_blank" rel="noreferrer" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 transition-all">
                <GithubSVG size={22} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-slate-400 mb-2">Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0B0E14] border border-white/10 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Send Message <Send size={18} />
              </button>

              {status && (
                <p className={`text-center font-mono text-sm ${status.includes('success') ? 'text-green-400' : 'text-amber-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
