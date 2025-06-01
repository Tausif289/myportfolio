import { assets } from '@/public/assets/assets'
import React, { useRef ,useEffect,useState}  from 'react'
import Image from "next/image";


const Navbar = ({isdarkmode,setIsdarkmode}) => {
    const sideMenuRef= useRef();
    const [isscroll,setIsscroll]=useState(false)
    const openMenu=()=>{
        sideMenuRef.current.style.transform='translateX(-16rem)'
    }
    const closeMenu=()=>{
        sideMenuRef.current.style.transform='translateX(16rem)'
    }
    useEffect(()=>{
        document.body.style.overflowX = 'hidden';
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
               setIsscroll(true)
            }else{
               setIsscroll(false)
            }
        })
    },[])
  return (
    <div className={`${isdarkmode ?"dark:bg-darkTheme dark:text-white" : ""}`}>
    <div className="fixed top-0 right-0  -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
    </div>
      <nav className={`w-full fixed px-10 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isscroll?'bg-white shadow-sm dark:bg-darkTheme dark:shadow-white/20':"" }`}>
        <a href="">
            <Image src={isdarkmode?assets.tausiflogo:assets.tausiflogowhite} alt=""  className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isscroll?"":"bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About</a></li>
            <li><a className="font-Ovo" href="#services">Services</a></li>
            <li><a className="font-Ovo" href="#work">My work</a></li>
            <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>
        
        <div className="flex items-center gap-4">
            <button onClick={()=>setIsdarkmode(prev=>!prev)}>
                <Image src={isdarkmode?assets.sun_icon:assets.moon_icon} alt="" className="w-6"/>
            </button>
            <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ">Contact <Image src={isdarkmode?assets.arrow_icon_dark:assets.arrow_icon} alt="" className="w-3"/></a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isdarkmode?assets.menu_white:assets.menu_black} alt="" className='w-6 '/>
            </button>
        </div>

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
         top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHower dark:text-white">
            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <Image src={isdarkmode?assets.close_white:assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>
            <li><a onClick={closeMenu} className="font-Ovo" href="#top">Home</a></li>
            <li><a onClick={closeMenu} className="font-Ovo" href="#about">About</a></li>
            <li><a onClick={closeMenu} className="font-Ovo" href="#services">Services</a></li>
            <li><a onClick={closeMenu} className="font-Ovo" href="#work">My work</a></li>
            <li><a onClick={closeMenu} className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
