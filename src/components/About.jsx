import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="flex md:block justify-center">
          <div className="h-40 w-40 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 p-1 shadow">
            <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center text-slate-700 font-semibold">
              You
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            I’m a frontend developer with a passion for building immersive, high-performance web apps. I focus on clean architectures,
            scalable design systems, and delightful micro-interactions. I love turning complex problems into elegant, usable interfaces.
          </p>
          <p className="text-slate-700 leading-relaxed">
            My toolbelt includes React, TypeScript, Tailwind, and modern tooling. Outside of work, you’ll find me exploring 3D on the web,
            sketching UI ideas, and contributing to open source.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Years Experience</p>
              <p className="text-2xl font-bold text-slate-900">5+</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Projects Shipped</p>
              <p className="text-2xl font-bold text-slate-900">30+</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Happy Clients</p>
              <p className="text-2xl font-bold text-slate-900">15+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
