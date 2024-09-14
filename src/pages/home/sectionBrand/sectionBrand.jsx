import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay } from "swiper/modules";
import { getCategori } from "@/store/reducers/categori/categoriSlise";
import { getBrand } from "@/store/reducers/brand/brandSlise";

const SectionBrand = () => {
  const { isLoading, error, images } = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategori());
    dispatch(getBrand());
  }, [dispatch]);

  if (isLoading)
    return <div className="text-center text-gray-600 dark:text-gray-400">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 dark:text-red-400">
        Error: {error.message}
      </div>
    );

  return (
    <div className="dark:bg-gray-900 dark:text-white py-8">
      <div className="w-[80%] flex m-auto justify-center items-center">
        <div className="w-[100%] h-[300px] sm:h-[400px] md:h-[500px]"> 
          <Swiper
            style={{ borderRadius: "25px", height: "100%" }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            effect={"fade"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {images.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <img src={el} alt="Brand" className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionBrand;
