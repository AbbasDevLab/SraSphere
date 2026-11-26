"use client";

import { motion, useReducedMotion } from "framer-motion";

type ProjectMockupProps = {
  type: "dashboard" | "storefront" | "operations";
  accent: string;
};

// Abstract, brand-coherent UI illustration — no stock imagery.
export function ProjectMockup({ type, accent }: ProjectMockupProps) {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion
    ? {}
    : { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 } };

  return (
    <motion.div
      {...animate}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      {type === "dashboard" ? (
        <div className="absolute inset-0 flex items-end gap-3 px-10 pb-10">
          {[35, 55, 42, 70, 58, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? accent : `${accent}55`,
                border: `1px solid ${accent}66`,
              }}
            />
          ))}
        </div>
      ) : type === "storefront" ? (
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-md ${i === 1 ? "h-24 w-20 opacity-90" : "h-16 w-14 opacity-50"}`}
              style={{ background: `${accent}55`, border: `1px solid ${accent}88` }}
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: `${accent}88` }} />
              <div
                className="h-2 rounded-full"
                style={{ width: `${70 - i * 12}%`, background: `${accent}44` }}
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
