"use client";

import { motion } from "framer-motion";
import { experiencesData } from "@/content/experience/data";

const springUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const Experience = () => {
  return (
    <motion.div
      {...springUp(0.3)}
      className="py-16 flex flex-col justify-start w-full relative group"
    >
      <div className="absolute top-0 right-0 w-full h-1/2 bg-orange-600/10 blur-[100px] translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-600/20 transition-colors duration-700" />

      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-100 mb-2 tracking-tight">
          Work <span className="text-rose-500">Experience</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm mb-8 uppercase tracking-widest">
          (Hands-on Software Engineering Internships)
        </p>

        <div className="flex flex-col flex-grow relative mt-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-rose-500 via-rose-500/20 to-transparent" />

          {experiencesData.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative pl-12 pb-14 group/item"
            >
              <div className="absolute w-6 h-6 bg-zinc-950 border-[3px] border-rose-500 rounded-full -left-[1px] top-1 group-hover/item:shadow-[0_0_20px_rgba(244,63,94,0.6)] group-hover/item:bg-rose-500 transition-all duration-300" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 group-hover/item:text-rose-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-rose-400 font-mono tracking-wider text-xs bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit">
                  {exp.date}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm font-medium mb-4">
                <span className="text-zinc-200 font-bold uppercase tracking-wider">
                  {exp.company}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 text-xs font-mono">
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2 mb-6 text-zinc-300 font-body text-sm md:text-base leading-relaxed max-w-3xl">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-[11px] font-mono px-3 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
