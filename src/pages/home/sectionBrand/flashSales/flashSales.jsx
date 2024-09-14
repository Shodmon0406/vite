import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 10);

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(countdown);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-5 dark:text-white">
      <div className="flex items-center">
        <div className="bg-red-500 h-6 w-1.5 mr-2 dark:bg-red-300"></div>
        <span className="text-red-500 font-bold text-sm dark:text-red-300">Today's</span>
        <h2 className="text-2xl md:text-3xl font-bold ml-4 dark:text-white">Flash Sales</h2>
      </div>
      <div className="flex items-center text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-1 md:space-x-2">
          <div className="text-center">
            <span className="block text-xs dark:text-gray-400">Days</span>
            <span className="text-xl md:text-2xl font-bold dark:text-white">{String(timeLeft.days).padStart(2, '0')}</span>
          </div>
          <span className="text-xl md:text-2xl font-bold dark:text-gray-400">:</span>
          <div className="text-center">
            <span className="block text-xs dark:text-gray-400">Hours</span>
            <span className="text-xl md:text-2xl font-bold dark:text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
          </div>
          <span className="text-xl md:text-2xl font-bold dark:text-gray-400">:</span>
          <div className="text-center">
            <span className="block text-xs dark:text-gray-400">Minutes</span>
            <span className="text-xl md:text-2xl font-bold dark:text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
          </div>
          <span className="text-xl md:text-2xl font-bold dark:text-gray-400">:</span>
          <div className="text-center">
            <span className="block text-xs dark:text-gray-400">Seconds</span>
            <span className="text-xl md:text-2xl font-bold dark:text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
