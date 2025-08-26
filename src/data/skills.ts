import {
  FaReact,
  FaJsSquare,
  FaSass,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaTrello,
  FaWordpress,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si';
// Types
export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced';
export type SkillGroup = 'Frontend' | 'Tools' | 'Backend/DB';

export interface Skill {
  name: string;
  color: string;
  key: SkillIconKey; // <- key to find the icon
  group: SkillGroup;
  level: SkillLevel;
}
// ——— Icons registry + helper
export const ICONS = {
  react: FaReact,
  javascript: FaJsSquare,
  typescript: SiTypescript,
  sass: FaSass,
  css: FaCss3Alt,
  bootstrap: FaBootstrap,
  tailwind: SiTailwindcss,
  trello: FaTrello,
  github: FaGithub,
  mysql: SiMysql,
  wordpress: FaWordpress,
};

export type SkillIconKey = keyof typeof ICONS;

export const ICON_COLORS: Record<SkillIconKey, string> = {
  react: '#61DAFB',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  sass: '#CC6699',
  css: '#1572B6',
  bootstrap: '#7952B3',
  tailwind: '#38BDF8',
  trello: '#0052CC',
  github: '#FFFFFF',
  mysql: '#4479A1',
  wordpress: '#21759B',
};

export const skills: Skill[] = [
  { name: 'React', color: 'text-sky-400', key: 'react', group: 'Frontend', level: 'Advanced' },
  {
    name: 'JavaScript',
    color: 'text-yellow-400',
    key: 'javascript',
    group: 'Frontend',
    level: 'Advanced',
  },
  {
    name: 'TypeScript',
    color: 'text-blue-500',
    key: 'typescript',
    group: 'Frontend',
    level: 'Intermediate',
  },
  { name: 'Sass', color: 'text-text-pink-400', key: 'sass', group: 'Frontend', level: 'Advanced' },
  { name: 'CSS', color: 'text-blue-400', key: 'css', group: 'Frontend', level: 'Advanced' },
  {
    name: 'Bootstrap',
    color: 'text-purple-500',
    key: 'bootstrap',
    group: 'Frontend',
    level: 'Intermediate',
  },
  {
    name: 'Tailwind',
    color: 'text-cyan-400',
    key: 'tailwind',
    group: 'Frontend',
    level: 'Advanced',
  },
  { name: 'Trello', color: 'text-blue-500', key: 'trello', group: 'Tools', level: 'Intermediate' },
  { name: 'GitHub', color: 'text-white', key: 'github', group: 'Tools', level: 'Advanced' },
  {
    name: 'MySQL',
    color: 'text-orange-500',
    key: 'mysql',
    group: 'Backend/DB',
    level: 'Intermediate',
  },
  {
    name: 'WordPress',
    color: 'text-sky-500',
    key: 'wordpress',
    group: 'Backend/DB',
    level: 'Intermediate',
  },
];
