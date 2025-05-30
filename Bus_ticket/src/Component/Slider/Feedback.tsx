import { Swiper, SwiperSlide } from 'swiper/react'
import feedbackMe from '../../assets/feedback/me.jpg'
import { Autoplay } from 'swiper/modules'
import { useState } from 'react'

function Feedback() {
  const images = [
    {
      id: 1,
      src: feedbackMe,
      title: 'Feedback 1',
      longDescription:
        ' This is the first feedback description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      src: feedbackMe,
      title: 'Feedback 2',
      longDescription:
        ' This is the second feedback description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      src: feedbackMe,
      title: 'Feedback 3',
      longDescription:
        'lorem asdasjdiasjdiasdjasidjaosjdisajdasidjipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  const [feedbackIndex, setFeedbackIndex] = useState(0)

  return (
    <div className=' '>
      <div className=' relative px-[30%] py-20 '>
        <div className=' bg-[#fff] p-15 '>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            onSlideChange={(swiper) => setFeedbackIndex(swiper.realIndex)}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className='p-5 bg-[#fff]  '>
                <p className='text-gray-600 mt-2 text-center text-[16px]'>{image.longDescription}</p>
                <div className='justify-center items-center flex m-4'>
                  <img
                    src={image.src}
                    alt={image.title}
                    className=' w-40 h-40  text-center object-cover object-top ; bg-amber-200 rounded-full'
                  />
                </div>

                <h2 className='text-xl font-semibold text-center'>{image.title}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='absolute z-1 mt-[-30px] left-[50%] translate-x-[-50%]'>
          <ul className='flex justify-center '>
            {images.map((image, index) => (
              <li
                key={image.id}
                className={`cursor-pointer inline-block mx-1 w-10 h-3 rounded-full ${feedbackIndex === index ? 'bg-[#1ba000]' : 'bg-gray-300'}`}
                onClick={() => setFeedbackIndex(index)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Feedback
