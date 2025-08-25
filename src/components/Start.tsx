import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const Start = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <>
      <div className="hero__sign hero__container_inner">
        <section ref={scope}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero__title"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-sky-400">Oz</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Frontend Developer
            </h2>

            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              Crafting clean <span className="text-sky-400">UI</span> and intuitive{' '}
              <span className="text-sky-400">UX</span> with React & TypeScript
            </p>
          </motion.h1>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-sky-500 px-6 py-3 text-sm font-semibold text-sky-400 transition hover:bg-sky-500/10"
            >
              Contact Me
            </a>
          </div>          
        </section>
      </div>
    </>
  );
};

export default Start;
