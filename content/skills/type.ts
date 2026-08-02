export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  techRows: string[][];
  categories: SkillCategory[];
}
