import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import { motion } from "motion/react";

const Contact = ({ isdarkmode, setIsdarkmode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2aa3a44b-6054-4a04-a8f1-c2837d835314");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <section
      id="contact"
      className={`relative w-full py-20 px-[10%] transition-all duration-500 ${
        isdarkmode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      {/* 🔹 Background Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/25 blur-3xl rounded-full -z-10" />

      {/* 🔹 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <h4 className="text-lg font-Ovo opacity-80">Get in Touch</h4>
        <h2 className="text-5xl font-bold font-Ovo mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
          Contact Me
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-Ovo">
          I'd love to hear from you! Fill out the form below with any questions, comments, or feedback.
        </p>
      </motion.div>

      {/* 🔹 Form Card */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className={`max-w-3xl mx-auto p-10 rounded-2xl backdrop-blur-md border transition-all duration-500
          ${isdarkmode
            ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/70 hover:shadow-lg hover:shadow-purple-500/30"
            : "bg-white/60 border-gray-200 hover:bg-white/80 hover:shadow-lg hover:shadow-blue-400/30"
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 outline-none transition mb-6"
        ></textarea>

        <button
          type="submit"
          className="flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition-all dark:bg-transparent dark:border dark:border-white/50 dark:hover:bg-darkHower mx-auto"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        {result && (
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300 font-Ovo">
            {result}
          </p>
        )}
      </motion.form>

      {/* 🔹 Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl rounded-full -z-10" />
    </section>
  );
};

export default Contact;
