import { BlogPost } from "./type";

export const blogsData: BlogPost[] = [
  {
    id: "auto-docker-story",
    title: "How Auto Docker Saved 500+ Developers from Boilerplate Hell",
    description:
      "A deep dive into building a VS Code extension that automates Dockerfile and Docker Compose generation for multiple stack configurations.",
    date: "2024-05-15",
    readTime: "5 min read",
    author: "Shalini Tummala",
    tags: ["Docker", "TypeScript", "VS Code Extension", "DevOps"],
    link: "https://medium.com/@shalinitummala7",
    content:
      "Containerizing applications shouldn't require copy-pasting Dockerfiles across projects. Auto Docker automates environment detection and generates production-ready container setups in seconds...",
  },
  {
    id: "ci-cd-optimization",
    title: "Cutting CI/CD Build Times by 40% with Smart Caching & Docker Multistage",
    description:
      "Practical strategies for reducing deployment latency, optimizing Docker build steps, and caching dependencies in GitHub Actions.",
    date: "2024-08-10",
    readTime: "7 min read",
    author: "Shalini Tummala",
    tags: ["DevOps", "CI/CD", "Docker", "Performance"],
    link: "https://medium.com/@shalinitummala7",
    content:
      "Slow CI/CD pipelines kill developer velocity. In this post, we discuss how multi-stage Docker builds and intelligent layer caching shaved minutes off every pull request...",
  },
  {
    id: "works-on-my-machine",
    title: "Why 'It Works on My Machine' is Not a Valid Deployment Strategy",
    description:
      "Exploring containerization best practices, environment parity, and why infrastructure consistency matters for modern engineering teams.",
    date: "2024-11-02",
    readTime: "4 min read",
    author: "Shalini Tummala",
    tags: ["DevOps", "Kubernetes", "Docker", "Cloud"],
    link: "https://medium.com/@shalinitummala7",
    content:
      "We've all heard it before. But bridging the gap between local development and production requires reproducible environments, robust pipelines, and clear infrastructure definitions...",
  },
];
