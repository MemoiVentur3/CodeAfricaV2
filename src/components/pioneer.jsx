import React from "react";
import pic1 from '../assets/15 18.svg'
import pic2 from '../assets/13 28.svg'
import pic3 from '../assets/19 21.svg'
import pic4 from '../assets/45 11.svg'
import { MediaQuerys } from '../base/mediaQuery'
const Pioneer = () => {
  const isMobile = MediaQuerys('(max-width:768px)')
  return (
    <>
      {isMobile === true ? 
      (
        <div className="my-[20px] px-[20px]">
      <div className="mx-auto  align-center justify-center">
        <div className='justify-center'>
          {/* <img src={pioneerBg} alt='bg' className="w-full"/> */}
          <div className="items-center align-center text-[#fff] justify-center flex flex-col gap-5 bg-Pioneer bg-no-repeat">
            <div className="flex justify-center items-center">
            </div>
            
            <div className="text-center">
              <h1 className="text-[28px] md:text-[48px] lg:text-[64px] font-[700] ">Let's Pioneer The Future of</h1>
              <span className="font-[700] text-[28px] md:text-[48px] lg:text-[64px] text-white"><b className="font-[700] text-[28px] md:text-[48px] lg:text-[64px] text-[#2063F2]">Developers</b> Together</span>
            </div>
            <p className="md:w-[600px] w-[320px] md:text-[16px] text-[14px] text-center ">We believe NFTs are the missing link to empowering and onboarding millions of people into the Web3 Space. Joining us takes us a step closer to achieving this.</p>
            <button className="px-8 py-4 bg-[#2063F2] rounded-[10px]">Join our community</button>
            <div className="flex justify-end items-end">
              <img src={pic4} className=''/>
               <img src={pic1} className=''/>
               <img src={pic3} className=''/>
               <img src={pic2} className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
      :
      (
     
          <div className="items-center justify-center flex flex-col gap-5 bg-Pioneer px-10 py-10 bg-no-repeat text-[#fff]">
          
            <div className="text-center">
              <h1 className="text-[64px] font-[700] ">Let's Pioneer The Future of</h1>
              <span className="font-[700] text-[64px] text-white"><b className="text-[#2063F2]">Developers</b> Together</span>
            </div>
            <p className="w-[600px] text-[24px] text-center ">We believe NFTs are the missing link to empowering and onboarding millions of people into the Web3 Space. Joining us takes us a step closer to achieving this.</p>
            <button className="px-8 py-4 bg-[#2063F2] rounded-full">Join our community</button>

            <div className="static">
              <img src={pic4} className='absolute left-[8rem] top-[228rem]'/>
               <img src={pic1} className='absolute left-[18rem] top-[237rem]'/>
               <img src={pic3} className='absolute right-[8rem] top-[228rem]'/>
               <img src={pic2} className='absolute right-[18rem] top-[237rem]'/>
            </div>
          </div>
       
      )}
    </>
    
  );
};

export default Pioneer;
  