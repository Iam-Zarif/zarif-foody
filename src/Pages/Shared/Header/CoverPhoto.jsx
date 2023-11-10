/* eslint-disable no-unused-vars */
import React from "react";
import cover1 from "../../../assets/cover1.jpg";
import cover2 from "../../../assets/cover2_1.jpg";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CoverPhoto = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
  
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="lg:mt-10">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       
        <SwiperSlide className="">
         <div className="relative">
         <img src={cover2} alt=""className="" />
        
        
<p className="cover-text text-6xl left-32 shadow-md  absolute top-24">Your Best wishes are here</p>
<p className="absolute top-44 text-lg font-semibold cover-text-sm left-32 w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aliquid at odit accusantium et minus ut! Sapiente voluptas quos natus!</p>
       <button className=" group absolute top-72 hover:shadow-md hover:shadow-green-800 bg-orange-500 px-6 py-2 rounded-md text-lg font-bold cover-text left-32 flex items-center gap-4 "><span>Order Now</span> <BsFillArrowRightCircleFill className="hidden group-hover:block shadow-md shadow-black rounded-full "/></button>
         </div>
        </SwiperSlide>
        
       
      
       
        <div className="autoplay-progress" slot="container-end">
         
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default CoverPhoto;
