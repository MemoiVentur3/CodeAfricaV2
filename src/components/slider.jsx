import React from "react";
import logo1 from "../assets/rocket1.svg";
import logo2 from "../assets/item1.svg";
import logo3 from "../assets/4911.svg";

// Mockup logos (replace these with actual image paths)
const logos = [logo1, logo2, logo3, logo1, logo2, logo3, logo1, logo2, logo3];

const ScrollingLogos = () => {
  return (
    <div className="w-[768px]">
      <div className="flex h-11 items-center animate-marquee overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-8 w-10 mx-4" />
        ))}
      </div>
      <div className="flex h-11 items-center animate-marquee-reverse overflow-hidden">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 0}`} className="h-8 w-10 mx-4" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
