import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-[#0B0E14] min-h-screen text-slate-200">
      <div className="fixed inset-0 z-[-1] bg-pattern"></div>
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <Home />
    </div>
  );
}

export default App;
