import React from "react";

const EventInfo = ({ event }) => {
  return (
    <div className="py-4 flex flex-col justify-center items-center gap-2 rounded-lg shadow-md">
      <h2 className="text-[28px] md:text-[45px] justify-center items-center text-white font-[700]">{event.title}</h2>
      <p className="text-sky-600  text-[22px]"><strong>Date:</strong> {event.date}</p>
      <p className="text-sky-600 text-[22px]"><strong>Time:</strong> {event.time}</p>
      <p className="text-sky-600  text-[22px]"><strong>Venue:</strong> {event.venue}</p>
      <a href={event.registerLink} 
         className="block text-center w-[200px] bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors">
        Register Now
      </a>
    </div>
  );
};

export default EventInfo;
