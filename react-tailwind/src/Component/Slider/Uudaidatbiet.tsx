import monan from "../../assets/Uudai/restaurant_6.jpg";
import boi from "../../assets/Uudai/Adamas-service_3.jpg";
import uudai from "../../assets/Uudai/PROMOTION-30.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; 
import "./uudai.css";
import { useState} from "react";
import {  Autoplay } from "swiper/modules";
import IconFC from "../IconFC";
 
const images = [
  {
    id: 1,
    src: monan,
    description: "Món ngon đang chờ bạn nè",
    longDescription: "Những kỷ niệm đẹp và niềm vui được ghi dấu tại Adamas Boutique Hotel",
  },
  {
    id: 2,
    src: boi,
    description: "Bơi ngay nào!",
    longDescription: "Khám phá ưu đãi đặc biệt của Adamas! Bao gồm các gói tiện ích sang trọng và những trải nghiệm không thể quên. Hãy đặt ngay để tận hưởng sự độc đáo và đẳng cấp tại khách sạn của chúng tôi!",
  },
  {
    id: 3,
    src: uudai,
    description: "Giảm đến 30% khi đặt phòng",
    longDescription: "Khám phá ưu đãi đặc biệt của Adamas! Bao gồm các gói tiện ích sang trọng và những trải nghiệm không thể quên. Hãy đặt ngay để tận hưởng sự độc đáo và đẳng cấp tại khách sạn của chúng tôi!",
  },
];

function Uudaidatbiet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [buttonClicked, setButtonClicked] = useState(false);
   const nextIndex = (activeIndex + 1) % images.length;

  const handleNextClick = () => {
    setButtonClicked(true);
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
    setTimeout(() => {
      setButtonClicked(false);
    }, 300); 
  };
  
    
  return (
    <>
    <div className=" ml-[-5%]  flex w-full h-220 p-5 max-[1450px]:h-120 max-[1030px]:h-100 max-[1030px]:w-300 max-[770px]:flex-col max-[770px]:w-[120%] max-[770px]:h-150  max-[770px]:ml-[-3%] ">
      <div className="w-[70%] h-full max-[1450px]:h-120 flex max-[1025px]:w-[65%] max-[770px]:w-full max-[770px]:h-full">
      <Swiper
        className="!pr-0 !pl-0"
        modules={[Autoplay]}
        slidesPerView={1.5}
        spaceBetween={80}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        dir="rtl"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          770: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1030: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 1.5,
            spaceBetween: 80,
          },
        }}
      >
        <div className="w-full h-full max-[1450px]:h-120 max-[1030px]:h-90">
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="w-full h-full max-[1450px]:h-119 max-[1030px]:h-90 max-[770px]:h-100 max-[770px]:w-full shadow-lg shadow-[#6c6c6c]">
                <img
                  src={img.src}
                  alt={img.description}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
     
      <div className="pl-10 max-[1030px]:pl-2  w-[30%] max-[770px]:w-full h-full bg-[#ffffff] ">
        <div className={`min-h-full flex flex-col justify-between `}>
            <div className={`flex flex-col gap-5 max-[1450px]:gap-1 pt-[15%] max-[770px]:pt-0 ${buttonClicked ? "opacity-30" : "opacity-100"} transition-all duration-500`}>
            <h1 className="text-[48px] font-bold text-[rgb(118,78,42)] hover:text-[rgb(255,242,125)] transition-all duration-500 max-[1450px]:text-[34px] max-[1030px]:text-[24px]  ">
                Ưu đãi đặc biệt
            </h1>
          <p className="text-[31px] text-[rgb(118,78,42)] font-normal max-[1450px]:text-[20px] max-[1030px]:text-[18px]">{images[activeIndex].description}</p>
           <p className="border-b-4 w-[20%]   max-[1450px]:py-2 text-[#764E2A]"></p>
          <p className="text-[20px] max-[1450px]:text-[14px] max-[1030px]:line-clamp-4 max-[1030px]:text-ellipsis  max-[1030px]:w-70  max-[770px]:w-full ">{images[activeIndex].longDescription}</p>
          </div>
          <ul className=" flex gap-2  pb-4 max-[1030px]:invisible ">
                {images.map((img, index) => (
                    <li
                      key={img.id}
                      className={`cursor-pointer transition-all duration-300 flex ${
                        activeIndex === index 
                        ? "w-10 h-2  bg-[#764E2A] rounded-full "
                      : "w-2 h-2 bg-gray-400 rounded-full"
                      }`}
                        onClick={() => setActiveIndex(index)}
                    ></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
    
       <div className=" mb-10 mt-[-100px] max-[770px]:mt-0 max-[1450px]:mt-[-65px] ml-[83%] max-[770px]:m-0  max-[1450px]:ml-[83%] max-[1030px]:ml-[75%] min-w-max flex flex-col gap-3">
        <div
          className="mt-2 relative  max-[770px]:static text-[18px] text-[#fff] cursor-pointer"
          onClick={handleNextClick}
        >
          <div
            className={`relative max-[770px]:static mr-[-10px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 hover:opacity-80 active:scale-95
              ${buttonClicked ? "opacity-0" : "opacity-100"}`}
          >
            <div className="flex flex-col justify-start min-w-0 max-w-full">
              <span className="font-extrabold text-[25px] max-[1450px]:text-[16px] whitespace-nowrap">
                Ưu đãi đặc biệt
              </span>
              <span className="font-light text-[23px] max-[1450px]:text-[12px] whitespace-nowrap">
                {images[nextIndex].description}
              </span>
            </div>
            <div className="absolute right-0 max-[770px]:static  min-[770px]:top-1/2 min-[770px]:-translate-y-1/2 px-4 flex items-center justify-center">
              <IconFC name="arrowright" />
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Uudaidatbiet;