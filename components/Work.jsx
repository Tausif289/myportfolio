import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const Work = ({isdarkmode,setIsdarkmode}) => {
  return (
    <motion.div 
    initial={{ opacity: 1 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    id="work" className={`w-full px-[12%] py-10 scroll-mt-20 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
       <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
       className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
      <motion.h2 
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-5xl font-Ovo">My latest work</motion.h2>
      <motion.p
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
       className=" text-center max-w-2xl mx-auto font-Ovo">
       Welcome to my web development portfolio explore a collection of projects showcasing  my expertise in web devlopment
      </motion.p>
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.7,delay:0.6 }}
       className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project,index)=>(
            <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             whileHover={{ scale: 0.9 }}
             transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
             key={index} style={{backgroundImage:`url(${project.bgImage.src})`}} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" >
               <div className="bg-gray-200 w-10/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-[2px_2px_0_#000]">
                  <div className="" >
                     <h2 className="font-semibold dark:text-black">{project.title}</h2>
                     <p className="text-sm text-gray-700">{project.description}</p>
                   </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] bg  group-hover:bg-slate-300 transition">
                    <Image src={isdarkmode?assets.right_arrow_bold_dark:assets.send_icon} alt="send icon" className="w-5"/>
                  </div>

               </div>
                
            </motion.div>
        ))}
      </motion.div>
      <motion.a  
      whileHover={{ scale: 1.1 }}
      href="" className="w-max flex items-center justify-center text-gray-700 gap-2  border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHower duration-500 hover:shadow-black dark:text-white dark:border-white dark:hover:bg-darkHower">Show more <Image src={isdarkmode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt="" className="w-4"/></motion.a>
    </motion.div>
  )
}

export default Work

