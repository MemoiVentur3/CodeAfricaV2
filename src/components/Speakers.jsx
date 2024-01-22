import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import profile1 from '../assets/profile1.jpeg'
import profile5 from '../assets/profile5.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile6 from '../assets/profile6.jpeg'


const navigation = [
    { name: 'Pieter Buikema', image: (profile3), role: 'Co-instagator, ETHSafari', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Lin Yang', image: (profile4), role: 'Founding Partner, Aqua Labs', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Kate Kallot', image: (profile6), role: 'Founder & CEO, Amini', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Eric Anan', image: (profile2), role: 'CEO, AyaHQ', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Johnpaul Nwobodo', image: (profile1), role: 'Investment Analyst, Adaverse', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Israel Ayodeji', image: (profile5), role: 'Founder, Web3Bridge', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
]

function SpeakersExtended() {
    return (
        <div>
            <div className='container  mx-auto text-white'>
                <div className='py-4 flex flex-col justify-center items-center gap-12'>
                    <div className='flex gap-2 items-center'>
                        <h1 className="text-[28px] md:text-[45px] text-[#04BCD4] font-[700] ">Our Amazing Speakers</h1>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {navigation.map((item) => (
                            <div className='flex flex-col justify-between items-center gap-4 w-[300px] px-4 py-6 relative border rounded-2xl'>
                                <img src={item.image} className='rounded-[10px] w-[250px] h-[250px] object-cover' />
                                <div className='flex flex-col items-center'>
                                    <div className='text-[28px] text-[#04BCD4] font-[700] '>{item.name}</div>
                                    <div className='text-[16px] font-[400] '>{item.role}</div>
                                </div>
                                {/* <div className='flex gap-4'>
                        <a href={item.twitter} target='_blank'><FaTwitter className="p-2 border rounded-full" size={40}/></a>
                        <a href={item.facebook} target='_blank'><FaFacebook className="p-2 border rounded-full" size={40}/></a>
                        <a href={item.linkedin} target='_blank'><FaLinkedin className="p-2 border rounded-full" size={40}/></a>
                    </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakersExtended