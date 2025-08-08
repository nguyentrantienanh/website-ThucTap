import "../../App.css";
import agoda from "../../assets/Testimonials/agoda.png";
import booking from "../../assets/Testimonials/booking.png";
import tripadvisor from "../../assets/Testimonials/tripadvisor.png";
import vietnam from "../../assets/Testimonials/flag-vietnam.png";
import australia from "../../assets/Testimonials/flag-australia.png";
import korea from "../../assets/Testimonials/flag-south-korea.png";
import lenhi from "../../assets/Testimonials/le-nhi.png";
import seon from "../../assets/Testimonials/seon-young.png";
import caroline from "../../assets/Testimonials/caroline.png";
import "../../App.css"; //  
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
 



const feedbacks = [
  {
    id: 1,
    name: "Lê Nhi",
    country: "Việt Nam",
    countryFlag: vietnam,
    image: lenhi,
    review: "Khách sạn rộng rãi, thoáng mát, tiện nghi, nhân viên thân thiện nhiệt tình.",
    rating: "9,3/10",
    assessment: "70 đánh giá",
    platform: "Agoda",
    platformLogo: agoda,
    },
    {
    id: 2,
    name: "Seon Young",
    country: "Hàn Quốc",
    countryFlag: korea,
    image: seon,
    review: "Great meals, lovely and quiet atmosphere, helpful staff, absolutely clean and you get the villa to yourself.",
    rating: "9,4/10",
    assessment: "369 đánh giá",
    platform: "Booking.com",
    platformLogo: booking,
    },
    {
    id: 3,
    name: "Caroline Smith",
    country: "Úc",
    countryFlag: australia,
    image: caroline,
    review: "Had a pleasant stay. Great hospitality and services. Highly recommend for families and big group.",
    rating: "9/10",
    assessment: "69 đánh giá",
    platform: "Tripadvisor",
    platformLogo: tripadvisor,
    },
];




function Feedback() {
    const { t } = useTranslation('feedback');
    return (
         <>
        <div className="flex flex-col justify-center items-center w-full h-full bg-[#ffffff] p-5">
            <h1 className="text-[48px] font-bold text-[#764E2A] mb-5">{t('Testimonial')}</h1>
            <Swiper
                className="w-full h-full"
                slidesPerView={3}
                spaceBetween={30}
                loop={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {feedbacks.map((feedback) => (
                    <SwiperSlide key={feedback.id} className="p-5 bg-[#f9f9f9] rounded-lg shadow-lg">
                        <div className="   ">
                            <div className=" flex gap-3 w-full  h-50 justify-between ">
                                <div className="w-full h-full     ">
                                    <img
                                        src={feedback.platformLogo}
                                        alt={feedback.platform}
                                        className="float-left w-100 h-20   object-cover "
                                    />
                                </div>
                               
                                <div className=" float-right flex-col ">
                                    <span className="text-gray-500">{feedback.rating} </span>
                                    <span className="text-gray-500">{feedback.assessment}</span>
                                </div>

                            </div>
                            
                         </div>
                       
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
         </>
    );
    }
export default Feedback;