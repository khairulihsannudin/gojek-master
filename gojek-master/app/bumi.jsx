import React,{useState, useRef} from 'react';
import {Navigation, Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Bumi(){

  const items = [{negara:"Indonesia", text:"Pada 2019, Gojek berkontribusi hingga US$7,1 triliun bagi ekonomi Indonesia, membantu pembukaan lapangan kerja, peningkatan pendapatan dan kualitas hidup."}, 
  {negara:"Singapura", text:"Perkembangan Gojek sangat pesat di Singapura, 30 juta order di tahun pertama kami hadir di sini."}, {negara:"Thailand", text:"Dalam 1 tahun aja, kami menyelesaikan 20 juta order. Gojek melaju pesat di Thailand!"}, 
  {negara:"Vietnam", text:"Saat ini, Gojek memiliki lebih dari 80.000 Mitra Usaha dan 150.000 Mitra Driver di Vietnam yang selalu siap membantu para pelanggan."}];
  const [init, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [rotate,setRotate]=useState(0); 
  const rotateRight = () => {
    setRotate((rotate + 45) % 360);
  };

  const rotateLeft = () => {
    setRotate((rotate - 45 + 360) % 360);
  };
    return(
        <div className="bg-blue-300 rounded-t-[10vh] flex flex-col items-center gap-10 pt-20 [&+button]:text-white -mt-[10vh]">
            <h1 className="text-center lg:text-6xl sm:text-4xl text-2xl text font-bold">Ikuti perjalanan <br className="max-sm:hidden"/> kami dalam membuat <br/> dampak sosial!</h1>
            <button className="bg-greenNew py-3 px-4 md:text-xl font-semibold text-white rounded-full">Masuk Newsroom</button>
      <Swiper 
      modules={[Navigation]} slidesPerView={1}
      loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onInit={() => setInit(true)}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')} 
      className="relative lg:w-[50%] sm:w-[75%] px-10 max-sm:mx-5 flex flex-col items-center">
            {items.map((item, index) => (
            <SwiperSlide className="px-10" key={index}>
            <h1 className="lg:text-5xl sm:text-4xl text-xl font-bold text-center">{item.negara}</h1>
            <p className="text-center text-lg max-sm:text-xl p-10">{item.text}</p>
            </SwiperSlide>))}
            
            <button className="bg-greenNew text-white py-3 px-4 md:text-xl font-semibold block mx-auto rounded-full">Masuk Newsroom</button>
            <button ref={prevRef} onClick={rotateLeft} className="bg-white absolute top-1/3 left-0 w-10 h-10 z-20 rounded-full flex items-center justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button ref={nextRef} onClick={rotateRight} className={`absolute top-1/3 right-0 bg-white z-20 w-10 h-10 rounded-full flex items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </Swiper>
            <div className="relative flex flex-col items-center justify-center">
            <img className={`absolute top-[10%] transition duration-500 rotate-[${rotate}deg]`} alt="bumi" src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg"/>
            <img className="" alt="awan" src="cloud.svg"/>
            </div>
        </div>
    );
}