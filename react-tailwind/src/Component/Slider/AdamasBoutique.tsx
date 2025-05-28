import monan from "../../assets/Boutique/restaurant_6.jpg";
import chualanh from "../../assets/Boutique/Adamas-service_11.jpg";
import gym from "../../assets/Boutique/Adamas-service_2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; 
import "../../App.css";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import IconFC from "../IconFC";
import { useTranslation } from "react-i18next";






function AdamasBoutique() {
    const { t } = useTranslation('slider_adamas');
    const images = [
    {
        id: 1,
        src: monan,
        title: t('1.title'),
        longDescription: t('1.longDescription'),
    },
    {
        id: 2,
        src: chualanh,
        title:  t('2.title'),
         longDescription:  t('2.longDescription'),
    },
    {
        id: 3,
        src: gym,
        title:  t('3.title'),
         longDescription:  t('3.longDescription'),
    },
];

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
        <div className="flex max-[900px]:flex-col-reverse w-full h-210 p-5 max-[1450px]:h-120 max-[1030px]:h-100 max-[1030px]:w-300 max-[900px]:h-150 max-[900px]:ml-[-3%] max-[900px]:w-[120%]  max-[430px]:ml-[-7%]">
            <div className="pl-10 w-[30%] max-[900px]:w-full max-[900px]:pl-5 h-full bg-[#ffffff]">
                <div className="min-h-full flex flex-col justify-between">
                    <div className={`flex flex-col gap-5 pt-[15%] max-[900px]:pt-0 ${buttonClicked ? "opacity-30" : "opacity-100"} transition-all duration-500`}>
                        <h1 className="text-[48px] font-bold max-[1450px]:text-[34px] max-[1030px]:text-[24px] max-[900px]:text-[20px]">
                            {t("AdamasBoutique")}
                        </h1>
                        <p className="text-[31px] max-[1450px]:text-[20px] max-[1030px]:text-[18px] max-[900px]:text-[16px]">
                            {images[activeIndex].title}
                        </p>
                        <p className="border-b-4 w-[20%] pt-5 max-[1030px]:border-b-3 max-[1030px]:pt-3 text-[#764E2A]"></p>
                        <p className="text-[20px] max-[1450px]:text-[14px] max-[1030px]:line-clamp-4 max-[1030px]:text-ellipsis max-[1030px]:w-70 max-[900px]:w-full max-[900px]:text-[13px]">
                            {images[activeIndex].longDescription}
                        </p>
                    </div>
                    <ul className="flex gap-2 w-full ml-[80%] max-[1450px]:ml-[70%]  max-[1030px]:invisible">
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
            <div className="w-[70%] h-full flex max-[900px]:w-full max-[900px]:h-full">
                <Swiper
                    className="!pr-0 !pl-0"
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.5}
                    spaceBetween={80}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        900: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        1030: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                        },
                        1450: {
                            slidesPerView: 1.5,
                            spaceBetween: 80,
                        },
                    }}
                >
                    <div className="w-full h-full max-[1450px]:h-120 max-[1030px]:h-90">
                        {images.map((img) => (
                            <SwiperSlide key={img.id}>
                                <div className="w-full h-full max-[1450px]:h-119 max-[1030px]:h-90 max-[900px]:h-100 max-[900px]:w-full shadow-lg shadow-[#6c6c6c] flex items-center justify-center">
                                    <img
                                        src={img.src}
                                        className="w-full h-full object-cover"
                                        alt={img.title}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
        {/* nut laptop */}
        <div className="mb-10 h-20 mt-[-100px] max-[1450px]:mt-[-65px] mr-[83%] max-[900px]:hidden max-[1450px]:mr-[83%] min-w-max flex flex-col gap-3">
            <div
                className="mt-2 relative max-[900px]:static text-[18px] text-[#fff] cursor-pointer"
                onClick={handlePrevClick}
            >
                <div
                    className={`relative max-[900px]:static mr-[-10px] max-[900px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 hover:opacity-80 active:scale-95
                        ${buttonClicked ? "opacity-0" : "opacity-100"}`}
                >
                    <div className="flex flex-col justify-start min-w-0 max-w-full pl-10">
                        <span className="font-extrabold text-[30px] max-[1450px]:text-[16px] whitespace-nowrap">
                            {t("see more")}
                        </span>
                    </div>
                    <div className="absolute left-5 max-[900px]:static px-4 flex">
                        <IconFC name="arrowleft" />
                    </div>
                </div>
            </div>
        </div>
        {/* nut mobile */}
        <div className="mb-10 h-20 mt-[-100px] max-[1450px]:mt-[-65px] ml-[83%] min-[900px]:hidden max-[900px]:m-0 max-[1450px]:ml-[83%] max-[1030px]:ml-[75%] min-w-max flex flex-col gap-3">
            <div
                className="mt-2 relative max-[900px]:static text-[18px] text-[#fff] cursor-pointer"
                onClick={handlePrevClick}
            >
                <div
                    className={`relative max-[900px]:static  max-[900px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 hover:opacity-80 active:scale-95
                        ${buttonClicked ? "opacity-0" : "opacity-100"}`}
                >
                    <div className="flex flex-col justify-start min-w-0 max-w-full  ">
                        <span className="font-extrabold text-[30px] max-[1450px]:text-[16px] whitespace-nowrap">
                            {t("see more")}
                        </span>
                    </div>
                    <div className="absolute left-0 max-[900px]:static px-4 flex">
                        <IconFC name="arrowright" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default AdamasBoutique;