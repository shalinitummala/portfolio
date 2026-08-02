"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogsData } from "@/content/blogs/data";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 selection:text-rose-400 overflow-x-hidden relative flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rose-600/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <div className="flex-1 relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-zinc-100">
            <span className="text-rose-500">Blogs</span> & Articles
          </h1>
          <p className="text-zinc-400 text-lg mb-12">
            Welcome to my digital garden. Explore thoughts, guides, and rants on DevOps, Docker, and full-stack development.
          </p>

          <div className="flex flex-col gap-6">
            {blogsData.map((blog) => (
              <motion.article
                key={blog.id}
                whileHover={{ y: -4 }}
                className="p-6 md:p-8 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/60 hover:border-rose-500/40 rounded-2xl transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-zinc-100 hover:text-rose-400 transition-colors mb-3">
                  {blog.link ? (
                    <a href={blog.link} target="_blank" rel="noreferrer">
                      {blog.title} ↗
                    </a>
                  ) : (
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  )}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-mono px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full uppercase tracking-wider font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
