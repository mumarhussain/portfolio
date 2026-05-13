"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Calendar,
  Github,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { projectsData } from "./data";
import Image from "next/image";
import Link from "next/link";

const premiumEase = [0.25, 0.46, 0.45, 0.94];

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: premiumEase,
    },
  },
};

const ProjectCard = ({ project, index, isInView }) => {
  const isComplete = project.status === "Complete";
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView={isInView ? "visible" : "hidden"}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        ease: premiumEase,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-500 hover:border-limeYellow/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_40px_rgba(230,255,0,0.08)] ${
        project.featured
          ? "border-limeYellow/20 ring-1 ring-limeYellow/10"
          : "border-white/[0.08]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-limeYellow/[0.06] blur-3xl" />
      </div>

      <div className="relative h-52 overflow-hidden sm:h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-limeYellow/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
          {isComplete && hasLiveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex translate-y-3 items-center gap-2 rounded-sm bg-limeYellow px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Live
            </Link>
          ) : (
            <span className="inline-flex translate-y-3 items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
              In Development
            </span>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex translate-y-3 items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100 hover:border-limeYellow/40 hover:text-limeYellow"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
              isComplete
                ? "border-limeYellow/30 bg-limeYellow/15 text-limeYellow"
                : "border-orange-400/30 bg-orange-500/15 text-orange-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isComplete ? "bg-limeYellow" : "animate-pulse bg-orange-400"
              }`}
            />
            {isComplete ? "Live" : "In Process"}
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-limeYellow" />
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-4 right-4 text-4xl font-black leading-none text-white/[0.08] select-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
            <Calendar className="h-3 w-3" />
            <span>{project.date}</span>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-limeYellow sm:text-2xl">
          {project.title}
        </h3>

        <div className="mb-4 h-[2px] w-10 bg-limeYellow/50" />

        {project.description && (
          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-white/50">
            {project.description}
          </p>
        )}

        <div className="mb-6 flex-1">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70 transition-colors duration-300 hover:border-limeYellow/25 hover:bg-limeYellow/[0.06] hover:text-limeYellow/90"
              >
                <span className="h-1 w-1 rounded-full bg-limeYellow/70" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 border-t border-white/[0.06] pt-5">
          {isComplete && hasLiveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-limeYellow px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_24px_rgba(230,255,0,0.35)] sm:flex-none"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-orange-400/20 bg-orange-500/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-orange-300/80 sm:flex-none">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
              Coming Soon
            </span>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-limeYellow/30 hover:text-limeYellow"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: premiumEase },
    },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/10 px-6 py-24 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-limeYellow/[0.025] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 h-56 w-56 rounded-full bg-limeYellow/[0.02] blur-[80px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-limeYellow/70">
            Selected Work
          </p>
          <h2 className="text-start text-4xl font-bold tracking-tight text-white lg:text-5xl">
            My Projects
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-[2px] w-12 shrink-0 bg-limeYellow" />
            <span className="text-sm leading-none text-limeYellow">✦</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { Projects };
