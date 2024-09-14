import jbl from "@/assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import React from "react";

const Jbl = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="w-[80%] m-auto rounded-[20px] bg-black dark:bg-gray-800 text-white p-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-green-500 dark:text-green-400 mb-2 text-center lg:text-left">Categories</p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
            Enhance Your
            <br />
            Music Experience
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold">23</p>
              <p className="text-xs lg:text-sm">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold">05</p>
              <p className="text-xs lg:text-sm">Days</p>
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold">59</p>
              <p className="text-xs lg:text-sm">Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-2xl font-bold">35</p>
              <p className="text-xs lg:text-sm">Seconds</p>
            </div>
          </div>
          <button className="bg-green-500 dark:bg-green-600 text-black font-bold py-2 px-4 rounded hover:bg-green-600 dark:hover:bg-green-700 transition duration-300">
            Buy Now!
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={jbl} alt="Speaker" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Jbl;
