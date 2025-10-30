import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, Smartphone, PenTool } from 'lucide-react';

const skills = [
  'Design Systems',
  'Interaction Design',
  'Prototyping',
  'Information Architecture',
  'Accessibility',
  'Design Tokens',
  'Usability Testing',
  'Responsive Web',
];

const services = [
  { icon: Layout, title: 'UI Design', desc: 'Systems-led interfaces with pixel precision and scalable design language.' },
  { icon: Search, title: 'UX Research', desc: 'Insights through interviews, usability tests, and data-driven iteration.' },
  { icon: Smartphone, title: 'Web & App Design', desc: 'Fluid, responsive experiences across devices and platforms.' },
  { icon: PenTool, title: 'Branding & Prototyping', desc: 'Concept-to-prototype with visual identity alignment and rapid validation.' },
];

const AboutServices = () => {
  return (
    <section id="about" className="relative w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              I design products with a balance of empathy and rigor — reducing complexity while amplifying clarity.
              My approach blends research, systems thinking, and craft to shape interfaces that are elegant, legible, and delightful.
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">Skills & Tools</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-semibold">{title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-transparent" />
                <div className="mt-4 text-xs text-neutral-400">Designed for clarity, tested for impact.</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
