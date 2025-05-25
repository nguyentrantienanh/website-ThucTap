import { useState, useEffect } from "react";
import resaurants from "../../assets/Amthuc/Restaurant.jpg";
import resaurants1 from "../../assets/Amthuc/Restaurant_2.jpg";
import resaurants2 from "../../assets/Amthuc/Restaurant_3.jpg";
import resaurants3 from "../../assets/Amthuc/Restaurant_4.jpg";
import resaurants4 from "../../assets/Amthuc/Restaurant_5.jpg";
import maybar from "../../assets/Amthuc/May-Bar.jpg";
import maybar1 from "../../assets/Amthuc/May-Bar_2.jpg";
import maybar2 from "../../assets/Amthuc/May-Bar_3.jpg";
import maybar3 from "../../assets/Amthuc/May-Bar_4.jpg";
import DSC00716 from "../../assets/Amthuc/DSC00716.jpg";
import IconFC from "../IconFC";




const cuisines = [
    
        {
            id: "R",
            name: "Nhà hàng Lux",
            description: "sự sang trọng và thanh lịch",
            longDescription:
              "Dẫn dắt vị giác của bạn chu du qua các nền văn hóa ẩm thực trên khắp thế giới, nhà hàng Lux cung cấp đa dạng thực đơn từ hương vị Á Đông thuần túy đến những món châu Âu chuẩn vị. Tọa lạc tại tầng 2 khách sạn, không gian sang trọng của nhà hàng là nơi bạn có thể vừa ngắm nhìn phố biển về đêm, vừa thưởng thức một bữa ăn thịnh soạn do chính tay người đầu bếp tài ba chế biến. ",
            images: [
              resaurants,
              resaurants1,
              resaurants2,
              resaurants3,
              resaurants4,
            ],
          },
          {
            id: "MB",
            name: "Maybar",
          
            longDescription:
              "Ngắm nhìn thành phố về đêm tại May Bar là trải nghiệm tuyệt vời từ tầng 21 của khách sạn.",
            images: [
              maybar,
              maybar1,
              maybar2,
              maybar3,
            ],
          },
          {
            id: "May Lounge",
            name: "May Lounge",
            description: "Sự sang trọng và ấm cúng",
            longDescription:
              "May Lounge được thiết kế với phong cách hiện đại và tinh tế, kết hợp hoàn hảo giữa sự sang trọng và ấm cúng",
            images: [
              DSC00716,
            ],
          },
]


function Amthuc() {


  const [currentcuisinesIndex, setCurrentcuisinesIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isClick, setisClick] = useState(false);
    const [iscuisinesChange, setIscuisinesChange] = useState(false);
   
  
    const currentCuisines = cuisines[currentcuisinesIndex];
  
    const goTocuisines = (index: number) => {
      setIscuisinesChange(true);
      setisClick(true);
      setCurrentcuisinesIndex(index);
      setCurrentImageIndex(0);
    };
  
    const handleNext = () => {
      setisClick(true);
      if (currentImageIndex < currentCuisines.images.length - 1) {
        setCurrentImageIndex((prev) => prev + 1);
      } else {
        if (currentcuisinesIndex < cuisines.length - 1) {
          goTocuisines(currentcuisinesIndex + 1);
        } else {
          goTocuisines(0);
        }
      }
    };
  
    const handlePrev = () => {
      setisClick(true);
      if (currentImageIndex > 0) {
        setCurrentImageIndex((prev) => prev - 1);
      } else {
        if (currentcuisinesIndex > 0) {
          goTocuisines(currentcuisinesIndex - 1);
          setCurrentImageIndex(cuisines[currentcuisinesIndex - 1].images.length - 1);
        } else {
          goTocuisines(cuisines.length - 1);
          setCurrentImageIndex(cuisines[cuisines.length - 1].images.length - 1);
        }
      }
    };
  
    const handlecuisinesDotClick = (index: number) => {
      if (index !== currentcuisinesIndex) {
        goTocuisines(index);
      }
    };
  
   
    useEffect(() => {
      const timer = setTimeout(() => {
       const PrevIndex = currentcuisinesIndex === 0
       ? cuisines.length - 1
        : currentcuisinesIndex - 1;
      goTocuisines(PrevIndex);
      }, 2000); 
      return () => clearTimeout(timer);
   
    }, [currentcuisinesIndex, currentImageIndex]);
  
   
    useEffect(() => {
      if (isClick || iscuisinesChange) {
        const timer = setTimeout(() => {
          setisClick(false);
          setIscuisinesChange(false);
   
        }, 400);  
        return () => clearTimeout(timer);
      }
    }, [isClick, iscuisinesChange, currentImageIndex, currentcuisinesIndex]);      

    return (
        <>
      <section className="flex  max-[770px]:flex-col-reverse flex-direction: column-reverse;  mt-10 w-full pl-[5%]  max-[1450px]:pl-0 max-[770px]:pl-0 max-[770px]:pr-0 h-full max-[1450px]:h-125 max-[1030px]:h-100 max-[770px]:h-full max-[770px]:w-full">
        <div className="bg-[#fff] w-[30%] max-[770px]:w-full flex max-[770px]:h-55">
          <div className={`w-full pl-10  max-[1450px]:py-0 max-[1030px]:px-4 gap-3 max-[1450px]:gap-0.5 flex flex-col min-h-full transition-all duration-800 `}>
            <div className={`${iscuisinesChange ? "opacity-40" : "opacity-100 transition-all duration-500"}`}>
              <h1 className="text-[60px] font-medium mt-10 max-[1030px]:mt-3 max-[1450px]:text-[34px] text-[#764E2A] max-[770px]:text-[24px] ">Ẩm thực</h1>
            <p className="text-[48px] py-2 max-[1450px]:text-[20px] max-[1030px]:py-0 text-[#764E2A] max-[770px]:text-[18px] ">{currentCuisines.name}</p>
             <p className="text-[31px] py-2 max-[1450px]:text-[16px] max-[1030px]:py-0 max-[1030px]:text-[14px] text-[#bc6a23] max-[770px]:text-[14px]">{currentCuisines.description}</p>
            <p className="border-b-4 w-[20%] pt-5 max-[1030px]:border-b-3 max-[1030px]:pt-3 text-[#764E2A] "></p>
            <p className="text-[20px]  py-4 max-[1450px]:text-[14px] max-[1030px]:py-0 max-[1030px]:text-[13px]    max-[770px]:line-clamp-3 text-ellipsis max-[770px]:text-[14px] ">{currentCuisines.longDescription}</p>
            </div>
            
            <ul className="w-full flex gap-3 mt-auto ml-[80%] max-[1450px]:ml-[70%] pb-4 max-[1030px]:invisible  ">
              {cuisines.map((cuisines, index) => (
                <li
                  key={cuisines.id}
                  className={`cursor-pointer transition-all duration-300 flex items-center ${
                    currentcuisinesIndex === index
                      ? "w-10 h-2  bg-[#764E2A] rounded-full"
                      : "w-2 h-2 bg-gray-400 rounded-full"
                  }`}
                  onClick={() => handlecuisinesDotClick(index)}
                  title={cuisines.name}
              
                />
              ))}
            </ul>
          </div>
        </div>
        
       <div className="  relative w-[70%] max-[770px]:w-full  flex justify-center items-center flex-col">
          <div className="w-full h-full  flex justify-center">
            <img
              className={`w-full h-230 max-[1450px]:h-full  max-[1450px]:w-full mr-10 max-[770px]:mr-0 max-[770px]:h-110 max-[430px]:h-60 max-[380px]:h-53 max-[330px]:h-45 max-[1030px]:mr-0 object-cover${
                isClick
                  ? "opacity-90 transition duration-500"
                  : "opacity-100 transition duration-500"
              }`}
              src={currentCuisines.images[currentImageIndex]}
            />
          </div>
          <div className="absolute bottom-[-40px] flex mt-[-50px] max-[1450px]:mt-[-30px] max-[770px]:mt-[-28px] px-5  py-10 z-1  text-3xl max-[1450px]:text-[10px]">
            <button className=" cursor-pointer px-8 max-[1450px]:px-5 max-[1450px]:py-2 text-[#fff] max-[1450px]: font-medium bg-[#b6b1ac] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500" onClick={handlePrev} >
              <IconFC name="arrowleft" />
            </button>
            <button className=" cursor-pointer px-8 max-[1450px]:px-5  max-[1450px]:py-2 text-[#fff] font-medium bg-[#764E2A] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500 "  onClick={handleNext} >
              <IconFC name="arrowright" />
            </button>
          </div>
          </div>
      </section>
      {/*nut laptop */}
      <div className=" h-30 mt-[-100px] max-[1450px]:mt-[-65px] mr-[83%] max-[770px]:hidden  max-[1450px]:mr-[83%] min-w-max flex flex-col gap-3">
        
        
        <div className="mt-2 relative    text-[18px] text-[#fff] cursor-pointer"
            onClick={() => {
                 if (currentcuisinesIndex > 0) {
                    goTocuisines(currentcuisinesIndex - 1);
                    setCurrentImageIndex(cuisines[currentcuisinesIndex - 1].images.length - 1);
                } else {
                    goTocuisines(cuisines.length - 1);
                    setCurrentImageIndex(cuisines[cuisines.length - 1].images.length - 1);
                }
            }}
        >
          <div
            className={`relative max-[770px]:static mr-[-30px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 ${
              iscuisinesChange
                ? "opacity-0"
                : "opacity-100 "
            }`}
          >
            <div className="flex flex-col justify-start min-w-0 max-w-full pl-10">
              <span className="font-medium text-[30px] max-[1450px]:text-[16px] whitespace-nowrap">
                {
                   currentCuisines.name                }
              </span>
              <span className="font-light text-[23px] max-[1450px]:text-[14px] whitespace-nowrap">
                {
                    currentCuisines.description
                }
                
              </span>
            </div>
            <div className="absolute left-5 max-[770px]:static  top-1/2 -translate-y-1/2 px-4 flex items-center justify-center">
              <IconFC name="arrowleft" />
            </div>
          </div>
        </div>
      
      </div>
          {/*nut mobi */}
          <div className="hidden max-[770px]:inline  ">
       <div className=" h-20 mt-[-100px] max-[770px]:mt-0    ml-[83%] max-[770px]:m-0  min-w-max flex-col gap-3">
        <div className="mt-2 relative  max-[770px]:static text-[18px] text-[#fff] cursor-pointer"
          onClick={() =>
       
            goTocuisines(
              currentcuisinesIndex < cuisines.length - 1
                ? currentcuisinesIndex + 1
                : 0
            )
          }
      
        >
                  <div className={`relative max-[770px]:static mr-[-10px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 ${
              iscuisinesChange
                ? "opacity-0"
                : "opacity-100 "
            }`}
          >
            <div className="flex flex-col justify-start min-w-0 max-w-full">
              <span className="font-extrabold text-[30px] max-[1450px]:text-[16px] whitespace-nowrap">
                {
                  cuisines[
                    currentcuisinesIndex < cuisines.length - 1
                      ? currentcuisinesIndex + 1
                      : 0
                  ].name
                }
              </span>
              <span className="font-light text-[23px] max-[1450px]:text-[12px] whitespace-nowrap">
                {
                  cuisines[
                    currentcuisinesIndex < cuisines.length - 1
                      ? currentcuisinesIndex + 1
                      : 0
                  ].description
                }
              </span>
            </div>
            <div className="absolute right-0 max-[770px]:static    px-4 flex items-center justify-center">
              <IconFC name="arrowright" />
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
    );


}
export default Amthuc;