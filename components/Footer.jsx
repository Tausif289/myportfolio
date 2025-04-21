import React from 'react'
import Image from "next/image";
import { assets } from '@/public/assets/assets';
const Footer = ({isdarkmode,setIsdarkmode}) => {
  return (
    <div  className={`w-full px-[12%] py-10 scroll-mt-20 ${isdarkmode ? "dark:bg-darkTheme dark:text-white" : ""}`}>
        <div className="text-center">
          <Image src={isdarkmode?assets.tausiflogo:assets.tausiflogowhite} alt="" className="w-36 mx-auto mb-2"/>
          <div className="w-max flex  justify-center gap-2 mx-auto">
              <Image src={isdarkmode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6 mx-auto mb-2 text-center align-middle"/>
              ansartausif991@gmail.com
          </div>

        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>@ 2025 Tausif.All right reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><a target="blank" href="https://github.com/Tausif289">Github</a></li>
                <li><a target="blank" href="https://www.linkedin.com/in/tausif-ansar-292a6b308?">LinkedIn</a></li>
                <li><a target="blank" href="https://leetcode.com/u/tausifansar/">Leetcode</a></li>
                <li><a target="blank" href="https://www.geeksforgeeks.org/user/tausifa6rst/">GeeksforGeeks</a></li>       
            </ul>
        </div>
    </div>
  )
}

export default Footer
