"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Roles to cycle through
const ROLES = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Web Designer",
  "Software Engineer",
];

export default function RoleRotator({ className = "" }) {
  const [index, setIndex] = useState(0);

  const longest = useMemo(
    () => ROLES.reduce((a, b) => (a.length >= b.length ? a : b)).length,
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(id);
  }, []);

  const current = ROLES[index];

  return (
    <span
      role="text"
      aria-live="polite"
      aria-atomic="true"
      className={`inline-block ${className}`}
      style={{ minWidth: `${longest}ch` }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          className="inline-block"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
           {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
