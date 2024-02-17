import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import profile1 from '../assets/profile1.jpeg'
import profile5 from '../assets/profile5.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile6 from '../assets/profile6.jpeg'
import profile7 from '../assets/profile7.jpeg'
import profile10 from '../assets/profile10.jpeg'


const navigation = [
    { name: 'Pieter Buikema', image: (profile3), role: 'Co-instagator, ETHSafari & Aragon Technical Support', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Lin Yang', image: (profile4), role: 'Founding Partner, Aqua Labs', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Kate Kallot', image: (profile6), role: 'Founder & CEO, Amini', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Eric Anan', image: (profile2), role: 'CEO, AyaHQ', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Yoseph Ayele', image: (profile10), role: 'Founder, Magma', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Israel Ayodeji', image: (profile5), role: 'Founder, Web3Bridge', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    
]

function Card() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {navigation.map((item) => (
                <div className='flex flex-col justify-between items-center gap-4 w-[300px] px-4 py-6 relative border rounded-2xl'>
                    <img src={item.image} className='rounded-[10px] w-[250px] h-[250px] object-cover' />
                    <div className='flex flex-col items-center'>
                        <div className='text-[28px] text-[#04BCD4] font-[700] '>{item.name}</div>
                        <div className='text-[16px] text-center font-[400] '>{item.role}</div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card