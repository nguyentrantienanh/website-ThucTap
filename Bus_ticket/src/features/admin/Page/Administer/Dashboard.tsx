import Icon from '../../../../icons/Icon'
import avatar from '../../../../assets/avatar.jpg'
import Statistics from './Statistics'
export default function Dashboard() {
  return (
    <>
      <div className='flex flex-col h-full px-2 w-full py-4  pt-2 '>
        <div className='py-3 flex justify-between px-3 items-center text-center w-full   '>
          <h1 className='text-3xl font-bold text-gray-700'>Dashboard</h1>
          <div className='flex items-center gap-2'>
            <i className='text-gray-500  cursor-pointer pr-2'>
              <Icon name='notification' />
            </i>
            <img src={avatar} alt='' className=' w-10 h-10 rounded-full' />
            <span className='text-gray-700 font-semibold'>
              Admin{' '}
              <i className='text-gray-500 '>
                <Icon name='about' />
              </i>
            </span>
          </div>
        </div>

        {/* Account */}
        <div>
        
          <div className=' grid grid-cols-4  col-span-4  '>
            {/* Tổng người dùng */}
            <div className='relative  rounded-lg overflow-hidden m-2 bg-[#4F46E5] shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='users' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>người dùng</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-[#4F46E5] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Người dùng đã xác minh */}
            <div className='relative  rounded-lg overflow-hidden m-2 bg-[#10B981] shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='users' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>người dùng đã xác minh</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-[#10B981] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Người chưa xác minh email */}
            <div className='relative  rounded-lg overflow-hidden m-2 bg-[#F59E0B] shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='email' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>người dùng chưa xác minh Email</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-[#F59E0B] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Người chưa xác minh SMS */}
            <div className='relative  rounded-lg overflow-hidden m-2 bg-[#EF4444] shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='sms' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>người dùng chưa xác minh SMS</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-[#EF4444] rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Vé */}
        <div>
           
          <div className=' bg-[#fff]  my-4  grid grid-cols-3'>
            {/* Thanh toán thành công */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-green-500 shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='check-circle' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>Thanh toán thành công</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-green-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
            {/* Tổng vé  chờ thanh toán */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-yellow-500 shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='clock' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>Đang chờ thanh toán</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-yellow-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Tổng vé đã từ chối thanh toán */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-red-500 shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='x-circle' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>0</span>
                <span className='text-[#fff]/70 text-sm'>Thanh toán bị từ chối</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-red-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Xe */}
        <div>
       
          <div className=' bg-[#fff]  my-4  grid grid-cols-3'>
            {/* Xe có điều hòa */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-gradient-to-r from-green-400 to-green-600 shadow-lg'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/30'>
                <Icon name='bus' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>10</span>
                <span className='text-[#fff]/80 text-sm'>Xe có điều hòa</span>
                <button className='cursor-pointer px-3 py-1 bg-[#fff] text-green-700 rounded-md text-sm font-semibold shadow hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Xe không có điều hòa */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg'>
              <i className='absolute bottom-0 left-0 text-5xl text-black/20'>
                <Icon name='bus' />
              </i>
              <div className='flex flex-col text-black items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>5</span>
                <span className='text-black/70 text-sm'>Xe không có điều hòa</span>
                <button className='cursor-pointer px-3 py-1 bg-[#fff] text-yellow-800 rounded-md text-sm font-semibold shadow hover:bg-yellow-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Tổng số lượng xe */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/30'>
                <Icon name='bus' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>15</span>
                <span className='text-[#fff]/80 text-sm'>Tổng số lượng xe</span>
                <button className='cursor-pointer px-3 py-1 bg-[#fff] text-blue-700 rounded-md text-sm font-semibold shadow hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>

        <Statistics />
      </div>
    </>
  )
}
