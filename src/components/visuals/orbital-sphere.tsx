"use client";

import { motion, useReducedMotion } from "framer-motion";

// Abstract orbital sphere: layered rings, elliptical orbits and nodes.
// Pure SVG + CSS/Framer transforms — no heavy 3D runtime.
export function OrbitalSphere() {
  const reduceMotion = useReducedMotion();

  const spin = reduceMotion
    ? {}
    : { rotate: 360 };
  const spinTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 60, ease: "linear" as const, repeat: Infinity };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* Glow behind the sphere */}
      <div className="absolute inset-[18%] rounded-full bg-cyan-300/20 blur-3xl" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="sphereGrad" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#1D2B42" />
            <stop offset="70%" stopColor="#101827" />
            <stop offset="100%" stopColor="#0A0F1B" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#73D5E9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#73D5E9" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Core sphere */}
        <circle cx="200" cy="200" r="110" fill="url(#sphereGrad)" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="#73D5E9" strokeOpacity="0.35" strokeWidth="1" />

        {/* Meridian curves on the sphere surface */}
        <ellipse cx="200" cy="200" rx="110" ry="42" fill="none" stroke="#73D5E9" strokeOpacity="0.22" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="42" ry="110" fill="none" stroke="#73D5E9" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="200" cy="200" r="64" fill="none" stroke="#73D5E9" strokeOpacity="0.16" strokeWidth="1" />
      </svg>

      {/* Rotating orbital ring system */}
      <motion.div
        className="absolute inset-0"
        animate={spin}
        transition={spinTransition}
        style={{ transformOrigin: "50% 50%" }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <ellipse
            cx="200" cy="200" rx="185" ry="72"
            fill="none" stroke="url(#ringGrad)" strokeWidth="1.5"
            transform="rotate(-24 200 200)"
          />
          <ellipse
            cx="200" cy="200" rx="185" ry="72"
            fill="none" stroke="url(#ringGrad)" strokeWidth="1.5"
            transform="rotate(24 200 200)"
          />
          <circle cx="30" cy="128" r="5" fill="#73D5E9" />
          <circle cx="370" cy="272" r="5" fill="#73D5E9" />
          <circle cx="332" cy="82" r="3.5" fill="#B3E8F5" />
          <circle cx="68" cy="318" r="3.5" fill="#B3E8F5" />
        </svg>
      </motion.div>

      {/* Counter-rotating inner ring with nodes */}
      <motion.div
        className="absolute inset-[12%]"
        animate={reduceMotion ? {} : { rotate: -360 }}
        transition={spinTransition}
        style={{ transformOrigin: "50% 50%" }}
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <ellipse cx="200" cy="200" rx="160" ry="60" fill="none" stroke="#73D5E9" strokeOpacity="0.4" strokeWidth="1" transform="rotate(12 200 200)" />
          <circle cx="42" cy="238" r="4" fill="#3FBFDD" />
          <circle cx="358" cy="162" r="4" fill="#3FBFDD" />
        </svg>
      </motion.div>

      {/* Floating satellite chips */}
      <motion.div
        className="absolute left-[4%] top-[30%] rounded-lg border border-white/10 bg-navy-800/80 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300 shadow-lg backdrop-blur"
        animate={reduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Cloud
      </motion.div>
      <motion.div
        className="absolute bottom-[24%] right-[2%] rounded-lg border border-white/10 bg-navy-800/80 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300 shadow-lg backdrop-blur"
        animate={reduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Automation
      </motion.div>
      <motion.div
        className="absolute right-[14%] top-[6%] rounded-lg border border-white/10 bg-navy-800/80 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300 shadow-lg backdrop-blur"
        animate={reduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        Commerce
      </motion.div>
    </div>
  );
}
