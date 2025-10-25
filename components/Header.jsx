"use client";
import { assets } from "@/public/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Header = ({ isdarkmode }) => {
  return (
    <section
      className={`relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 px-8 lg:px-20 py-16 transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      {/* === LEFT SIDE (TEXT) === */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start w-full lg:w-1/2 text-left z-10"
      >
        <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold font-Ovo mb-2">
          Hi! I’m Tausif{" "}
          <Image src={assets.hand_icon} alt="👋" className="w-6 inline-block" />
        </h3>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 font-Ovo
          bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          Full-Stack Web Developer
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl leading-relaxed">
          I specialize in building high-quality, scalable, and beautiful web
          applications using modern technologies like{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
            MERN , MEAN
          </span>{" "}
          and{" "}
          <span className="font-semibold text-purple-500 dark:text-purple-400">
            Next.js
          </span>
          . My goal is to create seamless user experiences that blend design and
          performance.
        </p>

        {/* 🔹 Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="px-8 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:shadow-purple-400/50 transition-all"
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Tausif__resume_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-lg font-medium border border-gray-400/50 backdrop-blur-sm
            bg-white/30 dark:bg-gray-800/50 hover:bg-white/50 dark:hover:bg-gray-700/70 transition-all"
          >
            My Resume
          </motion.a>
        </div>
      </motion.div>

      {/* === RIGHT SIDE (IMAGE) === */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full lg:w-1/2 flex justify-center items-center"
      >
        {/* 🔹 Glow Background Circle */}
        <div className="absolute w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" />

        {/* 🔹 Profile Image with subtle float */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <Image
            src={assets.tausif}
            alt="Tausif Ansar"
            className="w-52 sm:w-64 lg:w-80 rounded-full border-4 border-white/20 shadow-xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* === Background Decoration Blobs === */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default Header;
