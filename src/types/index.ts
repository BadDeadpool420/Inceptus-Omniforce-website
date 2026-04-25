/** Shared TypeScript interfaces for Inceptus Omniforce */

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "beta" | "wip";
  icon: string;
  accentColor: string;
  link?: string;
}

export interface Course {
  id: number;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  description: string;
  icon: string;
  color: string;
  topics: string[];
}

export interface NavLink {
  label: string;
  href: string;
  target?: string;
}

export interface Resource {
  icon: string;
  label: string;
  desc: string;
}

export interface FooterColumn {
  section: string;
  items: NavLink[];
}
