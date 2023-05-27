import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef, useEffect, useState } from "react";

export default function Slide() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const fillProgress = useRef(null);  
  const [init, setInit] = useState(false);

  
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} slidesPerView={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      autoplay={{delay: 5000, disableOnInteraction: false, stopOnLastSlide: true, }}
      pagination = {{clickable: false, type: 'bullets',
      }}
      onInit={() => setInit(true)}
      className="w-screen mt-20 my-carousel relative swiper-container  mx-0 px-0 object-cover "
    >
      
        <SwiperSlide className="brightness-75">
          <img
            className="h-screen object-cover m-0 w-full"
            src="https://lelogama.go-jek.com/prime/upload/image/Desktop-Banner-Blog-Page-PUBGM.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className="brightness-75">
          <img
            className="h-screen object-cover w-screen"
            src="https://lelogama.go-jek.com/prime/upload/image/DesktopCenterImage_1.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide className="brightness-75">
          <img
            className="h-screen object-cover w-screen"
            src="https://lelogama.go-jek.com/prime/upload/image/WEB_HEADER_Dekstop_Version.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide className="brightness-75">
          <img
            className="h-screen object-cover w-screen"
            src="https://lelogama.go-jek.com/prime/upload/image/J3K_desktop_no-title_img.jpg"
            alt="Slide 4"
          />
        </SwiperSlide>
        <div className="swiper-pagination absolute bottom-0 left-0 w-full flex justify-center">
        
        </div>
      
      <div  className='absolute top-0 z-20 w-[70vw] flex flex-col items-end justify-end h-screen pb-[5vw] gap-[1vw]'>
      <div className=' flex flex-row-reverse gap-2 mb-[4vw]'>
      <button ref={nextRef} className="hover:fill-white fill-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M269.217 951.783Q255.391 936.957 254.891 917t14.326-34.783L577.434 574 269.217 265.783q-13.826-13.826-14.609-34.283-.782-20.457 14.044-35.283 13.826-14.826 34.565-15.326 20.74-.5 35.001 14.326l351.565 351q6.13 6.131 8.978 13.109T701.609 574q0 7.696-2.848 14.674t-8.978 13.109l-351 351q-13.826 13.826-34.283 13.826t-35.283-14.826Z"/></svg>
      </button>
      <button ref={prevRef} className="hover:fill-white fill-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
        <path d="m620.782 954.783-351-351q-6.13-6.131-8.978-13.109T257.956 576q0-7.696 2.848-14.674t8.978-13.109l351-351q13.827-13.826 34.783-14.109 20.957-.282 35.348 13.544 14.261 14.826 14.261 35.565 0 20.74-14.261 35.566L382.696 576l308.217 308.217q15.261 15.826 14.544 35.783-.717 19.957-14.544 33.783-14.826 14.826-35.565 14.826-20.739 0-34.566-13.826Z"/>
      </svg>
      </button>
      </div>
      </div>
    </Swiper>
  );
}
