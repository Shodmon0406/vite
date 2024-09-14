import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  postToCart,
} from "@/store/reducers/products/productsSlise";
import Btn from "@/components/buttons/btn";
import FlashSales from "../sectionBrand/flashSales/flashSales";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import NumberTrick from "@/components/numberTrike/numberTrike";
import PageInfo from "@/pages/pageInfo/pageInfo";

export default function Section2() {
  const { data } = useSelector((state) => state.products);

  const minPrice = data?.minMaxPrice?.minPrice;
  const maxPrice = data?.minMaxPrice?.maxPrice;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts([minPrice, maxPrice]));
  }, [dispatch, minPrice, maxPrice]);

  return (
    <div className="w-full py-6  dark:bg-gray-900 dark:text-white">
      <div className="w-11/12 lg:w-4/5 mx-auto flex">
        <FlashSales />
      </div>
      <Swiper
        style={{ height: "auto" }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.products?.slice(0, 6).map((el) => {
          return (
            <SwiperSlide key={el.id} className="block rounded-2xl bg-white dark:bg-gray-800  shadow-lg transition-transform transform hover:scale-105">
              <div>
                <div className="relative">
                  <Link
                    onClick={() => {
                      dispatch(postToCart(el.id));
                    }}
                    className="block relative group"
                  >
                    <div className="w-[450px] h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden">
                      <img
                        className="w-[450px] h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-tl-2xl  rounded-tr-2xl"
                        src={"http://135.181.152.249:8072/images/" + el.image}
                        alt={el.productName}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">
                        ADD TO CART
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium">{el.productName}</p>
                  <div className="flex justify-center items-center gap-4 mt-2">
                    <p>
                      $ <NumberTrick value={el.price} delay={0.5} />
                    </p>

                    <Rating readOnly value={3.5} />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Qty: {el.quantity}</p>
                  </div>
                </div>
                <div>
              <Link to={`/product/${el.id}`}>
                <button className="mt-2 text-blue-500 dark:text-blue-300">About</button>
              </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center mt-8">
        <Btn value={"View All Products"} />
      </div>
    </div>
  );
}
