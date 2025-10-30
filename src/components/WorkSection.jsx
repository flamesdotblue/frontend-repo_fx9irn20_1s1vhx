import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fintech Dashboard',
    tags: ['Design System', 'Data Viz', 'Web App'],
    description:
      'A modular design system for a multi-tenant analytics suite with accessible, high-density layouts.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Wellness Mobile App',
    tags: ['Onboarding', 'Motion', 'iOS/Android'],
    description:
      'An adaptive onboarding flow with progressive disclosure and subtle motion for motivation cues.',
    image:
      'https://images.unsplash.com/photo-1559163499-413811fb2344?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Marketing Site',
    tags: ['Brand', 'Conversion', 'Web'],
    description:
      'A conversion-focused marketing website with a flexible content grid and performance-first build.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d0d8b6a07?q=80&w=1600&auto=format&fit=crop',
  },
];

const WorkCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-neutral-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.description}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View case study →
        </div>
      </div>
    </motion.article>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="w-full bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">Large thumbnails with hover microinteractions. Each project explores structure, process, outcome, and learnings.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
