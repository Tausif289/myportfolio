import { assets, serviceData } from "@/public/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
const Services = ({isdarkmode,setIsdarkmode}) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      id="services"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0}}
        className="text-center mb-2 text-5xl font-Ovo"
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0}}
        className=" text-center max-w-2xl mx-auto font-Ovo"
      >
        "Hi, I'm Tausif, a passionate and skilled Full-Stack Web Developer with
        experience in designing, developing, and maintaining scalable and
        dynamic web applications. I specialize in creating user-friendly
        front-end interfaces and robust back-end architectures using modern
        technologies like [mention key tools/frameworks you use, e.g., React,
        Node.js, Django, etc.].
      </motion.p>
      <motion.div
       initial={{x:200,opacity: 0 }}
       whileInView={{x:0,opacity: 1 }}
        transition={{ duration: 1.0}}
        className="grid grid-cols-auto  gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
           
            whileHover={{ scale: 1.1 }}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHower hover:-translate-x-1 duration-500 dark:hover:bg-darkHower dark:hover:shadow-white"
            key={index}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a className="flex items-center gap-2 text-sm " href={link}>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
