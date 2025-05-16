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
      name: "Senior Deluxe City",
      description: "Đón trọn hướng gió biển",
      longDescription:
        "Một chuyến du lịch chữa lành cùng bạn bè trong không gian rộng rãi thoáng đãng của hạng phòng Triple City View sẽ mang lại những trải nghiệm đáng nhớ và ý nghĩa. Với tầm nhìn toàn cảnh thành phố, đây chắc chắn là lựa chọn tuyệt vời cho những chuyến đi 3 người, nơi mọi người có thể cùng nhau chia sẻ những khoảnh khắc đặc biệt.",
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
      name: "Triple Single",
      description: "Không gian thoải mái cho ba người",
      longDescription:
        "Phòng Triple Single mang đến không gian rộng rãi, phù hợp cho nhóm bạn hoặc gia đình nhỏ. Với thiết kế hiện đại và tiện nghi, đây là lựa chọn lý tưởng để tận hưởng kỳ nghỉ đáng nhớ.",
      images: [TripleSingle, TripleSingle1, TripleSingle2, TripleSingle3, TripleSingle4],
    },
    {
      id: "SS",
      name: "Studio Suite",
      description: "Sự sang trọng và tiện nghi",
      longDescription:
        "Studio Suite mang đến không gian sang trọng với nội thất tinh tế, phù hợp cho những ai tìm kiếm sự thoải mái và đẳng cấp trong kỳ nghỉ của mình.",
      images: [studiosuite, studiosuite1, studiosuite2, studiosuite3, studiosuite4],
    },
    {
      id: "PSD",
      name: "President Suite",
      description: "Đỉnh cao của sự xa hoa",
      longDescription:
        "Phòng President Suite là biểu tượng của sự xa hoa với không gian rộng lớn, nội thất cao cấp và tầm nhìn panoramic, mang đến trải nghiệm nghỉ dưỡng đỉnh cao.",
      images: [president, president1, president2, president3, president4],
    },
    {
      id: "PS",
      name: "Premier Sea",
      description: "Tầm nhìn hướng biển tuyệt đẹp",
      longDescription:
        "Phòng Premier Sea mang đến trải nghiệm nghỉ dưỡng với tầm nhìn hướng biển ngoạn mục, không gian thoáng đãng và nội thất hiện đại, lý tưởng cho kỳ nghỉ thư giãn.",
      images: [premiersea, premiersea1, premiersea2 , premiersea4],
    },
    {
      id: "DCV",
      name: "Deluxe City View",
      description: "Ngắm nhìn thành phố sôi động",
      longDescription:
        "Phòng Deluxe City View mang đến tầm nhìn toàn cảnh thành phố sôi động, với không gian thoải mái và tiện nghi hiện đại, phù hợp cho mọi du khách.",
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


const currentRoom = roomTypes[currentRoomIndex];
const handleNext = () => {
    setisClick(true);
  if (currentImageIndex < currentRoom.images.length - 1) {
    setCurrentImageIndex((prev) => prev + 1);
  } else {
    if (currentRoomIndex < roomTypes.length - 1) {
      setCurrentRoomIndex((prev) => prev + 1);
      setCurrentImageIndex(0);
    } else {
      setCurrentRoomIndex(0);
      setCurrentImageIndex(0);
    }
  }
};

const handlePrev = () => {
    setisClick(true);
  if (currentImageIndex > 0) {
    setCurrentImageIndex((prev) => prev - 1);
  } else {
    if (currentRoomIndex > 0) {
      setCurrentRoomIndex((prev) => prev - 1);
      setCurrentImageIndex(roomTypes[currentRoomIndex - 1].images.length - 1);
    } else {
      setCurrentRoomIndex(roomTypes.length - 1);
      setCurrentImageIndex(roomTypes[roomTypes.length - 1].images.length - 1);
    }
  }
};

  const handleRoomDotClick = (index: number) => {
    setisClick(true);
    setCurrentRoomIndex(index);
    setCurrentImageIndex(0);  
  };

   // Reset trạng thái chuyển đổi sau khi hoàn tất hiệu ứng
  useEffect(() => {
    if (isClick) {
      const timer = setTimeout(() => {
        setisClick(false);
      },  300); 
      return () => clearTimeout(timer);
    }
  }, [isClick, currentImageIndex, currentRoomIndex]);

  return (
    <section className="flex mt-10 w-full h-full">
      <div className="bg-amber-600 w-2/3 flex justify-center items-center flex-col">
        <div className="w-full p-10 flex justify-center">
          <img
            className={`w-300 h-200 object-cover ${isClick ? "opacity-90 transition duration-500" : "opacity-100 transition duration-500"}`}
            src= {currentRoom.images[currentImageIndex]}
          />
        </div>
        <div className="flex mt-[-50px] divide-x divide-gray-400 px-5 py-2 z-10 bg-amber-300 text-3xl">
          <button className="px-8" onClick={handleNext}>
            <IconFC name="arowleft" />
          </button>
          <button className="px-8" onClick= {handlePrev}>
            <IconFC name="arowright" />
          </button>
        </div>
      </div>
      <div className="bg-amber-600 w-1/3 border-l-8 border-gray-400 flex">
        <div className="w-full px-15 py-10 gap-3 flex flex-col min-h-full">
          <h1 className="text-[60px] font-medium  mt-10">
            Phòng nghỉ
          </h1>
          <p className="text-[40px] py-2">{ currentRoom.name} </p>
          <p className="text-[25px] py-2"> {currentRoom.description }</p>
          <p className=" border-b-4 w-[20%] pt-5  "> </p>
          <p className=" text-[20px] w-180 py-3 ">{currentRoom.longDescription }</p>
         <ul className=" flex-row-reverse w-full pr-[80%] flex gap-3 mt-auto px-5 py-2  text-3xl divide-x divide-gray-400">
            { roomTypes.map((room, index) => (
                <li
                key={room.id}
                className={`cursor-pointer transition-all duration-300 flex items-center ${
                  currentRoomIndex ===  index
                    ? "w-10 h-2 bg-gray-800 rounded-full"
                    : "w-2 h-2 bg-gray-400 rounded-full"
                }`}
                onClick={() => handleRoomDotClick( index)}
                title={room.name}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Phong;