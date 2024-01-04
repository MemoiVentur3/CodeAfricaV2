import React from "react";
import Team from "../components/Team"
import Footer from "../components/Footer";
import Building from "../components/building";
import Pioneer from "../components/pioneer"
import Navbar from '../components/Navbar'
import Story from '../components/Story'
import Hero from '../components/Hero'

import '../App.css'
export default function Home() {
    return (
        <div className="bg-[#020710]">
         <Navbar />
         <Hero/>
         <Building/>
         {/* <Story/> */}
         <Team />
         <Pioneer/>
         <Footer />
        </div>
    );
}