import React from 'react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Inc.',
    period: '2023 — Present',
    bullets: [
      'Led the build of a design system used across 5 product teams',
      'Scaled a React micro-frontend architecture to millions of users',
      'Drove performance initiative achieving 40% faster TTI',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Pixel Labs',
    period: '2021 — 2023',
    bullets: [
      'Built interactive dashboards with real-time data',
      'Introduced TypeScript and improved DX across the team',
      'Mentored junior devs and ran weekly UI clinics',
    ],
  },
  {
    role: 'UI Engineer',
    company: 'Freelance',
    period: '2019 — 2021',
    bullets: [
      'Designed and shipped portfolio sites and marketing pages',
      'Collaborated with designers to refine UX and micro-interactions',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-200" />
          <ul className="space-y-8">
            {experiences.map((item, idx) => (
              <li key={idx} className="relative pl-12 md:pl-16">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 shadow" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.role} · <span className="text-slate-600">{item.company}</span>
                  </h3>
                  <span className="text-sm text-slate-500">{item.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
