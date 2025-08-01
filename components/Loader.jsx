"use client";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
      <motion.div
        className="h-20 w-20 rounded-full border-8 border-lime-400 border-t-transparent animate-spin"
        style={{ borderColor: "#e6ff00", borderTopColor: "transparent" }}
      />
    </div>
  );
};

export default Loader;
