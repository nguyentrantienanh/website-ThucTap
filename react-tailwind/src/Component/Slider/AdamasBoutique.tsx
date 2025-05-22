import monan from "../../assets/Boutique/restaurant_6.jpg";
import chualanh from "../../assets/Boutique/Adamas-service_11.jpg";
import gym from "../../assets/Boutique/Adamas-service_2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; 
import "./uudai.css";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import IconFC from "../IconFC";



const images = [
    {
        id: 1,
        src: monan,
        title: "Món ngon đang chờ bạn nè",
        longDescription: "Những kỷ niệm đẹp và niềm vui được ghi dấu tại Adamas Boutique Hotel",
    },
    {
        id: 2,
        src: chualanh,
        title: "Chữa lành cuộc sống",
         longDescription: "Những kỷ niệm đẹp và niềm vui được ghi dấu tại Adamas Boutique Hotel",
    },
    {
        id: 3,
        src: gym,
        title: "Nâng cao sức khỏe",
         longDescription: "Những kỷ niệm và niềm vui được lưu trữ tại Adamas Boutique Hotel",
    },
];


function AdamasBoutique() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const handlePrevClick = () => {
        setButtonClicked(true);
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
        setTimeout(() => {
            setButtonClicked(false);
        }, 300);
    };
    return (
        <>
        
         <div className=" mr-[-5%]  flex w-full h-210  ">
      <div className="pl-10 w-[30%] h-full bg-[#ffffff] ">
        <div className={`min-h-full flex flex-col justify-between `}>
            <div className={`flex flex-col gap-5 pt-[15%] ${buttonClicked ? "opacity-30" : "opacity-100"} transition-all duration-500`}>
            <h1 className="text-[48px] font-bold">
                Ưu đãi đặc biệt
            </h1>
          <p className="text-[31px] ">{images[activeIndex].title}</p>
           <p className="border-b-4 w-[20%] pt-5 max-[1030px]:border-b-3 max-[1030px]:pt-3 text-[#764E2A]"></p>
          <p className="text-[20px]">{images[activeIndex].longDescription}</p>
          </div>
          <ul className=" flex gap-2 w-full ml-[80%] max-[1450px]:ml-[70%] pb-4 max-[1030px]:invisible  ">
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
              <div className="w-[70%] h-full flex   ">
        <Swiper className=" !pr-10 "
        modules={[Autoplay, Pagination]}
        slidesPerView={1.5}
        spaceBetween={80}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <div className=" w-full h-full">
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="w-100% h-full shadow-lg shadow-[#000]  ">
                <img
                  src={img.src}
                  className=" w-full h-full object-cover  "
                />
              </div>
              
            </SwiperSlide>
          ))}
          
        </div>
      </Swiper>
        </div>
    </div>
    
       <div className=" mb-10 h-20 mt-[-100px] max-[1450px]:mt-[-65px] mr-[83%] max-[770px]:hidden  max-[1450px]:mr-[83%] min-w-max flex flex-col gap-3">
        <div
          className="mt-2 relative  max-[770px]:static text-[18px] text-[#fff] cursor-pointer"
          onClick={handlePrevClick}
        >
          <div
            className={`relative max-[770px]:static mr-[-10px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 hover:opacity-80 active:scale-95
              ${buttonClicked ? "opacity-0" : "opacity-100"}`}
          >
            <div className="flex flex-col justify-start min-w-0 max-w-full pl-10">
              <span className="font-extrabold text-[30px] max-[1450px]:text-[16px] whitespace-nowrap">
                xem thêm
              </span>
            </div>
            <div className="absolute left-5 max-[770px]:static    px-4 flex    ">
              <IconFC name="arrowleft" />
            </div>
          </div>
        </div>
      </div>
    </>
       
    );
}
export default AdamasBoutique;