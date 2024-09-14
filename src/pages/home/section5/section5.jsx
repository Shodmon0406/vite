import React from "react";
import "./section5.css";

const Section5 = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-8">
      <div className="w-[80%] m-auto flex flex-col lg:flex-row justify-between gap-5">
        <div className="div-img1 flex flex-col justify-end h-full">
          <p className="font-bold text-lg pl-5">PlayStation 5</p>
          <p className="pl-5">Black and White version of the PS5 coming out on sale.</p>
          <p className="text-yellow-400 underline cursor-pointer pb-5 pl-5">Shop Now</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-5 flex-1">
          <div className="div-img2 flex flex-col justify-end h-full">
            <p className="font-bold text-lg pl-5">Women’s Collections</p>
            <p className="pl-5">Featured woman collections that give you another vibe.</p>
            <p className="text-yellow-400 underline cursor-pointer pb-5 pl-5">Shop Now</p>
          </div>
          <div className="flex flex-col hi sm:flex-row flex-1 gap-5">
            <div className="div-img3 flex flex-col justify-end h-full">
              <p className="font-bold text-lg pl-5">Speakers</p>
              <p className="pl-5">Amazon wireless speakers</p>
              <p className="text-yellow-400 underline cursor-pointer pb-5 pl-5">Shop Now</p>
            </div>
            <div className="div-img4 flex flex-col justify-end h-full">
              <p className="font-bold text-lg pl-5">Perfume</p>
              <p className="pl-5">GUCCI INTENSE OUD EDP</p>
              <p className="text-yellow-400 underline cursor-pointer pb-5 pl-5">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
