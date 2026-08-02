export interface AboutStat {
  value: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  location: string;
}

export interface SystemStatusCheck {
  command: string;
  filename: string;
  checks: string[];
}

export interface AboutData {
  heading: string;
  headingHighlight: string;
  subheading: string;
  cardTitle: string;
  paragraphs: string[];
  stats: AboutStat[];
  education: EducationItem[];
  systemStatus: SystemStatusCheck;
  statusTitle: string;
  statusDescription: string;
}
