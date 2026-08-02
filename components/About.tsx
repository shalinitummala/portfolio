"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/content/about/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
  return (
    <section id="about" className="relative pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div {...fadeUp(0)} className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mb-4 tracking-tight">
            {aboutData.heading} <span className="text-sky-400">{aboutData.headingHighlight}</span>
          </h2>
          <p className="text-zinc-500 font-body max-w-xl mx-auto md:mx-0">
            {aboutData.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            {...fadeUp(0.1)}
            className="md:col-span-8 skiper-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-zinc-100 mb-4 font-display">
                {aboutData.cardTitle}
              </h3>
              <div className="space-y-4 text-zinc-400 font-body text-sm leading-relaxed">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="md:col-span-4 skiper-card p-8 md:p-10 flex flex-col justify-center"
          >
            {aboutData.stats.map((stat, index) => (
              <div key={index} className={index < aboutData.stats.length - 1 ? "mb-6" : ""}>
                <div className="text-4xl font-bold text-zinc-100 font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-sky-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="md:col-span-12 skiper-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 w-full bg-zinc-950/50 rounded-2xl border border-white/5 p-4 md:p-6 font-mono text-xs md:text-sm text-zinc-300">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="ml-2 text-zinc-600">{aboutData.systemStatus.filename}</span>
              </div>
              <p className="mb-2">
                <span className="text-sky-500">➜</span>{" "}
                <span className="text-zinc-500">~</span> {aboutData.systemStatus.command}
              </p>
              {aboutData.systemStatus.checks.map((check, index) => (
                <p key={index} className={`text-emerald-400/90 ${index === aboutData.systemStatus.checks.length - 1 ? "mb-4" : "mb-1"}`}>
                  {check}
                </p>
              ))}
              <p>
                <span className="text-sky-500">➜</span>{" "}
                <span className="text-zinc-500">~</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>

            <div className="md:w-1/3 text-center md:text-left">
              <h4 className="text-lg font-bold text-zinc-100 mb-2 font-display">
                {aboutData.statusTitle}
              </h4>
              <p className="text-sm text-zinc-400 font-body mb-4">
                {aboutData.statusDescription}
              </p>

              <div className="border-t border-zinc-800 pt-4 mt-2">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2">Education</h5>
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="text-sm font-bold text-zinc-200">{edu.degree}</p>
                    <p className="text-xs text-zinc-400">{edu.institution} • {edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
