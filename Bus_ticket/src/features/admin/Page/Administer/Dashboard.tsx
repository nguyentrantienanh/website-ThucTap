import Icon from '../../../../icons/Icon'
import avatar from '../../../../assets/avatar.jpg'
import Statistics from './Statistics'
import { AccountVerified } from '../Account/UserAccount'

import { useState, useEffect } from 'react'
export default function Dashboard() {
  const ve = JSON.parse(localStorage.getItem('vedadat') || '[]')
  // hàm đếm
  const [countConfirmed, setCountConfirmed] = useState(0)
  const [countRejected, setCountRejected] = useState(0)
  const [countPending, setCountPending] = useState(0)

  useEffect(() => {
    const Confirmed = ve.filter((item: any) => item.status === 1).length
    const Rejected = ve.filter((item: any) => item.status === 2).length
    const Pending = ve.filter((item: any) => item.status === 3).length
    setCountConfirmed(Confirmed)
    setCountRejected(Rejected)
    setCountPending(Pending)
  })

  // hàm tính tổng doanh thu
  const totalConfirmed = ve
    .reduce((total: number, item: any) => {
      if (item.status === 1) {
        return total + item.price
      }
      return total
    }, 0)
    .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  const totalRejected = ve
    .reduce((total: number, item: any) => {
      if (item.status === 2) {
        return total + item.price
      }
      return total
      // tiền này là âm
    }, 0)
    .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  // hàm tính %  tỷ lệ thanh toán thành công
  const percent = ((countConfirmed / (countConfirmed + countRejected)) * 100).toFixed(2) + '%'
  // hàm tính % số lợi nhận (tiền thành công - tiền bị từ chối)
  const profit =
    (
      ((totalConfirmed.replace(/[^0-9.-]+/g, '') - totalRejected.replace(/[^0-9.-]+/g, '')) /
        totalConfirmed.replace(/[^0-9.-]+/g, '')) *
      100
    ).toFixed(2) + '%'

  return (
    <>
      <div className='flex flex-col h-full px-2 w-full py-4  pt-2 '>
        <div className='py-3 flex justify-between px-3 items-center text-center w-full shadow-md bg-[#fff] rounded-lg  '>
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
          <AccountVerified/>
        </div>

        {/* Vé */}
        <div>
          <div className=' bg-[#fff]  my-4  grid grid-cols-4'>
            {/* Thanh toán thành công */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-green-500 shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='check-circle' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>{countConfirmed}</span>
                <span className='text-[#fff]/70 text-sm'>Vé thanh toán thành công</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-green-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
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
                <span className='font-bold text-3xl'>{countRejected}</span>
                <span className='text-[#fff]/70 text-sm'>Vé thanh toán bị từ chối</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-red-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
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
                <span className='font-bold text-3xl'>{countPending}</span>
                <span className='text-[#fff]/70 text-sm'>Vé Đang chờ thanh toán</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-yellow-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
            {/* Thanh toán thành công */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-green-500 shadow-md'>
              <i className='absolute bottom-0 left-0 text-5xl text-[#fff]/20'>
                <Icon name='check-circle' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>{percent}</span>
                <span className='text-[#fff]/70 text-sm'>Tỷ lệ thanh toán thành công</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-green-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Doanh thu */}
        <div>
          <div className=' bg-[#fff]  my-4  grid grid-cols-3'>
            <div className='relative rounded-lg overflow-hidden m-2 bg-green-500 shadow-md'>
              <i className='absolute bottom-[-5px] left-0 text-5xl text-[#fff]/20'>
                <Icon name='money' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>{totalConfirmed}</span>
                <span className='text-[#fff]/70 text-sm'>Số tiền thanh toán thành công</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-green-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>

            {/* Tổng vé đã từ chối thanh toán */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-red-500 shadow-md'>
              <i className='absolute  bottom-[-5px] left-0 text-5xl text-[#fff]/20'>
                <Icon name='money' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>{totalRejected}</span>
                <span className='text-[#fff]/70 text-sm'>Số tiền thanh toán bị từ chối</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-red-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
                  View All
                </button>
              </div>
            </div>
            {/* Tổng vé  chờ thanh toán */}
            <div className='relative rounded-lg overflow-hidden m-2 bg-yellow-500 shadow-md'>
              <i className='absolute  bottom-[-5px] left-0 text-5xl text-[#fff]/20'>
                <Icon name='money' />
              </i>
              <div className='flex flex-col text-[#fff] items-end h-full p-4 gap-2 pl-2'>
                <span className='font-bold text-3xl'>{profit}</span>
                <span className='text-[#fff]/70 text-sm'>Lợi nhuận</span>
                <button className=' cursor-pointer px-3 py-1 bg-[#fff] text-yellow-600 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-100'>
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
