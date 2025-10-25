import { assets, serviceData } from "@/public/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Services = ({ isdarkmode, setIsdarkmode }) => {
  return (
    <section
      id="services"
      className={`relative w-full py-20 px-[10%] transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      {/* 🔹 Background Decorative Blurs */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/25 blur-3xl rounded-full -z-10" />

      {/* 🔹 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h4 className="text-lg font-Ovo opacity-80">What I Offer</h4>
        <h2 className="text-5xl font-bold font-Ovo mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
          My Services
        </h2>
        <p className="max-w-2xl mx-auto mt-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-Ovo">
          I create complete web solutions — from pixel-perfect UI to robust,
          scalable backends. My goal is to build fast, secure, and beautiful web
          experiences that help people and businesses grow.
        </p>
      </motion.div>

      {/* 🔹 Services Grid */}
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
>
  {serviceData.map(({ icon, title, description, link }, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.07, y: -8, rotate: 0.3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative p-8 rounded-2xl border overflow-hidden backdrop-blur-xl transition-all duration-700 group cursor-pointer
        ${
          isdarkmode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700"
            : "bg-gradient-to-br from-white via-blue-50 to-blue-100 border-gray-200"
        }
        shadow-lg hover:shadow-2xl hover:shadow-blue-500/30`}
    >
      {/* 🌈 Animated Glow Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl transition-opacity duration-700"></div>

      {/* 🌟 Icon Container */}
      <div
        className={`relative z-10 w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-xl transition-all duration-500
          ${
            isdarkmode
              ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
              : "bg-gradient-to-br from-blue-200/50 to-purple-100/50"
          }`}
      >
        <Image src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* 📝 Text Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-semibold mb-3 font-Ovo bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        {/* 🔗 Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            className="mt-6 inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm transition-all duration-300 hover:gap-3"
          >
            Learn More →
          </a>
        )}
      </div>

      {/* 🌌 Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/50 transition-all duration-700"></div>
    </motion.div>
  ))}
</motion.div>


      {/* 🔹 Bottom Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl rounded-full -z-10" />
    </section>
  );
};

export default Services;
