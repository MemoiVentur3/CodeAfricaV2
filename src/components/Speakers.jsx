import React from 'react'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import profile1 from '../assets/profile1.jpeg'
import profile5 from '../assets/profile5.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile6 from '../assets/profile6.jpeg'
import profile7 from '../assets/profile7.jpeg'
import profile8 from '../assets/profile8.jpeg'
import profile9 from '../assets/profile9.jpeg'
import profile10 from '../assets/profile10.jpeg'
import profile11 from '../assets/profile11.jpg'
import profile12 from '../assets/profile12.jpg'
import profile13 from '../assets/profile13.jpg'
import profile14 from '../assets/profile14.jpg'
import profile15 from '../assets/profile15.jpg'
import profile16 from '../assets/profile16.jpg'
import profile17 from '../assets/profile17.jpg'
import profile18 from '../assets/profile18.jpg'
import beniah from "../assets/beniah.jpg"
import blackian from "../assets/blackian.jpg"
import eugene from "../assets/eugene.jpg"
import gideon from "../assets/gideon.jpg"
import michael from "../assets/michael.jpg"
import nicabed from "../assets/nicabed.jpg"
import victoria from "../assets/victoria.jpg"
import tim from "../assets/tim.jpg"
import sandra from "../assets/sandra.jpg"


const navigation = [
    { name: 'Pieter Buikema', image: (profile3), role: 'Co-instagator, ETHSafari', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Lin Yang', image: (profile4), role: 'Founding Partner, Aqua Labs', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Eric Anan', image: (profile2), role: 'CEO, AyaHQ', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Jason Eisen', image: (profile8), role: 'Founder & CEO, Utu Technologies, Co-instigator ETHSafari', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Israel Ayodeji', image: (profile5), role: 'Founder, Web3Bridge', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Dr. Bright Mawudor', image: (profile7), role: 'Founder, AfricaHackOn', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Johnpaul Nwobodo', image: (profile1), role: 'Investment Analyst, Adaverse', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Yoseph Ayele', image: (profile10), role: 'Founder, Magma', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Yvonne Kagondu', image: (profile9), role: 'Co-founder, Kushite ICP East Africa Hub, LBS', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Moses Kemibaro', image: (profile11), role: 'Founder & CEO, Dotsavy', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Moataz Helmy', image: (profile12), role: 'Chairperson, Afrilabs', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Jason Owili', image: (profile13), role: 'CEO, Afribot Robotics', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Idris Olubisi', image: (profile14), role: 'Developer Advocate at Axelar', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Harrison Obiefule', image: (profile15), role: 'Co-lead, Superteam Nigeria', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Gideon Greaves', image: (profile16), role: 'Managing Director, CV VC', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Chepkemoi Magdalene', image: (profile17), role: 'CEO, Eldo Hub', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Beniah Wepundi', image: (beniah), role: 'Chief Maverick , myPayd', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Bastian Blackenburg', image: (blackian), role: 'CTO, UTU Technologies', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'eugene Mutai', image: (eugene), role: 'Google Developer Expert', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Gideon Grieves', image: (gideon), role: 'Managing Director ,CV VC', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Michael Michie', image: (michael), role: 'AI Expert,Advisory Council Member', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Nicabed Gathaba', image: (nicabed), role: 'Co-Founder, Fiti Telematics', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Victoria Mutai', image: (victoria), role: 'Co-Lead, Firebase Kenya', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
    { name: 'Sandra Mamai', image: (sandra), role: 'Data Team Lead, Access Afya', twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
]       

function SpeakersExtended() {
    return (
        <div>
            <div className='container w-full mx-auto text-white'>
                <div className='py-4 flex flex-col justify-center items-center gap-12'>
                    <div className='flex gap-2 items-center'>
                        <h1 className="text-[28px] md:text-[45px] text-[#04BCD4] font-[700] ">Our Amazing Speakers</h1>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {navigation.map((item) => (
                            <div className='flex flex-col justify-between items-center gap-4 w-[300px] px-4 py-6 relative border rounded-2xl'>
                                <img src={item.image} className='rounded-[10px] w-[250px] h-[250px] object-cover' alt=''/>
                                <div className='flex flex-col items-center'>
                                    <div className='text-[24px] text-[#04BCD4] font-[700] '>{item.name}</div>
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