export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  link?: string;
  content?: string;
}
