import React from 'react'
import Rocket from '../assets/rocket1.svg'
import Item1 from '../assets/item1.svg'
import Item2 from '../assets/4911.svg'
import Item3 from '../assets/item3.svg'
import Item4 from '../assets/item4.svg'
import bg1 from '../assets/Ellipse 1.png'
import bg2 from '../assets/Ellipse 4.png'
import { MediaQuerys } from '../base/mediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
import css from '../gradient.module.css'
import ScrollingLogos from './slider'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../swiper.css'
// import required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
const Hero = () => {
  const isMobile = MediaQuerys('(max-width:768px)')
  const textArray = Array(14).fill("REGISTER NOW ");
  return (
    <>
      {isMobile == true ? (
        <div className="flex flex-col justify-center items-center">
          {/* <div className="static">
             <img src={bg1} className='absolute w-[15rem] left-[-2rem] top-[7rem]'/>
             <img src={bg2} className='absolute w-[15rem] top-[4rem] right[5rem]'/>
             </div> */}
          {/* <div className="static z-[99]">
            <img src={Item1} className="absolute  top-[22rem] left-[2rem] " />
            <img src={Item} className="absolute top-[20rem] left-[14rem] " />
          </div> */}
          <div className="flex flex-col justify-center items-center mt-5 gap-5 z-[99]">
            <h1 className="text-white text-[32px] text-center font-[700]">
              Pioneering The Future
            </h1>
            <h1 className='font-[700] text-[32px] flex justify-center items-center gap-1'>
              <span className='text-white'>of </span>
              <span className={css.gradient}>
                {' '}
                <b>Developers</b>
              </span>
              <img src={Rocket} alt="" className="w-[4rem]" />
            </h1>

            <p className="text-white text-[1.3rem] w-[18rem] text-center z-[99]">
              Join us for an immersive experience as we bring together a diverse community of developers, founders, product designers, VCs, KoLs and industry players in blockchain, AI and beyond.
            </p>
            <div className="flex justify-center gap-5 z-[99]">
              <button className="px-8 py-4 bg-sky-400 hover:bg-[#fff] hover:text-[#2063F2] text-[14px] text-[#fff] rounded-3xl">
                Learn More
              </button>
              <button className="px-8 py-4 bg-sky-400 hover:bg-[#fff] hover:text-[#2063F2] text-[14px] text-[#fff] rounded-3xl">
                Register Now
              </button>
            </div>
            <div className="bg-sky-400 h-11 flex items-center overflow-hidden">
              <p className="animate-marquee whitespace-nowrap">
                {textArray.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="items-center pb-40 justify-center flex flex-col gap-5">
          <div className="items-center justify-center flex flex-col gap-5">
            <div className="static">
              <img src={bg1} className='absolute w-[25rem] left-[4rem] top-[-5rem]' />
              <img src={bg2} className='absolute w-[35rem] top-[-3rem] right[-5rem]' />
            </div>
            <div className="static z-[99]">
              <img
                src={Item1}
                className="absolute  top-[27rem] left-[18rem]"
              />


              <img
                src={Item3}
                className="absolute top-[8rem] left-[8rem]"
              />
              <img
                src={Item4}
                className="absolute top-[8rem] right-[8rem]"
              />
            </div>
            <div className="text-center z-[99]">
              <h1 className="text-[72px] text-white font-[700] ">
                Pioneering The Future{' '}
              </h1>
              <h1 className='font-[700] text-[72px]  flex gap-2 justify-center items-center '>
                <span className='text-white'>of  </span>
                <span className={css.gradient}>
                  {' '}
                  Developers
                </span>
                <img src={Rocket} alt="" className="w-[6rem]" />
              </h1>
            </div>
            <p className="md:w-[600px] w-[60px] md:text-[24px] text-white text-[5rem] text-center z-[99]">
              Join us for an immersive experience as we bring together a diverse community of developers, founders, product designers, VCs, KoLs and industry players in blockchain, AI and beyond.
            </p>
            <div className="flex justify-center gap-5 z-[99]">
              <button className="px-8 py-4 bg-sky-400 hover:bg-[#fff] hover:text-[#2063F2] text-[14px] md:text-[22px] text-[#fff] rounded-3xl">
                Learn More
              </button>
              <button className="px-8 py-4 bg-sky-400 hover:bg-[#fff] hover:text-[#2063F2] text-[14px] md:text-[22px] text-[#fff] rounded-3xl">
                Register Now
              </button>
            </div>
            <ScrollingLogos />
            
          </div>
          {/* <div className="flex justify-center items-end z-[99]">
            <img src={frame2} className="w-[auto] h-[20rem]" />
            <img src={frame3} className="w-[auto] h-[16rem]" />
            <img src={frame4} className="w-[auto] h-[10rem]" />
            <img src={frame5} className="w-[auto] h-[10rem]" />
            <img src={frame6} className="w-[auto] h-[16rem]" />
            <img src={frame7} className="w-[auto] h-[20rem]" />
          </div>
          <div className="flex gap-[20px] text-[#000] z-[99] text-[24px] font-[700] bg-sky-400 w-full align-center justify-around relative bottom-[5rem] p-[1rem]">
            <div>Mintyplex</div>
            <div>Mintyplex</div>
            <div>Mintyplex</div>
            <div>Mintyplex</div>
            <div>Mintyplex</div>
          </div> */}
        </div>
      )}
    </>
  )
}

export default Hero
