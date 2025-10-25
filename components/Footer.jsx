import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { motion } from "motion/react";

const Footer = ({ isdarkmode, setIsdarkmode }) => {
  return (
    <section
      id="footer"
      className={`relative w-full py-16 px-[10%] transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      {/* 🔹 Background Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/25 blur-3xl rounded-full -z-10" />

      {/* 🔹 Logo & Contact */}
      <div className="text-center mb-12">
       
        <div className="inline-flex items-center gap-2 text-sm sm:text-base font-Ovo bg-white/20 dark:bg-gray-800/40 rounded-full px-4 py-2 backdrop-blur-md">
          <Image
            src={isdarkmode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email"
            className="w-5 h-5"
          />
          ansartausif991@gmail.com
        </div>
      </div>

      {/* 🔹 Social Links */}
      <div className="text-center border-t border-gray-400 dark:border-gray-600 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <p className="font-Ovo text-sm sm:text-base">@ 2025 Tausif. All rights reserved.</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/Tausif289"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tausif-ansar-292a6b308?"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/tausifansar/"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              Leetcode
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/user/tausifa6rst/"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
            >
              GeeksforGeeks
            </a>
          </li>
        </ul>
      </div>

      {/* 🔹 Bottom Glow */}
      
    </section>
  );
};

export default Footer;
