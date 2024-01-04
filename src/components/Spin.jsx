import React from 'react';
import item from '../assets/Ellipse 4.svg'

const SpinningText = () => {
  return (
    <div className="relative h-64 w-64">
      <style>
        {`
          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      {/* Add the circular SVG */}
      <div className="flex justify-center items-center bg-blue-800 rounded-[50%] w-[100px] h-[100px]">
        <img src={item} alt="" />
      </div>

      {/* Add the spinning text */}
      <div className="text-5xl font-bold text-center absolute top-0 left-0 h-full w-full">
        <div className="spin animation-spin duration-500 ease-linear">
          Spinning Text
        </div>
      </div>
    </div>
  );
};

export default SpinningText;
