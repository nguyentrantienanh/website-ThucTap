import { useState , useEffect } from "react";
import { useRef } from "react";
import Seniordeluxecity from "../../assets/Phong/Senior-deluxe-city_2.jpg";
import Seniordeluxecity1 from "../../assets/Phong/Senior-deluxe-city_3.jpg";
import Seniordeluxecity2 from "../../assets/Phong/Senior-deluxe-city_4.jpg";
import Seniordeluxecity3 from "../../assets/Phong/Senior-deluxe-city_5.jpg";
import Seniordeluxecity4 from "../../assets/Phong/Senior-deluxe-city_6.jpg";
import TripleSingle from "../../assets/Phong/Triple-Single_2.jpg";
import TripleSingle1 from "../../assets/Phong/Triple-Single_3.jpg";
import TripleSingle2 from "../../assets/Phong/Triple-Single_4.jpg";
import TripleSingle3 from "../../assets/Phong/Triple-Single_5.jpg";
import TripleSingle4 from "../../assets/Phong/Triple-Single_6.jpg";
import studiosuite from "../../assets/Phong/Studio-Suite_2.jpg";
import studiosuite1 from "../../assets/Phong/Studio-Suite_3.jpg";
import studiosuite2 from "../../assets/Phong/Studio-Suite_4.jpg";
import studiosuite3 from "../../assets/Phong/Studio-Suite_5.jpg";
import studiosuite4 from "../../assets/Phong/Studio-Suite_6.jpg";
import president from "../../assets/Phong/President_2.jpg";
import president1 from "../../assets/Phong/President_3.jpg";
import president2 from "../../assets/Phong/President_4.jpg";
import president3 from "../../assets/Phong/President_5.jpg";
import president4 from "../../assets/Phong/President_6.jpg";
import premiersea from "../../assets/Phong/Premier-Sea_2.jpg";
import premiersea1 from "../../assets/Phong/Premier-Sea_3.jpg";
import premiersea2 from "../../assets/Phong/Premier-Sea_4.jpg";
import premiersea4 from "../../assets/Phong/Premier-Sea_6.jpg";
import deluxecityview from "../../assets/Phong/Deluxe-City-View_2.jpg";
import deluxecityview1 from "../../assets/Phong/Deluxe-City-View_3.jpg";
import deluxecityview2 from "../../assets/Phong/Deluxe-City-View_4.jpg";
import deluxecityview3 from "../../assets/Phong/Deluxe-City-View_5.jpg";
import deluxecityview4 from "../../assets/Phong/Deluxe-City-View_6.jpg";
import IconFC from "../IconFC";
import "../../App.css";  
import { Swiper, SwiperSlide, } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import {useTranslation} from 'react-i18next';

function PhongThuvien() {
    const { t } = useTranslation("slider_phong");
    const roomTypes = [
        {
            id: "SLC",
      name: "Senior Deluxe City View",
      description: t("Senior Deluxe City View.description"),
      longDescription:
        t("Senior Deluxe City View.longDescription"),
      images: [
        Seniordeluxecity,
        Seniordeluxecity1,
        Seniordeluxecity2,
        Seniordeluxecity3,
        Seniordeluxecity4,
      ],
        },
        {
            id: "TS",
        name: "Triple City View",
        description: t("Triple City View.description"),
        longDescription:
          t("Triple City View.longDescription"),
        images: [
            TripleSingle,
            TripleSingle1,
            TripleSingle2,
            TripleSingle3,
            TripleSingle4,
            ],
        },
        {
      id: "SS",
      name: "Studio Suite Sea View",
      description: t("Studio Suite Sea View.description"),
      longDescription:
        t("Studio Suite Sea View.longDescription"),
      images: [
        studiosuite,
        studiosuite1,
        studiosuite2,
        studiosuite3,
        studiosuite4,
      ],
    },
    {
      id: "PSD",
      name: "President Suite Sea View",
      description: t("President Suite Sea View.description"),
      longDescription:
        t("President Suite Sea View.longDescription"),
      images: [
        president,
        president1,
        president2,
        president3,
        president4,
      ],
    },
    {
      id: "PS",
      name: "Premier Sea View",
      description: t("Premier Sea View.description"),
      longDescription:
        t("Premier Sea View.longDescription"),
      images: [
        premiersea,
        premiersea1,
        premiersea2,
        premiersea4,
      ],
    },
    {
      id: "DCV",
      name: "Deluxe City View",
      description: t("Deluxe City View.description"),
      longDescription:
        t("Deluxe City View.longDescription"),
      images: [
        deluxecityview,
        deluxecityview1,
        deluxecityview2,
        deluxecityview3,
        deluxecityview4,
      ],
    },      
    ];


    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    // Thêm state để quản lý phòng đang chuyển đổi 
    const [pendingRoomIndex, setPendingRoomIndex] = useState<number | null>(null);  
    
    const currentRoom = roomTypes[currentRoomIndex];

    const [isRoomChange, setIsRoomChange] = useState(false);
    const imageSwiperRef = useRef<SwiperType | null>(null);

    const handleImageSlideChange = (swiper: SwiperType) => {
        setCurrentImageIndex(swiper.realIndex);
    };

    // Hàm chuyển phòng mượt hơn
    const smoothRoomChange = (nextRoomIdx: number) => {
        if (nextRoomIdx === currentRoomIndex) return;
        setIsRoomChange(true);
        setPendingRoomIndex(nextRoomIdx);
        setTimeout(() => {
            setCurrentRoomIndex(nextRoomIdx);
            setCurrentImageIndex(0);
            setTimeout(() => {
                imageSwiperRef.current?.slideToLoop(0, 500);
                setIsRoomChange(false);
                setPendingRoomIndex(null);
            }, 50);
        }, 350);  
    };

 

    const handleNextClick = () => {
       
        if (currentImageIndex < currentRoom.images.length - 1) {
            imageSwiperRef.current?.slideNext(500);
        } else {
            if (currentImageIndex === currentRoom.images.length - 1 && pendingRoomIndex !== null) {
                
                smoothRoomChange(pendingRoomIndex);
            } else {
                // Chuyển phòng tiếp theo
                const nextRoomIdx = currentRoomIndex < roomTypes.length - 1 ? currentRoomIndex + 1 : 0;
                smoothRoomChange(nextRoomIdx);
            }
        }
         
    };

    // Hàm xử lý khi nhấn nút "Trước"
    const handlePrevClick = () => {
        if (currentImageIndex > 0) {
            imageSwiperRef.current?.slidePrev(500);
        } else {
            if (currentImageIndex === 0 && pendingRoomIndex !== null) {
                smoothRoomChange(pendingRoomIndex);
            }
            else {
                // Chuyển về phòng trước đó
                const prevRoomIdx = currentRoomIndex > 0 ? currentRoomIndex - 1 : roomTypes.length - 1;
                smoothRoomChange(prevRoomIdx);
            }

        }
         
    }; 

    // Tự động chuyển phòng sau mỗi 5 giây
     useEffect (() => {
        const timer = setInterval(() => {
          setIsRoomChange(true);
          setTimeout(() => {
            setCurrentRoomIndex(prev => {
              const next = prev < roomTypes.length - 1 ? prev + 1 : 0;
              setCurrentImageIndex(0);
              return next;
            });
            setIsRoomChange(false);
          }, 300); // thời gian hiệu ứng mờ
        }, 5000);
        return () => clearInterval(timer);
        }, [roomTypes.length]);

    return (
        <>
            <div className=" flex max-[770px]:flex-col  mt-10 w-full pr-[5%] max-[770px]:pr-0 h-full max-[1450px]:h-125 max-[1030px]:h-100 max-[770px]:h-full max-[770px]:w-full ">
                <div className=" relative w-[70%] max-[770px]:w-full  flex justify-center items-center  ">
                    <Swiper className="!pr-0 !pl-0"
                        modules={[Autoplay, EffectFade, Navigation ]}
                        slidesPerView={1}
                        
                        effect={'fade'}
                        
                        onSwiper={(swiper) => { imageSwiperRef.current = swiper; }}
                        onSlideChange={handleImageSlideChange}
                        
                    >
                        {currentRoom.images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="w-full h-full flex justify-center">
                                    <img
                                        src={img}
                                        className={` w-full h-230 max-[1450px]:h-130  max-[1450px]:w-full mr-10 max-[770px]:mr-0 max-[770px]:h-110 max-[430px]:h-60 max-[380px]:h-53 max-[330px]:h-45 max-[1030px]:mr-0  max-[1030px]:h-105 object-cover `}
                                        alt={currentRoom.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] flex justify-center mt-[-50px] max-[1450px]:bottom-[-50px] max-[770px]:bottom-[-40px] max-[770px]:mt-[-28px] px-5  py-10 z-1  text-3xl max-[1450px]:text-[10px]">
                        <button className=" cursor-pointer px-8 max-[1450px]:px-5 max-[1450px]:py-2 text-[#fff] max-[1450px]: font-medium bg-[#b6b1ac] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500" onClick={handlePrevClick}  >
                            <IconFC name="arrowleft" />
                        </button>
                        <button className=" cursor-pointer px-8 max-[1450px]:px-5  max-[1450px]:py-2 text-[#fff] font-medium bg-[#764E2A] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500"  onClick={handleNextClick} >
                            <IconFC name="arrowright" />
                        </button>
                    </div>
                 </div>
                         <div className="bg-[#fff] w-[30%] max-[770px]:w-full flex">
          <div className={`w-full  max-[1450px]:py-0 max-[1030px]:px-4 gap-3 max-[1450px]:gap-0.5 flex flex-col min-h-full transition-all duration-800 `}>
            <div className={`${isRoomChange ? "opacity-40 pointer-events-none" : "opacity-100 transition-all duration-500"}`}>
              <h1 className="text-[60px] font-medium mt-10 max-[1030px]:mt-3 max-[1450px]:text-[34px] text-[#764E2A] max-[770px]:text-[24px]">{t('guest room')}</h1>
            <p className="text-[48px] py-2 max-[1450px]:text-[20px] max-[1030px]:py-0 text-[#764E2A] max-[770px]:text-[18px]">{currentRoom.name}</p>
            <p className="text-[31px] py-2 max-[1450px]:text-[16px] max-[1030px]:py-0 max-[1030px]:text-[14px] text-[#bc6a23] max-[770px]:text-[14px]">{currentRoom.description}</p>
            <p className="border-b-4 w-[20%] pt-5 max-[1030px]:border-b-3 max-[1030px]:pt-3 text-[#764E2A]"></p>
            <p className="text-[20px]  py-4 max-[1450px]:text-[14px] max-[1030px]:py-0 max-[1030px]:text-[13px] line-clamp-5 max-[770px]:line-clamp-4 text-ellipsis h-40 max-[770px]:h-20 max-[770px]:text-[14px]">{currentRoom.longDescription}</p>
            </div>
            <ul className="w-full flex gap-3 mt-auto  pb-4 max-[1030px]:invisible  ">
              {roomTypes.map((room, index) => (
                <li
                  key={room.id}
                  className={`cursor-pointer transition-all duration-300 flex items-center ${
                    currentRoomIndex === index
                      ? "w-10 h-2  bg-[#764E2A] rounded-full "
                      : "w-2 h-2 bg-gray-400 rounded-full"
                  }`}
                  onClick={() => setCurrentRoomIndex(index)}
                  title={room.name}
              
                />
              ))}
            </ul>
          </div>
        </div>
            </div>
              <div className="h-28 max-[1450px]:h-20 max-[770px]:h-13 mt-[-100px] max-[770px]:mt-0 max-[1450px]:mt-[-65px] ml-[83%] max-[770px]:m-0  max-[1450px]:ml-[83%] max-[1030px]:ml-[75%] min-w-max flex flex-col gap-3">
        <div
          className="mt-2 relative  max-[770px]:static text-[18px] text-[#fff] cursor-pointer"
          onClick={() => {
            const nextRoomIdx = currentRoomIndex < roomTypes.length - 1 ? currentRoomIndex + 1 : 0;
            smoothRoomChange(nextRoomIdx);
          }}
        >
          <div
            className={`relative max-[770px]:static mr-[-10px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 ${
              isRoomChange
                ? "opacity-0  "
                : "opacity-100 "
            }`}
          >
            <div className="flex flex-col justify-start min-w-0 max-w-full">
              <span className="font-extrabold text-[30px] max-[1450px]:text-[16px] whitespace-nowrap  ">
                {
                  roomTypes[
                    currentRoomIndex < roomTypes.length - 1
                      ? currentRoomIndex + 1
                      : 0
                  ].name
                }
              </span>
              <span className="font-light text-[23px] max-[1450px]:text-[12px] whitespace-nowrap">
                {
                  roomTypes[
                    currentRoomIndex < roomTypes.length - 1
                      ? currentRoomIndex + 1
                      : 0
                  ].description
                }
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
export default PhongThuvien;
