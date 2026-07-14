// Project type — used by ProjectCard and ProjectsSection
export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  emoji: string;
  gradientClass: string;
}

// Skill type — used by SkillItem and SkillsSection
export interface Skill {
  icon: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  percentage: number;
}

// Stat type — used by StatsRow
export interface Stat {
  value: number | string;
  label: string;
}

// SocialLink type — used by Footer
export interface SocialLink {
  name: string;
  url: string;
}
