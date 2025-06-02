import logo from '../assets/logo/Bus_Ticker_Footer.png'
import Icon from '../icons/Icon'

function Footer() {
  return (
    <footer className='bg-gray-800 grid grid-cols-5 max-[900px]:grid-cols-2  max-[450px]:grid-cols-1 max-[900px]:items-center  max-[450px]:pr-0  max-[450px]:pl-5  px-5 text-[#f5f5f5] py-4'>
      <section className='flex flex-col col-span-2 max-[900px]:col-span-1  max-[900px]:py-5  gap-4'>
        <img src={logo} className=' h-30 w-40 ' alt='' />
        <span className='mt-[-30px]'>
          Book bus tickets effortlessly with ViserBus! Enjoy seamless travel planning, real-time updates, and secure
          payments. Whether it’s a daily commute or a long-distance trip, we’re here to make your journey smooth and
          stress-free.
        </span>
        <span className='flex gap-4 text-2xl'>
          <Icon name='facebook' />
          <Icon name='twitter' />
          <Icon name='instagram' />
          <Icon name='youtube' />
        </span>
      </section>
      <section className=' w-full items-center justify-center max-[900px]:py-5 max-[900px]:px-20  max-[450px]:px-0 '>
        <div className='mb-5'>
          <h1 className='font-bold text-[22px] text-[#12cb62]'>Useful Links</h1>
          <div className=' items-center '>
            <div className='w-20 h-0.5 bg-[#0E9E4Db3] mb-1'></div>
            <div className='w-10 h-0.5 bg-[#0E9E4Db3]'></div>
          </div>
        </div>
        <div>
          <ul className='flex justify-self-start  flex-col gap-4 max-[450px]:divide-y-2 w-full divide-[#b3b3b354]'>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              About
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              FAQs
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Blog
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Contact
            </li>
          </ul>
        </div>
      </section>

      <section className=' w-full justify-self-start max-[900px]:py-5   '>
        <div className='mb-5'>
          <h1 className='font-bold text-[22px] text-[#12cb62]'>Policies</h1>
          <div className=' items-center '>
            <div className='w-20 h-0.5 bg-[#0E9E4Db3] mb-1'></div>
            <div className='w-10 h-0.5 bg-[#0E9E4Db3]'></div>
          </div>
        </div>
        <div>
          <ul className='flex justify-self-start  flex-col gap-4  max-[450px]:divide-y-2 w-full divide-[#b3b3b354] '>
            <li className='hover:text-[#1ba000] transition-all py-1 duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Privace Policy
            </li>
            <li className='hover:text-[#1ba000] py-1 transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Terms of Service
            </li>
            <li className='hover:text-[#1ba000] py-1 transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Ticket Policies
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='arrow-right' />
              </i>
              Refund Policy
            </li>
          </ul>
        </div>
      </section>

      <section className=' w-full justify-self-start max-[900px]:py-5 max-[900px]:px-20  max-[450px]:px-0'>
        <div className='mb-5'>
          <h1 className='font-bold text-[22px] text-[#12cb62]'>Contact Info</h1>
          <div className=' items-center '>
            <div className='w-20 h-0.5 bg-[#0E9E4Db3] mb-1'></div>
            <div className='w-10 h-0.5 bg-[#0E9E4Db3]'></div>
          </div>
        </div>
        <div>
          <ul className='flex justify-self-start  flex-col gap-4 '>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='gps' />
              </i>
              Nha Trang, Khanh Hoa
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='phone' />
              </i>
              +84 972364028
            </li>
            <li className='hover:text-[#1ba000] transition-all duration-300 cursor-pointer'>
              <i className='pr-3'>
                <Icon name='email' />
              </i>
              nttanh@gmail.com
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
export default Footer
