import { assets } from "@/public/assets/assets";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Navbar = ({ isdarkmode, setIsdarkmode }) => {
  const sideMenuRef = useRef();
  const [isscroll, setIsscroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";

    const handleScroll = () => {
      if (window.scrollY > 50) setIsscroll(true);
      else setIsscroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <div className={`${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
      {/* Background Header Image (optional) */}
      <div className="fixed top-0 right-0 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 transition-all duration-300 ${
          isscroll
            ? "bg-white shadow-md dark:bg-darkTheme dark:shadow-white/20"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
   <a
  href="#top"
  className="flex flex-col leading-tight group transition-all duration-500"
>
  <h1
    className={`text-3xl font-extrabold font-Ovo bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent 
      group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500`}
  >
    Tausif
  </h1>
  <p
    className={`text-[13px] uppercase tracking-widest font-semibold 
      ${isdarkmode ? "text-gray-300 group-hover:text-blue-300" : "text-gray-700 group-hover:text-purple-600"} transition-all duration-300`}
  >
    Software Developer
  </p>
</a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-Ovo text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full dark:bg-blue-400"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsdarkmode((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Image
              src={isdarkmode ? assets.sun_icon : assets.moon_icon}
              alt="darkmode toggle"
              className="w-5 h-5"
            />
          </button>

          {/* Contact Button (desktop) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 border rounded-full border-gray-500 dark:border-white/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Contact
            <Image
              src={isdarkmode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden p-2" onClick={openMenu}>
            <Image
              src={isdarkmode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHower dark:text-white shadow-lg transform translate-x-[100%] transition-transform duration-300 flex flex-col gap-8 pt-24 px-6 z-50"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isdarkmode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="font-Ovo text-lg hover:text-blue-500 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
