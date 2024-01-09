import React from "react"
import item from '../assets/item.svg'
import Card from "./cards"


export default function Team() {
  const textArray = Array(14).fill("REGISTER NOW ");

  return (
    <div className='my-[20px] px-[20px]'>
      <div className='container  mx-auto text-white'>
        <div className='py-4 flex flex-col justify-center items-center gap-12'>
          <div className="flex flex-col justify-center items-center">
            <div className='flex gap-2 items-center'>
              <h1 className="text-[28px] md:text-[45px] font-[700] ">Our Amazing Speakers</h1>
              
            </div>
            <h4 className="w-[320px] md:text-[26px] text-[14px] text-center md:w-[700px]">Our distinguished speakers are selected from across the world and Africa to bring a wealth of knowledge and experience to Code Africa Conference.</h4>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
      <div className="bg-sky-400 w-screen h-[80px] mt-[25px] flex items-center ">
              <p className="animate-marquee font-extrabold text-[40px] whitespace-nowrap">
                {textArray.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </p>
            </div>
    </div>
  )
}

