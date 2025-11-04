import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient vignette that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 shadow">
          <Rocket className="h-4 w-4 text-indigo-600" />
          <span>Tech • Portfolio • Modern</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500">Your Name</span>
          <br />
          I build delightful digital experiences.
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-slate-700">
          Frontend-focused developer crafting interactive, accessible products with React, TypeScript, and a keen eye for design.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2.5 shadow hover:shadow-md transition">
            <Rocket className="h-4 w-4" /> View Projects
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 shadow ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <div className="flex items-center gap-2">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50 transition"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-slate-700" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-slate-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow ring-1 ring-slate-200 hover:bg-slate-50 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
