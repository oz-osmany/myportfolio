import React from 'react';
import { useReveal } from '@/hooks/useReveal';

const Start = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <>
      <section id="hero" className="relative w-full min-h-[100vh] overflow-hidden">
        <picture>
          <source media="(min-width:1024px)" srcSet="/assets/osmany.jpg" />
          <img
            src="/assets/osmany-short.jpg"
            alt="Oz working outdoors on a laptop"
            className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center md:object-[65%_center]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,15,23,0.95)_0%,rgba(11,15,23,0.85)_20%,rgba(11,15,23,0.70)_40%,rgba(11,15,23,0.35)_60%,rgba(11,15,23,0.15)_80%,transparent_100%)]" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10 flex items-center min-h-[70vh]">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm <span className="text-sky-400">Oz</span>
            </h1>
            <h2 className="mt-3 text-2xl text-white font-semibold">Frontend Developer</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Crafting clean UI and intuitive UX with React & TypeScript
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-sky-500 px-6 py-3 text-sm font-semibold text-sky-400 hover:bg-sky-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Start;
