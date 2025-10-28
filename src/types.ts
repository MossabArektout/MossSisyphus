export interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}
