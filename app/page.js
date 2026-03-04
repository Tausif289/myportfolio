'use client'
import React, { useEffect, useState } from 'react'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  const [isdarkmode,setIsdarkmode]=useState(false);

  useEffect(()=>{
    if(
      localStorage.theme==='dark' || 
      (!('theme' in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
    ){
      setIsdarkmode(true);
    }else{
      setIsdarkmode(false);
    }
  },[])

  useEffect(()=>{
    if(isdarkmode){
      document.documentElement.classList.add('dark');
      localStorage.theme ='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='light';
    }
  },[isdarkmode])

  return (
      <div
        className={`min-h-screen flex flex-col transition-all duration-500 ${
          isdarkmode
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <Navbar isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>

        {/* 👇 This pushes footer down */}
        <div className="flex-grow">
          <Header isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
          <About isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
          <Services isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
          <Work isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
          <Contact isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
        </div>

        <Footer isdarkmode={isdarkmode} setIsdarkmode={setIsdarkmode}/>
      </div>
  );
}