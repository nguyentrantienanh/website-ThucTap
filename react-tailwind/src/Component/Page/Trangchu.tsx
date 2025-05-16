import { useState } from "react";
import sanh from "../../assets/trangchu/trangchu.jpg";
import PhongSlider from "../Slider/Phong";

function Trangchu() {
  const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  

 
 
 

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#f5f5f5]">
        <img className="w-full h-240 object-cover" src={sanh} alt="" />
        <div 
          className={`mt-[-60px] items-center text-center px-15 py-15 bg-[rgb(244,244,244)] w-550 transition-all duration-500 ${
            isVisible ? "opacity-100  " : "opacity-0  "
          }`}
        >
          <h1 className="text-[48px] font-medium">Khách sạn Adamas Boutique</h1>
          <p className="text-[20px] px-20 mt-[20px]">
            Như một viên kim cương sang trọng và lấp lánh giữa lòng phố biển Nha Trang, Adamas Boutique Hotel Nha Trang tọa lạc tại vị trí đắc địa ngay trên cung đường sầm uất Trần Quang Khải, cách biển chưa đầy 1 phút đi bộ. Mang trong mình một lối thiết kế tinh tế và hiện đại nhưng cũng không kém phần sang trọng; tỏa sáng và rực rỡ giống như cái tên. Adamas Boutique Hotel Nha Trang chính là điểm đến đến lý tưởng cung cấp cho bạn những trải nghiệm nghỉ dưỡng đa dạng từ dịch vụ và tiện ích cao cấp của khách sạn.
          </p>
        </div>
      </div>
      <PhongSlider />
    </>
  );
}

export default Trangchu;