import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A Spline-powered landing page with glassmorphism UI and responsive layout.',
    tags: ['React', 'Spline', 'Tailwind'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Realtime Analytics Dashboard',
    description:
      'Modular dashboard with live charts, theming, and role-based access.',
    tags: ['React', 'TypeScript', 'WebSockets'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Design System Starter',
    description:
      'A headless UI library with tokens, components, and documentation site.',
    tags: ['TypeScript', 'Tailwind', 'Storybook'],
    repo: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
            View All
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                  {p.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
