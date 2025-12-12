export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  details: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}