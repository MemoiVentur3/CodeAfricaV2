import React from "react"
import item from '../assets/item.svg'
import Card from "./cards"
import ScrollingLogos from "./slider";
import Partners from "./partners";
import Sponsors from "./Sponsors";
import HackathonPartners from "./HackathonPartners";

export default function Team() {

  return (

    <div id="Speakers" className='my-[20px] px-[20px]'>
      <div className='container  mx-auto text-white'>
        <div className='py-4 flex flex-col justify-center items-center gap-12'>
          <div className="flex flex-col justify-center items-center">
            <div className='flex gap-2 items-center'>
              <h1 className="text-[28px] md:text-[45px] text-[#04BCD4] font-[700] ">Our Amazing Speakers</h1>

            </div>
            <h4 className="w-[320px] md:text-[26px] text-[14px] text-center md:w-[700px]">Our distinguished speakers are selected from across the world and Africa to bring a wealth of knowledge and experience to Code Africa Conference.</h4>
          </div>
          <div>
            <Card />
          </div>
          <div className="flex justify-center gap-5 z-[99]">
            <a href="/speaker">
              <button className="px-8 py-4 bg-[#04BCD4] hover:bg-[#fff] hover:text-[#04BCD4] text-[14px] md:text-[22px] text-[#fff] rounded-3xl">
                See More Speakers
              </button>
            </a> 
            </div>
        </div>
      </div>
      <div id="Sponsors" className='mx-auto text-white'>
        <div className='py-4 flex flex-col justify-center items-center gap-12'>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <Sponsors />
              <HackathonPartners />
              <Partners />
            </div>
            {/* <div>
              <ScrollingLogos className="hidden" />
            </div> */}
          </div>
          </div>
        </div>
      
    </div>
      )
}