import React from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky navigation */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-bold tracking-tight">Your Name</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="/cv.pdf" className="px-3 py-1.5 rounded-md bg-slate-900 text-white">Download CV</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:you@example.com" className="hover:text-indigo-600">you@example.com</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-indigo-600">GitHub</a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
