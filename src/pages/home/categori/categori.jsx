import { getCategori } from '@/store/reducers/categori/categoriSlise';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './categori.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Categori = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categori);

  useEffect(() => {
    dispatch(getCategori());
  }, [dispatch]);

  return (
   <div className='dark:bg-gray-900 dark:text-white py-10'>
     <div className="w-full mb-10">
      <Swiper
        style={{ height: '240px' }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide
            className="w-[350px] rounded-lg overflow-hidden p-4 bg-white shadow-lg dark:bg-gray-800 transition-transform transform hover:scale-105"
            key={el.id}
          >
            <div className="h-full w-full">
              <img
                className="w-[400px] h-full object-cover"
                src={`http://135.181.152.249:8072/images/${el.categoryImage}`}
                alt="Category"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
  );
};

export default Categori;
