import React from "react";

const EventInfo = ({ event }) => {
  return (
    
    <div className="py-4 flex flex-col justify-center items-center gap-2 rounded-lg shadow-md">
      <h2 className="conatiner text-[28px] md:text-[45px] justify-center text-center text-sky-400 font-[700]">{event.title}</h2>
      <p className="text-white text-[22px]"><strong>Date:</strong> {event.date}</p>
      <p className="text-white text-[22px]"><strong>Time:</strong> {event.time}</p>
      <p className="text-white  text-[22px]"><strong>Venue:</strong> {event.venue}</p>
      <div className="flex justify-center gap-5 z-[99]">
        <a href={event.registerLink}
        className="block text-center w-[200px] bg-sky-400 text-white p-3 rounded hover:bg-sky-600 transition-colors">
        Register Now
        </a>
        <a href={event.registerLink}
        className="block text-center w-[200px] bg-sky-400 text-white p-3 rounded hover:bg-sky-600 transition-colors">
        Partner With Us
        </a>
      </div>
    </div >
  );
};

export default EventInfo;
