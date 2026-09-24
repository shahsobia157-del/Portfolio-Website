export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  typeTag: string;
  description: string;
  fullOverview: string;
  image: string;
  clientType: string;
  year: string;
  deliverables: string[];
  techStack: string[];
  features: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    iconName?: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
}
