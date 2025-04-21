import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { motion } from "motion/react";

const Contact = ({isdarkmode,setIsdarkmode}) => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2aa3a44b-6054-4a04-a8f1-c2837d835314");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <motion.div 
    initial={{ opacity: 1}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    id="contact" className={`w-full px-[12%] py-10 scroll-mt-20 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
      <motion.h4 
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-Ovo">Contact with me</motion.h4>
      <motion.h2
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.3 }} 
       className="text-center mb-2 text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p 
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.7, delay: 0.5 }}
      className=" text-center max-w-2xl mx-auto font-Ovo">
        I'd love to hear from you! If you have any quetions, comments, or
        feedback, please use the form below.
      </motion.p>
      <motion.form
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1.0 }}
       onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.7}}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHower/30"
            type="text"
            placeholder="Enter your name"
            required
            name="name"

          />
          <motion.input
           initial={{ x: 100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.7, delay: 0.5 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHower/30"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <motion.textarea
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHower/30 "
          rows="6"
          placeholder="enter your message"
          name="message"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHower"
          type="submit"
        >
          Submit now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        <p>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
