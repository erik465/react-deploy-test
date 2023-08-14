import React from 'react';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay]);


const Hero = () =>{
    return (
    <div>
        <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="image1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image2.jpg" alt="Slide 2" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
    </div>
    )
}

export default Hero