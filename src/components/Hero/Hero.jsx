import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';

const Hero = () =>{
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      async function fetchRandomImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
              count: 4
            },
            headers: {
              Authorization: 'Client-ID SMm24n8lNJXAt-So9OmHwXaL-fMa5ON6wy48tD5Pfcc'
            }
          });
  
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching random images:', error);
        }
      }
      
      fetchRandomImages();
      console.log(images);
    }, []);


    return (
    <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide>
        <img src={images[0].urls.full} />
       </SwiperSlide>
      <SwiperSlide>
        <img src={images[0].urls.full} />
      </SwiperSlide>
      
      
    </Swiper>
    </div>
    )
}

export default Hero;