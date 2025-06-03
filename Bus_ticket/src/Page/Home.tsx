import Icon from '../icons/Icon'
import duong from '../assets/home/duong.png'
import bus from '../assets/bus.png'
import Feedback from '../Component/Slider/Feedback'
import BlogPost from './Blog/components/Blog_Post'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
 
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


function Home() {
  const { t } = useTranslation('Home')
  const [showDiemDenDropdown, setShowDiemDenDropdown] = useState(false)
  const [selectedDiemDen, setSelectedDiemDen] = useState('')
  const [showDiemDiDropdown, setShowDiemDiDropdown] = useState(false)
  const [selectedDiemDi, setSelectedDiemDi] = useState('')


 
  const diemDi = [
    { id: 1, name: t('Home_location.Ha Noi') },
    { id: 2, name: t('Home_location.Ho Chi Minh') },
    { id: 3, name: t('Home_location.Da Nang') },
    { id: 4, name: t('Home_location.Nha Trang') },
    { id: 5, name: t('Home_location.Hue') },
    { id: 6, name: t('Home_location.Can Tho') },
    { id: 7, name: t('Home_location.Vung Tau') },
    { id: 8, name: t('Home_location.Phu Quoc') },
    { id: 9, name: t('Home_location.Da Lat') },
    { id: 10, name: t('Home_location.Quy Nhon') },
    { id: 11, name: t('Home_location.Hai Phong') }
  ]
  const diemDen = [
    { id: 1, name: t('Home_location.Ha Noi') },
    { id: 2, name: t('Home_location.Ho Chi Minh') },
    { id: 3, name: t('Home_location.Da Nang') },
    { id: 4, name: t('Home_location.Nha Trang') },
    { id: 5, name: t('Home_location.Hue') },
    { id: 6, name: t('Home_location.Can Tho') },
    { id: 7, name: t('Home_location.Vung Tau') },
    { id: 8, name: t('Home_location.Phu Quoc') },
    { id: 9, name: t('Home_location.Da Lat') },
    { id: 10, name: t('Home_location.Quy Nhon') },
    { id: 11, name: t('Home_location.Hai Phong') }

  ]

  const OurAmenities = [
    {
      id: 1,
      title:  t('Home_Amenities.AmenitiesList.Wifi'),
      icon: 'wifi'
    },
    {
      id: 2,
      title: t('Home_Amenities.AmenitiesList.Pillow'),
 
      icon: 'pillow'
    },
    {
      id: 3,
      title: t('Home_Amenities.AmenitiesList.Water'),
 
      icon: 'water'
    },
    {
      id: 4,
      title: t('Home_Amenities.AmenitiesList.SoftDrink'),
 
      icon: 'drink'
    }
  ]

  return (
    <>
      <div className=' h-full '>
        <section className='bg-[#ececec]'>
          <div className=' max-[1200px]:px-5 max-[1800px]:px-[10%]  max-[900px]:flex-col  flex  justify-between items-center px-[20%] p-10  '>
            <div className=' max-[900px]:items-center max-[900px]:text-center max-[900px]:flex-col max-[900px]:flex gap-4'>
              <p className='text-5xl w-130 font-bold py-4 max-[450px]:text-[20px] max-[450px]:w-70'>{t('Home_SEARCH.GetTicket')}</p>
              <button className='bg-[#1ba000] text-[#fff]  cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300  items-center justify-center '>
         
                <span className=''>{t('Home_button.GetTicket')}</span>
              </button>
            </div>
            <div className='flex flex-col gap-4 max-[450px]:my-3  max-[900px]:my-10  max-[900px]:items-center max-[900px]:text-center max-[900px]:flex-col max-[900px]:flex'>
              <strong className='text-[30px]'>{t('Home_SEARCH.ChooseYourTicket')}</strong>
              <form action='' className='grid  gap-4 bg-[#fff] shadow-2xl max-[450px]:w-[110%]  p-5 rounded-[10px] items-center  '>
                <div className='flex gap-4 max-[450px]:flex-col  '>
                  <div className='border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2'>
                    <i className='text-[#70ff53]'>
                      {' '}
                      <Icon name='directionarrow' />
                    </i>
                    <div className="relative w-50">
                      <div
                        className="cursor-pointer px-2 py-1 bg-[#fff] rounded"
                        onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                      >
                        {selectedDiemDi || t('Home_from.Pickup')}
                      </div>
                      {showDiemDiDropdown && (
                        <div className="absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500 w-full">
                          {diemDi.map((item) => (
                            <div
                              key={item.id}
                              className="px-3 py-1 hover:bg-[#e6ffe6]  cursor-pointer text-[14px]"
                              onClick={() => {
                                setSelectedDiemDi(item.name);
                                setShowDiemDiDropdown(false);
                              }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2 relative'>
                    <i className='text-[#66ff47]'>
                      <Icon name='location' />
                    </i>
 
                    <div className="relative w-50">
                      <div
                        className="cursor-pointer px-2 py-1 bg-[#fff] rounded"
                        onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                      >
                        {selectedDiemDen ||  t('Home_from.Dropping')}
                      </div>
                      {showDiemDenDropdown && (
                        <div className="absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500  w-full">
                          {diemDen.map((item) => (
                            <div
                              key={item.id}
                              className="px-3 py-1 hover:bg-[#e6ffe6]  cursor-pointer text-[14px]"
                              onClick={() => {
                                setSelectedDiemDen(item.name);
                                setShowDiemDenDropdown(false);
                              }}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2'>
                  <i className='text-[#66ff47]'>
                    <Icon name='calendar' />
                  </i>
                  <input type='date' name='' className=' ' id='' />
                </div>
                <button className='bg-[#1ba000] text-[#fff] cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300 w-50 h-10 justify-self-center  '>
                  <span>{t('Home_button.FindTicket')}</span>
                </button>
              </form>
            </div>
          </div>
          <div
            className='  bg-cover bg-no-repeat bg-center h-40 max-[450px]:h-20 max-[900px]:h-30 w-full flex items-end  '
            style={{ backgroundImage: `url(${duong})` }}
          >
            <img src={bus} className=' absolute h-20 max-[450px]:h-10 max-[900px]:h-15 bus-animation ' alt='' />
            <style>
              {`
        
              @keyframes busMove {
                0% {
                  right: -200px;
                  transform: translatey(0);
                }
                100% {
                 
                  right: 100%;
                }
              }
                .bus-animation {
                  animation: busMove 15s  ease-in-out infinite;
                  position: absolute;
                }
              `}
            </style>
          </div>
        </section>
        <section className='   p-5'>
          <div className='text-center mb-10  max-[1800px]:px-[10%] px-[30%]'>
            <strong className=' text-[36px]  max-[330px]:text-[22px] '>{t('Home_Steps.Header.Title')}</strong>
            <p className='text-[#666] text-[20px] max-[1800px]:px-[10%] px-[30%]  max-[330px]:px-0  max-[330px]:text-[16px]'>
              {t('Home_Steps.Header.Description')}
            </p>
          </div>
          <div className=' grid grid-cols-3     gap-5   max-[1800px]:px-[10%] max-[1200px]:px-2 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-10 px-[25%] '>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-2xl flex flex-col items-center gap-3'>
              <div className=' flex flex-col   '>
                <div className=' text-end z-2 mb-[-30px] mr-[-20px]'>
                  <span className=' bg-[#0e9e4d] p-4 rounded-full '>01</span>
                </div>
                <i className='   text-[#1ba000] text-[30px] bg-[rgba(14,158,77,0.25)] px-7 py-5  bg-size-[20px] border-10 border-[rgba(14,158,77,0.1)] rounded-full'>
                  <Icon name='search' />
                </i>
              </div>
              <strong className='pt-2 text-[25px] min-w-max max-[330px]:text-[20px]'>{t('Home_Steps.Step1.Title')}</strong>
              <p className='px-[2%] text-center text-gray-500 '>
                {t('Home_Steps.Step1.Description')}
              </p>
            </div>

            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-2xl flex flex-col items-center gap-3'>
              <div className=' flex flex-col   '>
                <div className=' text-end z-2 mb-[-30px] mr-[-20px]'>
                  <span className=' bg-[#0e9e4d] p-4 rounded-full '>02</span>
                </div>
                <i className='    text-[#1ba000] text-[30px] bg-[rgba(14,158,77,0.25)] px-7 py-5  bg-size-[20px] border-10 border-[rgba(14,158,77,0.1)] rounded-full'>
                  <Icon name='ticket' />
                </i>
              </div>
              <strong className='pt-2  text-[25px] max-[330px]:text-[20px]'> 
                 {t('Home_Steps.Step2.Title')} 
              </strong>
              <p className='px-[2%] text-center text-gray-500 '>
                {t('Home_Steps.Step2.Description')}
              </p>
            </div>

            <div className=' max-[900px]:col-span-2 max-[900px]:mx-[25%] max-[600px]:col-span-1 max-[600px]:mx-0  bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-2xl flex flex-col items-center gap-3'>
              <div className=' flex flex-col   '>
                <div className=' text-end z-2 mb-[-30px] mr-[-20px]'>
                  <span className=' bg-[#0e9e4d] p-4 rounded-full '>03</span>
                </div>
                <i className='   text-[#1ba000] text-[30px] bg-[rgba(14,158,77,0.25)] px-7 py-5  bg-size-[20px] border-10 border-[rgba(14,158,77,0.1)] rounded-full'>
                  <Icon name='bill' />
                </i>
              </div>
              <strong className='pt-2 text-[25px] max-[330px]:text-[20px]'> {t('Home_Steps.Step3.Title')} </strong>
              <p className='px-[2%] text-center text-gray-500 '>
                {t('Home_Steps.Step3.Description')}
              </p>
            </div>
          </div>
        </section>

        <section className=' p-5'>
          <div>
            <div className='text-center mb-10 px-[30%] max-[1200px]:px-5 max-[1800px]:px-[10%] '>
              <strong className='text-[36px]  max-[330px]:text-[22px] '>{t('Home_Amenities.Header.Title')}</strong>
              <p className='text-[#666] text-[20px] max-[1800px]:px-[10%] px-[30%]  max-[330px]:px-0  max-[330px]:text-[16px]'>
                {t('Home_Amenities.Header.Description')}
              </p>
            </div>
            <div className='px-[30%]  max-[1200px]:px-5 max-[1800px]:px-[10%]'>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={2}
          
                loop={true}
                className='mySwiper'
                breakpoints={{
                  450: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                   
                }}
              >
                {OurAmenities.map((amenity) => (
                <SwiperSlide
                  key={amenity.id}
                  className='bg-[#fff]   p-10 px-20 max-[1050px]:p-5 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 border-2 border-gray-300 hover:shadow-1xl hover:shadow-[#1ba000] flex flex-col items-center gap-3 '
                >
                  <div className='flex flex-col items-center gap-2'>
                    
                 
                    <i className='  text-[rgb(128,128,128)] border-b-5 text-[100px] max-[900px]:text-[50px] hover:text-[#0e9e4d] transition duration-500'>
                      <Icon name={amenity.icon} />
                    </i>
                    <div className='text-[30px] text-[rgb(146,146,146)] max-[900px]:text-[20px] whitespace-nowrap' >{amenity.title} </div>
              </div>
                   
                </SwiperSlide>

              ))  
              }
              </Swiper>

              
              
            </div>
          </div>
          
        </section>
        <section className='bg-[#ececec] mt-10 p-5 '>
          <div className='text-center  max-[1200px]:px-5 max-[1800px]:px-[10%] px-[30%] max-[350px]:px-1'>
            <strong className=' text-[36px] max-[900px]:text-[30px]   max-[450px]:text-[25px] '>{t('Home_Testimonials.Header.Title')}</strong>
            <p className='text-[#666] text-[20px] px-[20%] max-[1200px]:px-5 max-[1800px]:px-[10%]  max-[900]:text-[16px]  max-[450px]:px-0 max-[450px]:text-[14px] '>
              {t('Home_Testimonials.Header.Description')}
            </p>
          </div>
          

          <div className='px-[30%] py-10 max-[1200px]:px-5 max-[1800px]:px-[10%]  max-[450px]:py-5 max-[350px]:px-1 '>
            <Feedback />
          </div>
        </section>
        <section className=' px-[30%] max-[1200px]:px-5 max-[1800px]:px-[5%]'>
          <div className='text-center m-10 max-[1200px]:m-5'>
            <strong className=' text-[36px] '>{t('Home_Post.Title')}</strong>
          </div>
          <BlogPost />
        </section>
      </div>
    </>
  )
}
export default Home
