import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Globe, User } from 'lucide-react';

const ContactFooter = () => {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s build something elegant</h2>
            <p className="mt-4 max-w-md text-neutral-600">
              I’m available for select product collaborations and design systems work. Send a note — I’ll reply within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1"><User className="h-4 w-4" /> Based in Remote • Open to worldwide</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1"><Globe className="h-4 w-4" /> English • French</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none transition focus:border-blue-400 focus:bg-white" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none transition focus:border-blue-400 focus:bg-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Message</label>
                <textarea rows="4" placeholder="Tell me about your project..." className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none transition focus:border-blue-400 focus:bg-white" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
              <Mail className="h-4 w-4" /> Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} Alex Morgan. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline">Work</a>
            <a href="#about" className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline">About</a>
            <a href="#contact" className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
