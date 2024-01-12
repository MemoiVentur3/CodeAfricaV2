import React from "react";
import logo1 from "../assets/partner1.webp";
import logo2 from "../assets/partner2.webp";
import logo3 from "../assets/partner3.webp";
import logo4 from "../assets/partner4.webp";
import logo5 from "../assets/partner5.webp";
import logo6 from "../assets/partner6.webp";


// Mockup logos (replace these with actual image paths)
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6];

const ScrollingLogos = () => {
  return (
    <div className="w-screen">
      <div className="flex h-22 items-center animate-marquee overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-10 w-15 md:h-[100px] md:w-[150px] mx-4" />
        ))}
      </div>
      <div className="flex h-22 items-center animate-marquee-reverse overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-10 w-25 md:h-[100px] md:w-[150px] mx-4" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
