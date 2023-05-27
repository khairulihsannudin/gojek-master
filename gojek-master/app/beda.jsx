import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
export default function Beda() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [init, setInit] = useState(false);
  const [isHover, setHover] = useState(false);

  function Card(props) {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-[50vw] px-[5vh] rounded-xl relative text-white text-lg font-bold"
      >
        <img
          className="object-cover relative"
          src={props.src}
          alt={props.alt}
        />
        <div className="px-10 absolute bottom-10">
          <h1 className="text-2xl">{props.title}</h1>
          <div className="grid grid-flow-col justify-between w-[30vw] items-end">
            <p className="font-light">{props.desc}</p>
            <div className="bg-green-500 rounded-full py-2 px-3">
              Selengkapnya
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="-mt-[10vw] pb-[5vw] bg-white rounded-t-[4vw]">
      <h1 className="text-[4vw] py-[5vw] font-bold text-center">
        Kerja di Gojek itu beda karena...
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onInit={() => setInit(true)}
        className="relative"
      >
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          ref={prevRef}
          className={`bg-white  w-10 h-10 z-20 x-20 rounded-full flex items-center justify-center absolute top-1/2 left-0 mr-2 transform transition-all duration-500 ${
            isHover ? "translate-x-1/2" : "-translate-x-full"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          ref={nextRef}
          className={`bg-white z-20 w-10 h-10 rounded-full flex items-center justify-center absolute top-1/2 right-0 transform transition-all duration-500 ${
            isHover ? "-translate-x-1/2" : "translate-x-full"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <SwiperSlide>
          <Card
            src="beda.png"
            alt="Card 1"
            title="Gojek Berkembang"
            desc="Bersama Gojek membangun negeri"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src="beda.png"
            alt="Card 1"
            title="Gojek Berkembang"
            desc="Bersama Gojek membangun negeri"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src="beda.png"
            alt="Card 1"
            title="Gojek Berkembang"
            desc="Bersama Gojek membangun negeri"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src="beda.png"
            alt="Card 1"
            title="Gojek Berkembang"
            desc="Bersama Gojek membangun negeri"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            src="beda.png"
            alt="Card 1"
            title="Gojek Berkembang"
            desc="Bersama Gojek membangun negeri"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
