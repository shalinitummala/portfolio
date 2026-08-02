import { Project } from "./type";

export const projectsData: Project[] = [
  {
    title: "Customer Churn Forecasting & Analytics Platform",
    category: "Full Stack (Python + Django + React.js + ML)",
    description:
      "Full-stack predictive analytics platform for telecom providers to forecast customer churn. Features Django REST framework backend, responsive ReactJS dashboard, ML preprocessing pipeline with Pandas/NumPy, and 90% test coverage using pytest and Postman.",
    tags: ["Python", "Django REST", "React.js", "Pandas", "NumPy", "pytest", "Postman"],
    github: "https://github.com/shalinitummala/Customer-Churn-Forecasting",
    number: "01",
    testingDetails: "Automated API & unit testing using pytest (90% coverage) + Postman API collection runner",
  },
  {
    title: "Enterprise E-Commerce Platform",
    category: "Full Stack (Java + Spring Boot + ReactJS + Testing)",
    description:
      "Full-stack enterprise application built with Java Spring Boot REST APIs and ReactJS. Features schema optimization, automated unit/integration test suites written in JUnit 5 & Mockito (85%+ coverage), and end-to-end browser testing using Selenium WebDriver.",
    tags: ["Java", "Spring Boot", "ReactJS", "JUnit 5", "Selenium", "MySQL", "REST APIs"],
    github: "https://github.com/shalinitummala/Enterprise-Ecommerce-SpringBoot-React",
    number: "02",
    testingDetails: "JUnit 5 backend coverage (85%+) & Selenium WebDriver automated browser regression tests",
  },
  {
    title: "Cross-Browser Automated QA & Testing Suite",
    category: "SDET / QA Test Automation Framework",
    description:
      "Production-ready test automation framework designed for cross-browser regression testing and API validation. Utilizes Playwright for cross-browser UI automation (Chromium, Firefox, WebKit), Postman/Newman for API test execution, and CI/CD workflow integration.",
    tags: ["Playwright", "Selenium", "Postman", "JUnit", "pytest", "TypeScript", "CI/CD"],
    github: "https://github.com/shalinitummala/Automation-Testing-Framework-Playwright",
    number: "03",
    testingDetails: "Playwright E2E UI testing, API verification via Postman/Newman, HTML report generation",
  },
];
