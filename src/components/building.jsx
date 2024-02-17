import React from "react"
import item2 from '../assets/item2.svg'
import image from '../assets/Rectangle.png'
import image2 from '../assets/conn.jpeg'
import image3 from '../assets/aud.jpeg'
import image4 from '../assets/hackathon.jpeg'

const navigation = [
  { title: 'Pre-Hackathon Week', details: 'Engage with our community through pre-events, hackathons, AMAs, bounties, campaigns, virtual happy hours, and casual meetups.', image: (image4) },
  { title: 'Keynote Speeches', details: ' Attend exciting keynote speeches from industry experts, developers, and founders.', image: (image3) },
  { title: 'Networking', details: 'Connect with industry movers and shakers. Hear from industry experts, developers, founders, and more in engaging deep tech talks.', image: (image2) },
  { title: 'Awards & After Party', details: 'Get ready to strut your stuff and pop the champagne as we honor the brightest stars in our community. Moments  of glitz, glam, and unforgettable experiences.', image: (image) },
]

export default function Building() {

  return (
    <div id="About" className='my-[20px] px-[20px]'>
      <div className='container mx-auto text-white'>
        <div className='py-4 flex flex-col justify-center items-center gap-2'>
          <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
              <h1 className="text-[28px] text-[#04BCD4] md:text-[55px] font-[700] text-center ">Who we Are</h1>
              <img src={item2} alt='' className="w-[2rem] lg:w-[6rem]" />
            </div>
            <h4 className="w-[320px] md:text-[26px] mt-5 text-[14px] text-center md:w-[700px]">
            At Code Africa, we believe developers are the architects of the digital future. This event transcends the traditional conference model, serving as a central hub where technical subjects are discussed, offering a deep dive for ambitious developers, visionary founders, product designers, investors, VCs, and accelerators.</h4>
          </div>
          <div id="Expect" className='flex justify-center pt-20 items-center'>
              <h1 className="text-[28px] md:text-[55px] font-[700] text-[#04BCD4] text-center ">What to Expect</h1>
              <img src={item2} alt='' className="w-[2rem] lg:w-[6rem]" />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10">
            {navigation.map((item) => (
                    <div className='flex flex-col justify-center items-center w-[300px] px-4 py-6 relative border rounded-2xl'>
                        <img src={item.image} className='rounded-[10px] w-[250px] h-[250px] object-cover' />
                        <div className='text-[20px] text-center text-[#04BCD4] font-[700] '>{item.title}</div>
                        <div className='text-[16px] font-[400] text-center'>{item.details}</div>
                        
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

