import Icon from '../../icons/Icon'
import duong from '../../assets/home/duong.png'
import bus from '../../assets/bus.png'
import Feedback from '../Slider/Feedback'
import BlogPost from './Blog/Blog_Post'
import { useState } from 'react'

function Home() {
  const [showDiemDenDropdown, setShowDiemDenDropdown] = useState(false)
  const [selectedDiemDen, setSelectedDiemDen] = useState('')
  const [showDiemDiDropdown, setShowDiemDiDropdown] = useState(false)
  const [selectedDiemDi, setSelectedDiemDi] = useState('')

  const diemDi = [
    { id: 1, name: 'Hà Nội' },
    { id: 2, name: 'Hải Phòng' },
    { id: 3, name: 'Đà Nẵng' },
    { id: 4, name: 'TP Hồ Chí Minh' },
    { id: 5, name: 'Cần Thơ' }
  ]
  const diemDen = [
    { id: 1, name: 'Hà Nội' },
    { id: 2, name: 'Hải Phòng' },
    { id: 3, name: 'Đà Nẵng' },
    { id: 4, name: 'TP Hồ Chí Minh' },
    { id: 5, name: 'Cần Thơ' }
  ]
  return (
    <>
      <div className=' h-full '>
        <section className='bg-[#ececec]'>
          <div className='max-[900px]:flex-col  flex  justify-between items-center px-[20%] p-10  '>
            <div className=' max-[900px]:items-center max-[900px]:text-center max-[900px]:flex-col max-[900px]:flex gap-4'>
              <p className='text-5xl w-130 py-4'>Get Your Ticket Online, Easy and Safely</p>
              <button className='bg-[#1ba000] text-[#fff]  cursor-pointer p-2 rounded-[10px] hover:bg-[#1ba000]/70 transition-all duration-300  items-center justify-center '>
         
                <span className=''>GET TICKET NOW</span>
              </button>
            </div>
            <div className='flex flex-col gap-4  max-[900px]:my-10 max-[900px]:items-center max-[900px]:text-center max-[900px]:flex-col max-[900px]:flex'>
              <strong>Choose Your Ticket</strong>
              <form action='' className='grid  gap-4 bg-[#fff] shadow-2xl  p-5 rounded-[10px] items-center  '>
                <div className='flex gap-4'>
                  <div className='border-1 border-[#8aff73] rounded-[10px] px-2 py-1 flex items-center gap-2'>
                    <i className='text-[#70ff53]'>
                      {' '}
                      <Icon name='directionarrow' />
                    </i>
                    <div className="relative">
                      <div
                        className="cursor-pointer px-2 py-1 bg-[fff] rounded"
                        onClick={() => setShowDiemDiDropdown(!showDiemDiDropdown)}
                      >
                        {selectedDiemDi || "Chọn điểm Xuất Phát"}
                      </div>
                      {showDiemDiDropdown && (
                        <div className="absolute   top-full mt-1 bg-[#fff] border rounded shadow z-10  w-full">
                          {diemDi.map((item) => (
                            <div
                              key={item.id}
                              className="px-3 py-1 hover:bg-[#e6ffe6] cursor-pointer text-[14px]"
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
 
                    <div className="relative">
                      <div
                        className="cursor-pointer px-2 py-1 bg-[#fff] rounded"
                        onClick={() => setShowDiemDenDropdown(!showDiemDenDropdown)}
                      >
                        {selectedDiemDen || "Chọn điểm đến"}
                      </div>
                      {showDiemDenDropdown && (
                        <div className="absolute left-0 top-full mt-1 bg-[#fff] border rounded shadow z-10 divide-y-1 divide-gray-500   min-w-max">
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
                  <span>Find Tickets</span>
                </button>
              </form>
            </div>
          </div>
          <div
            className='  bg-cover bg-no-repeat bg-center h-40 w-full flex items-end  '
            style={{ backgroundImage: `url(${duong})` }}
          >
            <img src={bus} className=' absolute h-20 bus-animation ' alt='' />
            <style>
              {`
        
              // @keyframes busMove {
              //   0% {
              //   right: -240px;
              //     transform: translatey(0);
              //   }
              //   100% {
                 
              //     right: 100%;
              //   }
              // }
                .bus-animation {
                  animation: busMove 20s  ease-in-out infinite;
                  position: absolute;
                }
              `}
            </style>
          </div>
        </section>
        <section className='   p-5'>
          <div className='text-center mb-10 px-4 md:px-[10%] lg:px-[20%] xl:px-[30%]'>
            <strong className=' text-[36px] '>Get Your Tickets With Just 3 Steps</strong>
            <p className='text-[#666] text-[20px] px-2 md:px-[10%] lg:px-[15%] xl:px-[20%]'>
              Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your
              great journey. !
            </p>
          </div>
          <div className=' grid grid-cols-3   gap-5 px-[25%]'>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-2xl flex flex-col items-center gap-3'>
              <div className=' flex flex-col   '>
                <div className=' text-end z-2 mb-[-30px] mr-[-20px]'>
                  <span className=' bg-[#0e9e4d] p-4 rounded-full '>01</span>
                </div>
                <i className='   text-[#1ba000] text-[30px] bg-[rgba(14,158,77,0.25)] px-7 py-5  bg-size-[20px] border-10 border-[rgba(14,158,77,0.1)] rounded-full'>
                  <Icon name='search' />
                </i>
              </div>
              <strong className='pt-2'>Search Your Bus</strong>
              <p className='px-[2%] text-center '>
                Choose your origin, destination,Just choose a Bus journey dates and search for buses
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
              <strong className='pt-2'>Choose The Ticket</strong>
              <p className='px-[2%] text-center '>
                Choose your origin, destination,Just a Bus for your great journey dates and search for buses
              </p>
            </div>

            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-2xl flex flex-col items-center gap-3'>
              <div className=' flex flex-col   '>
                <div className=' text-end z-2 mb-[-30px] mr-[-20px]'>
                  <span className=' bg-[#0e9e4d] p-4 rounded-full '>03</span>
                </div>
                <i className='   text-[#1ba000] text-[30px] bg-[rgba(14,158,77,0.25)] px-7 py-5  bg-size-[20px] border-10 border-[rgba(14,158,77,0.1)] rounded-full'>
                  <Icon name='bill' />
                </i>
              </div>
              <strong className='pt-2'>Pay Bill</strong>
              <p className='px-[2%] text-center '>
                Choose your origin, destination,choose a Bus for your great journey dates and search for buses
              </p>
            </div>
          </div>
        </section>

        <section className=' p-5'>
          <div>
            <div className='text-center mb-10 px-[30%]'>
              <strong className=' text-[36px] '>Our Amenities</strong>
              <p className='text-[#666] text-[20px] px-[20%]'>
                Have a look at our popular reason. why you should choose you bus.Just choose a Bus and get a ticket for
                your great journey!
              </p>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-5 px-[25%]'>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-1xl hover:shadow-[#1ba000] flex flex-col items-center gap-3'>
              <i className='text-[rgb(128,128,128)] border-b-5 text-[100px] hover:text-[#0e9e4d] transition duration-500 '>
                <Icon name='wifi' />
              </i>
              <div className='text-[30px] text-[rgb(146,146,146)]'>Wifi</div>
            </div>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-1xl hover:shadow-[#1ba000] flex flex-col items-center gap-3'>
              <i className='text-[rgb(128,128,128)] border-b-5 text-[100px] hover:text-[#0e9e4d] transition duration-500 '>
                <Icon name='pillow' />
              </i>
              <div className='text-[30px] text-[rgb(146,146,146)]'>Pillow</div>
            </div>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-1xl hover:shadow-[#1ba000] flex flex-col items-center gap-3'>
              <i className='text-[rgb(128,128,128)] border-b-5 text-[100px] hover:text-[#0e9e4d] transition duration-500 '>
                <Icon name='water' />
              </i>
              <div className='text-[30px] text-[rgb(146,146,146)]'>Water Bottle</div>
            </div>
            <div className='bg-[#fff] p-10 rounded-[10px] shadow-[#747474] shadow-md transition duration-300 hover:shadow-1xl hover:shadow-[#1ba000] flex flex-col items-center gap-3'>
              <i className='text-[rgb(128,128,128)] border-b-5 text-[100px] hover:text-[#0e9e4d] transition duration-500 '>
                <Icon name='drink'/>
              </i>
              <div className='text-[30px] text-[rgb(146,146,146)]'>Soft Drinks</div>
            </div>
          </div>
        </section>
        <section className='bg-[#ececec] mt-10 p-5'>
          <div className='text-center  px-[30%]'>
            <strong className=' text-[36px] '>Our Testimonials</strong>
            <p className='text-[#666] text-[20px] px-[20%]'>
              Have a look at our popular reason. why you should choose you bus. Just choose a Bus and get a ticket for
              your great journey!
            </p>
          </div>

          <div className=' '>
            <Feedback />
          </div>
        </section>
        <section className=' px-[30%]'>
          <div className='text-center mb-10 '>
            <strong className=' text-[36px] '>Latest Blog Posts</strong>
            <p className='text-[#666] text-[20px] px-[20%]'>
              Have a look at our popular reason. why you should choose you bus. Just choose a Bus and get a ticket for
              your great journey!
            </p>
          </div>
          <BlogPost />
        </section>
      </div>
    </>
  )
}
export default Home
