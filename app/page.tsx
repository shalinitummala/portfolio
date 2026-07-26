import BlogComponent from "@/components/Blog";
import CountComponent from "@/components/Count";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main >
        <CountComponent />
        <BlogComponent />
      </main>
    </div>
  );
}
