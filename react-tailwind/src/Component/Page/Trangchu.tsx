import { useState } from "react";
import sanh from "../../assets/trangchu/trangchu.jpg";
//import PhongSlider from "../Slider/Phong";
//import Amthuc from "../Slider/Amthuc";
import Amthucthuvien from "../Slider/Amthucthuvien";
import Phongthuvien from "../Slider/PhongThuvien";  
import gym from "../../assets/trangchu/gym.jpg";
import IconFC from "../IconFC";
import Uudaidatbiet from "../Slider/Uudaidatbiet";
import AdamasBoutique from "../Slider/AdamasBoutique";
import Feedback from "../feedback/feedback";
import { Swiper, SwiperSlide  } from "swiper/react";
import "../../App.css"; 
import  { useTranslation } from "react-i18next";


function Trangchu() {
    const { t } = useTranslation(["trangchu"]);
  // hiệu ứng scroll hiện phần giới thiệu
  const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const tienIch = [
      {
        icon: "gym",
        title: t('facilities.items.gym'),
      }
      ,
      {
        icon: "steaming",
        title:t('facilities.items.steaming'),
      },
      {
        icon: "swimming",
        title: t('facilities.items.swimming'),
      },
    ];
 
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full bg-[#ffffff]">
        <img className="w-full h-240 max-[1450px]:h-135 max-[770px]:h-100 max-[430px]:h-60 max-[321px]:h-45 object-cover" src={sanh} alt="" />
        <div 
          className={`mt-[-3%] max-[430px]:mt-[-5%] items-center text-center px-5 py-3   bg-[rgb(233,233,233)] w-[85%] max-[1025px]:w-[95%] transition-all duration-500 ${
            isVisible ? "min-[1025px]:opacity-100  " : "min-[1025px]:opacity-0  "
          }`}
        >
          <h1 className="text-[48px] font-bold max-[1450px]:text-[34px] max-[1025px]:text-[24px] max-[430px]:text-[14px] ">{t('introduction.Adamas Boutique Hotel')}</h1>
          <p className="text-[20px] mt-[20px] max-[1025px]:mt-[10px] max-[1450px]:text-[14px]">
           {t('introduction.Adamas Boutique Hotel description')}
          </p>
        </div>
      </div>
       <Phongthuvien/> 
  
     {/* <PhongSlider/> */}
      {/* <Amthuc />*/} 
      <Amthucthuvien/>
   
        <div className={`  top-10 max-[430px]:mt-[-5%] items-center px-180 max-[1450px]:px-0 text-center   py-3   bg-[rgb(233,233,233)]  isVisible ? "min-[1025px]:opacity-100  " : "min-[1025px]:opacity-0  "
          }`} >
          <h1 className="text-[48px] font-bold max-[1450px]:text-[34px] max-[1025px]:text-[24px] max-[430px]:text-[14px] text-[#764E2A] ">{t('facilities.title')}</h1>
          <p className="text-[20px] mt-[20px] max-[1025px]:mt-[10px] max-[1450px]:text-[14px] px-[20%] max-[1025px]:px-[2%]">
            {t('facilities.description')}
          </p>
        </div>
       <div className="bg-[#f3f3f3] pb-5">
        <img src={gym}  className="w-full  object-cover"/>
         
        <div className="p-8 max-[1030px]:p-2 my-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            loop={false}
            allowTouchMove={false} 
            breakpoints={{
              0: {
                slidesPerView: 2,
                loop: true,
                allowTouchMove: true, 
              },
              900: {
                slidesPerView: 3,
                loop: false,
                allowTouchMove: false,
              },
            }}
            className="text-3xl !py-2 max-[1450px]:text-[17px]"
          >
             {tienIch.map((item, idx) => (
              <SwiperSlide key={idx}>
                <a className="flex flex-col items-center justify-center gap-2">
                  <IconFC name={item.icon as any} />
                  {item.title}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex py-10 max-[1450px]:py-5 max-[1450px]:text-[17px] max-[1030px]:py-2 items-center justify-center text-[25px] text-[#fff]     ">
          <button className=" py-2 px-5 bg-[#764E2A] ">{t('facilities.see more')} <i className="pl-2"><IconFC name="arrowright"/></i></button>
        </div>
       </div>
      <Uudaidatbiet />
      <AdamasBoutique />
      <Feedback />
    </>
  );
}

export default Trangchu;