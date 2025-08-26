import projects from '@/data/projects.json';
import Section from '@/lib/section';
import { motion } from 'framer-motion';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
};

export default function Projects() {
  const Tag = ({ label }: { label: string }) => (
    <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-black ring-1 ring-inset ring-blue/10">
      {label}
    </span>
  );

  type Project = (typeof projects)[number];

  const TimelineProjectItem = ({ project, index }: { project: Project; index: number }) => {
    const isEven = index % 2 === 0;
    const fromX = isEven ? -120 : 120;
    return (
      <article
        className={`relative mb-16 flex flex-col items-center md:items-stretch ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Dot */}
        <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-500 ring-4 ring-[#0b0f17]" />
        {/* Image */}
        <div className="flex w-full md:w-1/2 justify-center">
          <div className="relative h-64 w-[92%] overflow-hidden rounded-2xl border border-white/10">
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
              initial={{ opacity: 0, x: fromX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
        {/* Text */}
        <div className="mt-6 w-full md:mt-0 md:w-1/2 p-5">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((t) => (
              <Tag key={t} label={t} />
            ))}
            {project.stack.length > 3 && <Tag label={`+${project.stack.length - 3}`} />}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{project.description}</p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-white/70">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-3 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-xs font-semibold text-black px-3 py-2 hover:bg-white/90"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
      <Section id="projects" title="Projects" subtitle="The three most important projects.">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-sky-500/60"></div>
          <div className="space-y-16">
            {projects.map((p, i) => (
              <TimelineProjectItem key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* —— CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">Shall we build something together?</h3>
            <p className="mt-1 text-sm text-white/70">
              Open to roles as Frontend Developer (React/TS) and freelance projects.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Contact me
          </a>
        </div>
      </section>
    </>
  );
}
