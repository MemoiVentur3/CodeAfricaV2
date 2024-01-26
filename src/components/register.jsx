import React from "react";

const EventInfo = ({ event }) => {
  return (
    
    <div className="container  py-4 flex flex-col justify-center items-center gap-2 rounded-lg shadow-md">
      <h2 className="conatiner text-[25px] md:text-[45px] justify-center text-center text-[#04BCD4] font-[700]">{event.title}</h2>
      <p className="text-white text-[18px] md:text-[24px]"><strong>Date:</strong> {event.date}</p>
      <p className="text-white text-[18px] md:text-[24px]"><strong>Hackathon:</strong> {event.hackathon}</p>
      <p className="text-white text-[18px] md:text-[24px]"><strong>Time:</strong> {event.time}</p>
      <p className="text-white text-[18px] md:text-[24px]"><strong>Venue:</strong> {event.venue}</p>
      <div className="flex justify-center gap-5 z-[99]">
        <a href={event.registerLink}
        className="w-[150px] rounded-2xl  text-center md:w-[200px] bg-[#04BCD4] text-white p-3 rounded hover:bg-sky-600 transition-colors">
        Register Now
        </a>
        <a href={event.partnershipLink}
        className="w-[150px] rounded-2xl text-center md:w-[200px] bg-[#04BCD4] text-white p-3 rounded hover:bg-sky-600 transition-colors">
        Partner With Us
        </a>
      </div>
    </div >
  );
};

export default EventInfo;
