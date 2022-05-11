import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


import './slider.scss';
import "swiper/css";
import "swiper/css/navigation";

function Slider(){
    return(
<>
        <Swiper
          className="swiper mySwiper"
          modules={[Navigation]} 
          slidesPerView={1}
          navigation={{
            prevEl:  ".swiper-button-next",
            nextEl: ".swiper-button-prev"
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={30}
          centeredSlides={true}
          >
        <SwiperSlide className="swiper-slide"><img src="https://images.unsplash.com/photo-1650841980571-d510de7219b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="https://images.unsplash.com/photo-1651525764807-792769578760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt=""/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="https://images.unsplash.com/photo-1650841980571-d510de7219b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt=""/></SwiperSlide>
        
    </Swiper>
  
    </>
    );
}
export default Slider;