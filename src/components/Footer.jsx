import React from "react";
import { FaDiscord, FaTwitter, FaFacebook, FaMedium, FaInstagram, FaLinkedin, FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import MintyplexLogo from "../assets/Memoi.png";
import Letter from "../assets/Letter.svg"
import Plain from "../assets/Plain.svg"
import Phone from "../assets/Phone Rounded.svg"
import BlueLetter from "../assets/BlueLetter.svg"
import { MediaQuerys } from '../base/mediaQuery'

const Footer = () => {
  const isMobile = MediaQuerys('(max-width:720px)')

  return (
    <>
    {isMobile == true ? 
      (
        <div className="text-[#fff] px-[20px]">
      <div className="mx-auto ">
        <div className="py-12 flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-3 items-top lg:justify-items-center ">
            <div className="flex flex-col gap-4">
              <div className="w-[90px]"><img src={MintyplexLogo} alt="MintyplexLogo" /></div>
              <h5 className="w-[350px] ">Code Africa is created by Developers, for Developers. We aim to expand the developer ecosystem in Africa, driving conversations about skills enhancement, inclusiveness, opportunities, and innovation.</h5>
            </div>
            <div>
              
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-4">
                  <img src={BlueLetter} className='w-15'/>
                  <text>elisha@memoiafrica.com</text>
                </div>
                <div className="flex gap-4 ">
                  <img src={Phone} className='w-15'/>
                  <text>+234 903-263-2415</text>
                </div>
              </div>
            </div>
            
          </div>
          <hr/>
          <div className=" flex flex-col justfy-center items-center gap-4 text-[#838998]">
            <div>
              <text><b>Code Africa</b> @ 2024. All right reserved.</text>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaDiscord className="p-2 border rounded-full " size={40} />
              <FaTwitter className="p-2 border rounded-full " size={40}/>
              {/* <FaFacebook className="p-2 border rounded-full " size={40}/> */}
              <FaTelegram className="p-2 border rounded-full " size={40}/>
              {/* <FaMedium className="p-2 border rounded-full " size={40}/> */}
              {/* <FaInstagram className="p-2 border rounded-full " size={40}/> */}
              {/* <FaLinkedin className="p-2 border rounded-full " size={40}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    ):
    (
      <div className="text-[#fff] px-[20px]">
      <div className="mx-auto ">
        <div className="py-12 flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-3 items-top lg:justify-items-center ">
            <div className="flex flex-col gap-4">
              <div className="w-[40px]"><img src={MintyplexLogo} alt="MintyplexLogo" /></div>
              <h5 className="w-[350px] ">Code Africa is created by Developers, for Developers. We aim to expand the developer ecosystem in Africa, driving conversations about skills enhancement, inclusiveness, opportunities, and innovation.</h5>
            </div>
            <div>
              <div className="text-[28px] font-[600] mt-5 pb-4  ">Say Hello</div>
              <div className="flex flex-col gap-4 ">
                <div className="flex gap-4">
                  <img src={BlueLetter} className='w-15'/>
                  <text>elisha@memoiafrica.com</text>
                </div>
                <div className="flex gap-4 ">
                  <img src={Phone} className='w-15'/>
                  <text>+234 903-263-2415</text>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[28px] font-[600] mt-5 pb-4 text-center">Stay in the know</div>
              <div className="bg-none flex justify-end items-end text-center">
                <img src={Letter} className='w-15'/>
                <input type="text" name="" id="" placeholder="Enter your email here" className="p-[8px] bg-transparent border-r-transparent border-l-transparent border-b-2 border-slate-400 outline-none" />
                <img src={Plain} className='w-15'/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="flex justify-around items-center  text-[#838998] ">
              <text><b>Code Africa</b> @ 2024. All right reserved.</text>
            <div className="flex gap-2 items-center justify-center">
              <FaDiscord className="p-2 border rounded-full " size={40} />
              <FaTwitter className="p-2 border rounded-full " size={40}/>
              {/* <FaFacebook className="p-2 border rounded-full " size={40}/> */}
              <FaTelegram className="p-2 border rounded-full " size={40}/>
              {/* <FaMedium className="p-2 border rounded-full " size={40}/> */}
              {/* <FaInstagram className="p-2 border rounded-full " size={40}/> */}
              {/* <FaLinkedin className="p-2 border rounded-full " size={40}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
  
};

export default Footer;
