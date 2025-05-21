import { useState, useEffect } from "react";
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

function Phong() {
  // Room types with their images and metadata
  const roomTypes = [
        {
            id: "SLC",
      name: "Senior Deluxe City View",
      description: "Rộng rãi và quý phái",
      longDescription:
        "Senior Deluxe City View không chỉ là một lựa chọn tuyệt vời cho kỳ nghỉ cùng gia đình tại Nha Trang mà còn mang đến cho bạn một trải nghiệm độc đáo. Với tầm nhìn toàn cảnh thành phố nhộn nhịp, bạn có thể ngắm nhìn cảnh đêm lấp lánh, cảm nhận sự sôi động của thành phố ngay từ khung cửa sổ của căn phòng. Đây sẽ là không gian lý tưởng để bạn và gia đình có thể tận hưởng những thước phim đáng nhớ tại Adamas Boutique Hotel Nha Trang.",
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
        description: "Rộng rãi thoáng đãng",
        longDescription:
          "Một chuyến du lịch chữa lành cùng bạn bè trong không gian rộng rãi thoáng đãng của hạng phòng Triple City View sẽ mang lại những trải nghiệm đáng nhớ và ý nghĩa. Với tầm nhìn toàn cảnh thành phố, đây chắc chắn là lựa chọn tuyệt vời cho những chuyến đi 3 người, nơi mọi người có thể cùng nhau chia sẻ những khoảnh khắc đặc biệt.",
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
      description: "Đầy đủ tiện nghi",
      longDescription:
        "Chính là lựa chọn lý tưởng cho kỳ nghỉ cùng bạn bè và người thương với hệ thống phòng cao cấp và đầy đủ tiện nghi, kèm theo tầm nhìn hướng biển Nha Trang thơ mộng. Đây sẽ là không gian tuyệt vời để bạn thư giãn và kiến tạo ra những kỷ niệm đẹp bên người thân yêu.",
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
      description: "Đón trọn hướng gió biển",
      longDescription:
        "Đón trọn hướng gió biển với căn phòng có tầm nhìn bao trọn cả thành phố biển Nha Trang, tọa lạc tài tầng 20 của Adamas Boutique Hotel Nha Trang. Đây chính là một sự lựa chọn phù hợp cho những chuyến đi cùng gia đình nhưng lại muốn tận hưởng một không gian riêng với thiết kế 1 phòng khách, 1 bếp và 2 phòng ngủ. President Suite Sea View là một sự kết hợp hoàn hảo giữa lối thiết kế hiện đại và sang trọng, mang đến những cảm xúc tuyệt với khi lưu trú tại đây.",
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
      description: "Tầm nhìn hướng biển tuyệt đẹp",
      longDescription:
        "Phòng Premier Sea mang đến trải nghiệm nghỉ dưỡng với tầm nhìn hướng biển ngoạn mục, không gian thoáng đãng và nội thất hiện đại, lý tưởng cho kỳ nghỉ thư giãn.",
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
      description: "Đẳng cấp sang trọng",
      longDescription:
        "Hơn là một căn phòng, Deluxe City View là một điểm dừng chân không gì sánh được; nằm dài trên chiếc giường êm ái để phục hồi năng lượng sau ngày dài du ngoạn phố biển, bạn sẽ được đắm mình vào một thế giới riêng trong không gian độc đáo và tinh tế của căn phòng, hứa hẹn sẽ mang đến những dịch vụ và tiện ích hiện tốt nhất cho bạn.",
      images: [
        deluxecityview,
        deluxecityview1,
        deluxecityview2,
        deluxecityview3,
        deluxecityview4,
      ],
    },      
    ];

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClick, setisClick] = useState(false);
  const [isRoomChange, setIsRoomChange] = useState(false);
 

  const currentRoom = roomTypes[currentRoomIndex];

  const goToRoom = (index: number) => {
    setIsRoomChange(true);
    setisClick(true);
    setCurrentRoomIndex(index);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setisClick(true);
    if (currentImageIndex < currentRoom.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else {
      if (currentRoomIndex < roomTypes.length - 1) {
        goToRoom(currentRoomIndex + 1);
      } else {
        goToRoom(0);
      }
    }
  };

  const handlePrev = () => {
    setisClick(true);
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    } else {
      if (currentRoomIndex > 0) {
        goToRoom(currentRoomIndex - 1);
        setCurrentImageIndex(roomTypes[currentRoomIndex - 1].images.length - 1);
      } else {
        goToRoom(roomTypes.length - 1);
        setCurrentImageIndex(roomTypes[roomTypes.length - 1].images.length - 1);
      }
    }
  };

  const handleRoomDotClick = (index: number) => {
    if (index !== currentRoomIndex) {
      goToRoom(index);
    }
  };

 
  useEffect(() => {
    const timer = setTimeout(() => {
      goToRoom((currentRoomIndex + 1) % roomTypes.length);
    }, 5000); 
    return () => clearTimeout(timer);
 
  }, [currentRoomIndex, currentImageIndex]);

 
  useEffect(() => {
    if (isClick || isRoomChange) {
      const timer = setTimeout(() => {
        setisClick(false);
        setIsRoomChange(false);
 
      }, 400);  
      return () => clearTimeout(timer);
    }
  }, [isClick, isRoomChange, currentImageIndex, currentRoomIndex]);

 
  return (
    <>
      <section className="  flex max-[770px]:flex-col  mt-10 w-full pr-[5%] max-[770px]:pr-0 h-full max-[1450px]:h-125 max-[1030px]:h-100 max-[770px]:h-full max-[770px]:w-full">
        <div className=" relative w-[70%] max-[770px]:w-full  flex justify-center items-center flex-col">
          <div className="w-full h-full flex justify-center">
            <img
              className={` w-full h-230 max-[1450px]:h-full  max-[1450px]:w-full mr-10 max-[770px]:mr-0 max-[770px]:h-110 max-[430px]:h-60 max-[380px]:h-53 max-[330px]:h-45 max-[1030px]:mr-0 object-cover ${
                isClick
                  ? "opacity-90 transition duration-500"
                  : "opacity-100 transition duration-500"
              }`}
              src={currentRoom.images[currentImageIndex]}
            />
          </div>
          <div className="absolute bottom-[-40px] flex mt-[-50px] max-[1450px]:mt-[-30px] max-[770px]:mt-[-28px] px-5  py-10 z-1  text-3xl max-[1450px]:text-[10px]">
            <button className=" cursor-pointer px-8 max-[1450px]:px-5 max-[1450px]:py-2 text-[#fff] max-[1450px]: font-medium bg-[#b6b1ac] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500" onClick={handlePrev}  >
              <IconFC name="arrowleft" />
            </button>
            <button className=" cursor-pointer px-8 max-[1450px]:px-5  max-[1450px]:py-2 text-[#fff] font-medium bg-[#764E2A] max-[430px]:text-[12px] hover:bg-[#fff] hover:text-[#f3d072] transition duration-500"  onClick={handleNext} >
              <IconFC name="arrowright" />
            </button>
          </div>
        </div>
        <div className="bg-[#fff] w-[30%] max-[770px]:w-full flex">
          <div className={`w-full  max-[1450px]:py-0 max-[1030px]:px-4 gap-3 max-[1450px]:gap-0.5 flex flex-col min-h-full transition-all duration-800 ${
            isRoomChange ? "opacity-20" : "opacity-100 transition-all duration-800"}`}>
            <h1 className="text-[60px] font-medium mt-10 max-[1030px]:mt-3 max-[1450px]:text-[34px] text-[#764E2A] max-[770px]:text-[24px]">Phòng nghỉ</h1>
            <p className="text-[48px] py-2 max-[1450px]:text-[20px] max-[1030px]:py-0 text-[#764E2A] max-[770px]:text-[18px]">{currentRoom.name}</p>
            <p className="text-[31px] py-2 max-[1450px]:text-[16px] max-[1030px]:py-0 max-[1030px]:text-[14px] text-[#bc6a23] max-[770px]:text-[14px]">{currentRoom.description}</p>
            <p className="border-b-4 w-[20%] pt-5 max-[1030px]:border-b-3 max-[1030px]:pt-3 text-[#764E2A]"></p>
            <p className="text-[20px]  py-4 max-[1450px]:text-[14px] max-[1030px]:py-0 max-[1030px]:text-[13px] line-clamp-5 max-[770px]:line-clamp-4 text-ellipsis h-40 max-[770px]:h-20 max-[770px]:text-[14px]">{currentRoom.longDescription}</p>
            <ul className="w-full flex gap-3 mt-auto  pb-4 max-[1030px]:invisible  ">
              {roomTypes.map((room, index) => (
                <li
                  key={room.id}
                  className={`cursor-pointer transition-all duration-300 flex items-center ${
                    currentRoomIndex === index
                      ? "w-10 h-2  bg-[#764E2A] rounded-full "
                      : "w-2 h-2 bg-gray-400 rounded-full"
                  }`}
                  onClick={() => handleRoomDotClick(index)}
                  title={room.name}
              
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="mt-[-100px] max-[770px]:mt-0 max-[1450px]:mt-[-65px] ml-[83%] max-[770px]:m-0  max-[1450px]:ml-[83%] max-[1030px]:ml-[75%] min-w-max flex flex-col gap-3">
        <div
          className="mt-2 relative  max-[770px]:static text-[18px] text-[#fff] cursor-pointer"
          onClick={() =>
            goToRoom(
              currentRoomIndex < roomTypes.length - 1
                ? currentRoomIndex + 1
                : 0
            )
          }
        >
          <div
            className={`relative max-[770px]:static mr-[-10px] max-[770px]:max-w-min h-full max-[1450px]:px-5 max-[1450px]:py-3 flex items-center transition-all duration-500 bg-[#764E2A] px-10 py-5 ${
              isRoomChange
                ? "opacity-0"
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

export default Phong;