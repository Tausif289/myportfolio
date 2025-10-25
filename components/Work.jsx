import { assets, workData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isdarkmode, setIsdarkmode }) => {
  return (
    <section
      id="work"
      className={`relative w-full py-20 px-[10%] transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      {/* 🔹 Background Decorative Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/25 blur-3xl rounded-full -z-10" />

      {/* 🔹 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h4 className="text-lg font-Ovo opacity-80">My Portfolio</h4>
        <h2 className="text-5xl font-bold font-Ovo mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
          My Latest Work
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-Ovo">
          Explore my recent web projects — each crafted with performance,
          design, and scalability in mind. From front-end creativity to
          full-stack functionality, these works show my passion for coding.
        </p>
      </motion.div>

      {/* 🔹 Projects Grid */}
     {/* 🔹 Projects Grid */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
>
  {workData.map((project, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      {/* 🔹 Background Image */}
      <Image
        src={project.bgImage}
        alt={project.title}
        className="object-cover w-full h-64 rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
      />

      {/* 🔹 Project Info BELOW the image */}
      <div className="text-center w-full px-5 py-4 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-b-2xl shadow-md transition-all duration-500">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Image
            src={
              isdarkmode
                ? assets.right_arrow_bold_dark
                : assets.send_icon
            }
            alt="arrow"
            className="w-5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>



      {/* 🔹 Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl rounded-full -z-10" />
    </section>
  );
};

export default Work;
