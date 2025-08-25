export interface MyProjects {
  id: number;
  title: string;
  description: string;
  stack: string[];
  image?: string; // URL optional
  demoUrl?: string;
  repoUrl?: string;
  highlights?: string[];
}

export type MySkills = {
  name: string;
  key: string;
  icon: React.ReactNode;
  group: 'Frontend' | 'Herramientas' | 'Backend/DB';
  level: 'Básico' | 'Intermedio' | 'Avanzado';
};
