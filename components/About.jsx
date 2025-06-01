import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/public/assets/assets";
import { motion } from "motion/react";

const About = ({isdarkmode,setIsdarkmode}) => {
  return (
    <motion.div
    initial={{opacity: 1 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 1.0 }}
    id="about" className={`w-full px-[12%] py-10 scroll-mt-20 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
      <motion.h4 
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      className="text-center mb-2 text-5xl font-Ovo">About me</motion.h2>
      <motion.div
         initial={{opacity: 0 }}
         whileInView={{opacity: 1,scale:1 }}
         transition={{ duration: 0.5,delay:0.3 }}
       className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div 
         initial={{opacity: 0 ,scale:0.6}}
         whileInView={{opacity: 1,scale:1.0 }}
         transition={{ duration: 0.6 }}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.mylaptop}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div 
         initial={{opacity: 0 }}
         whileInView={{opacity: 1 }}
         transition={{ duration: 1.2,delay:0.2}}
        className="flex-1 w-11/12">
          <p className="mb-10 max-w-2xl font-Ovo">
            "Hi, I'm Tausif, a passionate and skilled Full-Stack Web Developer
            with experience in designing, developing, and maintaining scalable
            and dynamic web applications. I specialize in creating user-friendly
            front-end interfaces and robust back-end architectures using modern
            technologies html,css,javascript, react, next.js,node.js,express.js,mongoDB,postgreSQL.
          </p>
          <motion.ul 
             initial={{x:-200,opacity: 0 }}
            whileInView={{x:0,opacity:1 }}
             transition={{ duration: 1.0}}
             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon,iconDark,title,description},index)=>(
                <motion.li
                whileHover={{ scale: 1.1 }} 
                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHower hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHower/50" key={index}>
                    <Image src={isdarkmode?iconDark:icon} alt={title} className="w-10 mt-3"/>
                    <h3 className="mt-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                    <p className="mt-4 text-sm text-gray-700 dark:text-white/80">{description}</p>
                </motion.li>
            ))}
          </motion.ul>
          <motion.h4
           initial={{y:20,opacity: 0 }}
           whileInView={{y:0,opacity: 1 }}
           transition={{ duration: 0.9}}
           className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>
          <motion.ul
           initial={{y:20,opacity: 0 }}
           whileInView={{y:0,opacity: 1 }}
           transition={{ duration: 1.0,delay:0.3}}
           className="flex items-center gap-3 sm:gap-5">
            {
                toolsData.map((tool,index)=>(
                    <motion.li whileHover={{ scale: 1.1 }} key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 shadow-black ">
                        <Image src={tool} alt="tool" className="w-5 sm:w-7"/>
                    </motion.li>
                ))
            }
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
