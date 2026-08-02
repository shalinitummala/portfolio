import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogsData } from "@/content/blogs/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const blog = blogsData.find((b) => b.id === resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 selection:text-rose-400 overflow-x-hidden relative flex flex-col">
      <Navbar />

      <div className="flex-1 relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-rose-400 mb-8 transition-colors"
        >
          ← Back to Blogs
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono mb-4">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span>By {blog.author}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-zinc-100 mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {blog.tags.map((tag, j) => (
            <span
              key={j}
              className="text-[10px] font-mono px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full uppercase tracking-wider font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300 font-body leading-relaxed space-y-6">
          <p className="text-lg text-zinc-200 font-medium">{blog.description}</p>
          <hr className="border-zinc-800 my-8" />
          <p>{blog.content}</p>
          {blog.link && (
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-bold uppercase tracking-wider text-sm"
              >
                Read full story on Medium ↗
              </a>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
