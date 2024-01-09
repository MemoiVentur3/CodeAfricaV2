import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import profile1 from '../assets/profile1.jpeg'
import profile5 from '../assets/profile5.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile6 from '../assets/profile6.jpeg'


const navigation = [
    { name: 'Sadiq', image: (profile3), role: 'CEO, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Isaac', image: (profile4), role: 'COO, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Bright', image: (profile6), role: 'CTO, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Adeyemi', image: (profile2), role: 'COMMUNITY LEAD, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Jackson', image: (profile1), role: 'PRODUCT LEAD, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Gabriel', image: (profile5), role: 'BRAND LEAD, Mintyplex', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
]

function Card() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {navigation.map((item) => (
                <div className='flex flex-col justify-between items-center gap-4 w-[300px] px-4 py-6 relative border rounded-2xl'>
                    <img src={item.image} className='rounded-[10px] w-[250px] h-[250px] object-cover' />
                    <div className='flex flex-col items-center'>
                        <div className='text-[28px] font-[700] '>{item.name}</div>
                        <div className='text-[16px] font-[400] '>{item.role}</div>
                    </div>
                    <div className='flex gap-4'>
                        <a href={item.twitter} target='_blank'><FaTwitter className="p-2 border rounded-full" size={40}/></a>
                        <a href={item.facebook} target='_blank'><FaFacebook className="p-2 border rounded-full" size={40}/></a>
                        <a href={item.linkedin} target='_blank'><FaLinkedin className="p-2 border rounded-full" size={40}/></a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card