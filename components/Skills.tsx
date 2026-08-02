"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/content/skills/data";

const springUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const Skills = () => {
  const rowConfigs = [
    {
      animate: { x: [0, -2000] },
      duration: 30,
      style: { WebkitTextStroke: "1px rgba(244, 63, 94, 0.4)" },
      className: "text-5xl md:text-7xl font-display font-bold text-transparent",
    },
    {
      animate: { x: [-2000, 0] },
      duration: 35,
      className: "text-5xl md:text-7xl font-display font-bold text-rose-500/80",
    },
    {
      animate: { x: [0, -2000] },
      duration: 25,
      style: { WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" },
      className: "text-5xl md:text-7xl font-display font-bold text-transparent",
    },
  ];

  return (
    <motion.div
      {...springUp(0.2)}
      className="py-16 md:py-24 flex flex-col justify-start w-full relative group overflow-hidden"
    >
      <div className="relative z-10 h-full flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 mb-2 tracking-tight">
          {skillsData.title}{" "}
          <span className="text-rose-500">{skillsData.titleHighlight}</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm mb-16 uppercase tracking-widest">
          {skillsData.subtitle}
        </p>

        <div className="flex flex-col gap-8 w-[200vw] -ml-[50vw] rotate-[-2deg] opacity-80 hover:opacity-100 transition-opacity duration-500">
          {skillsData.techRows.map((row, rowIndex) => {
            const config = rowConfigs[rowIndex % rowConfigs.length];
            return (
              <motion.div
                key={rowIndex}
                className="flex gap-8 whitespace-nowrap"
                animate={config.animate}
                transition={{ repeat: Infinity, ease: "linear", duration: config.duration }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-8 items-center">
                    {row.map((tech, j) => (
                      <span
                        key={j}
                        className={config.className}
                        style={config.style}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
