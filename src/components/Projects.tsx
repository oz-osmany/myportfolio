import projects from '@/data/projects.json';
import Section from '@/lib/section';
import { MyProjects } from '@/types/Projects';
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
  const ProjectCard = ({
    id,
    title,
    description,
    stack,
    image,
    demoUrl,
    repoUrl,
    highlights = [],
  }: MyProjects) => {
    return (
      <article
        className={`flex flex-col ${id == 2 ? 'md:flex-row-reverse' : 'lg:flex-row'} h-[475px]`}
      >
        <div className="relative flex justify-center h-full w-full md:w-[50%]">
          {/* Dot */}
          <div
            className={`absolute ${id == 2 ? 'left-0' : 'right-[-16px]'} top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-500 shadow-lg`}
          />
          <motion.img
            key={id}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // only one time
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src={image}
            alt={title}
            className="h-[315px] w-[73%] object-conver group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-3 px-[80px]  md:w-[50%] right-0">
          <h3 className="text-[25px] font-semibold text-black">{title}</h3>
          {/* Stack */}
          <div className="flex items-start gap-2 w-[20%]">
            <div className="flex shrink-0 flex-wrap gap-1">
              {stack.slice(0, 3).map((t) => (
                <Tag key={t} label={t} />
              ))}
              {stack.length > 3 && <Tag label={`+${stack.length - 3}`} />}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-black">{description}</p>

          {highlights.length > 0 && (
            <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-black">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          <footer className="mt-2 flex flex-wrap gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-white/10"
              >
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-xs font-semibold text-black px-3 py-2 hover:bg-white/90"
              >
                GitHub
              </a>
            )}
          </footer>
        </div>
      </article>
    );
  };

  return (
    <div className="">
      <Section id="projects" title="Projects" subtitle="The three most important projects.">
        <div className="relative flex flex-col w-full gap-6">
          <div className="absolute left-1/2 top-0 h-full w-[1.6px] -translate-x-1/2 bg-blue-500" />
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
