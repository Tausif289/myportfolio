"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/public/assets/assets";
import { motion } from "motion/react";

const About = ({ isdarkmode }) => {
  return (
    <section
      id="about"
      className={`relative w-full min-h-screen flex flex-col items-center justify-center gap-12 px-8 lg:px-20 py-20 transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      {/* === TEXT CONTENT CENTERED === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold mb-2 font-Ovo text-blue-500"
        >
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10 font-Ovo"
        >
          Hi, I'm <span className="font-semibold text-blue-500">Tausif</span> — a
          passionate and skilled Full-Stack Web Developer. I specialize in
          designing, developing, and maintaining dynamic web applications that
          combine clean UI with solid backend logic. My expertise spans{" "}
          <strong>
            HTML, CSS, JavaScript,Typescript React, Next.js,Angular Node.js, Express.js, MongoDB,
          </strong>{" "}
          and <strong>PostgreSQL</strong>. I love turning ideas into interactive,
          scalable products.
        </motion.p>
      </motion.div>

      {/* === INFO CARDS === */}
     <motion.ul
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full"
>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <motion.li
      key={index}
      whileHover={{ scale: 1.07, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 250 }}
      className={`relative group p-8 rounded-2xl overflow-hidden border 
        ${
          isdarkmode
            ? "border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "border-gray-200 bg-gradient-to-br from-white via-blue-50 to-blue-100"
        }
        shadow-lg hover:shadow-2xl transition-all duration-500`}
    >
      {/* 🔹 Glowing Gradient Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg"></div>

      {/* 🔹 Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`p-3 rounded-xl mb-5 transition-all duration-500 ${
            isdarkmode
              ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
              : "bg-gradient-to-br from-blue-200/50 to-purple-100/50"
          }`}
        >
          <Image
            src={isdarkmode ? iconDark : icon}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        </div>

        <h3 className="font-semibold text-lg md:text-xl mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* 🔹 Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/60 transition-all duration-700"></div>
    </motion.li>
  ))}
</motion.ul>

      {/* === TOOLS SECTION === */}
      <div className="flex flex-col items-center mt-10">
        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-semibold mb-4 font-Ovo text-blue-500"
        >
          Tools I Use
        </motion.h4>

        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
        >
          {toolsData.map((tool, index) => (
            <motion.li
              whileHover={{ scale: 1.15 }}
              key={index}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400/50 rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/50 hover:-translate-y-1 transition-all"
            >
              <Image src={tool} alt="tool" className="w-5 sm:w-7" />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* === BACKGROUND BLOBS === */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default About;
