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
import type { SkillIconKey } from '@/data/skills';

type IconCmp = React.ComponentType<{ className?: string }>;

const ICONS: Record<SkillIconKey, IconCmp> = {
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

export function SkillIcon({ name, className }: { name: SkillIconKey; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
