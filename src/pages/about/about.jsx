import React, { useState } from "react";

import img1 from "../../assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import img2 from "../../assets/images/Services (3).png";
import img3 from "../../assets/images/Services (5).png";
import img4 from "../../assets/images/Services (4).png";
import img5 from "../../assets/images/Services (6).png";
import img6 from "../../assets/images/Frame 874.png";
import img7 from "../../assets/images/Frame 875.png";
import img8 from "../../assets/images/Frame 876.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const width = window.innerWidth;
const height = window.innerHeight;

console.log(`Ширина окна: ${width}px`);
console.log(`Высота окна: ${height}px`);



  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-full px-4 py-8 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-base lg:text-lg mb-4">
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p className="text-base lg:text-lg">
                Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in
                categories ranging from consumer.
              </p>
            </div>
            <div className="lg:w-2/3">
              <img
                src={img1}
                alt="Shopping"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img className="mx-auto" src={img2} alt="Sellers" />
            <h3 className="text-xl lg:text-2xl font-bold py-4">10.5k</h3>
            <p className="text-gray-600 dark:text-gray-400">Sellers active on our site</p>
          </div>
          <div className="bg-red-500 dark:bg-red-700 text-white p-6 rounded-lg shadow-md">
            <img className="mx-auto" src={img3} alt="Product Sale" />
            <h3 className="text-xl lg:text-2xl font-bold py-4">33k</h3>
            <p>Monthly Product Sale</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img className="mx-auto" src={img4} alt="Customers" />
            <h3 className="text-xl lg:text-2xl font-bold py-4">45.5k</h3>
            <p className="text-gray-600 dark:text-gray-400">Customers active on our site</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img className="mx-auto" src={img5} alt="Annual Sale" />
            <h3 className="text-xl lg:text-2xl font-bold py-4">25k</h3>
            <p className="text-gray-600 dark:text-gray-400">Annual gross sale on our site</p>
          </div>
        </div>

        <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-1/3 p-5">
            <img src={img6} alt="Founder" className="w-full mb-4" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">Tom Cruise</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">Founder & Chairman</p>
              <div className="flex space-x-3">
                <TwitterIcon className="text-blue-500 hover:text-blue-700 transition-colors" />
                <TelegramIcon className="text-blue-400 hover:text-blue-600 transition-colors" />
                <LinkedInIcon className="text-blue-700 hover:text-blue-900 transition-colors" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-5">
            <img src={img7} alt="Founder" className="w-full mb-4" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">Tom Cruise</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">Founder & Chairman</p>
              <div className="flex space-x-3">
                <TwitterIcon className="text-blue-500 hover:text-blue-700 transition-colors" />
                <TelegramIcon className="text-blue-400 hover:text-blue-600 transition-colors" />
                <LinkedInIcon className="text-blue-700 hover:text-blue-900 transition-colors" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-5">
            <img src={img8} alt="Founder" className="w-full mb-4" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">Tom Cruise</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">Founder & Chairman</p>
              <div className="flex space-x-3">
                <TwitterIcon className="text-blue-500 hover:text-blue-700 transition-colors" />
                <TelegramIcon className="text-blue-400 hover:text-blue-600 transition-colors" />
                <LinkedInIcon className="text-blue-700 hover:text-blue-900 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full dark:bg-gray-200 dark:text-black"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default About;
  