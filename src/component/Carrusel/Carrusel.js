import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carrusel = () =>  {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
        className="mySwiper"
      >
        <SwiperSlide><img className="car-img" src="https://i.postimg.cc/HLzMsJj2/carrusel.png" alt="carro pixel"/> </SwiperSlide>
        <SwiperSlide><img className="car-img" src="https://i.postimg.cc/XY0BfKCL/carrusel2.png" alt="carro pixel"/> </SwiperSlide>
        <SwiperSlide><img className="car-img" src="https://i.postimg.cc/1XqrvprH/carrusel3.png" alt="carro pixel"/> </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Carrusel