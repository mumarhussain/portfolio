// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { GraduationCap, Calendar, MapPin } from "lucide-react";

// const Education = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const education = [
//     {
//       degree: "Master of Science in Computer Science",
//       school: "Stanford University",
//       location: "Stanford, CA",
//       period: "2018 - 2020",
//       description:
//         "Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude.",
//       achievements: ["GPA: 3.9/4.0", "Research Assistant", "Dean's List"],
//     },
//     {
//       degree: "Bachelor of Science in Software Engineering",
//       school: "University of California, Berkeley",
//       location: "Berkeley, CA",
//       period: "2014 - 2018",
//       description:
//         "Focused on full-stack development and computer systems. Active in coding competitions.",
//       achievements: [
//         "GPA: 3.8/4.0",
//         "ACM Programming Team",
//         "Hackathon Winner",
//       ],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { x: -20, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <section
//       id="education"
//       className="px-8 md:px-16 py-16 border-b border-white/10"
//     >
//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//         >
//           <span className="bg-gradient-to-r from-limeYellow to-[#b8cc00] bg-clip-text text-transparent">
//             Education
//           </span>
//         </motion.h2>

//         <div className="space-y-8 max-w-4xl mx-auto">
//           {education.map((edu, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8"
//             >
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-center mb-2">
//                     <GraduationCap className="w-6 h-6 text-limeYellow mr-3" />
//                     <h3 className="text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                   </div>
//                   <h4 className="text-lg text-limeYellow font-medium mb-2">
//                     {edu.school}
//                   </h4>
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/60 mb-4">
//                     <div className="flex items-center mb-2 sm:mb-0">
//                       <MapPin className="w-4 h-4 mr-2" />
//                       <span>{edu.location}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Calendar className="w-4 h-4 mr-2" />
//                       <span>{edu.period}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-white/80 mb-4 leading-relaxed">
//                 {edu.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {edu.achievements.map((achievement, achievementIndex) => (
//                   <span
//                     key={achievementIndex}
//                     className="px-3 py-1 bg-limeYellow/20 rounded-full text-sm text-limeYellow border border-limeYellow/30"
//                   >
//                     {achievement}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export { Education };

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "MERN Developer",
    company: "DGSol Marketing Agency",
    location: "Faisalabad, Pakistan",
    period: "2024 - Present",
    description:
      "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
  },
  {
    title: "Frontend Developer",
    company: "Three Arrow Solutions",
    location: "Faisalabad, Pakistan",
    period: "2021 - 2022",
    description:
      "I would gladly pay over 600 dollars for tavonline. Tavonline has really helped our business. I like tavonline more and more each day because it makes my life a lot easier.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="relative px-8 md:px-16 py-16">
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-25 h-[48%] w-px bg-limeYellow -translate-x-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="-space-y-12 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg text-center mb-12"
        >
          <span className="mt-5 px-6 py-3 cursor-pointer bg-white text-black  rounded-full hover:bg-[#d4e600] transition-colors duration-200 shadow-lg">
            🎓 Education
          </span>
        </motion.h2>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative flex w-full justify-${
                isLeft ? "start" : "end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-17 w-4 h-4 bg-limeYellow rounded-full border-4 border-black -translate-x-1/2" />

              {/* Card */}
              <div
                className={`
                  relative bg-white/5 border border-white/10 rounded-2xl p-6
                  w-full md:w-[47%] 
                  ${isLeft ? "pr-8 md:mr-5" : "pl-8 md: ml-5"}
                `}
              >
                {/* Pointer triangle */}
                <div
                  className={`absolute top-15 z-20 ${
                    isLeft
                      ? "right-0 -mr-3.5 border-l-[14px]"
                      : "left-0 -ml-3.5 border-r-[14px]"
                  } border-t-[14px] border-b-[14px] border-transparent ${
                    isLeft ? "border-l-white/5" : "border-r-white/5"
                  }`}
                />

                <div className="flex items-center mb-2">
                  <Briefcase className="w-6 h-6 text-limeYellow mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                </div>

                <h4 className="text-lg text-limeYellow font-medium mb-2">
                  {exp.company}
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/60 mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export { Education };
