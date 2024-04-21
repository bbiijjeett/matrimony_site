import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTOMONIAL } from "../data/Testomonial";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="m-5 md:px-20">
      <h1 className="text-5xl font-bold text-center text-[#008C7C] mt-10 mb-4">
        Thousands have found their life partner at ShadiManch!
      </h1>

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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {TESTOMONIAL.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[28rem] md:h-96 w-full p-0 md:p-7 bg-[#FFE3EA] border-2 rounded-3xl flex flex-col md:flex-row">
              <div className="h-auto md:h-1/3 w-full md:w-1/2 p-4">
                <p className="font-semibold text-xs md:text-xl lg:text-2xl">
                  {item.description}
                </p>
                <p className="font-bold text-xs md:text-3xl mt-2">
                  - {item.couple}
                </p>
              </div>
              <div className="h-auto md:h-full w-full md:w-1/2 p-2">
                <img
                  src={item.image}
                  className="rounded-2xl w-full object-cover md:max-w-full md:h-auto"
                  alt="image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress left-4" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
