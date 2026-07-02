export interface ProjectDetail {
  overview: string;
  businessProblem: string;
  architecture: string;
  responsibilities: string[];
  techStack: string[];
  challenges: string;
  solutions: string;
  performance: string;
  lessonsLearned: string;
  timeline: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string[];
  overview: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  architecture: string;
  techStack: string[];
  challenges: string;
  businessImpact: string;
  gallery: string[];
  playStore: string | null;
  detail: ProjectDetail;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
  responsibilities: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: string; // e.g. "Expert", "Advanced", "Intermediate"
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  timeline: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'project' | 'work' | 'education' | 'achievement';
}
