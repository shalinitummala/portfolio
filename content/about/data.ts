import { AboutData } from "./type";

export const aboutData: AboutData = {
  heading: "About",
  headingHighlight: "Me.",
  subheading:
    "Full-stack developer and CS graduate focused on building robust web applications and writing clean, highly testable code following DRY & SOLID principles.",
  cardTitle: "Full-Stack Development & Quality Engineering",
  paragraphs: [
    "I hold a Bachelor of Technology in Computer Science and Engineering from Raghu Engineering College (Aug 2021 – May 2025). During my 6 months of software engineering internships at SkillDzire, I worked extensively across the full application lifecycle: building Java Spring Boot & Python Django REST APIs, developing responsive ReactJS frontends, and designing database schemas.",
    "Beyond feature development, I have a strong passion for Software Quality Engineering and SDET practices. I design comprehensive unit tests (JUnit 5, pytest), write end-to-end browser automation suites (Selenium WebDriver, Playwright), and validate API contracts using Postman & Newman.",
  ],
  stats: [
    {
      value: "6 Mos",
      label: "Software Engineering Internships",
    },
    {
      value: "90%",
      label: "Automated Test Coverage Maintained",
    },
    {
      value: "35%",
      label: "SQL Query Speed Optimization",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Raghu Engineering College",
      duration: "Aug 2021 – May 2025",
      grade: "CGPA: 7.12 / 10",
      location: "Visakhapatnam, India",
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Gayatri Junior College",
      duration: "2019 – 2021",
      grade: "Completed",
      location: "India",
    },
  ],
  systemStatus: {
    command: "./run-test-suite.sh",
    filename: "ci-cd-pipeline.yml",
    checks: [
      "✔ Spring Boot API & JUnit 5: 85%+ Coverage Passed",
      "✔ Django REST & pytest: 90% Coverage Passed",
      "✔ Selenium & Playwright E2E Suites: 100% Green",
    ],
  },
  statusTitle: "Quality Assurance Status",
  statusDescription:
    "Automated unit testing, integration tests, and cross-browser regression suites running in CI/CD before every release.",
};
