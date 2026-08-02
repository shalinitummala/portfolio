"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certificationsData } from "@/content/certifications/data";

export default function Certifications() {
  return (
    <div className="py-24 relative w-full">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
        <div className="mb-16 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-tighter">
              Licenses & <span className="text-rose-500 italic font-serif">Certifications</span>
            </h2>
            <p className="text-zinc-500 font-mono text-sm mt-4 uppercase tracking-widest">
              (Verified Credentials & Internship Certificates)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="relative flex bg-[#0c0c0e] rounded-xl overflow-hidden group shadow-2xl border border-zinc-800"
            >
              <div className="w-3 bg-gradient-to-b from-rose-600 to-rose-400 h-full relative flex-shrink-0">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-950 rounded-full" />
              </div>

              <div className="flex-grow p-6 md:p-8 rounded-r-xl relative overflow-hidden flex flex-col justify-between">
                <FaCertificate className="absolute -bottom-6 -right-6 text-9xl text-zinc-800/30 group-hover:text-rose-500/10 transition-colors duration-500 rotate-12" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">
                        VERIFIED
                      </p>
                      <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                        {cert.date}
                      </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-zinc-100 group-hover:text-rose-400 transition-colors leading-tight mb-1">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end border-t border-zinc-800/50 pt-4 mt-4">
                    <div>
                      <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-1">
                        Issuer
                      </p>
                      <p className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end justify-end">
                      <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1">
                        {cert.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
