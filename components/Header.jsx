import { assets } from "@/public/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Header = ({isdarkmode,setIsdarkmode}) => {
  return (
    <div className={` w-full px-10 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.tausif} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'am Tausif <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] mb-3 font-Ovo"
      >
        Full stack web developer based in India.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="max-w-2xl max-auto font-Ovo"
      >
        "Hi, I'm a passionate and skilled Full-Stack Web Developer with
        experience in designing, developing, and maintaining scalable and
        dynamic web applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{y:30, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex bg-black items-center gap-2 text-white dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-3" />
        </motion.a>
        <motion.a
           initial={{y:30, opacity: 0 }}
           whileInView={{y:0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 1.1 }}
           href="/Tausif__resume.pdf" target="_blank" rel="noopener noreferrer"
           className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My resume 
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
