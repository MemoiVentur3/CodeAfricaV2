import React from "react";
import Team from "../components/Team"
import Footer from "../components/Footer";
import Building from "../components/building";
import Pioneer from "../components/pioneer"
import Navbar from '../components/Navbar'
import Story from '../components/Story'
import Register from '../components/register'
import Hero from '../components/Hero'

import '../App.css'
export default function Home() {
    const eventDetails = {
        title: "Tech Conference 2024",
        date: "April 30, 2024",
        time: "10:00 AM - 4:00 PM",
        venue: "Convention Center, Downtown",
        registerLink: "/register"
      };

    return (
        <div className="bg-[#020710]">
         <Navbar />
         <Hero/>
         <Building/>
         <Register event={eventDetails} />
         <Team />
         <Pioneer/>
         <Footer />
        </div>
    );
}