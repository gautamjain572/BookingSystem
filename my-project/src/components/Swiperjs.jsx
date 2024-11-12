import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../assets/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Swiperjs() {
  return (
    <>
      <div className="w-full mx-0 my-auto h-[40vh]">
      <Swiper className='w-full h-full' navigation={true} modules={[Navigation]} >
        <SwiperSlide className="bg-cover bg-no-repeat" style={{  backgroundImage: `url(${assets.poster})` }} ></SwiperSlide>
        <SwiperSlide className="bg-cover bg-no-repeat" style={{  backgroundImage: `url('https://assetscdn1.paytm.com/images/catalog/view_item/2924477/1730804115536.jpg?format=webp&imwidth=1750')` }}></SwiperSlide>
        <SwiperSlide className="bg-cover bg-no-repeat" style={{  backgroundImage: `url('https://assetscdn1.paytm.com/images/catalog/view_item/2898114/1729245222121.jpg?format=webp&imwidth=1750')` }}></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
