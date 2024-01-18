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
        title: "Developers Conference 2024",
        date: "May 10th - 11th, 2024",
        time: "9:00 AM UTC",
        venue: "University of Kenya, Nairobi",
        registerLink: "https://lu.ma/9k34su4q",
        partnershipLink:"https://forms.gle/ifQdT72BhGNARUoe8"
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