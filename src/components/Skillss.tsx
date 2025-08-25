import React from 'react';
import { SkillIcon } from '../lib/skill-icon';
import { Skill, skills } from '@/data/skills';
import Section from '@/lib/section';

// ——— UI Helpers
const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
    {label}
  </span>
);

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div role="listitem" tabIndex={0} className="skills__inner group">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
          <SkillIcon name={skill.key} className={`text-xl ${skill.color}`} />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{skill.name}</div>
          <div className="text-xs text-white/60">Nivel: {skill.level}</div>
        </div>
      </div>
      <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Pill label="+ info" />
      </div>
    </div>
  );
};

// ——— Main Component
export default function Skills() {
  // Group skills by category
  const groups = Array.from(
    skills.reduce(
      (acc, s) => acc.set(s.group, [...(acc.get(s.group) ?? []), s]),
      new Map<'Frontend' | 'Tools' | 'Backend/DB', typeof skills>()
    )
  );

  return (
    <div className="skills">
      {/* —— Skills */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Technologies and tools I use every day. Hover/focus for details."
        titleColor="white"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([label, items]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <Pill label={`${items.length} skills`} />
              </div>
              <div role="list" className="grid grid-cols-1 gap-3">
                {items.map((it) => (
                  <SkillCard key={it.key} skill={it} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* —— CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white">Let’s build something together</h3>
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
    </div>
  );
}
