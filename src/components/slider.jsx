import React from "react";
import logo1 from "../assets/1.svg"
import logo2 from "../assets/2.svg"
import logo3 from "../assets/3.svg"
import logo4 from "../assets/4.svg"
import logo5 from "../assets/5.svg"
import logo6 from "../assets/6.svg"
import logo7 from "../assets/7.svg"
import logo8 from "../assets/8.svg"
import logo9 from "../assets/9.svg"
import logo10 from "../assets/0.svg"
import logo11 from "../assets/01.svg"
import logo12 from "../assets/02.svg"
import logo13 from "../assets/03.svg"

// Mockup logos (replace these with actual image paths)
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6];

const ScrollingLogos = () => {
  return (
    <div className="w-full">
      <div className="flex h-22 items-center animate-marquee overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-10 w-15 md:h-20 md:w-[30px] lg:h-100 lg:w-[150px] mx-4" />
        ))}
      </div>
      <div className="flex h-22 items-center animate-marquee-reverse overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-10 w-15 md:h-20 md:w-[300px] lg:h-100 lg:w-[150px] mx-4" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;